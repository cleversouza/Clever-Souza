import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import research from "../pesquisa-com-ia/research.module.css";
import styles from "./evaluation.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/avaliacao-de-respostas-de-ia";
const TITLE = "Como avaliar respostas de IA: guia prático";
const DESCRIPTION =
  "Aprenda a avaliar respostas de IA: verifique fatos, fontes, omissões, atualidade, instruções e riscos com critérios claros e um método prático.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "como avaliar respostas de IA",
  "como saber se resposta do ChatGPT está correta",
  "verificar respostas de IA",
  "avaliação de inteligência artificial",
  "LLM evaluation",
  "factualidade IA",
  "LLM as a judge",
  "evals",
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

const useWithAiPrompt = `Acesse e leia https://www.cleversouza.com/ia/avaliacao-de-respostas-de-ia.

Use o protocolo da página para auditar a resposta abaixo em relação ao pedido original.

1. Reconstrua objetivo, requisitos, restrições, contexto e formato esperado.
2. Selecione somente os critérios relevantes para esta tarefa.
3. Separe fatos, inferências, recomendações, cálculos, citações e conclusões importantes.
4. Teste ou verifique o que puder mudar o julgamento; não confunda fluência com correção.
5. Identifique erros, omissões, contradições, desatualização, fontes inadequadas e excesso de confiança.
6. Classifique cada problema como crítico, relevante, menor ou editorial e explique seu impacto.
7. Emita um julgamento proporcional: aprovada, aprovada com ressalvas, precisa de correções ou não confiável para este objetivo.
8. Se eu solicitar, produza uma versão corrigida preservando o que já está adequado.

Não invente falhas apenas porque está auditando. Se o pedido original ou a evidência necessária não estiver disponível, declare a limitação.

PEDIDO ORIGINAL:
[cole aqui]

RESPOSTA DA IA:
[cole aqui]`;

const quickAuditTemplate = `Avalie a resposta abaixo em relação ao pedido original.

Verifique somente o que for relevante:
- atendimento ao objetivo e às instruções;
- fatos, cálculos e atualidade;
- suporte das fontes;
- omissões e contradições;
- clareza, utilidade e excesso de confiança.

Entregue:
1. julgamento curto;
2. problemas importantes com gravidade e justificativa;
3. pontos que estão adequados;
4. correção sugerida, se necessária.

PEDIDO ORIGINAL:
[cole aqui]

RESPOSTA:
[cole aqui]`;

const deepAuditTemplate = `Faça uma auditoria aprofundada da resposta.

CONTEXTO
Pedido original: [cole aqui]
Resposta avaliada: [cole aqui]
Fontes ou documentos disponíveis: [inclua quando houver]
Uso pretendido e custo do erro: [explique]

PROCESSO
1. Reconstrua objetivo, requisitos explícitos, requisitos implícitos necessários, restrições e formato.
2. Defina uma rubrica específica para a tarefa antes de julgar.
3. Decomponha apenas elementos materiais: afirmações, inferências, recomendações, números, citações, passos e conclusões.
4. Verifique fatos, fontes, cálculos, links, documentos ou código com ferramentas adequadas quando necessário.
5. Procure omissões, contradições, desatualização, extrapolações e linguagem mais confiante que a evidência.
6. Diferencie falhas críticas, relevantes, menores e editoriais.
7. Não penalize critérios que não se aplicam à tarefa.

ENTREGA
- julgamento final;
- matriz: critério | status | evidência | problema | gravidade | correção;
- limitações da própria auditoria;
- versão corrigida, somente se solicitada.`;

const factualTemplate = `Verifique as afirmações factuais importantes da resposta abaixo.

1. Extraia claims verificáveis sem fragmentar trivialidades.
2. Priorize claims que alterem a conclusão ou decisão.
3. Para cada claim, localize fonte adequada e atual quando necessário.
4. Classifique: sustentado, parcialmente sustentado, contradito, não confirmado ou inconclusivo.
5. Diferencie erro factual de inferência indevida.
6. Recalcule números importantes e confira unidade, período e denominador.
7. Cite a evidência usada e deixe lacunas explícitas.

RESPOSTA:
[cole aqui]`;

const sourceAuditTemplate = `Audite a fundamentação da resposta usando as fontes fornecidas.

Para cada afirmação material:
- a fonte existe e foi acessada?
- a citação está associada à frase correta?
- o trecho sustenta exatamente a afirmação?
- a fonte é adequada para essa afirmação?
- data, versão e escopo continuam válidos?

Diferencie:
1. afirmação verdadeira no mundo;
2. afirmação sustentada pelo material fornecido.

Não trate uma resposta como fundamentada apenas porque ela pode estar correta por conhecimento externo.

RESPOSTA:
[cole aqui]

FONTES OU DOCUMENTOS:
[cole links ou anexe os arquivos]`;

const comparisonTemplate = `Compare as respostas A e B para o mesmo pedido.

1. Defina antes os critérios relevantes e o que significa sucesso.
2. Oculte ou ignore a origem dos modelos quando possível.
3. Compare atendimento ao pedido, correção, fundamentação, completude, utilidade, eficiência e segurança somente quando aplicáveis.
4. Não recompense automaticamente comprimento, confiança ou formatação.
5. Se a ordem puder influenciar o julgamento, repita a comparação invertendo A e B.
6. Escolha uma resposta apenas se a diferença for sustentada pelos critérios; aceite empate quando apropriado.

PEDIDO ORIGINAL:
[cole aqui]

RESPOSTA A:
[cole aqui]

RESPOSTA B:
[cole aqui]`;

