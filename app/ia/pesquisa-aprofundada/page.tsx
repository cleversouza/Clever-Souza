import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./deep-research.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/pesquisa-aprofundada";
const SEO_TITLE = "Pesquisa Aprofundada com IA: método e prompts | Clever Souza";
const DESCRIPTION =
  "Aprenda a projetar uma Pesquisa Aprofundada com IA: defina pergunta, rigor, fontes e contraevidência, crie um Research Brief e gere o prompt de execução.";
const OG_TITLE = "Pesquisa Aprofundada com IA — Método e Research Brief";
const OG_DESCRIPTION =
  "Aprenda a transformar uma pergunta em uma investigação bem projetada, escolher o rigor necessário, criar um Research Brief e gerar prompts de pesquisa com IA.";
const SOCIAL_IMAGE = `${SITE_URL}/og-clever-souza.svg`;

const baseMetadata = pageMetadata(SEO_TITLE, DESCRIPTION, PATH);

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: SEO_TITLE },
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Clever Souza — Pesquisa Aprofundada com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

const quickActivation = `Acesse e leia https://www.cleversouza.com/ia/pesquisa-aprofundada.

Use o método da página para transformar a intenção abaixo em uma investigação bem projetada.

Primeiro, identifique objetivo, pergunta central e nível de rigor. Pergunte somente se uma lacuna puder mudar materialmente o escopo, as fontes, o rigor ou a decisão. Depois, produza um Research Brief proporcional e, com base nele, gere o prompt de execução da pesquisa.

Não execute a pesquisa ainda.

Intenção, pergunta ou problema:
[ESCREVA AQUI]`;

const researchBrief = `RESEARCH BRIEF

OBJETIVO
[O que esta investigação precisa permitir compreender, produzir ou decidir?]

PERGUNTA CENTRAL
[Qual pergunta investigável orientará a pesquisa?]

NÍVEL DE RIGOR
[Direto / Estruturado / Alto rigor — explique brevemente por quê.]

CONTEXTO — se necessário
[Que informações já conhecidas mudam a interpretação da pergunta?]

ESCOPO — se necessário
[Período, geografia ou jurisdição, população, setor, produto, versão, idioma ou categoria.]

FORA DO ESCOPO — se necessário
[O que não será investigado nesta versão?]

SUBPERGUNTAS — se ajudarem
[Quais dimensões distintas precisam ser respondidas para resolver a pergunta central?]

ESTRATÉGIA DE FONTES
[Que tipos de fonte estão em melhor posição para sustentar cada afirmação importante?]

CRITÉRIOS DE EVIDÊNCIA
[O que contará como suporte suficiente? Que origem, método, atualidade, independência ou correspondência será exigida?]

CONTRAEVIDÊNCIA
[O que poderia contrariar a hipótese, a premissa ou a conclusão esperada?]

ENTREGA
[Formato, audiência, profundidade e elementos necessários para usar o resultado.]

CRITÉRIO DE PARADA
[Quando as evidências serão suficientes para o objetivo, considerando o custo do erro?]`;

const metaPrompt = `Transforme a intenção, pergunta ou problema abaixo em um Research Brief proporcional.

1. Identifique o uso final da informação e formule o objetivo.
2. Converta o tema em uma pergunta central investigável.
3. Detecte premissas embutidas e trate-as como alegações a verificar.
4. Escolha entre rigor Direto, Estruturado ou Alto rigor conforme impacto, incerteza, controvérsia e custo do erro.
5. Delimite somente as dimensões materiais: período, geografia ou jurisdição, população, setor, produto, versão, idioma e exclusões.
6. Crie subperguntas apenas quando representarem dependências realmente diferentes.
7. Defina estratégia de fontes por adequação à afirmação, não por uma hierarquia universal.
8. Especifique critérios de evidência, contraevidência, entrega e condição de parada.
9. Pergunte ao usuário somente se uma resposta puder mudar materialmente objetivo, escopo, fontes, rigor ou decisão. Reutilize todo contexto já disponível.
10. Não execute a pesquisa e não invente resultados.

Entregue somente:
- perguntas de esclarecimento indispensáveis, se houver; ou
- o Research Brief completo e pronto para revisão.

Intenção, pergunta ou problema:
[ESCREVA AQUI]`;

