import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicRoutes = [
  "/",
  "/massoterapia",
  "/massoterapia/quick-massage-corporativo",
  "/massoterapia/conteudo",
  "/massoterapia/conteudo/massagem-relaxante-como-funciona-e-cuidados",
  "/massoterapia/conteudo/shiatsu-como-funciona-e-cuidados",
  "/massoterapia/conteudo/tui-na-como-funciona-e-cuidados",
  "/massoterapia/conteudo/reflexologia-podal-beneficios-limites-e-cuidados",
  "/massoterapia/conteudo/thai-massage-como-funciona-e-cuidados",
  "/massoterapia/conteudo/quick-massage-como-funciona",
  "/massoterapia/conteudo/muitas-horas-sentado-desconforto",
  "/massoterapia/conteudo/tensao-nos-musculares",
  "/massoterapia/conteudo/quando-adiar-massagem",
  "/massoterapia/conteudo/antes-depois-massagem",
  "/massoterapia-curitiba",
  "/servicos",
  "/sobre",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/aviso-de-saude",
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function request(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${encodeURIComponent(pathname)}`,
  );
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return response;
}

async function render(pathname = "/") {
  const response = await request(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("renders production metadata without internal preview markers", async () => {
  const html = await render("/");
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
  assert.doesNotMatch(html, /codex-preview/i);
});

test("uses complete official-domain social metadata on every public route", async () => {
  const titles = new Set();
  const descriptions = new Set();
  const socialImages = new Set();

  for (const pathname of publicRoutes) {
    const html = await render(pathname);
    const pageUrl = `https://www.cleversouza.com${pathname === "/" ? "" : pathname}`;
    const canonical = `${pageUrl}${pathname === "/" ? "/" : ""}`;
    const canonicalPattern = escapeRegExp(canonical);
    const pageUrlPattern = escapeRegExp(pageUrl);

    assert.match(html, new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${canonicalPattern}["']`, "i"));
    assert.match(html, new RegExp(`<meta(?=[^>]+property=["']og:url["'])(?=[^>]+content=["']${pageUrlPattern}["'])[^>]*>`, "i"));
    assert.match(html, /<meta(?=[^>]+property=["']og:image["'])(?=[^>]+content=["']https:\/\/www\.cleversouza\.com\/social\/[^"']+\.(?:png|jpe?g)(?:\?[^"']*)?["'])[^>]*>/i);
    assert.match(html, /<meta(?=[^>]+property=["']og:image:width["'])(?=[^>]+content=["']1200["'])[^>]*>/i);
    assert.match(html, /<meta(?=[^>]+property=["']og:image:height["'])(?=[^>]+content=["']630["'])[^>]*>/i);
    assert.match(html, /<meta(?=[^>]+name=["']twitter:card["'])(?=[^>]+content=["']summary_large_image["'])[^>]*>/i);
    assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
    assert.doesNotMatch(html, /cleversouza\.com\.br/i);

    titles.add(html.match(/<title>([^<]+)<\/title>/i)?.[1]);
    descriptions.add(html.match(/<meta(?=[^>]+name=["']description["'])(?=[^>]+content=["']([^"']+)["'])[^>]*>/i)?.[1]);
    socialImages.add(html.match(/<meta(?=[^>]+property=["']og:image["'])(?=[^>]+content=["']([^"']+)["'])[^>]*>/i)?.[1]);
  }

  assert.equal(titles.size, publicRoutes.length);
  assert.equal(descriptions.size, publicRoutes.length);
  assert.equal(socialImages.size, publicRoutes.length);
  assert.equal(titles.has(undefined), false);
  assert.equal(descriptions.has(undefined), false);
  assert.equal(socialImages.has(undefined), false);
});

test("keeps unknown routes out of the index", async () => {
  const response = await request("/rota-inexistente");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(
    html,
    /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i,
  );
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*index,\s*follow[^"']*["'])[^>]*>/i);
});

test("positions the home page around the Clever Souza brand", async () => {
  const html = await render("/");
  assert.match(html, /<h1[^>]*>Clever Souza<\/h1>/i);
  assert.match(html, /Cleverson Batista de Souza/i);
  assert.match(html, /Curitiba · Paraná · Brasil/i);
  assert.match(html, /Clever Souza \| Site oficial/i);
  assert.match(html, /área Clever Souza Massoterapia/i);
  assert.match(html, /href="\/massoterapia"[^>]*>[\s\S]*?Massoterapia/i);
  assert.doesNotMatch(html, /Primeira frente|marca pessoal|Agendar/i);
  assert.doesNotMatch(html, /Cleverson Souza/i);
});

test("keeps massotherapy as an independent front", async () => {
  const html = await render("/massoterapia");
  assert.match(html, /<h1[^>]*>Cuidado corporal com clareza/i);
  assert.match(html, /massoterapia\/portrait\/clever-souza-jaleco\.webp/i);
  assert.match(html, /Clever Souza usando jaleco branco/i);
  assert.doesNotMatch(html, /logo-massoterapia-transparente\.png/i);
  assert.match(html, /Instagram da Clever Massoterapia/i);
  assert.match(html, /https:\/\/wa\.me\/5541992051173/i);
  assert.doesNotMatch(html, /Primeira frente|marca pessoal/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /id="protocolos"/i);
  assert.equal((html.match(/class="protocol-card-shell"/g) ?? []).length, 5);
  assert.match(html, /Clever Recharge/i);
  assert.match(html, /Clever Reset/i);
  assert.match(html, /Clever Release/i);
  assert.match(html, /Clever Flow/i);
  assert.match(html, /Clever Restore/i);
  assert.match(html, /massoterapia\/protocolos\/clever-recharge\.webp/i);
  assert.match(html, /massoterapia\/protocolos\/clever-reset\.webp/i);
  assert.match(html, /massoterapia\/protocolos\/clever-release\.webp/i);
  assert.match(html, /massoterapia\/protocolos\/clever-flow\.webp/i);
  assert.match(html, /massoterapia\/protocolos\/clever-restore\.webp/i);
  assert.match(html, /logo-horizontal-branca\.svg/i);
  assert.doesNotMatch(html, /protocol-card-number/i);
  assert.match(html, /href="\/massoterapia\/conteudo"/i);
  assert.match(html, /Qual Protocolo Clever devo escolher\?/i);
  assert.match(html, /Converse antes de escolher o protocolo/i);
  assert.doesNotMatch(html, /id="tecnicas"/i);
});

test("renders the Quick Massage corporate landing with a responsible NR-1 context", async () => {
  const html = await render("/massoterapia/quick-massage-corporativo");
  assert.match(html, /<h1[^>]*>Uma pausa planejada para empresas em um novo contexto de/i);
  assert.match(html, /Quick Massage para empresas · Curitiba/i);
  assert.match(html, /Esta página não apresenta Quick Massage como solução isolada de conformidade/i);
  assert.match(html, /26 de maio de 2026/i);
  assert.match(html, /NR-1 oficial · MTE/i);
  assert.match(html, /Manual GRO\/PGR · MTE/i);
  assert.match(html, /Guia psicossocial · MTE/i);
  assert.match(html, /Quick Massage realizada em cadeira específica/i);
  assert.match(html, /Enviar briefing pelo WhatsApp/i);
  assert.match(html, /Evite inserir dados de saúde de colaboradores/i);
  assert.match(html, /representação ilustrativa da frequência informada/i);
  assert.match(html, /https:\/\/wa\.me\/5541992051173/i);
  assert.match(html, /social\/quick-massage-corporativo-og-v3\.png/i);
  assert.match(html, /property="og:image:type"[^>]+content="image\/png"/i);
  assert.match(html, /name="og:image:secure_url"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/quick-massage-corporativo-og-v3\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/quick-massage-corporativo"/i);
  assert.doesNotMatch(html, /Quick Massage como solução isolada de conformidade com a NR-1/i);
});

test("renders the isolated Reflexologia campaign landing without parallel exits", async () => {
  const pathname = "/massoterapia/reflexologiapodal1";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Seu dia passa inteiro/i);
  assert.match(html, /pelos seus pés/i);
  assert.match(html, /A pausa começa onde o dia se apoia/i);
  assert.match(html, /Reflexologia Podal\.\s*<span>Uma pausa que começa por baixo/i);
  assert.match(html, /Intensidade não precisa significar excesso/i);
  assert.doesNotMatch(html, /Todo deslocamento deixa uma história silenciosa/i);
  assert.doesNotMatch(html, /Não é um diagnóstico/i);
  assert.doesNotMatch(html, /01 · Sustentação|06 · Reciprocidade/i);
  assert.match(html, />Sustentação<\/p>/i);
  assert.match(html, />Reciprocidade<\/p>/i);
  assert.match(html, /Como a experiência é conduzida/i);
  assert.match(html, />Preferências<\/h3>/i);
  assert.match(html, />Ajuste<\/h3>/i);
  assert.match(html, /Esta é uma experiência de bem-estar e autocuidado\. Ela não substitui avaliação, diagnóstico ou tratamento realizado por profissional habilitado\./i);
  assert.match(html, /O dia exigiu dos seus pés\. Agora, a atenção volta para eles\./i);
  assert.equal((html.match(/Quero conversar sobre a sessão/gi) ?? []).length, 2);
  assert.match(html, /https:\/\/wa\.me\/5541992051173/i);
  const ctaLinks = [
    ...html.matchAll(
      /<a(?=[^>]*href="([^"]*wa\.me\/5541992051173[^"]*)")(?=[^>]*data-event="click_reflexology_whatsapp")(?=[^>]*data-location="(reflexology_(?:reveal|final)_cta)")[^>]*>/gi,
    ),
  ];
  assert.equal(ctaLinks.length, 2);
  assert.equal(new Set(ctaLinks.map((match) => match[1])).size, 1);
  assert.deepEqual(
    new Set(ctaLinks.map((match) => match[2])),
    new Set(["reflexology_reveal_cta", "reflexology_final_cta"]),
  );
  assert.match(html, /brand\/logo-horizontal-branca\.svg/i);
  assert.match(html, /massoterapia\/reflexologia\/reflexologia-hero\.avif/i);
  assert.match(html, /massoterapia\/reflexologia\/reflexologia-experiencia\.avif/i);
  assert.match(html, /social\/reflexologia-podal-whatsapp-v3\.png/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/reflexologia-podal-whatsapp-v3\.png"/i);
  assert.match(html, /property="og:image:width"[^>]+content="1200"/i);
  assert.match(html, /property="og:image:height"[^>]+content="630"/i);
  assert.match(html, /name="twitter:card"[^>]+content="summary_large_image"/i);
  assert.match(html, /name="twitter:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/reflexologia-podal-whatsapp-v3\.png"/i);
  const socialImage = await readFile(
    new URL("../public/social/reflexologia-podal-whatsapp-v3.png", import.meta.url),
  );
  assert.equal(socialImage.readUInt32BE(16), 1200);
  assert.equal(socialImage.readUInt32BE(20), 630);
  assert.equal(socialImage[25], 3);
  assert.ok(socialImage.length < 300_000);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/reflexologiapodal1"/i);
  assert.match(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
  assert.doesNotMatch(html, /<header\b/i);
  assert.doesNotMatch(html, /<nav\b/i);
  assert.doesNotMatch(html, /<footer\b/i);
  assert.doesNotMatch(html, /breadcrumb/i);
  assert.doesNotMatch(html, /href="\/(?:massoterapia|sobre|contato|conteudos|servicos|)"/i);
  assert.doesNotMatch(html, /cura|desintoxica|estimula órgãos|trata ansiedade|trata insônia/i);
});

test("removes content from the global navigation", async () => {
  const html = await render("/");
  const header = html.match(/<header[\s\S]*?<\/header>/i)?.[0] ?? "";
  assert.doesNotMatch(header, />Conteúdo(?:s)?</i);
  assert.match(header, />Massoterapia</i);
  assert.match(header, />Contato</i);
});

test("publishes the massotherapy hub with twelve distinct articles", async () => {
  const html = await render("/massoterapia/conteudo");
  assert.match(html, /Massoterapia com clareza: técnicas, cuidados e evidências/i);
  assert.doesNotMatch(html, /logo-massoterapia\.webp/i);
  const articleLinks = new Set(
    [...html.matchAll(/href="(\/massoterapia\/conteudo\/[^"]+)"/g)].map(
      (match) => match[1],
    ),
  );
  assert.equal(articleLinks.size, 12);
  assert.match(html, /massoterapia-curitiba-primeira-sessao/i);
  assert.match(html, /diferencas-tecnicas-massoterapia/i);
  assert.match(html, /massagem-relaxante-540\.webp/i);
  assert.match(html, /shiatsu-540\.webp/i);
  assert.match(html, /tui-na-540\.webp/i);
  assert.match(html, /reflexologia-podal-540\.webp/i);
  assert.match(html, /thai-massage-540\.webp/i);
  assert.match(html, /quick-massage-540\.webp/i);
  assert.match(html, /diferencas-tecnicas-massoterapia-540\.webp/i);
  assert.match(html, /muitas-horas-sentado-desconforto/i);
  assert.match(html, /muitas-horas-sentado-540\.webp/i);
  assert.match(html, /tensao-nos-musculares/i);
  assert.match(html, /tensao-nos-musculares-540\.webp/i);
  assert.match(html, /quando-adiar-massagem/i);
  assert.match(html, /quando-adiar-massagem-540\.webp/i);
  assert.match(html, /antes-depois-massagem/i);
  assert.match(html, /antes-depois-massagem-540\.webp/i);
});

test("keeps every public route discoverable in the sitemap", async () => {
  const sitemap = await readFile(
    new URL("../public/sitemap.xml", import.meta.url),
    "utf8",
  );

  for (const pathname of publicRoutes) {
    const absolute = `https://www.cleversouza.com${pathname}`;
    assert.match(
      sitemap,
      new RegExp(`<loc>${escapeRegExp(absolute)}</loc>`),
      `Missing sitemap entry for ${pathname}`,
    );
  }
});

test("renders the approved article about before and after massage care", async () => {
  const pathname = "/massoterapia/conteudo/antes-depois-massagem";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Antes e depois da massagem: o que realmente vale a pena fazer\?/i);
  assert.match(html, /O desconforto não precisa ser suportado em silêncio para que a massagem “funcione”/i);
  assert.match(html, /Massagem pode ser utilizada em contextos de recuperação, e estudos encontraram redução de dor muscular de início tardio e de fadiga percebida em alguns contextos/i);
  assert.match(html, /Se ocorrer uma leve tontura ao se levantar, levantar devagar, permanecer parado por um momento e observar a evolução pode ser razoável/i);
  assert.doesNotMatch(html, /O conforto não precisa ser suportado em silêncio/i);
  assert.doesNotMatch(html, /Massagem pode ser utilizada em contextos de recuperação e algumas pessoas podem perceber menos dor muscular ou fadiga/i);
  assert.doesNotMatch(html, /Uma leve tontura ao se levantar pode ocorrer em algumas situações/i);
  assert.match(html, /href="\/massoterapia"[^>]*>Massoterapia<\/a>/i);
  assert.match(html, /BlogPosting/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Referências utilizadas/i);
  assert.match(html, /10\.1136\/bmjsem-2019-000614/i);
  assert.match(html, /antes-depois-massagem-1080\.webp/i);
  assert.match(html, /social\/antes-depois-massagem\.png/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/antes-depois-massagem"/i);
  assert.doesNotMatch(html, /\.com\.br/i);
});

test("renders the approved article about long periods seated", async () => {
  const pathname = "/massoterapia/conteudo/muitas-horas-sentado-desconforto";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Muitas horas sentado:/i);
  assert.match(html, /Associação não significa causa/i);
  assert.match(html, /Movimento não precisa significar seguir um cronômetro rígido/i);
  assert.match(html, /BlogPosting/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Referências utilizadas/i);
  assert.match(html, /muitas-horas-sentado-1080\.webp/i);
  assert.match(html, /social\/muitas-horas-sentado\.png/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/muitas-horas-sentado-desconforto"/i);
  assert.doesNotMatch(html, /\.com\.br/i);
});

test("renders the approved article about tension and muscle knots", async () => {
  const pathname = "/massoterapia/conteudo/tensao-nos-musculares";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Tensão e “nós musculares”:/i);
  assert.match(html, /A sensibilidade localizada tende a apresentar maior concordância entre examinadores/i);
  assert.match(html, /os mecanismos fisiopatológicos propostos para explicar o fenômeno/i);
  assert.match(html, /Atividade muscular se refere à ativação do músculo/i);
  assert.match(html, /sua identificação por palpação apresenta limitações, e seus mecanismos continuam sendo discutidos/i);
  assert.doesNotMatch(html, /A sensibilidade localizada tende a ser mais fácil de reconhecer/i);
  assert.doesNotMatch(html, /os mecanismos fisiopatológicos usados para explicar o fenômeno/i);
  assert.doesNotMatch(html, /Atividade muscular é a ativação do músculo/i);
  assert.doesNotMatch(html, /sua identificação por palpação e seus mecanismos possuem limitações/i);
  assert.match(html, /BlogPosting/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Referências utilizadas/i);
  assert.match(html, /href="\/massoterapia"/i);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/28098584/i);
  assert.match(html, /jamanetwork\.com\/journals\/jamanetworkopen\/fullarticle\/2821154/i);
  assert.match(html, /tensao-nos-musculares-1080\.webp/i);
  assert.match(html, /social\/tensao-nos-musculares\.png/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/tensao-nos-musculares"/i);
  assert.doesNotMatch(html, /\.com\.br/i);
});

test("renders the approved article about when to postpone massage", async () => {
  const pathname = "/massoterapia/conteudo/quando-adiar-massagem";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Quando adiar uma massagem\?/i);
  assert.match(html, /para a maioria das pessoas o risco de efeitos nocivos da massagem parece ser baixo/i);
  assert.doesNotMatch(html, /uma sessão adequadamente conduzida costuma apresentar baixo risco/i);
  assert.match(html, /podem exigir atendimento médico imediato, e não apenas o adiamento da massagem/i);
  assert.match(html, /A ideia de que o diagnóstico de câncer, por si só, torne qualquer massagem proibida não corresponde ao uso atual da massagem em cuidados oncológicos/i);
  assert.doesNotMatch(html, /A afirmação de que massagem espalha câncer não é sustentada/i);
  assert.match(html, /Não há boa evidência estabelecendo que uma massagem adequadamente realizada em uma gestação saudável cause aborto no primeiro trimestre, embora a evidência clínica direta específica seja limitada/i);
  assert.match(html, /BlogPosting/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Referências utilizadas/i);
  assert.match(html, /href="\/massoterapia"/i);
  assert.match(html, /cdc\.gov\/blood-clots\/about/i);
  assert.match(html, /acog\.org\/womens-health\/experts-and-stories\/ask-acog\/can-i-get-a-massage-while-pregnant/i);
  assert.match(html, /quando-adiar-massagem-1080\.webp/i);
  assert.match(html, /social\/quando-adiar-massagem\.png/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/quando-adiar-massagem"/i);
  assert.doesNotMatch(html, /\.com\.br/i);
});

test("renders researched article metadata, references and visible FAQ", async () => {
  const pathname =
    "/massoterapia/conteudo/reflexologia-podal-beneficios-limites-e-cuidados";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Reflexologia podal:/i);
  assert.match(html, /BlogPosting/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Referências consultadas/i);
  assert.match(html, /Australian Government, 2025/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/reflexologia-podal-beneficios-limites-e-cuidados"/i);
  assert.doesNotMatch(html, /logo-massoterapia\.webp/i);
});

test("renders the comparative techniques article with its table and six internal links", async () => {
  const pathname =
    "/massoterapia/conteudo/diferencas-tecnicas-massoterapia";
  const html = await render(pathname);
  assert.match(html, /<h1[^>]*>Massagem relaxante, Shiatsu, Tui-ná, Reflexologia, Thai Massage e Quick Massage/i);
  assert.match(html, /Comparação rápida: roupa, óleo, movimento e superfície/i);
  assert.match(html, /article-table/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /diferencas-tecnicas-massoterapia\.png/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/massoterapia\/conteudo\/diferencas-tecnicas-massoterapia"/i);
  for (const slug of [
    "massagem-relaxante-como-funciona-e-cuidados",
    "shiatsu-como-funciona-e-cuidados",
    "tui-na-como-funciona-e-cuidados",
    "reflexologia-podal-beneficios-limites-e-cuidados",
    "thai-massage-como-funciona-e-cuidados",
    "quick-massage-como-funciona",
  ]) {
    assert.match(html, new RegExp(`href="/massoterapia/conteudo/${slug}"`));
  }
});

test("redirects legacy massotherapy content routes with a permanent 301", async () => {
  const hub = await request("/conteudos");
  assert.equal(hub.status, 301);
  assert.equal(
    new URL(hub.headers.get("location")).pathname,
    "/massoterapia/conteudo",
  );

  const article = await request("/conteudos/massagem-relaxante-e-terapeutica");
  assert.equal(article.status, 301);
  assert.equal(
    new URL(article.headers.get("location")).pathname,
    "/massoterapia/conteudo/massagem-relaxante-como-funciona-e-cuidados",
  );
});

test("publishes the confirmed WhatsApp on the contact page", async () => {
  const html = await render("/contato");
  assert.match(html, /\(41\) 99205-1173/i);
  assert.match(html, /https:\/\/wa\.me\/5541992051173/i);
  assert.match(html, /Falar pelo WhatsApp/i);
  assert.match(html, /Para uma conversa mais objetiva/i);
  assert.match(html, /Evite enviar dados de saúde sensíveis/i);
  assert.doesNotMatch(html, /Assuntos institucionais|Primeira frente/i);
});
