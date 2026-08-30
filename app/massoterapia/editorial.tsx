import Link from "next/link";
import { JsonLd, PageShell, WhatsAppCta } from "../site";
import {
  getTechniqueArticle,
  techniqueArticles,
  type TechniqueArticle,
} from "./article-data";

const SITE_URL = "https://www.cleversouza.com";
const PERSON_ID = `${SITE_URL}/sobre#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function TechniquePicture({
  article,
  eager = false,
  sizes = "(max-width: 720px) 92vw, 520px",
}: {
  article: TechniqueArticle;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/massoterapia/tecnicas/${article.imageStem}-540.webp 540w, /massoterapia/tecnicas/${article.imageStem}-1080.webp 1080w`}
        sizes={sizes}
      />
      <img
        src={`/massoterapia/tecnicas/${article.imageStem}-1080.webp`}
        alt={article.imageAlt}
        width="1080"
        height="1080"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}

function EditorialCard({ article }: { article: TechniqueArticle }) {
  const href = `/massoterapia/conteudo/${article.slug}`;

  return (
    <article className="editorial-card">
      <a
        className="editorial-card-media"
        href={href}
        aria-label={`Ler ${article.shortTitle}`}
        data-event="select_massotherapy_technique"
        data-service={article.technique}
      >
        <TechniquePicture
          article={article}
          sizes="(max-width: 720px) 92vw, (max-width: 1120px) 44vw, 340px"
        />
      </a>
      <div className="editorial-card-copy">
        <p className="editorial-card-meta">
          <time dateTime={article.modifiedIso}>{article.updatedLabel}</time>
          <span aria-hidden="true">•</span>
          {article.readingTime}
        </p>
        <h2>
          <a href={href}>{article.shortTitle}</a>
        </h2>
        <p>{article.description}</p>
        <a
          className="text-link"
          href={href}
          data-event="select_massotherapy_technique"
          data-service={article.technique}
        >
          Ler o artigo <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export function MassotherapyContentHubPage() {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Conteúdos de massoterapia",
    description:
      "Guias sobre técnicas de massoterapia, evidências, limites e cuidados.",
    url: `${SITE_URL}/massoterapia/conteudo`,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Clever Souza",
      url: SITE_URL,
    },
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Conteúdos de massoterapia",
    itemListElement: techniqueArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/massoterapia/conteudo/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <PageShell
      active="/massoterapia"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Massoterapia", href: "/massoterapia" },
        { label: "Conteúdo" },
      ]}
    >
      <JsonLd value={collectionPage} />
      <JsonLd value={itemList} />
      <section className="editorial-hub-hero">
        <p className="eyebrow">Conteúdos de massoterapia</p>
        <h1>Massoterapia com clareza: técnicas, cuidados e evidências</h1>
        <p>
          Guias práticos sobre funcionamento, diferenças, rotina, evidências,
          limites e cuidados — escritos para apoiar decisões informadas, sem
          promessas de saúde.
        </p>
      </section>

      <section className="section editorial-card-grid" aria-label="Artigos de massoterapia">
        {techniqueArticles.map((article) => (
          <EditorialCard article={article} key={article.slug} />
        ))}
      </section>

      <section className="section editorial-hub-cta">
        <div>
          <p className="eyebrow">Atendimento em Curitiba</p>
          <h2>Conheça a página de massoterapia</h2>
          <p>
            Veja como funciona o atendimento, orientações para a primeira sessão
            e as formas de contato.
          </p>
        </div>
        <Link className="button button-secondary" href="/massoterapia">
          Ir para Massoterapia
        </Link>
      </section>
    </PageShell>
  );
}

