import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./research.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/pesquisa-com-ia";
const TITLE = "Pesquisa com IA: método para buscar e verificar fontes";
const DESCRIPTION =
  "Aprenda a pesquisar com inteligência artificial: definir perguntas, buscar fontes, verificar evidências, citar corretamente e declarar incertezas.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "pesquisa com IA",
  "como pesquisar com IA",
  "pesquisa aprofundada com IA",
  "fontes confiáveis IA",
  "verificar informações com IA",
  "deep research",
  "pesquisa acadêmica com IA",
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

const useWithAiPrompt = `Acesse e leia https://www.cleversouza.com/ia/pesquisa-com-ia.

Use o protocolo da página para realizar a pesquisa abaixo. Defina o escopo, planeje buscas proporcionais à pergunta, priorize as fontes mais adequadas para cada afirmação e abra as fontes antes de citá-las. Verifique atualidade, origem e correspondência entre afirmação e evidência. Procure divergências e evidência contrária quando forem relevantes. Diferencie fatos, inferências, hipóteses, opiniões e informações não confirmadas.

Entregue uma síntese que responda à pergunta, com citações próximas das afirmações sustentadas, limitações reais e indicação clara do que não foi possível confirmar. Pare quando as questões críticas estiverem sustentadas e novas buscas tiverem baixo ganho provável.

Pesquisa:
[escreva aqui a pergunta, o objetivo ou a decisão]`;

const quickTemplate = `Pesquise: [TEMA OU PERGUNTA]

Objetivo: [o que preciso descobrir ou decidir]
Escopo, se relevante: [período, local, público, produto ou versão]
Priorize: [tipos de fonte adequados]
Verifique especialmente: [afirmações críticas]
Entregue: [formato desejado]

Cite as fontes que realmente sustentam as afirmações e deixe explícito o que não puder ser confirmado.`;

const deepTemplate = `Objetivo e decisão
[O que esta pesquisa precisa permitir compreender ou decidir.]

Pergunta central
[Uma pergunta investigável e delimitada.]

Escopo
[Período, território, público, produto, versão e exclusões.]

Subperguntas
[Aspectos que precisam ser respondidos. Decomponha somente quando ajudar.]

Fontes prioritárias
[Quem teria acesso direto e autoridade adequada para cada tipo de informação.]

Estratégia de busca
[Termos técnicos, sinônimos, idiomas, domínios, documentos e intervalo temporal.]

Verificação
[Afirmações críticas, origem, data, método, números e correspondência entre citação e afirmação.]

Contraste
[Evidência contrária, explicações alternativas e divergências relevantes.]

Ferramentas
[Web, arquivos, base privada, planilha, código ou calculadora, se necessárias.]

Entrega
[Estrutura, nível de detalhe e audiência. Diferencie fato, inferência, hipótese, opinião e não confirmado.]

Condição de parada
[Encerre quando as perguntas críticas estiverem sustentadas, as divergências estiverem mapeadas e novas buscas tiverem baixo ganho provável.]

Nunca invente fontes, dados ou conclusões. Declare lacunas e limitações materiais.`;

const verificationTemplate = `Verifique a afirmação:
"[AFIRMAÇÃO]"

1. Torne a afirmação verificável: identifique sujeito, ação, número, período, território e versão.
2. Localize a possível origem da informação.
3. Abra a fonte e confirme se ela sustenta exatamente a afirmação.
4. Verifique data, contexto, método e definições.
5. Procure confirmação independente e evidência contrária quando o impacto justificar.
6. Classifique o resultado como: confirmada, parcialmente confirmada, contradita, não confirmada ou inconclusiva.
7. Explique a classificação de forma breve e proporcional às evidências.
8. Cite somente fontes verificadas e indique o que permaneceu incerto.`;

const comparisonTemplate = `Compare [OPÇÃO A] e [OPÇÃO B] para [OBJETIVO/PÚBLICO].

1. Defina antes os critérios relevantes para a decisão.
2. Pesquise dados atuais e equivalentes para cada opção.
3. Use fontes comparáveis e informe diferenças de período, versão, plano, unidade ou método.
4. Não preencha lacunas com suposições.
5. Mostre vantagens, limites e trade-offs por critério.
6. Se não houver base suficiente para declarar uma opção superior, não invente um vencedor.

Entregue: tabela comparativa, análise curta, lacunas dos dados e conclusão condicionada ao objetivo. Cite cada dado importante.`;

