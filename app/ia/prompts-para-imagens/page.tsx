import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./images.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/prompts-para-imagens";
const TITLE = "Prompts para imagens: como criar e editar com IA";
const DESCRIPTION =
  "Aprenda a criar prompts claros para gerar e editar imagens com IA: composição, luz, estilo, referências, preservação e refinamento.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "prompts para imagens",
  "prompt para gerar imagem",
  "como criar prompt para imagem",
  "prompt para editar imagem",
  "gerar imagens com IA",
]);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    publishedTime: "2026-08-28T00:00:00.000Z",
    modifiedTime: "2026-08-29T00:00:00.000Z",
    authors: [`${SITE_URL}/sobre`],
  },
};

const anatomy = [
  ["Objetivo", "O que a imagem precisa comunicar, permitir ou provocar no uso final."],
  ["Assunto", "O elemento principal e os atributos que mudariam seu significado se estivessem errados."],
  ["Ação e cena", "O que acontece, onde acontece e quais elementos realmente participam."],
  ["Composição", "Posições, relações espaciais, hierarquia, profundidade e espaço negativo."],
  ["Enquadramento", "Plano, ponto de vista e recorte: close-up, plano aberto, overhead ou outra escolha útil."],
  ["Luz", "Direção, dureza, contraste e efeito desejado — não apenas o nome de uma técnica."],
  ["Cor", "Paleta, temperatura, contraste e saturação quando forem relevantes para o objetivo."],
  ["Materialidade", "Superfícies, textura e comportamento de vidro, metal, tecido, papel, madeira ou outros materiais."],
  ["Linguagem visual", "Fotografia, ilustração, 3D, gravura, desenho técnico ou propriedades estéticas equivalentes."],
  ["Texto", "Conteúdo exato, posição, hierarquia e tratamento tipográfico — sempre sujeito a conferência."],
  ["Formato", "Proporção, orientação, área segura, crop e destino da peça."],
  ["Restrições", "Ausências e limites concretos que evitam um resultado materialmente errado."],
] as const;

const priorities = [
  ["Obrigatório", "Precisa aparecer, permanecer ou ser cumprido. Se falhar, a imagem não serve."],
  ["Importante", "Deve orientar fortemente o resultado, mas admite pequena variação."],
  ["Preferencial", "Melhora a direção, sem justificar sacrificar um requisito crítico."],
  ["Proibido", "Não deve aparecer ou não pode ser alterado."],
] as const;

const protocol = [
  ["Definir", "Identifique criação ou edição, objetivo, uso final e gerador quando ele for conhecido."],
  ["Priorizar", "Separe obrigatório, importante, preferencial e proibido. Não trate todos os detalhes como equivalentes."],
  ["Descrever", "Defina assunto, atributos essenciais, ação e ambiente com linguagem concreta."],
  ["Compor", "Organize posições, relações espaciais, enquadramento, perspectiva, hierarquia e espaço negativo."],
  ["Dirigir", "Escolha apenas as decisões visuais úteis: meio, luz, cor, materialidade e nível de realismo."],
  ["Restringir", "Declare ausências críticas, invariantes de edição, texto exato e formato de saída."],
  ["Executar", "Gere ou edite na ferramenta disponível; adapte somente os controles realmente compatíveis."],
  ["Avaliar", "Compare o resultado com objetivo, requisitos, referências, texto, anatomia, perspectiva e uso final."],
  ["Refinar", "Preserve o que já funciona e peça a menor mudança necessária. Recomece apenas quando a direção estiver errada."],
] as const;

const visualBrief = `OBJETIVO
[O que a imagem precisa comunicar e onde será usada]

MODO
[Criação do zero ou edição]

ASSUNTO E CENA
[Elemento principal, atributos essenciais, ação e ambiente]

COMPOSIÇÃO
[Posições, relações, enquadramento, perspectiva e espaço negativo]

DIREÇÃO VISUAL
[Meio, estilo por propriedades, luz, cor, materialidade e realismo]

TEXTO — se houver
[Texto exato, posição, hierarquia e tratamento]

PRESERVAR / ALTERAR — para edição
[O que não pode mudar / o que deve mudar]

RESTRIÇÕES
[Elementos proibidos ou limites críticos]

FORMATO
[Proporção, orientação, crop e destino]

Preencha apenas os campos que afetam materialmente o resultado.`;

const aiUsePrompt = `Acesse e leia https://www.cleversouza.com/ia/prompts-para-imagens.

Use o método apresentado para transformar minha ideia em um prompt visual claro e eficiente.

1. Identifique se a tarefa é criação ou edição.
2. Preserve meu objetivo e mantenha a complexidade proporcional.
3. Identifique somente ambiguidades capazes de alterar materialmente a imagem.
4. Organize assunto, cena, composição, direção visual, prioridades, restrições e formato quando forem relevantes.
5. Se houver imagem de referência, diga qual função ela cumpre: identidade, produto, pose, composição, cor, cenário ou estilo.
6. Se for edição, separe explicitamente o que deve ser preservado do que deve ser alterado.
7. Se eu informar o gerador, adapte apenas recursos comprovadamente compatíveis.
8. Se nenhum gerador for informado, entregue um prompt neutro e portável, sem sintaxe proprietária.

MINHA IDEIA
[Descreva]

GERADOR DE IMAGEM — opcional
[Informe a ferramenta ou deixe em branco]

REFERÊNCIAS — opcional
[Anexe ou descreva e indique a função]

FORMATO — opcional
[Proporção e uso final]

RESTRIÇÕES — opcional
[O que deve ou não deve acontecer]`;