const highRiskTemplate = `Avalie esta resposta como orientação de alto risco.

Contexto: [saúde, direito, finanças, segurança ou outro]
Pedido original: [cole aqui]
Resposta: [cole aqui]

Priorize:
- possibilidade e magnitude de dano;
- fatos, atualidade, jurisdição ou população aplicável;
- fontes primárias e evidência apropriada;
- contraindicações, exceções e sinais de encaminhamento;
- limites profissionais e dados sensíveis;
- proporcionalidade da certeza.

Não use um escore agregado para compensar uma falha de segurança. Destaque primeiro qualquer problema capaz de mudar a decisão ou causar dano e informe quando revisão especializada for necessária.`;

const codeTemplate = `Avalie o código abaixo em relação ao requisito original.

1. Identifique stack, ambiente, entradas, saídas e comportamento esperado.
2. Compile ou execute quando o ambiente permitir.
3. Rode testes existentes e crie casos mínimos para o requisito, edge cases e regressões prováveis.
4. Verifique erros funcionais, tipos, tratamento de exceções, segurança, complexidade e compatibilidade.
5. Diferencie falha observada de risco hipotético.
6. Preserve o que já funciona e proponha a menor correção sustentável.
7. Não aprove código apenas por parecer elegante.

REQUISITO ORIGINAL:
[cole aqui]

CÓDIGO / ARQUIVOS:
[cole ou anexe]`;

const protocol = [
  ["Reconstruir", "Recupere objetivo, requisitos, restrições, contexto, formato e uso pretendido. Sem o pedido original, declare o limite."],
  ["Selecionar critérios", "Escolha somente dimensões que definem sucesso nesta tarefa. Segurança e correção podem ter peso maior que estilo."],
  ["Decompor", "Separe elementos materiais: fatos, inferências, recomendações, números, citações, passos e conclusões. Não atomize texto criativo sem motivo."],
  ["Testar e verificar", "Abra fontes, recalcule, execute código, valide formatos e compare documentos quando isso puder mudar o julgamento."],
  ["Procurar lacunas", "Identifique omissões, contradições, desatualização, irrelevância, extrapolações e certeza desproporcional."],
  ["Avaliar impacto", "Classifique falhas pela consequência real: crítica, relevante, menor ou editorial. Um erro pequeno não equivale a um risco decisório."],
  ["Julgar", "Conclua se a resposta está aprovada, aprovada com ressalvas, precisa de correções ou não é confiável para aquele objetivo."],
  ["Corrigir e retestar", "Quando solicitado, preserve partes adequadas, corrija causas e verifique novamente critérios afetados e regressões."],
];

const examples = [
  {
    type: "Fluente, mas errada",
    title: "A forma profissional mascara um fato falso",
    response: "O relatório usa subtítulos, números precisos e tom seguro, mas atribui a uma lei uma exigência que não existe.",
    audit: "Falha factual crítica para o uso jurídico. Formatação e confiança não reduzem a gravidade. Verifique o texto legal oficial e corrija a conclusão.",
  },
  {
    type: "Correta, mas incompleta",
    title: "A resposta acerta o mecanismo e omite o risco",
    response: "A explicação descreve corretamente o benefício de uma intervenção, mas não menciona contraindicação relevante solicitada no pedido.",
    audit: "Factualidade aprovada; completude falha. A omissão pode mudar a decisão, portanto é relevante ou crítica conforme o contexto.",
  },
  {
    type: "Citação inadequada",
    title: "A página existe, mas não sustenta a frase",
    response: "A afirmação cita um blog real que apenas repete um número sem metodologia ou origem.",
    audit: "Existência da fonte aprovada; suporte e qualidade reprovados. Recupere a fonte original e associe a citação à afirmação exata.",
  },
  {
    type: "Desatualização",
    title: "Era verdade para outra versão",
    response: "A resposta informa preço e limite corretos em 2025 para uma pergunta feita em agosto de 2026.",
    audit: "O dado histórico não responde ao estado atual. Verifique documentação e data de vigência; classifique como desatualizado, não como invenção.",
  },
  {
    type: "Inferência como fato",
    title: "Associação vira causalidade",
    response: "Um estudo observacional encontra associação e a resposta conclui que A causa B.",
    audit: "A evidência não autoriza a linguagem causal. Reescreva como associação e explicite confundimento e limitações.",
  },
  {
    type: "Longa demais",
    title: "Cobertura não compensa custo cognitivo",
    response: "O usuário pediu três ações e recebeu duas páginas de contexto antes da primeira recomendação.",
    audit: "Pode estar correta e completa, mas perde relevância e eficiência. Coloque as três ações primeiro e mantenha detalhes como apoio opcional.",
  },
  {
    type: "Código plausível",
    title: "Elegância não substitui execução",
    response: "A função parece idiomática, mas falha com entrada vazia e quebra um teste existente.",
    audit: "O teste observado prevalece sobre a aparência. Corrija o caso extremo e rode a regressão antes de aprovar.",
  },
  {
    type: "Incerteza adequada",
    title: "Não confirmar pode ser a melhor resposta",
    response: "Não encontrei evidência suficiente para confirmar a alegação com as fontes acessíveis.",
    audit: "A limitação está bem declarada. Não invente uma conclusão apenas para tornar a resposta mais assertiva.",
  },
];

