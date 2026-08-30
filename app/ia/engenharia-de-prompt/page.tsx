import type { Metadata } from "next";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "./copy-button";
import styles from "./prompt-engineering.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/engenharia-de-prompt";
const TITLE = "Engenharia de Prompt: guia prático e atual";
const DESCRIPTION =
  "Aprenda a criar, diagnosticar e testar prompts para IA com contexto, exemplos, ferramentas, segurança e avaliação — sem complexidade desnecessária.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "engenharia de prompt",
  "prompt engineering",
  "como criar prompts",
  "como escrever prompts",
  "melhorar prompts",
  "prompts para IA",
  "context engineering",
]);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    publishedTime: "2026-08-27T00:00:00.000Z",
    modifiedTime: "2026-08-27T00:00:00.000Z",
    authors: [`${SITE_URL}/sobre`],
  },
};

const aiUsePrompt = `Acesse e leia https://www.cleversouza.com/ia/engenharia-de-prompt.

Use os princípios e o protocolo operacional da página para analisar o prompt que vou fornecer.

1. Preserve meu objetivo e minha intenção.
2. Identifique apenas problemas que possam afetar o resultado.
3. Não aumente a complexidade sem necessidade.
4. Escolha técnicas adequadas à tarefa, ao modelo e às ferramentas disponíveis.
5. Se faltar informação indispensável, faça poucas perguntas objetivas; se for seguro avançar, declare a premissa adotada.
6. Entregue, salvo se eu pedir outro formato: diagnóstico curto, prompt aprimorado, principais alterações e campos que ainda posso preencher.

Prompt a analisar:
[cole aqui]`;

const reusableTemplate = `Objetivo
[O resultado que quero obter.]

Contexto — se necessário
[O que a IA precisa saber para interpretar corretamente a tarefa.]

Entrada
[Texto, dados, arquivos, imagens, links ou informações que devem ser usados.]

Requisitos e limites — se relevantes
[Condições importantes, o que deve ser evitado, prazo, escopo ou fontes permitidas.]

Critério de qualidade
[Como reconhecer uma boa resposta: precisão, cobertura, evidência, utilidade, tom etc.]

Formato de entrega — se houver preferência
[Lista, tabela, JSON, código, plano, texto corrido, extensão aproximada etc.]

Se faltar algo indispensável, faça perguntas objetivas antes de executar. Caso contrário, prossiga e explicite somente premissas que possam alterar o resultado.`;