const scienceTemplate = `Pesquise a evidência científica sobre:
[INTERVENÇÃO OU EXPOSIÇÃO] para [POPULAÇÃO], considerando [RESULTADO].

Priorize revisões sistemáticas, meta-análises e estudos originais adequados à pergunta. Diferencie desenho observacional de experimental, associação de causalidade e significância estatística de relevância prática. Informe população, tamanho amostral, magnitude do efeito, incerteza, replicação, limitações e conflitos de interesse quando disponíveis.

Identifique preprints e não os trate como evidência definitiva. Procure o estudo original por trás de notícias ou releases. Não transforme achados de grupo em aconselhamento individual.

Entregue: conclusão proporcional à evidência, resumo dos estudos mais relevantes, divergências, limitações e referências verificadas.`;

const protocol = [
  ["Delimitar", "Defina pergunta, objetivo ou decisão; período, território, público, versão e rigor necessário."],
  ["Mapear", "Identifique subperguntas, informações necessárias, fontes prováveis e ferramentas. Não decomponha sem ganho real."],
  ["Buscar", "Combine consultas exploratórias e confirmatórias; expanda termos, idiomas, domínios, datas e formatos quando necessário."],
  ["Selecionar", "Escolha a fonte adequada à afirmação. Considere proximidade, autoridade, método, atualidade, transparência e conflito de interesse."],
  ["Verificar", "Abra a fonte, recupere a origem e confirme se texto, número ou documento sustenta exatamente o que será afirmado."],
  ["Contrastar", "Procure independência, divergência, evidência contrária, explicações alternativas e mudanças de versão ou período."],
  ["Sintetizar", "Responda à pergunta. Separe fatos de inferências e hipóteses; registre evidências, lacunas e incerteza proporcional."],
  ["Encerrar e entregar", "Pare quando as questões críticas estiverem sustentadas e o ganho marginal cair. Cite, explique limites e não invente o ausente."],
];

const examples = [
  {
    type: "Pergunta simples",
    title: "Quando uma consulta objetiva é suficiente",
    question: "Qual é a capital do Paraná?",
    diagnosis: "É um fato estável, de baixo risco e amplamente estabelecido. Uma resposta direta basta; pesquisa extensa seria desperdício.",
    answer: "Curitiba é a capital do Paraná.",
  },
  {
    type: "Atualidade",
    title: "Versão atual exige fonte oficial e data",
    question: "Qual é o modelo mais recente da empresa X?",
    diagnosis: "“Mais recente” muda rapidamente e pode significar anúncio, preview, API ou disponibilidade geral. É preciso fixar a data e verificar documentação ou release notes oficiais.",
    answer: "Na data da pesquisa, a documentação oficial apresenta [MODELO] como [STATUS]. O anúncio ocorreu em [DATA], mas a disponibilidade é [ESCOPO].",
  },
  {
    type: "Produto",
    title: "O nome do produto não comprova uma característica",
    question: "O produto X contém o ingrediente Y?",
    diagnosis: "A resposta depende da versão e do mercado. Marketplace, fórmula estrangeira e produto semelhante não substituem rótulo ou ficha técnica atual do item investigado.",
    answer: "Não encontrei documentação oficial atual da versão brasileira que confirme Y. Resultado: não confirmado.",
  },
  {
    type: "Mercado",
    title: "Definição e denominador antes da tendência",
    question: "O mercado de IA está crescendo?",
    diagnosis: "“Mercado de IA” pode representar software, hardware, investimento, receita ou adoção. Números só são comparáveis com escopo, moeda, período e metodologia compatíveis.",
    answer: "Os indicadores A e B apontam crescimento em segmentos distintos; não devem ser somados. A conclusão está limitada a [RECORTE] entre [PERÍODO].",
  },
  {
    type: "Ciência",
    title: "Associação não deve virar causalidade",
    question: "A exposição A causa o resultado B?",
    diagnosis: "Se a evidência for observacional, confundimento e causalidade reversa podem permanecer. A linguagem da conclusão deve refletir o desenho, a magnitude e a consistência.",
    answer: "Os estudos observacionais encontrados relatam associação entre A e B, mas não estabelecem que A cause B. Há limitações em [FATORES].",
  },
  {
    type: "Notícia",
    title: "Várias páginas podem repetir uma única origem",
    question: "O evento anunciado realmente aconteceu?",
    diagnosis: "Três matérias copiadas de um release não são três confirmações independentes. Recupere anúncio, registro ou documento original e procure cobertura independente.",
    answer: "O anúncio foi confirmado pela fonte original. A ocorrência efetiva ainda não pôde ser verificada de modo independente.",
  },
  {
    type: "Conflito",
    title: "Discordância pode revelar versões diferentes",
    question: "A regra atual é X ou Y?",
    diagnosis: "Compare data de vigência, jurisdição, versão e pergunta respondida. Uma fonte pode ter substituído a outra; ou ambas podem continuar válidas em contextos diferentes.",
    answer: "X vale para [CONTEXTO]; Y vale para [OUTRO CONTEXTO]. As fontes não sustentam uma regra única sem essa distinção.",
  },
];

