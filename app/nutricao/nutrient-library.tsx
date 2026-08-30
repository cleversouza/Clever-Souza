/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CSSProperties } from "react";
import { JsonLd, PageShell } from "../site";
import {
  ALL_NON_VITAMIN_NUTRIENTS,
  NUTRIENT_CATEGORIES,
  getNutrientsByCategory,
  nutrientPath,
} from "./nutrient-data";
import type { NutrientCategoryKey, NutrientData } from "./nutrient-types";
import { NutritionPublicationMeta } from "./publication-meta";

const SITE_URL = "https://www.cleversouza.com";

const categoryOrder: NutrientCategoryKey[] = [
  "macronutrientes",
  "minerais",
  "aminoacidos",
  "acidos-graxos",
  "outros-nutrientes",
];

export function NutrientLibraryOverview() {
  return (
    <section className="section nutrient-library-overview" aria-labelledby="outros-nutrientes-title">
      <div className="nutrient-library-heading">
        <div>
          <p className="eyebrow">Mapa ampliado</p>
          <h2 id="outros-nutrientes-title">Todos os outros nutrientes</h2>
        </div>
        <p>
          A biblioteca separa nutrientes essenciais reconhecidos de componentes
          dietéticos relevantes — sem transformar todo composto bioativo em vitamina,
          mineral ou indicação de suplemento.
        </p>
      </div>

      <div className="nutrient-category-grid">
        {categoryOrder.map((key) => {
          const category = NUTRIENT_CATEGORIES[key];
          const count = getNutrientsByCategory(key).length;
          return (
            <article className={`nutrient-category-card nutrient-category-card--${key}`} key={key}>
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.alt ?? ""}
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="nutrient-category-typography" aria-hidden="true">
                  <span>H₂O</span>
                  <strong>+</strong>
                  <span>Fibra</span>
                  <strong>+</strong>
                  <span>Colina</span>
                </div>
              )}
              <div>
                <p className="eyebrow">{category.eyebrow}</p>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="nutrient-guide-count">
                  {count} {count === 1 ? "guia" : "guias"}
                </span>
                <Link className="text-link" href={`/nutricao/${key}`}>
                  Explorar o núcleo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <aside className="nutrient-scope-note" aria-labelledby="escopo-nutrientes-title">
        <p className="eyebrow">Escopo científico</p>
        <h3 id="escopo-nutrientes-title">Por que a lista termina aqui</h3>
        <p>
          Compostos bioativos, fitoquímicos, probióticos, enzimas, creatina, carnitina,
          taurina e elementos ultratraço podem ter interesse biológico, mas não formam
          uma lista fechada de nutrientes essenciais humanos. Enxofre é obtido sobretudo
          em aminoácidos sulfurados; cobalto já está contido na vitamina B12. Eles serão
          explicados nos contextos corretos, sem páginas artificiais que exagerem sua posição.
        </p>
      </aside>
    </section>
  );
}

export function NutrientCategoryPage({ category: key }: { category: NutrientCategoryKey }) {
  const category = NUTRIENT_CATEGORIES[key];
  const guides = getNutrientsByCategory(key);
  const canonical = `${SITE_URL}/nutricao/${key}`;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: canonical,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    hasPart: guides.map((guide) => ({
      "@type": "Article",
      name: guide.name,
      url: `${SITE_URL}${nutrientPath(guide)}`,
    })),
  };

  return (
    <PageShell
      active="/nutricao"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Nutrição", href: "/nutricao" },
        { label: category.name },
      ]}
    >
      <JsonLd value={collectionSchema} />
      <section className="nutrition-hub-hero nutrient-category-hero">
        <div>
          <p className="eyebrow">Nutrição · {category.eyebrow}</p>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <span className="nutrient-guide-count">{guides.length} guias aprofundados</span>
        </div>
        {category.image ? (
          <img
            src={category.image}
            alt={category.alt ?? ""}
            width="1536"
            height="1024"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <div className="nutrient-category-typography" aria-hidden="true">
            <span>H₂O</span><strong>·</strong><span>Fibra</span><strong>·</strong><span>Colina</span>
          </div>
        )}
      </section>

      <section className="section nutrient-index" aria-label={`Guias de ${category.name}`}>
        <div className="nutrient-index-intro">
          <p className="eyebrow">Biblioteca para consulta</p>
          <h2>Escolha um guia</h2>
          <p>
            Cada página separa função fisiológica, fonte alimentar, referência de
            rótulo, necessidade individual, inadequação, excesso e suplementação.
          </p>
        </div>
        <div className="nutrient-index-grid">
          {guides.map((guide, index) => (
            <article key={guide.slug} style={{ "--nutrient-accent": guide.accent } as CSSProperties}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{guide.kicker}</p>
                <h3>{guide.name}</h3>
                <p>{guide.deck}</p>
                <Link className="text-link" href={nutrientPath(guide)}>
                  Ler o guia completo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="section nutrient-category-nav" aria-label="Outros núcleos de nutrientes">
        {categoryOrder.filter((categoryKey) => categoryKey !== key).map((categoryKey) => (
          <Link key={categoryKey} href={`/nutricao/${categoryKey}`}>
            {NUTRIENT_CATEGORIES[categoryKey].shortName}
          </Link>
        ))}
      </nav>
    </PageShell>
  );
}

function ReferenceTable({ data }: { data: NutrientData }) {
  return (
    <div
      className="nutrition-table-wrap nutrition-reference-table"
      tabIndex={0}
      role="region"
      aria-label={`Referências de ingestão de ${data.name}; deslize horizontalmente para ver todas as colunas`}
    >
      <table className="nutrition-table">
        <caption>Valores de referência selecionados para {data.name}</caption>
        <thead>
          <tr><th scope="col">Referência</th><th scope="col">Valor</th><th scope="col">Como interpretar</th></tr>
        </thead>
        <tbody>
          {data.referenceRows.map(([label, value, detail]) => (
            <tr key={label}><th scope="row">{label}</th><td>{value}</td><td>{detail}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SourceTable({ data }: { data: NutrientData }) {
  return (
    <div
      className="nutrition-table-wrap"
      tabIndex={0}
      role="region"
      aria-label={`Fontes alimentares de ${data.name}; deslize horizontalmente para ver todas as colunas`}
    >
      <table className="nutrition-table">
        <caption>Fontes alimentares em perspectiva</caption>
        <thead>
          <tr><th scope="col">Grupo</th><th scope="col">Exemplos</th><th scope="col">Leitura prática</th></tr>
        </thead>
        <tbody>
          {data.sources.map(([group, examples, detail]) => (
            <tr key={group}><th scope="row">{group}</th><td>{examples}</td><td>{detail}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NutrientDetailPage({ data }: { data: NutrientData }) {
  const category = NUTRIENT_CATEGORIES[data.category];
  const canonicalPath = nutrientPath(data);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const siblings = getNutrientsByCategory(data.category);
  const index = siblings.findIndex((item) => item.slug === data.slug);
  const previous = index > 0 ? siblings[index - 1] : undefined;
  const next = index < siblings.length - 1 ? siblings[index + 1] : undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.name,
    description: data.deck,
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: {
      "@type": "Person",
      name: "Cleverson Batista de Souza",
      alternateName: "Clever Souza",
      url: `${SITE_URL}/sobre`,
    },
    publisher: {
      "@type": "Person",
      name: "Cleverson Batista de Souza",
      alternateName: "Clever Souza",
      url: `${SITE_URL}/sobre`,
    },
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    about: [data.name, category.name],
    citation: data.references.map((reference) => reference.url),
  };
  const toc = [
    ["entenda", "O que é"], ["formas", "Formas e conceitos"], ["funcoes", "Funções"],
    ["fontes", "Fontes alimentares"], ["fisiologia", "Absorção e metabolismo"],
    ["referencias", "Quanto precisamos?"], ["inadequacao", "Inadequação"],
    ["excesso", "Excesso e segurança"], ["evidencia", data.evidenceTitle],
    ["pratica", "Uso prático e suplementos"], ["interacoes", "Interações e avaliação"],
  ] as const;

  return (
    <PageShell
      active="/nutricao"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Nutrição", href: "/nutricao" },
        { label: category.name, href: `/nutricao/${data.category}` },
        { label: data.name },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article
        className={`nutrition-article nutrition-article--nutrient nutrition-article--${data.category}`}
        style={{ "--nutrient-accent": data.accent } as CSSProperties}
      >
        <header className="nutrition-article-hero nutrient-detail-hero">
          <div className="nutrition-article-heading">
            <p className="eyebrow">Nutrição · {category.shortName}</p>
            <h1>{data.name}</h1>
            <p className="nutrition-deck">{data.deck}</p>
            <NutritionPublicationMeta
              updatedIso="2026-08-27"
              updatedLabel="27 de agosto de 2026"
              readingTime={data.readingTime}
            />
          </div>
          <div className="nutrient-symbol" aria-hidden="true">
            <span>{data.shortName ?? data.name}</span>
            <strong>{data.labelReference}</strong>
            <small>{data.category === "aminoacidos" ? "referência no contexto da proteína" : "referência de rótulo ou ingestão"}</small>
          </div>
        </header>

        <div className="nutrition-article-layout">
          <aside className="nutrition-toc" aria-label="Índice do guia">
            <strong>Neste guia</strong>
            <ol>
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
              <li><a href="#perguntas-frequentes">Perguntas frequentes</a></li>
              <li><a href="#fontes-referencias">Referências</a></li>
            </ol>
          </aside>

          <div className="nutrition-article-body prose">
            <p className="nutrition-lead">{data.lead}</p>
            <aside className="nutrition-essential" aria-label={`${data.name} em poucas palavras`}>
              <p className="eyebrow">Em poucas palavras</p>
              <ul>{data.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            </aside>

            <section id="entenda" aria-labelledby="entenda-title">
              <p className="eyebrow">01 · Fundamento</p>
              <h2 id="entenda-title">O que é {data.name.toLowerCase()}</h2>
              <p>{data.lead}</p>
              <div className="nutrition-vdr-callout">
                <span>Referência em destaque</span><strong>{data.labelReference}</strong><p>{data.labelReferenceNote}</p>
              </div>
            </section>

            <section id="formas" aria-labelledby="formas-title">
              <p className="eyebrow">02 · Linguagem</p><h2 id="formas-title">Formas e conceitos que não devem ser confundidos</h2>
              <dl className="nutrition-form-grid">
                {data.forms.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
              </dl>
            </section>

            <section id="funcoes" aria-labelledby="funcoes-title">
              <p className="eyebrow">03 · Fisiologia</p><h2 id="funcoes-title">O que faz no organismo</h2>
              <ul className="nutrition-function-list">
                {data.functions.map(([title, description]) => <li key={title}><strong>{title}:</strong> {description}</li>)}
              </ul>
              <p>Participar de uma função normal não significa que doses extras melhorem essa função quando o estado nutricional já é adequado.</p>
            </section>

            <section id="fontes" aria-labelledby="fontes-title">
              <p className="eyebrow">04 · Alimentação</p><h2 id="fontes-title">Onde encontrar</h2>
              <SourceTable data={data} />
              <p className="nutrition-table-footnote">A tabela é qualitativa. Variedade, porção, produção, preparo e base de composição alteram a quantidade real.</p>
            </section>

            <section id="fisiologia" aria-labelledby="fisiologia-title">
              <p className="eyebrow">05 · Aproveitamento</p><h2 id="fisiologia-title">Absorção, transporte e metabolismo</h2>
              {data.physiology.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section id="referencias" aria-labelledby="referencias-title">
              <p className="eyebrow">06 · Números com contexto</p><h2 id="referencias-title">Quanto precisamos?</h2>
              <ReferenceTable data={data} />
              <p className="nutrition-note"><strong>VDR, RDA, AI, AMDR e UL respondem a perguntas diferentes.</strong> O %VD compara rótulos; RDA/AI orientam grupos; AMDR distribui energia; UL é teto de segurança, nunca meta.</p>
            </section>

            <section id="inadequacao" aria-labelledby="inadequacao-title">
              <p className="eyebrow">07 · Baixa oferta e contexto clínico</p><h2 id="inadequacao-title">Inadequação e grupos de maior atenção</h2>
              {data.inadequacy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>Quem pode exigir avaliação mais cuidadosa</h3>
              <ul>{data.riskGroups.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section id="excesso" aria-labelledby="excesso-title">
              <p className="eyebrow">08 · Segurança</p><h2 id="excesso-title">Excesso também é parte da conversa</h2>
              {data.excess.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <blockquote>Ausência de limite superior estabelecido significa insuficiência de dados — não prova de segurança ilimitada.</blockquote>
            </section>

            <section id="evidencia" aria-labelledby="evidencia-title">
              <p className="eyebrow">09 · O que a evidência não permite simplificar</p><h2 id="evidencia-title">{data.evidenceTitle}</h2>
              {data.evidenceBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section id="pratica" aria-labelledby="pratica-title">
              <p className="eyebrow">10 · Uso responsável</p><h2 id="pratica-title">Antes de pensar em suplemento</h2>
              <ol className="nutrition-checklist">{data.practicalChecklist.map((item) => <li key={item}>{item}</li>)}</ol>
              <p>Suplemento não substitui alimentação adequada, e uma dose maior não representa benefício maior. Formulação, quantidade, duração, outras fontes e condição individual alteram segurança.</p>
            </section>

            <section id="interacoes" aria-labelledby="interacoes-title">
              <p className="eyebrow">11 · Quando individualizar</p><h2 id="interacoes-title">Interações e situações para avaliação profissional</h2>
              <ul>{data.interactions.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="nutrition-health-note">Este conteúdo é educativo. Sintomas, exames alterados, gestação, doenças, cirurgia bariátrica e uso contínuo de medicamentos exigem análise profissional adequada.</p>
            </section>

            <section className="nutrition-faq" aria-labelledby="perguntas-frequentes">
              <p className="eyebrow">Consulta rápida</p><h2 id="perguntas-frequentes">Perguntas frequentes</h2>
              <div className="faq-list">
                {data.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
              </div>
            </section>

            <section className="nutrition-references" id="fontes-referencias" aria-labelledby="fontes-referencias-title">
              <p className="eyebrow">Rastreabilidade</p><h2 id="fontes-referencias-title">Fontes e referências</h2>
              <ol>{data.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.title}</a><p>{reference.detail}</p></li>)}</ol>
            </section>

            <nav className="nutrition-article-paths" aria-label="Continuar na biblioteca">
              {previous ? <Link href={nutrientPath(previous)}>← {previous.name}</Link> : <Link href={`/nutricao/${data.category}`}>← {category.shortName}</Link>}
              {next ? <Link href={nutrientPath(next)}>{next.name} →</Link> : <Link href="/nutricao">Explorar Nutrição →</Link>}
            </nav>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

export const nutrientStaticParams = ALL_NON_VITAMIN_NUTRIENTS.map((item) => ({
  categoria: item.category,
  slug: item.slug,
}));
