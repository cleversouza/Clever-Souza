/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { JsonLd, PageShell } from "../site";
import { B_VITAMIN_SUMMARIES } from "./b-vitamins";
import { NutrientLibraryOverview } from "./nutrient-library";
import { NutritionPublicationMeta } from "./publication-meta";
import { REMAINING_VITAMIN_SUMMARIES } from "./vitamins-dek";

const SITE_URL = "https://www.cleversouza.com";
const ARTICLE_PATH = "/nutricao/vitaminas/vitamina-a";
const VITAMIN_C_PATH = "/nutricao/vitaminas/vitamina-c";

const references = [
  {
    title: "Anvisa — Instrução Normativa nº 75/2020",
    url: "https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=9434&cod_modulo=310&numeroAto=00000075&orgao=DC%2FANVISA%2FMS&seqAto=000&tipo=INM&valorAno=2020",
    detail:
      "Anexos II, VIII e XXIII: VDR para rotulagem, referências por grupo populacional e fatores de conversão da vitamina A em µg de RAE.",
  },
  {
    title: "Anvisa — Rotulagem nutricional de alimentos embalados",
    url: "https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional",
    detail:
      "Página institucional sobre as regras brasileiras de rotulagem nutricional e sua aplicação.",
  },
  {
    title: "NIH Office of Dietary Supplements — Vitamin A and Carotenoids",
    url: "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/",
    detail:
      "Ficha técnica para profissionais: formas, funções, fontes, ingestões de referência, deficiência, toxicidade e interações.",
  },
  {
    title: "National Academies — Dietary Reference Intakes: Vitamin A",
    url: "https://www.nationalacademies.org/read/10026/chapter/6",
    detail:
      "Documento de referência para RDA, UL, equivalentes de atividade de retinol, absorção e funções fisiológicas.",
  },
  {
    title: "WHO — Vitamin A supplementation during pregnancy",
    url: "https://www.who.int/tools/elena/interventions/vitamina-pregnancy",
    detail:
      "Recomendação da OMS que restringe a suplementação na gravidez a contextos específicos de deficiência como problema grave de saúde pública.",
  },
];

const toc = [
  ["entenda", "O que é"],
  ["formas", "Formas da vitamina A"],
  ["funcoes", "Funções no organismo"],
  ["visao", "Vitamina A e visão"],
  ["fontes", "Fontes alimentares"],
  ["absorcao", "Absorção e biodisponibilidade"],
  ["necessidades", "Quanto precisamos?"],
  ["deficiencia", "Deficiência"],
  ["excesso", "Excesso e toxicidade"],
  ["gravidez", "Gravidez"],
  ["suplementacao", "Suplementação"],
  ["avaliacao", "Quando buscar avaliação"],
] as const;

export function NutritionHubPage() {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nutrição",
    description:
      "Biblioteca editorial sobre nutrientes, alimentação, composição nutricional e leitura responsável de informações de saúde.",
    url: `${SITE_URL}/nutricao`,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
  };

  return (
    <PageShell
      active="/nutricao"
      breadcrumb={[{ label: "Início", href: "/" }, { label: "Nutrição" }]}
    >
      <JsonLd value={collectionPage} />
      <section className="nutrition-hub-hero">
        <p className="eyebrow">Biblioteca Clever Souza</p>
        <h1>Nutrição, explicada com contexto</h1>
        <p>
          Uma área editorial para compreender nutrientes, alimentos, rótulos e
          suplementação sem transformar informação geral em prescrição.
        </p>
      </section>
      <section className="section nutrition-hub-entry" aria-labelledby="vitaminas-title">
        <div>
          <p className="eyebrow">Primeiro núcleo</p>
          <h2 id="vitaminas-title">Vitaminas</h2>
          <p>
            Consulte os guias de vitamina A, de todo o complexo B e das vitaminas
            C, D, E e K: formas, funções, fontes, necessidades, deficiência,
            excesso e uso responsável de suplementos.
          </p>
        </div>
        <Link className="button button-secondary" href="/nutricao/vitaminas">
          Explorar vitaminas
        </Link>
      </section>
      <NutrientLibraryOverview />
    </PageShell>
  );
}

