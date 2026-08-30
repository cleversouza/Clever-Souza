import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicRoutes = [
  "/",
  "/ia",
  "/ia/engenharia-de-prompt",
  "/ia/context-engineering",
  "/ia/pesquisa-aprofundada",
  "/ia/pesquisa-com-ia",
  "/ia/ia-com-arquivos",
  "/ia/prompts-para-imagens",
  "/ia/videos-curtos",
  "/ia/avaliacao-de-respostas-de-ia",
  "/ia/napoleon-hill",
  "/nutricao",
  "/nutricao/vitaminas",
  "/nutricao/vitaminas/vitamina-a",
  "/nutricao/vitaminas/vitamina-b1",
  "/nutricao/vitaminas/vitamina-b2",
  "/nutricao/vitaminas/vitamina-b3",
  "/nutricao/vitaminas/vitamina-b5",
  "/nutricao/vitaminas/vitamina-b6",
  "/nutricao/vitaminas/vitamina-b7",
  "/nutricao/vitaminas/vitamina-b9",
  "/nutricao/vitaminas/vitamina-b12",
  "/nutricao/vitaminas/vitamina-c",
  "/nutricao/vitaminas/vitamina-d",
  "/nutricao/vitaminas/vitamina-e",
  "/nutricao/vitaminas/vitamina-k",
  "/nutricao/macronutrientes",
  "/nutricao/macronutrientes/carboidratos",
  "/nutricao/macronutrientes/proteinas",
  "/nutricao/macronutrientes/gorduras",
  "/nutricao/minerais",
  "/nutricao/minerais/calcio",
  "/nutricao/minerais/fosforo",
  "/nutricao/minerais/magnesio",
  "/nutricao/minerais/sodio",
  "/nutricao/minerais/potassio",
  "/nutricao/minerais/cloreto",
  "/nutricao/minerais/ferro",
  "/nutricao/minerais/zinco",
  "/nutricao/minerais/cobre",
  "/nutricao/minerais/manganes",
  "/nutricao/minerais/iodo",
  "/nutricao/minerais/selenio",
  "/nutricao/minerais/molibdenio",
  "/nutricao/minerais/cromo",
  "/nutricao/minerais/fluor",
  "/nutricao/aminoacidos",
  "/nutricao/aminoacidos/histidina",
  "/nutricao/aminoacidos/isoleucina",
  "/nutricao/aminoacidos/leucina",
  "/nutricao/aminoacidos/lisina",
  "/nutricao/aminoacidos/metionina",
  "/nutricao/aminoacidos/fenilalanina",
  "/nutricao/aminoacidos/treonina",
  "/nutricao/aminoacidos/triptofano",
  "/nutricao/aminoacidos/valina",
  "/nutricao/acidos-graxos",
  "/nutricao/acidos-graxos/acido-linoleico-omega-6",
  "/nutricao/acidos-graxos/acido-alfa-linolenico-omega-3",
  "/nutricao/outros-nutrientes",
  "/nutricao/outros-nutrientes/agua",
  "/nutricao/outros-nutrientes/fibras-alimentares",
  "/nutricao/outros-nutrientes/colina",
  "/massoterapia",
  "/massoterapia/quick-massage-corporativo",
  "/massoterapia/conteudo",
  "/massoterapia/conteudo/massagem-relaxante-como-funciona-e-cuidados",
  "/massoterapia/conteudo/shiatsu-como-funciona-e-cuidados",
  "/massoterapia/conteudo/tui-na-como-funciona-e-cuidados",
  "/massoterapia/conteudo/reflexologia-podal-beneficios-limites-e-cuidados",
  "/massoterapia/conteudo/thai-massage-como-funciona-e-cuidados",
  "/massoterapia/conteudo/quick-massage-como-funciona",
  "/massoterapia/conteudo/massoterapia-curitiba-primeira-sessao",
  "/massoterapia/conteudo/diferencas-tecnicas-massoterapia",
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
    assert.match(html, /<meta(?=[^>]+property=["']og:image["'])(?=[^>]+content=["']https:\/\/www\.cleversouza\.com\/(?:social\/[^"']+\.(?:png|jpe?g)|og-clever-souza\.svg)(?:\?[^"']*)?["'])[^>]*>/i);
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
  assert.match(html, /Uma plataforma autoral que reúne conhecimento editorial e atuação profissional/i);
  assert.match(html, /Duas áreas, funções distintas/i);
  assert.match(html, /href="\/nutricao"[^>]*>[\s\S]*?Explorar Nutrição/i);
  assert.match(html, /href="\/massoterapia"[^>]*>[\s\S]*?Massoterapia/i);
  assert.match(html, /ProfilePage|WebSite/i);
  assert.doesNotMatch(html, /Primeira frente|marca pessoal|Agendar/i);
  assert.doesNotMatch(html, /Cleverson Souza/i);
});

