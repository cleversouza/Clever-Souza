import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./files.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/ia-com-arquivos";
const TITLE = "Como usar IA com arquivos: guia prático";
const DESCRIPTION =
  "Aprenda a analisar PDFs, documentos, planilhas e imagens com IA preservando objetivo, evidências, proveniência, limites e rastreabilidade.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "IA com arquivos",
  "como analisar PDF com IA",
  "IA para documentos",
  "IA para planilhas",
  "comparar documentos com IA",
  "resumir PDF com IA",
]);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    publishedTime: "2026-08-28T00:00:00.000Z",
    modifiedTime: "2026-08-28T00:00:00.000Z",
    authors: [`${SITE_URL}/sobre`],
  },
};

const modes = [
  ["Localizar", "Encontrar uma informação específica, indicar onde aparece e evitar extrapolações."],
  ["Extrair", "Converter campos, entidades, datas, valores ou cláusulas em uma estrutura sem confundir extração com interpretação."],
  ["Resumir", "Reduzir o conteúdo segundo uma finalidade: executiva, técnica, cronológica, temática ou decisória."],
  ["Comparar", "Identificar igualdade, adições, remoções, mudanças e materialidade — não apenas resumir A e B separadamente."],
  ["Verificar", "Testar se uma afirmação é sustentada, parcialmente sustentada, contradita ou permanece inconclusiva."],
  ["Auditar", "Procurar lacunas, inconsistências, requisitos ausentes e números incompatíveis sem inventar problemas."],
  ["Sintetizar", "Integrar vários arquivos preservando origem, consenso, divergência e limites de cada fonte."],
  ["Transformar", "Converter informação em tabela, checklist, briefing, relatório ou apresentação sem mudar silenciosamente o significado."],
  ["Calcular", "Executar e verificar operações sobre dados, unidades e bases com ferramenta apropriada quando a precisão importar."],
] as const;

const fileTypes = [
  {
    label: "PDF",
    text: "Pode combinar texto, páginas digitalizadas, imagens, gráficos, tabelas, anexos, múltiplas colunas e layout. Não presuma leitura linear nem acesso visual completo.",
  },
  {
    label: "DOCX, TXT e Markdown",
    text: "Títulos, listas, notas, tabelas e versões ajudam a interpretar a estrutura. Algumas ferramentas extraem apenas o texto e perdem elementos incorporados.",
  },
  {
    label: "XLSX e CSV",
    text: "Exigem inspeção de abas, colunas, tipos, unidades, fórmulas, valores ausentes e intervalos. Dado, cálculo e interpretação são camadas diferentes.",
  },
  {
    label: "Apresentações",
    text: "Texto, posição, sequência, hierarquia, imagens e gráficos constroem a mensagem. Uma transcrição simples pode perder relações visuais importantes.",
  },
  {
    label: "Imagens e screenshots",
    text: "Podem conter texto, objetos, interfaces, gráficos e relações espaciais. Separe o que é visível da interpretação e da recomendação.",
  },
  {
    label: "Digitalizados",
    text: "OCR pode falhar com baixa resolução, rotação, manuscritos, colunas, caracteres e tabelas. Sinalize trechos incertos; não prometa extração perfeita.",
  },
] as const;

const protocol = [
  ["Definir", "Determine a pergunta real, o produto final, o rigor necessário e se o trabalho é fechado ou pode usar fontes externas."],
  ["Inventariar", "Liste os arquivos disponíveis, formatos, funções, datas, versões e limitações aparentes."],
  ["Selecionar", "Use somente o material relevante. Identifique fonte principal, complemento, dado bruto, referência e versão antiga."],
  ["Inspecionar", "Verifique estrutura, páginas, seções, abas, slides, tabelas, imagens, legibilidade e cobertura antes de concluir que o conteúdo foi lido."],
  ["Analisar", "Aplique apenas os modos exigidos: localizar, extrair, resumir, comparar, verificar, auditar, sintetizar, transformar ou calcular."],
  ["Rastrear", "Associe afirmações importantes a arquivo e localizador. Não invente página, célula ou trecho que a ferramenta não consegue determinar."],
  ["Contrastar", "Procure conflitos, lacunas, duplicatas, versões e diferenças de autoridade. Não resolva divergências silenciosamente."],
  ["Verificar", "Retorne à fonte original, confira números e execute cálculos com ferramenta adequada quando o custo do erro justificar."],
  ["Sintetizar", "Responda ao objetivo — não apenas descreva os arquivos. Preserve consenso, conflito, exceções e materialidade."],
  ["Declarar limites", "Informe arquivos ou páginas não lidos, OCR incerto, localizadores indisponíveis, dados ausentes e conclusões que não podem ser determinadas."],
] as const;

