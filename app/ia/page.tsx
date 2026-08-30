import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../metadata";
import { JsonLd, PageShell } from "../site";
import styles from "./ia-hub.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia";
const TITLE = "Inteligência Artificial: guias e modelos de referência";
const DESCRIPTION =
  "Guias para trabalhar com IA e modelos de pensamento aplicados com método, contexto, evidência, clareza e rigor.";

export const metadata: Metadata = pageMetadata(TITLE, DESCRIPTION, PATH);

const guides = [
  {
    number: "01",
    stage: "Instruir",
    title: "Engenharia de Prompt",
    description:
      "Como transformar intenção em instruções mais claras, contextuais e testáveis — sem complexidade desnecessária.",
    href: "/ia/engenharia-de-prompt",
    accent: "prompt",
  },
  {
    number: "02",
    stage: "Contextualizar",
    title: "Context Engineering",
    description:
      "Como selecionar, estruturar e atualizar as informações, os dados e os recursos de que uma IA realmente precisa.",
    href: "/ia/context-engineering",
    accent: "context",
  },
  {
    number: "03",
    stage: "Projetar",
    title: "Pesquisa Aprofundada",
    description:
      "Transforme uma pergunta em um Research Brief, defina o rigor da investigação e gere um prompt de pesquisa proporcional ao problema.",
    href: "/ia/pesquisa-aprofundada",
    accent: "deepResearch",
  },
  {
    number: "04",
    stage: "Pesquisar",
    title: "Pesquisa com IA",
    description:
      "Como buscar, verificar, contrastar e sintetizar informações com fontes e incertezas rastreáveis.",
    href: "/ia/pesquisa-com-ia",
    accent: "research",
  },
  {
    number: "05",
    stage: "Analisar arquivos",
    title: "IA com Arquivos",
    description:
      "Como localizar, extrair, comparar, verificar e sintetizar PDFs, documentos, planilhas e imagens preservando a origem das informações.",
    href: "/ia/ia-com-arquivos",
    accent: "files",
  },
  {
    number: "06",
    stage: "Dirigir imagens",
    title: "Prompts para Imagens",
    description:
      "Como transformar uma intenção visual em instruções claras para gerar, editar e refinar imagens sem depender de palavras mágicas.",
    href: "/ia/prompts-para-imagens",
    accent: "images",
  },
  {
    number: "07",
    stage: "Criar vídeos",
    title: "Vídeos Curtos com IA",
    description:
      "Como pesquisar, roteirizar, produzir e analisar Reels, TikToks e Shorts usando atenção, dados e experimentação sem prometer viralização.",
    href: "/ia/videos-curtos",
    accent: "videos",
  },
  {
    number: "08",
    stage: "Avaliar",
    title: "Avaliação de respostas de IA",
    description:
      "Como verificar se uma resposta atende ao objetivo, às evidências e aos critérios que realmente importam.",
    href: "/ia/avaliacao-de-respostas-de-ia",
    accent: "evaluation",
  },
] as const;

const thoughtModels = [
  {
    title: "Napoleon Hill",
    description:
      "Princípios reconstruídos criticamente a partir da obra para analisar objetivos, decisões, planejamento, colaboração, persistência e execução.",
    href: "/ia/napoleon-hill",
    eyebrow: "Obra · evidência · aplicação",
  },
] as const;

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}${PATH}#collection`,
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "pt-BR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Clever Souza",
    url: SITE_URL,
  },
  hasPart: [
    ...guides.map((guide) => ({
      "@type": "TechArticle",
      name: guide.title,
      url: `${SITE_URL}${guide.href}`,
    })),
    ...thoughtModels.map((model) => ({
      "@type": "Article",
      name: model.title,
      url: `${SITE_URL}${model.href}`,
    })),
  ],
};

export default function AiHubPage() {
  return (
    <PageShell
      active={PATH}
      breadcrumb={[{ label: "Início", href: "/" }, { label: "IA" }]}
    >
      <JsonLd value={collectionSchema} />
      <article className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Área de conhecimento · Clever Souza</p>
            <h1>Inteligência Artificial</h1>
            <p className={styles.lead}>
              Guias e sistemas de referência para instruir, contextualizar, pesquisar,
              trabalhar com arquivos, dirigir imagens, criar vídeos e avaliar com inteligência artificial — além de aplicar modelos de pensamento com método.
            </p>
            <a className="button" href="#guias">
              Explorar os guias
            </a>
          </div>

          <ol className={styles.flow} aria-label="Relação entre os guias">
            {guides.map((guide) => (
              <li key={guide.href}>
                <span>{guide.number}</span>
                <strong>{guide.stage}</strong>
                <small>{guide.title}</small>
              </li>
            ))}
          </ol>
        </header>

        <section className={styles.guidesSection} id="guias" aria-labelledby="guides-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Módulos existentes</p>
            <h2 id="guides-title">Oito guias, uma área de conhecimento</h2>
            <p>
              Cada guia resolve uma parte diferente do trabalho com IA. Você pode começar
              pelo ponto mais próximo da sua necessidade.
            </p>
          </div>

          <div className={styles.guideGrid}>
            {guides.map((guide) => (
              <article
                className={`${styles.guideCard} ${styles[guide.accent]}`}
                key={guide.href}
              >
                <div className={styles.cardMeta}>
                  <span>{guide.number}</span>
                  <span>{guide.stage}</span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link className={styles.guideLink} href={guide.href}>
                  Explorar {guide.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modelsSection} aria-labelledby="models-title">
          <div className={styles.modelsIntro}>
            <p className={styles.eyebrow}>Outra coleção editorial</p>
            <h2 id="models-title">Modelos de pensamento aplicados com IA</h2>
            <p>
              Reconstruções críticas de corpos de ideias documentados. A IA aplica princípios;
              não interpreta personagens nem inventa opiniões históricas.
            </p>
          </div>
          <div className={styles.modelList}>
            {thoughtModels.map((model) => (
              <article className={styles.modelCard} key={model.href}>
                <div>
                  <span>{model.eyebrow}</span>
                  <h3>{model.title}</h3>
                </div>
                <p>{model.description}</p>
                <Link className={styles.modelLink} href={model.href}>
                  Explorar o modelo
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