const sources = [
  {
    group: "Documentação e orientações oficiais",
    items: [
      ["OpenAI — boas práticas de avaliação", "https://developers.openai.com/api/docs/guides/evaluation-best-practices"],
      ["OpenAI — avaliação de workflows de agentes", "https://developers.openai.com/api/docs/guides/agent-evals"],
      ["OpenAI — HealthBench", "https://openai.com/index/healthbench/"],
      ["Anthropic — critérios de sucesso e avaliações", "https://docs.anthropic.com/en/docs/build-with-claude/develop-tests"],
      ["Google DeepMind — FACTS Grounding", "https://deepmind.google/blog/facts-grounding-a-new-benchmark-for-evaluating-the-factuality-of-large-language-models/"],
      ["Google DeepMind — FACTS Benchmark Suite", "https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/"],
      ["Microsoft — métricas de avaliação generativa", "https://learn.microsoft.com/en-us/azure/machine-learning/prompt-flow/concept-model-monitoring-generative-ai-evaluation-metrics"],
      ["Microsoft — avaliadores para RAG", "https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators"],
      ["Meta — avaliação e uso responsável", "https://ai.meta.com/static-resource/sept-responsible-use-guide"],
      ["NIST — perfil de risco para IA generativa", "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"],
    ],
  },
  {
    group: "Papers e benchmarks",
    items: [
      ["MT-Bench e Chatbot Arena — LLM-as-a-Judge", "https://arxiv.org/abs/2306.05685"],
      ["G-Eval — avaliação com modelos", "https://aclanthology.org/2023.emnlp-main.153/"],
      ["FActScore — fatos atômicos e suporte", "https://aclanthology.org/2023.emnlp-main.741/"],
      ["ALCE — correção e completude de citações", "https://aclanthology.org/2023.emnlp-main.398/"],
      ["TruthfulQA — falsas crenças e factualidade", "https://aclanthology.org/2022.acl-long.229/"],
      ["HELM — avaliação holística", "https://arxiv.org/abs/2211.09110"],
      ["IFEval — instruções verificáveis", "https://arxiv.org/abs/2311.07911"],
      ["Long-form factuality — LongFact e SAFE", "https://deepmind.google/research/publications/85420/"],
      ["Benchmark Data Contamination — survey", "https://arxiv.org/abs/2406.04244"],
      ["Overconfidence — avaliação de incerteza verbalizada", "https://aclanthology.org/2024.trustnlp-1.13/"],
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
    alternativeHeadline: "Como auditar correção, evidências, instruções, utilidade e riscos em respostas geradas por IA",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    image: `${SITE_URL}/social/avaliacao-de-respostas-de-ia.png`,
    inLanguage: "pt-BR",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    author: { "@type": "Person", name: "Cleverson Batista de Souza", url: `${SITE_URL}/sobre` },
    publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    about: ["Avaliação de respostas de inteligência artificial", "LLM evaluation", "Factualidade", "Evals"],
    proficiencyLevel: "Beginner to Advanced",
    isAccessibleForFree: true,
    citation: sources.flatMap((source) => source.items.map((item) => item[1])),
  };

  return (
    <PageShell
      active={PATH}
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Avaliação de respostas de IA" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${research.researchPage} ${styles.evaluationPage}`}>
        <header className={`${shared.hero} ${research.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Guia de referência · protocolo de auditoria</p>
            <h1>Avaliação de respostas de IA</h1>
            <p className={shared.heroLead}>
              Como verificar se uma resposta realmente atende ao pedido, sustenta o que afirma
              e pode ser usada com segurança — sem confundir aparência profissional com qualidade.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#resposta-rapida">Aprender o método</a>
              <a className="button button-secondary" href="#usar-com-ia">Auditar com uma IA</a>
            </div>
            <p className={shared.updateLine}>
              <span>Última atualização: 28 de agosto de 2026</span>
              <span aria-hidden="true">·</span>
              <span>Do julgamento rápido aos evals sistemáticos</span>
            </p>
          </div>
          <div className={`${shared.contextVisual} ${research.researchVisual} ${styles.evaluationVisual}`} aria-hidden="true">
            <p>Qualidade precisa de referência</p>
            <ol>
              {[
                "Pedido reconstruído",
                "Critérios selecionados",
                "Evidência verificada",
                "Impacto classificado",
                "Resultado corrigido",
              ].map((item, index) => (
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
              ["resposta-rapida", "Resposta rápida"], ["aparencia", "Aparência × qualidade"],
              ["pedido-original", "Pedido original"], ["criterios", "Critérios"],
              ["evidencias", "Fatos e fontes"], ["lacunas", "Lacunas e certeza"],
              ["testar", "Teste em vez de opinar"], ["avaliadores", "Humano × automático"],
              ["evals", "Rubricas e evals"], ["protocolo", "Protocolo completo"],
              ["exemplos", "Exemplos"], ["templates", "Templates"],
              ["usar-com-ia", "Usar com IA"], ["checklist", "Checklist"],
              ["referencias", "Referências"],
            ].map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ol>
        </nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="resposta-rapida-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Resposta rápida</p>
            <h2 id="resposta-rapida-title">Como avaliar uma resposta de IA?</h2>
            <p>Compare o resultado com o pedido, selecione critérios adequados à tarefa e verifique primeiro os pontos capazes de mudar a decisão.</p>
          </div>
          <div className={research.quickSteps}>
            {[
              ["01", "Recupere", "O que foi pedido e para qual finalidade?"],
              ["02", "Escolha", "Quais critérios realmente definem sucesso?"],
              ["03", "Separe", "Que fatos, inferências e resultados importam?"],
              ["04", "Teste", "O que pode ser verificado objetivamente?"],
              ["05", "Classifique", "Qual é o impacto de cada falha?"],
              ["06", "Corrija", "O que precisa mudar e ser retestado?"],
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className={shared.keyPrinciple}>
            <strong>Regra central</strong>
            <p>Uma resposta convincente não é necessariamente correta. Avalie objetivo, evidências, critérios e contexto — não apenas fluência, confiança ou acabamento.</p>
          </div>
        </section>

        <section className={`${shared.section} ${research.contrastSection} ${styles.appearanceSection}`} id="aparencia" aria-labelledby="aparencia-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>A armadilha da forma</p>
            <h2 id="aparencia-title">Parecer profissional não demonstra estar correto</h2>
          </div>
          <div className={research.askResearchGrid}>
            <article>
              <p>Sinais de aparência</p>
              <h3>Convencem rapidamente</h3>
              <ul><li>texto fluente e assertivo;</li><li>tabelas, números e linguagem técnica;</li><li>muitas citações;</li><li>estrutura longa e elegante.</li></ul>
            </article>
            <article>
              <p>Sinais de qualidade</p>
              <h3>Resistem à verificação</h3>
              <ul><li>atendem ao pedido real;</li><li>fatos e cálculos conferem;</li><li>fontes sustentam as afirmações;</li><li>limites e incertezas são proporcionais.</li></ul>
            </article>
          </div>
          <p className={research.bridgeNote}>Fluência é uma qualidade de comunicação. Correção é uma qualidade epistêmica. Uma pode existir sem a outra.</p>
        </section>

        <section className={shared.section} id="pedido-original" aria-labelledby="pedido-original-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Primeiro fundamento</p>
            <h2 id="pedido-original-title">O pedido original faz parte da avaliação</h2>
            <p>Sem saber o que deveria ser entregue, é possível analisar coerência e fatos verificáveis, mas não medir integralmente aderência, completude ou utilidade.</p>
          </div>
          <div className={styles.requestFlow} aria-label="Fluxo do pedido até a resposta">
            {[
              ["Pedido", "O que foi solicitado"], ["Objetivo", "O que precisa mudar ou ser decidido"],
              ["Requisitos", "O que deve estar presente"], ["Restrições", "O que deve ser preservado ou evitado"],
              ["Resposta", "O resultado a ser avaliado"],
            ].map(([title, text], index) => (
              <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{text}</p></div>
            ))}
          </div>
          <div className={research.beforeAfter}>
            <div><p>Requisito explícito</p><blockquote>“Compare os preços atuais em reais e cite as fontes.”</blockquote><span>Formato, atualidade, moeda e citações foram pedidos diretamente.</span></div>
            <div><p>Requisito implícito necessário</p><blockquote>Preço atual exige consulta recente, mesmo que o usuário não escreva “pesquise na web”.</blockquote><span>Inferir esse requisito protege a finalidade; não autoriza ações além do necessário.</span></div>
          </div>
          <div className={research.dateWarning}><strong>Sem o pedido original</strong><span>Declare: “Posso avaliar coerência, alegações verificáveis e qualidade aparente, mas não confirmar completamente se a resposta atendeu à intenção original.”</span></div>
        </section>

        <section className={`${shared.section} ${styles.criteriaSection}`} id="criterios" aria-labelledby="criterios-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Qualidade multidimensional</p>
            <h2 id="criterios-title">Uma resposta é boa para uma tarefa definida</h2>
            <p>Não some dimensões incompatíveis em uma nota vaga. Selecione as que realmente controlam o resultado.</p>
          </div>
          <div className={styles.criteriaGrid}>
            {[
              ["Correção", "Fatos, resultados e cálculos estão corretos?"],
              ["Relevância", "A resposta trata do que foi pedido sem tangentes?"],
              ["Completude", "Cobre o necessário, inclusive riscos e exceções materiais?"],
              ["Aderência", "Respeita requisitos, formato, restrições e escopo?"],
              ["Clareza", "É compreensível e permite ação?"],
              ["Coerência", "Premissas, números e conclusões são compatíveis entre si?"],
              ["Fundamentação", "As conclusões são sustentadas pelo contexto ou pelas fontes?"],
              ["Atualidade", "Datas, versões e condições ainda valem?"],
              ["Rastreabilidade", "Afirmações importantes podem ser verificadas?"],
              ["Proporcionalidade", "A certeza corresponde à força da evidência?"],
              ["Utilidade", "O usuário consegue realizar o que precisava?"],
              ["Eficiência", "Há densidade útil sem redundância desnecessária?"],
              ["Segurança", "A orientação evita riscos e limites indevidos?"],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <h3 className={styles.subheading}>O peso muda conforme a tarefa</h3>
          <div className={styles.taskGrid}>
            {[
              ["Brainstorming", "aderência · diversidade · originalidade"],
              ["Pesquisa", "evidência · factualidade · rastreabilidade"],
              ["Código", "execução · testes · regressões · segurança"],
              ["Texto publicitário", "objetivo · audiência · clareza · restrições"],
              ["Decisão estratégica", "premissas · cenários · riscos · reversibilidade"],
              ["Saúde ou direito", "segurança · fonte · atualidade · limites"],
              ["Imagem", "briefing · preservação · composição · artefatos"],
              ["Documento", "fidelidade · números · seções · referências"],
            ].map(([title, text]) => <article key={title}><strong>{title}</strong><span>{text}</span></article>)}
          </div>
          <p className={research.bridgeNote}>Risco × custo do erro × incerteza orientam o rigor necessário. Esta é uma heurística de decisão, não uma equação científica.</p>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${research.sourceSection} ${styles.evidenceSection}`} id="evidencias" aria-labelledby="evidencias-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Avaliação atômica quando importa</p>
            <h2 id="evidencias-title">Verifique afirmações, não a impressão geral</h2>
            <p>Respostas longas podem misturar elementos corretos, frágeis e falsos. Extraia claims materiais quando a tarefa for factual ou decisória.</p>
          </div>
          <div className={styles.claimFlow} aria-label="Decomposição de uma resposta em elementos verificáveis">
            <div><span>Resposta</span><strong>Texto completo</strong></div>
            <div><span>Elementos</span><strong>Fatos · inferências · recomendações · números</strong></div>
            <div><span>Verificação</span><strong>Fonte · teste · cálculo · documento</strong></div>
          </div>
          <div className={research.sourceMap}>
            {[
              ["Fato", "Afirmação verificável no mundo. Confira quando o custo de errar ou a mutabilidade justificar."],
              ["Inferência", "Conclusão derivada de fatos. Avalie a ponte lógica e explicações alternativas."],
              ["Recomendação", "Orientação dependente de objetivo, evidência, riscos e julgamento."],
              ["Hipótese", "Possibilidade ainda não estabelecida. Não deve assumir linguagem de fato."],
              ["Opinião", "Avaliação subjetiva. Julgue adequação e coerência, não “verdade” absoluta."],
              ["Não confirmado", "Afirmação sem suporte suficiente nas fontes ou testes acessíveis."],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={research.primarySecondary}>
            <article><span>Correção factual</span><h3>“Isso é verdadeiro?”</h3><p>Compara a afirmação com evidência adequada sobre o mundo.</p></article>
            <article><span>Fundamentação</span><h3>“Isso está no material?”</h3><p>Verifica se a resposta permanece sustentada pelo contexto, documento ou base fornecida.</p></article>
          </div>
          <div className={styles.citationChecks}>
            {[
              ["Existência", "A fonte e o documento existem?"], ["Correspondência", "A citação está junto da afirmação correta?"],
              ["Suporte", "O trecho realmente sustenta a frase?"], ["Atualidade", "Versão e vigência continuam válidas?"],
              ["Adequação", "É a fonte apropriada para esse tipo de afirmação?"],
            ].map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
          <p className={shared.darkCallout}><strong>Citação correta × fonte correta</strong><span>Uma resposta pode apontar corretamente para um blog que não é a melhor evidência para uma lei, especificação, estudo ou dado oficial.</span></p>
        </section>

        <section className={shared.section} id="lacunas" aria-labelledby="lacunas-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Além dos erros visíveis</p>
            <h2 id="lacunas-title">Procure omissões, contradições e certeza excessiva</h2>
            <p>Uma resposta pode não conter nenhuma frase obviamente falsa e ainda falhar por esconder condições, riscos ou alternativas necessárias.</p>
          </div>
          <div className={research.verifyGrid}>
            {[
              ["Omissões", "Riscos, exceções, condições, alternativas, limitações ou evidência contrária ausentes."],
              ["Contradições internas", "Números incompatíveis, conclusão contra premissas ou recomendações conflitantes."],
              ["Contradições externas", "A resposta diverge do documento ou fonte disponível sem explicar por quê."],
              ["Desatualização", "A informação foi correta em outro momento, mercado, versão ou jurisdição."],
              ["Viés", "Seleção confirmatória de evidências, framing, preferência de fonte ou posição."],
              ["Excesso de confiança", "Linguagem definitiva sustentada apenas por evidência limitada ou conflitante."],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={styles.calibrationScale} aria-label="Linguagem proporcional à evidência">
            {[
              ["Confirmado", "evidência direta e adequada"], ["Provável", "evidência convergente com limites"],
              ["Limitado", "pouca evidência ou baixa qualidade"], ["Conflitante", "resultados ou fontes divergem"],
              ["Hipótese", "possibilidade não estabelecida"], ["Não confirmado", "não foi possível sustentar"],
            ].map(([label, text]) => <div key={label}><strong>{label}</strong><span>{text}</span></div>)}
          </div>
          <div className={research.dateWarning}><strong>Evite falsa precisão</strong><span>“87% de confiança” só é informativo quando há método probabilístico ou calibração que sustente o número. Caso contrário, use linguagem qualitativa ligada à evidência.</span></div>
        </section>

        <section className={`${shared.section} ${styles.testSection}`} id="testar" aria-labelledby="testar-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Princípio operacional</p>
            <h2 id="testar-title">Sempre que possível, teste em vez de apenas opinar</h2>
          </div>
          <div className={styles.testGrid}>
            {[
              ["Código", "Compile, execute e rode testes. Confira requisitos, casos extremos, segurança e regressões."],
              ["Cálculo", "Reproduza a operação; confira dado de entrada, fórmula, unidade, arredondamento e resultado."],
              ["Link e fonte", "Abra o documento. Snippet, título ou URL existente não comprovam suporte."],
              ["JSON e schema", "Valide a sintaxe e o contrato, não apenas a aparência formatada."],
              ["Arquivo", "Compare página, seção, tabela, célula ou versão correspondente."],
              ["Imagem", "Confronte briefing, elementos preservados, proporção, legibilidade, invenções e artefatos."],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={styles.multimodalPanel}>
            <div><p className={shared.eyebrow}>Tarefas criativas</p><h3>Nem tudo possui uma verdade de referência</h3><p>Avalie aderência, originalidade, tom, intenção, consistência e adequação ao público. Não aplique verificação factual rígida a uma metáfora ou ideia ficcional, salvo quando o briefing exigir fatos.</p></div>
            <div><p className={shared.eyebrow}>Respostas multimodais</p><h3>Cada modalidade exige seus próprios testes</h3><p>Texto, imagem, áudio, gráfico, documento e código podem coexistir. Uma legenda correta não compensa gráfico errado; um layout bonito não corrige dados inconsistentes.</p></div>
          </div>
        </section>

        <section className={`${shared.section} ${styles.judgesSection}`} id="avaliadores" aria-labelledby="avaliadores-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Quem avalia também pode errar</p>
            <h2 id="avaliadores-title">Avaliação humana, automática e LLM-as-a-Judge</h2>
            <p>Os métodos são complementares. Escolha pelo tipo de decisão, objetividade do critério, volume e custo do erro.</p>
          </div>
          <div className={styles.evaluatorGrid}>
            <article><span>Humana</span><h3>Contexto e julgamento</h3><p>Importante em qualidade subjetiva, domínio especializado, segurança e casos novos. Pode sofrer fadiga, inconsistência e desacordo entre avaliadores.</p></article>
            <article><span>Determinística</span><h3>Regras e testes</h3><p>Excelente para compilação, schema, formato, presença de campos, cálculo e resultados esperados. Não resolve sozinha tarefas abertas.</p></article>
            <article><span>LLM-as-a-Judge</span><h3>Escala e flexibilidade</h3><p>Útil para classificação, rubricas e comparações de respostas abertas. Continua sendo uma previsão de julgamento, não um árbitro infalível.</p></article>
          </div>
          <div className={styles.judgeRiskPanel}>
            <div><h3>Riscos conhecidos</h3><ul><li>viés de posição em comparações;</li><li>preferência por respostas mais longas;</li><li>auto-preferência ou estilo familiar;</li><li>sensibilidade ao prompt e à ordem;</li><li>falhas factuais sem evidência externa.</li></ul></div>
            <div><h3>Controles úteis</h3><ul><li>rubrica explícita e exemplos calibrados;</li><li>ocultar a origem das respostas;</li><li>inverter a ordem A/B;</li><li>fornecer evidência ou resposta de referência;</li><li>comparar amostra com avaliadores humanos.</li></ul></div>
          </div>
          <p className={research.bridgeNote}>Modelos costumam ser mais confiáveis ao classificar, comparar ou aplicar critérios definidos do que ao inventar uma avaliação aberta e sem referência.</p>
        </section>

        <section className={shared.section} id="evals" aria-labelledby="evals-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>De uma resposta para um sistema</p>
            <h2 id="evals-title">Rubricas, evals e testes de regressão</h2>
            <p>Uma rubrica torna o julgamento explícito. Evals transformam esse julgamento em testes repetíveis sobre casos relevantes.</p>
          </div>
          <div className={styles.rubricExample}>
            <div><span>Critério</span><strong>Atende ao requisito de atualidade</strong></div>
            <div><span>Sucesso</span><strong>Usa informação vigente na data da pergunta</strong></div>
            <div><span>Como verificar</span><strong>Fonte oficial + data + versão</strong></div>
            <div><span>Resultado</span><strong>Atende · parcial · não atende</strong></div>
          </div>
          <div className={styles.evalCycle} aria-label="Ciclo de desenvolvimento orientado por avaliações">
            {[
              "Definir comportamento", "Criar casos", "Executar", "Medir", "Ajustar", "Executar novamente",
            ].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
          </div>
          <div className={research.advancedGrid}>
            <article><h3>Dataset</h3><p>Casos típicos, difíceis, ambíguos, com informação ausente, conflitos, limites e entradas adversariais.</p><strong>Comece pequeno e cresça com falhas reais.</strong></article>
            <article><h3>Graders</h3><p>Regras, testes, métricas, classificadores, humanos ou modelos julgadores. Combine conforme a dimensão.</p><strong>Valide o avaliador antes de escalar.</strong></article>
            <article><h3>Regressão</h3><p>Uma mudança que melhora um caso pode quebrar outros. Repita o conjunto relevante após alterar prompt, modelo, contexto ou ferramenta.</p><strong>Uma execução boa não prova robustez.</strong></article>
            <article><h3>Benchmarks</h3><p>Permitem comparação padronizada, mas podem saturar, sofrer contaminação ou não representar seu uso real.</p><strong>Resultado em benchmark não é adequação universal.</strong></article>
          </div>
          <div className={research.webLimits}><h3>Escalas simples são preferíveis à falsa precisão</h3><p>Quando uma escala ajudar, defina o significado: 0 — não atende; 1 — atende parcialmente; 2 — atende. Pesos só fazem sentido quando refletem a tarefa: em saúde, segurança pode prevalecer sobre estilo; em código, funcionamento sobre elegância.</p></div>
        </section>

        <section className={`${shared.section} ${research.protocolSection} ${styles.protocolSection}`} id="protocolo" aria-labelledby="protocolo-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Protocolo operacional</p>
            <h2 id="protocolo-title">Avalie em oito etapas, com complexidade proporcional</h2>
            <p>Esta organização editorial apresentada por Clever Souza combina avaliação baseada em critérios, verificação e correção. Não é uma alegação de método científico exclusivo.</p>
          </div>
          <ol className={`${shared.protocolList} ${research.protocolList}`}>
            {protocol.map(([title, text], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
          <div className={styles.severityGrid}>
            {[
              ["Crítico", "Pode causar dano, invalidar o uso ou mudar materialmente a decisão."],
              ["Relevante", "Prejudica objetivo, confiabilidade ou completude de forma significativa."],
              ["Menor", "É real, mas não altera substancialmente a conclusão ou o uso."],
              ["Editorial", "Afeta clareza, concisão ou apresentação sem mudar o conteúdo essencial."],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={research.evidenceMatrix}>
            <h3>Matriz de avaliação</h3>
            <div className={research.tableWrap}>
              <table>
                <caption className={shared.srOnly}>Exemplo de matriz com critério, status, problema, impacto e correção</caption>
                <thead><tr><th>Critério</th><th>Status</th><th>Problema</th><th>Impacto</th><th>Correção</th></tr></thead>
                <tbody>
                  <tr><td>Factualidade</td><td><span className={research.limited}>Parcial</span></td><td>Dado não verificado</td><td>Alto</td><td>Consultar a fonte original</td></tr>
                  <tr><td>Completude</td><td><span className={research.unconfirmed}>Falha</span></td><td>Risco material omitido</td><td>Alto</td><td>Incluir limite e condição</td></tr>
                  <tr><td>Clareza</td><td><span className={research.confirmed}>Aprovada</span></td><td>—</td><td>—</td><td>Preservar</td></tr>
                </tbody>
              </table>
            </div>
            <p>A matriz organiza evidências; não substitui justificativa. Em mobile, cada linha permanece acessível por rolagem horizontal controlada.</p>
          </div>
          <div className={styles.verdictPanel}>
            {[
              ["Aprovada", "Atende ao objetivo e não possui falha material conhecida."],
              ["Aprovada com ressalvas", "Pode ser usada se as limitações declaradas forem aceitáveis."],
              ["Precisa de correções", "Há falhas materiais corrigíveis antes do uso pretendido."],
              ["Não confiável para este objetivo", "Falta evidência, há erro crítico ou o contexto não permite sustentar a conclusão."],
            ].map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="exemplos-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Aplicação</p>
            <h2 id="exemplos-title">Oito padrões que uma boa auditoria distingue</h2>
          </div>
          <div className={styles.exampleStack}>
            {examples.map((example) => (
              <article key={example.title}>
                <div><span>{example.type}</span><h3>{example.title}</h3></div>
                <blockquote>{example.response}</blockquote>
                <p><strong>Avaliação:</strong> {example.audit}</p>
              </article>
            ))}
          </div>
          <div className={research.beforeAfter}>
            <div><p>Avaliação vaga</p><blockquote>“Essa resposta está boa. Eu daria 9/10.”</blockquote><span>Não define sucesso, não verifica nada e cria precisão sem base.</span></div>
            <div><p>Avaliação útil</p><blockquote>“Atende ao formato e está clara; precisa corrigir o dado X, incluir o risco Y e reduzir certeza na conclusão Z.”</blockquote><span>Critérios, evidência, impacto e ação ficam observáveis.</span></div>
          </div>
        </section>

        <section className={`${shared.section} ${styles.templatesSection}`} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Ferramentas copiáveis</p>
            <h2 id="templates-title">Escolha o menor template que controle o risco</h2>
            <p>Uma resposta comum não precisa de uma auditoria de laboratório. Expanda o processo quando impacto, incerteza ou recorrência justificarem.</p>
          </div>
          <div className={research.templateStack}>
            {[
              ["Avaliação rápida", "Para respostas comuns e decisões reversíveis", quickAuditTemplate],
              ["Auditoria aprofundada", "Para respostas importantes ou complexas", deepAuditTemplate],
              ["Verificação factual", "Para claims, números e conclusões", factualTemplate],
              ["Avaliação baseada em fontes", "Para pesquisa, RAG e documentos", sourceAuditTemplate],
              ["Comparação A/B", "Para escolher entre duas respostas", comparisonTemplate],
              ["Resposta de alto risco", "Para saúde, direito, finanças e segurança", highRiskTemplate],
              ["Avaliação de código", "Para preferir execução a aparência", codeTemplate],
            ].map(([title, description, value], index) => (
              <details key={title} open={index === 0}>
                <summary><span><strong>{title}</strong><small>{description}</small></span></summary>
                <PromptBlock label={title} value={value} />
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${research.aiUseSection} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="usar-com-ia-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Contexto operacional</p>
            <h2 id="usar-com-ia-title">Use esta página para avaliar uma resposta de IA</h2>
            <p>Funciona em sistemas capazes de acessar páginas web. Forneça o pedido original sempre que possível.</p>
          </div>
          <PromptBlock label="Copiar protocolo de auditoria" value={useWithAiPrompt} />
          <div className={research.aiRules}>
            <h3>Regras interpretáveis por IA</h3>
            <ol>
              {[
                ["Não invente falhas", "Preserve tudo que está correto e adequado."],
                ["Seja task-aware", "Aplique apenas critérios pertinentes à tarefa e ao risco."],
                ["Verifique o material", "Não trate estilo, citação ou confiança como prova."],
                ["Classifique impacto", "Explique por que a falha muda ou não muda o uso."],
                ["Declare limites", "Sem pedido ou evidência, reduza o alcance do julgamento."],
                ["Corrija com precisão", "Altere causas materiais e reteste dependências."],
              ].map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}
            </ol>
          </div>
        </section>

        <section className={shared.section} id="checklist" aria-labelledby="checklist-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Auditoria rápida</p>
            <h2 id="checklist-title">Checklist antes de usar a resposta</h2>
          </div>
          <ul className={research.finalChecklist}>
            {[
              "O pedido, objetivo e uso pretendido estão claros?",
              "A resposta cumpriu requisitos, formato, restrições e escopo?",
              "Os critérios aplicados são adequados a esta tarefa?",
              "Fatos, números e cálculos importantes foram verificados?",
              "As citações existem e sustentam exatamente as afirmações?",
              "Data, versão, território e contexto continuam válidos?",
              "Fato, inferência, recomendação e hipótese estão diferenciados?",
              "Há contradições internas ou com as fontes?",
              "Faltam riscos, exceções, condições ou alternativas materiais?",
              "A certeza está proporcional à evidência?",
              "Os problemas foram classificados pelo impacto real?",
              "Depois de corrigir, os critérios afetados foram retestados?",
            ].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ul>
          <div className={styles.relatedGuides}>
            <div><p className={shared.eyebrow}>Sistema editorial de IA</p><h3>Instruir, pesquisar e avaliar são trabalhos complementares</h3><p>Melhore o pedido com Engenharia de Prompt. Investigue fatos e fontes com Pesquisa com IA. Use esta página para determinar se o resultado realmente atende ao objetivo.</p></div>
            <div className={styles.relatedActions}>
              <Link className="button button-secondary" href="/ia/engenharia-de-prompt">Engenharia de Prompt</Link>
              <Link className="button button-secondary" href="/ia/pesquisa-com-ia">Pesquisa com IA</Link>
            </div>
          </div>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Perguntas frequentes</p><h2 id="faq-title">Dúvidas que mudam o julgamento</h2></div>
          <div className={shared.faqList}>
            {[
              ["Toda resposta precisa de auditoria profunda?", "Não. Perguntas triviais, tarefas criativas simples e decisões reversíveis pedem uma revisão proporcional. Aumente o rigor quando o custo do erro, a incerteza ou o impacto crescerem."],
              ["Se a resposta tem fontes, posso confiar?", "Não automaticamente. Verifique existência, correspondência, suporte, atualidade e adequação de cada fonte importante."],
              ["Uma resposta correta está sempre bem fundamentada?", "Não. Ela pode acertar por conhecimento externo ou coincidência e ainda descumprir a exigência de usar um documento específico."],
              ["LLM-as-a-Judge substitui avaliação humana?", "Não como regra. Pode ampliar escala e consistência relativa, mas sofre vieses e precisa ser calibrado contra critérios, evidências e amostras humanas."],
              ["Qual é o melhor escore para avaliar IA?", "Não há escore universal. Prefira critérios definidos e status interpretáveis; use números somente quando a escala e seus pesos forem explicados."],
              ["Dizer “não sei” é uma resposta ruim?", "Não necessariamente. Quando a evidência não permite concluir, declarar a incerteza pode ser mais correto e seguro que inventar uma resposta."],
              ["Alucinação significa que a IA mentiu?", "Não. Mentira implica intenção de enganar. Para modelos, prefira erro, alucinação, informação incorreta ou afirmação não sustentada."],
              ["Como avaliar uma resposta sem o pedido original?", "Analise coerência, fatos verificáveis, fontes e riscos aparentes, mas declare que aderência, completude e utilidade não podem ser julgadas integralmente."],
            ].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.referencesSection}`} id="referencias" aria-labelledby="referencias-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Base metodológica</p>
            <h2 id="referencias-title">Referências principais</h2>
            <p>Documentação oficial e trabalhos originais consultados. Métodos e ferramentas específicas podem mudar; os princípios da página são apresentados com suas condições e limites.</p>
          </div>
          <div className={`${shared.sourceGroups} ${research.sourceGroups}`}>
            {sources.map((source) => (
              <section key={source.group} aria-labelledby={`source-${source.group.replace(/\W+/g, "-").toLowerCase()}`}>
                <h3 id={`source-${source.group.replace(/\W+/g, "-").toLowerCase()}`}>{source.group}</h3>
                <ul>
                  {source.items.map(([title, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{title}<span aria-hidden="true">↗</span></a></li>)}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