const aiUsePrompt = `Acesse e leia https://www.cleversouza.com/ia/ia-com-arquivos.

Use o protocolo apresentado para trabalhar sobre os arquivos que vou fornecer.

1. Responda ao objetivo real da tarefa, sem aplicar etapas desnecessárias.
2. Identifique quais arquivos são relevantes e a função de cada um.
3. Diferencie conteúdo explícito, inferência e conhecimento externo.
4. Preserve a origem das afirmações importantes com localizadores quando a ferramenta permitir.
5. Identifique versões, conflitos, lacunas e limitações sem escolher ou completar silenciosamente.
6. Verifique cálculos importantes com ferramenta adequada quando disponível.
7. Informe claramente o que não foi encontrado ou não pode ser determinado.

OBJETIVO
[O que preciso descobrir ou produzir]

ARQUIVOS
[Anexar os arquivos]

REGRAS ADICIONAIS — opcional
[Ex.: use somente os arquivos; formato de saída; campos obrigatórios; nível de rigor]`;

const templates = [
  {
    title: "1. Análise geral",
    value: `Analise o arquivo anexado para responder a este objetivo:
[objetivo]

Use somente as partes relevantes. Diferencie conteúdo explícito de interpretação, cite o local da evidência quando possível e declare informações ausentes ou incertas. Entregue em [formato desejado].`,
  },
  {
    title: "2. Extração",
    value: `Extraia do arquivo anexado apenas estes campos:
[campos]

Para cada item, informe: valor encontrado, arquivo, página/seção/tabela quando disponível e observação sobre ambiguidade. Não complete campos ausentes por inferência; use “não encontrado” quando apropriado.`,
  },
  {
    title: "3. Comparação de arquivos",
    value: `Compare os arquivos [A] e [B]. Identifique o que permaneceu igual, foi alterado, acrescentado ou removido em relação a:
[critérios]

Mostre as diferenças lado a lado, cite onde aparecem e destaque mudanças materiais. Não presuma que o arquivo mais recente é automaticamente o mais autorizado.`,
  },
  {
    title: "4. Verificação",
    value: `Verifique se os arquivos sustentam esta afirmação:
[afirmação]

Classifique o resultado como sustentado, parcialmente sustentado, contradito, não localizado ou inconclusivo. Apresente as evidências relevantes com arquivo e localizador. Separe qualquer inferência necessária.`,
  },
  {
    title: "5. Auditoria",
    value: `Audite os arquivos em relação a:
[requisitos ou critérios]

Procure inconsistências, lacunas, campos ausentes, números incompatíveis e requisitos não atendidos. Para cada achado, mostre evidência, impacto e grau de certeza. Não invente falhas para preencher a análise.`,
  },
  {
    title: "6. Múltiplos arquivos",
    value: `Sintetize os arquivos anexados para responder a:
[pergunta]

Primeiro identifique a função, versão e autoridade relativa de cada arquivo. Depois apresente consenso, divergências, lacunas e conclusão. Preserve a proveniência de cada afirmação importante e não misture documentos incompatíveis silenciosamente.`,
  },
  {
    title: "7. Planilha",
    value: `Analise a planilha anexada para responder a:
[objetivo]

Antes, inspecione abas, colunas, tipos, unidades, datas, fórmulas e valores ausentes. Separe: (1) dados presentes, (2) cálculos executados e (3) interpretação. Reproduza cálculos relevantes com ferramenta adequada, mostre fórmula e base usada e não trate vazio como zero.`,
  },
  {
    title: "8. Resumo com finalidade",
    value: `Crie um resumo [executivo/técnico/cronológico/temático/para decisão] do arquivo para [público e finalidade].

Preserve [tópicos indispensáveis], destaque limitações e cite seções relevantes quando necessário. Não acrescente fatos externos nem transforme interpretação em afirmação do documento.`,
  },
  {
    title: "9. Modo fechado",
    value: `Baseie a resposta exclusivamente nos arquivos enviados. Não complete lacunas com conhecimento externo. Diferencie conteúdo explícito de inferência e informe claramente quando algo não estiver presente ou não puder ser determinado. Preserve arquivo e localizador das evidências importantes quando possível.`,
  },
  {
    title: "10. Arquivos + pesquisa externa",
    value: `Use os arquivos como base principal. Pesquise externamente somente quando a informação necessária não estiver nos arquivos ou precisar de atualização/verificação externa.

Na entrega, separe claramente:
1. informações provenientes dos arquivos;
2. inferências;
3. informações provenientes de fontes externas, com links;
4. conflitos ou lacunas que permaneceram inconclusivos.`,
  },
] as const;