function ArticleFaq({ article }: { article: TechniqueArticle }) {
  return (
    <section className="article-faq" aria-labelledby="perguntas-frequentes">
      <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
      <div className="faq-list">
        {article.faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedArticles({ article }: { article: TechniqueArticle }) {
  const related = article.relatedSlugs
    .map((slug) => getTechniqueArticle(slug))
    .filter((item): item is TechniqueArticle => Boolean(item));

  return (
    <section className="section related-techniques" aria-labelledby="artigos-relacionados">
      <div className="section-heading">
        <p className="eyebrow">Continue pesquisando</p>
        <h2 id="artigos-relacionados">Artigos relacionados</h2>
      </div>
      <div className="related-technique-grid">
        {related.map((item) => (
          <article key={item.slug}>
            <p>{item.technique}</p>
            <h3>
              <a
                href={`/massoterapia/conteudo/${item.slug}`}
                data-event="click_related_article"
              >
                {item.shortTitle}
              </a>
            </h3>
            <a
              className="text-link"
              href={`/massoterapia/conteudo/${item.slug}`}
              data-event="click_related_article"
            >
              Ler artigo <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MassotherapyArticlePage({ slug }: { slug: string }) {
  const article = getTechniqueArticle(slug);
  if (!article) return null;

  const canonical = `${SITE_URL}/massoterapia/conteudo/${article.slug}`;
  const image = `${SITE_URL}/massoterapia/tecnicas/${article.imageStem}-1080.webp`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedIso,
    dateModified: article.modifiedIso,
    inLanguage: "pt-BR",
    image: [image],
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Cleverson Batista de Souza",
      alternateName: "Clever Souza",
      url: `${SITE_URL}/sobre`,
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Cleverson Batista de Souza",
      url: `${SITE_URL}/sobre`,
    },
    isPartOf: { "@type": "WebSite", "@id": WEBSITE_ID },
    about: article.technique,
    keywords: [
      article.keyword,
      article.technique,
      "massoterapia em Curitiba",
      "cuidados na massoterapia",
    ],
  };
  return (
    <PageShell
      active="/massoterapia"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Massoterapia", href: "/massoterapia" },
        { label: "Conteúdo", href: "/massoterapia/conteudo" },
        { label: article.technique },
      ]}
    >
      <JsonLd value={articleSchema} />

      <article className="technique-article">
        <header className="technique-article-header">
          <div className="technique-article-heading">
            <p className="eyebrow">{article.technique}</p>
            <h1>{article.title}</h1>
            <p className="article-deck">{article.description}</p>
            <div className="article-publication-meta">
              <span>
                Por <Link href="/sobre" rel="author">Cleverson Batista de Souza</Link>
              </span>
              <span>
                Publicado em <time dateTime={article.publishedIso}>{article.publishedLabel}</time>
              </span>
              <span>
                Atualizado em <time dateTime={article.modifiedIso}>{article.updatedLabel}</time>
              </span>
              <span>{article.readingTime} de leitura</span>
            </div>
          </div>
          <div className="technique-article-image">
            <TechniquePicture article={article} eager />
          </div>
        </header>

        <div className="technique-article-layout">
          <aside className="article-toc" aria-label="Índice do artigo">
            <strong>Neste artigo</strong>
            <ol>
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
              <li><a href="#perguntas-frequentes">Perguntas frequentes</a></li>
              <li><a href="#referencias">Referências</a></li>
            </ol>
          </aside>

          <div className="technique-article-body prose">
            <p className="article-summary">{article.summary}</p>

            {article.introduction?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <aside className="article-key-points" aria-label="Resumo do artigo">
              <strong>O essencial</strong>
              <ul>
                {article.takeaways.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </aside>

            {article.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.link && (
                  <p>
                    {section.link.before}
                    <Link href={section.link.href}>{section.link.label}</Link>
                    {section.link.after}
                  </p>
                )}
                {section.links && (
                  <ul className="article-link-list">
                    {section.links.map((item) => (
                      <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                    ))}
                  </ul>
                )}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.afterBulletsParagraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.table && (
                  <div className="article-table-scroll" tabIndex={0} aria-label="Tabela comparativa">
                    <table className="article-table">
                      <thead><tr>{section.table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
                      <tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
                    </table>
                    {section.table.note && <p className="article-table-note">{section.table.note}</p>}
                  </div>
                )}
                {section.note && <p className="evidence-note">{section.note}</p>}
                {section.subsections?.map((subsection) => (
                  <section
                    key={subsection.id}
                    {...(subsection.title
                      ? { "aria-labelledby": subsection.id }
                      : { "aria-label": "Destaque do artigo" })}
                  >
                    {subsection.title && <h3 id={subsection.id}>{subsection.title}</h3>}
                    {subsection.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {subsection.strongParagraph && (
                      <p><strong>{subsection.strongParagraph}</strong></p>
                    )}
                    {subsection.bullets && (
                      <ul>
                        {subsection.bullets.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {subsection.afterBulletsParagraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {subsection.note && <p>{subsection.note}</p>}
                  </section>
                ))}
                {section.afterSubsectionsNote && (
                  <p className="evidence-note">{section.afterSubsectionsNote}</p>
                )}
              </section>
            ))}

            <aside className="health-note article-health-note">
              <strong>Aviso de saúde</strong>
              <p>
                A massoterapia não substitui diagnóstico, tratamento médico,
                fisioterapêutico, psicológico ou acompanhamento de outro
                profissional habilitado.
              </p>
              <Link href="/aviso-de-saude">Leia o Aviso de Saúde</Link>
            </aside>

            <ArticleFaq article={article} />

            <section className="article-references" aria-labelledby="referencias">
              <h2 id="referencias">{article.referencesTitle ?? "Referências consultadas"}</h2>
              <ol>
                {article.sources.map((source) => (
                  <li key={source.url ?? source.title}>
                    {source.url ? (
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    ) : (
                      <span>{source.title}</span>
                    )}
                    <p>{source.detail}</p>
                  </li>
                ))}
              </ol>
              <p>
                Fontes consultadas até {article.updatedLabel}. A pesquisa em saúde
                evolui; revisões futuras podem modificar a interpretação atual.
              </p>
            </section>

            <div className="article-paths">
              <Link href="/massoterapia">Voltar para Massoterapia</Link>
              <Link href="/massoterapia/conteudo">Ver todos os conteúdos</Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedArticles article={article} />

      <section className="final-cta editorial-final-cta">
        <div>
          <p className="eyebrow">Próximo passo</p>
          <h2>Converse antes de escolher a técnica</h2>
          <p>
            Explique o que procura e tire dúvidas. A abordagem pode ser definida
            com mais segurança depois dessa conversa.
          </p>
        </div>
        <WhatsAppCta location={`article_${article.imageStem}`} />
      </section>
    </PageShell>
  );
}
