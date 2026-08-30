import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./videos.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/videos-curtos";
const TITLE = "Vídeos curtos com IA: roteiro, retenção e distribuição";
const DESCRIPTION =
  "Aprenda a pesquisar, roteirizar, produzir e analisar Reels, TikToks e Shorts com IA, usando atenção, métricas e testes sem prometer viralização.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "vídeos curtos com IA",
  "roteiro para Reels",
  "roteiro para TikTok",
  "roteiro para Shorts",
  "retenção em vídeos",
  "como fazer vídeos curtos",
]);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    publishedTime: "2026-08-29T00:00:00.000Z",
    modifiedTime: "2026-08-29T00:00:00.000Z",
    authors: [`${SITE_URL}/sobre`],
  },
};

const platforms = [
  {
    name: "Instagram Reels",
    known: "A Meta declara que as recomendações são personalizadas. Atividade da pessoa, informações do Reel, histórico de interação, tempo assistido, retenção, compartilhamentos e outros sinais podem entrar nas previsões.",
    inspect: "Alcance, visualizações, tempo assistido, retenção, compartilhamentos, salvamentos, follows e elegibilidade no Status da Conta.",
    caution: "Conteúdo permitido pode não ser elegível para recomendação. Originalidade e regras de recomendação importam; não existe frequência universal publicada como garantia.",
  },
  {
    name: "TikTok",
    known: "O TikTok agrupa sinais em interações, informações do conteúdo e informações do usuário. Para muitas pessoas, interações como tempo assistido recebem peso relevante, mas a combinação é personalizada.",
    inspect: "Fontes de tráfego, tempo médio, retenção, conclusão, compartilhamentos, comentários, seguidores e avisos de inelegibilidade para o For You.",
    caution: "O sistema completo é proprietário. Tendências, sons e hashtags podem ajudar descoberta, mas não constituem garantia causal de distribuição.",
  },
  {
    name: "YouTube Shorts",
    known: "O YouTube declara que combina desempenho e personalização: escolha de assistir ou ignorar, duração média, percentual médio visto, likes, dislikes e pesquisas de satisfação.",
    inspect: "Visualizações, engaged views, stayed to watch, duração e percentual assistidos, retenção, origem do tráfego, likes e inscritos.",
    caution: "Desde 31 de março de 2025, uma visualização pública conta quando o Short começa ou repete; engaged views preserva a noção de quem escolheu continuar. Métricas homônimas não são equivalentes entre plataformas.",
  },
  {
    name: "Facebook Reels",
    known: "A Meta descreve seleção e ordenação personalizadas por sistemas de IA, com inventário elegível, sinais, previsões e pontuação para cada pessoa.",
    inspect: "Distribuição, tempo assistido, interações, feedback negativo, audiência alcançada, originalidade e adequação às regras de recomendação.",
    caution: "Facebook e Instagram pertencem à Meta, mas não devem ser tratados como o mesmo feed. Em 2026, o Facebook reforçou a prioridade a conteúdo original e a redução de alcance de cópias sem contribuição material.",
  },
] as const;

const attention = [
  ["Orientar", "O primeiro frame ajuda a pessoa a reconhecer assunto, situação ou movimento antes mesmo da fala."],
  ["Criar uma razão", "O hook apresenta uma razão inicial para continuar — não uma frase mágica."],
  ["Tornar relevante", "A promessa deixa claro o ganho: resposta, utilidade, história, emoção, comparação ou demonstração."],
  ["Progredir", "Cada trecho acrescenta informação, ação, tensão, contraste ou evidência. Repetição sem função aumenta o custo de assistir."],
  ["Cumprir", "O payoff entrega a resposta ou transformação prometida. Curiosidade sem resolução degrada confiança."],
  ["Encerrar", "A conclusão consolida memória e pode sugerir uma ação compatível com o objetivo — inclusive nenhuma CTA explícita."],
] as const;

const hooks = [
  ["Reconhecimento", "Nomeia uma situação que a pessoa já vive."],
  ["Resultado", "Mostra o destino antes de explicar o caminho."],
  ["Demonstração", "Começa fazendo, testando ou transformando."],
  ["Contraste", "Coloca duas possibilidades em tensão."],
  ["Problema", "Expõe um obstáculo relevante e específico."],
  ["Pergunta", "Abre uma investigação cuja resposta vale o tempo."],
  ["História", "Inicia mudança, risco, conflito ou decisão."],
  ["Consequência", "Mostra por que o tema importa agora."],
] as const;

const protocol = [
  ["Definir", "Determine objetivo, público, situação, plataforma e restrições apenas no nível necessário."],
  ["Pesquisar", "Use buscas, comentários, atendimento, analytics e fontes verificáveis. Separe dado real de impressão."],
  ["Formular", "Converta o tema em uma hipótese: para quem, em qual situação e por que esta abordagem pode merecer atenção."],
  ["Escolher", "Selecione um ângulo. Um tema amplo ainda não é um vídeo."],
  ["Arquitetar", "Defina primeiro frame, razão inicial, promessa, progressão e payoff. Use CTA somente se servir ao objetivo."],
  ["Roteirizar", "Integre fala, cena, texto, demonstração, áudio, pausa e B-roll. Roteiro não é apenas narração."],
  ["Produzir", "Grave e edite por função: legibilidade, compreensão, continuidade, direitos e formato."],
  ["Publicar", "Confira elegibilidade, originalidade, descrição, rotulagem de IA, áudio e regras da plataforma."],
  ["Medir", "Leia exposição, escolha de assistir, retenção, tempo, conclusão, interação e ação posterior conforme o objetivo."],
  ["Diagnosticar", "Descreva o observado, formule explicações concorrentes e priorize a hipótese mais útil — sem inventar causalidade."],
  ["Iterar", "Preserve o que funcionou e altere a menor variável capaz de testar a hipótese seguinte."],
] as const;

