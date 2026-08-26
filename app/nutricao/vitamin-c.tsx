/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { JsonLd, PageShell } from "../site";

const SITE_URL = "https://www.cleversouza.com";
const ARTICLE_PATH = "/nutricao/vitaminas/vitamina-c";

const references = [
  {
    title: "Anvisa — Instrução Normativa nº 75/2020",
    url: "https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&codTipo=&cod_menu=9434&cod_modulo=310&desItem=&desItemFim=&numeroAto=00000075&orgao=DC%2FANVISA%2FMS&pesquisa=true&seqAto=000&tipo=INM&valorAno=2020",
    detail:
      "Anexos II e VIII: VDR de 100 mg para rotulagem de alimentos em geral e referências por grupo populacional.",
  },
  {
    title: "Anvisa — Rotulagem nutricional de alimentos embalados",
    url: "https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional",
    detail:
      "Página institucional sobre as regras brasileiras de rotulagem nutricional e o uso do percentual de Valor Diário.",
  },
  {
    title: "NIH Office of Dietary Supplements — Vitamin C",
    url: "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/",
    detail:
      "Ficha técnica para profissionais sobre funções, fontes, necessidades, deficiência, resfriados, excesso e interações.",
  },
  {
    title: "National Academies — Dietary Reference Intakes: Vitamin C",
    url: "https://www.nationalacademies.org/read/9810/chapter/7",
    detail:
      "Documento de referência para RDA, necessidade adicional associada ao tabagismo e limite superior tolerável.",
  },
  {
    title: "Cochrane — Vitamin C for preventing and treating the common cold",
    url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000980.pub4/full",
    detail:
      "Revisão sistemática sobre suplementação regular, prevenção e tratamento do resfriado comum.",
  },
];

const toc = [
  ["entenda", "O que é"],
  ["formas", "Ácido ascórbico e ascorbato"],
  ["funcoes", "Funções no organismo"],
  ["colageno", "Vitamina C e colágeno"],
  ["ferro", "Absorção de ferro"],
  ["fontes", "Fontes alimentares"],
  ["preparo", "Preparo e conservação"],
  ["necessidades", "Quanto precisamos?"],
  ["deficiencia", "Deficiência"],
  ["resfriado", "Resfriado comum"],
  ["excesso", "Excesso e segurança"],
  ["suplementacao", "Suplementação"],
  ["avaliacao", "Quando buscar avaliação"],
] as const;