const improvePrompt = `Acesse https://www.cleversouza.com/ia/prompts-para-imagens e use a metodologia da página para analisar e aprimorar o prompt visual abaixo.

Preserve a intenção. Identifique somente ambiguidades ou lacunas capazes de afetar materialmente a imagem. Remova redundâncias e detalhes sem função. Acrescente apenas o que tiver probabilidade real de melhorar o resultado. Se o prompt já estiver suficiente, diga isso e não o torne mais complexo.

PROMPT ATUAL
[Cole aqui]

GERADOR — opcional
[Informe apenas se quiser uma adaptação específica]`;

const editPrompt = `Acesse https://www.cleversouza.com/ia/prompts-para-imagens e use o protocolo de edição da página.

Analise a imagem anexada. Preserve tudo que não precisa ser alterado e modifique somente os elementos solicitados. Separe claramente:

PRESERVAR
[Identidade, forma, pose, enquadramento, luz, produto, texto ou outros invariantes]

ALTERAR
[Mudança principal e região afetada]

ADICIONAR — se necessário
[Elementos novos]

REMOVER — se necessário
[Elementos indesejados]

RESULTADO
[Como a edição deve parecer]

Se uma instrução ameaçar um elemento que deve permanecer, sinalize antes de executar.`;

const templates = [
  {
    title: "1. Geração universal",
    value: `[Assunto principal e atributos essenciais], [ação] em [ambiente]. [Composição e enquadramento]. [Meio ou linguagem visual], [luz], [cor ou materialidade quando relevantes]. [Restrições críticas]. Formato [proporção e uso].`,
  },
  {
    title: "2. Edição controlada",
    value: `Edite a imagem anexada.

PRESERVE: [identidade, forma, pose, composição, iluminação e outros invariantes].
ALTERE: [elemento ou região específica].
ADICIONE: [se necessário].
REMOVA: [se necessário].
RESULTADO: [aparência final].

Mantenha todo o restante inalterado.`,
  },
  {
    title: "3. Fotografia",
    value: `Fotografia [documental/editorial/publicitária] de [assunto] em [ambiente e ação]. [Enquadramento e ponto de vista]. Luz [efeito e direção], foco [profundo/seletivo] e [texturas ou imperfeições relevantes]. Paleta [se necessária]. Formato [proporção].`,
  },
  {
    title: "4. Produto",
    value: `Fotografia de produto de [produto e forma], preservando [geometria, materiais, embalagem e rótulo]. Sobre [superfície], com [composição], iluminação [efeito], reflexos coerentes e escala natural. [Fundo e espaço para texto]. Não alterar [elementos críticos].`,
  },
  {
    title: "5. Ilustração",
    value: `Ilustração de [assunto e ação] em [ambiente]. [Composição]. Técnica [aquarela/gravura/linhas/3D/etc.], com [textura, linework, acabamento], paleta [cores] e [dimensionalidade]. Evite [restrições concretas].`,
  },
  {
    title: "6. Social media",
    value: `Peça vertical 4:5 para [canal e objetivo]. [Assunto] em [cena], posicionado [relação espacial], com área negativa segura para [headline/identidade]. Direção visual [propriedades], contraste legível e elementos principais protegidos do crop.`,
  },
  {
    title: "7. Pôster com texto",
    value: `Pôster [proporção] sobre [tema]. Headline exata: "[TEXTO]". Posicionar [local], com hierarquia [descrição] e tipografia [propriedades]. [Imagem e composição]. Garantir contraste e área segura. Não adicionar outras palavras. Verificar ortografia e acentos no resultado.`,
  },
  {
    title: "8. Ambiente ou arquitetura",
    value: `[Ambiente] de [época/função], com [layout, escala e ocupação]. Materiais [lista curta], perspectiva [ponto de vista], iluminação [efeito], clima [quando relevante]. Preservar relações espaciais plausíveis e proporções coerentes.`,
  },
  {
    title: "9. Diagrama",
    value: `Crie um diagrama para explicar [processo] ao público [público]. Relações corretas: [sequência ou conexões]. Labels exatos: [textos]. Hierarquia [níveis], fluxo [direção], contraste alto e decoração mínima. Priorize correção informacional e legibilidade. Não invente etapas ou números.`,
  },
  {
    title: "10. Série visual",
    value: `Crie a peça [número/tema] de uma série.

FIXOS: [personagem/produto], [paleta], [luz], [materiais], [enquadramento], [regras de estilo].
VARIÁVEIS NESTA PEÇA: [ação, cenário ou mensagem].

Preserve os elementos fixos e altere somente as variáveis.`,
  },
  {
    title: "11. Melhorar um prompt existente",
    value: `Analise meu prompt visual. Preserve minha intenção. Identifique apenas ambiguidades ou lacunas capazes de afetar materialmente a imagem. Remova detalhes sem função e entregue uma versão melhor, mantendo-a tão simples quanto possível. Se o prompt já for suficiente, não invente melhorias.

PROMPT: [cole aqui]
GERADOR — opcional: [informe]`,
  },
] as const;