const diagnostics = [
  ["Pouca exposição", "Elegibilidade, tema restrito, concorrência, histórico, público, contexto temporal ou variação normal.", "Verifique status e fontes de tráfego antes de culpar o sistema."],
  ["Pouca escolha de assistir", "Primeiro frame, reconhecimento do tema, relevância, promessa ou público inadequado.", "Teste outra entrada mantendo corpo e payoff comparáveis."],
  ["Boa entrada, queda rápida", "Hook e promessa podem não se conectar; a introdução pode atrasar a progressão.", "Localize a queda e remova ou reescreva o menor trecho sem função."],
  ["Boa retenção, pouco compartilhamento", "O vídeo pode cumprir bem um objetivo que não produz transmissão; não é falha automática.", "Pergunte se havia utilidade futura, identidade, emoção ou alguém específico para receber."],
  ["Muitas views, pouca conversão", "Desalinhamento entre público, promessa, oferta, contexto ou CTA.", "Analise a ação posterior e a qualidade da audiência, não apenas alcance."],
  ["Queda recorrente no mesmo ponto", "Explicação longa, repetição, mudança confusa ou payoff previsível.", "Compare versões e teste uma mudança por vez quando possível."],
] as const;

const examples = [
  ["Tema genérico", "“5 dicas para dormir melhor.”", "Público: pessoas que deitam cansadas e continuam no celular. Ângulo: o erro de rotina que antecede as dicas. O vídeo só avança para roteiro depois de validar segurança e fonte."],
  ["“Você sabia?”", "“Você sabia que produtividade é importante?”", "Funciona apenas se a lacuna for relevante: “Você termina o dia ocupado, mas sem concluir a tarefa principal? Veja onde o plano se rompe.”"],
  ["Hook forte, corpo fraco", "Promessa extraordinária seguida de explicação genérica.", "Reduza a promessa ou fortaleça a evidência. Hook forte + corpo fraco apenas desloca o abandono."],
  ["Introdução longa", "“Oi, pessoal, hoje eu vim aqui porque muita gente me pergunta...”", "Comece no problema ou na ação. Recoloque contexto somente onde ele for necessário para entender."],
  ["Tutorial", "Explicação abstrata antes da tela.", "Mostre a tarefa pronta, execute os passos na ordem e destaque somente decisões que evitam erro."],
  ["Storytelling", "Cronologia completa sem tensão.", "Selecione situação, mudança, obstáculo, decisão e significado. História curta não é biografia comprimida."],
  ["Sem rosto", "Slides genéricos desconectados da narração.", "Use mãos, POV, captura de tela, objetos, B-roll ou gráficos em que cada visual cumpra uma função."],
  ["Demonstração", "Descrever o resultado antes de mostrá-lo.", "Comece a transformação no primeiro frame e explique enquanto a mudança acontece."],
  ["Compartilhável", "“Mande para três amigos.”", "Crie uma razão humana: uma explicação que ajuda alguém, representa identidade ou resolve uma conversa recorrente."],
  ["Utilitário", "Lista rápida impossível de reter.", "Organize como checklist legível e reconheça o valor futuro do salvamento sem tratá-lo como hack."],
  ["Poucas views", "“O algoritmo me puniu.”", "Observe elegibilidade, exposição, escolha, retenção, tema, público e variação. Sem dados, mantenha causas como hipóteses."],
  ["Views sem resultado", "Celebrar alcance como conversão.", "Compare o objetivo com follows, cliques, leads, vendas ou outra ação posterior relevante."],
  ["Boa retenção, poucos likes", "Concluir que o vídeo falhou.", "Likes são apenas um sinal. O vídeo pode ter sido útil, assistido em silêncio ou não pedir expressão pública."],
  ["Vídeo vencedor", "Copiar tema, texto e edição indefinidamente.", "Preserve a hipótese central e varie assunto, exemplo, público ou formato para descobrir o que realmente se transfere."],
  ["Cadência", "Um criador complexo e um creator solo recebem a mesma meta diária.", "O primeiro pode publicar duas vezes por semana; o segundo pode testar mais. Ambos protegem qualidade mínima e capacidade de aprender."],
] as const;

