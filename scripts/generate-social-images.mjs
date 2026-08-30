import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, copyFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const outputDir = join(projectRoot, "public", "social");
const tempDir = mkdtempSync(join(tmpdir(), "clever-social-"));
const publicDir = join(projectRoot, "public");
const nutritionOnly = process.argv.includes("--nutrition-only");

const globalPages = [
  ["inicio", "Projetos, conteúdos e iniciativas", "Site oficial"],
  ["ia", "Inteligência Artificial", "GUIAS E SISTEMAS DE REFERÊNCIA"],
  ["engenharia-de-prompt", "Engenharia de Prompt", "IA · GUIA OPERACIONAL"],
  ["context-engineering", "Context Engineering", "IA · CONTEXTO OPERACIONAL"],
  ["pesquisa-com-ia", "Pesquisa com IA", "IA · MÉTODO DE PESQUISA"],
  ["ia-com-arquivos", "IA com Arquivos", "IA · ANÁLISE DOCUMENTAL"],
  ["prompts-para-imagens", "Prompts para Imagens", "IA · DIREÇÃO VISUAL"],
  ["videos-curtos", "Vídeos Curtos com IA", "IA · ATENÇÃO, ROTEIRO E DADOS"],
  ["avaliacao-de-respostas-de-ia", "Avaliação de respostas de IA", "IA · PROTOCOLO DE AVALIAÇÃO", 22],
  ["napoleon-hill", "Napoleon Hill", "IA · MODELO DE PENSAMENTO"],
  ["sobre", "Sobre Clever Souza", "Informações oficiais"],
  ["contato", "Fale com Clever Souza", "Canal oficial de contato"],
  ["aviso-de-saude", "Aviso de saúde", "Informação e cuidado responsável"],
  ["politica-de-privacidade", "Política de privacidade", "Dados e direitos dos titulares"],
  ["termos-de-uso", "Termos de uso", "Condições para usar o site"],
];

const massotherapyPages = [
  ["massoterapia", "Massoterapia em Curitiba", "Cuidado corporal com clareza, escuta e adaptação"],
  ["massoterapia-curitiba", "Atendimento de massoterapia em Curitiba", "Técnicas, cuidados e formas de contato"],
  ["servicos", "Serviços de massoterapia", "Atendimentos com escolha orientada"],
  ["conteudos", "Conteúdos sobre massoterapia", "Saúde corporal e bem-estar com responsabilidade"],
  ["massoterapia-conteudo", "Conteúdos de massoterapia", "Técnicas, cuidados, limites e escolhas informadas"],
  ["conteudos-o-que-e-massoterapia", "O que é massoterapia e como funciona?", "Guia introdutório de cuidado corporal"],
  ["conteudos-primeira-sessao-de-massoterapia", "O que esperar da primeira sessão de massoterapia?", "Preparação, conversa e limites"],
  ["conteudos-massagem-relaxante-e-terapeutica", "Massagem relaxante e terapêutica: quais são as diferenças?", "Entenda objetivos e abordagens"],
  ["conteudos-cuidados-e-contraindicacoes", "Cuidados antes e depois da massagem", "E quando é melhor adiar"],
  ["conteudos-como-escolher-massoterapeuta-curitiba", "Como escolher um massoterapeuta em Curitiba", "Comunicação, segurança e transparência"],
];

const techniquePages = [
  ["massagem-relaxante", "Massagem relaxante", "Como funciona e cuidados", "massagem-relaxante"],
  ["massoterapia-curitiba-primeira-sessao", "Primeira sessão de massoterapia", "O que saber antes de marcar", "massoterapia-primeira-sessao"],
  ["diferencas-tecnicas-massoterapia", "Seis técnicas", "Diferenças na experiência de cada uma", "diferencas-tecnicas-massoterapia"],
  ["shiatsu", "Shiatsu em Curitiba", "Como funciona e cuidados", "shiatsu"],
  ["tui-na", "Tui-ná em Curitiba", "Como funciona e cuidados", "tui-na"],
  ["reflexologia-podal", "Reflexologia podal", "Benefícios, limites e cuidados", "reflexologia-podal"],
  ["thai-massage", "Thai Massage", "Como funciona e cuidados", "thai-massage"],
  ["quick-massage", "Quick Massage", "Como funciona e cuidados", "quick-massage"],
  ["muitas-horas-sentado", "Tempo sentado", "Conforto, movimento e cuidado complementar", "muitas-horas-sentado"],
  ["tensao-nos-musculares", "Tensão e “nós”", "O que a expressão significa", "tensao-nos-musculares"],
  ["quando-adiar-massagem", "Quando adiar", "Cuidados antes da sessão", "quando-adiar-massagem"],
  ["antes-depois-massagem", "Antes e depois", "Cuidados que realmente importam", "antes-depois-massagem"],
];