const universalPrompt = `Execute uma pesquisa com base no Research Brief abaixo.

Antes de buscar:
- confirme que objetivo, pergunta e rigor são coerentes;
- sinalize premissas que precisam ser verificadas;
- proponha ajuste apenas se houver falha material no desenho.

Durante a investigação:
- pesquise de forma iterativa, começando com descoberta de vocabulário e refinando as consultas;
- escolha fontes pela capacidade de sustentar cada afirmação específica;
- rastreie informações importantes até a origem quando possível;
- abra e verifique as fontes antes de citá-las;
- diferencie fontes independentes de republicações da mesma origem;
- procure contraevidência, resultados contrários e explicações alternativas quando forem materiais;
- preserve conflitos genuínos entre fontes e explique possíveis causas;
- diferencie fato documentado, estimativa, inferência, hipótese, interpretação, opinião, previsão, alegação não confirmada e não determinado;
- não invente fontes, dados, links, citações ou conclusões.

Na entrega:
- responda à pergunta central e às subperguntas relevantes;
- conecte afirmações importantes às evidências correspondentes;
- use linguagem de certeza proporcional à qualidade da evidência;
- declare lacunas, limitações e o que não pôde ser confirmado;
- encerre quando o critério de parada do Research Brief for atendido.

RESEARCH BRIEF
[COLE AQUI O RESEARCH BRIEF REVISADO]`;

const auditorPrompt = `Audite a pesquisa abaixo contra o Research Brief que a originou.

Verifique:
1. aderência ao objetivo, à pergunta, ao escopo e ao nível de rigor;
2. cobertura das subperguntas realmente necessárias;
3. adequação das fontes a cada afirmação importante;
4. rastreabilidade até a origem e independência entre fontes;
5. correspondência entre afirmações, evidências e citações;
6. atualidade, versão, período, geografia, população e definições quando relevantes;
7. busca e tratamento de contraevidência e explicações alternativas;
8. tratamento honesto de conflitos e incertezas;
9. separação entre fatos, estimativas, inferências, hipóteses, interpretações, opiniões e previsões;
10. cumprimento do critério de parada sem pesquisa insuficiente ou infinita.

Não premie quantidade de links, tamanho do texto ou aparência de rigor. Não refaça toda a investigação automaticamente.

Entregue:
- veredito: adequada, adequada com ressalvas ou inadequada;
- falhas críticas e materiais, com evidência observável;
- afirmações que exigem nova verificação;
- correções prioritárias;
- pesquisas adicionais somente quando puderem alterar materialmente a conclusão ou a decisão.

RESEARCH BRIEF
[COLE AQUI]

PESQUISA A AUDITAR
[COLE AQUI]`;