const myths = [
  ["“Precisa postar todos os dias.”", "Não há lei universal. O YouTube declara explicitamente que Shorts não exigem cadência mínima. Nas demais plataformas, benchmarks não provam causalidade para toda conta.", "Escolha uma cadência sustentável que preserve qualidade e gere feedback suficiente."],
  ["“Vídeo de sete segundos viraliza.”", "Duração curta pode elevar percentual concluído, mas não garante satisfação, tempo absoluto, relevância nem resultado.", "Use o tempo necessário para cumprir a promessa sem trechos ociosos."],
  ["“Corte a cada dois segundos.”", "Não existe regra oficial universal. Mudança visual pode reorientar atenção; excesso também pode elevar carga e reduzir compreensão.", "Corte quando informação, ação, emoção ou ponto de vista mudarem."],
  ["“Áudio em tendência é obrigatório.”", "Sons podem facilitar descoberta ou adequação cultural em algumas superfícies; não substituem mensagem, direitos ou inteligibilidade.", "Use quando servir ao vídeo e estiver licenciado para o contexto."],
  ["“Hashtags fazem viralizar.”", "Hashtags podem classificar ou ajudar busca, mas não garantem recomendação ampla.", "Use poucas descrições realmente relacionadas ao conteúdo e à linguagem do público."],
  ["“Shadowban explica qualquer queda.”", "Queda pode ter muitas causas. Instagram e TikTok oferecem mecanismos de status ou inelegibilidade mais verificáveis.", "Cheque avisos, políticas, tráfego e tendências antes de adotar uma explicação invisível."],
  ["“Apagar, repostar ou editar legenda mata a conta.”", "Não há base pública para uma punição universal por uma ação isolada; spam, cópia repetida e conteúdo inelegível são questões diferentes.", "Corrija erros com proporcionalidade e evite republicação mecânica sem mudança ou motivo."],
  ["“Comente logo após postar para ganhar alcance.”", "Interação artificial do próprio autor não possui garantia causal documentada.", "Responda pessoas e promova conversa porque isso melhora a experiência, não como ritual."],
] as const;

const contentBrief = `OBJETIVO
[Alcance, educação, relacionamento, conversão ou outro]

PÚBLICO E SITUAÇÃO
[Quem é a pessoa e o que está acontecendo quando encontra o vídeo]

PLATAFORMA — opcional
[Instagram Reels, TikTok, YouTube Shorts, Facebook Reels ou neutro]

TEMA → ÂNGULO
[Assunto amplo → perspectiva específica]

HIPÓTESE DE ATENÇÃO
[Por que esta pessoa pode escolher assistir e continuar]

ARQUITETURA
[Primeiro frame, hook, promessa, progressão e payoff]

ROTEIRO VISUAL
[Fala, cenas, texto, demonstração, áudio e pausas]

CTA — se necessário
[Ação coerente com o objetivo]

MÉTRICA PRINCIPAL
[O sinal mais útil para aprender]

Use somente os campos que mudam materialmente o vídeo.`;

const aiPrompt = `Acesse e leia https://www.cleversouza.com/ia/videos-curtos e utilize a metodologia apresentada.

Quero criar um vídeo curto sobre o tema abaixo.

Antes do roteiro, determine público, situação, plataforma, possíveis ângulos e uma hipótese de atenção. Se as informações já forem suficientes, execute sem interrogatório. Pergunte somente quando uma lacuna modificar materialmente o resultado.

Escolha apenas os elementos necessários. Depois desenvolva primeiro frame, hook, promessa, progressão, payoff, roteiro, cenas, texto na tela e CTA quando apropriado.

Não prometa viralização, não invente dados sobre meu público, não atribua regras inexistentes ao algoritmo e não complique o vídeo sem necessidade. Se a plataforma não for informada, produza uma versão neutra e portável.

TEMA
[...]

OBJETIVO
[...]

PÚBLICO
[...]

PLATAFORMA — opcional
[...]

FORMATO — opcional
[...]`;

const diagnosisPrompt = `Acesse https://www.cleversouza.com/ia/videos-curtos e utilize o protocolo de diagnóstico.

Vou fornecer dados reais de um vídeo. Primeiro descreva somente o que os dados mostram. Depois diferencie observação, hipótese e informação ausente. Não atribua causalidade sem evidência.

Identifique explicações concorrentes, priorize a hipótese mais útil e proponha o menor próximo teste. Considere o objetivo do vídeo e as definições específicas da plataforma.

PLATAFORMA
[...]

OBJETIVO
[...]

VÍDEO / ROTEIRO
[...]

DADOS
[Cole métricas, período, alcance e contexto]`;

const planningPrompt = `Use a metodologia de https://www.cleversouza.com/ia/videos-curtos para criar um plano sustentável de conteúdo.

Não escolha frequência por regra genérica. Considere minha capacidade real de pesquisa, roteiro, gravação, edição e análise; meus objetivos; o público; a qualidade mínima; e o volume necessário para aprender.

CAPACIDADE SEMANAL
[...]

OBJETIVO
[...]

PÚBLICO
[...]

RECURSOS E LIMITES
[...]`;