const nutritionPages = [
  ["macronutrientes", "Macronutrientes", "Carboidratos, proteínas e gorduras", "NUTRIÇÃO · BIBLIOTECA"],
  ["minerais", "Minerais e eletrólitos", "Quinze guias com números e contexto", "NUTRIÇÃO · BIBLIOTECA"],
  ["aminoacidos", "Aminoácidos indispensáveis", "Os nove blocos que precisam vir da alimentação", "NUTRIÇÃO · BIBLIOTECA"],
  ["acidos-graxos", "Ácidos graxos essenciais", "Ômega-3 e ômega-6 sem simplificações", "NUTRIÇÃO · BIBLIOTECA"],
  ["outros-nutrientes", "Água, fibras e colina", "Três guias que completam o mapa", "NUTRIÇÃO · BIBLIOTECA"],
  ["carboidratos", "Carboidratos", "Energia, matriz alimentar e referências", "NUTRIÇÃO · MACRONUTRIENTES"],
  ["proteinas", "Proteínas", "Aminoácidos, qualidade e necessidades", "NUTRIÇÃO · MACRONUTRIENTES"],
  ["gorduras", "Gorduras", "Tipos, fontes, absorção e segurança", "NUTRIÇÃO · MACRONUTRIENTES"],
  ["calcio", "Cálcio", "Ossos, sinalização, fontes e excesso", "NUTRIÇÃO · MINERAIS"],
  ["fosforo", "Fósforo", "Estrutura, ATP, aditivos e rins", "NUTRIÇÃO · MINERAIS"],
  ["magnesio", "Magnésio", "Cofator, fontes e limites de suplemento", "NUTRIÇÃO · MINERAIS"],
  ["sodio", "Sódio", "Sal, volume, pressão e hiponatremia", "NUTRIÇÃO · ELETRÓLITOS"],
  ["potassio", "Potássio", "Células, pressão, fontes e hipercalemia", "NUTRIÇÃO · ELETRÓLITOS"],
  ["cloreto", "Cloreto", "Equilíbrio, acidez e relação com o sal", "NUTRIÇÃO · ELETRÓLITOS"],
  ["ferro", "Ferro", "Oxigênio, ferritina, deficiência e sobrecarga", "NUTRIÇÃO · MINERAIS"],
  ["zinco", "Zinco", "Enzimas, fontes, imunidade e cobre", "NUTRIÇÃO · MINERAIS"],
  ["cobre", "Cobre", "Energia, ferro, tecido conjuntivo e excesso", "NUTRIÇÃO · MINERAIS"],
  ["manganes", "Manganês", "Cofator, fontes e neurotoxicidade", "NUTRIÇÃO · MINERAIS"],
  ["iodo", "Iodo", "Tireoide, sal iodado e janela de segurança", "NUTRIÇÃO · MINERAIS"],
  ["selenio", "Selênio", "Selenoproteínas, fontes e toxicidade", "NUTRIÇÃO · MINERAIS"],
  ["molibdenio", "Molibdênio", "Cofator enzimático e necessidade pequena", "NUTRIÇÃO · MINERAIS"],
  ["cromo", "Cromo", "VDR, evidência e essencialidade em debate", "NUTRIÇÃO · MINERAIS"],
  ["fluor", "Flúor", "Esmalte, água, creme dental e fluorose", "NUTRIÇÃO · MINERAIS"],
  ["histidina", "Histidina", "Proteínas, histamina e carnosina", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["isoleucina", "Isoleucina", "BCAA, energia muscular e equilíbrio", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["leucina", "Leucina", "mTOR, síntese muscular e contexto", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["lisina", "Lisina", "Colágeno, carnitina e complementaridade", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["metionina", "Metionina", "Enxofre, metilação e homocisteína", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["fenilalanina", "Fenilalanina", "Tirosina, neurotransmissores e PKU", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["treonina", "Treonina", "Proteínas, mucinas e indispensabilidade", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["triptofano", "Triptofano", "Serotonina, melatonina e quinurenina", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["valina", "Valina", "BCAA, proteínas e energia muscular", "NUTRIÇÃO · AMINOÁCIDOS"],
  ["acido-linoleico-omega-6", "Ácido linoleico", "Ômega-6 essencial sem o mito inflamatório", "NUTRIÇÃO · ÁCIDOS GRAXOS"],
  ["acido-alfa-linolenico-omega-3", "Ácido alfa-linolênico", "ALA, conversão e fontes vegetais", "NUTRIÇÃO · ÁCIDOS GRAXOS"],
  ["agua", "Água", "Hidratação, sede, perdas e excesso", "NUTRIÇÃO · ESSENCIAIS"],
  ["fibras-alimentares", "Fibras alimentares", "Viscosidade, fermentação e tolerância", "NUTRIÇÃO · COMPONENTES"],
  ["colina", "Colina", "Membranas, acetilcolina e metilação", "NUTRIÇÃO · ESSENCIAIS"],
];

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrap(text, maxChars, maxLines = 3) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  return [...lines.slice(0, maxLines - 1), `${lines.slice(maxLines - 1).join(" ").slice(0, maxChars - 1)}…`];
}

function textLines(lines, { x, y, fill, size, lineHeight, weight = 700, letterSpacing = 0 }) {
  return lines
    .map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" fill="${fill}" font-family="DejaVu Sans, Arial, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${letterSpacing}">${escapeXml(line)}</text>`)
    .join("\n");
}

function globalSvg(title, eyebrow, titleWrap = 28) {
  const titleLines = wrap(title, titleWrap, 3);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#06182f"/><stop offset="1" stop-color="#0b5c97"/></linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#b9dceb" stroke-opacity=".09"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#f8fafc"/>
  <rect x="796" width="404" height="630" fill="url(#panel)"/>
  <rect x="796" width="404" height="630" fill="url(#grid)"/>
  <path d="M732 0H796V630H672C728 510 732 120 732 0Z" fill="#eef4f8"/>
  <text x="78" y="207" fill="#2778ae" font-family="DejaVu Sans, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3">${escapeXml(eyebrow.toUpperCase())}</text>
  ${textLines(titleLines, { x: 76, y: 294, fill: "#071a33", size: 54, lineHeight: 68, weight: 700 })}
  <rect x="76" y="514" width="310" height="2" fill="#70d8e8"/>
  <text x="76" y="560" fill="#0b4f8a" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="700">www.cleversouza.com</text>
  <circle cx="996" cy="304" r="184" fill="none" stroke="#b9dceb" stroke-opacity=".2"/>
  <circle cx="996" cy="304" r="128" fill="#071a33" fill-opacity=".48" stroke="#70d8e8" stroke-opacity=".24"/>
</svg>`;
}

function massotherapySvg(title, subtitle, { homeAlignedHeader = false } = {}) {
  const titleLines = wrap(title, 26, 3);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="74%" cy="34%" r="70%"><stop offset="0" stop-color="#116b98" stop-opacity=".48"/><stop offset=".58" stop-color="#082744" stop-opacity=".18"/><stop offset="1" stop-color="#041a34" stop-opacity="0"/></radialGradient>
    <linearGradient id="edge" x1="0" x2="1"><stop offset="0" stop-color="#70d8e8" stop-opacity="0"/><stop offset=".5" stop-color="#70d8e8"/><stop offset="1" stop-color="#70d8e8" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#041a34"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="930" cy="316" r="236" fill="none" stroke="#70d8e8" stroke-opacity=".15"/>
  <circle cx="930" cy="316" r="178" fill="none" stroke="#70d8e8" stroke-opacity=".10"/>
  <circle cx="930" cy="316" r="116" fill="#061d38" fill-opacity=".54"/>
  ${
    homeAlignedHeader
      ? '<path d="M444 66V130" stroke="#70d8e8" stroke-opacity=".42" stroke-width="2"/>'
      : '<path d="M400 62V137" stroke="#70d8e8" stroke-opacity=".42" stroke-width="2"/>'
  }
  <path d="M78 164H654" stroke="#70d8e8" stroke-opacity=".24"/>
  <text x="78" y="211" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="2.8">MASSOTERAPIA · CURITIBA</text>
  ${textLines(titleLines, { x: 76, y: 292, fill: "#f8fafc", size: 52, lineHeight: 65, weight: 700 })}
  <text x="78" y="500" fill="#b9dceb" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="400">${escapeXml(subtitle)}</text>
  <rect x="76" y="540" width="310" height="2" fill="url(#edge)"/>
  <text x="76" y="585" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="700">www.cleversouza.com</text>
</svg>`;
}

function techniqueSvg(title, subtitle) {
  const titleLines = wrap(title, 25, 3);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#041a34"/><stop offset=".56" stop-color="#041a34" stop-opacity=".96"/><stop offset="1" stop-color="#041a34" stop-opacity=".08"/></linearGradient>
    <linearGradient id="photoShade" x1="0" x2="1"><stop offset="0" stop-color="#041a34" stop-opacity=".56"/><stop offset="1" stop-color="#041a34" stop-opacity=".06"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#041a34"/>
  <rect x="584" width="616" height="630" fill="url(#photoShade)"/>
  <rect width="840" height="630" fill="url(#fade)"/>
  <path d="M394 62V137" stroke="#70d8e8" stroke-opacity=".42" stroke-width="2"/>
  <text x="72" y="185" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="3">GUIA DE MASSOTERAPIA</text>
  ${textLines(titleLines, { x: 70, y: 275, fill: "#f8fafc", size: 51, lineHeight: 64, weight: 700 })}
  <text x="72" y="500" fill="#b9dceb" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="400">${escapeXml(subtitle)}</text>
  <text x="72" y="572" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="700">www.cleversouza.com</text>
</svg>`;
}

function nutritionSvg(title, subtitle, eyebrow) {
  const titleLines = wrap(title, 25, 3);
  const subtitleLines = wrap(subtitle, 42, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="nutritionGlow" cx="82%" cy="28%" r="70%"><stop offset="0" stop-color="#70d8e8" stop-opacity=".28"/><stop offset=".48" stop-color="#2778ae" stop-opacity=".18"/><stop offset="1" stop-color="#041a34" stop-opacity="0"/></radialGradient>
    <linearGradient id="nutritionLine" x1="0" x2="1"><stop offset="0" stop-color="#70d8e8"/><stop offset="1" stop-color="#70d8e8" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#041a34"/>
  <rect width="1200" height="630" fill="url(#nutritionGlow)"/>
  <circle cx="968" cy="314" r="224" fill="none" stroke="#b9dceb" stroke-opacity=".14"/>
  <circle cx="968" cy="314" r="154" fill="#061d38" fill-opacity=".44" stroke="#70d8e8" stroke-opacity=".18"/>
  <circle cx="968" cy="314" r="78" fill="#0b5c97" fill-opacity=".3"/>
  <path d="M818 166l300 300M1118 166L818 466" stroke="#70d8e8" stroke-opacity=".08"/>
  <text x="76" y="188" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="2.8">${escapeXml(eyebrow)}</text>
  ${textLines(titleLines, { x: 74, y: 282, fill: "#f8fafc", size: 52, lineHeight: 64, weight: 700 })}
  ${textLines(subtitleLines, { x: 76, y: 494, fill: "#b9dceb", size: 23, lineHeight: 31, weight: 400 })}
  <rect x="76" y="552" width="330" height="2" fill="url(#nutritionLine)"/>
  <text x="76" y="591" fill="#70d8e8" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="700">www.cleversouza.com</text>
</svg>`;
}

function render(name, svg) {
  const source = join(tempDir, `${name}.svg`);
  const output = join(outputDir, `${name}.png`);
  writeFileSync(source, svg);
  execFileSync("inkscape", [source, "--export-type=png", `--export-filename=${output}`, "--export-width=1200", "--export-height=630"], { stdio: "inherit" });
  return output;
}

function raster(path, name, geometry) {
  const output = join(tempDir, `${name}.png`);
  const source = join(publicDir, path);
  if (path.endsWith(".svg")) {
    const [width, height] = geometry.split("x");
    execFileSync("inkscape", [source, `--export-filename=${output}`, `--export-width=${width}`, `--export-height=${height}`], { stdio: "inherit" });
  } else {
    execFileSync("convert", [source, "-resize", geometry, output], { stdio: "inherit" });
  }
  return output;
}

function crop(path, name, geometry) {
  const output = join(tempDir, `${name}.png`);
  execFileSync("convert", [join(publicDir, path), "-resize", `${geometry}^`, "-gravity", "center", "-extent", geometry, output], { stdio: "inherit" });
  return output;
}

function composite(base, overlay, geometry) {
  execFileSync("convert", [base, overlay, "-geometry", geometry, "-compose", "over", "-composite", base], { stdio: "inherit" });
}

function applyMassotherapyLockup(output, name, { brand = "white", x = 76, y = 58 } = {}) {
  const brandAsset = brand === "white" ? "brand/logo-horizontal-branca.svg" : "brand/logo-horizontal-principal.svg";
  composite(output, raster(brandAsset, `${name}-brand`, "298x62"), `+${x}+${y}`);
  composite(output, raster("massoterapia/brand/logo-massoterapia-transparente.png", `${name}-massotherapy-logo`, "104x120"), `+${x + 344}+${y - 27}`);
}

function applyMassotherapyHomeAlignedHeader(output, name) {
  composite(output, raster("brand/logo-horizontal-branca.svg", `${name}-brand`, "360x72"), "+76+62");
  composite(output, raster("massoterapia/brand/logo-massoterapia-transparente.png", `${name}-massotherapy-logo`, "80x92"), "+468+52");
}

try {
  execFileSync("mkdir", ["-p", outputDir]);
  if (!nutritionOnly) {
    for (const [name, title, eyebrow, titleWrap] of globalPages) {
      const output = render(name, globalSvg(title, eyebrow, titleWrap));
      composite(output, raster("brand/logo-horizontal-principal.svg", `${name}-brand`, "360x72"), "+76+62");
      composite(output, raster("brand/simbolo-clever-souza-metalico.svg", `${name}-symbol`, "146x154"), "+923+227");
    }
    for (const [name, title, subtitle] of massotherapyPages) {
      const homeAlignedHeader = name === "massoterapia";
      const output = render(name, massotherapySvg(title, subtitle, { homeAlignedHeader }));
      if (homeAlignedHeader) {
        applyMassotherapyHomeAlignedHeader(output, name);
      } else {
        applyMassotherapyLockup(output, name);
      }
    }
    for (const [name, title, subtitle, imageStem] of techniquePages) {
      const output = render(name, techniqueSvg(title, subtitle));
      composite(output, crop(`massoterapia/tecnicas/${imageStem}-1080.webp`, `${name}-photo`, "550x630"), "+650+0");
      applyMassotherapyLockup(output, name, { x: 70, y: 58 });
    }
  }
  for (const [name, title, subtitle, eyebrow] of nutritionPages) {
    const output = render(name, nutritionSvg(title, subtitle, eyebrow));
    composite(output, raster("brand/logo-horizontal-branca.svg", `${name}-nutrition-brand`, "360x72"), "+76+62");
  }
  if (!nutritionOnly) {
    copyFileSync(join(outputDir, "inicio.png"), join(publicDir, "og-clever-souza.png"));
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