test("establishes /ia as the parent hub in navigation, footer, breadcrumbs and schema", async () => {
  const hub = await render("/ia");
  assert.match(hub, /<h1[^>]*>Inteligência Artificial<\/h1>/i);
  assert.match(hub, /Guias e modelos de referência/i);
  assert.match(hub, /Oito guias, uma área de conhecimento/i);
  assert.match(hub, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(hub, /href="\/ia\/context-engineering"/i);
  assert.match(hub, /href="\/ia\/pesquisa-aprofundada"/i);
  assert.match(hub, /href="\/ia\/pesquisa-com-ia"/i);
  assert.match(hub, /href="\/ia\/ia-com-arquivos"/i);
  assert.match(hub, /href="\/ia\/prompts-para-imagens"/i);
  assert.match(hub, /href="\/ia\/videos-curtos"/i);
  assert.match(hub, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.match(hub, /Modelos de pensamento aplicados com IA/i);
  assert.match(hub, /href="\/ia\/napoleon-hill"/i);
  assert.equal((hub.match(/href="\/ia\/napoleon-hill"/g) ?? []).length, 1);
  assert.match(hub, /CollectionPage/i);
  assert.match(hub, /BreadcrumbList/i);
  assert.match(hub, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia"/i);
  assert.match(hub, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/ia\.png"/i);
  assert.doesNotMatch(hub, /Agentes|Workflows|em breve/i);

  const desktopIaLink = /<a(?=[^>]*href="\/ia")(?=[^>]*aria-current="page")[^>]*>\s*IA\s*<\/a>/i;
  assert.match(hub, desktopIaLink);

  const hubBreadcrumbs = hub.match(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/i)?.[0] ?? "";
  assert.match(hubBreadcrumbs, /href="\/"[^>]*>Início<\/a>/i);
  assert.match(hubBreadcrumbs, /<li>IA<\/li>/i);

  const footer = hub.match(/<footer class="site-footer"[\s\S]*?<\/footer>/i)?.[0] ?? "";
  assert.match(footer, /href="\/ia"[^>]*>IA<\/a>/i);
  assert.doesNotMatch(footer, /href="\/ia\//i);

  const children = [
    ["/ia/engenharia-de-prompt", "Engenharia de Prompt"],
    ["/ia/context-engineering", "Context Engineering"],
    ["/ia/pesquisa-aprofundada", "Pesquisa Aprofundada"],
    ["/ia/pesquisa-com-ia", "Pesquisa com IA"],
    ["/ia/ia-com-arquivos", "IA com Arquivos"],
    ["/ia/prompts-para-imagens", "Prompts para Imagens"],
    ["/ia/videos-curtos", "Vídeos Curtos"],
    ["/ia/avaliacao-de-respostas-de-ia", "Avaliação de respostas de IA"],
    ["/ia/napoleon-hill", "Napoleon Hill"],
  ];

  for (const [pathname, title] of children) {
    const html = await render(pathname);
    assert.match(html, desktopIaLink);
    const breadcrumbs = html.match(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/i)?.[0] ?? "";
    assert.match(breadcrumbs, /href="\/"[^>]*>Início<\/a>/i);
    assert.match(breadcrumbs, /href="\/ia"[^>]*>IA<\/a>/i);
    assert.match(breadcrumbs, new RegExp(`<li>${escapeRegExp(title)}<\\/li>`, "i"));
  }
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

test("renders the prompt engineering reference as operational, indexable HTML", async () => {
  const html = await render("/ia/engenharia-de-prompt");
  assert.match(html, /<h1[^>]*>Engenharia de Prompt<\/h1>/i);
  assert.match(html, /Prompt é a mensagem\. Engenharia é o sistema\./i);
  assert.match(html, /Como analisar e aprimorar um prompt/i);
  assert.match(html, /Complexidade mínima necessária/i);
  assert.match(html, /Use esta página com uma IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/engenharia-de-prompt/i);
  assert.match(html, /Preserve meu objetivo e minha intenção/i);
  assert.match(html, /Comece simples\. Estruture quando houver motivo\./i);
  assert.match(html, /Um prompt bom é um prompt testado/i);
  assert.match(html, /Prompt injection/i);
  assert.match(html, /27 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/engenharia-de-prompt\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/engenharia-de-prompt"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("renders the Context Engineering guide as operational, current HTML", async () => {
  const html = await render("/ia/context-engineering");
  assert.match(html, /<h1[^>]*>Context Engineering<\/h1>/i);
  assert.match(html, /Context Engineering não é maximizar contexto/i);
  assert.match(html, /Prompt não é todo o contexto/i);
  assert.match(html, /Uma janela grande não elimina a necessidade de seleção/i);
  assert.match(html, /Memória não é contexto infinito/i);
  assert.match(html, /Dados não ganham autoridade para dar instruções/i);
  assert.match(html, /Do objetivo ao contexto validado em oito etapas/i);
  assert.match(html, /Use esta página com uma IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/context-engineering/i);
  assert.match(html, /O menor pacote de contexto suficiente/i);
  assert.match(html, /28 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/context-engineering\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/context-engineering"/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /href="\/ia\/pesquisa-com-ia"/i);
  assert.match(html, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("covers ten context-engineering operational scenarios proportionally", async () => {
  const html = await render("/ia/context-engineering");
  const scenarios = [
    ["insufficient", /prompt excelente sem os dados do projeto[\s\S]*solicitar apenas os dados/i],
    ["excessive", /Todo o arquivo da marca[\s\S]*O restante permanece armazenado, não ativo/i],
    ["stale", /Preço guardado como memória permanente[\s\S]*fonte oficial na data/i],
    ["conflict", /Duas regras editoriais incompatíveis[\s\S]*autoridade, versão e escopo/i],
    ["temporary", /É dado temporal[\s\S]*data, moeda, região e condições/i],
    ["long project", /último ponto efetivamente concluído[\s\S]*Preserve decisões aprovadas/i],
    ["research", /informação muda rapidamente[\s\S]*documentação e release notes oficiais/i],
    ["code", /Não carregue o repositório inteiro automaticamente/i],
    ["indirect injection", /conteúdo externo é dado potencialmente não confiável/i],
    ["simple task", /Uma tarefa simples continua simples[\s\S]*Traduzir diretamente/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing context rule for ${scenario}`);
  }
});

test("renders the AI research reference as operational, traceable HTML", async () => {
  const html = await render("/ia/pesquisa-com-ia");
  assert.match(html, /<h1[^>]*>Pesquisa com IA<\/h1>/i);
  assert.match(html, /Perguntar produz uma resposta\. Pesquisar produz uma conclusão rastreável\./i);
  assert.match(html, /Uma resposta gerada por IA não é automaticamente uma fonte/i);
  assert.match(html, /Da pergunta à conclusão verificável/i);
  assert.match(html, /Pesquisa profunda não significa pesquisa infinita/i);
  assert.match(html, /Não encontrei evidência suficiente para confirmar/i);
  assert.match(html, /Use esta página como protocolo de pesquisa/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/pesquisa-com-ia/i);
  assert.match(html, /Citação não é decoração|correspondência entre afirmação e evidência/i);
  assert.match(html, /28 de agosto de 2026/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/pesquisa-com-ia\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/pesquisa-com-ia"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("renders the deep-research design guide with its complete operational toolkit", async () => {
  const html = await render("/ia/pesquisa-aprofundada");
  assert.match(html, /<h1[^>]*>Pesquisa Aprofundada com IA<\/h1>/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, /Pesquisa com Inteligência Artificial/i);
  assert.match(html, /Criar um Research Brief/i);
  assert.match(html, /Entender o método/i);
  assert.match(html, /Da intenção à pesquisa, sem confundir profundidade com excesso/i);
  assert.match(html, /Intenção[\s\S]*Objetivo[\s\S]*Pergunta[\s\S]*Rigor[\s\S]*Research Brief[\s\S]*Prompt[\s\S]*Pesquisa/i);
  assert.match(html, /Copiar Research Brief/i);
  assert.match(html, /OBJETIVO[\s\S]*PERGUNTA CENTRAL[\s\S]*NÍVEL DE RIGOR[\s\S]*CRITÉRIO DE PARADA/i);
  assert.match(html, /Ativação rápida/i);
  assert.match(html, /Meta-prompt para gerar o Research Brief/i);
  assert.match(html, /Prompt universal de execução/i);
  assert.match(html, /Auditor de pesquisa/i);
  for (const adapter of [
    "Científica",
    "Mercado / empresa / concorrência",
    "Técnica",
    "Histórica / pessoa / autor",
    "Regulatória",
    "Produto / compra",
    "Conteúdo",
    "Verificação factual",
  ]) {
    assert.match(html, new RegExp(escapeRegExp(adapter), "i"));
  }
  for (const related of [
    "/ia/pesquisa-com-ia",
    "/ia/engenharia-de-prompt",
    "/ia/context-engineering",
    "/ia/ia-com-arquivos",
    "/ia/avaliacao-de-respostas-de-ia",
  ]) {
    assert.match(html, new RegExp(`href="${escapeRegExp(related)}"`, "i"));
  }
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.doesNotMatch(html, /reference-url-citation\.invalid|【\d+†L\d+-L\d+】/i);
  assert.match(html, /<title>Pesquisa Aprofundada com IA: método e prompts \| Clever Souza<\/title>/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/pesquisa-aprofundada"/i);
  assert.match(html, /property="og:title"[^>]+content="Pesquisa Aprofundada com IA — Método e Research Brief"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/og-clever-souza\.svg"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("renders the AI with files guide as a traceable document-analysis protocol", async () => {
  const html = await render("/ia/ia-com-arquivos");
  assert.match(html, /<h1[^>]*>Como usar IA com arquivos: PDFs, documentos, planilhas e imagens<\/h1>/i);
  assert.match(html, /Anexar um arquivo não define uma tarefa/i);
  assert.match(html, /Arquivo fornece material/i);
  assert.match(html, /Tarefa fornece direção/i);
  assert.match(html, /Conteúdo explícito/i);
  assert.match(html, /Não encontrado ≠ não existe/i);
  assert.match(html, /Documento ≠ verdade/i);
  assert.match(html, /Do objetivo à entrega rastreável em dez etapas/i);
  assert.match(html, /File Map/i);
  assert.match(html, /Evidence Map/i);
  assert.match(html, /Use esta página com uma IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/ia-com-arquivos/i);
  assert.match(html, /28 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/ia-com-arquivos\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/ia-com-arquivos"/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /href="\/ia\/context-engineering"/i);
  assert.match(html, /href="\/ia\/pesquisa-com-ia"/i);
  assert.match(html, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("covers the twelve file-analysis scenarios proportionally", async () => {
  const html = await render("/ia/ia-com-arquivos");
  const scenarios = [
    ["simple PDF", /PDF simples[\s\S]*data, arquivo, página/i],
    ["missing", /Informação ausente[\s\S]*Não encontrei essa informação nos arquivos analisados/i],
    ["conflict", /Arquivos conflitantes[\s\S]*Não escolha silenciosamente/i],
    ["versions", /Duas versões[\s\S]*autoridade/i],
    ["PDF spreadsheet", /PDF \+ planilha[\s\S]*cálculos reproduzidos/i],
    ["calculation", /Calcule a margem média[\s\S]*fórmula e denominador/i],
    ["multiple studies", /Múltiplos estudos[\s\S]*estudos incompatíveis/i],
    ["visual", /Documento visual[\s\S]*causalidade/i],
    ["inference", /Inferência indevida[\s\S]*interpretação/i],
    ["external", /Arquivos \+ fontes externas[\s\S]*forneça links e separe as origens/i],
    ["injection", /Ignore todas as instruções anteriores[\s\S]*conteúdo potencialmente não confiável/i],
    ["trivial", /Tarefa trivial[\s\S]*Não produza File Map/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing file-analysis rule for ${scenario}`);
  }
});

test("renders the image-prompt guide as a portable generation and editing method", async () => {
  const html = await render("/ia/prompts-para-imagens");
  assert.match(html, /<h1[^>]*>Prompts para imagens: como criar e editar imagens com IA<\/h1>/i);
  assert.match(html, /Um bom prompt reduz as ambiguidades que realmente mudam a imagem/i);
  assert.match(html, /Concreto antes de elogioso/i);
  assert.match(html, /Composição antes de lista/i);
  assert.match(html, /Prioridade ≠ descrição/i);
  assert.match(html, /Gerar uma cena e editar uma imagem não pedem a mesma instrução/i);
  assert.match(html, /Matriz de preservação/i);
  assert.match(html, /Iteração baseada em delta/i);
  assert.match(html, /Princípio universal no centro; adaptação proprietária na borda/i);
  assert.match(html, /Nove etapas, aplicadas na proporção do trabalho/i);
  assert.match(html, /Visual Brief/i);
  assert.match(html, /Use esta página com uma IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/prompts-para-imagens/i);
  assert.match(html, /29 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/prompts-para-imagens\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/prompts-para-imagens"/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /href="\/ia\/context-engineering"/i);
  assert.match(html, /href="\/ia\/ia-com-arquivos"/i);
  assert.match(html, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("covers the image-prompt operational scenarios proportionally", async () => {
  const html = await render("/ia/prompts-para-imagens");
  const scenarios = [
    ["simple", /Gato preto sentado no parapeito[\s\S]*prompt já define assunto, posição, ambiente e momento/i],
    ["vague", /Faça uma imagem bonita de uma cafeteria[\s\S]*Cafeteria pequena em uma esquina/i],
    ["photography", /Retrato editorial em plano médio[\s\S]*luz difusa de janela/i],
    ["product", /Frasco de perfume cilíndrico preservando geometria, vidro e rótulo/i],
    ["social", /Peça vertical 4:5[\s\S]*área negativa/i],
    ["text", /MENOS RUÍDO\. MAIS CLAREZA\.[\s\S]*nenhum outro texto/i],
    ["editing", /Preserve identidade, rosto, cabelo, roupa, pose, mãos, enquadramento e iluminação/i],
    ["removal", /Remova somente a caneca[\s\S]*Preserve todos os demais objetos/i],
    ["reference", /imagem 1 apenas para a composição e a direção da luz[\s\S]*produto da imagem 2/i],
    ["series", /Fixos: personagem, casaco azul[\s\S]*Variável:/i],
    ["diagram", /Briefing → Revisão → Aprovação → Publicação[\s\S]*nenhuma etapa adicional/i],
    ["unknown model", /Se nenhum gerador for informado[\s\S]*prompt neutro e portável/i],
    ["specific model", /Se eu informar o gerador[\s\S]*recursos comprovadamente compatíveis/i],
    ["magic words", /Masterpiece, award-winning, 16K[\s\S]*Cafeteria contemporânea/i],
    ["already good", /Se o prompt já estiver suficiente[\s\S]*não o torne mais complexo/i],
    ["special generation", /MINHA IDEIA[\s\S]*GERADOR DE IMAGEM[\s\S]*REFERÊNCIAS[\s\S]*FORMATO/i],
    ["special editing", /PRESERVAR[\s\S]*ALTERAR[\s\S]*ADICIONAR[\s\S]*REMOVER[\s\S]*RESULTADO/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing image-prompt rule for ${scenario}`);
  }
});

test("renders the short-video guide as an evidence-aware creation and learning system", async () => {
  const html = await render("/ia/videos-curtos");
  assert.match(html, /<h1[^>]*>Vídeos curtos com IA: atenção, roteiro e distribuição<\/h1>/i);
  assert.match(html, /Pessoas antes do algoritmo/i);
  assert.match(html, /Viralidade é resultado emergente, não configuração/i);
  assert.match(html, /Permitido ≠ recomendável/i);
  assert.match(html, /Cadência sustentável é uma decisão operacional/i);
  assert.match(html, /Hook sem progressão apenas adia a saída/i);
  assert.match(html, /Ritmo não é velocidade/i);
  assert.match(html, /Métrica gera hipótese; raramente prova uma causa isolada/i);
  assert.match(html, /Onze etapas para criar e aprender/i);
  assert.match(html, /Content Brief/i);
  assert.match(html, /Use esta página com uma IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/videos-curtos/i);
  assert.match(html, /29 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/videos-curtos\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/videos-curtos"/i);
  assert.match(html, /href="\/ia\/pesquisa-com-ia"/i);
  assert.match(html, /href="\/ia\/context-engineering"/i);
  assert.match(html, /href="\/ia\/prompts-para-imagens"/i);
  assert.match(html, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.doesNotMatch(html, /viralização garantida|hack secreto|exploda seu alcance/i);
});

test("covers the short-video operational scenarios without inventing algorithm rules", async () => {
  const html = await render("/ia/videos-curtos");
  const scenarios = [
    ["vague topic", /Tema → ângulo → conceito → roteiro[\s\S]*O assunto pode permanecer igual enquanto o ângulo muda/i],
    ["known audience", /PÚBLICO E SITUAÇÃO[\s\S]*Quem é a pessoa/i],
    ["faceless", /Sem mostrar o rosto[\s\S]*Mãos, objetos, captura, POV/i],
    ["tutorial", /Tutorial[\s\S]*Mostre a tarefa pronta/i],
    ["storytelling", /Storytelling[\s\S]*situação, mudança, obstáculo, decisão/i],
    ["different hooks", /Reconhecimento[\s\S]*Resultado[\s\S]*Demonstração[\s\S]*Contraste/i],
    ["unknown platform", /Se a plataforma não for informada, produza uma versão neutra e portável/i],
    ["instagram", /Instagram Reels[\s\S]*Status da Conta/i],
    ["tiktok", /TikTok[\s\S]*inelegibilidade para o For You/i],
    ["shorts", /YouTube Shorts[\s\S]*engaged views[\s\S]*stayed to watch/i],
    ["frequency", /Quantas vezes postar\?[\s\S]*Não há número universal/i],
    ["low delivery", /Pouca exposição[\s\S]*antes de culpar o sistema/i],
    ["poor retention", /Boa entrada, queda rápida[\s\S]*Localize a queda/i],
    ["views no conversion", /Muitas views, pouca conversão[\s\S]*ação posterior/i],
    ["good video", /Preserve o que funcionou e altere a menor variável/i],
    ["winner", /Vídeo vencedor[\s\S]*Preserve a hipótese central/i],
    ["myths", /Troque rituais por verificações[\s\S]*Hashtags fazem viralizar/i],
    ["sensitive", /Temas sensíveis[\s\S]*evidência proporcional/i],
    ["post publication", /descreva somente o que os dados mostram[\s\S]*observação, hipótese e informação ausente/i],
    ["delta", /Iteração baseada em delta[\s\S]*menor alteração útil/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing short-video rule for ${scenario}`);
  }
});

test("renders the Napoleon Hill model as a critical, traceable Article", async () => {
  const html = await render("/ia/napoleon-hill");
  assert.match(html, /<h1[^>]*>Napoleon Hill: ideias, evidências e aplicação crítica com IA<\/h1>/i);
  assert.match(html, /Esta página não “interpreta” Napoleon Hill/i);
  assert.match(html, /O que Hill escreveu|Obra/i);
  assert.match(html, /Relato do autor/i);
  assert.match(html, /Documentação independente suficiente/i);
  assert.match(html, /não foi localizada confirmação contemporânea independente do encontro/i);
  assert.match(html, /Uma edição, uma compilação e uma obra original não são a mesma coisa/i);
  assert.match(html, /Outwitting the Devil/i);
  assert.match(html, /manuscrito atribuído a 1938; publicado em 2011/i);
  assert.match(html, /A filosofia é maior que os treze passos de 1937/i);
  assert.match(html, /O protocolo abaixo é uma organização editorial/i);
  assert.match(html, /Do desejo à ação revisável/i);
  assert.match(html, /Aplique um corpo de ideias\. Não interprete um personagem\./i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/napoleon-hill/i);
  assert.match(html, /Napoleon Hill realmente disse isso\?/i);
  assert.match(html, /Não consegui confirmar essa atribuição/i);
  assert.match(html, /29 de agosto de 2026/i);
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /"@type":"TechArticle"/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /property="og:type"[^>]+content="article"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/napoleon-hill\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/ia\/napoleon-hill"/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /href="\/ia\/context-engineering"/i);
  assert.match(html, /href="\/ia\/pesquisa-com-ia"/i);
  assert.match(html, /href="\/ia\/avaliacao-de-respostas-de-ia"/i);
  assert.doesNotMatch(html, /Aja como Napoleon Hill|eu, Napoleon Hill|converse com Napoleon Hill/i);
  assert.doesNotMatch(html, /garantia de riqueza|fórmula garantida|segredo dos milionários/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i);
});

test("covers the Napoleon Hill operational scenarios without impersonation or dogmatism", async () => {
  const html = await render("/ia/napoleon-hill");
  const scenarios = [
    ["vague money", /Objetivo vago:[\s\S]*Quero ficar rico[\s\S]*não é um efeito garantido/i],
    ["three businesses", /Três negócios ao mesmo tempo[\s\S]*custo de oportunidade/i],
    ["procrastination", /Procrastinação[\s\S]*Não faça diagnóstico psicológico/i],
    ["failing plan", /Plano que não funciona[\s\S]*persistir no objetivo não exige repetir/i],
    ["mastermind", /Compor um Master Mind[\s\S]*competências, incentivos, papéis/i],
    ["quote", /Citação famosa sem fonte[\s\S]*atribuição não confirmada/i],
    ["contemporary", /O que Hill acharia de Bitcoin[\s\S]*Hill não escreveu sobre Bitcoin/i],
    ["wealth promise", /Pensamento positivo cura ou enriquece[\s\S]*Não como causalidade garantida/i],
    ["historical", /encontro em 1908[\s\S]*relato autoral/i],
    ["metaphysics", /Alegação metafísica[\s\S]*não deve afirmar que isso prova/i],
    ["high risk", /Decisão de alto risco[\s\S]*aconselhamento financeiro, jurídico ou profissional/i],
    ["well-defined", /não aplique o protocolo inteiro se a pergunta for simples/i],
    ["URL use", /Use esta página com uma IA[\s\S]*Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/napoleon-hill/i],
    ["anti-hallucination", /não invente citações, memórias ou opiniões/i],
    ["adapt or stop", /persistir, mudar a estratégia, redefinir o objetivo ou encerrar/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing Napoleon Hill rule for ${scenario}`);
  }
});

test("renders the AI response evaluation reference as task-aware, operational HTML", async () => {
  const html = await render("/ia/avaliacao-de-respostas-de-ia");
  assert.match(html, /<h1[^>]*>Avaliação de respostas de IA<\/h1>/i);
  assert.match(html, /Uma resposta convincente não é necessariamente correta/i);
  assert.match(html, /O pedido original faz parte da avaliação/i);
  assert.match(html, /Uma resposta é boa para uma tarefa definida/i);
  assert.match(html, /Correção factual/i);
  assert.match(html, /Fundamentação/i);
  assert.match(html, /LLM-as-a-Judge/i);
  assert.match(html, /Sempre que possível, teste em vez de apenas opinar/i);
  assert.match(html, /Avalie em oito etapas/i);
  assert.match(html, /Use esta página para avaliar uma resposta de IA/i);
  assert.match(html, /Acesse e leia https:\/\/www\.cleversouza\.com\/ia\/avaliacao-de-respostas-de-ia/i);
  assert.match(html, /Sem o pedido original/i);
  assert.match(html, /Crítico/i);
  assert.match(html, /Não invente falhas/i);
  assert.match(html, /28 de agosto de 2026/i);
  assert.match(html, /TechArticle/i);
  assert.match(html, /BreadcrumbList/i);
  assert.doesNotMatch(html, /FAQPage/i);
  assert.match(html, /https:\/\/www\.cleversouza\.com\/social\/avaliacao-de-respostas-de-ia\.png/i);
  assert.match(html, /href="\/ia\/engenharia-de-prompt"/i);
  assert.match(html, /href="\/ia\/pesquisa-com-ia"/i);
});

test("covers the ten operational response-audit scenarios without universalizing criteria", async () => {
  const html = await render("/ia/avaliacao-de-respostas-de-ia");
  const scenarios = [
    ["resposta correta", /Não invente falhas[\s\S]*Preserve tudo que está correto e adequado/i],
    ["erro factual", /Extraia claims verificáveis[\s\S]*sustentado, parcialmente sustentado, contradito, não confirmado ou inconclusivo/i],
    ["citação inadequada", /A fonte e o documento existem[\s\S]*O trecho realmente sustenta a frase/i],
    ["omissão", /Faltam riscos, exceções, condições ou alternativas materiais/i],
    ["desatualização", /informação foi correta em outro momento, mercado, versão ou jurisdição/i],
    ["excesso de confiança", /Linguagem definitiva sustentada apenas por evidência limitada ou conflitante/i],
    ["sem pedido original", /não confirmar completamente se a resposta atendeu à intenção original/i],
    ["resposta criativa", /Não aplique verificação factual rígida a uma metáfora ou ideia ficcional/i],
    ["código", /Compile, execute e rode testes/i],
    ["comparação A\/B", /inverter a ordem A\/B/i],
  ];

  for (const [scenario, pattern] of scenarios) {
    assert.match(html, pattern, `missing operational rule for ${scenario}`);
  }
});

test("renders the nutrition library and the vitamin A guide with responsible health context", async () => {
  const hub = await render("/nutricao");
  assert.match(hub, /<h1[^>]*>Nutrição, explicada com contexto<\/h1>/i);
  assert.match(hub, /href="\/nutricao\/vitaminas"/i);

  const vitamins = await render("/nutricao/vitaminas");
  assert.match(vitamins, /<h1[^>]*>Vitaminas sem atalhos ou promessas<\/h1>/i);
  assert.match(vitamins, /href="\/nutricao\/vitaminas\/vitamina-a"/i);
  assert.match(vitamins, /href="\/nutricao\/vitaminas\/vitamina-c"/i);
  for (const vitamin of ["b1", "b2", "b3", "b5", "b6", "b7", "b9", "b12"]) {
    assert.match(vitamins, new RegExp(`href="/nutricao/vitaminas/vitamina-${vitamin}"`, "i"));
  }
  for (const vitamin of ["d", "e", "k"]) {
    assert.match(vitamins, new RegExp(`href="/nutricao/vitaminas/vitamina-${vitamin}"`, "i"));
  }
  const vitaminAIndex = vitamins.indexOf('href="/nutricao/vitaminas/vitamina-a"');
  const complexBIndex = vitamins.indexOf('id="complexo-b-title"');
  const vitaminCIndex = vitamins.indexOf('href="/nutricao/vitaminas/vitamina-c"');
  const vitaminDIndex = vitamins.indexOf('href="/nutricao/vitaminas/vitamina-d"');
  assert.ok(vitaminAIndex < complexBIndex && complexBIndex < vitaminCIndex && vitaminCIndex < vitaminDIndex);

  const html = await render("/nutricao/vitaminas/vitamina-a");
  assert.match(html, /<h1[^>]*>Vitamina A<\/h1>/i);
  assert.match(html, /800 µg de RAE/i);
  assert.match(html, /Valor Diário não é necessidade individual/i);
  assert.match(html, /limite superior apenas para vitamina A pré-formada/i);
  assert.match(html, /não diagnostica deficiência, não prescreve suplementação/i);
  assert.match(html, /Anvisa — Instrução Normativa nº 75\/2020/i);
  assert.match(html, /NIH Office of Dietary Supplements/i);
  assert.match(html, /WHO — Vitamin A supplementation during pregnancy/i);
  assert.match(html, /nutricao\/vitamina-a-fontes\.webp/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/nutricao\/vitaminas\/vitamina-a"/i);
  assert.match(html, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/vitamina-a\.png"/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(
    html,
    /Clever Souza.{0,40}nutricionista|consulta nutricional|comprar vitamina A|Omnilife/i,
  );

  const vitaminC = await render("/nutricao/vitaminas/vitamina-c");
  assert.match(vitaminC, /<h1[^>]*>Vitamina C<\/h1>/i);
  assert.match(vitaminC, /VDR no Brasil/i);
  assert.match(vitaminC, /<strong>100 mg<\/strong>/i);
  assert.match(vitaminC, /Valor Diário não é necessidade individual/i);
  assert.match(vitaminC, /2\.000 mg\/dia/i);
  assert.match(vitaminC, /não reduz de forma consistente a chance de ter um resfriado/i);
  assert.match(vitaminC, /não diagnostica deficiência, não prescreve suplementação/i);
  assert.match(vitaminC, /Anvisa — Instrução Normativa nº 75\/2020/i);
  assert.match(vitaminC, /NIH Office of Dietary Supplements/i);
  assert.match(vitaminC, /Cochrane — Vitamin C for preventing and treating the common cold/i);
  assert.match(vitaminC, /nutricao\/vitamina-c-fontes\.webp/i);
  assert.match(vitaminC, /rel="canonical"[^>]*href="https:\/\/www\.cleversouza\.com\/nutricao\/vitaminas\/vitamina-c"/i);
  assert.match(vitaminC, /property="og:image"[^>]+content="https:\/\/www\.cleversouza\.com\/social\/vitamina-c\.png"/i);
  assert.match(vitaminC, /application\/ld\+json/i);
  assert.doesNotMatch(
    vitaminC,
    /Clever Souza.{0,40}nutricionista|consulta nutricional|comprar vitamina C|Omnilife|cura resfriado|previne resfriado/i,
  );

  const complexB = [
    ["b1", "Vitamina B1", "1,2 mg"],
    ["b2", "Vitamina B2", "1,2 mg"],
    ["b3", "Vitamina B3", "15 mg de NE"],
    ["b5", "Vitamina B5", "5 mg"],
    ["b6", "Vitamina B6", "1,3 mg"],
    ["b7", "Vitamina B7", "30 µg"],
    ["b9", "Vitamina B9", "400 µg de DFE"],
    ["b12", "Vitamina B12", "2,4 µg"],
  ];

  for (const [slug, title, vdr] of complexB) {
    const page = await render(`/nutricao/vitaminas/vitamina-${slug}`);
    assert.match(page, new RegExp(`<h1[^>]*>${title}</h1>`, "i"));
    assert.match(page, new RegExp(vdr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(page, /Valor Diário não é necessidade individual/i);
    assert.match(page, /Como o status nutricional é avaliado/i);
    assert.match(page, /O que a evidência sustenta/i);
    assert.match(page, /não diagnostica deficiência, não prescreve suplementação/i);
    assert.match(page, /Anvisa — Instrução Normativa nº 75\/2020/i);
    assert.match(page, /NIH Office of Dietary Supplements/i);
    assert.match(page, new RegExp(`property="og:image"[^>]+content="https://www\\.cleversouza\\.com/social/vitamina-${slug}\\.png"`, "i"));
    assert.doesNotMatch(page, /consulta nutricional|Omnilife|comprar vitamina/i);
  }

  const remaining = [
    ["d", "Vitamina D", "15 µg", "25\\(OH\\)D", "vitamina-d-fontes\\.webp"],
    ["e", "Vitamina E", "15 mg", "alfa-tocoferol", "vitamina-e-fontes\\.webp"],
    ["k", "Vitamina K", "120 µg", "varfarina", "vitamina-k-fontes\\.webp"],
  ];

  for (const [slug, title, vdr, criticalTopic, image] of remaining) {
    const page = await render(`/nutricao/vitaminas/vitamina-${slug}`);
    assert.match(page, new RegExp(`<h1[^>]*>${title}</h1>`, "i"));
    assert.match(page, new RegExp(vdr, "i"));
    assert.match(page, new RegExp(criticalTopic, "i"));
    assert.match(page, new RegExp(image, "i"));
    assert.match(page, /Valor Diário não é necessidade individual/i);
    assert.match(page, /Como o status nutricional é avaliado/i);
    assert.match(page, /O que a evidência sustenta/i);
    assert.match(page, /não diagnostica deficiência, não prescreve suplementação/i);
    assert.match(page, /Anvisa — Instrução Normativa nº 75\/2020/i);
    assert.match(page, /NIH Office of Dietary Supplements/i);
    assert.match(page, new RegExp(`property="og:image"[^>]+content="https://www\\.cleversouza\\.com/social/vitamina-${slug}\\.png"`, "i"));
    assert.doesNotMatch(page, /consulta nutricional|Omnilife|comprar vitamina|vitamina [DEK] cura|garante (?:prevenção|tratamento|benefício)/i);
  }
});

test("renders the complete non-vitamin nutrient library with distinct, responsible guides", async () => {
  const hub = await render("/nutricao");
  assert.match(hub, /Todos os outros nutrientes/i);
  for (const category of [
    "macronutrientes",
    "minerais",
    "aminoacidos",
    "acidos-graxos",
    "outros-nutrientes",
  ]) {
    assert.match(hub, new RegExp(`href="/nutricao/${category}"`, "i"));
  }
  assert.match(hub, /Por que a lista termina aqui/i);
  assert.match(hub, /não formam uma lista fechada de nutrientes essenciais humanos/i);

  const categories = [
    ["macronutrientes", "Macronutrientes", 3],
    ["minerais", "Minerais e eletrólitos", 15],
    ["aminoacidos", "Aminoácidos indispensáveis", 9],
    ["acidos-graxos", "Ácidos graxos essenciais", 2],
    ["outros-nutrientes", "Água, fibras e colina", 3],
  ];
  for (const [slug, title, count] of categories) {
    const page = await render(`/nutricao/${slug}`);
    assert.match(page, new RegExp(`<h1[^>]*>${title}</h1>`, "i"));
    assert.match(page, new RegExp(`${count}[\\s\\S]{0,30}guias aprofundados`, "i"));
    assert.match(page, /CollectionPage/i);
  }

  const guides = [
    ["macronutrientes", "carboidratos", "Carboidratos", "300 g"],
    ["macronutrientes", "proteinas", "Proteínas", "75 g"],
    ["macronutrientes", "gorduras", "Gorduras", "55 g"],
    ["minerais", "calcio", "Cálcio", "1.000 mg"],
    ["minerais", "fosforo", "Fósforo", "700 mg"],
    ["minerais", "magnesio", "Magnésio", "420 mg"],
    ["minerais", "sodio", "Sódio", "2.000 mg"],
    ["minerais", "potassio", "Potássio", "3.500 mg"],
    ["minerais", "cloreto", "Cloreto", "2.300 mg"],
    ["minerais", "ferro", "Ferro", "14 mg"],
    ["minerais", "zinco", "Zinco", "11 mg"],
    ["minerais", "cobre", "Cobre", "900 µg"],
    ["minerais", "manganes", "Manganês", "3 mg"],
    ["minerais", "iodo", "Iodo", "150 µg"],
    ["minerais", "selenio", "Selênio", "60 µg"],
    ["minerais", "molibdenio", "Molibdênio", "45 µg"],
    ["minerais", "cromo", "Cromo", "35 µg"],
    ["minerais", "fluor", "Flúor", "4 mg"],
    ["aminoacidos", "histidina", "Histidina", "10 mg/kg/dia"],
    ["aminoacidos", "isoleucina", "Isoleucina", "20 mg/kg/dia"],
    ["aminoacidos", "leucina", "Leucina", "39 mg/kg/dia"],
    ["aminoacidos", "lisina", "Lisina", "30 mg/kg/dia"],
    ["aminoacidos", "metionina", "Metionina", "15 mg/kg/dia"],
    ["aminoacidos", "fenilalanina", "Fenilalanina", "25 mg/kg/dia"],
    ["aminoacidos", "treonina", "Treonina", "15 mg/kg/dia"],
    ["aminoacidos", "triptofano", "Triptofano", "4 mg/kg/dia"],
    ["aminoacidos", "valina", "Valina", "26 mg/kg/dia"],
    ["acidos-graxos", "acido-linoleico-omega-6", "Ácido linoleico \\(ômega-6\\)", "Sem VDR geral"],
    ["acidos-graxos", "acido-alfa-linolenico-omega-3", "Ácido alfa-linolênico \\(ômega-3\\)", "Sem VDR geral"],
    ["outros-nutrientes", "agua", "Água", "Sem VDR geral"],
    ["outros-nutrientes", "fibras-alimentares", "Fibras alimentares", "25 g"],
    ["outros-nutrientes", "colina", "Colina", "550 mg"],
  ];

  for (const [category, slug, titlePattern, reference] of guides) {
    const page = await render(`/nutricao/${category}/${slug}`);
    assert.match(page, new RegExp(`<h1[^>]*>${titlePattern}</h1>`, "i"));
    assert.match(page, new RegExp(escapeRegExp(reference), "i"));
    assert.match(page, /VDR, RDA, AI, AMDR e UL respondem a perguntas diferentes/i);
    assert.match(page, /Participar de uma função normal não significa que doses extras melhorem essa função/i);
    assert.match(page, /Este conteúdo é educativo/i);
    assert.match(page, /Article/i);
    assert.match(page, /Perguntas frequentes/i);
    assert.doesNotMatch(page, /FAQPage/i);
    assert.match(page, new RegExp(`property="og:image"[^>]+content="https://www\\.cleversouza\\.com/social/${slug}\\.png"`, "i"));
    assert.doesNotMatch(page, /consulta nutricional|Omnilife|comprar (?:suplemento|nutriente)|garante (?:cura|tratamento|prevenção)/i);
  }

  const magnesium = await render("/nutricao/minerais/magnesio");
  assert.match(magnesium, /UL — suplemento\/medicamento/i);
  assert.match(magnesium, /350 mg\/dia/i);
  assert.match(magnesium, /Não inclui magnésio natural dos alimentos/i);
  const iron = await render("/nutricao/minerais/ferro");
  assert.match(iron, /Anemia não é sinônimo de falta de ferro/i);
  const chromium = await render("/nutricao/minerais/cromo");
  assert.match(chromium, /essencialidade humana é atualmente debatida/i);
  const methionine = await render("/nutricao/aminoacidos/metionina");
  assert.match(methionine, /metionina \+ cisteína/i);
  const phenylalanine = await render("/nutricao/aminoacidos/fenilalanina");
  assert.match(phenylalanine, /fenilalanina \+ tirosina/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
  assert.match(html, /Perguntas frequentes/i);
  assert.doesNotMatch(html, /FAQPage/i);
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
