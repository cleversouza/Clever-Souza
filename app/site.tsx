/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ProtocolCarousel } from "./massoterapia/protocol-carousel";

const SITE_URL = "https://www.cleversouza.com";
const PERSON_ID = `${SITE_URL}/sobre#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const rawWhatsapp =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
  "5541992051173";
const whatsappHref = `https://wa.me/${rawWhatsapp}`;
const MASSOTHERAPY_INSTAGRAM =
  "https://www.instagram.com/clevermassoterapia?igsh=MXRqczl3YXphOG5oaQ==";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/nutricao", label: "Nutrição" },
  { href: "/massoterapia", label: "Massoterapia" },
  { href: "/contato", label: "Contato" },
];

export const services = [
  {
    id: "quick-massage",
    name: "Quick Massage",
    group: "Atendimento rápido",
    summary:
      "Uma opção objetiva para pausas de cuidado corporal, realizada em cadeira específica e adaptada ao tempo disponível.",
    objective: "Promover uma pausa, conforto e redução da sensação de tensão.",
  },
  {
    id: "massagem-relaxante",
    name: "Massagem relaxante",
    group: "Relaxamento e bem-estar",
    summary:
      "Movimentos contínuos e ritmo confortável, ajustados às preferências informadas durante o atendimento.",
    objective: "Favorecer relaxamento e sensação geral de bem-estar.",
  },
  {
    id: "massagem-terapeutica",
    name: "Massagem terapêutica",
    group: "Tensões e cuidado corporal",
    summary:
      "Atendimento direcionado às áreas relatadas, com intensidade e recursos manuais definidos de forma individual.",
    objective: "Contribuir para o cuidado corporal e o manejo de tensões.",
  },
  {
    id: "liberacao-miofascial",
    name: "Liberação miofascial",
    group: "Tensões e cuidado corporal",
    summary:
      "Abordagem manual aplicada de maneira progressiva, respeitando sensibilidade, limites e resposta individual.",
    objective: "Trabalhar mobilidade percebida e áreas de maior tensão.",
  },
  {
    id: "massagem-esportiva",
    name: "Massagem esportiva",
    group: "Recuperação e atividade física",
    summary:
      "Cuidado corporal contextualizado pela rotina de treino, pelo tipo de esforço e pelo momento da atividade física.",
    objective: "Apoiar conforto e recuperação percebida após esforços.",
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem linfática",
    group: "Técnicas complementares",
    summary:
      "Técnica de movimentos leves e ritmados, realizada somente após verificação de cuidados e contraindicações.",
    objective: "Favorecer uma experiência corporal leve e confortável.",
  },
  {
    id: "reflexologia-podal",
    name: "Reflexologia podal",
    group: "Técnicas complementares",
    summary:
      "Aplicação de pressões e movimentos nos pés, com foco em relaxamento e percepção de cuidado.",
    objective: "Promover relaxamento e bem-estar, sem alegações diagnósticas.",
  },
  {
    id: "shiatsu",
    name: "Shiatsu",
    group: "Técnicas complementares",
    summary:
      "Pressões manuais aplicadas com ritmo e intensidade adaptados ao conforto de cada pessoa.",
    objective: "Favorecer relaxamento, percepção corporal e conforto.",
  },
  {
    id: "tui-na",
    name: "Tui-ná",
    group: "Técnicas complementares",
    summary:
      "Conjunto de recursos manuais que pode combinar pressões, mobilizações e movimentos de forma personalizada.",
    objective: "Contribuir para cuidado corporal e sensação de bem-estar.",
  },
  {
    id: "thai-massage",
    name: "Thai Massage",
    group: "Técnicas complementares",
    summary:
      "Abordagem corporal que pode utilizar compressões e alongamentos assistidos, sempre com adaptação individual.",
    objective: "Trabalhar percepção corporal, conforto e mobilidade percebida.",
  },
];

export const articles = [
  {
    slug: "o-que-e-massoterapia",
    title: "O que é massoterapia e como funciona?",
    category: "Massoterapia",
    description:
      "Uma introdução clara à massoterapia, aos objetivos do atendimento e aos limites de uma prática voltada ao cuidado corporal.",
    readingTime: "6 min",
    updated: "30 de julho de 2026",
  },
  {
    slug: "primeira-sessao-de-massoterapia",
    title: "O que esperar da primeira sessão de massoterapia?",
    category: "Massoterapia",
    description:
      "Como se preparar, o que conversar antes do atendimento e por que comunicar limites faz parte de uma sessão responsável.",
    readingTime: "5 min",
    updated: "30 de julho de 2026",
  },
  {
    slug: "massagem-relaxante-e-terapeutica",
    title: "Massagem relaxante e terapêutica: quais são as diferenças?",
    category: "Massoterapia",
    description:
      "Entenda as diferenças de objetivo e abordagem sem precisar escolher uma técnica sozinho.",
    readingTime: "5 min",
    updated: "30 de julho de 2026",
  },
  {
    slug: "cuidados-e-contraindicacoes",
    title: "Cuidados antes e depois da massagem — e quando adiar",
    category: "Saúde corporal",
    description:
      "Orientações gerais de segurança, situações que exigem cautela e sinais que devem ser avaliados por um profissional de saúde.",
    readingTime: "7 min",
    updated: "30 de julho de 2026",
  },
  {
    slug: "como-escolher-massoterapeuta-curitiba",
    title: "Como escolher um massoterapeuta em Curitiba",
    category: "Bem-estar",
    description:
      "Critérios práticos para avaliar comunicação, segurança, transparência e adequação do atendimento.",
    readingTime: "6 min",
    updated: "30 de julho de 2026",
  },
];

type PageShellProps = {
  active: string;
  children: ReactNode;
  breadcrumb?: Array<{ label: string; href?: string }>;
  front?: "brand" | "massotherapy";
};

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Clever Souza — página inicial">
      <span className="brand-assets" aria-hidden="true">
        <img
          className="brand-logo-desktop"
          src="/brand/logo-horizontal-principal.svg"
          alt=""
          width="657"
          height="112"
        />
        <img
          className="brand-logo-mobile"
          src="/brand/logo-mobile-simplificada.svg"
          alt=""
          width="243"
          height="96"
        />
        <img
          className="brand-symbol"
          src="/brand/simbolo-clever-souza.svg"
          alt=""
          width="90"
          height="100"
        />
      </span>
    </Link>
  );
}