const examples = [
  ["Prompt genérico", "Faça uma imagem bonita de uma cafeteria.", "Cafeteria pequena em uma esquina, vista da calçada ao amanhecer; duas mesas externas, interior acolhedor visível pelas janelas, fotografia editorial, luz natural suave e tons terrosos."],
  ["Prompt longo demais", "Masterpiece, award-winning, 16K, ultra detailed, cinematic, breathtaking, best quality, cafeteria incrível...", "Cafeteria contemporânea em plano aberto, balcão de madeira clara ao fundo, uma pessoa lendo à esquerda, luz matinal lateral e paleta quente. Fotografia editorial."],
  ["Fotografia", "Retrato profissional.", "Retrato editorial em plano médio de uma ceramista no ateliê, olhar para a câmera, luz difusa de janela à esquerda, fundo de trabalho suavemente desfocado, textura natural de pele e avental."],
  ["Produto", "Perfume bonito numa mesa.", "Frasco de perfume cilíndrico preservando geometria, vidro e rótulo; centralizado sobre pedra clara, fundo marfim, luz lateral suave revelando a transparência, reflexo discreto e espaço negativo acima."],
  ["Social media 4:5", "Post sobre foco.", "Peça vertical 4:5: mesa clara com caderno aberto no terço inferior direito; fundo limpo em azul profundo e ampla área negativa no alto à esquerda para headline. Estética editorial, contraste alto."],
  ["Imagem 9:16", "Pessoa numa cidade.", "Cena vertical 9:16 de uma ciclista parada no primeiro plano, à esquerda; avenida arborizada conduzindo o olhar ao fundo; luz de fim de tarde e espaço livre no terço superior para interface."],
  ["Pessoa", "Mulher feliz trabalhando.", "Mulher adulta revisando desenhos em uma bancada, sorriso discreto e olhar para o trabalho; plano médio, mãos visíveis interagindo com papel, estúdio realista e luz natural."],
  ["Ambiente", "Sala minimalista.", "Sala compacta vista da entrada, sofá baixo à direita, estante estreita à esquerda e passagem livre ao centro; madeira clara, linho e cerâmica, luz nublada difusa, escala residencial plausível."],
  ["Texto na imagem", "Cartaz motivacional.", "Pôster 4:5 com a headline exata “MENOS RUÍDO. MAIS CLAREZA.” em duas linhas, centralizada no terço superior, sans-serif geométrica de alto contraste; forma abstrata discreta abaixo; nenhum outro texto."],
  ["Trocar somente o fundo", "Coloque a pessoa em um escritório.", "Preserve identidade, rosto, cabelo, roupa, pose, mãos, enquadramento e iluminação da pessoa. Substitua somente o fundo por um escritório claro e discreto, ajustando sombras de contato sem alterar o sujeito."],
  ["Remover objeto", "Tire a caneca.", "Remova somente a caneca no canto inferior direito e reconstrua a superfície da mesa de forma coerente. Preserve todos os demais objetos, enquadramento, luz, sombras e cores."],
  ["Série consistente", "Faça três imagens parecidas.", "Fixos: personagem, casaco azul, ilustração editorial de linhas orgânicas, paleta dessaturada e luz suave. Variável: 1) estação, 2) biblioteca, 3) parque. Mantenha enquadramento em plano médio."],
  ["Diagrama", "Faça um diagrama bonito de aprovação.", "Fluxograma vertical: Briefing → Revisão → Aprovação → Publicação. Um caminho alternativo de Revisão retorna ao Briefing. Labels exatos, setas inequívocas, alto contraste e nenhuma etapa adicional."],
  ["Referência visual", "Use esta imagem como referência.", "Use a imagem 1 apenas para a composição e a direção da luz. Preserve o produto da imagem 2, incluindo forma, rótulo e cores. Não copie objetos ou identidade visual da imagem 1."],
  ["Restrições úteis", "Cidade futurista sem clichês.", "Cidade costeira contemporânea com transporte público elevado, vegetação integrada e fachadas de cerâmica; luz diurna natural. Sem neon, hologramas, carros voadores ou estética cyberpunk."],
  ["Prompt já suficiente", "Gato preto sentado no parapeito durante uma manhã chuvosa.", "O prompt já define assunto, posição, ambiente e momento. Só acrescente enquadramento, estilo ou formato se essas decisões importarem para o uso."],
] as const;