export function VitaminsHubPage() {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vitaminas",
    description:
      "Guias editoriais sobre vitaminas, suas formas, fontes, funções e limites de segurança.",
    url: `${SITE_URL}/nutricao/vitaminas`,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
  };

  return (
    <PageShell
      active="/nutricao"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Nutrição", href: "/nutricao" },
        { label: "Vitaminas" },
      ]}
    >
      <JsonLd value={collectionPage} />
      <section className="nutrition-hub-hero nutrition-vitamins-hero">
        <p className="eyebrow">Nutrição · Vitaminas</p>
        <h1>Vitaminas sem atalhos ou promessas</h1>
        <p>
          Guias progressivos para entender o papel de cada vitamina, suas
          fontes e os cuidados que os números do rótulo não explicam sozinhos.
        </p>
      </section>
      <section className="section nutrition-guide-list" aria-label="Guias de vitaminas disponíveis">
        <article className="nutrition-featured-article" aria-labelledby="vitamina-a-title">
          <div className="nutrition-featured-copy">
            <p className="eyebrow">Guia disponível</p>
            <h2 id="vitamina-a-title">Vitamina A</h2>
            <p>
              Entenda retinol, retinal, ácido retinoico e carotenoides; compare o
              VDR brasileiro com referências individuais e reconheça por que
              excesso também exige cuidado.
            </p>
            <Link className="text-link" href={ARTICLE_PATH}>
              Ler o guia completo <span aria-hidden="true">→</span>
            </Link>
          </div>
          <img
            src="/nutricao/vitamina-a-fontes.webp"
            alt="Cenoura, abóbora, manga, folhas verde-escuras e ovo como exemplos de fontes alimentares relacionadas à vitamina A"
            width="1536"
            height="1024"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </article>
        <section className="nutrition-b-library" aria-labelledby="complexo-b-title">
          <div className="nutrition-b-library-heading">
            <div>
              <p className="eyebrow">Nova coleção</p>
              <h2 id="complexo-b-title">Vitaminas do complexo B</h2>
            </div>
            <p>
              Oito guias independentes para compreender nutrientes que trabalham em
              rede, mas têm funções, fontes e cuidados próprios.
            </p>
          </div>
          <div className="nutrition-b-index">
            {B_VITAMIN_SUMMARIES.map((guide) => (
              <article key={guide.key}>
                <span aria-hidden="true">{guide.key}</span>
                <div>
                  <h3>{guide.name}</h3>
                  <p>{guide.summary}</p>
                  <Link className="text-link" href={`/nutricao/vitaminas/${guide.slug}`}>
                    Ler o guia <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <article className="nutrition-featured-article nutrition-featured-article--reverse" aria-labelledby="vitamina-c-title">
          <img
            src="/nutricao/vitamina-c-fontes.webp"
            alt="Acerola, goiaba, laranja, kiwi, pimentão vermelho e brócolis como exemplos de fontes alimentares de vitamina C"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
          <div className="nutrition-featured-copy">
            <p className="eyebrow">Guia disponível</p>
            <h2 id="vitamina-c-title">Vitamina C</h2>
            <p>
              Compreenda ácido ascórbico, colágeno, absorção de ferro, fontes,
              perdas no preparo, resfriados e por que megadoses não são um atalho.
            </p>
            <Link className="text-link" href={VITAMIN_C_PATH}>
              Ler o guia completo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
        <section className="nutrition-vitamin-shelf" aria-labelledby="vitaminas-dek-title">
          <div className="nutrition-vitamin-shelf-heading">
            <div>
              <p className="eyebrow">Novos guias aprofundados</p>
              <h2 id="vitaminas-dek-title">Vitaminas D, E e K</h2>
            </div>
            <p>
              Três vitaminas lipossolúveis, três histórias diferentes sobre
              absorção, avaliação e segurança.
            </p>
          </div>
          <div className="nutrition-vitamin-card-grid">
            {REMAINING_VITAMIN_SUMMARIES.map((guide) => (
              <article className="nutrition-vitamin-card" key={guide.key}>
                <img
                  src={guide.image}
                  alt={guide.alt}
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span aria-hidden="true">{guide.key}</span>
                  <h3>{guide.name}</h3>
                  <p>{guide.summary}</p>
                  <Link className="text-link" href={`/nutricao/vitaminas/${guide.slug}`}>
                    Ler o guia <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}

function SourceTable() {
  return (
    <div
      className="nutrition-table-wrap"
      tabIndex={0}
      role="region"
      aria-label="Exemplos de fontes alimentares de vitamina A; deslize horizontalmente para ver todas as colunas"
    >
      <table className="nutrition-table">
        <caption>Exemplos de fontes alimentares e a forma predominante</caption>
        <thead>
          <tr>
            <th scope="col">Grupo</th>
            <th scope="col">Exemplos</th>
            <th scope="col">Forma predominante</th>
            <th scope="col">Leitura prática</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Órgãos</th>
            <td>Fígado e óleos de fígado de peixe</td>
            <td>Vitamina A pré-formada</td>
            <td>Podem concentrar quantidades muito altas; frequência e porção importam.</td>
          </tr>
          <tr>
            <th scope="row">Ovos, peixes e laticínios</th>
            <td>Gema, alguns peixes, leite e derivados</td>
            <td>Retinol e ésteres de retinila</td>
            <td>O teor varia com o alimento, a porção e eventual fortificação.</td>
          </tr>
          <tr>
            <th scope="row">Vegetais alaranjados</th>
            <td>Cenoura, abóbora e batata-doce</td>
            <td>Principalmente betacaroteno</td>
            <td>A matriz do alimento e o preparo influenciam o aproveitamento.</td>
          </tr>
          <tr>
            <th scope="row">Folhas verde-escuras</th>
            <td>Espinafre, couve e outras folhas</td>
            <td>Carotenoides pró-vitamina A</td>
            <td>A clorofila mascara visualmente os pigmentos alaranjados.</td>
          </tr>
          <tr>
            <th scope="row">Frutas amarelas e alaranjadas</th>
            <td>Manga, mamão, damasco e melão alaranjado</td>
            <td>Betacaroteno e betacriptoxantina</td>
            <td>Contribuem dentro do conjunto da alimentação, sem uma porção universal.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ReferenceTable() {
  return (
    <div
      className="nutrition-table-wrap nutrition-reference-table"
      tabIndex={0}
      role="region"
      aria-label="Ingestões de referência de vitamina A; deslize horizontalmente para ver todas as colunas"
    >
      <table className="nutrition-table">
        <caption>Valores de referência selecionados para vitamina A</caption>
        <thead>
          <tr>
            <th scope="col">Referência</th>
            <th scope="col">Valor</th>
            <th scope="col">Para que serve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">VDR geral no rótulo brasileiro</th>
            <td>800 µg de RAE</td>
            <td>Calcular o %VD e comparar alimentos; não é prescrição individual.</td>
          </tr>
          <tr>
            <th scope="row">RDA — homens adultos</th>
            <td>900 µg de RAE/dia</td>
            <td>Planejamento da ingestão de homens adultos saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">RDA — mulheres adultas</th>
            <td>700 µg de RAE/dia</td>
            <td>Planejamento da ingestão de mulheres adultas saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">RDA — gravidez, 19–50 anos</th>
            <td>770 µg de RAE/dia</td>
            <td>Referência populacional para gestantes saudáveis, não dose de suplemento.</td>
          </tr>
          <tr>
            <th scope="row">RDA — lactação, 19–50 anos</th>
            <td>1.300 µg de RAE/dia</td>
            <td>Referência populacional para lactantes saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">UL — adultos</th>
            <td>3.000 µg/dia</td>
            <td>Limite superior apenas para vitamina A pré-formada; não é meta.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ArticleFaq() {
  const faq = [
    {
      question: "Para que serve a vitamina A?",
      answer:
        "Ela participa da visão, da diferenciação celular, da manutenção de tecidos, do crescimento e desenvolvimento e de processos ligados ao funcionamento normal do sistema imunológico. Participar desses processos não significa que doses extras tragam benefícios adicionais.",
    },
    {
      question: "Retinol e vitamina A são a mesma coisa?",
      answer:
        "Retinol é uma das formas da vitamina A. O termo vitamina A abrange retinol, ésteres de retinila e metabólitos ativos, além da atividade gerada após a conversão de carotenoides pró-vitamina A.",
    },
    {
      question: "Cenoura tem vitamina A?",
      answer:
        "A cenoura fornece principalmente betacaroteno, que o organismo pode converter em vitamina A. A eficiência dessa conversão varia e é considerada pela unidade µg de RAE.",
    },
    {
      question: "100% do VD é a quantidade ideal para todo mundo?",
      answer:
        "Não. O %VD do rótulo usa uma referência geral para comparação. Necessidades variam com idade, sexo, fase da vida, alimentação, absorção e condições individuais.",
    },
    {
      question: "Mais vitamina A melhora a visão?",
      answer:
        "Não há base para tratar doses maiores como melhoria automática da visão. Corrigir uma deficiência é diferente de suplementar uma pessoa com estado nutricional adequado, e excesso de vitamina A pré-formada pode ser tóxico.",
    },
    {
      question: "Betacaroteno pode causar toxicidade de vitamina A?",
      answer:
        "Carotenoides alimentares não têm o mesmo perfil de toxicidade da vitamina A pré-formada. Excesso prolongado pode amarelar a pele de forma reversível. Suplementos de betacaroteno em altas doses exigem cautela, especialmente para fumantes, ex-fumantes e pessoas expostas ao amianto.",
    },
    {
      question: "Gestantes podem usar suplemento de vitamina A?",
      answer:
        "Não é uma decisão para automedicação. Quantidades elevadas de vitamina A pré-formada são teratogênicas. A formulação, a dose, a alimentação e outros medicamentos devem ser avaliados por profissional habilitado.",
    },
  ];

  return (
    <section className="nutrition-faq" aria-labelledby="perguntas-frequentes">
      <p className="eyebrow">Consulta rápida</p>
      <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function VitaminAPage() {
  const canonical = `${SITE_URL}${ARTICLE_PATH}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vitamina A",
    description:
      "Guia sobre formas, funções, fontes alimentares, VDR no Brasil, deficiência, toxicidade, gravidez e suplementação de vitamina A.",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: [`${SITE_URL}/nutricao/vitamina-a-fontes.webp`],
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
    about: [
      "Vitamina A",
      "Retinol",
      "Retinal",
      "Ácido retinoico",
      "Carotenoides pró-vitamina A",
    ],
    citation: references.map((reference) => reference.url),
  };

  return (
    <PageShell
      active="/nutricao"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Nutrição", href: "/nutricao" },
        { label: "Vitaminas", href: "/nutricao/vitaminas" },
        { label: "Vitamina A" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className="nutrition-article">
        <header className="nutrition-article-hero">
          <div className="nutrition-article-heading">
            <p className="eyebrow">Nutrição · Guia de vitaminas</p>
            <h1>Vitamina A</h1>
            <p className="nutrition-deck">
              Um guia para entender suas formas, funções, fontes e números —
              com a mesma atenção dedicada ao que ela faz e aos riscos do excesso.
            </p>
            <NutritionPublicationMeta
              updatedIso="2026-08-26"
              updatedLabel="26 de agosto de 2026"
              readingTime="16 min"
            />
          </div>
          <figure className="nutrition-hero-visual">
            <img
              src="/nutricao/vitamina-a-fontes.webp"
              alt="Cenoura, abóbora, manga, folhas verde-escuras e ovo reunidos como exemplos de fontes alimentares ligadas à vitamina A"
              width="1536"
              height="1024"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              A alimentação oferece vitamina A pré-formada e carotenoides que o organismo pode converter.
            </figcaption>
          </figure>
        </header>

        <div className="nutrition-article-layout">
          <aside className="nutrition-toc" aria-label="Índice do guia">
            <strong>Neste guia</strong>
            <ol>
              {toc.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
              <li><a href="#perguntas-frequentes">Perguntas frequentes</a></li>
              <li><a href="#referencias">Referências</a></li>
            </ol>
          </aside>

          <div className="nutrition-article-body prose">
            <p className="nutrition-lead">
              Vitamina A é o nome dado a um conjunto de compostos lipossolúveis.
              O organismo pode obtê-la já formada em alimentos de origem animal ou
              produzi-la a partir de certos carotenoides presentes em vegetais.
            </p>

            <aside className="nutrition-essential" aria-label="Vitamina A em poucas palavras">
              <p className="eyebrow">Em poucas palavras</p>
              <ul>
                <li>É essencial para a visão e para a diferenciação celular.</li>
                <li>Atua na manutenção de tecidos, no crescimento e em processos imunológicos normais.</li>
                <li>Retinol e ésteres de retinila são vitamina A pré-formada; alguns carotenoides são precursores.</li>
                <li>O VDR brasileiro para rotulagem de alimentos em geral é 800 µg de RAE.</li>
                <li>Excesso de vitamina A pré-formada pode ser tóxico; mais não significa melhor.</li>
              </ul>
            </aside>

            <section id="entenda" aria-labelledby="entenda-title">
              <p className="eyebrow">01 · Fundamento</p>
              <h2 id="entenda-title">O que é vitamina A</h2>
              <p>
                Vitamina A não é uma molécula única. O nome reúne retinoides com
                atividade biológica relacionada — principalmente retinol e seus
                ésteres — e a atividade de vitamina A produzida quando o organismo
                converte carotenoides pró-vitamina A.
              </p>
              <p>
                Por ser lipossolúvel, ela é absorvida junto ao processamento de
                gorduras no intestino e pode ser armazenada, sobretudo no fígado.
                Essa capacidade de armazenamento ajuda a manter reservas, mas
                também explica por que doses elevadas e repetidas da forma
                pré-formada podem se acumular.
              </p>
            </section>

            <section id="formas" aria-labelledby="formas-title">
              <p className="eyebrow">02 · Formas</p>
              <h2 id="formas-title">Retinol, retinal, ácido retinoico e carotenoides</h2>
              <p>
                Os nomes se parecem, mas descrevem compostos com papéis diferentes.
                Entender essa distinção evita tratar “vitamina A” como se todas as
                fontes tivessem o mesmo comportamento.
              </p>
              <dl className="nutrition-form-grid">
                <div>
                  <dt>Retinol</dt>
                  <dd>
                    Forma alcoólica que circula e serve de ponto de partida para
                    outras formas ativas. Também pode ser armazenada como ésteres de retinila.
                  </dd>
                </div>
                <div>
                  <dt>Retinal</dt>
                  <dd>
                    Forma aldeído. O 11-cis-retinal integra pigmentos visuais que
                    permitem à retina responder à luz.
                  </dd>
                </div>
                <div>
                  <dt>Ácido retinoico</dt>
                  <dd>
                    Atua na regulação da expressão de genes e na diferenciação
                    celular. É biologicamente potente e também inspira medicamentos retinoides.
                  </dd>
                </div>
                <div>
                  <dt>Carotenoides pró-vitamina A</dt>
                  <dd>
                    Betacaroteno, alfacaroteno e betacriptoxantina podem ser
                    convertidos em vitamina A. Luteína, zeaxantina e licopeno não são precursores.
                  </dd>
                </div>
              </dl>
              <p className="nutrition-note">
                <strong>Vitamina A pré-formada</strong> é a que já chega como
                retinol ou ésteres de retinila. <strong>Pró-vitamina A</strong> é o
                precursor que ainda precisa ser convertido pelo organismo.
              </p>
            </section>

            <section id="funcoes" aria-labelledby="funcoes-title">
              <p className="eyebrow">03 · Fisiologia</p>
              <h2 id="funcoes-title">O que ela faz no organismo</h2>
              <ul className="nutrition-function-list">
                <li>
                  <strong>Visão:</strong> o retinal integra a rodopsina, proteína
                  sensível à luz presente nos bastonetes da retina.
                </li>
                <li>
                  <strong>Diferenciação celular:</strong> o ácido retinoico ajuda a
                  regular genes envolvidos na especialização e no funcionamento das células.
                </li>
                <li>
                  <strong>Integridade de tecidos:</strong> participa da manutenção
                  normal de epitélios, como pele e superfícies de órgãos.
                </li>
                <li>
                  <strong>Função imunológica:</strong> contribui para processos de
                  desenvolvimento, diferenciação e resposta de células do sistema imune.
                </li>
                <li>
                  <strong>Crescimento e desenvolvimento:</strong> é necessária ao
                  desenvolvimento embrionário e à formação e manutenção de diferentes órgãos.
                </li>
              </ul>
              <p>
                Essas são funções de adequação nutricional, não promessas terapêuticas.
                Se o estado nutricional já é adequado, aumentar a ingestão não garante
                melhora adicional de imunidade, visão ou qualquer outro desfecho.
              </p>
            </section>

            <section id="visao" aria-labelledby="visao-title">
              <p className="eyebrow">04 · Visão</p>
              <h2 id="visao-title">Por que a vitamina A é tão ligada aos olhos</h2>
              <p>
                Na retina, o 11-cis-retinal se liga à opsina para formar a rodopsina.
                Quando a luz atinge esse pigmento, sua estrutura muda e inicia o sinal
                visual. Depois, o retinal precisa ser regenerado para que o ciclo continue.
              </p>
              <p>
                A vitamina A também participa da diferenciação e do funcionamento
                normal da conjuntiva e da córnea. Na deficiência importante, a adaptação
                ao escuro pode ser prejudicada; quadros avançados podem evoluir para
                xeroftalmia e dano ocular.
              </p>
              <blockquote>
                Participar do mecanismo normal da visão não transforma vitamina A em
                tratamento geral para problemas de vista. Alterações visuais exigem avaliação adequada.
              </blockquote>
            </section>

            <section id="fontes" aria-labelledby="fontes-title">
              <p className="eyebrow">05 · Alimentação</p>
              <h2 id="fontes-title">Onde encontrar vitamina A</h2>
              <p>
                Alimentos de origem animal fornecem principalmente vitamina A
                pré-formada. Alimentos vegetais alaranjados, amarelos e verde-escuros
                fornecem carotenoides pró-vitamina A. Uma alimentação variada pode combinar as duas rotas.
              </p>
              <SourceTable />
              <p className="nutrition-table-footnote">
                Os exemplos são qualitativos. O teor muda com variedade, porção,
                maturação, preparo e fortificação; por isso, esta tabela não substitui uma base de composição de alimentos.
              </p>
            </section>

            <section id="absorcao" aria-labelledby="absorcao-title">
              <p className="eyebrow">06 · Aproveitamento</p>
              <h2 id="absorcao-title">Absorção e biodisponibilidade</h2>
              <p>
                A vitamina A e os carotenoides são incorporados a micelas no intestino,
                processo que depende da digestão de gorduras e da ação da bile. Por isso,
                refeições que contêm alguma gordura alimentar tendem a favorecer o aproveitamento.
              </p>
              <p>
                A vitamina A pré-formada costuma ser absorvida com maior eficiência que
                o betacaroteno contido na matriz vegetal. Cozinhar, triturar e combinar
                certos vegetais com gordura pode aumentar a liberação e a absorção de
                carotenoides, embora o efeito varie entre alimentos e pessoas.
              </p>
              <p>
                A conversão também não é fixa. Genética, estado nutricional, condição
                intestinal, quantidade consumida e matriz do alimento influenciam quanto
                carotenoide se transforma em retinol.
              </p>
              <div className="nutrition-equivalence" aria-label="Equivalentes de atividade de retinol">
                <p><strong>1 µg de RAE</strong> equivale a:</p>
                <ul>
                  <li>1 µg de retinol;</li>
                  <li>12 µg de betacaroteno presente em alimentos;</li>
                  <li>24 µg de alfacaroteno ou betacriptoxantina presentes em alimentos.</li>
                </ul>
              </div>
            </section>

            <section id="necessidades" aria-labelledby="necessidades-title">
              <p className="eyebrow">07 · Números com contexto</p>
              <h2 id="necessidades-title">Quanto precisamos?</h2>
              <div className="nutrition-vdr-callout">
                <span>VDR no Brasil</span>
                <strong>800 µg de RAE</strong>
                <p>Referência da Anvisa para o %VD de alimentos em geral.</p>
              </div>
              <h3>Valor Diário não é necessidade individual</h3>
              <p>
                O Valor Diário de Referência é uma ferramenta regulatória. Ele permite
                calcular o percentual exibido no rótulo e comparar a contribuição de
                uma porção dentro da alimentação. Não representa uma dose ideal para
                todas as pessoas, não é limite máximo e não indica que alguém precise suplementar.
              </p>
              <p>
                Já as Dietary Reference Intakes reúnem valores para planejar e avaliar
                ingestões de pessoas saudáveis por idade, sexo e fase da vida. A RDA é
                definida para cobrir as necessidades de quase todos os indivíduos saudáveis
                de um grupo; o UL é o maior nível diário com baixa probabilidade de efeitos adversos.
              </p>
              <ReferenceTable />
              <p className="nutrition-table-footnote">
                RDA e UL da National Academies; VDR e valores por grupo da Anvisa.
                O UL de 3.000 µg/dia se aplica à vitamina A pré-formada, não aos carotenoides alimentares.
              </p>
            </section>

            <section id="deficiencia" aria-labelledby="deficiencia-title">
              <p className="eyebrow">08 · Inadequação</p>
              <h2 id="deficiencia-title">Deficiência de vitamina A</h2>
              <p>
                A deficiência importante compromete inicialmente a adaptação ao escuro
                e pode causar cegueira noturna. Se persistir, pode afetar conjuntiva e
                córnea, evoluir para xeroftalmia e, em casos graves, perda visual permanente.
              </p>
              <p>
                Ela também interfere na integridade de tecidos, no crescimento e em
                processos imunológicos. Esses efeitos não tornam sintomas isolados um
                diagnóstico: visão noturna ruim, pele seca ou infecções frequentes têm
                diversas causas possíveis.
              </p>
              <h3>Quem pode apresentar maior risco de inadequação</h3>
              <ul>
                <li>pessoas com acesso limitado a alimentação variada e fontes de vitamina A;</li>
                <li>lactentes prematuros, que nascem com reservas hepáticas menores;</li>
                <li>pessoas com condições que prejudicam a digestão ou absorção de gorduras;</li>
                <li>pessoas com fibrose cística, doença celíaca ou doenças inflamatórias intestinais, conforme o contexto clínico;</li>
                <li>pessoas após determinadas cirurgias bariátricas;</li>
                <li>gestantes e lactantes em populações nas quais a deficiência é um problema relevante de saúde pública.</li>
              </ul>
              <p className="nutrition-note">
                A dosagem de retinol no sangue tem limitações e pode ser influenciada
                por infecções e inflamação. A investigação deve integrar alimentação,
                sintomas, histórico clínico e exames interpretados por profissional habilitado.
              </p>
            </section>

            <section id="excesso" aria-labelledby="excesso-title">
              <p className="eyebrow">09 · Segurança</p>
              <h2 id="excesso-title">Excesso e toxicidade</h2>
              <p>
                Como é armazenada no organismo, a vitamina A pré-formada pode se acumular.
                Ingestões muito altas em curto período podem causar náusea, tontura,
                cefaleia intensa, visão turva e alterações de coordenação. Excesso crônico
                pode afetar pele, músculos, articulações e fígado.
              </p>
              <div className="nutrition-risk-compare">
                <div>
                  <h3>Vitamina A pré-formada</h3>
                  <p>
                    Retinol e ésteres de retinila entram no UL. Para adultos, o limite
                    superior é 3.000 µg por dia. Esse número é teto de segurança para uso
                    habitual, não objetivo de ingestão.
                  </p>
                </div>
                <div>
                  <h3>Carotenoides pró-vitamina A</h3>
                  <p>
                    Não compartilham a mesma toxicidade. Excesso alimentar de betacaroteno
                    pode amarelar a pele de forma reversível, mas não costuma causar hipervitaminose A.
                  </p>
                </div>
              </div>
              <p>
                Isso não torna suplementos de betacaroteno neutros. Ensaios com altas
                doses identificaram aumento do risco de câncer de pulmão em fumantes e em
                alguns grupos expostos ao amianto. Alimentação e suplemento não devem ser tratados como equivalentes.
              </p>
            </section>

            <section id="gravidez" aria-labelledby="gravidez-title">
              <p className="eyebrow">10 · Atenção especial</p>
              <h2 id="gravidez-title">Vitamina A na gravidez</h2>
              <p>
                A vitamina A é necessária ao desenvolvimento embrionário, mas o equilíbrio
                é especialmente importante: quantidades elevadas da forma pré-formada e
                certos medicamentos retinoides podem causar malformações congênitas.
              </p>
              <p>
                A RDA para gestantes de 19 a 50 anos é 770 µg de RAE por dia. Esse é um
                valor de referência para a ingestão total, não uma dose automática de suplemento.
                O UL para vitamina A pré-formada permanece em 3.000 µg por dia, mas aproximar-se
                do limite por conta própria não é uma estratégia de saúde.
              </p>
              <aside className="nutrition-pregnancy-alert">
                <strong>Se está grávida, tentando engravidar ou pode engravidar</strong>
                <p>
                  Revise com médico ou nutricionista o rótulo de multivitamínicos, suplementos,
                  óleos de fígado e medicamentos retinoides. Não some produtos nem use altas
                  doses sem orientação. A OMS não recomenda suplementação rotineira de vitamina A
                  na gravidez fora de contextos específicos de deficiência grave como problema de saúde pública.
                </p>
              </aside>
            </section>

            <section id="suplementacao" aria-labelledby="suplementacao-title">
              <p className="eyebrow">11 · Decisão responsável</p>
              <h2 id="suplementacao-title">Suplementação: o rótulo é só o começo</h2>
              <p>
                Suplemento não substitui uma alimentação equilibrada. Ele pode ter lugar
                quando alimentação, fase da vida, absorção ou uma condição clínica tornam
                necessário complementar a ingestão — mas a decisão depende do contexto.
              </p>
              <p>
                Quantidade maior não significa benefício maior. Antes de usar, é preciso
                saber a forma química, a quantidade em µg de RAE, quanto vem de retinol ou
                ésteres e quanto vem de carotenoides. Unidades Internacionais só podem ser
                convertidas corretamente quando a fonte é conhecida.
              </p>
              <ol className="nutrition-checklist">
                <li><strong>Some as fontes:</strong> alimentação, multivitamínicos e produtos isolados.</li>
                <li><strong>Leia a forma:</strong> retinol, palmitato/acetato de retinila ou betacaroteno não têm o mesmo perfil.</li>
                <li><strong>Não use 100% do VD como prescrição:</strong> %VD é referência de rótulo.</li>
                <li><strong>Considere a fase da vida:</strong> infância, gravidez e lactação exigem referências próprias.</li>
                <li><strong>Revise medicamentos e condições:</strong> absorção, fígado e retinoides podem mudar o risco.</li>
              </ol>
            </section>

            <section id="avaliacao" aria-labelledby="avaliacao-title">
              <p className="eyebrow">12 · Próximo passo</p>
              <h2 id="avaliacao-title">Quando a avaliação profissional é especialmente importante</h2>
              <ul>
                <li>suspeita de deficiência, alteração de visão noturna ou sinais oculares;</li>
                <li>gravidez, tentativa de engravidar ou amamentação;</li>
                <li>doença hepática, consumo elevado de álcool ou histórico de alterações no fígado;</li>
                <li>doenças intestinais, fibrose cística, dificuldade de absorção de gorduras ou cirurgia bariátrica;</li>
                <li>uso de orlistat ou de medicamentos retinoides, como isotretinoína, acitretina ou bexaroteno;</li>
                <li>uso simultâneo de mais de um suplemento com vitamina A;</li>
                <li>tabagismo atual ou passado e intenção de usar altas doses de betacaroteno.</li>
              </ul>
              <aside className="health-note nutrition-health-note">
                <strong>Conteúdo educativo</strong>
                <p>
                  Esta página não diagnostica deficiência, não prescreve suplementação e
                  não substitui avaliação de médico, nutricionista ou outro profissional habilitado.
                </p>
                <Link href="/aviso-de-saude">Leia o Aviso de Saúde</Link>
              </aside>
            </section>

            <ArticleFaq />

            <section className="nutrition-references" aria-labelledby="referencias">
              <p className="eyebrow">Base documental</p>
              <h2 id="referencias">Fontes e referências</h2>
              <ol>
                {references.map((reference) => (
                  <li key={reference.url}>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                      {reference.title}
                    </a>
                    <p>{reference.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="nutrition-source-note">
                Fontes consultadas em 26 de agosto de 2026. Valores regulatórios podem
                mudar; para rotulagem profissional, consulte sempre o texto normativo vigente.
              </p>
            </section>

            <nav className="nutrition-article-paths" aria-label="Continuar na área de Nutrição">
              <Link href="/nutricao/vitaminas">← Vitaminas</Link>
              <Link href="/nutricao/vitaminas/vitamina-c">Ler sobre Vitamina C</Link>
              <Link href="/nutricao">Explorar Nutrição</Link>
            </nav>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