function Header({ active }: { active: string }) {
  const current = (href: string) =>
    href === "/" ? active === "/" : active.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems
            .filter((item) => item.href !== "/contato")
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={current(item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
        </nav>
        <a
          className="button button-small header-contact"
          href="/contato"
          aria-current={current("/contato") ? "page" : undefined}
          data-event="click_contact"
          data-location="header"
        >
          Contato
        </a>
        <MobileMenu active={active} items={navItems} />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Clever Souza — página inicial">
            <img
              src="/brand/logo-horizontal-branca.svg"
              alt="Clever Souza"
              width="657"
              height="112"
            />
          </Link>
          <p className="footer-intro">
            Site oficial de Clever Souza.
          </p>
        </div>
        <div>
          <h2>Navegação</h2>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/nutricao">Nutrição</Link>
          <Link href="/massoterapia">Massoterapia</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div>
          <h2>Informações</h2>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/aviso-de-saude">Aviso de Saúde</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Cleverson Batista de Souza. Todos os direitos reservados.</p>
        <p>Clever Souza • Curitiba, Paraná, Brasil.</p>
      </div>
    </footer>
  );
}

function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Trilha de navegação">
        <ol>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd value={schema} />
    </>
  );
}

export function JsonLd({ value }: { value: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }}
    />
  );
}

export function PageShell({
  active,
  children,
  breadcrumb,
  front = "brand",
}: PageShellProps) {
  return (
    <>
      <Header active={active} />
      <main id="conteudo-principal">
        {breadcrumb && <Breadcrumbs items={breadcrumb} />}
        {children}
      </main>
      <Footer />
      {front === "massotherapy" && (
        <a
          className="mobile-whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="click_massotherapy_whatsapp"
          data-location="floating_mobile"
          aria-label="Falar sobre massoterapia com Clever pelo WhatsApp"
        >
          WhatsApp
        </a>
      )}
    </>
  );
}