const sources = [
  {
    group: "Documentação oficial",
    items: [
      ["OpenAI — Deep research", "https://developers.openai.com/api/docs/guides/deep-research"],
      ["OpenAI — Web search", "https://developers.openai.com/api/docs/guides/tools-web-search"],
      ["OpenAI — Pesquisa e pesquisa aprofundada", "https://openai.com/pt-BR/academy/search-and-deep-research/"],
      ["OpenAI — File search", "https://developers.openai.com/api/docs/guides/tools-file-search"],
      ["Anthropic — Citations", "https://platform.claude.com/docs/en/build-with-claude/citations"],
      ["Anthropic — Search results para RAG", "https://platform.claude.com/docs/en/build-with-claude/search-results"],
      ["Anthropic — Web fetch", "https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool"],
      ["Google — Gemini Deep Research", "https://ai.google.dev/gemini-api/docs/deep-research"],
      ["Google — Grounding com Google Search", "https://ai.google.dev/gemini-api/docs/google-search"],
      ["Google — Como o Modo IA pesquisa", "https://support.google.com/websearch/answer/16011537?hl=pt-BR"],
      ["Microsoft — Researcher agent", "https://learn.microsoft.com/en-us/microsoft-365/copilot/researcher-agent"],
      ["Meta — RAFT e RAG", "https://ai.meta.com/blog/raft-llama-retrieval-augmented-generation-supervised-fine-tuning-microsoft/"],
    ],
  },
  {
    group: "Pesquisa e padrões metodológicos",
    items: [
      ["Retrieval-Augmented Generation — paper original", "https://arxiv.org/abs/2005.11401"],
      ["ALCE — avaliação de respostas com citações", "https://aclanthology.org/2023.emnlp-main.398/"],
      ["Attribute or Abstain — atribuição em documentos longos", "https://aclanthology.org/2024.emnlp-main.463/"],
      ["Complex Claim Verification — decomposição e evidência", "https://aclanthology.org/2024.naacl-long.196/"],
      ["DeepResearch Bench", "https://arxiv.org/abs/2506.11763"],
      ["DRACO — precisão, completude e objetividade", "https://arxiv.org/abs/2602.11685"],
      ["Cited but Not Verified — qualidade de atribuição", "https://arxiv.org/abs/2605.06635"],
      ["MMDeepResearch-Bench — evidência multimodal", "https://arxiv.org/abs/2601.12346"],
      ["Trustworthiness in RAG Systems — survey", "https://arxiv.org/abs/2409.10102"],
      ["PRISMA 2020 — relato de revisões sistemáticas", "https://www.prisma-statement.org/prisma-2020"],
    ],
  },
];

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

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: TITLE,
    alternativeHeadline: "Como buscar, verificar, sintetizar e citar informações usando inteligência artificial",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    image: `${SITE_URL}/social/pesquisa-com-ia.png`,
    inLanguage: "pt-BR",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    author: { "@type": "Person", name: "Cleverson Batista de Souza", url: `${SITE_URL}/sobre` },
    publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    about: ["Pesquisa com inteligência artificial", "Verificação de fatos", "Síntese de evidências", "Information retrieval"],
    proficiencyLevel: "Beginner to Advanced",
    isAccessibleForFree: true,
  };

  return (
    <PageShell
      active={PATH}
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Pesquisa com IA" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.researchPage}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Guia de referência · protocolo operacional</p>
            <h1>Pesquisa com IA</h1>
            <p className={shared.heroLead}>
              Como definir perguntas, buscar fontes, verificar evidências e produzir
              conclusões rastreáveis — com rigor proporcional ao custo de estar errado.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#resposta-rapida">Aprender o método</a>
              <a className="button button-secondary" href="#usar-com-ia">Usar com uma IA</a>
            </div>
            <p className={shared.updateLine}>
              <span>Última atualização: 28 de agosto de 2026</span>
              <span aria-hidden="true">·</span>
              <span>Leitura progressiva: do essencial ao avançado</span>
            </p>
          </div>
          <div className={`${shared.contextVisual} ${styles.researchVisual}`} aria-hidden="true">
            <p>Uma conclusão confiável precisa de percurso</p>
            <ol>
              {["Pergunta delimitada", "Busca planejada", "Fonte adequada", "Evidência verificada", "Síntese proporcional"].map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ol>
            <div className={shared.contextHalo} />
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            {[
              ["resposta-rapida", "Resposta rápida"], ["diferenca", "Perguntar × pesquisar"],
              ["pergunta", "Definir a pergunta"], ["fontes", "Escolher fontes"],
              ["busca", "Estratégia de busca"], ["verificacao", "Verificar evidências"],
              ["ciencia", "Ciência e números"], ["protocolo", "Protocolo completo"],
              ["exemplos", "Exemplos"], ["templates", "Templates"],
              ["usar-com-ia", "Usar com IA"], ["checklist", "Checklist"],
              ["referencias", "Referências"],
            ].map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ol>
        </nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="resposta-rapida-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Resposta rápida</p>
            <h2 id="resposta-rapida-title">Como pesquisar melhor com IA?</h2>
            <p>Use a IA para acelerar descoberta, leitura e síntese. Preserve a verificação como etapa separada e observável.</p>
          </div>
          <div className={styles.quickSteps}>
            {[["01", "Delimite", "O que precisa ser descoberto ou decidido?"], ["02", "Planeje", "Quais evidências e fontes responderiam melhor?"], ["03", "Busque", "Use consultas e ferramentas proporcionais à pergunta."], ["04", "Verifique", "Abra as fontes e confira origem, data e suporte."], ["05", "Contraste", "Procure divergência e evidência contrária relevante."], ["06", "Sintetize", "Responda, cite, qualifique e declare lacunas."]].map(([n,t,p]) => (
              <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>
            ))}
          </div>
          <div className={shared.keyPrinciple}>
            <strong>Regra central</strong>
            <p>Uma resposta gerada por IA não é automaticamente uma fonte. A fonte é a evidência verificável; a IA recupera, interpreta e sintetiza.</p>
          </div>
        </section>

        <section className={`${shared.section} ${styles.contrastSection}`} id="diferenca" aria-labelledby="diferenca-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>A distinção fundamental</p>
            <h2 id="diferenca-title">Perguntar produz uma resposta. Pesquisar produz uma conclusão rastreável.</h2>
          </div>
          <div className={styles.askResearchGrid}>
            <article><p>Consulta à IA</p><h3>O modelo responde</h3><ul><li>pode usar conhecimento interno;</li><li>é adequada a conceitos estáveis e tarefas simples;</li><li>fluência não demonstra factualidade;</li><li>pode não revelar de onde veio a informação.</li></ul></article>
            <article><p>Pesquisa com IA</p><h3>O sistema investiga</h3><ul><li>define escopo e necessidade de evidência;</li><li>consulta web, arquivos ou bases apropriadas;</li><li>verifica fontes e contrasta resultados;</li><li>entrega síntese, citações e limitações.</li></ul></article>
          </div>
          <p className={styles.bridgeNote}>A IA pode ocupar vários papéis: formuladora de consultas, navegadora, leitora, extratora, calculadora, organizadora e redatora. Nenhum desses papéis elimina a necessidade de conferir as afirmações importantes.</p>
        </section>

        <section className={shared.section} id="pergunta" aria-labelledby="pergunta-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Antes da primeira busca</p>
            <h2 id="pergunta-title">Defina o problema que a pesquisa precisa resolver</h2>
            <p>“Pesquise inteligência artificial” descreve um tema, não uma investigação. Uma pergunta útil conecta informação a uma finalidade.</p>
          </div>
          <div className={styles.scopeGrid}>
            {[["Decisão", "O que será feito com o resultado?"], ["Pergunta", "Qual lacuna precisa ser respondida?"], ["Recorte", "Que período, território, público ou versão importa?"], ["Evidência", "Que nível de suporte a conclusão exige?"], ["Formato", "Qual entrega permite usar o resultado?"], ["Risco", "Qual é o custo provável de estar errado?"]].map(([t,p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
          </div>
          <div className={styles.beforeAfter}>
            <div><p>Antes</p><blockquote>“Pesquise sobre inteligência artificial.”</blockquote><span>Escopo, período e finalidade indefinidos.</span></div>
            <div><p>Depois</p><blockquote>“Pesquise as mudanças mais relevantes em modelos de IA generativa nos últimos 90 dias. Priorize documentação oficial e informe data, disponibilidade, impacto prático e fonte.”</blockquote><span>Mais palavras não são o ganho; menos ambiguidade é.</span></div>
          </div>
          <div className={shared.evidenceNote}>
            <span>Rigor proporcional</span><p>A profundidade deve crescer com <strong>impacto, risco, incerteza e custo do erro</strong>. Uma resposta simples não precisa de cinquenta fontes; uma decisão clínica, jurídica, financeira ou estratégica pode exigir especialistas e bases próprias do domínio.</p>
          </div>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.sourceSection}`} id="fontes" aria-labelledby="fontes-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Autoridade contextual</p>
            <h2 id="fontes-title">A melhor fonte depende da afirmação</h2>
            <p>Não existe uma hierarquia universal. Pergunte quem teria acesso direto, método adequado e responsabilidade pela informação.</p>
          </div>
          <div className={styles.sourceMap}>
            {[["Produto ou API", "Documentação, release notes, ficha técnica e suporte oficial."], ["Lei ou norma", "Texto legal, regulador, tribunal e órgão competente."], ["Ciência", "Estudo original, revisão sistemática, meta-análise e base acadêmica."], ["Empresa", "Filings, relatórios, políticas, comunicados e documentação técnica."], ["Notícia", "Fonte primária disponível e cobertura jornalística independente."], ["Experiência de uso", "Comunidades e relatos podem revelar problemas recorrentes — sem provar regras gerais."]].map(([t,p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
          </div>
          <div className={styles.primarySecondary}>
            <article><span>Fonte primária</span><h3>Próxima da informação original</h3><p>Documento oficial, dado bruto, estudo original, entrevista direta ou registro. Pode ter interesse próprio e exigir interpretação.</p></article>
            <article><span>Fonte secundária</span><h3>Interpreta, compara ou contextualiza</h3><p>Pode revelar limites, consequências e divergências que a fonte original não discute. Não é inferior por definição.</p></article>
          </div>
          <p className={shared.darkCallout}><strong>Critério correto</strong><span>Use a fonte mais adequada para sustentar a afirmação — e preserve fontes intermediárias quando acrescentarem análise relevante.</span></p>
        </section>

        <section className={shared.section} id="busca" aria-labelledby="busca-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Descoberta e recuperação</p>
            <h2 id="busca-title">Uma busca encontra pistas; uma estratégia testa caminhos</h2>
            <p>Consultas diferentes descobrem fontes diferentes. Comece amplo o suficiente para aprender o vocabulário e refine conforme surgem entidades, autores, documentos e contradições.</p>
          </div>
          <div className={styles.queryTypes}>
            {[["Exploratória", "Mapeie termos, entidades, debates e fontes prováveis."], ["Técnica", "Use nomes oficiais, siglas, autores, títulos e vocabulário do domínio."], ["Direcionada", "Pesquise por domínio, tipo de arquivo, frase exata, data ou versão."], ["Confirmatória", "Localize a origem e confirme detalhes específicos."], ["Adversarial", "Busque limitações, críticas, resultados nulos e explicações alternativas."], ["Multilíngue", "Use inglês, idioma original do estudo, organização ou mercado quando ampliar a descoberta."]].map(([t,p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
          </div>
          <div className={styles.searchSequence} aria-label="Sequência de pesquisa">
            {["Pergunta", "Termos", "Consultas", "Fontes", "Novas pistas", "Verificação"].map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
          </div>
          <div className={styles.webLimits}>
            <h3>Resultados de busca não equivalem à leitura da fonte</h3>
            <p><strong>Snippet não é fonte.</strong> Pode estar truncado, desatualizado ou fora de contexto. Páginas podem exigir JavaScript, estar atrás de paywall, bloquear robôs, mudar sem aviso ou desaparecer. Para afirmações importantes, abra a página ou documento e registre o que realmente foi verificado.</p>
          </div>
        </section>

        <section className={shared.section} id="verificacao" aria-labelledby="verificacao-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Da citação à evidência</p>
            <h2 id="verificacao-title">Verifique se a fonte sustenta a afirmação correspondente</h2>
            <p>Link válido e assunto relacionado ainda não bastam. A pergunta é: esta passagem, tabela ou dado permite dizer exatamente isso?</p>
          </div>
          <div className={styles.verifyGrid}>
            {[["Proveniência", "Siga a cadeia até a origem quando possível: blog → notícia → release → documento."], ["Atualidade", "Confira publicação, atualização, vigência, versão e mudanças posteriores."], ["Método", "Entenda população, amostra, definições, coleta, análise e limitações."], ["Correspondência", "Associe cada afirmação crítica à evidência específica que a sustenta."], ["Independência", "Detecte quando muitas páginas repetem a mesma origem."], ["Conflito", "Compare datas, versões, escopos e métodos antes de forçar consenso."]].map(([t,p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
          </div>
          <div className={styles.freshnessPanel}>
            <div><p>Estável</p><strong>Conceitos históricos</strong><span>Verificação pontual costuma bastar.</span></div>
            <div><p>Mutação lenta</p><strong>Métodos e algumas normas</strong><span>Confirme vigência e revisão relevante.</span></div>
            <div><p>Mutação rápida</p><strong>Modelos, preços, APIs e notícias</strong><span>Exija fonte atual, data e versão.</span></div>
          </div>
          <p className={styles.dateWarning}><strong>Data do documento ≠ data da informação.</strong> Uma página atualizada pode manter conteúdo antigo; uma página antiga pode continuar correta. Leia o período e a versão dentro do conteúdo.</p>
          <div className={styles.evidenceMatrix}>
            <h3>Matriz de evidências</h3>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Afirmação</th><th>Evidência</th><th>Fonte e data</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>Recurso X foi lançado</td><td>Release e documentação oficial</td><td>Fonte A · 2026</td><td><span className={styles.confirmed}>Confirmado</span></td></tr>
                  <tr><td>Técnica Y melhora Z</td><td>Dois estudos pequenos e divergentes</td><td>Fontes B/C · 2024–25</td><td><span className={styles.limited}>Limitado</span></td></tr>
                  <tr><td>Produto contém W</td><td>Nenhuma ficha atual localizada</td><td>—</td><td><span className={styles.unconfirmed}>Não confirmado</span></td></tr>
                </tbody>
              </table>
            </div>
            <p>A matriz é uma ferramenta de rastreabilidade, não um escore científico. Registre o suficiente para auditar afirmações críticas.</p>
          </div>
          <div className={styles.statusTaxonomy}>
            {[["Fato verificado", "Diretamente sustentado pela evidência citada."], ["Inferência", "Conclusão derivada de fatos; explique a ponte lógica."], ["Hipótese", "Possibilidade ainda não estabelecida."], ["Opinião", "Avaliação subjetiva ou preferência."], ["Não confirmado", "A busca não encontrou suporte suficiente."], ["Inconclusivo", "A evidência é insuficiente ou conflitante para decidir."]].map(([t,p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
          </div>
          <div className={shared.evidenceNote}><span>Ausência de evidência</span><p>Não encontrar suporte não prova automaticamente que algo é falso. Pode indicar que a evidência não existe, não foi publicada, não está acessível ou não foi localizada. Prefira: <strong>“Não encontrei evidência suficiente para confirmar.”</strong></p></div>
        </section>

        <section className={shared.section} id="ciencia" aria-labelledby="ciencia-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Ciência, documentos e números</p>
            <h2 id="ciencia-title">O tipo de evidência limita o tipo de conclusão</h2>
            <p>Pesquisa científica e análise de dados exigem perguntas próprias. A IA pode organizar o trabalho, mas não transforma desenho fraco em evidência forte.</p>
          </div>
          <div className={styles.advancedGrid}>
            <article><h3>Estudos</h3><p>Identifique desenho, população, amostra, comparação, desfecho, magnitude do efeito, incerteza, replicação, vieses e conflitos de interesse.</p><strong>Correlação não estabelece causalidade.</strong></article>
            <article><h3>Preprints</h3><p>Podem trazer pesquisa recente, mas ainda podem não ter passado por revisão por pares. Sinalize o status e acompanhe versões posteriores.</p><strong>Recente não significa definitivo.</strong></article>
            <article><h3>Release × estudo</h3><p>“A empresa afirma” é diferente de “a evidência demonstra”. Procure o trabalho original e verifique se o release preserva método e limites.</p><strong>Recupere a origem.</strong></article>
            <article><h3>Estatísticas</h3><p>Rastreie definição, denominador, população, período, unidade, moeda, método e revisão. Números virais frequentemente perdem contexto.</p><strong>Sem denominador, a taxa pode enganar.</strong></article>
            <article><h3>Cálculos</h3><p>Pesquisar o dado e calcular o resultado são tarefas diferentes. Use planilha, código ou calculadora e registre fórmula, unidades e arredondamentos.</p><strong>Valide operações relevantes.</strong></article>
            <article><h3>Documentos e mídia</h3><p>Cite página, seção, tabela, capítulo, linha ou célula. Examine gráficos, mapas e diagramas; extração de texto pode omitir evidência visual.</p><strong>Separe conteúdo interno de contexto externo.</strong></article>
          </div>
          <div className={styles.ragPanel}>
            <div><p className={shared.eyebrow}>Recuperação e agentes</p><h3>RAG oferece contexto; agentes oferecem percurso</h3></div>
            <div><p><strong>RAG</strong> recupera trechos de arquivos ou bases para fundamentar a resposta. <strong>Agentes de pesquisa</strong> podem planejar, navegar, usar ferramentas, refinar consultas e sintetizar várias fontes.</p><p>Ambos ampliam capacidade, mas podem recuperar material inadequado, interpretar mal uma fonte ou citar sem suporte suficiente. Autonomia não elimina avaliação.</p></div>
          </div>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.protocolSection}`} id="protocolo" aria-labelledby="protocolo-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Protocolo operacional</p>
            <h2 id="protocolo-title">Da pergunta à conclusão verificável</h2>
            <p>Esta organização editorial, apresentada por Clever Souza, integra práticas de busca, avaliação de fontes, verificação e síntese. Não é uma alegação de método científico exclusivo.</p>
          </div>
          <ol className={`${shared.protocolList} ${styles.protocolList}`}>
            {protocol.map(([title, text], index) => <li key={title}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
          <div className={styles.stopPanel}>
            <div><p className={shared.eyebrow}>Condição de parada</p><h3>Pesquisa profunda não significa pesquisa infinita</h3></div>
            <ul><li>as perguntas principais foram respondidas;</li><li>as afirmações críticas estão sustentadas;</li><li>fontes novas começam a repetir a mesma evidência;</li><li>divergências e lacunas relevantes estão explícitas;</li><li>o custo de buscar mais supera o benefício provável.</li></ul>
          </div>
          <div className={shared.deliveryRule}><strong>Quando continuar</strong><p>Continue se uma decisão crítica ainda depender de dado não verificado, se houver conflito material sem explicação, se a informação puder ter mudado ou se as citações não sustentarem as afirmações centrais.</p></div>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="exemplos-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Aplicação proporcional</p>
            <h2 id="exemplos-title">Sete pesquisas, sete níveis de rigor</h2>
            <p>Os exemplos mostram que a resposta correta pode ser direta, condicionada, inconclusiva ou “não confirmado”.</p>
          </div>
          <div className={shared.exampleList}>
            {examples.map((example, index) => <details key={example.title} open={index === 0}><summary><span>{example.type}</span><strong>{example.title}</strong></summary><div className={shared.exampleContent}><PromptBlock label="Pergunta" value={example.question} /><div className={shared.diagnosis}><p>Diagnóstico</p><span>{example.diagnosis}</span></div><div className={styles.modelAnswer}><p>Forma de conclusão</p><span>{example.answer}</span></div></div></details>)}
          </div>
        </section>

        <section className={shared.section} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Ferramentas reutilizáveis</p>
            <h2 id="templates-title">Escolha o menor template que resolva a tarefa</h2>
            <p>Campos são opções, não obrigações. A estrutura deve reduzir ambiguidade e aumentar verificabilidade — não apenas alongar o pedido.</p>
          </div>
          <div className={styles.templateStack}>
            <PromptBlock label="Pesquisa rápida" value={quickTemplate} />
            <details><summary>Pesquisa aprofundada</summary><PromptBlock label="Template avançado" value={deepTemplate} /></details>
            <details><summary>Verificação de uma afirmação</summary><PromptBlock label="Fact-checking" value={verificationTemplate} /></details>
            <details><summary>Comparação criteriosa</summary><PromptBlock label="Comparação" value={comparisonTemplate} /></details>
            <details><summary>Pesquisa científica</summary><PromptBlock label="Evidência científica" value={scienceTemplate} /></details>
          </div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="usar-com-ia-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Contexto para sistemas de IA</p>
            <h2 id="usar-com-ia-title">Use esta página como protocolo de pesquisa</h2>
            <p>Em uma IA capaz de acessar páginas web, copie a instrução abaixo e acrescente sua pergunta. A URL fornece método; seu pedido fornece objetivo e escopo.</p>
          </div>
          <PromptBlock label="Comando operacional" value={useWithAiPrompt} />
          <div className={styles.aiRules}>
            <h3>Ao ler esta página, a IA deve</h3>
            <ol>{protocol.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}</ol>
          </div>
          <p className={shared.aiCaveat}>Se o sistema não puder acessar URLs, copie o protocolo e o template adequado. Não envie documentos sensíveis sem verificar permissões, retenção de dados e necessidade real.</p>
        </section>

        <section className={shared.section} id="checklist" aria-labelledby="checklist-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Validação final</p>
            <h2 id="checklist-title">Checklist antes de usar a conclusão</h2>
          </div>
          <ul className={styles.finalChecklist}>
            {["A pergunta e o escopo estão claros?", "Cada afirmação crítica possui evidência adequada?", "As fontes foram abertas, não apenas vistas em snippets?", "Datas, versões, território e definições foram conferidos?", "As fontes são independentes ou repetem a mesma origem?", "Evidência contrária e conflitos relevantes foram procurados?", "Fatos, inferências, hipóteses e opiniões estão diferenciados?", "Números têm unidade, população, período, denominador e método?", "As citações sustentam exatamente as afirmações próximas?", "Lacunas e limitações estão explícitas?", "O nível de rigor corresponde ao custo de errar?", "Novas buscas ainda teriam ganho provável relevante?"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ul>
          <aside className={styles.relatedGuide}><div><p className={shared.eyebrow}>Guias complementares</p><h3>Antes e depois da pesquisa</h3><p>Antes de buscar, use <Link href="/ia/pesquisa-aprofundada">Pesquisa Aprofundada</Link> para formular a pergunta, calibrar o rigor e criar o Research Brief. Use <Link href="/ia/engenharia-de-prompt">Engenharia de Prompt</Link> para estruturar a instrução. Depois da síntese, use <Link href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas de IA</Link> para auditar aderência, fatos, fontes, lacunas e riscos.</p></div><Link className="button button-secondary" href="/ia/avaliacao-de-respostas-de-ia">Avaliar uma resposta</Link></aside>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Perguntas frequentes</p><h2 id="faq-title">Dúvidas que mudam a pesquisa</h2></div>
          <div className={shared.faqList}>
            {[["Toda pergunta precisa de pesquisa na web?", "Não. Conceitos estáveis, tarefas criativas e perguntas simples podem ser respondidos com conhecimento geral. Pesquise quando atualidade, precisão verificável, especificidade ou custo de erro importarem."], ["Três fontes confirmam uma informação?", "Não necessariamente. Três páginas podem copiar a mesma origem. Procure independência, qualidade e correspondência com a afirmação."], ["Fonte primária é sempre melhor?", "Não. Ela é mais próxima da origem, mas pode ter interesse próprio, lacunas ou linguagem técnica. Fontes secundárias podem comparar, criticar e contextualizar."], ["Posso confiar porque a resposta tem links?", "Não automaticamente. Verifique se os links existem, se foram lidos e se sustentam as afirmações associadas."], ["RAG elimina alucinações?", "Não. A recuperação pode trazer conteúdo irrelevante, incorreto ou desatualizado, e o modelo pode interpretá-lo mal. RAG melhora acesso a contexto; ainda exige avaliação."], ["Como declarar confiança?", "Use linguagem qualitativa ligada à evidência: confirmado, provável, limitado, conflitante, não confirmado ou inconclusivo. Evite porcentagens artificiais sem método de calibração."], ["Quando devo procurar um especialista?", "Quando a decisão exigir interpretação profissional, acesso a bases especializadas, responsabilidade técnica ou gestão de riscos clínicos, jurídicos, financeiros ou de segurança."]].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.references}`} id="referencias" aria-labelledby="referencias-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Fontes e literatura</p>
            <h2 id="referencias-title">Referências utilizadas</h2>
            <p>A curadoria prioriza documentação oficial, trabalhos originais e padrões metodológicos. Recursos de fornecedores descrevem capacidades específicas; não foram tratados como leis universais.</p>
          </div>
          <div className={`${shared.sourceGroups} ${styles.sourceGroups}`}>
            {sources.map((group, groupIndex) => <section key={group.group} aria-labelledby={`source-group-${groupIndex}`}><h3 id={`source-group-${groupIndex}`}>{group.group}</h3><ul>{group.items.map(([label,url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></section>)}
          </div>
          <p className={shared.editorialNote}>Esta página é um guia editorial e operacional. Pesquisa científica sistemática, investigação jornalística, auditoria, perícia e aconselhamento profissional possuem métodos e responsabilidades próprios. Ferramentas e capacidades de IA mudam; confirme documentação e versão na data de uso.</p>
        </section>
      </article>
    </PageShell>
  );
}