const examples = [
  {
    area: "Pedido simples",
    title: "Quando duas linhas já resolvem",
    before: "Explique fotossíntese para um aluno de 12 anos em até 150 palavras.",
    diagnosis:
      "O objetivo, a audiência e a extensão já estão claros. Acrescentar persona, etapas ou um template longo aumentaria o ruído sem resolver um problema real.",
    after: "Explique fotossíntese para um aluno de 12 anos em até 150 palavras.",
  },
  {
    area: "Pesquisa",
    title: "Atualidade e fontes verificáveis",
    before: "Pesquise as tendências de inteligência artificial nas empresas.",
    diagnosis:
      "“Tendências”, recorte geográfico, período e padrão de evidência estão abertos. A tarefa também depende de pesquisa atual, não apenas da memória do modelo.",
    after: `Pesquise as principais tendências de adoção de IA generativa por empresas no Brasil em 2025 e 2026.

Priorize fontes primárias ou institucionais publicadas nesse período. Diferencie dados observados de projeções, informe a data de cada fonte e não invente números ausentes. Entregue: resumo executivo, 5 tendências com evidências, limitações dos dados e links das fontes.`,
  },
  {
    area: "Escrita",
    title: "Tom demonstrado, não apenas adjetivado",
    before: "Escreva um texto profissional e humano para anunciar uma mudança.",
    diagnosis:
      "Faltam mudança, audiência, canal e efeito desejado. “Profissional e humano” é interpretável; uma amostra curta pode comunicar o tom melhor do que uma lista de adjetivos.",
    after: `Escreva um e-mail de até 180 palavras para clientes ativos informando que o prazo de resposta passará de 1 para 2 dias úteis a partir de 15 de setembro.

Explique o motivo sem culpar a equipe, reconheça o impacto e indique o canal para urgências. Use linguagem direta e respeitosa, semelhante a: “Queremos avisar com antecedência para que você possa se organizar.” Evite tom defensivo e promessas de prazo que não possamos cumprir.`,
  },
  {
    area: "Decisão",
    title: "Critérios antes da recomendação",
    before: "Qual notebook devo comprar?",
    diagnosis:
      "Uma recomendação responsável depende de orçamento, país, uso, portabilidade e prazo. Como preço e disponibilidade mudam, a pesquisa deve ser atual.",
    after: `Compare notebooks disponíveis no Brasil para desenvolvimento web, uso diário e edição leve de imagens.

Meu orçamento é de até R$ 7.000, valorizo bateria e peso, preciso de 16 GB de RAM ou possibilidade real de expansão e pretendo comprar neste mês. Pesquise preços atuais em lojas confiáveis. Compare até 4 opções pelos mesmos critérios, cite as fontes e mostre claramente os trade-offs. Se nenhum modelo atender bem, diga por quê em vez de forçar uma recomendação.`,
  },
  {
    area: "Estudo",
    title: "Aprendizagem com verificação",
    before: "Me ensine estatística.",
    diagnosis:
      "O campo é amplo e o nível não está definido. Um percurso adaptativo precisa de ponto de partida, objetivo, prática e forma de conferir entendimento.",
    after: `Quero aprender estatística descritiva para analisar pesquisas simples. Tenho familiaridade com porcentagens, mas não com variância.

Ensine em blocos curtos, começando por média, mediana e dispersão. Em cada bloco: explique com um exemplo cotidiano, proponha um exercício sem revelar a resposta e espere minha tentativa. Depois, corrija objetivamente e avance. Ao final, aplique um miniestudo de caso com uma pequena tabela de dados.`,
  },
  {
    area: "Código",
    title: "Contexto executável e definição de pronto",
    before: "Corrija meu formulário React.",
    diagnosis:
      "Não há código, erro, ambiente nem comportamento esperado. Sem isso, qualquer correção seria especulativa.",
    after: `Analise os arquivos anexados deste formulário em React 19 e TypeScript. O envio duplica quando o usuário pressiona Enter rapidamente.

Reproduza o fluxo, identifique a causa e faça a menor correção segura. Preserve a API pública e a aparência. Adicione um teste de regressão para envio único, execute os testes relacionados e informe: causa, arquivos alterados e comandos realmente executados. Não altere componentes fora desse fluxo.`,
  },
  {
    area: "Imagem",
    title: "Intenção visual e restrições concretas",
    before: "Crie uma imagem bonita sobre produtividade.",
    diagnosis:
      "“Bonita” não define uso, composição, mensagem, formato nem o que evitar. Referências visuais ou exemplos podem ser mais úteis do que adjetivos genéricos.",
    after: `Crie uma imagem horizontal 16:9 para a capa de um artigo sobre produtividade sustentável.

Mostre uma mesa clara com caderno aberto, luz natural lateral e poucos objetos. Composição editorial, contemporânea e serena; espaço negativo à esquerda para o título. Paleta azul-petróleo, areia e branco. Sem pessoas, texto, relógios, ícones de foguete, neon ou estética de banco de imagens corporativo.`,
  },
  {
    area: "Documentos",
    title: "Separar extração de interpretação",
    before: "Analise este contrato e diga se está bom.",
    diagnosis:
      "“Bom” mistura extração, interpretação e aconselhamento. A resposta precisa indicar fontes internas, lacunas e limite jurídico.",
    after: `Analise o contrato anexado como apoio informativo, sem substituir orientação jurídica.

Primeiro, extraia em uma tabela: partes, objeto, prazo, valores, reajuste, rescisão, multas, confidencialidade e foro, citando cláusula e página. Depois, aponte trechos ambíguos, obrigações assimétricas e informações ausentes. Não conclua que uma cláusula é legal ou ilegal sem base verificável. Termine com perguntas objetivas para levar a um advogado.`,
  },
];