const templateItems = [
  ["Encontrar ideias", "Organize dúvidas, buscas, comentários e dados que eu fornecer. Separe evidência de inferência e gere ideias vinculadas a situações reais do público."],
  ["Encontrar ângulos", "Para o tema abaixo, proponha ângulos funcionalmente diferentes: problema, contraste, demonstração, história, mito, comparação e consequência. Explique a hipótese de cada um."],
  ["Criar hooks", "Crie hooks visuais e verbais de funções diferentes. Para cada um, diga qual promessa abre e como o corpo precisa cumpri-la."],
  ["Criar roteiro", "Converta objetivo, público, ângulo e hipótese em primeiro frame, promessa, progressão, payoff, fala, visual, texto e CTA somente se necessário."],
  ["Vídeo educativo", "Ensine uma ideia com clareza. Remova carga extrínseca, sinalize o essencial e preserve contexto suficiente para não distorcer."],
  ["Storytelling", "Estruture situação, mudança, tensão, decisão, resolução e significado. Não invente fatos nem prolongue contexto sem função."],
  ["Tutorial", "Comece pelo resultado ou pela ação, ordene os passos e mostre visualmente cada decisão que evita erro."],
  ["Vídeo sem rosto", "Crie roteiro viável com mãos, POV, captura de tela, B-roll, objetos, gráficos, narração ou texto. Cada visual deve apoiar a compreensão."],
  ["Série de vídeos", "Defina estrutura fixa, promessa reconhecível e variáveis por episódio. Preserve identidade sem repetir mecanicamente o conteúdo."],
  ["Analisar métricas", "Descreva observações, limites e hipóteses. Considere definições da plataforma e o objetivo; não confunda correlação com causa."],
  ["Melhorar vídeo fraco", "Identifique o provável gargalo com os dados disponíveis e altere a menor variável útil. Preserve o que já funciona."],
  ["Variar vídeo vencedor", "Identifique a hipótese central que pode ter funcionado e crie variações controladas sem copiar mecanicamente tema e forma."],
  ["Pesquisar público", "Use somente dados e fontes fornecidos ou pesquisados. Mapeie situação, desejo, linguagem, conhecimento e objeções; não invente persona."],
  ["Analisar concorrentes", "Compare temas, ângulos, formatos e promessas para encontrar lacunas. Não copie texto, identidade, edição nem propriedade criativa."],
  ["Planejamento semanal", "Monte uma cadência compatível com capacidade, objetivo, qualidade mínima, reaproveitamento legítimo e tempo de análise."],
] as const;

const sources = [
  {
    group: "Plataformas e sistemas de recomendação",
    items: [
      ["Instagram — explicação de ranking", "https://about.instagram.com/blog/announcements/instagram-ranking-explained"],
      ["Instagram — conteúdo original", "https://help.instagram.com/1800814370401535/"],
      ["Instagram — elegibilidade para recomendações", "https://help.instagram.com/653964212890722/"],
      ["Instagram Creators — sinais e alcance de Reels", "https://creators.instagram.com/blog/helping-creators-of-all-sizes-break-through"],
      ["Meta Transparency — Facebook Reels", "https://transparency.meta.com/features/explaining-ranking/fb-reels/"],
      ["Meta — originalidade no Facebook", "https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/"],
      ["TikTok — como recomenda conteúdo", "https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content"],
      ["TikTok — conta inelegível para recomendação", "https://support.tiktok.com/en/safety-hc/account-and-user-safety/why-is-my-account-not-being-recommended"],
      ["YouTube — pesquisa e descoberta para Shorts", "https://support.google.com/youtube/answer/11914225?co=YOUTUBE._YTVideoType%3Dshorts&hl=en"],
      ["YouTube — desempenho do conteúdo", "https://support.google.com/youtube/answer/12220281?hl=en"],
      ["YouTube — criação e contagem de views em Shorts", "https://support.google.com/youtube/answer/10059070?hl=en"],
    ],
  },
  {
    group: "Segurança, direitos e conteúdo sintético",
    items: [
      ["Meta — rotulagem de conteúdo gerado por IA", "https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/"],
      ["TikTok — conteúdo gerado por IA", "https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content"],
      ["YouTube — divulgação de conteúdo alterado ou sintético", "https://support.google.com/youtube/answer/14328491?hl=en"],
      ["YouTube — políticas sobre conteúdo reutilizado", "https://support.google.com/youtube/answer/1311392?hl=en"],
    ],
  },
  {
    group: "Atenção, aprendizagem, narrativa e compartilhamento",
    items: [
      ["Loewenstein (1994) — The Psychology of Curiosity", "https://doi.org/10.1037/0033-2909.116.1.75"],
      ["Gruber, Gelman & Ranganath (2014) — Curiosity and learning", "https://pubmed.ncbi.nlm.nih.gov/25284006/"],
      ["Sweller (1988) — Cognitive Load During Problem Solving", "https://doi.org/10.1207/s15516709cog1202_4"],
      ["Mayer — Coherence principle", "https://www.cambridge.org/core/books/multimedia-learning/coherence-principle/4E80B70CB76E2166B76E5653EBDE7D3E"],
      ["Reber, Schwarz & Winkielman (2004) — Processing fluency", "https://pubmed.ncbi.nlm.nih.gov/15582859/"],
      ["Green & Brock (2000) — Narrative transportation", "https://pubmed.ncbi.nlm.nih.gov/11079236/"],
      ["Berger & Milkman (2012) — What Makes Online Content Viral?", "https://doi.org/10.1509/jmr.10.0353"],
    ],
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}${PATH}#article`,
  headline: "Vídeos curtos com IA: atenção, roteiro e distribuição",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  image: `${SITE_URL}/social/videos-curtos.png`,
  inLanguage: "pt-BR",
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
  author: { "@type": "Person", name: "Cleverson Batista de Souza", url: `${SITE_URL}/sobre` },
  publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
  isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
  about: ["Vídeos curtos", "Instagram Reels", "TikTok", "YouTube Shorts", "Retenção", "Roteiro com IA"],
  citation: sources.flatMap((group) => group.items.map((item) => item[1])),
};