const adapters = [
  {
    title: "Científica",
    description: "Para perguntas sobre intervenção, exposição, população, mecanismo ou resultado.",
    prompt: `ADAPTADOR — PESQUISA CIENTÍFICA

Acrescente ao prompt universal:

- formule a pergunta com população, intervenção ou exposição, comparação e desfecho quando isso for aplicável;
- priorize revisões sistemáticas e meta-análises adequadas, sem ignorar estudos primários relevantes ou evidência recente;
- avalie desenho, amostra, comparação, magnitude do efeito, incerteza, replicação, risco de viés e conflitos de interesse;
- diferencie associação de causalidade;
- identifique preprints e não os trate como consenso;
- não transforme ausência de evidência em evidência de ausência;
- declare quando a heterogeneidade impede uma síntese única;
- não apresente orientação clínica individual nem substitua profissional habilitado.`,
  },
  {
    title: "Mercado / empresa / concorrência",
    description: "Para dimensionar mercados, compreender empresas ou comparar concorrentes.",
    prompt: `ADAPTADOR — MERCADO / EMPRESA / CONCORRÊNCIA

Acrescente ao prompt universal:

- defina geografia, período, segmento, perfil de cliente e decisão de negócio;
- diferencie dado observado, estimativa, projeção e material promocional;
- examine a metodologia de estimativas de mercado e não some categorias incompatíveis;
- use fontes corporativas para fatos que a organização pode documentar e fontes independentes para contexto, comparação e crítica;
- rastreie números até relatórios, registros ou bases originais quando possível;
- compare concorrentes com critérios equivalentes, mesma unidade, período, versão e mercado;
- explicite lacunas de dados privados e não invente faturamento, participação ou desempenho;
- encerre com implicações condicionadas às evidências, riscos e próximo teste reversível.`,
  },
  {
    title: "Técnica",
    description: "Para arquitetura, software, padrões, APIs, especificações e implementação.",
    prompt: `ADAPTADOR — PESQUISA TÉCNICA

Acrescente ao prompt universal:

- registre produto, versão, ambiente, requisitos, restrições e data de referência;
- priorize documentação oficial, especificações, padrões, changelogs e código-fonte quando aplicável;
- use análises independentes para limitações, segurança, desempenho e experiência de uso;
- diferencie capacidade documentada de inferência, promessa comercial ou comportamento observado;
- verifique compatibilidade, depreciações, requisitos e mudanças de versão;
- use testes, código ou cálculos quando uma afirmação depender de execução;
- não generalize benchmark fora do ambiente medido;
- entregue trade-offs, riscos, condições de validade e recomendação vinculada aos requisitos.`,
  },
  {
    title: "Histórica / pessoa / autor",
    description: "Para reconstruir eventos, trajetórias, obras e controvérsias sem anacronismo.",
    prompt: `ADAPTADOR — HISTÓRICA / PESSOA / AUTOR

Acrescente ao prompt universal:

- diferencie fontes contemporâneas ao evento de interpretações posteriores;
- priorize documentos, obras, registros, entrevistas originais e arquivos verificáveis;
- compare historiografia, biografias e análises independentes;
- registre autoria, data, contexto, edição, tradução e proveniência;
- trate memórias, depoimentos tardios e narrativas promocionais com cautela;
- procure versões conflitantes e possíveis anacronismos;
- não invente motivações, falas, relações, credenciais ou episódios;
- preserve o que permanece desconhecido ou disputado.`,
  },
  {
    title: "Regulatória",
    description: "Para leis, normas, políticas, requisitos e aplicabilidade em uma jurisdição.",
    prompt: `ADAPTADOR — PESQUISA REGULATÓRIA

Acrescente ao prompt universal:

- fixe jurisdição, autoridade, tema, atividade, produto, público e data de referência;
- priorize texto legal, norma, regulador, diário oficial, tribunal e orientação oficial vigente;
- confirme número, versão, vigência, revogação, transição e aplicabilidade;
- diferencie obrigação legal, orientação, interpretação e prática de mercado;
- procure exceções, conflitos de competência e atualizações posteriores;
- não transfira automaticamente regras de outro país, estado, setor ou categoria;
- cite o dispositivo ou seção relevante quando disponível;
- apresente caráter informativo e indique quando interpretação profissional for necessária.`,
  },
  {
    title: "Produto / compra",
    description: "Para escolher um produto com base no uso real, orçamento e restrições.",
    prompt: `ADAPTADOR — PRODUTO / COMPRA

Acrescente ao prompt universal:

- defina uso, requisitos obrigatórios, preferências, orçamento, país, disponibilidade e horizonte de uso;
- compare somente versões, configurações, planos e preços equivalentes;
- priorize especificações oficiais para características e testes independentes para desempenho e limitações;
- verifique data, estoque, garantia, assistência, custos recorrentes e condições da oferta;
- diferencie defeito recorrente de relato isolado;
- não declare um vencedor universal: relacione a recomendação aos critérios do usuário;
- exponha trade-offs, alternativas e informação que ainda poderia mudar a escolha;
- confirme dados voláteis na data da decisão.`,
  },
  {
    title: "Conteúdo",
    description: "Para artigos, aulas, roteiros e materiais que precisam unir utilidade e factualidade.",
    prompt: `ADAPTADOR — PESQUISA PARA CONTEÚDO

Acrescente ao prompt universal:

- defina audiência, problema, canal, objetivo editorial, profundidade e formato;
- pesquise dúvidas, linguagem e contexto da audiência sem confundir popularidade com verdade;
- separe evidência temática de dados de distribuição, SEO ou tendência;
- verifique afirmações factuais antes de transformá-las em ganchos ou recomendações;
- identifique crenças populares, controvérsias e lacunas que exigem qualificação;
- preserve nuances importantes e evite promessas não sustentadas;
- entregue uma síntese editorial utilizável, com fatos rastreáveis, limites e possíveis ângulos;
- não invente métricas, depoimentos, casos ou resultados.`,
  },
  {
    title: "Verificação factual",
    description: "Para testar uma alegação específica e classificá-la com precisão.",
    prompt: `ADAPTADOR — VERIFICAÇÃO FACTUAL

Acrescente ao prompt universal:

- reescreva a alegação de forma verificável, identificando sujeito, ação, número, período, território e versão;
- localize a origem mais antiga ou direta disponível;
- abra a fonte e confirme se ela sustenta exatamente a alegação;
- verifique contexto, definições, data, método e possíveis edições;
- procure confirmação independente, contraevidência e explicações alternativas quando o impacto justificar;
- detecte republicações, circularidade e citações fora de contexto;
- classifique como confirmada, parcialmente confirmada, contradita, não confirmada ou inconclusiva;
- explique a classificação de forma proporcional e declare o que permaneceu incerto.`,
  },
] as const;