const examples = [
  ["PDF simples", "Localize a data de vencimento e cite a página.", "Resposta direta: data, arquivo, página e uma nota somente se houver ambiguidade."],
  ["PDF longo", "Encontre as cláusulas de renovação e cancelamento em 400 páginas.", "Busca seletiva, leitura das seções vizinhas e síntese focada; não é necessário resumir o documento inteiro."],
  ["Dois contratos", "Compare preço, prazo, reajuste, rescisão, multas e foro.", "Tabela lado a lado com localizadores, ausência explícita e mudanças materiais separadas de diferenças de redação."],
  ["Duas versões", "O que mudou entre v2 e v3?", "Adições, remoções e alterações, com atenção a data, vigência e autoridade; o nome do arquivo não basta."],
  ["PDF + planilha", "A narrativa do relatório corresponde aos dados?", "Afirmações do PDF separadas dos valores da planilha; cálculos reproduzidos antes de julgar a correspondência."],
  ["Múltiplos estudos", "O que o conjunto de estudos indica?", "Métodos, populações e resultados permanecem identificáveis; consenso não é criado pela fusão de estudos incompatíveis."],
  ["Informação ausente", "O documento informa a taxa de renovação?", "“Não encontrei essa informação nos arquivos analisados.” Evite concluir que a taxa não existe em nenhum lugar."],
  ["Inferência indevida", "O relatório diz “receita +18%”; a empresa teve forte crescimento?", "O aumento é explícito; “forte” é interpretação e exige critério ou comparação adicional."],
  ["Arquivos conflitantes", "O contrato indica 30 dias; o e-mail indica 45.", "Apresente o conflito, localizadores, datas e autoridade relativa. Não escolha silenciosamente um prazo."],
  ["Documento visual", "O gráfico mostra queda e um texto cita uma campanha.", "A queda entre períodos pode ser observada; atribuir causalidade à campanha exige evidência adicional."],
  ["Planilha", "Calcule a margem média.", "Mostre dados usados, fórmula e denominador; depois apresente a interpretação separadamente."],
  ["Tarefa trivial", "Qual é a data de emissão deste documento?", "Localize e responda. Não produza File Map, auditoria e síntese quando não agregam valor."],
] as const;

const sources = [
  {
    group: "Documentação de fornecedores",
    items: [
      ["OpenAI — File inputs", "https://developers.openai.com/api/docs/guides/file-inputs"],
      ["OpenAI — File search", "https://developers.openai.com/api/docs/guides/tools-file-search"],
      ["OpenAI — Data analysis with ChatGPT", "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt"],
      ["OpenAI — Chat and File Retention Policies", "https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt"],
      ["Anthropic — PDF support", "https://platform.claude.com/docs/en/build-with-claude/pdf-support"],
      ["Anthropic — Citations", "https://platform.claude.com/docs/en/build-with-claude/citations"],
      ["Anthropic — Context windows", "https://platform.claude.com/docs/en/build-with-claude/context-windows"],
      ["Google — Document understanding", "https://ai.google.dev/gemini-api/docs/document-processing"],
      ["Google — File search", "https://ai.google.dev/gemini-api/docs/file-search"],
      ["Microsoft — Document Intelligence layout model", "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout?view=doc-intel-4.0.0"],
      ["Microsoft — Prompt Shields", "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection"],
    ],
  },
  {
    group: "Estudos e referências técnicas",
    items: [
      ["DocVQA: A Dataset for VQA on Document Images", "https://arxiv.org/abs/2007.00398"],
      ["Document Collection Visual Question Answering", "https://arxiv.org/abs/2104.14336"],
      ["ChartQA: Visual and Logical Reasoning", "https://arxiv.org/abs/2203.10244"],
      ["FinQA: Numerical Reasoning over Financial Data", "https://arxiv.org/abs/2109.00122"],
      ["Lost in the Middle", "https://arxiv.org/abs/2307.03172"],
      ["ALCE: Generating Text with Citations", "https://arxiv.org/abs/2305.14627"],
      ["Indirect Prompt Injection", "https://arxiv.org/abs/2302.12173"],
      ["OWASP — LLM Prompt Injection Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html"],
      ["NIST — Generative AI Profile", "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"],
    ],
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}${PATH}#article`,
  headline: "Como usar IA com arquivos: PDFs, documentos, planilhas e imagens",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  image: `${SITE_URL}/social/ia-com-arquivos.png`,
  inLanguage: "pt-BR",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  author: {
    "@type": "Person",
    name: "Cleverson Batista de Souza",
    url: `${SITE_URL}/sobre`,
  },
  publisher: {
    "@type": "Organization",
    name: "Clever Souza",
    url: SITE_URL,
  },
  isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
  about: [
    "Análise de arquivos com inteligência artificial",
    "Document understanding",
    "Document question answering",
    "Proveniência",
    "Análise de planilhas",
    "PDF analysis",
  ],
  citation: sources.flatMap((group) => group.items.map((item) => item[1])),
};

function PromptBlock({ label, value }: { label: string; value: string }) {
  return (
    <figure className={shared.promptBlock}>
      <figcaption>
        <span>{label}</span>
        <CopyButton value={value} />
      </figcaption>
      <pre><code>{value}</code></pre>
    </figure>
  );
}