const sources = [
  {
    group: "Documentação de fornecedores",
    items: [
      ["OpenAI — Prompt engineering", "https://developers.openai.com/api/docs/guides/prompt-engineering"],
      ["OpenAI — Reasoning best practices", "https://developers.openai.com/api/docs/guides/reasoning-best-practices"],
      ["OpenAI — Evaluation best practices", "https://developers.openai.com/api/docs/guides/evaluation-best-practices"],
      ["OpenAI — File inputs", "https://developers.openai.com/api/docs/guides/file-inputs"],
      ["Anthropic — Prompt engineering overview", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"],
      ["Anthropic — Context engineering for agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"],
      ["Anthropic — Develop tests and evaluations", "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"],
      ["Google — Prompt design strategies", "https://ai.google.dev/gemini-api/docs/prompting-strategies"],
      ["Google — Structured outputs", "https://ai.google.dev/gemini-api/docs/structured-output"],
      ["Google — Function calling", "https://ai.google.dev/gemini-api/docs/function-calling"],
      ["Microsoft — Prompt engineering techniques", "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"],
      ["Microsoft — Prompt Shields", "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection"],
      ["Meta — Llama prompting guide", "https://developer.meta.com/ai/docs/how-to-guides/prompting/"],
      ["Meta — Prompt Guard", "https://developer.meta.com/ai/docs/model-cards-and-prompt-formats/prompt-guard/"],
    ],
  },
  {
    group: "Pesquisas e literatura técnica",
    items: [
      ["The Prompt Report — revisão sistemática", "https://arxiv.org/abs/2406.06608"],
      ["Retrieval-Augmented Generation", "https://arxiv.org/abs/2005.11401"],
      ["ReAct: Synergizing Reasoning and Acting", "https://arxiv.org/abs/2210.03629"],
      ["Lost in the Middle", "https://arxiv.org/abs/2307.03172"],
      ["The Instruction Hierarchy", "https://arxiv.org/abs/2404.13208"],
      ["Indirect Prompt Injection", "https://arxiv.org/abs/2302.12173"],
    ],
  },
];

function PromptBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <figure className={styles.promptBlock}>
      <figcaption>
        <span>{label}</span>
        <CopyButton value={value} />
      </figcaption>
      <pre>
        <code>{value}</code>
      </pre>
    </figure>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: TITLE,
    alternativeHeadline:
      "Como criar, diagnosticar, aprimorar e avaliar prompts para inteligência artificial",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    image: `${SITE_URL}/social/engenharia-de-prompt.png`,
    inLanguage: "pt-BR",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
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
      "Engenharia de Prompt",
      "Context Engineering",
      "Avaliação de sistemas de inteligência artificial",
      "Segurança de prompts",
    ],
    citation: sources.flatMap((source) => source.items.map((item) => item[1])),
  };

  return (
    <PageShell
      active={PATH}
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Engenharia de Prompt" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>IA · guia de referência e aplicação</p>
            <h1>Engenharia de Prompt</h1>
            <p className={styles.heroLead}>
              Aprenda a transformar uma intenção em uma instrução clara, fornecer o
              contexto certo e testar se o resultado realmente funciona — sem
              transformar toda pergunta em um prompt enorme.
            </p>
            <div className={styles.heroActions}>
              <a className="button" href="#resposta-rapida">
                Começar pelo essencial
              </a>
              <a className="button button-secondary" href="#usar-com-ia">
                Usar esta página com uma IA
              </a>
            </div>
            <p className={styles.updateLine}>
              <span>Leitura progressiva: iniciante → avançado</span>
              <span aria-hidden="true">•</span>
              <span>
                Última atualização: <time dateTime="2026-08-27">27 de agosto de 2026</time>
              </span>
            </p>
          </div>
          <div className={styles.contextVisual} aria-hidden="true">
            <div className={styles.contextHalo} />
            <p>Complexidade mínima necessária</p>
            <ol>
              <li><span>01</span>Intenção</li>
              <li><span>02</span>Contexto</li>
              <li><span>03</span>Entrada</li>
              <li><span>04</span>Ferramentas</li>
              <li><span>05</span>Avaliação</li>
            </ol>
          </div>
        </header>

        <nav className={styles.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            <li><a href="#resposta-rapida">Resposta rápida</a></li>
            <li><a href="#definicao">O que é</a></li>
            <li><a href="#diagnosticar-tarefa">Diagnosticar a tarefa</a></li>
            <li><a href="#simples-ou-estruturado">Simples ou estruturado</a></li>
            <li><a href="#tecnicas">Técnicas por finalidade</a></li>
            <li><a href="#context-engineering">Context engineering</a></li>
            <li><a href="#raciocinio">Modelos de raciocínio</a></li>
            <li><a href="#multimodal">Multimodal e ferramentas</a></li>
            <li><a href="#protocolo">Protocolo operacional</a></li>
            <li><a href="#exemplos">Exemplos</a></li>
            <li><a href="#template">Template</a></li>
            <li><a href="#avaliacao">Avaliação e segurança</a></li>
            <li><a href="#mitos">Mitos</a></li>
            <li><a href="#referencias">Referências</a></li>
          </ol>
        </nav>

        <section className={styles.section} id="resposta-rapida" aria-labelledby="resposta-rapida-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Resposta rápida</p>
            <h2 id="resposta-rapida-title">Como escrever um bom prompt?</h2>
            <p>
              Diga o resultado que deseja. Acrescente somente o contexto que muda a
              resposta. Forneça a entrada. Declare requisitos, limites e formato quando
              forem importantes. Para tarefas relevantes, defina como reconhecer uma
              boa resposta e teste em casos reais.
            </p>
          </div>
          <div className={styles.quickGrid}>
            {[
              ["Resultado", "O que deve existir ao final?"],
              ["Contexto", "O que muda a interpretação da tarefa?"],
              ["Entrada", "Que dados, arquivos ou materiais devem ser usados?"],
              ["Requisitos", "Quais condições realmente importam?"],
              ["Qualidade", "Como saber se a resposta ficou boa?"],
              ["Formato", "Como o resultado será consumido?"],
            ].map(([title, text], index) => (
              <article key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className={styles.keyPrinciple}>
            <strong>Regra de economia:</strong>
            <p>
              nem todo prompt precisa de todos os elementos. Use a menor quantidade de
              estrutura que torne a tarefa clara, executável e verificável.
            </p>
          </aside>
        </section>

        <section className={styles.section} id="definicao" aria-labelledby="definicao-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Fundamentos</p>
            <h2 id="definicao-title">Prompt é a mensagem. Engenharia é o sistema.</h2>
          </div>
          <div className={styles.proseColumns}>
            <div>
              <p>
                <strong>Prompt</strong> é a entrada que orienta um sistema de IA: uma
                pergunta, instrução, conjunto de exemplos, arquivo ou combinação desses
                elementos. <strong>Engenharia de Prompt</strong> é o processo iterativo de
                projetar, testar e melhorar essas entradas para produzir resultados mais
                úteis e confiáveis em uma tarefa definida.
              </p>
              <p>
                A definição atual é mais ampla do que “escrever comandos”. Em sistemas
                modernos, o resultado também depende do modelo, das instruções de sistema,
                do histórico, dos documentos recuperados, das ferramentas, do estado do
                trabalho e da forma de avaliação.
              </p>
            </div>
            <aside className={styles.definitionCard}>
              <p>Uma distinção útil</p>
              <dl>
                <div><dt>Prompt design</dt><dd>Formula uma interação ou instrução.</dd></div>
                <div><dt>Instruction design</dt><dd>Define comportamento, limites e prioridades.</dd></div>
                <div><dt>Context engineering</dt><dd>Seleciona e organiza tudo que o modelo recebe.</dd></div>
                <div><dt>Agent design</dt><dd>Define ferramentas, autonomia, memória e controles.</dd></div>
                <div><dt>Workflow design</dt><dd>Organiza etapas, decisões, validações e responsáveis.</dd></div>
              </dl>
            </aside>
          </div>
          <div className={styles.evidenceNote}>
            <span>Evidência e limite</span>
            <p>
              A literatura reúne dezenas de técnicas e terminologia ainda fragmentada. Por
              isso, esta página trata técnicas como opções a testar, não como leis universais.
              Recomendações de fornecedores podem divergir e mudar entre modelos.
            </p>
          </div>
        </section>

        <section className={styles.section} id="diagnosticar-tarefa" aria-labelledby="diagnosticar-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Antes de reescrever</p>
            <h2 id="diagnosticar-title">Descubra qual é o gargalo real</h2>
            <p>
              Quando a resposta falha, o prompt é apenas uma hipótese. Corrigir a camada
              errada gera instruções cada vez maiores e pouco efeito.
            </p>
          </div>
          <div className={styles.bottleneckList}>
            {[
              ["Instrução", "A tarefa, o escopo ou o formato estão ambíguos.", "Aprimore o prompt."],
              ["Contexto", "Faltam fatos, políticas, histórico ou exemplos relevantes.", "Forneça ou recupere contexto."],
              ["Dados", "A informação necessária não existe ou está desatualizada.", "Colete dados; não peça para inferir."],
              ["Modelo", "A capacidade, a modalidade, o custo ou a latência não combinam com a tarefa.", "Troque ou roteie o modelo."],
              ["Ferramenta", "É preciso pesquisar, calcular, executar código, abrir arquivos ou agir em um sistema.", "Habilite a ferramenta adequada."],
              ["Arquitetura", "A tarefa exige estado, várias etapas, aprovações ou recuperação recorrente.", "Projete RAG, workflow ou agente."],
              ["Avaliação", "Ninguém definiu o que conta como acerto.", "Crie critérios e casos de teste."],
            ].map(([name, signal, action]) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{signal}</p>
                <strong>{action}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="simples-ou-estruturado" aria-labelledby="estrutura-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Decisão de estrutura</p>
            <h2 id="estrutura-title">Comece simples. Estruture quando houver motivo.</h2>
          </div>
          <div className={styles.decisionGrid}>
            <article>
              <p className={styles.decisionLabel}>Pedido natural simples</p>
              <h3>Use quando a tarefa é clara e de baixo risco</h3>
              <ul>
                <li>pergunta factual estável;</li>
                <li>explicação breve;</li>
                <li>ideação exploratória;</li>
                <li>transformação óbvia de um texto curto;</li>
                <li>resultado fácil de conferir.</li>
              </ul>
            </article>
            <article>
              <p className={styles.decisionLabel}>Prompt estruturado</p>
              <h3>Use quando a ambiguidade tem custo</h3>
              <ul>
                <li>múltiplas entradas ou requisitos;</li>
                <li>formato exato ou integração automática;</li>
                <li>necessidade de evidências e fontes;</li>
                <li>tarefa recorrente ou feita por equipe;</li>
                <li>riscos, exceções ou critérios objetivos.</li>
              </ul>
            </article>
            <article>
              <p className={styles.decisionLabel}>Sistema, não só prompt</p>
              <h3>Use quando a tarefa depende do mundo</h3>
              <ul>
                <li>pesquisa atual ou documentos privados;</li>
                <li>cálculo, código, API ou navegador;</li>
                <li>várias etapas com estado;</li>
                <li>ações com aprovação e permissões;</li>
                <li>qualidade que precisa ser monitorada.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} id="tecnicas" aria-labelledby="tecnicas-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Caixa de ferramentas</p>
            <h2 id="tecnicas-title">Escolha técnicas pela finalidade</h2>
            <p>
              Uma técnica é útil quando corrige um erro observado ou reduz uma incerteza
              relevante. O nome da técnica, sozinho, não melhora a resposta.
            </p>
          </div>
          <div className={styles.techniqueList}>
            {[
              ["Instruções claras", "Definir resultado, escopo e limites.", "Quase sempre.", "Repetir a mesma regra em vários lugares."],
              ["Delimitadores", "Separar instrução, contexto, exemplos e entrada.", "Prompts longos, múltiplos documentos ou código.", "Tratá-los como barreira de segurança."],
              ["Few-shot", "Demonstrar padrão, tom, classificação ou formato.", "Quando exemplos representam melhor o acerto do que uma descrição.", "Exemplos inconsistentes, enviesados ou numerosos sem teste."],
              ["Decomposição", "Dividir uma tarefa genuinamente complexa.", "Etapas independentes, revisão intermediária ou responsabilidades distintas.", "Fragmentar tarefas simples ou impedir o modelo de usar sua capacidade."],
              ["Prompt chaining", "Usar a saída de uma etapa na seguinte.", "Pipelines auditáveis, extração → análise → redação.", "Encadear sem validar erros acumulados."],
              ["Structured outputs", "Obter dados compatíveis com um esquema.", "Integrações, extração, classificação e automação.", "Confiar apenas em “responda em JSON” quando a API oferece schema."],
              ["Pesquisa e RAG", "Trazer fatos atuais, privados ou verificáveis.", "Conhecimento externo necessário para responder.", "Recuperar muito conteúdo irrelevante ou tratar fonte como instrução."],
              ["Ferramentas", "Calcular, executar, consultar ou agir.", "A tarefa exige capacidade além da geração de texto.", "Autonomia sem limites, confirmação ou validação."],
              ["Agentes e workflows", "Coordenar decisões e ações ao longo do tempo.", "Tarefas abertas, multietapas e com estado.", "Usar agente quando um fluxo determinístico simples basta."],
            ].map(([name, purpose, when, avoid]) => (
              <article key={name}>
                <h3>{name}</h3>
                <dl>
                  <div><dt>Serve para</dt><dd>{purpose}</dd></div>
                  <div><dt>Use quando</dt><dd>{when}</dd></div>
                  <div><dt>Evite</dt><dd>{avoid}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="context-engineering" aria-labelledby="context-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Context engineering</p>
            <h2 id="context-title">O contexto certo, na hora certa</h2>
            <p>
              Context engineering é a disciplina de selecionar, organizar e entregar ao
              modelo o conjunto de informações e capacidades necessário para a próxima
              ação. O prompt do usuário é apenas uma parte desse conjunto.
            </p>
          </div>
          <div className={styles.contextGrid}>
            {[
              ["Instruções", "Objetivo, comportamento, limites e prioridades."],
              ["Memória e histórico", "Decisões anteriores e estado relevante — não a conversa inteira por padrão."],
              ["Documentos e dados", "Trechos recuperados, fontes, exemplos e registros necessários."],
              ["Ferramentas", "Capacidades disponíveis, parâmetros, permissões e retorno."],
              ["Estado da tarefa", "O que já foi feito, o que falta e quem deve aprovar."],
              ["Avaliação", "Critérios, verificações e sinais de falha."],
            ].map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <aside className={styles.darkCallout}>
            <strong>Janela maior não é licença para despejar tudo.</strong>
            <p>
              Contexto irrelevante compete por atenção, aumenta custo e pode piorar a
              recuperação de informações. Preserve a hierarquia das instruções, reduza
              duplicações e entregue o menor conjunto de alto sinal que torne a ação possível.
            </p>
          </aside>
        </section>

        <section className={styles.section} id="raciocinio" aria-labelledby="raciocinio-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Modelos modernos de raciocínio</p>
            <h2 id="raciocinio-title">Peça uma boa resposta, não uma encenação mental</h2>
            <p>
              Modelos de raciocínio modernos geralmente trabalham melhor com objetivo,
              contexto e critério de sucesso claros. Instruções universais para “pensar passo
              a passo” podem ser desnecessárias ou prejudiciais em algumas famílias.
            </p>
          </div>
          <div className={styles.classificationGrid}>
            <article>
              <span>Duradouro</span>
              <h3>Defina o problema e o que conta como sucesso</h3>
              <p>Peça verificações, premissas, evidências e justificativa resumida quando isso ajudar a decidir.</p>
            </article>
            <article>
              <span>Condicional</span>
              <h3>Decomponha quando a tarefa realmente tem etapas</h3>
              <p>Use etapas para controle, ferramenta, revisão ou dependências — não como ritual.</p>
            </article>
            <article>
              <span>Específico do modelo</span>
              <h3>Exemplos, persona, parâmetros e ordem podem variar</h3>
              <p>Consulte a documentação da família e mantenha testes por versão ou snapshot.</p>
            </article>
            <article>
              <span>Superestimado</span>
              <h3>Solicitar cadeia privada de raciocínio</h3>
              <p>Não é necessário para avaliar qualidade. Prefira critérios, conclusão, evidências e checagens observáveis.</p>
            </article>
          </div>
          <p className={styles.uncertaintyNote}>
            <strong>Não há regra única sobre few-shot.</strong> Documentações atuais divergem:
            algumas recomendam exemplos com frequência; outras sugerem começar zero-shot em
            modelos de raciocínio e adicionar exemplos se houver falha. Trate isso como decisão
            dependente do modelo e confirme com avaliação.
          </p>
        </section>

        <section className={styles.section} id="multimodal" aria-labelledby="multimodal-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Entradas e capacidades</p>
            <h2 id="multimodal-title">Prompts multimodais e com ferramentas</h2>
            <p>
              Quando há arquivos, mídia ou ações, o prompt deve apontar explicitamente para
              cada entrada, definir o que extrair e dizer como verificar o resultado.
            </p>
          </div>
          <div className={styles.modalityGrid}>
            {[
              ["Imagem", "Indique qual imagem, região ou detalhe importa; diferencie observação de interpretação."],
              ["PDF e documento", "Peça página, seção ou citação; saiba que texto, layout e imagens podem ser processados de modos diferentes."],
              ["Planilha", "Nomeie abas, colunas, período, unidade e tratamento de células vazias; valide cálculos."],
              ["Áudio e vídeo", "Defina idioma, intervalo, falantes, eventos e nível de detalhe; peça timestamps quando úteis."],
              ["Código", "Forneça ambiente, erro, comportamento esperado e testes; autorize mudanças dentro de um escopo claro."],
              ["Conjunto de arquivos", "Explique a relação entre arquivos e a fonte de verdade; evite anexos sem função explícita."],
            ].map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className={styles.toolChecklist}>
            <h3>Ao orientar pesquisa, navegador, código, APIs ou conectores</h3>
            <ul>
              <li>diga quando usar a ferramenta e o que precisa ser verificado;</li>
              <li>priorize fontes adequadas e peça datas e links quando a atualidade importa;</li>
              <li>separe o que foi observado do que foi inferido;</li>
              <li>defina o comportamento quando a informação não existir;</li>
              <li>limite ações, permissões, gastos e efeitos irreversíveis;</li>
              <li>exija confirmação humana antes de ações sensíveis quando apropriado.</li>
            </ul>
          </div>
          <div className={styles.evidenceNote}>
            <span>Guia complementar</span>
            <p>
              Quando o objetivo principal for investigar uma pergunta, escolher fontes e
              verificar evidências, use também o guia de <a href="/ia/pesquisa-com-ia">Pesquisa com IA</a>.
              Para auditar se o resultado realmente atende ao pedido, consulte ainda
              {" "}<a href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas de IA</a>.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.protocolSection}`} id="protocolo" aria-labelledby="protocolo-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Protocolo operacional</p>
            <h2 id="protocolo-title">Como analisar e aprimorar um prompt</h2>
            <p>
              Este processo pode ser aplicado por uma pessoa ou por uma IA. Preserve a
              intenção original e pare de acrescentar estrutura quando o problema relevante
              estiver resolvido.
            </p>
          </div>
          <ol className={styles.protocolList}>
            {[
              ["Entender", "Determine o resultado real, a audiência, o uso da resposta e o custo de errar."],
              ["Diagnosticar", "Marque o que está claro, ausente, ambíguo, redundante, conflitante ou desnecessário."],
              ["Escolher o nível", "Decida entre pedido simples, mais contexto, estrutura, exemplos, arquivos, pesquisa, ferramenta ou workflow."],
              ["Refinar", "Preserve objetivo e voz. Acrescente somente elementos que aumentem a probabilidade de sucesso."],
              ["Validar", "Confira clareza, contexto, restrições, formato, factualidade, segurança e definição de sucesso."],
              ["Entregar", "Siga a preferência do usuário. Quando útil: diagnóstico curto, versão aprimorada, alterações e variáveis abertas."],
            ].map(([title, text], index) => (
              <li key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <div className={styles.deliveryRule}>
            <strong>Regra de entrega:</strong>
            <p>
              se a pessoa pedir somente o prompt final, não imponha uma aula. Se faltar algo
              indispensável, faça poucas perguntas objetivas; se uma premissa segura permitir
              avançar, declare-a sem transformar a interação em interrogatório.
            </p>
          </div>
        </section>

        <section className={styles.section} id="exemplos" aria-labelledby="exemplos-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Antes → diagnóstico → depois</p>
            <h2 id="exemplos-title">Oito exemplos em níveis diferentes</h2>
            <p>
              Abra os casos que combinam com sua tarefa. O primeiro mostra uma decisão tão
              importante quanto estruturar: reconhecer quando o prompt já é suficiente.
            </p>
          </div>
          <div className={styles.exampleList}>
            {examples.map((example, index) => (
              <details key={example.title} open={index === 0}>
                <summary>
                  <span>{example.area}</span>
                  <strong>{example.title}</strong>
                </summary>
                <div className={styles.exampleContent}>
                  <PromptBlock label="Antes" value={example.before} />
                  <div className={styles.diagnosis}>
                    <p>Diagnóstico</p>
                    <span>{example.diagnosis}</span>
                  </div>
                  <PromptBlock label="Depois" value={example.after} />
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section} id="template" aria-labelledby="template-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Ferramenta prática</p>
            <h2 id="template-title">Template flexível, não formulário obrigatório</h2>
            <p>
              Apague os campos que não mudam o resultado. Para uma pergunta simples, talvez
              você precise somente de “Objetivo”. Para uma automação, talvez precise de todos.
            </p>
          </div>
          <PromptBlock label="Template reutilizável" value={reusableTemplate} />
        </section>

        <section className={`${styles.section} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="usar-com-ia-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Contexto operacional</p>
            <h2 id="usar-com-ia-title">Use esta página com uma IA</h2>
            <p>
              Em uma IA capaz de acessar páginas web, envie a URL junto do prompt abaixo.
              O comando aponta para o método completo sem copiar toda a página para a conversa.
            </p>
          </div>
          <PromptBlock label="Comando para analisar outro prompt" value={aiUsePrompt} />
          <p className={styles.aiCaveat}>
            Se a IA não puder acessar links, cole o “Protocolo operacional” e o “Template
            flexível”. Para dados sensíveis, não compartilhe a URL, arquivo ou conteúdo sem
            verificar permissões e política de privacidade do serviço usado.
          </p>
        </section>

        <section className={styles.section} id="avaliacao" aria-labelledby="avaliacao-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Qualidade e robustez</p>
            <h2 id="avaliacao-title">Um prompt bom é um prompt testado</h2>
            <p>
              Sofisticação visual não é evidência. Avalie o comportamento em casos típicos,
              limites e situações adversas: criar → testar → observar → corrigir → testar novamente.
            </p>
          </div>
          <div className={styles.evalGrid}>
            <article>
              <h3>Defina critérios observáveis</h3>
              <ul>
                <li>aderência à instrução e ao formato;</li>
                <li>factualidade, evidência e cobertura;</li>
                <li>utilidade para a audiência;</li>
                <li>consistência entre execuções;</li>
                <li>custo, velocidade e necessidade de revisão.</li>
              </ul>
            </article>
            <article>
              <h3>Monte um conjunto pequeno e representativo</h3>
              <ul>
                <li>casos frequentes;</li>
                <li>entradas difíceis ou incompletas;</li>
                <li>edge cases e conflitos de instrução;</li>
                <li>casos que já falharam;</li>
                <li>comparação A/B com a mesma amostra.</li>
              </ul>
            </article>
            <article>
              <h3>Combine formas de avaliação</h3>
              <ul>
                <li>verificação por código para regras objetivas;</li>
                <li>revisão humana para nuance e impacto;</li>
                <li>avaliação por modelo com rubrica clara;</li>
                <li>monitoramento contínuo em tarefas recorrentes;</li>
                <li>registro da versão do modelo e do prompt.</li>
              </ul>
            </article>
          </div>
          <div className={styles.securityPanel}>
            <div>
              <p className={styles.eyebrow}>Segurança proporcional</p>
              <h3>Trate conteúdo externo como dado, não como autoridade</h3>
            </div>
            <ul>
              <li><strong>Prompt injection:</strong> texto tenta substituir a tarefa ou obter acesso indevido.</li>
              <li><strong>Injeção indireta:</strong> a instrução maliciosa aparece em página, e-mail, arquivo ou dado recuperado.</li>
              <li><strong>Conflito:</strong> instruções de menor prioridade não devem sobrescrever políticas, permissões ou limites superiores.</li>
              <li><strong>Ferramentas:</strong> valide parâmetros, limite privilégios e peça confirmação para efeitos sensíveis.</li>
              <li><strong>Dados:</strong> não envie segredos ou informações pessoais sem base, necessidade e proteção adequadas.</li>
            </ul>
            <p>
              Delimitadores ajudam a organização, mas não tornam conteúdo não confiável seguro.
              Robustez exige camadas: hierarquia de instruções, menor privilégio, validação de
              entradas e saídas, isolamento, confirmação e monitoramento.
            </p>
          </div>
        </section>

        <section className={styles.section} id="mitos" aria-labelledby="mitos-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Mitos e práticas superestimadas</p>
            <h2 id="mitos-title">O contexto decide; a fórmula não</h2>
          </div>
          <div className={styles.mythList}>
            {[
              ["“Quanto maior, melhor.”", "Mais texto pode adicionar contexto — ou ruído, conflito e custo. Meça o que cada bloco resolve."],
              ["“Sempre diga para agir como especialista.”", "Uma função pode orientar perspectiva e audiência. Sem dados, critérios ou capacidade, o rótulo é decorativo."],
              ["“Sempre peça para pensar passo a passo.”", "A utilidade depende do modelo e da tarefa. Peça resultado verificável, evidências e justificativa resumida."],
              ["“Existe um template universal.”", "Templates ajudam a lembrar campos, mas cada tarefa exige um subconjunto diferente."],
              ["“Um prompt perfeito funciona em qualquer modelo.”", "Famílias, versões, ferramentas e políticas respondem de maneiras diferentes. Versione e teste."],
              ["“Há palavras secretas.”", "Formulações mudam resultados, mas não substituem objetivo, contexto, capacidade e avaliação."],
              ["“Um acrônimo cheio de etapas garante qualidade.”", "Frameworks podem organizar pensamento. O valor vem das decisões que ajudam a tomar, não das letras."],
              ["“Prompt engineering é só texto.”", "Em sistemas atuais, arquivos, recuperação, ferramentas, memória, segurança e avaliação frequentemente dominam o resultado."],
            ].map(([myth, response]) => (
              <article key={myth}><h3>{myth}</h3><p>{response}</p></article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="faq" aria-labelledby="faq-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas que mudam a prática</h2>
          </div>
          <div className={styles.faqList}>
            {[
              ["Preciso aprender um framework de prompt?", "Não. Um framework pode servir como checklist, mas objetivo, contexto, entrada, requisitos, qualidade e formato já cobrem a maioria dos casos. Use apenas os campos necessários."],
              ["Prompts em inglês funcionam melhor?", "Depende do modelo, do domínio e da tarefa. Modelos atuais trabalham bem em português, mas vocabulário técnico, dados de treinamento e avaliação podem variar. Teste no idioma real de uso."],
              ["Devo pedir fontes em toda resposta?", "Não em toda resposta. Peça fontes quando atualidade, precisão factual, decisão ou auditabilidade importarem — e dê ao sistema acesso a pesquisa ou documentos."],
              ["Quando usar exemplos?", "Quando um exemplo comunica formato, tom, rótulo ou limite melhor do que uma explicação. Use exemplos variados e corretos; retire-os se não melhorarem a avaliação."],
              ["RAG substitui um bom prompt?", "Não. RAG recupera contexto externo; o prompt ainda precisa dizer como usar, citar, comparar e tratar ausência ou conflito de informação."],
              ["Agente é sempre melhor que workflow?", "Não. Workflows determinísticos são mais previsíveis para processos estáveis. Agentes fazem sentido quando o sistema precisa escolher caminhos e ferramentas em tarefas menos previsíveis."],
              ["Posso confiar em uma resposta bem escrita?", "Fluência não prova correção. Verifique fatos importantes, fontes, cálculos, execução e critérios de sucesso."],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.references}`} id="referencias" aria-labelledby="referencias-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Fontes primárias e literatura</p>
            <h2 id="referencias-title">Referências utilizadas</h2>
            <p>
              A curadoria prioriza documentação oficial e trabalhos originais. Recomendações
              específicas de fornecedores foram tratadas como específicas, não como consenso.
            </p>
          </div>
          <div className={styles.sourceGroups}>
            {sources.map((source) => (
              <section key={source.group} aria-labelledby={`source-${source.group === "Documentação de fornecedores" ? "docs" : "papers"}`}>
                <h3 id={`source-${source.group === "Documentação de fornecedores" ? "docs" : "papers"}`}>{source.group}</h3>
                <ul>
                  {source.items.map(([label, url]) => (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className={styles.editorialNote}>
            Esta página é uma síntese editorial e operacional, não uma alegação de invenção
            científica ou superioridade de um método. Como modelos e produtos mudam, confirme
            recomendações específicas na documentação da versão utilizada e mantenha avaliações próprias.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