function SourceTable() {
  return (
    <div
      className="nutrition-table-wrap"
      tabIndex={0}
      role="region"
      aria-label="Exemplos de fontes alimentares de vitamina C; deslize horizontalmente para ver todas as colunas"
    >
      <table className="nutrition-table">
        <caption>Fontes alimentares e maneiras práticas de preservá-las</caption>
        <thead>
          <tr>
            <th scope="col">Grupo</th>
            <th scope="col">Exemplos</th>
            <th scope="col">Leitura prática</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Frutas brasileiras</th>
            <td>Acerola e goiaba</td>
            <td>São fontes concentradas, mas o teor varia com variedade, maturação e armazenamento.</td>
          </tr>
          <tr>
            <th scope="row">Frutas cítricas</th>
            <td>Laranja, limão, tangerina e grapefruit</td>
            <td>A fruta inteira também oferece água, fibras e a matriz natural do alimento.</td>
          </tr>
          <tr>
            <th scope="row">Outras frutas</th>
            <td>Kiwi, morango, mamão e melão</td>
            <td>Variar as fontes reduz a dependência de um único alimento ou suco.</td>
          </tr>
          <tr>
            <th scope="row">Hortaliças</th>
            <td>Pimentão, brócolis, couve e couve-de-bruxelas</td>
            <td>Consumo cru, quando apropriado, ou cocção breve ajuda a limitar perdas.</td>
          </tr>
          <tr>
            <th scope="row">Outros vegetais</th>
            <td>Tomate e batata</td>
            <td>O teor por porção pode ser menor, mas a frequência de consumo também conta.</td>
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
      aria-label="Valores de referência de vitamina C; deslize horizontalmente para ver todas as colunas"
    >
      <table className="nutrition-table">
        <caption>Valores de referência selecionados para vitamina C</caption>
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
            <td>100 mg</td>
            <td>Calcular o %VD e comparar alimentos; não é prescrição individual.</td>
          </tr>
          <tr>
            <th scope="row">RDA — homens adultos</th>
            <td>90 mg/dia</td>
            <td>Planejamento da ingestão de homens adultos saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">RDA — mulheres adultas</th>
            <td>75 mg/dia</td>
            <td>Planejamento da ingestão de mulheres adultas saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">RDA — gravidez, 19 anos ou mais</th>
            <td>85 mg/dia</td>
            <td>Referência populacional para gestantes saudáveis, não dose de suplemento.</td>
          </tr>
          <tr>
            <th scope="row">RDA — lactação, 19 anos ou mais</th>
            <td>120 mg/dia</td>
            <td>Referência populacional para lactantes saudáveis.</td>
          </tr>
          <tr>
            <th scope="row">Adicional associado ao tabagismo</th>
            <td>+35 mg/dia</td>
            <td>Somado à referência correspondente; não é indicação automática de suplemento.</td>
          </tr>
          <tr>
            <th scope="row">UL — adultos</th>
            <td>2.000 mg/dia</td>
            <td>Maior ingestão diária com baixa probabilidade de efeitos adversos; não é meta.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ArticleFaq() {
  const faq = [
    {
      question: "Para que serve a vitamina C?",
      answer:
        "Ela atua como cofator em reações importantes, incluindo a síntese de colágeno e carnitina, participa de sistemas antioxidantes, favorece a absorção do ferro não heme e contribui para o funcionamento normal do sistema imunológico.",
    },
    {
      question: "Vitamina C evita resfriado?",
      answer:
        "Na população geral, a suplementação regular não reduz de forma consistente o risco de ter um resfriado. Ela pode encurtar modestamente a duração, mas começar a tomar depois do início dos sintomas não mostrou benefício consistente.",
    },
    {
      question: "100% do VD é a quantidade ideal para todas as pessoas?",
      answer:
        "Não. O %VD usa uma referência geral de rotulagem. Necessidades variam com idade, sexo, fase da vida, tabagismo, alimentação, absorção e condição clínica.",
    },
    {
      question: "Ácido ascórbico e vitamina C são a mesma coisa?",
      answer:
        "Ácido ascórbico é a forma mais conhecida da vitamina C. No organismo, conforme o pH, grande parte está como ascorbato. A forma oxidada, ácido desidroascórbico, também pode ser reciclada de volta a ascorbato.",
    },
    {
      question: "Vitamina C de suplemento é pior que a dos alimentos?",
      answer:
        "O ácido ascórbico de suplementos tem biodisponibilidade semelhante à vitamina C presente nos alimentos. A diferença prática é que alimentos entregam o nutriente dentro de uma matriz com outros componentes, enquanto suplementos facilitam doses muito maiores.",
    },
    {
      question: "Tomar 1 ou 2 gramas por dia traz mais benefício?",
      answer:
        "Não existe relação automática entre dose maior e benefício maior. A fração absorvida cai quando a ingestão aumenta, e doses altas elevam a chance de desconforto gastrointestinal. Dois gramas por dia correspondem ao UL para adultos, não a uma meta.",
    },
    {
      question: "Suco de laranja é a única forma de obter vitamina C?",
      answer:
        "Não. Acerola, goiaba, kiwi, morango, mamão, pimentão, brócolis, couve e outros vegetais também contribuem. Uma alimentação variada costuma ser mais útil que depender de uma única fonte.",
    },
  ];

  return (
    <section className="nutrition-faq" aria-labelledby="perguntas-frequentes-c">
      <p className="eyebrow">Consulta rápida</p>
      <h2 id="perguntas-frequentes-c">Perguntas frequentes</h2>
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

export function VitaminCPage() {
  const canonical = `${SITE_URL}${ARTICLE_PATH}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vitamina C",
    description:
      "Guia sobre funções, fontes alimentares, VDR no Brasil, deficiência, resfriados, excesso e suplementação de vitamina C.",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: [`${SITE_URL}/nutricao/vitamina-c-fontes.webp`],
    author: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    about: [
      "Vitamina C",
      "Ácido ascórbico",
      "Ascorbato",
      "Colágeno",
      "Ferro não heme",
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
        { label: "Vitamina C" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className="nutrition-article nutrition-article--vitamin-c">
        <header className="nutrition-article-hero">
          <div className="nutrition-article-heading">
            <p className="eyebrow">Nutrição · Guia de vitaminas</p>
            <h1>Vitamina C</h1>
            <p className="nutrition-deck">
              Um guia para entender funções, alimentos, necessidades e limites —
              separando adequação nutricional de promessas sobre imunidade, colágeno e resfriados.
            </p>
            <div className="nutrition-publication-meta">
              <span>Conteúdo editorial Clever Souza</span>
              <span>
                Atualizado em <time dateTime="2026-08-26">26 de agosto de 2026</time>
              </span>
              <span>Leitura aprofundada · cerca de 17 min</span>
            </div>
          </div>
          <figure className="nutrition-hero-visual">
            <img
              src="/nutricao/vitamina-c-fontes.webp"
              alt="Acerola, goiaba, laranja, kiwi, pimentão vermelho e brócolis reunidos como exemplos de fontes alimentares de vitamina C"
              width="1536"
              height="1024"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              Frutas e hortaliças são as principais fontes alimentares de vitamina C.
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
              <li><a href="#perguntas-frequentes-c">Perguntas frequentes</a></li>
              <li><a href="#referencias-c">Referências</a></li>
            </ol>
          </aside>

          <div className="nutrition-article-body prose">
            <p className="nutrition-lead">
              Vitamina C é um nutriente hidrossolúvel que o corpo humano não consegue
              sintetizar endogenamente. Por isso, precisa ser obtida regularmente por
              meio da alimentação — e suplementação não é sinônimo de necessidade.
            </p>

            <aside className="nutrition-essential" aria-label="Vitamina C em poucas palavras">
              <p className="eyebrow">Em poucas palavras</p>
              <ul>
                <li>Também é chamada de ácido ascórbico e atua como cofator e antioxidante.</li>
                <li>É necessária para a síntese normal de colágeno e favorece a absorção do ferro não heme.</li>
                <li>Frutas e hortaliças variadas são suas principais fontes alimentares.</li>
                <li>O VDR brasileiro para rotulagem de alimentos em geral é 100 mg.</li>
                <li>Megadoses não garantem benefício maior e podem causar efeitos adversos.</li>
              </ul>
            </aside>

            <section id="entenda" aria-labelledby="entenda-c-title">
              <p className="eyebrow">01 · Fundamento</p>
              <h2 id="entenda-c-title">O que é vitamina C</h2>
              <p>
                Vitamina C é o nome nutricional dado ao ácido ascórbico e a compostos
                com atividade equivalente. Diferentemente da vitamina A, ela é
                hidrossolúvel: circula em meios aquosos, o organismo mantém controle
                rigoroso de suas concentrações e o excesso absorvido tende a ser eliminado na urina.
              </p>
              <p>
                “Hidrossolúvel”, porém, não significa “sem limite”. A absorção intestinal
                perde eficiência à medida que a ingestão aumenta, e grandes quantidades
                podem permanecer no intestino, favorecendo diarreia, náusea ou cólicas.
              </p>
              <p>
                Ser humano, outros primatas e algumas espécies não possuem uma etapa
                funcional da via necessária para sintetizar vitamina C. A alimentação
                regular é, portanto, a rota fisiológica para manter a adequação.
              </p>
            </section>

            <section id="formas" aria-labelledby="formas-c-title">
              <p className="eyebrow">02 · Formas</p>
              <h2 id="formas-c-title">Ácido ascórbico, ascorbato e forma oxidada</h2>
              <p>
                Os termos descrevem estados químicos relacionados, não vitaminas
                completamente diferentes. No pH do organismo, a maior parte está na forma de ascorbato.
              </p>
              <dl className="nutrition-form-grid">
                <div>
                  <dt>Ácido ascórbico</dt>
                  <dd>
                    Forma mais conhecida em alimentos e suplementos. Atua como doador
                    de elétrons em reações bioquímicas.
                  </dd>
                </div>
                <div>
                  <dt>Ascorbato</dt>
                  <dd>
                    Forma ionizada predominante no organismo. Sais como ascorbato de
                    sódio ou de cálcio também aparecem em suplementos.
                  </dd>
                </div>
                <div>
                  <dt>Ácido desidroascórbico</dt>
                  <dd>
                    Forma oxidada que pode ser transportada e reduzida novamente a
                    ascorbato dentro das células.
                  </dd>
                </div>
                <div>
                  <dt>Com bioflavonoides</dt>
                  <dd>
                    Mistura comercial comum. As evidências disponíveis não demonstram
                    superioridade geral sobre o ácido ascórbico simples.
                  </dd>
                </div>
              </dl>
              <p className="nutrition-note">
                <strong>Forma diferente não significa automaticamente melhor.</strong> A
                escolha de um suplemento também precisa considerar quantidade total,
                minerais adicionados, tolerância, alimentação e finalidade real.
              </p>
            </section>

            <section id="funcoes" aria-labelledby="funcoes-c-title">
              <p className="eyebrow">03 · Fisiologia</p>
              <h2 id="funcoes-c-title">O que ela faz no organismo</h2>
              <ul className="nutrition-function-list">
                <li>
                  <strong>Síntese de colágeno:</strong> atua como cofator de enzimas que
                  estabilizam a estrutura dessa proteína.
                </li>
                <li>
                  <strong>Sistemas antioxidantes:</strong> doa elétrons e ajuda a limitar
                  reações oxidativas, além de participar da regeneração da vitamina E.
                </li>
                <li>
                  <strong>Absorção de ferro:</strong> favorece a absorção intestinal do
                  ferro não heme presente principalmente em alimentos vegetais.
                </li>
                <li>
                  <strong>Carnitina e neurotransmissores:</strong> participa de reações
                  necessárias à síntese de carnitina e de certas catecolaminas.
                </li>
                <li>
                  <strong>Função imunológica:</strong> contribui para processos celulares
                  relacionados ao funcionamento normal do sistema imune.
                </li>
              </ul>
              <p>
                Participar dessas funções não significa que doses extras previnam
                doenças ou elevem indefinidamente a resposta do organismo. Adequação
                nutricional e tratamento clínico são contextos diferentes.
              </p>
            </section>

            <section id="colageno" aria-labelledby="colageno-title">
              <p className="eyebrow">04 · Estrutura</p>
              <h2 id="colageno-title">Vitamina C e colágeno: qual é a relação real?</h2>
              <p>
                Durante a formação do colágeno, a vitamina C mantém ativas enzimas que
                hidroxilam prolina e lisina. Esse processo ajuda a estabilizar as fibras
                presentes na pele, nos vasos sanguíneos, nos ossos, na cartilagem, na
                gengiva e em outros tecidos conjuntivos.
              </p>
              <p>
                Na deficiência, a síntese prejudicada explica sinais como fragilidade
                capilar, sangramento gengival e cicatrização inadequada. Isso não autoriza
                concluir que megadoses façam uma pessoa sem deficiência produzir colágeno
                sem limite, rejuvenesçam a pele ou acelerem qualquer cicatrização.
              </p>
              <blockquote>
                Ser necessária para uma reação não significa que quantidades cada vez
                maiores produzam um resultado cada vez maior.
              </blockquote>
            </section>

            <section id="ferro" aria-labelledby="ferro-title">
              <p className="eyebrow">05 · Combinações alimentares</p>
              <h2 id="ferro-title">Como a vitamina C favorece a absorção do ferro</h2>
              <p>
                A vitamina C pode reduzir o ferro férrico a uma forma mais disponível e
                formar complexos solúveis no ambiente intestinal. O efeito é mais relevante
                para o ferro não heme, encontrado em feijões, lentilhas, grão-de-bico,
                folhas e outros alimentos vegetais.
              </p>
              <p>
                Na prática alimentar, combinar esses alimentos com frutas ou hortaliças
                fonte de vitamina C na mesma refeição pode favorecer o aproveitamento do
                ferro. Isso não substitui investigação e tratamento quando há anemia.
              </p>
              <p className="nutrition-note">
                <strong>Atenção à sobrecarga de ferro:</strong> pessoas com hemocromatose
                hereditária ou outra condição de acúmulo devem discutir doses elevadas de
                vitamina C com a equipe que acompanha o caso.
              </p>
            </section>

            <section id="fontes" aria-labelledby="fontes-c-title">
              <p className="eyebrow">06 · Alimentação</p>
              <h2 id="fontes-c-title">Onde encontrar vitamina C</h2>
              <p>
                Frutas e hortaliças são as principais fontes. Cítricos são conhecidos,
                mas não exclusivos: acerola, goiaba, pimentão, kiwi, morango e brócolis
                mostram como cor, origem e grupo alimentar podem variar bastante.
              </p>
              <SourceTable />
              <p className="nutrition-table-footnote">
                Os exemplos são qualitativos. Teores mudam com variedade, clima,
                maturação, armazenamento, porção e preparo; consulte uma base de
                composição de alimentos quando precisar de números específicos.
              </p>
            </section>

            <section id="preparo" aria-labelledby="preparo-title">
              <p className="eyebrow">07 · Aproveitamento</p>
              <h2 id="preparo-title">Calor, água, corte e conservação</h2>
              <p>
                A vitamina C é sensível ao calor e pode se perder na água de cozimento.
                Exposição prolongada ao oxigênio, armazenamento e repetidos reaquecimentos
                também podem reduzir o teor. Isso não significa que todo alimento cozido
                fique “sem vitamina C”.
              </p>
              <ol className="nutrition-checklist">
                <li><strong>Varie cru e cozido:</strong> use preparos compatíveis com a segurança e a digestibilidade de cada alimento.</li>
                <li><strong>Prefira cocção breve:</strong> vapor, micro-ondas ou pouca água podem limitar perdas em comparação com fervura prolongada.</li>
                <li><strong>Aproveite o líquido:</strong> quando fizer sentido, usar o caldo evita descartar parte do nutriente dissolvido.</li>
                <li><strong>Corte perto do consumo:</strong> reduzir tempo de exposição ajuda a preservar qualidade.</li>
                <li><strong>Não busque perfeição:</strong> variedade e frequência importam mais que tentar eliminar toda perda culinária.</li>
              </ol>
            </section>

            <section id="necessidades" aria-labelledby="necessidades-c-title">
              <p className="eyebrow">08 · Números com contexto</p>
              <h2 id="necessidades-c-title">Quanto precisamos?</h2>
              <div className="nutrition-vdr-callout">
                <span>VDR no Brasil</span>
                <strong>100 mg</strong>
                <p>Referência da Anvisa para o %VD de alimentos em geral.</p>
              </div>
              <h3>Valor Diário não é necessidade individual</h3>
              <p>
                O Valor Diário de Referência é uma ferramenta regulatória para calcular
                o percentual exibido no rótulo e permitir comparações. Não é dose ideal
                universal, limite máximo nem justificativa automática para suplementação.
              </p>
              <p>
                As Dietary Reference Intakes organizam referências por sexo e fase da
                vida. A RDA busca cobrir as necessidades de quase todos os indivíduos
                saudáveis de um grupo. O UL indica um teto de segurança populacional —
                não uma meta que deva ser alcançada.
              </p>
              <ReferenceTable />
              <p className="nutrition-table-footnote">
                VDR brasileiro da Anvisa. RDA, adicional associado ao tabagismo e UL da
                National Academies. Referências populacionais não substituem avaliação individual.
              </p>
            </section>

            <section id="deficiencia" aria-labelledby="deficiencia-c-title">
              <p className="eyebrow">09 · Inadequação</p>
              <h2 id="deficiencia-c-title">Deficiência de vitamina C</h2>
              <p>
                Deficiência grave causa escorbuto. Quando a ingestão fica muito baixa por
                semanas, podem surgir fadiga, mal-estar e inflamação gengival. A progressão
                pode levar a sangramentos, manchas na pele, dor articular, alterações nos
                pelos, pior cicatrização e perda dentária.
              </p>
              <p>
                Esses sinais não são exclusivos de vitamina C. Sangramento gengival,
                cansaço ou manchas roxas também têm outras causas e não devem ser usados
                isoladamente para autodiagnóstico.
              </p>
              <h3>Quem pode apresentar maior risco de inadequação</h3>
              <ul>
                <li>pessoas que fumam, devido ao maior estresse oxidativo e metabolismo do nutriente;</li>
                <li>pessoas com alimentação muito restrita ou pouca variedade de frutas e hortaliças;</li>
                <li>pessoas com insegurança alimentar ou outras barreiras persistentes de acesso;</li>
                <li>pessoas com má absorção intestinal grave ou algumas condições crônicas;</li>
                <li>pessoas com doença renal terminal em hemodiálise, conforme o contexto clínico;</li>
                <li>lactentes que recebem alimentação sem fontes adequadas do nutriente; alimentação infantil exige orientação pediátrica.</li>
              </ul>
              <p className="nutrition-note">
                A investigação combina alimentação, sintomas, histórico, exame físico e,
                quando indicado, exames laboratoriais interpretados por profissional habilitado.
              </p>
            </section>

            <section id="resfriado" aria-labelledby="resfriado-title">
              <p className="eyebrow">10 · Evidência em contexto</p>
              <h2 id="resfriado-title">Vitamina C previne ou trata resfriados?</h2>
              <p>
                Para a população geral, usar vitamina C regularmente não reduz de forma
                consistente a chance de ter um resfriado. Estudos indicam uma redução
                modesta da duração quando o uso é regular, mas começar depois que os
                sintomas aparecem não mostrou benefício consistente.
              </p>
              <p>
                Alguns estudos encontraram menor incidência em grupos submetidos a esforço
                físico intenso e frio extremo. Esse resultado específico não deve ser
                generalizado como promessa de prevenção para todas as pessoas.
              </p>
              <div className="nutrition-risk-compare">
                <div>
                  <h3>O que a evidência apoia</h3>
                  <p>
                    Vitamina C participa da função imunológica normal e corrigir deficiência
                    é importante. O uso regular pode encurtar modestamente resfriados.
                  </p>
                </div>
                <div>
                  <h3>O que ela não garante</h3>
                  <p>
                    Prevenção universal, cura, desaparecimento rápido dos sintomas ou
                    “imunidade turbinada” por megadoses.
                  </p>
                </div>
              </div>
            </section>

            <section id="excesso" aria-labelledby="excesso-c-title">
              <p className="eyebrow">11 · Segurança</p>
              <h2 id="excesso-c-title">Excesso: ser hidrossolúvel não elimina o risco</h2>
              <p>
                A vitamina C tem baixa toxicidade, mas ingestões elevadas podem causar
                diarreia, náusea, cólicas e outros desconfortos gastrointestinais. O UL
                para adultos é 2.000 mg por dia e considera a ingestão total de alimentos e suplementos.
              </p>
              <p>
                Doses altas podem elevar a excreção urinária de oxalato. A relação com
                cálculos renais não é uniforme nos estudos, mas merece cautela em pessoas
                com doença renal, hiperoxalúria ou histórico relevante. Na hemocromatose,
                o aumento da absorção de ferro pode agravar a sobrecarga.
              </p>
              <p>
                O UL não é uma fronteira entre “sem risco” e “tóxico” para cada indivíduo.
                Idade, função renal, condições clínicas, medicamentos e duração do uso
                alteram a avaliação.
              </p>
            </section>

            <section id="suplementacao" aria-labelledby="suplementacao-c-title">
              <p className="eyebrow">12 · Decisão responsável</p>
              <h2 id="suplementacao-c-title">Quando o suplemento entra — e quando não é necessário</h2>
              <p>
                Suplemento não substitui uma alimentação equilibrada. Pode ser útil quando
                a ingestão alimentar não atende às necessidades, há dificuldade de absorção
                ou existe uma indicação clínica — mas a decisão deve considerar o contexto completo.
              </p>
              <p>
                Ácido ascórbico, ascorbatos minerais e produtos com bioflavonoides aparecem
                em diferentes apresentações. As evidências não demonstram que uma forma
                comercial seja universalmente superior. Sais minerais ainda acrescentam
                sódio, cálcio ou outro mineral à fórmula.
              </p>
              <ol className="nutrition-checklist">
                <li><strong>Some todas as fontes:</strong> alimentação, multivitamínicos, efervescentes e produtos isolados.</li>
                <li><strong>Leia miligramas por porção:</strong> “alta potência” não informa se a quantidade é adequada para você.</li>
                <li><strong>Não use o %VD como prescrição:</strong> ele é uma referência geral de rótulo.</li>
                <li><strong>Considere o tempo de uso:</strong> exposição repetida importa tanto quanto uma dose isolada.</li>
                <li><strong>Revise condições e tratamentos:</strong> rim, sobrecarga de ferro e terapias oncológicas merecem atenção especial.</li>
              </ol>
            </section>

            <section id="avaliacao" aria-labelledby="avaliacao-c-title">
              <p className="eyebrow">13 · Próximo passo</p>
              <h2 id="avaliacao-c-title">Quando a avaliação profissional é especialmente importante</h2>
              <ul>
                <li>suspeita de deficiência, sangramentos inexplicados ou cicatrização persistentemente ruim;</li>
                <li>alimentação muito restrita, dificuldade de acesso a alimentos ou perda de peso não planejada;</li>
                <li>doença renal, hemodiálise, hiperoxalúria ou histórico recorrente de cálculos;</li>
                <li>hemocromatose ou outra condição associada à sobrecarga de ferro;</li>
                <li>má absorção intestinal grave ou doença crônica que altere ingestão ou metabolismo;</li>
                <li>gravidez, lactação, infância ou intenção de usar doses elevadas por longo período;</li>
                <li>quimioterapia ou radioterapia, antes de iniciar antioxidantes em altas doses.</li>
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

            <section className="nutrition-references" aria-labelledby="referencias-c">
              <p className="eyebrow">Base documental</p>
              <h2 id="referencias-c">Fontes e referências</h2>
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
              <Link href="/nutricao/vitaminas/vitamina-a">Ler sobre Vitamina A</Link>
              <Link href="/nutricao">Explorar Nutrição</Link>
            </nav>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