const phases = [
  ["Intenção", "Comece pelo pedido bruto: o que você quer compreender, produzir ou decidir?"],
  ["Objetivo", "Defina o resultado epistemológico e o uso final da informação."],
  ["Pergunta", "Transforme o tema em uma pergunta investigável e teste as premissas embutidas."],
  ["Rigor", "Ajuste a profundidade ao impacto, à incerteza, à controvérsia e ao custo do erro."],
  ["Research Brief", "Registre escopo, fontes, critérios, contraevidência, entrega e parada."],
  ["Prompt", "Converta o desenho revisado em instruções executáveis e proporcionais."],
  ["Pesquisa", "Só então inicie busca, verificação, contraste e síntese."],
] as const;

const rigorLevels = [
  {
    level: "Direto",
    use: "Fato simples, estável e delimitado.",
    requires: "Uma fonte adequada pode bastar; encerre quando o fato e a data estiverem confirmados.",
  },
  {
    level: "Estruturado",
    use: "Conteúdo editorial, comparação ou decisão de impacto moderado.",
    requires: "Dimensões principais, fontes adequadas, claims relevantes verificados e contraevidência quando material.",
  },
  {
    level: "Alto rigor",
    use: "Tema complexo, controverso, de alto impacto ou com elevado custo de erro.",
    requires: "Protocolo explícito, busca adversarial, origem das evidências, análise de conflitos, limitações e revisão crítica.",
  },
] as const;