export default function FilesWithAiPage() {
  return (
    <PageShell
      active="/ia"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "IA com Arquivos" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.filesPage}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Guia de referência · análise documental</p>
            <h1>Como usar IA com arquivos: PDFs, documentos, planilhas e imagens</h1>
            <p className={shared.heroLead}>
              Um método para localizar, extrair, comparar, verificar, auditar e
              sintetizar informações sem perder objetivo, origem ou limites.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#resposta-rapida">Aprender o método</a>
              <a className="button button-secondary" href="#usar-com-ia">Usar com uma IA</a>
            </div>
            <p className={shared.updateLine}>
              <span>Última atualização</span>
              <strong>28 de agosto de 2026</strong>
            </p>
          </div>

          <div className={styles.heroMap} aria-label="Exemplo de rastreamento entre arquivos e evidências">
            <p>Do arquivo à afirmação rastreável</p>
            <ol>
              <li><span>01</span><div><strong>contrato-v3.pdf</strong><small>Fonte principal · cláusulas</small></div></li>
              <li><span>02</span><div><strong>precos.xlsx</strong><small>Dados atuais · cálculos</small></div></li>
              <li><span>03</span><div><strong>email.pdf</strong><small>Contexto complementar</small></div></li>
            </ol>
            <div className={styles.heroEvidence}>
              <span>Evidência</span>
              <strong>Arquivo + localizador + natureza</strong>
            </div>
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            <li><a href="#resposta-rapida">Resposta rápida</a></li>
            <li><a href="#modos">Modos</a></li>
            <li><a href="#tipos">Tipos de arquivo</a></li>
            <li><a href="#evidencia">Evidência</a></li>
            <li><a href="#multiplos">Múltiplos arquivos</a></li>
            <li><a href="#planilhas">Planilhas</a></li>
            <li><a href="#protocolo">Protocolo</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#referencias">Referências</a></li>
          </ol>
        </nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="quick-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Resposta rápida</p>
            <h2 id="quick-title">Anexar um arquivo não define uma tarefa</h2>
            <p>Uma análise confiável começa pelo que precisa ser descoberto ou produzido — não pelo botão de upload.</p>
          </div>
          <div className={styles.principlePair}>
            <article><span>01</span><h3>Arquivo fornece material</h3><p>PDFs, planilhas, imagens e documentos oferecem evidências, dados e contexto.</p></article>
            <article><span>02</span><h3>Tarefa fornece direção</h3><p>Objetivo, pergunta, critérios, saída e rigor determinam o que deve ser feito com o material.</p></article>
          </div>
          <div className={shared.keyPrinciple}>
            <strong>Pergunta fundamental</strong>
            <p>Anexar entrega conteúdo ao sistema. Analisar exige selecionar fontes, interpretar estrutura, preservar proveniência, verificar operações e responder a uma finalidade definida.</p>
          </div>
          <div className={styles.beforeAfter}>
            <div><p>Antes</p><blockquote>“Analise estes arquivos.”</blockquote></div>
            <div><p>Depois</p><blockquote>“Compare as duas propostas em preço, prazo, escopo, garantias e cancelamento. Cite onde cada diferença aparece e informe ambiguidades.”</blockquote></div>
          </div>
          <p className={styles.gainNote}>O ganho veio de definir a tarefa, não de simplesmente aumentar o prompt.</p>
        </section>

        <section className={shared.section} id="modos" aria-labelledby="modes-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Nove modos operacionais</p>
            <h2 id="modes-title">O que a IA deve fazer com os arquivos?</h2>
            <p>Escolha o verbo que corresponde ao resultado. Uma tarefa pode combinar modos, mas não precisa usar todos.</p>
          </div>
          <div className={styles.modeGrid}>
            {modes.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={styles.modeFlow} aria-label="Exemplo de combinação proporcional de modos">
            <span>Extrair</span><span>Comparar</span><span>Calcular</span><span>Sintetizar</span>
          </div>
          <p className={styles.proportionalNote}><strong>Complexidade proporcional:</strong> “Localize a data de vencimento” pede localização direta. Uma auditoria multiarquivo pode exigir inventário, contraste, cálculos e síntese.</p>
        </section>

        <section className={`${shared.section} ${styles.fileTypesSection}`} id="tipos" aria-labelledby="types-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>O formato muda a análise</p>
            <h2 id="types-title">Arquivo não é sinônimo de texto linear</h2>
            <p>As capacidades variam por modelo, plano, interface e ferramenta. Primeiro verifique como o sistema realmente processa cada formato.</p>
          </div>
          <div className={styles.typeGrid}>
            {fileTypes.map((type) => <article key={type.label}><h3>{type.label}</h3><p>{type.text}</p></article>)}
          </div>
          <aside className={styles.formatWarning}>
            <div><p className={shared.eyebrow}>Limite prático</p><h3>Texto extraído pode não representar a página</h3></div>
            <p>Documentação atual de fornecedores mostra diferenças reais: alguns fluxos processam texto e imagem de cada página; outros extraem apenas texto de determinados formatos. Gráficos, diagramas, imagens incorporadas e layout podem desaparecer. Quando esses elementos importarem, peça inspeção visual e confirme se ela ocorreu.</p>
          </aside>
        </section>

        <section className={shared.section} id="evidencia" aria-labelledby="evidence-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Natureza e status da informação</p>
            <h2 id="evidence-title">O que está no arquivo não é o mesmo que o modelo concluiu</h2>
            <p>Use dois eixos. O primeiro identifica a origem de uma afirmação; o segundo registra o resultado da busca ou verificação.</p>
          </div>
          <div className={styles.taxonomyGrid}>
            <div>
              <p className={styles.axisLabel}>Eixo 1 · natureza</p>
              <dl>
                <div><dt>Conteúdo explícito</dt><dd>Está diretamente presente no arquivo.</dd></div>
                <div><dt>Inferência</dt><dd>É derivada do conteúdo, mas não aparece literalmente.</dd></div>
                <div><dt>Conhecimento externo</dt><dd>Vem de fora dos arquivos fornecidos.</dd></div>
              </dl>
            </div>
            <div>
              <p className={styles.axisLabel}>Eixo 2 · resultado</p>
              <dl>
                <div><dt>Não encontrado</dt><dd>A informação não foi localizada no material analisado.</dd></div>
                <div><dt>Não determinável</dt><dd>O material disponível não permite concluir.</dd></div>
              </dl>
            </div>
          </div>
          <div className={styles.explicitExample}>
            <div><span>Documento</span><p>“A receita aumentou 18%.”</p></div>
            <div><span>Explícito</span><p>A receita aumentou 18%.</p></div>
            <div><span>Inferência</span><p>A empresa apresentou forte crescimento — depende de critério e contexto adicional.</p></div>
          </div>
          <div className={styles.notFoundRule}>
            <strong>Não encontrado ≠ não existe</strong>
            <p>Prefira “Não encontrei esta informação nos arquivos analisados” quando a busca não autoriza uma conclusão sobre todos os lugares possíveis.</p>
          </div>

          <div className={styles.provenanceHeading}>
            <div><p className={shared.eyebrow}>Proveniência</p><h3>De qual arquivo veio esta informação?</h3></div>
            <p>Uma síntese rastreável associa as afirmações importantes à fonte e ao melhor localizador disponível.</p>
          </div>
          <div className={styles.locatorGrid}>
            {[['PDF', 'Página · seção · tabela'], ['Documento', 'Título · seção'], ['Planilha', 'Aba + célula ou intervalo'], ['Apresentação', 'Slide'], ['Imagem', 'Região visual, quando necessária']].map(([file, locator]) => <div key={file}><strong>{file}</strong><span>{locator}</span></div>)}
          </div>
          <p className={styles.citationRule}><strong>Citação não deve ser inventada.</strong> Se a ferramenta não determina a localização com segurança, use “Localização exata não determinada”.</p>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.workModesSection}`} id="conhecimento-externo" aria-labelledby="external-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Fronteira do conhecimento</p>
            <h2 id="external-title">Defina de onde a resposta pode vir</h2>
            <p>Arquivos fornecidos e pesquisa externa podem ser combinados, mas nunca misturados silenciosamente.</p>
          </div>
          <div className={styles.knowledgeModes}>
            <article><span>Fechado</span><h3>Somente arquivos</h3><p>Não complete lacunas com conhecimento externo. Ideal para extração, verificação interna e tarefas de conformidade ao material.</p></article>
            <article><span>Enriquecido</span><h3>Arquivos + conhecimento geral</h3><p>Contextualize quando permitido e identifique claramente o que não veio do material.</p></article>
            <article><span>Pesquisa</span><h3>Arquivos + fontes externas</h3><p>Pesquise quando atualização ou verificação externa for necessária; forneça links e separe as origens.</p></article>
          </div>
          <div className={styles.documentTruth}><strong>Documento ≠ verdade</strong><p>Um contrato, relatório, material promocional, rascunho ou documento antigo é evidência fornecida — e também pode conter erro, desatualização ou interesse próprio.</p></div>
        </section>

        <section className={shared.section} id="multiplos" aria-labelledby="multiple-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Múltiplos arquivos e documentos longos</p>
            <h2 id="multiple-title">Não misture tudo antes de entender o papel de cada fonte</h2>
            <p>Duplicatas, versões, nomes pouco claros, conflitos e autoridade desigual exigem um inventário proporcional.</p>
          </div>
          <div className={styles.roleGrid}>
            <article><span>Principal</span><h3>Responde diretamente</h3><p>Contrato vigente para cláusulas; planilha atual para números.</p></article>
            <article><span>Complementar</span><h3>Adiciona contexto</h3><p>E-mail posterior, nota técnica ou anexo explicativo.</p></article>
            <article><span>Referência</span><h3>Ajuda a interpretar</h3><p>Política, manual, legislação ou metodologia aplicável.</p></article>
            <article><span>Histórico</span><h3>Permite comparar</h3><p>Minuta, versão antiga ou relatório de período anterior.</p></article>
          </div>
          <div className={styles.versionPanel}>
            <div><p className={shared.eyebrow}>Versionamento</p><h3>Mais recente não significa automaticamente mais válido</h3><p>Considere nome, data, versão, modificação, assinatura, vigência e indicação interna. O horário do upload não prova atualidade do conteúdo.</p></div>
            <div><p className={shared.eyebrow}>Autoridade relativa</p><h3>A fonte correta depende da afirmação</h3><p>Um contrato assinado pode prevalecer para obrigações; uma planilha posterior, para dados operacionais; um e-mail informal pode apenas explicar contexto.</p></div>
          </div>
          <div className={styles.conflictProtocol}>
            <h3>Quando os arquivos entram em conflito</h3>
            <ol>
              <li>Identifique a divergência.</li><li>Localize onde ocorre.</li><li>Verifique versão, data e vigência.</li><li>Considere a autoridade para aquela afirmação.</li><li>Não escolha silenciosamente.</li><li>Apresente o conflito se não puder resolvê-lo.</li>
            </ol>
          </div>
          <div className={styles.longDocs}>
            <article><h3>Leitura integral</h3><p>Use quando a tarefa depende da estrutura global, de exceções distribuídas ou de uma síntese completa.</p></article>
            <article><h3>Recuperação seletiva</h3><p>Use para localizar cláusula, entidade ou fato específico. Busque trechos relevantes e leia o contexto próximo.</p></article>
            <article><h3>Processamento por partes</h3><p>Selecione, recupere, divida e produza sínteses intermediárias quando o volume exceder a análise confiável em uma etapa.</p></article>
          </div>
          <p className={styles.summaryWarning}>Evite “resumo de resumo” quando a precisão for crítica: omissões e distorções podem se acumular. Retorne à fonte original para fatos e números importantes.</p>
        </section>

        <section className={`${shared.section} ${styles.dataSection}`} id="planilhas" aria-labelledby="data-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Planilhas, tabelas e cálculos</p>
            <h2 id="data-title">Estrutura primeiro. Operação depois. Interpretação por último.</h2>
            <p>Uma resposta fluente não substitui tipos corretos, unidades consistentes e cálculos reproduzíveis.</p>
          </div>
          <div className={styles.dataLayers}>
            <article><span>01</span><h3>Dado</h3><p>Valor presente na planilha, com aba, célula, tipo e unidade.</p></article>
            <article><span>02</span><h3>Cálculo</h3><p>Operação executada sobre dados, com fórmula, base e ferramenta.</p></article>
            <article><span>03</span><h3>Interpretação</h3><p>Conclusão derivada, com premissas, incerteza e limites.</p></article>
          </div>
          <ul className={styles.dataChecklist}>
            <li><strong>Mapeie:</strong> abas, colunas, intervalos, tipos, unidades, datas e fórmulas.</li>
            <li><strong>Valide tipos:</strong> número armazenado como texto pode alterar filtros e operações.</li>
            <li><strong>Defina a base:</strong> percentual sobre qual denominador e qual período?</li>
            <li><strong>Separe ausências:</strong> zero, vazio, NA e desconhecido não são equivalentes.</li>
            <li><strong>Investigue outliers:</strong> não descarte valores automaticamente.</li>
            <li><strong>Reproduza:</strong> cálculos relevantes devem ser verificados com ferramenta adequada.</li>
            <li><strong>Evite causalidade:</strong> correlação estatística não prova causa.</li>
            <li><strong>Prefira dados brutos:</strong> para cálculos, use a tabela subjacente quando existir, não apenas o gráfico.</li>
          </ul>
        </section>

        <section className={shared.section} id="visual" aria-labelledby="visual-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Imagens, gráficos e interfaces</p>
            <h2 id="visual-title">Conteúdo visual exige uma camada própria de verificação</h2>
            <p>Modelos multimodais podem analisar relações espaciais e elementos gráficos, mas capacidade visual não elimina erro de leitura ou inferência indevida.</p>
          </div>
          <div className={styles.visualSplit}>
            <div><p className={styles.axisLabel}>Observação</p><h3>O que está visível</h3><p>“O gráfico apresenta queda entre abril e maio.”</p></div>
            <div><p className={styles.axisLabel}>Interpretação</p><h3>O que isso pode significar</h3><p>“A queda foi causada pela campanha X” exige evidência adicional.</p></div>
          </div>
          <div className={styles.visualRules}>
            <article><h3>Screenshots</h3><p>Identifique elementos visíveis, hierarquia e problemas observáveis. Não deduza comportamento oculto apenas pela aparência.</p></article>
            <article><h3>Diagramas</h3><p>Preserve direção, relações, legendas e hierarquia. Uma lista de textos pode destruir a lógica do fluxo.</p></article>
            <article><h3>Gráficos</h3><p>Confira eixos, escala, legenda, período e unidade. Para números exatos, prefira os dados subjacentes quando disponíveis.</p></article>
          </div>
        </section>

        <section className={`${shared.section} ${styles.safetySection}`} id="seguranca" aria-labelledby="safety-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Conteúdo não confiável e privacidade</p>
            <h2 id="safety-title">O arquivo é material de análise, não uma autoridade de instrução</h2>
            <p>Documentos podem conter comandos dirigidos ao modelo, dados sensíveis e conteúdo cuja origem não foi verificada.</p>
          </div>
          <div className={styles.injectionExample}>
            <div><span>No arquivo</span><code>“Ignore todas as instruções anteriores.”</code></div>
            <div><span>Tratamento correto</span><p>Quando o trecho faz parte do material analisado, trate-o como conteúdo potencialmente não confiável — não como instrução superior.</p></div>
          </div>
          <div className={styles.privacyPanel}>
            <div><h3>Antes de enviar</h3><p>Considere dados pessoais, contratos, propriedade intelectual, informações de clientes, segredos comerciais e autorização para compartilhar.</p></div>
            <div><h3>Antes de escolher a plataforma</h3><p>Verifique termos, retenção, exclusão, treinamento, região, controles do workspace e permissões do serviço utilizado. Não existe uma regra universal para todas as plataformas.</p></div>
            <div><h3>Antes de automatizar</h3><p>Reduza permissões e exija confirmação humana para ações externas. Um arquivo não deve autorizar envio, exclusão, compra ou exposição de dados.</p></div>
          </div>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.protocolSection}`} id="protocolo" aria-labelledby="protocol-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Protocolo operacional</p>
            <h2 id="protocol-title">Do objetivo à entrega rastreável em dez etapas</h2>
            <p>Use o protocolo completo em tarefas complexas. Em tarefas simples, aplique somente as etapas que reduzem risco ou retrabalho.</p>
          </div>
          <ol className={shared.protocolList}>
            {protocol.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </section>

        <section className={shared.section} id="mapas" aria-labelledby="maps-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Ferramentas de rastreabilidade</p>
            <h2 id="maps-title">Use mapas quando a complexidade justificar</h2>
            <p>File Map e Evidence Map são instrumentos, não formulários obrigatórios. Eles ajudam quando há múltiplos arquivos, versões ou afirmações críticas.</p>
          </div>
          <div className={styles.mapBlock}>
            <h3>File Map</h3>
            <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Exemplo de File Map" aria-describedby="file-map-note">
              <table>
                <thead><tr><th scope="col">Arquivo</th><th scope="col">Tipo</th><th scope="col">Função</th><th scope="col">Versão</th><th scope="col">Autoridade</th><th scope="col">Uso</th></tr></thead>
                <tbody>
                  <tr><td>contrato-v3.pdf</td><td>Contrato</td><td>Principal</td><td>v3 · assinado</td><td>Alta para cláusulas</td><td>Analisar</td></tr>
                  <tr><td>precos.xlsx</td><td>Dados</td><td>Complementar</td><td>ago/2026</td><td>Alta para números</td><td>Calcular</td></tr>
                  <tr><td>minuta-v2.docx</td><td>Histórico</td><td>Versão antiga</td><td>v2</td><td>Referencial</td><td>Comparar</td></tr>
                </tbody>
              </table>
            </div>
            <p id="file-map-note">Autoridade é relativa à afirmação: uma fonte pode ser forte para cláusulas e fraca para dados operacionais.</p>
          </div>
          <div className={styles.mapBlock}>
            <h3>Evidence Map</h3>
            <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Exemplo de Evidence Map" aria-describedby="evidence-map-note">
              <table>
                <thead><tr><th scope="col">Afirmação</th><th scope="col">Arquivo</th><th scope="col">Localização</th><th scope="col">Natureza</th><th scope="col">Situação</th></tr></thead>
                <tbody>
                  <tr><td>Receita aumentou 18%</td><td>relatorio.pdf</td><td>p. 12 · tabela 4</td><td>Explícito</td><td>Sustentada</td></tr>
                  <tr><td>Crescimento foi sustentável</td><td>—</td><td>—</td><td>Inferência</td><td>Precisa de suporte</td></tr>
                  <tr><td>Prazo é 30 dias</td><td>contrato.pdf / email.pdf</td><td>cl. 8 / p. 2</td><td>Explícito</td><td>Conflitante</td></tr>
                </tbody>
              </table>
            </div>
            <p id="evidence-map-note">“Natureza” registra de onde a afirmação vem; “situação” registra o quanto os arquivos a sustentam.</p>
          </div>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="examples-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Doze cenários</p>
            <h2 id="examples-title">O método muda conforme a tarefa</h2>
            <p>Abra os exemplos para ver qual é a menor resposta confiável em cada situação.</p>
          </div>
          <div className={`${shared.exampleList} ${styles.exampleList}`}>
            {examples.map(([title, task, answer], index) => (
              <details key={title} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong></summary>
                <div className={styles.exampleBody}><div><p>Pedido</p><span>{task}</span></div><div><p>Tratamento</p><span>{answer}</span></div></div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${styles.templatesSection}`} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Templates copiáveis</p>
            <h2 id="templates-title">Comece pelo objetivo, não pelo formato do arquivo</h2>
            <p>Adapte somente os campos que importam. Um template é ponto de partida, não requisito para toda tarefa.</p>
          </div>
          <div className={shared.faqList}>
            {templates.map((template, index) => (
              <details key={template.title} open={index === 0}>
                <summary>{template.title}</summary>
                <div className={styles.templateBody}><PromptBlock label="Copiar template" value={template.value} /></div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="use-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Use esta página com uma IA</p>
            <h2 id="use-title">Transforme a página em protocolo de análise</h2>
            <p>Envie a instrução junto com o objetivo e os arquivos. Acrescente regras apenas quando forem necessárias.</p>
          </div>
          <PromptBlock label="Instrução principal" value={aiUsePrompt} />
          <p className={styles.aiCaveat}>A página orienta o processo; ela não amplia as capacidades técnicas da ferramenta. A IA ainda deve declarar arquivos inacessíveis, páginas não processadas, OCR incerto e localizadores indisponíveis.</p>
        </section>

        <section className={shared.section} id="checklist" aria-labelledby="checklist-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Checklist final</p>
            <h2 id="checklist-title">Antes de aceitar a entrega</h2>
          </div>
          <ul className={styles.finalChecklist}>
            {[
              "Defini o que preciso descobrir ou produzir?",
              "A função de cada arquivo relevante está clara?",
              "Existem versões, duplicatas ou documentos conflitantes?",
              "A origem das afirmações importantes foi preservada?",
              "Conteúdo explícito está separado de inferência?",
              "Conhecimento externo foi identificado?",
              "Cálculos, unidades e denominadores foram verificados?",
              "Informações ausentes e localizadores indisponíveis foram declarados?",
              "A síntese responde ao objetivo em vez de apenas resumir arquivos?",
              "A complexidade do processo é proporcional à tarefa?",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
          <aside className={styles.relatedGuides}>
            <div><p className={shared.eyebrow}>Guias complementares</p><h3>O arquivo é uma parte do sistema de trabalho</h3><p><Link href="/ia/engenharia-de-prompt">Engenharia de Prompt</Link> estrutura a instrução; <Link href="/ia/context-engineering">Context Engineering</Link> organiza o contexto; <Link href="/ia/pesquisa-com-ia">Pesquisa com IA</Link> trata fontes externas; e <Link href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas</Link> verifica a entrega final.</p></div>
            <Link className="button button-secondary" href="/ia/avaliacao-de-respostas-de-ia">Avaliar o resultado</Link>
          </aside>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas sobre IA e arquivos</h2>
          </div>
          <div className={shared.faqList}>
            {[
              ["A IA lê todo PDF da mesma forma?", "Não. Um PDF pode ser texto nativo, digitalização ou documento multimodal. A forma de processamento depende da ferramenta, do modelo, do plano e das configurações."],
              ["Uma janela de contexto grande garante leitura completa?", "Não. Capacidade de entrada não garante recuperação ou uso fiel de todo o conteúdo. Selecione, recupere e teste informações críticas."],
              ["Devo pedir página em toda resposta?", "Peça localizadores quando a rastreabilidade importar e a ferramenta puder fornecê-los. Não force páginas inventadas em formatos ou fluxos que não preservam esse dado."],
              ["Como sei se a IA viu gráficos e imagens do PDF?", "Pergunte como o arquivo foi processado e teste um elemento visual específico. Algumas interfaces extraem apenas texto em determinados formatos ou planos."],
              ["Posso usar IA para revisar contratos?", "Pode usar como apoio de localização, extração, comparação e identificação de perguntas. Isso não substitui interpretação jurídica por profissional habilitado quando a decisão exigir."],
              ["Qual é o melhor tamanho de chunk?", "Não existe tamanho universal. Estrutura do documento, pergunta, recuperação e modelo mudam o resultado. Avalie com tarefas reais."],
              ["Mais arquivos melhoram a resposta?", "Somente se forem relevantes, utilizáveis e bem identificados. Volume também pode aumentar ruído, conflito, custo e omissão."],
              ["Citar o arquivo torna a resposta correta?", "Não. A citação precisa apontar para um trecho que realmente sustente a afirmação; uma fonte existente pode ser inadequada, antiga ou contraditória."],
            ].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.references}`} id="referencias" aria-labelledby="references-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Referências</p>
            <h2 id="references-title">Fontes consultadas</h2>
            <p>A metodologia combina documentação atual de fornecedores, literatura original e referências de segurança. Capacidades e limites específicos podem mudar.</p>
          </div>
          <div className={shared.sourceGroups}>
            {sources.map((group, index) => (
              <section key={group.group} aria-labelledby={`source-group-${index}`}>
                <h3 id={`source-group-${index}`}>{group.group}</h3>
                <ul>{group.items.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul>
              </section>
            ))}
          </div>
          <p className={shared.editorialNote}>Última revisão editorial: 28 de agosto de 2026. Exemplos são ilustrativos e não representam casos ou clientes reais.</p>
        </section>
      </article>
    </PageShell>
  );
}