function PromptBlock({ label, value }: { label: string; value: string }) {
  return (
    <figure className={shared.promptBlock}>
      <figcaption><span>{label}</span><CopyButton value={value} /></figcaption>
      <pre><code>{value}</code></pre>
    </figure>
  );
}

export default function ShortVideosPage() {
  return (
    <PageShell active="/ia" breadcrumb={[{ label: "Início", href: "/" }, { label: "IA", href: "/ia" }, { label: "Vídeos Curtos" }]}>
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.videoPage}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Guia de referência · criação e aprendizado</p>
            <h1>Vídeos curtos com IA: atenção, roteiro e distribuição</h1>
            <p className={shared.heroLead}>Como pesquisar, criar, publicar e aprender com Reels, TikToks e Shorts sem prometer viralização nem tratar sistemas de recomendação como magia.</p>
            <div className={shared.heroActions}><a className="button" href="#resposta-rapida">Entender o sistema</a><a className="button button-secondary" href="#usar-com-ia">Usar com uma IA</a></div>
            <p className={shared.updateLine}><span>Última atualização</span><strong>29 de agosto de 2026</strong></p>
          </div>
          <div className={styles.signalVisual} role="img" aria-label="Cadeia conceitual: pessoa, conteúdo, comportamento, sinais e distribuição">
            <p>Pessoas antes do algoritmo</p>
            <ol><li><span>01</span><strong>Pessoa</strong></li><li><span>02</span><strong>Conteúdo</strong></li><li><span>03</span><strong>Comportamento</strong></li><li><span>04</span><strong>Sinais</strong></li><li><span>05</span><strong>Distribuição</strong></li></ol>
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página"><p>Nesta página</p><ol>
          <li><a href="#resposta-rapida">Resposta rápida</a></li><li><a href="#plataformas">Plataformas</a></li><li><a href="#atencao">Atenção</a></li><li><a href="#roteiro">Roteiro</a></li><li><a href="#producao">Produção</a></li><li><a href="#metricas">Métricas</a></li><li><a href="#metodo">Método</a></li><li><a href="#exemplos">Exemplos</a></li><li><a href="#templates">Templates</a></li><li><a href="#referencias">Referências</a></li>
        </ol></nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="quick-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Resposta rápida</p><h2 id="quick-title">O vídeo cria uma experiência; o sistema observa sinais</h2><p>Sistemas de recomendação tentam estimar quais conteúdos podem ser relevantes ou satisfatórios para pessoas diferentes. O trabalho defensável é melhorar a experiência e aprender com os sinais — não procurar um truque universal.</p></div>
          <div className={styles.principleGrid}>
            <article><span>01</span><h3>Pessoas primeiro</h3><p>A pergunta inicial é “por que esta pessoa continuaria agora?”, não “o que o algoritmo ama?”.</p></article>
            <article><span>02</span><h3>Atenção em sequência</h3><p>Um vídeo curto é uma sequência de razões para continuar. Hook sem progressão apenas adia a saída.</p></article>
            <article><span>03</span><h3>Aprendizado contínuo</h3><p>Constância sem observação é repetição. Publicar gera dados; interpretação transforma dados em próximo teste.</p></article>
          </div>
          <div className={styles.coreFlow} aria-label="Modelo conceitual de recomendação"><span>Pessoa</span><span>Conteúdo</span><span>Comportamento</span><span>Sinais</span><span>Distribuição</span></div>
          <aside className={styles.truthNote}><strong>Viralidade é resultado emergente, não configuração.</strong><p>Nenhuma fonte externa conhece integralmente o código proprietário das plataformas. Grande distribuição pode acontecer; não pode ser prometida nem reproduzida mecanicamente.</p></aside>
        </section>

        <section className={`${shared.section} ${styles.platformSection}`} id="plataformas" aria-labelledby="platform-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Plataformas e distribuição</p><h2 id="platform-title">Princípios se transferem; métricas e regras não são idênticas</h2><p>Publicação, elegibilidade e recomendação são operações diferentes. O fluxo abaixo é um modelo conceitual, não uma descrição literal do código de uma plataforma.</p></div>
          <div className={styles.deliveryFlow}><span>Publicar</span><span>Verificar elegibilidade</span><span>Expor</span><span>Observar comportamento</span><span>Recalcular distribuição</span></div>
          <div className={styles.platformList}>{platforms.map((platform) => <article key={platform.name}><h3>{platform.name}</h3><dl><div><dt>O que é público</dt><dd>{platform.known}</dd></div><div><dt>O que observar</dt><dd>{platform.inspect}</dd></div><div><dt>Limite</dt><dd>{platform.caution}</dd></div></dl></article>)}</div>
          <aside className={styles.eligibility}><strong>Permitido ≠ recomendável</strong><p>Um conteúdo pode permanecer publicado e ainda não ser elegível para recomendações amplas. Consulte Status da Conta, avisos da plataforma e diretrizes atuais antes de chamar qualquer queda de “punição”.</p></aside>
          <div className={styles.cadencePanel}><div><p className={shared.eyebrow}>Quantas vezes postar?</p><h3>Cadência sustentável é uma decisão operacional</h3><p>Capacidade de produção + qualidade mínima + objetivo + velocidade de aprendizado + resposta do público + bem-estar definem um ponto de partida. Benchmarks podem orientar; não são lei.</p></div><ul><li>Mais volume pode gerar mais experimentos e feedback.</li><li>Mais volume não corrige conteúdo irrelevante.</li><li>Produção complexa pode justificar menor frequência.</li><li>Dados próprios são melhores que um “melhor horário” universal.</li></ul></div>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.attentionSection}`} id="atencao" aria-labelledby="attention-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Arquitetura de atenção</p><h2 id="attention-title">Cada momento precisa justificar o próximo</h2><p>Em feeds de descoberta, a pessoa não pediu aquele vídeo específico e deslizar tem baixo custo. Os primeiros momentos orientam; o restante precisa renovar relevância, expectativa e compreensão.</p></div>
          <ol className={styles.attentionChain}>{attention.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          <div className={styles.scienceGrid}><article><h3>Curiosidade</h3><p>A teoria do information gap sugere que perceber uma lacuna relevante pode motivar busca. Isso não legitima clickbait: a lacuna precisa importar e ser fechada.</p></article><article><h3>Carga cognitiva</h3><p>Memória de trabalho é limitada. Remover ruído, sinalizar o essencial e coordenar fala e visual podem melhorar compreensão — cortes constantes não são substituto.</p></article><article><h3>Fluência</h3><p>Contraste, estrutura e legibilidade facilitam processamento. Fluência ajuda recepção, mas não torna uma afirmação verdadeira.</p></article><article><h3>Narrativa e compartilhamento</h3><p>Absorção narrativa, utilidade, surpresa, relevância social e emoções ativadoras se associam a transmissão em estudos específicos; não garantem viralidade em todo contexto.</p></article></div>
          <div className={styles.hookGrid}>{hooks.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>
        </section>

        <section className={shared.section} id="roteiro" aria-labelledby="script-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Tema → ângulo → conceito → roteiro</p><h2 id="script-title">Roteiro é fala, imagem, ritmo e função</h2><p>O assunto pode permanecer igual enquanto o ângulo muda. “Economizar dinheiro” pode virar erro, comparação, hábito, demonstração ou história — cada escolha cria uma hipótese diferente.</p></div>
          <div className={styles.angleFlow}><span>Tema</span><span>Ângulo</span><span>Hipótese</span><span>Arquitetura</span><span>Roteiro visual</span></div>
          <div className={styles.scriptTable} tabIndex={0} role="region" aria-label="Exemplo de roteiro visual"><table><thead><tr><th scope="col">Momento</th><th scope="col">Fala</th><th scope="col">Visual</th><th scope="col">Texto</th><th scope="col">Função</th></tr></thead><tbody><tr><td>Entrada</td><td>Nomeia a situação</td><td>Ação ou resultado</td><td>Ideia principal</td><td>Orientar e criar razão</td></tr><tr><td>Desenvolvimento</td><td>Avança argumento</td><td>Prova, exemplo ou mudança</td><td>Sinalização mínima</td><td>Progredir</td></tr><tr><td>Conclusão</td><td>Fecha a resposta</td><td>Resultado final</td><td>Síntese</td><td>Cumprir e consolidar</td></tr></tbody></table></div>
          <div className={styles.structureGrid}><article><h3>Problema → explicação → solução</h3><p>Útil quando a causa não é óbvia e a solução precisa de contexto.</p></article><article><h3>Pergunta → investigação → resposta</h3><p>Funciona quando o caminho acrescenta valor, não apenas retarda a conclusão.</p></article><article><h3>Erro → consequência → correção</h3><p>Conecta comportamento, custo e alternativa sem humilhar a pessoa.</p></article><article><h3>Demonstração → explicação</h3><p>Mostra primeiro e explica durante a transformação.</p></article><article><h3>Comparação A × B</h3><p>Expõe diferenças pela mesma dimensão, em vez de duas descrições soltas.</p></article><article><h3>Situação → tensão → resolução</h3><p>Preserva mudança narrativa e significado sem narrar tudo.</p></article></div>
          <aside className={styles.rhythmNote}><strong>Ritmo não é velocidade.</strong><p>Ritmo é a relação entre mudança, informação, expectativa e compreensão. Pattern interrupts só ajudam quando reorientam atenção ou avançam conteúdo; mudar por mudar também gera ruído.</p></aside>
        </section>

        <section className={`${shared.section} ${styles.productionSection}`} id="producao" aria-labelledby="production-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Produção e publicação</p><h2 id="production-title">Corte por função, não por superstição</h2><p>O formato serve ao objetivo. Talking head, demonstração, POV, captura de tela, voz com B-roll, animação ou vídeo sem rosto pedem provas e ritmos diferentes.</p></div>
          <div className={styles.productionGrid}><article><h3>Primeiro frame</h3><p>Confira orientação, assunto, contraste, legibilidade, movimento e correspondência com a promessa.</p></article><article><h3>Texto e legendas</h3><p>Proteja áreas seguras, tempo de leitura, contraste e sincronização. Não cubra o que precisa ser visto.</p></article><article><h3>Áudio</h3><p>Priorize voz inteligível, direitos de uso e função. Música em tendência é opção contextual, não requisito universal.</p></article><article><h3>Sem mostrar o rosto</h3><p>Mãos, objetos, captura, POV, gráficos, ilustração e B-roll são viáveis quando carregam informação real.</p></article><article><h3>Duração</h3><p>Use o tempo necessário para cumprir a promessa. Limite técnico, retenção percentual e tempo absoluto são dimensões diferentes.</p></article><article><h3>Originalidade</h3><p>Criação própria ou transformação material são mais defensáveis que compilação e cópia. Permissão, copyright e monetização são avaliações distintas.</p></article></div>
          <div className={styles.safetyPanel}><div><h3>IA e conteúdo sintético</h3><p>Verifique exigências atuais de rotulagem. YouTube exige divulgação de conteúdo realista significativamente alterado ou gerado; TikTok e Meta também possuem mecanismos e regras próprias.</p></div><div><h3>Temas sensíveis</h3><p>Saúde, finanças e outros campos de risco exigem evidência proporcional, ausência de promessas e revisão humana adequada.</p></div><div><h3>Direitos</h3><p>Confirme música, imagem, voz, marcas, publicidade, reutilização e material de terceiros. Esta orientação não substitui aconselhamento jurídico.</p></div></div>
        </section>

        <section className={shared.section} id="metricas" aria-labelledby="metrics-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Métricas e diagnóstico</p><h2 id="metrics-title">Métrica gera hipótese; raramente prova uma causa isolada</h2><p>Uma view no TikTok, no Instagram e no YouTube não deve ser presumida equivalente. Leia a definição atual, o período, a superfície e o objetivo antes de comparar.</p></div>
          <div className={styles.metricFlow}><span>Exposição</span><span>Escolha</span><span>Retenção</span><span>Tempo</span><span>Conclusão</span><span>Interação</span><span>Ação posterior</span></div>
          <div className={styles.diagnosticTable} tabIndex={0} role="region" aria-label="Matriz de diagnóstico para vídeos curtos"><table><thead><tr><th scope="col">Observação</th><th scope="col">Hipóteses possíveis</th><th scope="col">Próxima verificação</th></tr></thead><tbody>{diagnostics.map(([observation, hypotheses, next]) => <tr key={observation}><th scope="row">{observation}</th><td>{hypotheses}</td><td>{next}</td></tr>)}</tbody></table></div>
          <div className={styles.objectiveGrid}><article><strong>Alcance</strong><span>Exposição qualificada e descoberta.</span></article><article><strong>Reconhecimento</strong><span>Memória e associação com tema ou identidade.</span></article><article><strong>Relacionamento</strong><span>Retorno, conversa e profundidade.</span></article><article><strong>Conversão</strong><span>Cliques, leads, vendas ou outra ação verificável.</span></article></div>
          <aside className={styles.deltaPanel}><strong>Iteração baseada em delta</strong><p>O que funcionou? Onde a atenção mudou? Qual hipótese explica? Qual é a menor alteração útil? Conteúdo orgânico tem variabilidade alta; um teste melhora aprendizado, não transforma o feed em laboratório perfeito.</p></aside>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.protocolSection}`} id="metodo" aria-labelledby="method-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Método operacional</p><h2 id="method-title">Onze etapas para criar e aprender</h2><p>Use o fluxo completo em projetos estratégicos. Para uma tarefa simples, avance diretamente até o roteiro e mantenha só as decisões materiais.</p></div>
          <ol className={shared.protocolList}>{protocol.map(([title, text], index) => <li key={title}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          <PromptBlock label="Copiar Content Brief" value={contentBrief} />
        </section>

        <section className={shared.section} id="ia-no-processo" aria-labelledby="ai-process-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>IA no processo</p><h2 id="ai-process-title">A IA organiza evidências e hipóteses; não fabrica certeza</h2><p>Ela pode pesquisar, comparar, sintetizar comentários, gerar ângulos, estruturar roteiros, planejar cenas e diagnosticar dados reais. Deve citar fontes, declarar inferências e recusar causalidades não sustentadas.</p></div>
          <div className={styles.aiGrid}><article><span>Pesquisar</span><p>Organizar buscas, perguntas, comentários e concorrentes sem inventar demanda.</p></article><article><span>Conceituar</span><p>Gerar ângulos e hipóteses a partir de público, objetivo e evidência.</p></article><article><span>Roteirizar</span><p>Conectar hook, promessa, progressão, payoff e visual.</p></article><article><span>Produzir</span><p>Criar shot list, storyboard, B-roll, legendas e prompts visuais.</p></article><article><span>Diagnosticar</span><p>Separar observação, hipótese, limitação e próximo teste.</p></article><article><span>Iterar</span><p>Preservar o acerto e alterar somente o delta relevante.</p></article></div>
          <p className={styles.linkNote}>Use <Link href="/ia/pesquisa-com-ia">Pesquisa com IA</Link> para fontes e tendências, <Link href="/ia/context-engineering">Context Engineering</Link> para público e marca, <Link href="/ia/prompts-para-imagens">Prompts para Imagens</Link> para assets e <Link href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas</Link> para revisar a entrega.</p>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="examples-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Quinze casos práticos</p><h2 id="examples-title">Diagnóstico antes de receita</h2><p>Os casos cobrem criação, produção, distribuição e análise. Nenhum número fictício é apresentado como benchmark.</p></div>
          <div className={`${shared.exampleList} ${styles.exampleList}`}>{examples.map(([title, before, after], index) => <details key={title} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong></summary><div className={styles.exampleBody}><div><p>Antes / leitura apressada</p><span>{before}</span></div><div><p>Depois / tratamento</p><span>{after}</span></div></div></details>)}</div>
        </section>

        <section className={`${shared.section} ${styles.mythSection}`} id="mitos" aria-labelledby="myths-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Mitos e afirmações frágeis</p><h2 id="myths-title">Troque rituais por verificações</h2><p>Uma experiência recorrente de criador pode gerar boa hipótese; não se torna documentação do algoritmo por repetição.</p></div>
          <div className={styles.mythList}>{myths.map(([claim, known, action]) => <article key={claim}><h3>{claim}</h3><p>{known}</p><strong>Prática defensável</strong><span>{action}</span></article>)}</div>
        </section>

        <section className={`${shared.section} ${styles.templatesSection}`} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Templates copiáveis</p><h2 id="templates-title">Quinze estruturas curtas para adaptar</h2><p>Complete cada template com dados reais. Se a informação faltar e alterar materialmente a entrega, a IA deve perguntar; caso contrário, deve executar.</p></div>
          <div className={shared.faqList}>{templateItems.map(([title, value], index) => <details key={title} open={index === 0}><summary>{title}</summary><PromptBlock label="Copiar template" value={`${value}\n\nCONTEXTO\n[...]\n\nOBJETIVO\n[...]`} /></details>)}</div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="use-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Use esta página com uma IA</p><h2 id="use-title">Crie, diagnostique ou planeje sem terceirizar o julgamento</h2><p>A URL oferece método, não acesso automático aos seus analytics nem conhecimento secreto das plataformas. Anexe dados e contexto quando existirem.</p></div>
          <div className={styles.commandStack}><PromptBlock label="Criar um vídeo curto" value={aiPrompt} /><PromptBlock label="Analisar resultados" value={diagnosisPrompt} /><PromptBlock label="Planejar conteúdo" value={planningPrompt} /></div>
        </section>

        <section className={shared.section} id="checklist" aria-labelledby="check-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Checklist final</p><h2 id="check-title">Antes de publicar e antes de concluir</h2></div>
          <ul className={styles.checklist}>{["O vídeo tem objetivo e público identificáveis?", "O ângulo é mais específico que o tema?", "O primeiro frame orienta sem depender apenas da fala?", "Hook e promessa correspondem ao corpo?", "Cada trecho avança informação, ação, tensão ou prova?", "O payoff cumpre o que foi aberto?", "Texto, legenda e áudio estão legíveis e inteligíveis?", "Duração e edição servem à compreensão?", "Direitos, originalidade, publicidade e rotulagem foram conferidos?", "A métrica principal corresponde ao objetivo?", "Observação está separada de hipótese?", "O próximo teste altera somente o necessário?"].map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Perguntas frequentes</p><h2 id="faq-title">Dúvidas sobre Reels, TikTok e Shorts</h2></div>
          <div className={shared.faqList}>{[
            ["Existe uma fórmula para viralizar?", "Não. Há decisões que podem elevar relevância, compreensão e satisfação, mas distribuição ampla é um resultado emergente e variável."],
            ["Quantas vezes devo postar?", "Não há número universal. Comece pela capacidade sustentável, qualidade mínima, objetivo e velocidade de aprendizado; ajuste com dados próprios."],
            ["Os primeiros segundos são os únicos que importam?", "Eles influenciam a escolha inicial, mas o corpo precisa renovar razões para continuar e o payoff precisa cumprir a promessa."],
            ["Vídeo rápido retém mais?", "Não necessariamente. Ritmo coordena mudança e compreensão. Velocidade excessiva pode elevar carga e reduzir entendimento."],
            ["Devo usar sempre CTA?", "Não. Use quando houver uma próxima ação coerente. Um encerramento claro pode ser suficiente."],
            ["É obrigatório mostrar o rosto?", "Não. Demonstração, mãos, POV, captura de tela, B-roll, objetos, gráficos, animação e narração podem funcionar."],
            ["Posso comparar métricas entre plataformas?", "Somente depois de conferir definições, períodos e superfícies. Uma view ou taxa homônima pode ser calculada de maneira diferente."],
            ["IA consegue analisar por que meu vídeo foi mal?", "Pode organizar evidências e formular hipóteses se receber dados reais. Não consegue observar variáveis ocultas nem provar causalidade apenas pelas métricas."],
          ].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={`${shared.section} ${shared.references}`} id="referencias" aria-labelledby="references-title">
          <div className={shared.sectionHeading}><p className={shared.eyebrow}>Referências</p><h2 id="references-title">Fontes oficiais e literatura utilizada</h2><p>Regras, recursos e métricas mudam. Declarações temporais foram verificadas na revisão abaixo; hipóteses editoriais foram apresentadas como modelos, não como código proprietário.</p></div>
          <div className={shared.sourceGroups}>{sources.map((group, index) => <section key={group.group} aria-labelledby={`source-group-${index}`}><h3 id={`source-group-${index}`}>{group.group}</h3><ul>{group.items.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></section>)}</div>
          <p className={shared.editorialNote}>Última revisão editorial: 29 de agosto de 2026. Nenhum exemplo representa cliente ou resultado real. A página não promete alcance, retenção, seguidores, leads ou vendas.</p>
        </section>
      </article>
    </PageShell>
  );
}