function PromptBlock({ label, value, buttonLabel = "Copiar" }: { label: string; value: string; buttonLabel?: string }) {
  return (
    <figure className={shared.promptBlock}>
      <figcaption>
        <span>{label}</span>
        <CopyButton value={value} label={buttonLabel} />
      </figcaption>
      <pre><code>{value}</code></pre>
    </figure>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Pesquisa Aprofundada com IA",
    alternativeHeadline: "Método para projetar investigações e criar um Research Brief",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    inLanguage: "pt-BR",
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
    about: [
      "Pesquisa aprofundada com inteligência artificial",
      "Research Brief",
      "Planejamento de pesquisa",
      "Rigor e evidência",
    ],
    isAccessibleForFree: true,
  };

  return (
    <PageShell
      active={PATH}
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Pesquisa Aprofundada" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.page}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Pesquisa com Inteligência Artificial</p>
            <h1>Pesquisa Aprofundada com IA</h1>
            <p className={shared.heroLead}>
              Transforme uma intenção, pergunta ou problema em uma investigação bem
              projetada, proporcional, rastreável e executável — antes de gastar tempo
              buscando respostas.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#research-brief">Criar um Research Brief</a>
              <a className="button button-secondary" href="#metodo">Entender o método</a>
            </div>
            <p className={shared.updateLine}>
              <span>Guia editorial e operacional</span>
              <span aria-hidden="true">·</span>
              <span>Tool-agnostic</span>
            </p>
          </div>
          <div className={`${shared.contextVisual} ${styles.researchVisual}`}>
            <p>Do problema ao início da investigação</p>
            <ol aria-label="Sete fases para projetar uma pesquisa aprofundada">
              {phases.map(([title], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {title}
                </li>
              ))}
            </ol>
            <div className={shared.contextHalo} aria-hidden="true" />
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            {[
              ["diferenca", "Projetar × executar"],
              ["metodo", "Método em sete fases"],
              ["rigor", "Níveis de rigor"],
              ["research-brief", "Research Brief"],
              ["prompts", "Prompts"],
              ["adaptadores", "Adaptadores"],
              ["exemplos", "Exemplos"],
              ["auditoria", "Auditoria"],
              ["faq", "FAQ"],
              ["nota", "Nota metodológica"],
            ].map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ol>
        </nav>

        <section className={shared.section} id="diferenca" aria-labelledby="diferenca-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>A distinção que evita retrabalho</p>
            <h2 id="diferenca-title">Uma página projeta a pesquisa. A outra executa a investigação.</h2>
            <p>
              Pesquisa aprofundada não começa com uma busca longa. Começa decidindo qual
              investigação o problema realmente exige.
            </p>
          </div>
          <div className={styles.comparisonGrid}>
            <article>
              <p>Esta página</p>
              <h3>Pesquisa Aprofundada</h3>
              <ul>
                <li>traduz intenção em objetivo;</li>
                <li>formula a pergunta central;</li>
                <li>calibra o rigor;</li>
                <li>constrói o Research Brief;</li>
                <li>gera o prompt de execução.</li>
              </ul>
              <strong>Saída: investigação projetada.</strong>
            </article>
            <article>
              <p>Guia complementar</p>
              <h3>Pesquisa com IA</h3>
              <ul>
                <li>planeja consultas e ferramentas;</li>
                <li>busca e abre fontes;</li>
                <li>verifica evidências;</li>
                <li>procura contraevidência;</li>
                <li>sintetiza conclusões rastreáveis.</li>
              </ul>
              <Link href="/ia/pesquisa-com-ia">Abrir o protocolo de execução →</Link>
            </article>
          </div>
          <div className={shared.keyPrinciple}>
            <strong>Princípio central</strong>
            <p>
              Não comece perguntando “qual prompt devo usar?”, mas “que investigação este
              problema realmente exige?”.
            </p>
          </div>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.methodSection}`} id="metodo" aria-labelledby="metodo-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Método em sete fases</p>
            <h2 id="metodo-title">Da intenção à pesquisa, sem confundir profundidade com excesso</h2>
            <p>
              Cada fase resolve uma decisão anterior à busca. Se a pergunta for simples,
              o percurso pode ser curto; se o risco for alto, o desenho ganha controles.
            </p>
          </div>
          <ol className={`${shared.protocolList} ${styles.phaseList}`}>
            {phases.map(([title, text], index) => (
              <li key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <div className={styles.sequenceNote}>
            <span>Intenção</span><span aria-hidden="true">→</span>
            <span>Objetivo</span><span aria-hidden="true">→</span>
            <span>Pergunta</span><span aria-hidden="true">→</span>
            <span>Rigor</span><span aria-hidden="true">→</span>
            <span>Research Brief</span><span aria-hidden="true">→</span>
            <span>Prompt</span><span aria-hidden="true">→</span>
            <span>Pesquisa</span>
          </div>
        </section>

        <section className={shared.section} id="rigor" aria-labelledby="rigor-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Profundidade proporcional</p>
            <h2 id="rigor-title">O custo de errar determina quanto rigor vale a pena</h2>
            <p>
              Prompt longo, quantidade de fontes e tempo gasto não são medidas confiáveis
              de qualidade. O rigor deve crescer com impacto, incerteza e controvérsia.
            </p>
          </div>
          <div className={styles.rigorGrid}>
            {rigorLevels.map((item, index) => (
              <article key={item.level}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.level}</h3>
                <p>{item.use}</p>
                <strong>{item.requires}</strong>
              </article>
            ))}
          </div>
          <div className={styles.decisionQuestions}>
            <h3>Antes de elevar o rigor, pergunte</h3>
            <ul>
              <li>Esta informação pode mudar uma decisão relevante?</li>
              <li>O tema é instável, controverso ou dependente de jurisdição e versão?</li>
              <li>Uma conclusão errada pode gerar dano, custo elevado ou exposição pública?</li>
              <li>Há premissa forte, causalidade ou fonte interessada a ser testada?</li>
              <li>Uma investigação adicional tem chance real de alterar a conclusão?</li>
            </ul>
          </div>
        </section>

        <section className={`${shared.section} ${styles.briefSection}`} id="research-brief" aria-labelledby="research-brief-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Ferramenta central</p>
            <h2 id="research-brief-title">Research Brief: o contrato da investigação</h2>
            <p>
              O brief registra o suficiente para escolher uma estratégia razoavelmente
              correta. Campos condicionais só entram quando mudam a pesquisa.
            </p>
          </div>
          <div className={styles.briefIntro}>
            <div>
              <span>Núcleo</span>
              <strong>Objetivo · Pergunta central · Rigor</strong>
            </div>
            <div>
              <span>Condicionais</span>
              <strong>Escopo · Subperguntas · Fontes · Evidência · Entrega · Parada</strong>
            </div>
            <div>
              <span>Avançados, quando necessários</span>
              <strong>Inclusão/exclusão · Queries · Evidence Map · Risco de viés · Versionamento</strong>
            </div>
          </div>
          <PromptBlock label="Research Brief" value={researchBrief} buttonLabel="Copiar Research Brief" />
          <p className={styles.briefRule}>
            <strong>Regra de especificação mínima:</strong> comece assim que houver
            informação suficiente para escolher uma estratégia de investigação
            razoavelmente correta. Não force falsa precisão em uma pesquisa exploratória.
          </p>
        </section>

        <section className={shared.section} id="prompts" aria-labelledby="prompts-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Do desenho à instrução</p>
            <h2 id="prompts-title">Três ferramentas para iniciar no nível certo</h2>
            <p>
              Use a ativação rápida quando a intenção ainda estiver crua, o meta-prompt
              para produzir o brief e o prompt universal somente depois de revisar o desenho.
            </p>
          </div>
          <div className={styles.promptStack}>
            <details open>
              <summary><span>01</span><strong>Ativação rápida</strong></summary>
              <div><p>Para transformar um pedido bruto em Research Brief e prompt, sem executar a pesquisa.</p><PromptBlock label="Ativação rápida" value={quickActivation} buttonLabel="Copiar ativação rápida" /></div>
            </details>
            <details>
              <summary><span>02</span><strong>Meta-prompt para gerar o Research Brief</strong></summary>
              <div><p>Para estruturar objetivo, pergunta, rigor e controles antes da busca.</p><PromptBlock label="Meta-prompt" value={metaPrompt} buttonLabel="Copiar meta-prompt" /></div>
            </details>
            <details>
              <summary><span>03</span><strong>Prompt universal de execução</strong></summary>
              <div><p>Para entregar o brief revisado a uma IA capaz de pesquisar nas fontes necessárias.</p><PromptBlock label="Prompt universal" value={universalPrompt} buttonLabel="Copiar prompt universal" /></div>
            </details>
          </div>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.adapterSection}`} id="adaptadores" aria-labelledby="adaptadores-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Especialização sem trocar o método</p>
            <h2 id="adaptadores-title">Adapte as fontes e os controles ao tipo de investigação</h2>
            <p>
              O núcleo permanece estável. Cada adaptador acrescenta decisões próprias do
              domínio sem transformar o prompt em uma lista arbitrária de exigências.
            </p>
          </div>
          <div className={styles.adapterList}>
            {adapters.map((adapter, index) => (
              <details key={adapter.title} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{adapter.title}</strong><small>{adapter.description}</small></div>
                </summary>
                <div className={styles.adapterContent}>
                  <PromptBlock label={`Adaptador · ${adapter.title}`} value={adapter.prompt} buttonLabel="Copiar adaptador" />
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="exemplos-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Exemplos de desenho</p>
            <h2 id="exemplos-title">O exemplo termina no plano — não inventa a conclusão</h2>
            <p>
              Estes casos mostram como formular uma investigação. Nenhum deles apresenta
              resultados sem que a pesquisa tenha sido executada.
            </p>
          </div>
          <div className={shared.exampleList}>
            <details open>
              <summary><span>Mercado</span><strong>“Vale a pena abrir uma academia em Curitiba?”</strong></summary>
              <div className={styles.exampleContent}>
                <dl>
                  <div><dt>Objetivo</dt><dd>Apoiar uma decisão de investimento local.</dd></div>
                  <div><dt>Pergunta</dt><dd>Em quais condições uma academia poderia ser viável para o segmento, localização e proposta definidos?</dd></div>
                  <div><dt>Rigor</dt><dd>Alto se houver investimento relevante; estruturado para uma triagem inicial.</dd></div>
                  <div><dt>Dimensões</dt><dd>Demanda, concorrência, localização, custos, regulação, diferenciação e cenários.</dd></div>
                  <div><dt>Parada</dt><dd>Quando os fatores que poderiam inviabilizar ou alterar o modelo estiverem mapeados com evidência suficiente para decidir o próximo teste.</dd></div>
                </dl>
                <p>Próximo passo: preencher o Research Brief e aplicar o adaptador de mercado.</p>
              </div>
            </details>
            <details>
              <summary><span>Científica</span><strong>“Creatina melhora o desempenho cognitivo?”</strong></summary>
              <div className={styles.exampleContent}>
                <dl>
                  <div><dt>Objetivo</dt><dd>Compreender o estado da evidência, não recomendar uso individual.</dd></div>
                  <div><dt>Pergunta</dt><dd>Em quais populações, condições e desfechos a suplementação de creatina foi estudada em relação à cognição?</dd></div>
                  <div><dt>Rigor</dt><dd>Alto, porque a pergunta envolve saúde e interpretação de evidência científica.</dd></div>
                  <div><dt>Dimensões</dt><dd>População, intervenção, comparação, desfechos, desenho, magnitude, incerteza e risco de viés.</dd></div>
                  <div><dt>Parada</dt><dd>Quando revisões relevantes, estudos determinantes, divergências e limitações estiverem mapeados.</dd></div>
                </dl>
                <p>Próximo passo: preencher o Research Brief e aplicar o adaptador científico.</p>
              </div>
            </details>
            <details>
              <summary><span>Verificação</span><strong>“Por que a plataforma reduz o alcance de quem não publica diariamente?”</strong></summary>
              <div className={styles.exampleContent}>
                <dl>
                  <div><dt>Premissa</dt><dd>A plataforma reduz o alcance por baixa frequência — trate isso primeiro como alegação.</dd></div>
                  <div><dt>Pergunta</dt><dd>Há evidência verificável de penalização direta associada à frequência, no período e produto analisados?</dd></div>
                  <div><dt>Rigor</dt><dd>Estruturado, com atenção a documentação atual, versão e estudos independentes.</dd></div>
                  <div><dt>Dimensões</dt><dd>Origem da alegação, declarações oficiais, evidência observacional, explicações alternativas e mudanças de algoritmo.</dd></div>
                  <div><dt>Parada</dt><dd>Quando a alegação puder ser classificada sem transformar ausência de evidência em prova do contrário.</dd></div>
                </dl>
                <p>Próximo passo: preencher o Research Brief e aplicar o adaptador de verificação factual.</p>
              </div>
            </details>
          </div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.auditSection}`} id="auditoria" aria-labelledby="auditoria-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Controle depois da execução</p>
            <h2 id="auditoria-title">Audite a pesquisa contra o brief, não contra a aparência</h2>
            <p>
              Uma pesquisa longa pode continuar inadequada. O auditor verifica se o
              resultado resolveu a pergunta, respeitou o rigor e sustentou as afirmações.
            </p>
          </div>
          <PromptBlock label="Auditor de pesquisa" value={auditorPrompt} buttonLabel="Copiar auditor de pesquisa" />
          <div className={styles.auditChecklist}>
            <h3>Uma pesquisa está madura quando</h3>
            <ul>
              <li>as perguntas essenciais foram respondidas;</li>
              <li>fontes adequadas foram inspecionadas;</li>
              <li>conflitos materiais foram investigados;</li>
              <li>contraevidência pertinente foi buscada;</li>
              <li>lacunas remanescentes estão explícitas;</li>
              <li>novas buscas começam a repetir conhecimento sem mudar a decisão.</li>
            </ul>
          </div>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas antes de iniciar a pesquisa</h2>
          </div>
          <div className={shared.faqList}>
            {[
              ["Toda pergunta precisa de um Research Brief?", "Não. Fatos simples e tarefas de baixo risco podem ser resolvidos diretamente. O brief é útil quando objetivo, escopo, evidência, rigor ou entrega precisam ser coordenados."],
              ["Uma pergunta ampla é sempre ruim?", "Não. Pesquisa exploratória pode começar ampla para mapear o território. O erro é exigir uma conclusão específica antes de descobrir quais dimensões realmente importam."],
              ["Quanto mais fontes, melhor?", "Não. Quantidade não mede adequação nem independência. Várias páginas podem repetir a mesma origem; uma revisão de alta qualidade pode sintetizar melhor um corpo de evidência do que estudos isolados."],
              ["Fontes oficiais devem ter prioridade?", "Somente para afirmações que a fonte oficial está em melhor posição para sustentar. Ela pode documentar regras ou anúncios, mas não prova sozinha eficácia, superioridade ou ausência de problemas."],
              ["Quando a IA deve fazer perguntas de esclarecimento?", "Quando a resposta puder mudar materialmente objetivo, escopo, jurisdição, período, população, fontes, rigor ou decisão. O contexto já fornecido deve ser reutilizado."],
              ["Research Brief e prompt são a mesma coisa?", "Não. O brief registra as decisões da investigação; o prompt converte esse desenho em instruções para uma ferramenta ou pesquisador executar."],
              ["Deep Research garante uma pesquisa rigorosa?", "Não. Modos de pesquisa podem planejar, buscar e citar, mas continuam sujeitos a seleção inadequada de fontes, interpretação incorreta e citações sem suporte. Ferramenta não substitui método."],
              ["Quando a pesquisa deve parar?", "Quando as evidências forem suficientes para o objetivo e novas buscas tiverem baixa probabilidade de alterar materialmente a conclusão ou a decisão, considerando o custo do erro."],
            ].map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${styles.relatedSection}`} id="nota" aria-labelledby="nota-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Nota metodológica</p>
            <h2 id="nota-title">Uma arquitetura editorial, não um selo automático de ciência</h2>
            <p>
              Esta página organiza princípios de metodologia de pesquisa, recuperação de
              informação, avaliação de fontes, verificação, síntese de evidências e uso de
              IA. Ela não transforma uma pesquisa comum em revisão sistemática,
              fact-checking profissional, auditoria, perícia ou aconselhamento especializado.
            </p>
          </div>
          <div className={styles.methodNote}>
            <p>
              A metodologia preserva princípios duradouros: objetivo antes da profundidade,
              pergunta suficientemente especificada, premissas verificadas, fonte adequada à
              alegação, busca iterativa, contraevidência, incerteza e parada por suficiência.
            </p>
            <p>
              Nomes de ferramentas, interfaces, limites e capacidades mudam. Por isso, os
              prompts desta página são tool-agnostic. Sempre confirme recursos atuais na
              documentação da ferramenta escolhida quando isso afetar a execução.
            </p>
          </div>
          <div className={styles.relatedGrid}>
            <Link href="/ia/pesquisa-com-ia"><span>Executar</span><strong>Pesquisa com IA</strong><small>Busca, fontes, evidência, verificação e síntese.</small></Link>
            <Link href="/ia/engenharia-de-prompt"><span>Instruir</span><strong>Engenharia de Prompt</strong><small>Transforme o brief em instruções claras e testáveis.</small></Link>
            <Link href="/ia/context-engineering"><span>Contextualizar</span><strong>Context Engineering</strong><small>Selecione o contexto necessário para a investigação.</small></Link>
            <Link href="/ia/ia-com-arquivos"><span>Usar corpus</span><strong>IA com Arquivos</strong><small>Localize, compare e rastreie evidências em documentos.</small></Link>
            <Link href="/ia/avaliacao-de-respostas-de-ia"><span>Avaliar</span><strong>Avaliação de respostas</strong><small>Audite aderência, fatos, fontes, lacunas e riscos.</small></Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