const sources = [
  {
    group: "Documentação oficial",
    items: [
      ["OpenAI — Image generation", "https://developers.openai.com/api/docs/guides/image-generation"],
      ["OpenAI — Image generation models prompting guide", "https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide"],
      ["OpenAI — GPT Image prompting guide", "https://developers.openai.com/cookbook/examples/multimodal/image-gen-1.5-prompting_guide"],
      ["Google — Gemini image generation and editing", "https://ai.google.dev/gemini-api/docs/image-generation"],
      ["Adobe Firefly — Writing effective text prompts", "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/writing-effective-text-prompts.html"],
      ["Adobe Firefly — Composition reference", "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/match-image-composition-to-reference-image.html"],
      ["Midjourney — Prompt basics", "https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics"],
      ["Midjourney — Parameter list", "https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List"],
      ["Black Forest Labs — FLUX.2 prompting guide", "https://docs.bfl.ai/guides/prompting_guide_flux2"],
      ["Black Forest Labs — Image editing", "https://docs.bfl.ai/flux_2/flux2_image_editing"],
      ["Stability AI — API reference", "https://platform.stability.ai/docs/api-reference"],
      ["Ideogram — Prompting guide", "https://docs.ideogram.ai/using-ideogram/getting-started/prompting-guide/2-prompting-fundamentals"],
      ["Leonardo.Ai — Omni models and inline editor", "https://intercom.help/leonardo-ai/en/articles/11483692-using-omni-models-and-the-inline-editor"],
    ],
  },
  {
    group: "Estudos originais",
    items: [
      ["Improving Image Generation with Better Captions", "https://cdn.openai.com/papers/dall-e-3.pdf"],
      ["InstructPix2Pix: Learning to Follow Image Editing Instructions", "https://arxiv.org/abs/2211.09800"],
      ["MagicBrush: Instruction-Guided Image Editing", "https://arxiv.org/abs/2306.10012"],
      ["GenEval: Evaluating Text-to-Image Alignment", "https://arxiv.org/abs/2310.11513"],
      ["T2I-CompBench: Compositional Text-to-Image Generation", "https://arxiv.org/abs/2307.06350"],
    ],
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}${PATH}#article`,
  headline: "Prompts para imagens: como criar e editar imagens com IA",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  image: `${SITE_URL}/social/prompts-para-imagens.png`,
  inLanguage: "pt-BR",
  datePublished: "2026-08-28",
  dateModified: "2026-08-29",
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
    "Prompts para geração de imagens",
    "Edição de imagens com inteligência artificial",
    "Direção artística",
    "Composição visual",
    "Text-to-image",
    "Image editing",
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

export default function ImagePromptsPage() {
  return (
    <PageShell
      active="/ia"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Prompts para Imagens" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.imagesPage}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Guia de referência · direção visual</p>
            <h1>Prompts para imagens: como criar e editar imagens com IA</h1>
            <p className={shared.heroLead}>
              Princípios portáteis para transformar uma intenção visual em instruções
              claras — sem palavras mágicas, sintaxe obrigatória ou complexidade gratuita.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#resposta-rapida">Aprender o método</a>
              <a className="button button-secondary" href="#usar-com-ia">Usar com uma IA</a>
            </div>
            <p className={shared.updateLine}>
              <span>Última atualização</span>
              <strong>29 de agosto de 2026</strong>
            </p>
          </div>

          <div className={styles.heroBrief} role="img" aria-label="Estrutura resumida de um briefing visual: objetivo, composição, direção e restrições">
            <p>Da intenção à direção visual</p>
            <div className={styles.frame}>
              <span className={styles.frameSubject}>Assunto</span>
              <span className={styles.frameSpace}>Espaço negativo</span>
              <span className={styles.frameLight}>Luz</span>
            </div>
            <ol>
              <li><span>01</span><strong>Objetivo</strong></li>
              <li><span>02</span><strong>Composição</strong></li>
              <li><span>03</span><strong>Direção</strong></li>
              <li><span>04</span><strong>Restrições</strong></li>
            </ol>
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            <li><a href="#resposta-rapida">Resposta rápida</a></li>
            <li><a href="#anatomia">Anatomia</a></li>
            <li><a href="#criacao-edicao">Criação × edição</a></li>
            <li><a href="#linguagem-visual">Linguagem visual</a></li>
            <li><a href="#edicao">Edição</a></li>
            <li><a href="#ferramentas">Ferramentas</a></li>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#exemplos">Exemplos</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#referencias">Referências</a></li>
          </ol>
        </nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="quick-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Resposta rápida</p>
            <h2 id="quick-title">Um bom prompt reduz as ambiguidades que realmente mudam a imagem</h2>
            <p>Comprimento, adjetivos e termos técnicos não são objetivos. Controle vem de decisões visuais relevantes, prioridades claras e avaliação do resultado.</p>
          </div>
          <div className={styles.principleGrid}>
            <article><span>01</span><h3>Concreto antes de elogioso</h3><p>“Luz lateral suave” orienta a imagem. “Incrível”, “masterpiece” e “best quality” não definem uma decisão visual transferível.</p></article>
            <article><span>02</span><h3>Composição antes de lista</h3><p>“Pessoa à esquerda, produto à direita” define relações. Apenas listar pessoa, produto e cidade deixa a cena ambígua.</p></article>
            <article><span>03</span><h3>Proporcional à tarefa</h3><p>Uma maçã em fotografia de produto pode precisar de uma frase. Uma campanha com texto, referência e identidade pode exigir briefing.</p></article>
          </div>
          <div className={styles.beforeAfter}>
            <div><p>Ruído</p><blockquote>“Masterpiece, ultra detailed, cinematic, breathtaking, 16K, award-winning...”</blockquote></div>
            <div><p>Direção</p><blockquote>“Uma maçã vermelha sobre mesa branca, fotografia de produto, iluminação lateral suave.”</blockquote></div>
          </div>
          <p className={styles.portabilityNote}>Não há evidência atual para tratar elogios genéricos como regra universal. Eles podem produzir associações em certos modelos, mas não substituem assunto, composição, luz, material ou restrição.</p>
        </section>

        <section className={`${shared.section} ${styles.anatomySection}`} id="anatomia" aria-labelledby="anatomy-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Anatomia da instrução visual</p>
            <h2 id="anatomy-title">Inclua somente as camadas que ajudam a decidir a imagem</h2>
            <p>Não existe formulário obrigatório. Use esta anatomia como diagnóstico: se uma dimensão não afeta o resultado, ela pode ficar de fora.</p>
          </div>
          <div className={styles.anatomyGrid}>
            {anatomy.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className={styles.priorityPanel}>
            <div className={styles.priorityIntro}><p className={shared.eyebrow}>Prioridade ≠ descrição</p><h3>Nem todo detalhe tem o mesmo custo de falha</h3><p>Um prompt pode conter vinte informações e ainda esconder o que é decisivo. Classifique apenas quando houver disputa entre requisitos.</p></div>
            <div className={styles.priorityGrid}>
              {priorities.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.modeSection}`} id="criacao-edicao" aria-labelledby="mode-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Dois problemas diferentes</p>
            <h2 id="mode-title">Gerar uma cena e editar uma imagem não pedem a mesma instrução</h2>
            <p>Na criação, o modelo precisa construir o quadro. Na edição, precisa localizar o delta e proteger todo o restante.</p>
          </div>
          <div className={styles.modeCompare}>
            <article><span>Criação</span><h3>Construir a imagem</h3><ul><li>Definir assunto e cena</li><li>Organizar composição</li><li>Escolher linguagem visual</li><li>Determinar formato</li></ul></article>
            <article><span>Edição</span><h3>Controlar a mudança</h3><ul><li>Identificar o que permanece</li><li>Localizar o que muda</li><li>Definir quanto muda</li><li>Evitar deriva no restante</li></ul></article>
          </div>
          <div className={styles.simpleStructured}>
            <div><strong>Prompt simples</strong><p>Use quando poucas decisões já definem o objetivo. Lacunas deixam espaço para o modelo variar.</p></div>
            <div><strong>Prompt estruturado</strong><p>Use com identidade, texto, composição específica, referências, muitas restrições ou edição profissional.</p></div>
          </div>
        </section>

        <section className={shared.section} id="composicao" aria-labelledby="composition-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Composição e relações</p>
            <h2 id="composition-title">Listar elementos não diz como eles ocupam o quadro</h2>
            <p>Descreva relações espaciais quando elas forem materiais. Isso reduz trocas de posição, hierarquia confusa e crops inúteis.</p>
          </div>
          <div className={styles.compositionDemo}>
            <div><p>Lista ambígua</p><strong>Homem, produto, cidade</strong></div>
            <div className={styles.compositionFrame} role="img" aria-label="Homem à esquerda, produto à direita e cidade ao fundo"><span>Homem</span><span>Produto</span><span>Cidade ao fundo</span></div>
            <div><p>Relação clara</p><strong>Homem à esquerda, produto à direita, cidade desfocada ao fundo.</strong></div>
          </div>
          <div className={styles.compositionRules}>
            <article><h3>Hierarquia</h3><p>Declare o elemento principal e proteja sua leitura.</p></article>
            <article><h3>Profundidade</h3><p>Diferencie primeiro plano, plano intermediário e fundo.</p></article>
            <article><h3>Espaço negativo</h3><p>Reserve área para texto, interface, crop ou respiração visual.</p></article>
            <article><h3>Quantidade</h3><p>Use números exatos quando importarem, sem prometer aderência perfeita.</p></article>
          </div>
        </section>

        <section className={`${shared.section} ${styles.visualLanguageSection}`} id="linguagem-visual" aria-labelledby="visual-language-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Linguagem visual</p>
            <h2 id="visual-language-title">Descreva o efeito que você quer ver</h2>
            <p>Direção artística funciona melhor quando traduz estilo em propriedades observáveis — meio, textura, luz, paleta, acabamento e composição.</p>
          </div>
          <div className={styles.languageGrid}>
            <article><span>Fotografia</span><h3>Técnica com função</h3><p>Plano, ponto de vista, foco e luz ajudam quando alteram a imagem. “85 mm” pode sugerir retrato comprimido; não o use apenas para soar profissional.</p></article>
            <article><span>Ilustração</span><h3>Meio e acabamento</h3><p>Defina técnica, linework, textura, pincel, papel, dimensionalidade e grau de acabamento.</p></article>
            <article><span>Estilo</span><h3>Propriedades, não dependência</h3><p>Em vez de depender do nome de um artista, descreva período, movimento, paleta, traço, luz, material e composição.</p></article>
            <article><span>Luz e cor</span><h3>Efeito visual</h3><p>“Luz difusa de janela, baixo contraste” é mais acionável que uma coleção de termos luminosos incompatíveis.</p></article>
          </div>
          <div className={styles.styleTranslation}>
            <div><p>Dependência vaga</p><blockquote>“No estilo de X.”</blockquote></div>
            <div><p>Descrição visual</p><blockquote>“Ilustração editorial de linhas orgânicas, paleta dessaturada, sombras suaves e textura de papel.”</blockquote></div>
          </div>

          <div className={styles.useCases}>
            <article><h3>Produtos</h3><p>Forma, escala, materiais, embalagem, rótulo, superfície, luz e reflexos. Se a fidelidade for crítica, use referência visual e declare o que não pode mudar.</p></article>
            <article><h3>Pessoas</h3><p>Pose, expressão, olhar, roupa, mãos, interação e ambiente somente quando pertinentes. Verifique anatomia, objetos fundidos e relações físicas.</p></article>
            <article><h3>Ambientes</h3><p>Escala, época, layout, materiais, iluminação, clima, perspectiva e ocupação. Beleza não corrige espaço impossível.</p></article>
            <article><h3>Design gráfico</h3><p>Objetivo, hierarquia, legibilidade, área segura, crop e espaço para texto. Imagem bonita não é automaticamente design funcional.</p></article>
            <article><h3>Texto na imagem</h3><p>Forneça texto exato entre aspas, posição, hierarquia e tipografia. Confira ortografia, acentos, repetição e alinhamento.</p></article>
            <article><h3>Diagramas</h3><p>Correção informacional supera decoração. Preserve sequência, relações, labels e números; valide o conteúdo depois de gerar.</p></article>
          </div>
          <aside className={styles.textAdvice}><strong>Quando separar imagem e texto?</strong><p>Se a ferramenta não mantiver tipografia, ortografia ou layout com confiabilidade suficiente, gere o visual e aplique o texto depois em uma ferramenta de design. É uma decisão de produção, não uma regra universal.</p></aside>
        </section>

        <section className={shared.section} id="edicao" aria-labelledby="edit-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Edição de imagens</p>
            <h2 id="edit-title">Dizer o que preservar é tão importante quanto dizer o que alterar</h2>
            <p>A instrução de edição precisa separar alteração local, transformação global e invariantes. Caso contrário, uma troca de fundo pode reconstruir o sujeito inteiro.</p>
          </div>
          <div className={styles.editMatrixBlock}>
            <h3>Matriz de preservação</h3>
            <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Exemplo de matriz de preservação" aria-describedby="preservation-note">
              <table>
                <thead><tr><th scope="col">Elemento</th><th scope="col">Ação</th><th scope="col">Escopo</th></tr></thead>
                <tbody>
                  <tr><td>Pessoa principal</td><td>Preservar</td><td>Identidade, rosto, corpo e cabelo</td></tr>
                  <tr><td>Pose e enquadramento</td><td>Preservar</td><td>Sem reposicionar ou recortar</td></tr>
                  <tr><td>Fundo</td><td>Substituir</td><td>Somente atrás do sujeito</td></tr>
                  <tr><td>Iluminação</td><td>Ajustar</td><td>Integração mínima com o novo fundo</td></tr>
                  <tr><td>Objeto à direita</td><td>Remover</td><td>Reconstruir apenas a região ocupada</td></tr>
                </tbody>
              </table>
            </div>
            <p id="preservation-note">A matriz é útil quando a edição envolve vários elementos. Para “remova a caneca”, uma frase precisa pode bastar.</p>
          </div>
          <div className={styles.editProtocol}>
            <div><span>Preservar</span><p>Identidade, geometria, pose, composição, texto ou material que não pode derivar.</p></div>
            <div><span>Alterar</span><p>Elemento, região e intensidade da mudança.</p></div>
            <div><span>Adicionar / remover</span><p>Novos elementos e conteúdo que deve desaparecer.</p></div>
            <div><span>Resultado</span><p>Como a mudança deve se integrar visualmente ao original.</p></div>
          </div>
          <div className={styles.localGlobal}>
            <article><h3>Alteração local</h3><p>Trocar um objeto, remover uma marca ou corrigir uma região. Nomeie o alvo e proteja o entorno.</p></article>
            <article><h3>Alteração global</h3><p>Mudar clima, horário, paleta ou linguagem da imagem. Declare quais identidades, geometrias e relações permanecem.</p></article>
            <article><h3>Referência visual</h3><p>Explique se a referência fornece identidade, pose, produto, composição, cor, cenário ou estilo. Referência não significa cópia literal.</p></article>
          </div>
          <div className={styles.deltaPanel}>
            <div><p className={shared.eyebrow}>Iteração baseada em delta</p><h3>Altere apenas o que ainda está errado</h3></div>
            <ol><li>Observe o resultado atual.</li><li>Registre o que está correto.</li><li>Identifique o erro material.</li><li>Peça a menor mudança necessária.</li></ol>
            <blockquote>“Preserve personagem, enquadramento e iluminação. Reduza apenas a saturação do fundo e mova o título ligeiramente para cima.”</blockquote>
          </div>
        </section>

        <section className={`${shared.section} ${styles.referenceSection}`} id="referencias-series" aria-labelledby="reference-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Referências e séries</p>
            <h2 id="reference-title">Uma imagem de referência precisa ter função declarada</h2>
            <p>Modelos e interfaces interpretam referências de formas diferentes. Nomear sua função reduz a chance de importar atributos indesejados.</p>
          </div>
          <div className={styles.referenceRoles}>
            {[["Identidade", "Quem ou qual objeto precisa permanecer reconhecível."], ["Pose", "Postura e gesto, sem copiar necessariamente cenário ou estilo."], ["Composição", "Posição, escala, perspectiva e organização do quadro."], ["Estilo", "Paleta, textura, luz, acabamento e linguagem visual."], ["Produto", "Geometria, materiais, embalagem, rótulo e elementos distintivos."], ["Cenário", "Arquitetura, ambiente e relações espaciais."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={styles.seriesPanel}>
            <div><p className={shared.eyebrow}>Brief visual da série</p><h3>Fixos + variáveis</h3><p>Registre personagem ou produto, paleta, luz, materiais, composição e regras de estilo como elementos fixos. Em cada peça, declare apenas cena, ação ou mensagem variável.</p></div>
            <div className={styles.fixedVariable}><span><strong>Fixos</strong> identidade · paleta · luz · enquadramento</span><span><strong>Variáveis</strong> cena · ação · mensagem</span></div>
          </div>
          <p className={styles.consistencyNote}>Referências, seed, controles de identidade e histórico conversacional podem ajudar, mas consistência perfeita não deve ser prometida. Compare cada peça com o brief visual.</p>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.toolsSection}`} id="ferramentas" aria-labelledby="tools-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>O que depende da ferramenta</p>
            <h2 id="tools-title">Princípio universal no centro; adaptação proprietária na borda</h2>
            <p>Os recursos abaixo podem existir, mudar de nome ou desaparecer. Consulte a documentação do modelo e da interface que você realmente usa.</p>
          </div>
          <div className={styles.toolGrid}>
            <article><h3>Proporção e resolução</h3><p>Podem ser linguagem natural, seletor de interface ou parâmetro. “8K” no prompt não muda necessariamente o arquivo de saída.</p></article>
            <article><h3>Negative prompting</h3><p>Algumas ferramentas têm campo ou parâmetro próprio; outras preferem restrições em linguagem natural; algumas não oferecem suporte.</p></article>
            <article><h3>Pesos e força</h3><p>Prompt weights, image weight, reference strength, style strength e CFG não são equivalentes entre sistemas.</p></article>
            <article><h3>Seed e variações</h3><p>Podem apoiar testes e continuidade, mas não são garantia universal de reprodução ou identidade.</p></article>
            <article><h3>Máscara e seleção</h3><p>Inpainting, markup e seleção de região aumentam o controle local quando a interface oferece esses recursos.</p></article>
            <article><h3>Outpainting</h3><p>Expande o quadro e exige decisões sobre nova composição, continuidade de luz e proteção do conteúdo original.</p></article>
          </div>
          <div className={styles.portabilityRule}><strong>Regra de portabilidade</strong><p>Se o modelo não for conhecido, produza linguagem natural neutra. Se for conhecido, acrescente somente sintaxe e controles confirmados na documentação atual.</p></div>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.protocolSection}`} id="metodo" aria-labelledby="method-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Método operacional</p>
            <h2 id="method-title">Nove etapas, aplicadas na proporção do trabalho</h2>
            <p>Use o fluxo completo em briefings complexos. Em uma tarefa simples, avance diretamente do pedido para a geração e a avaliação.</p>
          </div>
          <ol className={shared.protocolList}>
            {protocol.map(([title, text], index) => <li key={title}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
          <div className={styles.methodFlow} aria-label="Resumo do método para geração e edição"><span>Intenção</span><span>Direção</span><span>Resultado</span><span>Delta</span></div>
        </section>

        <section className={shared.section} id="visual-brief" aria-labelledby="brief-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Visual Brief</p>
            <h2 id="brief-title">Um mapa opcional para trabalhos com muitas decisões</h2>
            <p>Não preencha campos vazios por obrigação. O brief existe para tornar prioridades visíveis, não para transformar uma ideia simples em burocracia.</p>
          </div>
          <PromptBlock label="Copiar Visual Brief" value={visualBrief} />
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="examples-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Dezesseis casos</p>
            <h2 id="examples-title">O ganho vem da direção, não do volume</h2>
            <p>Os exemplos mostram melhorias proporcionais. Em alguns casos, a decisão correta é manter o prompt como está.</p>
          </div>
          <div className={`${shared.exampleList} ${styles.exampleList}`}>
            {examples.map(([title, before, after], index) => (
              <details key={title} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong></summary>
                <div className={styles.exampleBody}><div><p>Antes / pedido</p><span>{before}</span></div><div><p>Depois / tratamento</p><span>{after}</span></div></div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${styles.templatesSection}`} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Templates copiáveis</p>
            <h2 id="templates-title">Estruturas para adaptar, não fórmulas para obedecer</h2>
            <p>Remova campos sem função. Um template bom deve ficar menor quando a tarefa é simples.</p>
          </div>
          <div className={shared.faqList}>
            {templates.map((template, index) => <details key={template.title} open={index === 0}><summary>{template.title}</summary><div className={styles.templateBody}><PromptBlock label="Copiar template" value={template.value} /></div></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.aiUseSection}`} id="usar-com-ia" aria-labelledby="use-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Use esta página com uma IA</p>
            <h2 id="use-title">Transforme o método em uma instrução operacional</h2>
            <p>Escolha o comando compatível com a tarefa. O acesso à página não amplia as capacidades do gerador; ele apenas orienta o processo.</p>
          </div>
          <div className={styles.commandStack}>
            <PromptBlock label="Criar um prompt visual" value={aiUsePrompt} />
            <PromptBlock label="Melhorar um prompt" value={improvePrompt} />
            <PromptBlock label="Editar uma imagem" value={editPrompt} />
          </div>
        </section>

        <section className={shared.section} id="avaliar" aria-labelledby="evaluate-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Avaliação visual</p>
            <h2 id="evaluate-title">Uma imagem bonita ainda pode estar errada</h2>
            <p>Compare o resultado com o brief, não apenas com uma impressão estética. Falhas de texto, identidade, relações ou crop podem invalidar uma imagem atraente.</p>
          </div>
          <ul className={styles.finalChecklist}>
            {["O objetivo visual está claro no resultado?", "O assunto e os atributos essenciais estão corretos?", "Todos os requisitos obrigatórios aparecem?", "Algum elemento proibido foi incluído?", "Composição, relações e quantidade seguem o brief?", "A referência cumpriu somente a função indicada?", "Texto, ortografia, acentos e hierarquia estão corretos?", "Anatomia, mãos, objetos, reflexos e perspectiva são coerentes?", "Identidade, produto e materiais foram preservados?", "Proporção, área segura e crop funcionam no uso final?", "O que já está correto será preservado na próxima iteração?", "A próxima instrução descreve o delta mínimo necessário?"].map((item) => <li key={item}>{item}</li>)}
          </ul>
          <aside className={styles.relatedGuides}>
            <div><p className={shared.eyebrow}>Sistema editorial</p><h3>Este guia cuida da direção visual</h3><p><Link href="/ia/engenharia-de-prompt">Engenharia de Prompt</Link> organiza instruções; <Link href="/ia/context-engineering">Context Engineering</Link> estrutura referências e contexto; <Link href="/ia/ia-com-arquivos">IA com Arquivos</Link> orienta o uso de imagens fornecidas; e <Link href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas</Link> aprofunda critérios de julgamento.</p></div>
            <Link className="button button-secondary" href="/ia/avaliacao-de-respostas-de-ia">Avaliar o resultado</Link>
          </aside>
        </section>

        <section className={`${shared.section} ${styles.mythsSection}`} id="limites" aria-labelledby="limits-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Mitos, segurança e limites</p>
            <h2 id="limits-title">Palavras mágicas não substituem controle visual</h2>
            <p>Práticas antigas podem continuar produzindo efeitos em modelos específicos. O erro é tratá-las como garantias transferíveis.</p>
          </div>
          <div className={styles.mythGrid}>
            <article><h3>“Masterpiece”, “8K”, “16K”</h3><p>Podem atuar como pistas estéticas em certos modelos, mas não definem composição nem a resolução real do arquivo. Use controles de saída quando disponíveis.</p></article>
            <article><h3>Prompts gigantes por padrão</h3><p>Mais texto pode introduzir competição e contradição. Guias atuais variam: alguns favorecem frases curtas; outros aceitam especificações longas em cenas complexas.</p></article>
            <article><h3>Negative prompt enorme</h3><p>Restrições críticas são úteis. Listas automáticas não são universais e podem nem ser suportadas pelo sistema.</p></article>
            <article><h3>Câmera aleatória</h3><p>Lentes e foco devem descrever uma consequência visual. Especificações incompatíveis não tornam o pedido mais profissional.</p></article>
            <article><h3>Repetição e pesos arbitrários</h3><p>Sintaxe e efeito dependem do modelo. Não repita palavras ou invente pesos sem documentação ou teste controlado.</p></article>
            <article><h3>Resultado bonito = correto</h3><p>Verifique texto, relações, quantidade, identidade, materiais, anatomia, perspectiva, segurança e uso final.</p></article>
          </div>
          <div className={styles.rightsPanel}>
            <div><h3>Direitos e consentimento</h3><p>Antes de enviar ou gerar, considere direitos de imagem, pessoas identificáveis, marcas, propriedade intelectual, autorização e finalidade de uso.</p></div>
            <div><h3>Plataforma e uso comercial</h3><p>Verifique termos, políticas, origem de referências, licenças e condições da ferramenta utilizada. Não há uma regra jurídica universal para todos os países e sistemas.</p></div>
          </div>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas sobre prompts para imagens</h2>
          </div>
          <div className={shared.faqList}>
            {[
              ["Prompt mais longo gera imagem melhor?", "Não necessariamente. O tamanho deve acompanhar a quantidade de decisões importantes. Detalhes sem função podem competir entre si."],
              ["Devo escrever prompts em inglês?", "Depende do modelo e da interface. Sistemas modernos costumam aceitar português, mas nomes próprios, texto exato e sintaxes proprietárias precisam seguir a documentação da ferramenta."],
              ["Negative prompt é obrigatório?", "Não. Algumas plataformas oferecem negative prompt explícito, outras interpretam restrições em linguagem natural e outras não suportam o recurso."],
              ["Como manter a mesma pessoa ou produto?", "Use referência adequada, declare atributos invariantes e compare cada resultado. Controles de identidade variam e não garantem consistência perfeita."],
              ["Como pedir texto correto na imagem?", "Forneça a frase exata, posição, hierarquia e tratamento. Gere pouco texto e verifique cada caractere. Em produção, pode ser melhor aplicar tipografia depois."],
              ["Posso misturar referências?", "Sim, quando a ferramenta aceitar. Identifique a função de cada imagem e explique como elas se combinam para evitar transferência de atributos indesejados."],
              ["Uma seed reproduz exatamente a imagem?", "Não trate seed como garantia universal. Determinismo, implementação e controles disponíveis variam entre ferramentas e versões."],
              ["Quando devo pedir esclarecimentos?", "Quando uma ambiguidade muda materialmente o objetivo — por exemplo, criação ou edição, texto exato, identidade crítica, proporção de campanha ou o elemento que deve permanecer."],
            ].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.references}`} id="referencias" aria-labelledby="references-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Referências</p>
            <h2 id="references-title">Fontes consultadas</h2>
            <p>A metodologia combina documentação atual de fornecedores e trabalhos originais sobre aderência, composição e edição. Recursos específicos podem mudar rapidamente.</p>
          </div>
          <div className={shared.sourceGroups}>
            {sources.map((group, index) => <section key={group.group} aria-labelledby={`source-group-${index}`}><h3 id={`source-group-${index}`}>{group.group}</h3><ul>{group.items.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></section>)}
          </div>
          <p className={shared.editorialNote}>Última revisão editorial: 29 de agosto de 2026. Exemplos são ilustrativos, não representam clientes e não garantem comportamento idêntico entre modelos.</p>
        </section>
      </article>
    </PageShell>
  );
}