export function WhatsAppCta({
  location,
  label = "Falar pelo WhatsApp",
}: {
  location: string;
  label?: string;
}) {
  return (
    <a
      className="button"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      data-event="click_massotherapy_whatsapp"
      data-location={location}
    >
      {label}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function BrandHeroVisual() {
  return (
    <div className="brand-hero-visual" aria-hidden="true">
      <div className="brand-axis" />
      <div className="brand-symbol-stage">
        <img
          src="/brand/simbolo-clever-souza-metalico.svg"
          alt=""
          width="90"
          height="100"
        />
      </div>
    </div>
  );
}

function ServiceCards({ limit }: { limit?: number }) {
  const featured = [
    services[1],
    services[2],
    services[3],
    services[4],
    services[0],
    services[6],
  ];
  const list = limit ? featured.slice(0, limit) : featured;

  return (
    <div className="card-grid">
      {list.map((service, index) => (
        <article className="service-card" key={service.id} id={service.id}>
          <div className="card-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <p className="card-kicker">{service.group}</p>
          <h3>{service.name}</h3>
          <p>{service.summary}</p>
          <a
            href={`/servicos#${service.id}`}
            data-event="select_massotherapy_service"
            data-service={service.name}
          >
            Entender este atendimento <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  );
}

function ArticleCards({ limit }: { limit?: number }) {
  const list = limit ? articles.slice(0, limit) : articles;
  return (
    <div className="article-grid">
      {list.map((article, index) => (
        <article className="article-card" key={article.slug}>
          <div className={`article-art article-art-${(index % 3) + 1}`}>
            <span>{article.category}</span>
          </div>
          <div className="article-card-content">
            <p className="article-meta">
              {article.updated} <span aria-hidden="true">•</span>{" "}
              {article.readingTime}
            </p>
            <h3>
              <a href={`/conteudos/${article.slug}`}>{article.title}</a>
            </h3>
            <p>{article.description}</p>
            <a href={`/conteudos/${article.slug}`}>
              Ler conteúdo <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Faq({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd value={schema} />
    </>
  );
}

const homeFaq = [
  {
    question: "Qual técnica devo escolher?",
    answer:
      "Você não precisa decidir sozinho. O ponto de partida é explicar o que procura, suas preferências, rotina e limites. A técnica ou combinação de abordagens pode ser definida depois dessa conversa.",
  },
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "Antes de começar, há uma conversa breve para compreender objetivos, áreas sensíveis, preferências e situações que exijam cuidado. A sessão é adaptada e a comunicação pode continuar durante todo o atendimento.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "A duração depende da modalidade e da disponibilidade. Os tempos e formatos comerciais serão informados no contato, sem exigir que você escolha uma técnica previamente.",
  },
  {
    question: "Preciso levar alguma coisa?",
    answer:
      "As orientações de preparo variam conforme o formato do atendimento e são informadas antes da sessão. Em geral, vale usar roupas confortáveis e comunicar qualquer condição relevante.",
  },
  {
    question: "A massoterapia pode causar desconforto?",
    answer:
      "Algumas abordagens podem gerar sensação de pressão ou sensibilidade, mas intensidade não é sinônimo de qualidade. Você pode pedir ajustes ou interromper qualquer manobra.",
  },
  {
    question: "Existem contraindicações?",
    answer:
      "Sim. Febre, infecções, lesões recentes, suspeita de trombose e algumas condições de saúde exigem adiamento ou avaliação profissional. Informe seu contexto antes da sessão.",
  },
  {
    question: "Onde acontece o atendimento?",
    answer:
      "O atendimento é realizado em Curitiba. Informações específicas de local e disponibilidade são fornecidas pelo canal oficial, sem exposição de endereço residencial no site.",
  },
  {
    question: "Massoterapia substitui atendimento médico?",
    answer:
      "Não. Massoterapia não realiza diagnóstico e não substitui acompanhamento médico, fisioterapêutico, psicológico ou de outro profissional de saúde.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Cleverson Batista de Souza",
  alternateName: "Clever Souza",
  url: `${SITE_URL}/sobre`,
  description:
    "Cleverson Batista de Souza, apresentado no site oficial Clever Souza.",
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Clever Souza",
  alternateName: "Site oficial de Cleverson Batista de Souza",
  url: SITE_URL,
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Cleverson Batista de Souza",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: "Clever Souza",
  url: SITE_URL,
  description:
    "Site oficial de Clever Souza, identidade de Cleverson Batista de Souza, em Curitiba, com informações, conteúdos e a área de Massoterapia.",
  inLanguage: "pt-BR",
  isPartOf: { "@type": "WebSite", "@id": WEBSITE_ID },
  about: { "@type": "Person", "@id": PERSON_ID },
};

export function HomePage() {
  return (
    <PageShell active="/">
      <JsonLd value={personSchema} />
      <JsonLd value={websiteSchema} />
      <JsonLd value={homePageSchema} />
      <section className="hero brand-hero">
        <div className="hero-copy">
          <p className="eyebrow">Site oficial</p>
          <h1>Clever Souza</h1>
          <p className="brand-identity">Cleverson Batista de Souza</p>
          <p className="brand-location">Curitiba · Paraná · Brasil</p>
          <p className="brand-summary">
            Informações, conteúdos e a área Clever Souza Massoterapia,
            reunidos no espaço oficial de Cleverson Batista de Souza.
          </p>
        </div>
        <BrandHeroVisual />
      </section>

      <nav className="section home-quick-links" aria-label="Acessos principais">
        <Link href="/massoterapia">
          <span>Massoterapia</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/sobre">
          <span>Sobre</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/contato">
          <span>Contato</span>
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </PageShell>
  );
}

function PageHero({
  eyebrow,
  title,
  lead,
  actions,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
      {actions && <div className="button-row">{actions}</div>}
    </section>
  );
}

function HealthNote() {
  return (
    <aside className="health-note">
      <strong>Informação importante</strong>
      <p>
        Massoterapia é uma prática de cuidado e bem-estar. Não realiza
        diagnóstico e não substitui atendimento médico, fisioterapêutico,
        psicológico ou de outro profissional habilitado.
      </p>
      <a href="/aviso-de-saude">Leia o Aviso de Saúde</a>
    </aside>
  );
}

export function MassotherapyPage() {
  const pageFaq = [
    {
      question: "Qual Protocolo Clever devo escolher?",
      answer:
        "Você não precisa decidir sozinho. O ponto de partida é explicar o que procura, suas preferências, rotina e limites. O protocolo e os recursos que farão parte da sessão podem ser definidos depois dessa conversa.",
    },
    homeFaq[1],
    homeFaq[4],
    homeFaq[5],
    homeFaq[7],
  ];

  return (
    <PageShell
      active="/massoterapia"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Massoterapia" },
      ]}
    >
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Massoterapia em Curitiba",
          serviceType: "Massoterapia",
          url: `${SITE_URL}/massoterapia`,
          provider: {
            "@type": "Person",
            "@id": PERSON_ID,
            name: "Cleverson Batista de Souza",
            alternateName: "Clever Souza",
            url: `${SITE_URL}/sobre`,
          },
          areaServed: {
            "@type": "City",
            name: "Curitiba",
            containedInPlace: { "@type": "State", name: "Paraná" },
          },
          description:
            "Protocolos Clever de massoterapia em Curitiba, adaptados ao objetivo relatado, às preferências e aos cuidados necessários.",
        }}
      />
      <section className="massotherapy-brand-hero">
        <div className="massotherapy-brand-copy">
          <p className="eyebrow">Massoterapia em Curitiba</p>
          <h1>Cuidado corporal com clareza, escuta e adaptação</h1>
          <p>
            Conheça os Protocolos Clever, entenda como uma sessão funciona e
            veja os cuidados necessários antes do primeiro contato — sem
            promessas e sem autodiagnóstico.
          </p>
          <div className="button-row">
            <WhatsAppCta location="massotherapy_hero" />
            <a className="button button-secondary" href="#protocolos">
              Conhecer os protocolos
            </a>
          </div>
        </div>
        <div className="massotherapy-brand-portrait">
          <img
            src="/massoterapia/portrait/clever-souza-jaleco.webp"
            alt="Clever Souza usando jaleco branco"
            width="1024"
            height="1536"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="section massotherapy-summary">
        <div>
          <p className="eyebrow">Atendimento</p>
          <h2>Massoterapia com Clever Souza</h2>
        </div>
        <p>
          O atendimento considera os objetivos relatados, as preferências, os
          limites e os cuidados necessários para definir o protocolo e adaptar
          cada etapa da sessão.
        </p>
      </section>

      <section className="section section-soft protocol-section" id="protocolos">
        <SectionHeading
          eyebrow="Protocolos Clever"
          title="Cinco experiências, uma escolha orientada"
          text="Os protocolos organizam a experiência de acordo com o momento, as preferências e os cuidados necessários. Técnicas e recursos podem ser adaptados ao longo da sessão."
        />
        <ProtocolCarousel />
        <div className="section-action protocol-editorial-link">
          <Link
            className="text-link"
            href="/massoterapia/conteudo"
          >
            Conhecer técnicas, cuidados e conteúdos educativos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section process-section" id="como-funciona">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato à sessão"
          text="O processo prioriza comunicação, adaptação e segurança."
        />
        <ol className="process-list">
          {[
            ["Explique o que procura", "Conte seu objetivo geral sem precisar escolher um protocolo sozinho."],
            ["Converse sobre cuidados", "Preferências, limites e situações relevantes são considerados."],
            ["Defina o protocolo", "Formato, etapas e intensidade inicial são combinados."],
            ["Ajuste durante a sessão", "Pressão, ritmo e regiões podem ser adaptados a qualquer momento."],
          ].map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="article-layout section">
        <article className="prose">
          <h2>O que é massoterapia?</h2>
          <p>
            Massoterapia é um conjunto de técnicas manuais aplicadas aos tecidos
            do corpo com objetivos como relaxamento, conforto, percepção
            corporal e manejo de tensões. Diferentes abordagens utilizam ritmos,
            pressões, mobilizações ou alongamentos variados.
          </p>
          <p>
            A resposta não é igual para todas as pessoas. A literatura
            científica reúne resultados promissores para algumas situações, mas
            a qualidade da evidência varia e muitos efeitos observados são de
            curto prazo. Por isso, uma comunicação responsável evita transformar
            possibilidades em garantias.
          </p>

          <h2>Como uma sessão pode funcionar</h2>
          <ol>
            <li>Conversa breve sobre objetivo, preferências e contexto.</li>
            <li>Verificação de situações que exijam cuidado ou adiamento.</li>
            <li>Definição da abordagem e da intensidade inicial.</li>
            <li>Realização da sessão com comunicação aberta.</li>
            <li>Orientações gerais quando forem adequadas.</li>
          </ol>

          <h2>Possíveis objetivos do atendimento</h2>
          <p>
            Uma sessão pode buscar relaxamento, diminuição da sensação de
            rigidez, conforto após esforço, pausa de autocuidado ou percepção
            corporal. Esses objetivos são diferentes de diagnóstico,
            reabilitação clínica ou tratamento de doenças.
          </p>

          <h2>Personalização e escolha do protocolo</h2>
          <p>
            O protocolo organiza a experiência, mas não torna a sessão rígida.
            Intensidade, ritmo, áreas trabalhadas, posição, tempo e tolerância
            individual também importam. Quando necessário, recursos de mais de
            uma técnica podem ser combinados dentro do escopo profissional.
          </p>

          <h2 id="cuidados-gerais">Cuidados e limitações</h2>
          <p>
            Febre, infecções, lesões recentes, alterações de pele, suspeita de
            trombose, cirurgias recentes, gestação e algumas condições clínicas
            pedem avaliação específica. Sintomas intensos, persistentes,
            progressivos ou acompanhados de sinais preocupantes devem ser
            avaliados por profissional de saúde.
          </p>

          <h2>Fontes consultadas</h2>
          <ul className="references">
            <li>
              <a
                href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know"
                target="_blank"
                rel="noreferrer"
              >
                National Center for Complementary and Integrative Health —
                Massage Therapy: What You Need To Know
              </a>
            </li>
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39008297/"
                target="_blank"
                rel="noreferrer"
              >
                JAMA Network Open, 2024 — Use of Massage Therapy for Pain,
                2018–2023
              </a>
            </li>
          </ul>
        </article>
        <aside className="article-aside">
          <HealthNote />
          <div className="aside-card">
            <strong>Próximo passo</strong>
            <p>
              Compare os cinco Protocolos Clever e veja qual experiência combina
              melhor com o momento atual.
            </p>
            <a href="#protocolos">Explorar os protocolos</a>
          </div>
        </aside>
      </section>

      <section className="section section-soft faq-section">
        <SectionHeading title="Perguntas sobre massoterapia" />
        <Faq items={pageFaq} />
      </section>
      <section className="section massotherapy-content-callout">
        <SectionHeading
          eyebrow="Conteúdo responsável"
          title="Pesquise antes de escolher"
          text="Guias explicam técnicas, funcionamento das sessões, evidências, limites e cuidados."
        />
        <Link
          className="button button-secondary"
          href="/massoterapia/conteudo"
        >
          Ver conteúdos de massoterapia
        </Link>
      </section>
      <section className="section massotherapy-instagram">
        <div>
          <p className="eyebrow">Rede social</p>
          <h2>Acompanhe a Clever Massoterapia</h2>
        </div>
        <a
          className="button button-secondary"
          href={MASSOTHERAPY_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          data-event="click_massotherapy_instagram"
          data-social="instagram_massotherapy"
        >
          Instagram da Clever Massoterapia
        </a>
      </section>
      <FinalCta
        title="Converse antes de escolher o protocolo"
        text="Tire dúvidas e explique o que procura. O protocolo e as adaptações da sessão podem ser definidos com mais clareza a partir dessa conversa."
      />
    </PageShell>
  );
}

export function LocalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Massoterapia em Curitiba",
    provider: {
      "@type": "Person",
      name: "Cleverson Batista de Souza",
      alternateName: "Clever Souza",
    },
    areaServed: {
      "@type": "City",
      name: "Curitiba",
      containedInPlace: { "@type": "State", name: "Paraná" },
    },
    serviceType: "Massoterapia",
    url: `${SITE_URL}/massoterapia-curitiba`,
    description:
      "Atendimento de massoterapia em Curitiba com abordagem personalizada e foco em cuidado corporal, relaxamento e bem-estar.",
  };

  return (
    <PageShell
      active="/massoterapia"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Massoterapia em Curitiba" },
      ]}
    >
      <JsonLd value={schema} />
      <PageHero
        eyebrow="Atendimento local"
        title="Massoterapia em Curitiba com atendimento personalizado"
        lead="Cuidado corporal para quem busca relaxamento, conforto e uma abordagem adaptada à própria rotina — sem precisar escolher uma técnica antes de conversar."
        actions={
          <>
            <WhatsAppCta location="local_hero" />
            <a className="button button-secondary" href="/servicos">
              Ver atendimentos
            </a>
          </>
        }
      />

      <section className="section local-overview">
        <div>
          <p className="eyebrow">Clever Souza</p>
          <h2>Um atendimento que começa pela escuta</h2>
          <p>
            Cleverson Batista de Souza oferece massoterapia em Curitiba,
            combinando diferentes recursos manuais conforme o objetivo relatado,
            as preferências, o tempo disponível e os cuidados necessários.
          </p>
          <p>
            A proposta não é fazer o visitante adivinhar qual técnica precisa.
            Primeiro vem a conversa; depois, a escolha da abordagem.
          </p>
        </div>
        <div className="location-card">
          <span className="location-pin" aria-hidden="true">PR</span>
          <p>Localização profissional</p>
          <strong>Curitiba, Paraná</strong>
          <small>
            Endereço específico e áreas de atendimento são informados apenas
            quando confirmados no contato.
          </small>
        </div>
      </section>

      <section className="section section-soft">
        <SectionHeading
          eyebrow="Serviços"
          title="Atendimentos para diferentes objetivos"
          text="Relaxamento, tensões, atividade física, pausas rápidas e técnicas complementares podem ser considerados conforme cada situação."
        />
        <ServiceCards limit={6} />
      </section>

      <section className="section section-split">
        <div>
          <p className="eyebrow">Antes de agendar</p>
          <h2>Informações úteis para uma conversa objetiva</h2>
          <p>
            Você pode dizer o que motivou a busca, quais regiões prefere
            priorizar, se pratica atividade física e quais são seus limites. Não
            envie diagnóstico, medicamentos ou histórico clínico detalhado por
            mensagem inicial.
          </p>
        </div>
        <ul className="check-list">
          <li>Objetivo geral do atendimento</li>
          <li>Preferência por pressão mais leve ou intensa</li>
          <li>Tempo disponível</li>
          <li>Áreas sensíveis ou que devem ser evitadas</li>
          <li>Condições relevantes para a segurança</li>
        </ul>
      </section>

      <section className="section faq-section">
        <SectionHeading
          eyebrow="Dúvidas locais"
          title="Antes do primeiro contato"
        />
        <Faq
          items={[
            homeFaq[0],
            homeFaq[1],
            homeFaq[2],
            homeFaq[6],
            homeFaq[5],
            homeFaq[7],
          ]}
        />
      </section>
      <FinalCta />
    </PageShell>
  );
}

export function ServicesPage() {
  const grouped = services.reduce<Record<string, typeof services>>(
    (acc, service) => {
      acc[service.group] ??= [];
      acc[service.group].push(service);
      return acc;
    },
    {},
  );

  return (
    <PageShell
      active="/massoterapia"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
      ]}
    >
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Serviços de massoterapia",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.name,
              description: service.summary,
              provider: {
                "@type": "Person",
                name: "Cleverson Batista de Souza",
              },
              areaServed: "Curitiba, Paraná",
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Serviços"
        title="Atendimentos adaptados ao que você procura"
        lead="Objetivos, preferências, rotina, atividade física, tempo disponível e contraindicações ajudam a definir a abordagem. Você não precisa escolher uma técnica sozinho."
        actions={<WhatsAppCta location="services_hero" />}
      />

      <section className="section service-guide">
        <div className="guide-card">
          <span>01</span>
          <h2>Conte o objetivo</h2>
          <p>Relaxar, cuidar de tensões ou buscar conforto após esforços.</p>
        </div>
        <div className="guide-card">
          <span>02</span>
          <h2>Informe preferências</h2>
          <p>Pressão, ritmo, áreas prioritárias e limites pessoais.</p>
        </div>
        <div className="guide-card">
          <span>03</span>
          <h2>Defina em conjunto</h2>
          <p>A técnica é uma decisão orientada, não um teste para o cliente.</p>
        </div>
      </section>

      {Object.entries(grouped).map(([group, groupServices], groupIndex) => (
        <section
          className={`section service-group ${groupIndex % 2 ? "section-soft" : ""}`}
          key={group}
        >
          <SectionHeading eyebrow={`0${groupIndex + 1}`} title={group} />
          <div className="service-detail-grid">
            {groupServices.map((service) => (
              <article id={service.id} key={service.id}>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <dl>
                  <div>
                    <dt>Objetivo geral</dt>
                    <dd>{service.objective}</dd>
                  </div>
                  <div>
                    <dt>Como é definido</dt>
                    <dd>
                      Após conversa sobre preferências, contexto, limites e
                      cuidados.
                    </dd>
                  </div>
                  <div>
                    <dt>Atenção</dt>
                    <dd>
                      A adequação depende de cada pessoa e de possíveis
                      contraindicações.
                    </dd>
                  </div>
                </dl>
                <WhatsAppCta
                  location={`service_${service.id}`}
                  label="Perguntar sobre este atendimento"
                />
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <HealthNote />
      </section>
      <FinalCta />
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell
      active="/sobre"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Sobre" },
      ]}
    >
      <JsonLd value={personSchema} />
      <section className="about-hero brand-about-hero">
        <div className="about-brand-mark" aria-hidden="true">
          <img
            src="/brand/logo-vertical.svg"
            alt=""
            width="508"
            height="250"
          />
        </div>
        <div>
          <p className="eyebrow">Sobre</p>
          <h1>Clever Souza</h1>
          <p className="about-role">Cleverson Batista de Souza</p>
          <p className="hero-lead">
            Este é o espaço oficial que reúne minha atuação, os conteúdos
            publicados e os caminhos para entrar em contato.
          </p>
          <a
            className="button"
            href="/contato"
            data-event="click_contact"
            data-location="about_hero"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <section className="section section-split">
        <div>
          <p className="eyebrow">Informações confirmadas</p>
          <h2>Sobre Clever Souza</h2>
          <p>
            Clever Souza é o nome apresentado neste site por Cleverson Batista
            de Souza, em Curitiba, Paraná, Brasil. O site foi estruturado para
            crescer com novos projetos sem perder clareza entre cada área.
          </p>
        </div>
        <div className="values-panel">
          <h2>Neste site</h2>
          <ul>
            <li><strong>Sobre</strong><span>Identidade e informações confirmadas.</span></li>
            <li><strong>Massoterapia</strong><span>Área profissional com identidade e conteúdo próprios.</span></li>
            <li><strong>Contato</strong><span>Canal oficial e direto pelo WhatsApp.</span></li>
          </ul>
        </div>
      </section>

      <section className="section section-soft axis-section">
        <div className="axis-symbol" aria-hidden="true">
          <img
            src="/brand/simbolo-clever-souza.svg"
            alt=""
            width="90"
            height="100"
          />
        </div>
        <div>
          <p className="eyebrow">Eixo Vivo</p>
          <h2>Identidade simples, aberta e expansível</h2>
          <p>
            O símbolo oficial combina um C estrutural externo e um S interno em
            movimento. Essa leitura é exclusivamente de design e orienta uma
            identidade precisa e versátil.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

export function ContentsPage() {
  return (
    <PageShell
      active="/conteudos"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Conteúdos" },
      ]}
    >
      <PageHero
        eyebrow="Conteúdos Clever Souza"
        title="Conteúdos publicados"
        lead="Artigos e materiais disponíveis sobre massoterapia, saúde corporal e bem-estar."
      />
      <section className="section">
        <div className="editorial-nucleus">
          <span>Núcleo ativo</span>
          <strong>Massoterapia</strong>
          <p>
            Novas categorias serão incluídas somente quando houver conteúdo
            próprio e consistente.
          </p>
        </div>
        <div className="content-categories" aria-label="Temas disponíveis">
          <span>Massoterapia</span>
          <span>Saúde corporal</span>
          <span>Bem-estar</span>
        </div>
        <ArticleCards />
      </section>
      <section className="section editorial-note">
        <div>
          <p className="eyebrow">Política editorial</p>
          <h2>Clareza, contexto e limites</h2>
        </div>
        <p>
          Afirmações sobre saúde são tratadas com cautela e acompanhadas de
          referências quando necessário. Os textos têm finalidade educativa e
          não substituem orientação individual.
        </p>
        <a href="/aviso-de-saude">Conhecer o Aviso de Saúde</a>
      </section>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell
      active="/contato"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Contato" },
      ]}
    >
      <PageHero
        eyebrow="Contato"
        title="Entre em contato"
        lead="Use o canal oficial abaixo para falar com Clever Souza."
      />
      <section className="section contact-direct">
        <article className="contact-direct-card">
          <p className="eyebrow">WhatsApp</p>
          <h2>(41) 99205-1173</h2>
          <p>O link abre o WhatsApp no aplicativo ou no navegador.</p>
          <a
            className="button"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_contact"
            data-channel="whatsapp"
            data-location="contact_page"
          >
            Falar pelo WhatsApp
          </a>
          <div className="contact-guidance">
            <h3>Para uma conversa mais objetiva</h3>
            <ul>
              <li>Diga brevemente o assunto do contato.</li>
              <li>Se for sobre massoterapia, informe o que procura e sua disponibilidade.</li>
              <li>Evite enviar dados de saúde sensíveis na primeira mensagem.</li>
            </ul>
          </div>
        </article>
      </section>
    </PageShell>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      active="/politica-de-privacidade"
      title="Política de Privacidade"
      updated="Atualizada em 30 de julho de 2026"
    >
      <p>
        Esta Política explica como o site oficial de Cleverson Batista de Souza
        trata dados pessoais. A coleta deve ser limitada ao necessário para
        atender solicitações, manter a segurança e compreender o funcionamento
        do site.
      </p>
      <h2>1. Responsável pelo tratamento</h2>
      <p>
        O responsável é Cleverson Batista de Souza, apresentado profissionalmente
        como Clever Souza, em Curitiba, Paraná. Solicitações relacionadas à
        privacidade podem ser feitas pelos canais oficiais da página de contato.
      </p>
      <h2>2. Dados que podem ser tratados</h2>
      <p>
        Ao acessar o site, a infraestrutura de hospedagem pode registrar dados
        técnicos, como endereço IP, data, horário, navegador, páginas acessadas e
        informações de segurança. Ao iniciar contato por serviço externo, os
        dados enviados serão tratados também conforme as regras desse serviço.
      </p>
      <h2>3. Finalidades</h2>
      <ul>
        <li>responder dúvidas e solicitações;</li>
        <li>organizar o contato sobre atendimentos;</li>
        <li>prevenir abuso, fraude e incidentes de segurança;</li>
        <li>avaliar desempenho e uso do site, quando analytics for ativado;</li>
        <li>cumprir obrigações legais e resguardar direitos.</li>
      </ul>
      <h2>4. Formulários e dados de saúde</h2>
      <p>
        Esta versão não utiliza formulário público para coletar histórico
        clínico, medicamentos, documentos ou dados médicos detalhados. Não envie
        essas informações na mensagem inicial.
      </p>
      <h2>5. Cookies e mensuração</h2>
      <p>
        Não há ferramenta de publicidade ou analytics de terceiros ativada nesta
        versão. Cookies estritamente necessários podem ser utilizados pela
        infraestrutura para segurança e funcionamento. Se ferramentas
        não essenciais forem habilitadas, esta Política e os controles de
        preferência serão atualizados antes da coleta.
      </p>
      <h2>6. Compartilhamento e operadores</h2>
      <p>
        Dados técnicos podem ser processados por provedores de hospedagem e
        segurança. Dados de contato enviados por WhatsApp ficam sujeitos também
        aos termos e políticas da plataforma. Não há venda de dados pessoais.
      </p>
      <h2>7. Retenção e segurança</h2>
      <p>
        Os dados devem ser mantidos apenas pelo período necessário às finalidades
        informadas, obrigações legais ou exercício regular de direitos. Medidas
        técnicas e organizacionais razoáveis são adotadas, mas nenhum sistema é
        totalmente imune a riscos.
      </p>
      <h2>8. Direitos do titular</h2>
      <p>
        Nos termos aplicáveis da LGPD, o titular pode solicitar confirmação de
        tratamento, acesso, correção, eliminação quando cabível, informações
        sobre compartilhamento e revisão de consentimento.
      </p>
      <h2>9. Atualizações</h2>
      <p>
        Esta Política pode ser atualizada para refletir mudanças no site, nas
        ferramentas utilizadas ou na legislação. A data de revisão será indicada
        no início do documento.
      </p>
      <p className="legal-reference">
        Referências:{" "}
        <a
          href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm"
          target="_blank"
          rel="noreferrer"
        >
          Lei Geral de Proteção de Dados
        </a>{" "}
        e{" "}
        <a
          href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais"
          target="_blank"
          rel="noreferrer"
        >
          guia de cookies da ANPD
        </a>
        .
      </p>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      active="/termos-de-uso"
      title="Termos de Uso"
      updated="Atualizados em 30 de julho de 2026"
    >
      <p>
        Estes Termos regulam o uso do site www.cleversouza.com. Ao navegar, o
        visitante concorda em utilizar o conteúdo de forma lícita e responsável.
      </p>
      <h2>1. Finalidade do site</h2>
      <p>
        O site apresenta informações, conteúdos e serviços publicados por Clever
        Souza.
      </p>
      <h2>2. Natureza informativa</h2>
      <p>
        Os conteúdos não constituem diagnóstico, prescrição, consulta médica ou
        promessa de resultado. Cada pessoa pode responder de maneira diferente,
        e a adequação de um atendimento depende do contexto individual.
      </p>
      <h2>3. Agendamento e condições comerciais</h2>
      <p>
        Disponibilidade, local, duração, valores, formas de pagamento e demais
        condições somente são válidos quando informados e confirmados diretamente
        pelos canais oficiais. O conteúdo geral do site não constitui reserva.
      </p>
      <h2>4. Propriedade intelectual</h2>
      <p>
        Textos, identidade visual e materiais originais são protegidos pela
        legislação aplicável. É permitida a citação breve com crédito e link;
        reprodução integral, uso comercial ou alteração exigem autorização.
      </p>
      <h2>5. Links externos</h2>
      <p>
        O site pode indicar fontes e serviços de terceiros. Cada ambiente possui
        termos e práticas próprias, e sua disponibilidade não é controlada por
        este site.
      </p>
      <h2>6. Uso indevido</h2>
      <p>
        É proibido tentar comprometer a segurança, automatizar acessos abusivos,
        introduzir código malicioso, coletar dados sem autorização ou utilizar o
        site para fins ilícitos.
      </p>
      <h2>7. Limitação de responsabilidade</h2>
      <p>
        O site busca manter informações corretas e acessíveis, mas pode passar
        por atualizações ou indisponibilidades. Decisões de saúde não devem ser
        tomadas exclusivamente com base no conteúdo publicado.
      </p>
      <h2>8. Alterações</h2>
      <p>
        Os Termos podem ser revisados para refletir mudanças no site ou em
        requisitos legais. A versão vigente será a publicada nesta página.
      </p>
    </LegalPage>
  );
}

export function HealthNoticePage() {
  return (
    <LegalPage
      active="/aviso-de-saude"
      title="Aviso de Saúde"
      updated="Atualizado em 30 de julho de 2026"
    >
      <p>
        O conteúdo deste site é educativo e apresenta informações gerais sobre
        massoterapia, cuidado corporal e bem-estar. Ele não substitui avaliação,
        diagnóstico, tratamento ou acompanhamento individual.
      </p>
      <h2>Massoterapia não é diagnóstico</h2>
      <p>
        O massoterapeuta não deve diagnosticar doenças nem prometer cura. Uma
        sessão pode buscar relaxamento, conforto e manejo de tensões percebidas,
        mas não substitui atendimento médico, fisioterapêutico, psicológico ou
        de outro profissional habilitado.
      </p>
      <h2>Quando procurar avaliação adequada</h2>
      <p>
        Sintomas intensos, persistentes, progressivos, súbitos ou acompanhados de
        febre, perda de força, alteração de sensibilidade, dificuldade
        respiratória, dor no peito, trauma importante ou outros sinais
        preocupantes precisam de avaliação de saúde. Em situação de urgência,
        procure o serviço apropriado.
      </p>
      <h2>Situações que exigem cautela</h2>
      <p>
        Febre, infecção, feridas, inflamação aguda, lesões recentes, cirurgia
        recente, suspeita de trombose, alterações de coagulação, gestação,
        fragilidade óssea e condições cardiovasculares podem exigir adiamento,
        adaptação ou autorização de profissional de saúde.
      </p>
      <h2>Resposta individual</h2>
      <p>
        Benefícios percebidos, sensibilidade e tolerância variam. Informe
        desconforto durante a sessão e não aceite pressão acima do que considera
        seguro. Intensidade maior não representa necessariamente atendimento
        melhor.
      </p>
      <h2>Fontes de referência</h2>
      <ul>
        <li>
          <a
            href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know"
            target="_blank"
            rel="noreferrer"
          >
            NCCIH — Massage Therapy: What You Need To Know
          </a>
        </li>
        <li>
          <a
            href="https://www.nccih.nih.gov/health/tips/things-to-know-about-massage-therapy-for-health-purposes"
            target="_blank"
            rel="noreferrer"
          >
            NCCIH — 6 Things To Know About Massage Therapy
          </a>
        </li>
      </ul>
    </LegalPage>
  );
}

function LegalPage({
  active,
  title,
  updated,
  children,
}: {
  active: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <PageShell
      active={active}
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: title },
      ]}
    >
      <section className="legal-header">
        <p className="eyebrow">Documento institucional</p>
        <h1>{title}</h1>
        <p>{updated}</p>
      </section>
      <section className="section legal-content prose">{children}</section>
    </PageShell>
  );
}

const articleBodies: Record<string, ReactNode> = {
  "o-que-e-massoterapia": (
    <>
      <p>
        Massoterapia é um conjunto de técnicas manuais usadas com objetivos de
        cuidado corporal, relaxamento, conforto e percepção do corpo. O termo
        reúne abordagens diferentes: algumas utilizam movimentos contínuos;
        outras trabalham pressões, mobilizações ou alongamentos.
      </p>
      <h2>O que acontece antes da técnica</h2>
      <p>
        Uma sessão responsável começa com conversa. O profissional precisa
        entender o objetivo geral, as preferências de pressão, as áreas sensíveis
        e situações que possam exigir adaptação ou adiamento. Essa etapa não é
        diagnóstico; é uma triagem de segurança e de expectativas.
      </p>
      <h2>Quais objetivos fazem sentido</h2>
      <p>
        Relaxamento, pausa de autocuidado, conforto após uma rotina intensa e
        redução da sensação de tensão são objetivos possíveis. Estudos
        científicos também investigam massagem para diferentes tipos de dor, mas
        os resultados variam, a qualidade da evidência nem sempre é alta e muitos
        benefícios observados são de curto prazo.
      </p>
      <h2>Por que o atendimento é personalizado</h2>
      <p>
        Duas pessoas com a mesma queixa podem preferir intensidades, posições e
        ritmos diferentes. Por isso, o nome da técnica não deve ser a única
        decisão. Tempo disponível, rotina, atividade física, tolerância e
        contraindicações também influenciam.
      </p>
      <h2>O que a massoterapia não faz</h2>
      <p>
        Massoterapia não substitui diagnóstico, tratamento médico ou
        reabilitação clínica. Sintomas persistentes, fortes ou progressivos
        precisam de avaliação adequada. Uma boa comunicação profissional deixa
        esses limites claros.
      </p>
    </>
  ),
  "primeira-sessao-de-massoterapia": (
    <>
      <p>
        A primeira sessão não precisa começar com uma escolha técnica perfeita.
        Ela começa com informações simples: o que motivou o contato, que tipo de
        experiência você espera e quais limites devem ser respeitados.
      </p>
      <h2>A conversa inicial</h2>
      <p>
        O profissional pode perguntar sobre objetivo geral, áreas sensíveis,
        cirurgias ou lesões recentes, febre, alterações de pele e outras
        situações relevantes. Não é necessário enviar histórico clínico completo
        por mensagem; informações delicadas podem ser conversadas no momento
        adequado e com privacidade.
      </p>
      <h2>Definição da abordagem</h2>
      <p>
        Com base nessa conversa, são definidos regiões a trabalhar, intensidade,
        ritmo e recursos manuais. Se algo estiver desconfortável, comunicar não
        atrapalha a sessão: faz parte dela. Você pode pedir mudança de pressão,
        posição ou interrupção.
      </p>
      <h2>Como se preparar</h2>
      <ul>
        <li>chegue com antecedência suficiente para não começar com pressa;</li>
        <li>use roupas confortáveis conforme a orientação recebida;</li>
        <li>evite refeição muito pesada imediatamente antes;</li>
        <li>informe mudanças recentes no seu estado de saúde;</li>
        <li>leve suas dúvidas e preferências.</li>
      </ul>
      <h2>Depois da sessão</h2>
      <p>
        A resposta varia. Algumas pessoas relatam relaxamento; outras podem notar
        sensibilidade temporária. Se surgir reação intensa, persistente ou
        preocupante, procure orientação de saúde. Não trate uma reação como
        prova de que a técnica “funcionou”.
      </p>
    </>
  ),
  "massagem-relaxante-e-terapeutica": (
    <>
      <p>
        Os nomes “relaxante” e “terapêutica” ajudam a organizar o objetivo do
        atendimento, mas não criam uma fronteira absoluta. Ritmo, pressão e áreas
        trabalhadas podem variar em ambas.
      </p>
      <h2>Massagem relaxante</h2>
      <p>
        Geralmente prioriza continuidade, ritmo confortável e uma experiência
        global de pausa. Pode fazer sentido para quem busca relaxamento,
        autocuidado e diminuição da sensação de tensão da rotina.
      </p>
      <h2>Massagem terapêutica</h2>
      <p>
        Costuma ser mais direcionada a regiões relatadas e pode combinar recursos
        manuais específicos. O termo, porém, não significa diagnóstico ou
        tratamento de doenças. “Terapêutica” descreve a intenção de cuidado, não
        uma promessa clínica.
      </p>
      <h2>Pressão forte não define qualidade</h2>
      <p>
        Uma abordagem direcionada não precisa ser dolorosa. A intensidade deve
        respeitar tolerância, objetivo e contexto. Dor aguda, defesa muscular ou
        desconforto que aumenta são motivos para ajustar ou interromper.
      </p>
      <h2>Como escolher</h2>
      <p>
        Em vez de perguntar apenas “qual massagem é melhor?”, explique o que
        deseja sentir ao final, quais áreas incomodam e qual intensidade costuma
        preferir. A escolha pode incluir elementos das duas abordagens.
      </p>
    </>
  ),
  "cuidados-e-contraindicacoes": (
    <>
      <p>
        Massagem costuma apresentar baixo risco quando realizada de forma
        adequada, mas “baixo risco” não significa ausência de cuidado. A segurança
        depende da condição da pessoa, da região trabalhada, da intensidade e da
        formação de quem atende.
      </p>
      <h2>Antes da sessão</h2>
      <p>
        Informe febre, infecção, feridas, lesão recente, cirurgia, suspeita ou
        histórico de trombose, alterações de coagulação, gestação, fragilidade
        óssea e condições cardiovasculares relevantes. Essa lista não é completa;
        quando houver dúvida, a orientação de um profissional de saúde é o
        caminho mais seguro.
      </p>
      <h2>Quando adiar</h2>
      <p>
        Estados febris, infecções ativas, lesões agudas sem avaliação, feridas na
        área e mal-estar importante geralmente justificam adiamento. Sinais
        súbitos ou preocupantes não devem ser “testados” com massagem.
      </p>
      <h2>Durante o atendimento</h2>
      <p>
        Avise se houver dor aguda, formigamento, perda de sensibilidade, tontura,
        falta de ar ou sensação incomum. Consentimento é contínuo: você pode
        mudar de ideia sobre região, intensidade ou continuidade.
      </p>
      <h2>Depois da massagem</h2>
      <p>
        Sensibilidade leve pode acontecer, mas reação forte, progressiva ou
        persistente merece atenção. Procure avaliação adequada se houver piora
        significativa, inchaço importante, alteração de força ou qualquer sinal
        que gere preocupação.
      </p>
    </>
  ),
  "como-escolher-massoterapeuta-curitiba": (
    <>
      <p>
        Escolher um massoterapeuta envolve mais do que comparar preço ou procurar
        a técnica da moda. Segurança, comunicação e transparência ajudam a
        avaliar se o atendimento é adequado ao que você procura.
      </p>
      <h2>1. Observe a clareza da comunicação</h2>
      <p>
        Um profissional responsável explica o objetivo da abordagem, pergunta
        sobre cuidados relevantes e evita promessas. Desconfie de garantia de
        cura, diagnóstico improvisado ou pressão para abandonar tratamentos.
      </p>
      <h2>2. Verifique como a sessão é personalizada</h2>
      <p>
        Pergunte se pressão, áreas e posição podem ser ajustadas. A resposta deve
        considerar seus limites, não aplicar uma sequência rígida a todas as
        pessoas.
      </p>
      <h2>3. Avalie higiene e organização</h2>
      <p>
        Ambiente, materiais, roupas de trabalho e procedimentos de higiene fazem
        parte da qualidade. O profissional também deve preservar privacidade e
        explicar como informações pessoais são tratadas.
      </p>
      <h2>4. Confirme informações práticas</h2>
      <p>
        Antes de se deslocar, confirme local, duração, valor, forma de pagamento,
        política de atraso e orientações de preparo. Em Curitiba, considere
        acesso, tempo de trajeto e segurança do local.
      </p>
      <h2>5. Confie também na possibilidade de dizer não</h2>
      <p>
        Você deve poder recusar uma manobra, pedir mudança de pressão ou encerrar
        a sessão. Atendimento profissional não transforma desconforto em
        obrigação.
      </p>
    </>
  ),
};

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article || !articleBodies[slug]) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    inLanguage: "pt-BR",
    mainEntityOfPage: `${SITE_URL}/conteudos/${article.slug}`,
    author: {
      "@type": "Person",
      name: "Cleverson Batista de Souza",
      url: `${SITE_URL}/sobre`,
    },
    publisher: {
      "@type": "Person",
      name: "Cleverson Batista de Souza",
    },
  };

  return (
    <PageShell
      active="/conteudos"
      front="massotherapy"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: article.title },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className="article-page">
        <header className="article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          <div className="byline">
            <span className="byline-mark" aria-hidden="true">CS</span>
            <div>
              <a href="/sobre" rel="author">Cleverson Batista de Souza</a>
              <span>
                Publicado e atualizado em {article.updated} • {article.readingTime}
              </span>
            </div>
          </div>
        </header>
        <div className="article-body-grid">
          <div className="prose">
            {articleBodies[slug]}
            <h2>Fontes e limites</h2>
            <p>
              Este conteúdo foi elaborado para educação geral, com linguagem
              prudente e sem diagnóstico. As referências centrais são o{" "}
              <a
                href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know"
                target="_blank"
                rel="noreferrer"
              >
                guia do NCCIH sobre massoterapia
              </a>{" "}
              e a{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39008297/"
                target="_blank"
                rel="noreferrer"
              >
                revisão publicada em 2024 sobre massagem e dor
              </a>
              . Evidências e orientações podem mudar; sintomas precisam de
              avaliação individual quando apropriado.
            </p>
            <HealthNote />
          </div>
          <aside className="article-aside">
            <div className="aside-card sticky">
              <strong>Neste conteúdo</strong>
              <p>
                Informação educativa para ajudar você a conversar melhor com um
                profissional.
              </p>
              <a href="/massoterapia">Guia de massoterapia</a>
              <a href="/servicos">Conhecer serviços</a>
              <a href="/sobre">Sobre o autor</a>
            </div>
          </aside>
        </div>
      </article>
      <section className="section section-soft">
        <SectionHeading eyebrow="Continue lendo" title="Conteúdos relacionados" />
        <ArticleCards limit={3} />
      </section>
      <FinalCta />
    </PageShell>
  );
}

function FinalCta({
  title = "Converse antes de escolher a técnica",
  text = "Tire dúvidas e explique o que procura. O atendimento pode ser definido de forma mais simples e segura a partir dessa conversa.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="final-cta" id="contato-massoterapia">
      <div>
        <p className="eyebrow">Próximo passo</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <WhatsAppCta location="final_cta" />
    </section>
  );
}

export function NotFoundPage() {
  return (
    <PageShell active="">
      <section className="not-found">
        <p className="eyebrow">Erro 404</p>
        <h1>Esta página não foi encontrada</h1>
        <p>
          O endereço pode ter mudado ou não existir. Use os caminhos abaixo para
          continuar.
        </p>
        <div className="button-row">
          <Link className="button" href="/">Voltar ao início</Link>
          <Link className="button button-secondary" href="/massoterapia/conteudo">
            Ver conteúdos de massoterapia
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
