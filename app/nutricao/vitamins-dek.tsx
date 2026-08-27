/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { JsonLd, PageShell } from "../site";

const SITE_URL = "https://www.cleversouza.com";
const ANVISA_URL =
  "https://www.gov.br/anvisa/en/rules-and-regulations/arquivos/in-75_2020.pdf/%40%40download/file";

export type FatSolubleVitaminKey = "d" | "e" | "k";

type VitaminData = {
  key: FatSolubleVitaminKey;
  name: string;
  descriptor: string;
  slug: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  accent: string;
  deck: string;
  lead: string;
  readingTime: string;
  vdr: string;
  quickFacts: string[];
  forms: Array<[string, string]>;
  functions: Array<[string, string]>;
  sources: Array<[string, string, string]>;
  absorption: string[];
  referenceRows: Array<[string, string, string]>;
  assessment: string[];
  deficiency: string[];
  riskGroups: string[];
  excess: string[];
  evidenceSupported: string[];
  evidenceNotSupported: string[];
  specialTitle: string;
  specialBody: string[];
  supplementChecklist: string[];
  interactions: string[];
  faqs: Array<[string, string]>;
  nihUrl: string;
  driUrl: string;
  extraReference?: [string, string, string];
};

export const REMAINING_VITAMIN_SUMMARIES = [
  {
    key: "D",
    name: "Vitamina D",
    slug: "vitamina-d",
    image: "/nutricao/vitamina-d-fontes.webp",
    alt: "Salmão, sardinhas, gema de ovo, cogumelos e bebida fortificada como exemplos de fontes alimentares relacionadas à vitamina D",
    summary: "Síntese cutânea, D2 e D3, 25(OH)D, saúde óssea, deficiência e toxicidade.",
  },
  {
    key: "E",
    name: "Vitamina E",
    slug: "vitamina-e",
    image: "/nutricao/vitamina-e-fontes.webp",
    alt: "Amêndoas, sementes de girassol, abacate, óleo vegetal e vegetais como fontes alimentares de vitamina E",
    summary: "Tocoferóis, função antioxidante, fontes de gordura, deficiência rara e risco de altas doses.",
  },
  {
    key: "K",
    name: "Vitamina K",
    slug: "vitamina-k",
    image: "/nutricao/vitamina-k-fontes.webp",
    alt: "Couve, espinafre, brócolis, folhas verdes e alimento fermentado de soja como fontes relacionadas à vitamina K",
    summary: "Filoquinona, menaquinonas, coagulação, saúde óssea e interação com anticoagulantes.",
  },
] as const;

const vitamins: Record<FatSolubleVitaminKey, VitaminData> = {
  d: {
    key: "d",
    name: "Vitamina D",
    descriptor: "Calciferóis, síntese cutânea e metabolismo ósseo",
    slug: "vitamina-d",
    image: "/nutricao/vitamina-d-fontes.webp",
    imageAlt: "Salmão, sardinhas, gema de ovo, cogumelos e bebida fortificada reunidos como exemplos de fontes alimentares relacionadas à vitamina D",
    imageCaption: "Poucos alimentos contêm vitamina D naturalmente; peixes gordurosos, gema, cogumelos expostos a UV e produtos fortificados podem contribuir.",
    accent: "#b86e2f",
    deck: "Um guia para compreender vitamina D sem reduzir o tema a sol ou suplemento: formas, ativação, alimentos, 25(OH)D, referências, deficiência e toxicidade.",
    lead: "Vitamina D é uma vitamina lipossolúvel e também um precursor hormonal. Pode vir de poucos alimentos, de produtos fortificados, de suplementos e da síntese iniciada quando radiação UVB alcança a pele. Todas essas rotas convergem para etapas de ativação no fígado e nos rins.",
    readingTime: "18 min",
    vdr: "15 µg",
    quickFacts: [
      "D2 é ergocalciferol; D3 é colecalciferol.",
      "A 25-hidroxivitamina D é o principal marcador usado para avaliar o status.",
      "Participa da absorção de cálcio e fósforo e da mineralização óssea normal.",
      "O VDR brasileiro de rotulagem é 15 µg — equivalentes a 600 UI.",
      "Toxicidade costuma decorrer de suplementação excessiva, não de alimentos ou exposição solar habitual.",
    ],
    forms: [
      ["Vitamina D2", "Ergocalciferol, produzido a partir de ergosterol; aparece em cogumelos expostos a UV e em alguns suplementos."],
      ["Vitamina D3", "Colecalciferol, formado na pele e encontrado em fontes animais; suplementos também podem usar lanolina ou líquen."],
      ["25(OH)D", "Calcidiol: principal forma circulante e marcador mais usado para avaliar a oferta de diferentes fontes."],
      ["1,25(OH)₂D", "Calcitriol: forma hormonal ativa, rigidamente regulada; em geral não é o exame adequado para avaliar reservas."],
    ],
    functions: [
      ["Cálcio e fósforo", "Favorece a absorção intestinal e ajuda a manter concentrações compatíveis com a mineralização."],
      ["Ossos", "Participa do crescimento, remodelação e manutenção do tecido ósseo."],
      ["Função neuromuscular", "Integra processos necessários à contração muscular e à comunicação entre nervos e músculos."],
      ["Regulação celular", "Receptores de vitamina D aparecem em vários tecidos, mas presença de receptor não comprova benefício de megadoses."],
      ["Função imunológica", "Participa da regulação imune normal; isso não equivale a prevenir infecções ou ‘aumentar a imunidade’."],
    ],
    sources: [
      ["Peixes gordurosos", "Salmão, truta, sardinha, atum e cavalinha", "Entre as fontes naturais mais relevantes; teor varia com espécie e produção."],
      ["Ovos e outros alimentos animais", "Gema, fígado e alguns queijos", "Geralmente fornecem quantidades menores; a vitamina está na gema."],
      ["Cogumelos", "Cogumelos expostos à luz ultravioleta", "Podem fornecer D2; sem exposição a UV, o teor pode ser baixo."],
      ["Fortificados", "Leites, bebidas vegetais e cereais, quando adicionados", "Fortificação não é universal: confirme no rótulo a quantidade por porção."],
    ],
    absorption: [
      "D2 e D3 são absorvidas no intestino delgado. A presença de gordura na refeição tende a favorecer o aproveitamento, embora alguma absorção ocorra sem ela.",
      "Após a absorção, a vitamina circula em quilomícrons, passa pelo fígado para formar 25(OH)D e, principalmente nos rins, pode ser convertida em 1,25(OH)₂D.",
      "Obesidade não impede a absorção intestinal, mas pode associar-se a concentrações circulantes menores por distribuição em maior volume corporal. Isso não define dose individual automaticamente.",
    ],
    referenceRows: [
      ["VDR geral no rótulo brasileiro", "15 µg (600 UI)", "Calcular o %VD; não é uma prescrição individual."],
      ["RDA — 19 a 70 anos", "15 µg/dia (600 UI)", "Referência construída assumindo exposição solar mínima."],
      ["RDA — acima de 70 anos", "20 µg/dia (800 UI)", "Planejamento da ingestão de adultos mais velhos saudáveis."],
      ["RDA — gravidez e lactação", "15 µg/dia (600 UI)", "Referência populacional, não dose terapêutica."],
      ["UL — adultos", "100 µg/dia (4.000 UI)", "Teto de ingestão habitual; não é meta nem protocolo de correção."],
    ],
    assessment: [
      "A concentração sérica de 25(OH)D integra contribuição de alimentos, suplementos e síntese cutânea. Métodos laboratoriais variam, por isso o resultado precisa ser interpretado com o laboratório, histórico e finalidade clínica.",
      "A National Academies considera 20 ng/mL ou mais suficiente para a maioria das pessoas e risco de deficiência abaixo de 12 ng/mL. Outras entidades usam classificações diferentes; não existe um único ‘nível ótimo’ universal para todos os desfechos.",
      "Medir 1,25(OH)₂D costuma ser inadequado para rastrear deficiência, porque essa forma pode permanecer normal ou elevada até fases avançadas.",
    ],
    deficiency: [
      "Deficiência prolongada prejudica a mineralização. Em crianças pode causar raquitismo; em adolescentes e adultos, osteomalácia, dor óssea e fraqueza muscular.",
      "Dor, cansaço ou fraqueza são inespecíficos. Um resultado baixo também precisa ser interpretado com ingestão, exposição, função renal, absorção e outros componentes do metabolismo ósseo.",
    ],
    riskGroups: [
      "pessoas com pouca exposição externa ou que cobrem a maior parte da pele por longos períodos;",
      "idosos, cuja capacidade cutânea de síntese é menor;",
      "pessoas com pele mais pigmentada, porque a melanina reduz a produção cutânea para a mesma exposição UV;",
      "pessoas com doença celíaca, Crohn, fibrose cística, cirurgia bariátrica ou outra causa de má absorção de gorduras;",
      "pessoas com doença renal ou hepática que altere as etapas de ativação;",
      "lactentes, conforme a alimentação e o protocolo pediátrico aplicável.",
    ],
    excess: [
      "Excesso pode elevar demais o cálcio no sangue e na urina, causando náusea, fraqueza, desidratação, confusão, cálculos, lesão renal, calcificação de tecidos e alterações do ritmo cardíaco.",
      "A pele limita a produção após exposição UV, portanto toxicidade não costuma resultar do sol. O risco clássico vem de suplementos usados em quantidade ou duração inadequadas.",
      "O UL de 4.000 UI/dia não é uma linha terapêutica nem torna toda dose abaixo dele apropriada para qualquer pessoa.",
    ],
    evidenceSupported: [
      "Corrigir deficiência é essencial para prevenir ou tratar raquitismo e osteomalácia dentro do cuidado adequado.",
      "Vitamina D participa da saúde óssea em conjunto com cálcio, fósforo, atividade física e outros fatores.",
      "D2 e D3 elevam 25(OH)D; em estudos, D3 tende a produzir elevação maior e mais sustentada.",
    ],
    evidenceNotSupported: [
      "Usar uma megadose universal para imunidade, disposição, emagrecimento ou prevenção de todas as doenças.",
      "Prescrever minutos fixos de sol sem considerar latitude, estação, pele, área exposta e risco de câncer de pele.",
      "Tratar todo resultado abaixo de uma faixa comercial como doença ou urgência.",
    ],
    specialTitle: "Sol e vitamina D: por que não existe uma receita universal de minutos",
    specialBody: [
      "Latitude, estação, horário, nuvens, poluição, idade, pigmentação, roupas, área exposta e comportamento mudam a síntese. Vidro bloqueia UVB, portanto luz através da janela não produz vitamina D de forma relevante.",
      "Radiação ultravioleta é carcinogênica. A busca por vitamina D não deve ser usada para desestimular fotoproteção nem recomendar bronzeamento artificial. Alimentação, fortificação e suplementação orientada são rotas que não exigem elevar intencionalmente o risco cutâneo.",
    ],
    supplementChecklist: [
      "Leia microgramas e UI: 1 µg de vitamina D equivale a 40 UI.",
      "Some multivitamínicos, cálcio com D, fórmulas isoladas e alimentos fortificados.",
      "Não transforme o UL em meta diária nem reproduza esquemas de ataque.",
      "Considere o resultado de 25(OH)D junto da causa provável, não apenas do número.",
      "Doença renal, sarcoidose, hiperparatireoidismo ou cálcio elevado exigem avaliação específica.",
    ],
    interactions: [
      "Orlistate e outros contextos de menor absorção de gordura podem reduzir o aproveitamento.",
      "Corticoides podem alterar metabolismo de cálcio e vitamina D em uso prolongado.",
      "Diuréticos tiazídicos, combinados a suplementação, podem aumentar o risco de hipercalcemia em pessoas suscetíveis.",
      "Alguns medicamentos anticonvulsivantes aumentam o metabolismo da vitamina D.",
    ],
    faqs: [
      ["Vitamina D é vitamina ou hormônio?", "Na nutrição é classificada como vitamina; depois de ativada, sua forma 1,25(OH)₂D funciona como hormônio. As duas descrições se referem a etapas diferentes."],
      ["D3 é sempre melhor que D2?", "Ambas elevam 25(OH)D e tratam raquitismo. Em média, D3 tende a elevar e sustentar mais a concentração, mas forma, dose e indicação precisam ser analisadas no contexto."],
      ["Quanto sol preciso por dia?", "Não há um tempo universal seguro e eficaz. A síntese varia muito, e exposição UV aumenta risco de câncer de pele. Não use uma fórmula genérica como prescrição."],
      ["Qual exame mede vitamina D?", "O principal é 25-hidroxivitamina D, ou 25(OH)D. A forma ativa 1,25(OH)₂D geralmente não serve para avaliar reservas."],
      ["4.000 UI por dia é a dose ideal?", "Não. É o UL para adultos definido como teto de ingestão habitual de baixo risco, não meta, dose ideal ou tratamento."],
      ["Vitamina D previne infecções?", "Ela participa da função imunológica normal, mas isso não autoriza promessa universal de prevenção ou tratamento de infecções por suplementação."],
    ],
    nihUrl: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/",
    driUrl: "https://www.nationalacademies.org/read/13050/chapter/1",
    extraReference: [
      "INCA — Exposição solar e radiação ultravioleta",
      "https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-solar",
      "Orientações institucionais brasileiras sobre radiação UV, fotoproteção e prevenção do câncer de pele.",
    ],
  },
  e: {
    key: "e",
    name: "Vitamina E",
    descriptor: "Tocoferóis, tocotrienóis e proteção de membranas",
    slug: "vitamina-e",
    image: "/nutricao/vitamina-e-fontes.webp",
    imageAlt: "Amêndoas, sementes de girassol, abacate, óleo vegetal, espinafre e pimentão reunidos como exemplos de fontes alimentares de vitamina E",
    imageCaption: "Oleaginosas, sementes e óleos vegetais estão entre as fontes mais concentradas de alfa-tocoferol.",
    accent: "#8b6a2f",
    deck: "Vitamina E além da palavra antioxidante: oito formas naturais, alfa-tocoferol, alimentos, absorção de gordura, deficiência rara e riscos de altas doses.",
    lead: "Vitamina E é o nome de oito compostos lipossolúveis — quatro tocoferóis e quatro tocotrienóis. Todos têm atividade antioxidante em laboratório, mas o alfa-tocoferol é a forma que o organismo humano retém preferencialmente e que atende à necessidade nutricional reconhecida.",
    readingTime: "17 min",
    vdr: "15 mg",
    quickFacts: [
      "Existem quatro tocoferóis e quatro tocotrienóis.",
      "A referência nutricional é expressa como alfa-tocoferol.",
      "Sua função mais estabelecida é proteger lipídios de membranas contra oxidação em cadeia.",
      "O VDR brasileiro para rotulagem é 15 mg.",
      "Altas doses de suplemento podem elevar risco de sangramento e não previnem doenças de forma geral.",
    ],
    forms: [
      ["Alfa-tocoferol", "Única forma reconhecida para atender às necessidades humanas; o fígado a retém preferencialmente."],
      ["Beta, gama e delta-tocoferol", "Formas naturais absorvidas, mas metabolizadas e eliminadas de modo diferente."],
      ["Tocotrienóis", "Quatro formas com cauda insaturada; têm interesse científico, mas não substituem automaticamente o alfa-tocoferol nas referências."],
      ["Natural e sintética", "RRR-alfa-tocoferol é a forma natural; all-rac contém estereoisômeros e tem equivalência diferente."],
    ],
    functions: [
      ["Antioxidante lipossolúvel", "Interrompe reações em cadeia que oxidam ácidos graxos poli-insaturados nas membranas."],
      ["Integridade celular", "Ajuda a preservar membranas expostas a processos oxidativos normais."],
      ["Sinalização", "Participa de processos de sinalização, expressão gênica e atividade enzimática."],
      ["Função imunológica", "Contribui para o funcionamento normal do sistema imune, sem justificar promessas de proteção adicional por megadoses."],
      ["Interação com outros antioxidantes", "Atua em uma rede bioquímica; isolar um antioxidante em altas doses não reproduz automaticamente a proteção de uma alimentação."],
    ],
    sources: [
      ["Sementes e oleaginosas", "Sementes de girassol, amêndoas, avelãs e amendoim", "Fontes densas; a porção também adiciona energia e gorduras."],
      ["Óleos vegetais", "Óleo de gérmen de trigo, girassol e cártamo", "O tipo de óleo altera a forma e a quantidade de vitamina E."],
      ["Vegetais", "Abacate, espinafre, brócolis e pimentão", "Contribuem dentro de um padrão variado, geralmente em quantidades menores."],
      ["Fortificados", "Alguns cereais e produtos formulados", "Verifique alfa-tocoferol em mg e a porção do rótulo."],
    ],
    absorption: [
      "Como é lipossolúvel, a vitamina E acompanha a digestão de gorduras, entra em micelas, é absorvida no intestino e transportada em quilomícrons.",
      "Bile, enzimas pancreáticas e transporte de lipoproteínas são relevantes. Por isso, condições de má absorção de gordura apresentam risco maior de deficiência.",
      "O fígado usa uma proteína de transferência para devolver preferencialmente alfa-tocoferol à circulação; outras formas são metabolizadas com mais rapidez.",
    ],
    referenceRows: [
      ["VDR geral no rótulo brasileiro", "15 mg", "Referência para o %VD; não é dose de suplemento."],
      ["RDA — adultos", "15 mg/dia de alfa-tocoferol", "Planejamento da ingestão de adultos saudáveis."],
      ["RDA — gravidez", "15 mg/dia", "Referência populacional."],
      ["RDA — lactação", "19 mg/dia", "Referência populacional para lactantes."],
      ["UL — adultos", "1.000 mg/dia", "Aplica-se a alfa-tocoferol suplementar; não é meta e riscos podem aparecer abaixo dele."],
    ],
    assessment: [
      "O alfa-tocoferol sérico é o marcador mais usado, mas circula em lipoproteínas. Resultados podem parecer altos ou baixos conforme os lipídios sanguíneos, por isso a interpretação pode precisar de ajuste.",
      "Não existe um exame de rotina que converta isoladamente o valor sanguíneo em benefício antioxidante ou necessidade de megadose.",
      "Em suspeita de deficiência, histórico de má absorção, sinais neurológicos e marcadores laboratoriais devem ser avaliados em conjunto.",
    ],
    deficiency: [
      "Deficiência manifesta é rara em pessoas saudáveis. O risco aumenta em doenças que prejudicam absorção ou transporte de gordura e em condições genéticas raras.",
      "Quando grave, pode causar neuropatia periférica, perda de coordenação, fraqueza muscular, alterações da retina e resposta imune prejudicada. Esses sinais não são exclusivos de vitamina E.",
    ],
    riskGroups: [
      "pessoas com fibrose cística, doença de Crohn, colestase ou outras causas de má absorção de gorduras;",
      "pessoas com abetalipoproteinemia ou defeitos da proteína de transferência de alfa-tocoferol;",
      "prematuros de muito baixo peso, exclusivamente sob protocolos neonatais;",
      "pessoas com dietas muito restritas em gorduras e baixa variedade alimentar por períodos prolongados.",
    ],
    excess: [
      "Não foram observados efeitos adversos relevantes da vitamina E presente nos alimentos. A preocupação é o alfa-tocoferol suplementar em altas doses.",
      "Altas quantidades podem inibir agregação plaquetária e antagonizar fatores dependentes de vitamina K, elevando risco de sangramento — sobretudo com anticoagulantes ou antiagregantes.",
      "O UL de 1.000 mg é muito maior que a RDA e não representa dose desejável. Ensaios também identificaram riscos específicos abaixo desse teto em certos grupos.",
    ],
    evidenceSupported: [
      "Vitamina E alimentar é essencial para proteger membranas contra oxidação normal.",
      "Deficiências por má absorção ou condições genéticas requerem estratégias clínicas específicas.",
      "Oleaginosas, sementes e óleos vegetais podem atender à necessidade dentro de uma alimentação variada.",
    ],
    evidenceNotSupported: [
      "Tomar vitamina E de rotina para prevenir doença cardiovascular ou câncer na população geral.",
      "Usar ‘antioxidante’ como sinônimo de antienvelhecimento, desintoxicação ou proteção ilimitada.",
      "Supor que tocotrienóis, formas ‘naturais’ ou doses em UI sejam universalmente superiores.",
    ],
    specialTitle: "Ser antioxidante não transforma uma megadose em proteção extra",
    specialBody: [
      "Estudos observacionais associaram dietas ricas em vitamina E a alguns desfechos favoráveis, mas ensaios clínicos com suplementos não confirmaram prevenção cardiovascular ou de câncer de forma geral.",
      "O ensaio SELECT encontrou maior risco de câncer de próstata com 400 UI/dia de vitamina E sintética em homens. Outros estudos observaram preocupação com acidente vascular cerebral hemorrágico. Forma, dose, população e duração importam.",
    ],
    supplementChecklist: [
      "Procure a quantidade em mg e identifique se o rótulo ainda usa UI.",
      "Diferencie alfa-tocoferol de uma mistura de tocoferóis ou tocotrienóis.",
      "Some multivitamínicos, antioxidantes, fórmulas para pele e produtos esportivos.",
      "Revise anticoagulantes, antiagregantes e cirurgia programada com a equipe de saúde.",
      "Não use altas doses como estratégia preventiva genérica.",
    ],
    interactions: [
      "Varfarina e outros anticoagulantes podem ter o risco de sangramento aumentado por doses altas.",
      "Antiagregantes, como ácido acetilsalicílico, também merecem revisão quando a dose é elevada.",
      "Combinações antioxidantes podem interferir com certos tratamentos de lipídios.",
      "Durante quimioterapia ou radioterapia, antioxidantes em altas doses precisam ser discutidos com a equipe oncológica.",
    ],
    faqs: [
      ["Vitamina E é um único composto?", "Não. O grupo reúne oito formas naturais. O alfa-tocoferol é a forma que o organismo retém preferencialmente e que conta para a necessidade nutricional."],
      ["Vitamina E rejuvenesce a pele?", "Ela protege membranas contra oxidação normal, mas isso não comprova rejuvenescimento ou benefício cosmético garantido por suplemento oral."],
      ["Natural é sempre melhor que sintética?", "As formas têm equivalências biológicas diferentes, mas ‘natural’ não determina sozinho benefício, segurança ou indicação."],
      ["Vitamina E previne doenças do coração?", "Ensaios clínicos não apoiam suplementação rotineira para prevenção cardiovascular na população geral."],
      ["O UL de 1.000 mg é seguro para uso diário?", "UL é teto populacional de baixa probabilidade de dano, não meta. Riscos podem existir abaixo dele conforme pessoa, medicamento e duração."],
      ["Quem usa anticoagulante pode tomar vitamina E?", "Altas doses podem aumentar risco de sangramento. A decisão precisa ser revisada com o profissional que acompanha a anticoagulação."],
    ],
    nihUrl: "https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/",
    driUrl: "https://www.nationalacademies.org/read/9810/chapter/8",
  },
  k: {
    key: "k",
    name: "Vitamina K",
    descriptor: "Filoquinona, menaquinonas e proteínas dependentes de vitamina K",
    slug: "vitamina-k",
    image: "/nutricao/vitamina-k-fontes.webp",
    imageAlt: "Couve, espinafre, brócolis, alface e alimento fermentado de soja reunidos como fontes alimentares relacionadas à vitamina K",
    imageCaption: "Folhas verde-escuras concentram filoquinona; alimentos fermentados e produtos animais podem fornecer diferentes menaquinonas.",
    accent: "#3f7163",
    deck: "Vitamina K com o contexto que o rótulo não mostra: K1, K2, coagulação, ossos, absorção, recém-nascidos, anticoagulantes e limites das promessas.",
    lead: "Vitamina K é uma família de compostos lipossolúveis necessária para ativar proteínas por uma reação chamada carboxilação. Algumas dessas proteínas participam da coagulação; outras atuam em ossos e tecidos. K1 e K2 descrevem famílias relacionadas, não duas vitaminas completamente separadas.",
    readingTime: "17 min",
    vdr: "120 µg",
    quickFacts: [
      "K1, ou filoquinona, predomina em folhas verdes.",
      "K2 reúne menaquinonas com comprimentos de cadeia e fontes diferentes.",
      "É necessária para ativar fatores de coagulação e outras proteínas.",
      "O VDR brasileiro para rotulagem é 120 µg.",
      "Quem usa varfarina geralmente precisa de ingestão consistente, não de exclusão indiscriminada de vegetais.",
    ],
    forms: [
      ["Vitamina K1", "Filoquinona: principal forma alimentar, abundante em folhas verde-escuras e alguns óleos."],
      ["Menaquinonas", "Família K2, identificada como MK-4, MK-7 e outras; fontes e meia-vida variam."],
      ["MK-4", "Menaquinona presente em alguns tecidos e alimentos animais; também pode ser formada a partir de outras formas."],
      ["Menadiona", "Composto sintético conhecido como K3; não é forma de suplemento nutricional apropriada para pessoas."],
    ],
    functions: [
      ["Coagulação", "Permite ativar protrombina e outros fatores que controlam a formação de coágulos."],
      ["Regulação da coagulação", "Também ativa proteínas anticoagulantes naturais, mostrando que o sistema depende de equilíbrio."],
      ["Tecido ósseo", "É necessária para carboxilar osteocalcina, proteína produzida no osso."],
      ["Proteína Gla da matriz", "Ativa uma proteína presente em vasos e outros tecidos; isso não prova que suplemento ‘limpe artérias’."],
      ["Metabolismo integrado", "Trabalha em rede com cálcio, vitamina D, proteínas e a fisiologia hepática."],
    ],
    sources: [
      ["Folhas verde-escuras", "Couve, espinafre, brócolis, alface e outras folhas", "A clorofila acompanha altas concentrações de K1."],
      ["Óleos vegetais", "Soja e canola", "Podem contribuir com K1; quantidade depende do óleo e da porção."],
      ["Fermentados", "Natto e alguns queijos", "Podem fornecer menaquinonas, com grande variação entre produtos."],
      ["Alimentos animais", "Ovos, carnes e laticínios", "Fornecem quantidades variáveis de algumas menaquinonas."],
    ],
    absorption: [
      "A filoquinona dos vegetais está associada às membranas dos cloroplastos. Cortar, cozinhar e consumir com alguma gordura pode aumentar o aproveitamento, mas o efeito depende da refeição.",
      "Menaquinonas entram nas mesmas rotas de absorção de gorduras. Comprimento da cadeia influencia transporte e permanência na circulação.",
      "Bactérias intestinais produzem menaquinonas, porém a contribuição efetiva para a necessidade humana é incerta porque grande parte é formada em regiões com absorção limitada.",
    ],
    referenceRows: [
      ["VDR geral no rótulo brasileiro", "120 µg", "Referência geral para calcular o %VD."],
      ["AI — homens adultos", "120 µg/dia", "Ingestão Adequada, não RDA."],
      ["AI — mulheres adultas", "90 µg/dia", "Ingestão Adequada para mulheres saudáveis."],
      ["AI — gravidez e lactação", "90 µg/dia", "Referência populacional."],
      ["UL", "Não estabelecido", "Baixa toxicidade observada; não significa benefício ilimitado ou ausência de interação."],
    ],
    assessment: [
      "Tempo de protrombina pode se alterar na deficiência relevante, mas não detecta necessariamente inadequação inicial e é influenciado por fígado, medicamentos e outros fatores.",
      "Filoquinona sérica reflete ingestão recente e transporte por lipoproteínas. Proteínas subcarboxiladas são usadas em pesquisa e contextos específicos, não como teste isolado universal.",
      "Não existe um exame doméstico ou um único marcador que indique automaticamente necessidade de K2 suplementar.",
    ],
    deficiency: [
      "Deficiência clinicamente relevante é incomum em adultos saudáveis. Pode causar sangramento e aumento do tempo de coagulação quando absorção, ingestão ou metabolismo ficam muito comprometidos.",
      "Recém-nascidos têm reservas baixas, passagem placentária limitada e pouco conteúdo no leite humano. Por isso, a profilaxia neonatal é uma intervenção médica distinta de suplementação adulta.",
    ],
    riskGroups: [
      "recém-nascidos sem profilaxia adequada, sob cuidado pediátrico;",
      "pessoas com colestase, fibrose cística, doença celíaca, doença inflamatória intestinal ou outra má absorção de gorduras;",
      "pessoas após certas cirurgias gastrointestinais;",
      "pessoas com uso prolongado de antibióticos e ingestão muito baixa, conforme o contexto;",
      "pessoas em uso de antagonistas da vitamina K, nas quais o objetivo é controle terapêutico e consistência alimentar.",
    ],
    excess: [
      "Não há UL para K1 ou menaquinonas por falta de evidência de toxicidade nas ingestões estudadas. Isso não autoriza megadoses, especialmente diante de anticoagulação.",
      "O principal risco prático não é toxicidade clássica, mas alteração do efeito de antagonistas da vitamina K e uso de produtos que prometem resultados vasculares ou ósseos não comprovados.",
      "Menadiona não deve ser confundida com K1 ou K2; causou toxicidade e não é usada como suplemento humano comum.",
    ],
    evidenceSupported: [
      "Vitamina K é essencial para ativar proteínas da coagulação normal.",
      "A profilaxia ao nascer previne sangramento por deficiência em recém-nascidos.",
      "Folhas verdes são fontes importantes e podem fazer parte de uma alimentação consistente durante anticoagulação orientada.",
    ],
    evidenceNotSupported: [
      "Prometer que K2 remove cálcio das artérias, reverte aterosclerose ou previne fraturas de forma universal.",
      "Excluir todas as folhas verdes de quem usa varfarina sem orientação da equipe de anticoagulação.",
      "Tratar ‘K2’ como uma única molécula ou assumir que toda MK-7 é superior para qualquer objetivo.",
    ],
    specialTitle: "Varfarina: consistência é diferente de proibição",
    specialBody: [
      "Varfarina reduz a reciclagem da vitamina K. Mudanças bruscas na ingestão podem aumentar ou diminuir seu efeito e alterar o INR. O objetivo costuma ser manter um padrão alimentar relativamente estável e ajustar o tratamento a ele.",
      "Eliminar verduras indiscriminadamente pode empobrecer a alimentação e ainda não garantir estabilidade. Mudanças em dieta, suplementos, antibióticos ou rotina precisam ser comunicadas à equipe responsável pela anticoagulação.",
    ],
    supplementChecklist: [
      "Identifique K1, MK-4, MK-7 e a quantidade em microgramas.",
      "Não altere vegetais ou suplemento de forma abrupta durante uso de varfarina.",
      "Desconfie de promessas de ‘direcionar cálcio’ ou ‘limpar artérias’.",
      "Considere vitamina D, cálcio e medicamentos presentes no mesmo produto.",
      "Não use conteúdo adulto para decidir cuidado neonatal.",
    ],
    interactions: [
      "Varfarina e outros antagonistas da vitamina K têm interação direta e potencialmente perigosa.",
      "Antibióticos prolongados podem reduzir produção bacteriana e, em alguns casos, interferir no metabolismo da vitamina K.",
      "Orlistate, sequestrantes de ácidos biliares e outras situações de má absorção de gordura podem reduzir o aproveitamento.",
      "Altas doses de vitamina E podem antagonizar processos dependentes de vitamina K e aumentar preocupação com sangramento.",
    ],
    faqs: [
      ["K1 e K2 são vitaminas diferentes?", "São famílias relacionadas de vitamina K. K1 é filoquinona; K2 reúne várias menaquinonas, como MK-4 e MK-7."],
      ["Quem usa varfarina deve parar de comer couve?", "Em geral, o ponto crítico é manter ingestão consistente e alinhar mudanças com a equipe. Exclusão indiscriminada não é uma regra universal."],
      ["Vitamina K2 limpa as artérias?", "Não há base para essa promessa. Proteínas dependentes de vitamina K participam do tecido vascular, mas isso não demonstra reversão de calcificação por suplemento."],
      ["Por que recém-nascidos recebem vitamina K?", "Eles começam a vida com reservas baixas e têm risco de sangramento por deficiência. A profilaxia neonatal é uma intervenção médica preventiva específica."],
      ["Existe limite máximo para vitamina K?", "Não foi estabelecido UL para K1 e menaquinonas por falta de toxicidade observada, mas interações com anticoagulantes continuam clinicamente importantes."],
      ["Natto é obrigatório para obter K2?", "Não. Ele é uma fonte concentrada de MK-7, mas não é requisito universal. O padrão alimentar e o contexto individual importam mais que um alimento isolado."],
    ],
    nihUrl: "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/",
    driUrl: "https://www.nationalacademies.org/read/10026/chapter/7",
  },
};

function FoodTable({ data }: { data: VitaminData }) {
  return (
    <div className="nutrition-table-wrap" tabIndex={0} role="region" aria-label={`Fontes alimentares de ${data.name}; deslize horizontalmente para ver todas as colunas`}>
      <table className="nutrition-table">
        <caption>Fontes alimentares e leitura prática</caption>
        <thead><tr><th scope="col">Grupo</th><th scope="col">Exemplos</th><th scope="col">Como interpretar</th></tr></thead>
        <tbody>{data.sources.map(([group, examples, note]) => <tr key={group}><th scope="row">{group}</th><td>{examples}</td><td>{note}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function ReferenceTable({ data }: { data: VitaminData }) {
  return (
    <div className="nutrition-table-wrap nutrition-reference-table" tabIndex={0} role="region" aria-label={`Valores de referência de ${data.name}; deslize horizontalmente para ver todas as colunas`}>
      <table className="nutrition-table">
        <caption>Valores de referência selecionados para {data.name}</caption>
        <thead><tr><th scope="col">Referência</th><th scope="col">Valor</th><th scope="col">Para que serve</th></tr></thead>
        <tbody>{data.referenceRows.map(([label, value, detail]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td><td>{detail}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export function FatSolubleVitaminPage({ vitamin }: { vitamin: FatSolubleVitaminKey }) {
  const data = vitamins[vitamin];
  const path = `/nutricao/vitaminas/${data.slug}`;
  const canonical = `${SITE_URL}${path}`;
  const references = [
    ["Anvisa — Instrução Normativa nº 75/2020", ANVISA_URL, `VDR brasileiro de ${data.vdr}, unidades e referências para rotulagem.`],
    [`NIH Office of Dietary Supplements — ${data.name}`, data.nihUrl, "Ficha técnica para profissionais sobre formas, funções, fontes, necessidades, deficiência, segurança e interações."],
    ["National Academies — Dietary Reference Intakes", data.driUrl, "Documento-base para RDA, AI, UL e interpretação das referências nutricionais."],
    ...(data.extraReference ? [data.extraReference] : []),
  ];
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: data.name,
    description: data.deck, datePublished: "2026-08-27", dateModified: "2026-08-27", inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical }, image: [`${SITE_URL}${data.image}`],
    author: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    about: [data.name, data.descriptor, "Vitaminas lipossolúveis"], citation: references.map((reference) => reference[1]),
  };
  const toc = [
    ["entenda", "O que é"], ["formas", "Formas"], ["funcoes", "Funções"],
    ["fontes", "Fontes e absorção"], ["necessidades", "Quanto precisamos?"],
    ["avaliacao-status", "Como avaliar o status"], ["deficiencia", "Deficiência"],
    ["excesso", "Excesso e segurança"], ["evidencia", "O que a evidência sustenta"],
    ["ponto-chave", data.specialTitle], ["suplementacao", "Suplementação"],
    ["avaliacao", "Quando buscar avaliação"],
  ];

  return (
    <PageShell active="/nutricao" breadcrumb={[{ label: "Início", href: "/" }, { label: "Nutrição", href: "/nutricao" }, { label: "Vitaminas", href: "/nutricao/vitaminas" }, { label: data.name }]}>
      <JsonLd value={articleSchema} />
      <article className="nutrition-article nutrition-article--fat-soluble" style={{ "--vitamin-accent": data.accent } as React.CSSProperties}>
        <header className="nutrition-article-hero">
          <div className="nutrition-article-heading">
            <p className="eyebrow">Nutrição · Vitamina lipossolúvel</p>
            <h1>{data.name}</h1><p className="nutrition-vitamin-name">{data.descriptor}</p>
            <p className="nutrition-deck">{data.deck}</p>
            <div className="nutrition-publication-meta"><span>Conteúdo editorial Clever Souza</span><span>Atualizado em <time dateTime="2026-08-27">27 de agosto de 2026</time></span><span>Leitura aprofundada · cerca de {data.readingTime}</span></div>
          </div>
          <figure className="nutrition-hero-visual"><img src={data.image} alt={data.imageAlt} width="1536" height="1024" loading="eager" fetchPriority="high" decoding="async" /><figcaption>{data.imageCaption}</figcaption></figure>
        </header>

        <div className="nutrition-article-layout">
          <aside className="nutrition-toc" aria-label="Índice do guia"><strong>Neste guia</strong><ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}<li><a href="#perguntas-frequentes">Perguntas frequentes</a></li><li><a href="#referencias">Referências</a></li></ol></aside>
          <div className="nutrition-article-body prose">
            <p className="nutrition-lead">{data.lead}</p>
            <aside className="nutrition-essential" aria-label={`${data.name} em poucas palavras`}><p className="eyebrow">Em poucas palavras</p><ul>{data.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>

            <section id="entenda"><p className="eyebrow">01 · Fundamento</p><h2>O que é {data.name}</h2><p>{data.lead}</p><p>“Lipossolúvel” significa que sua digestão, transporte e armazenamento se relacionam com gorduras. Isso muda a biodisponibilidade e também exige atenção ao acúmulo ou às interações — sem tornar todos os suplementos perigosos.</p></section>
            <section id="formas"><p className="eyebrow">02 · Formas</p><h2>Formas, nomes e diferenças que importam</h2><dl className="nutrition-form-grid">{data.forms.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl><p className="nutrition-note"><strong>Nome sofisticado não substitui evidência.</strong> Forma, quantidade, estabilidade, origem e indicação precisam ser avaliadas juntas.</p></section>
            <section id="funcoes"><p className="eyebrow">03 · Fisiologia</p><h2>O que ela faz no organismo</h2><ul className="nutrition-function-list">{data.functions.map(([name, detail]) => <li key={name}><strong>{name}:</strong> {detail}</li>)}</ul><p>Participar de uma função normal não comprova que doses extras previnam doenças ou ampliem indefinidamente essa função.</p></section>
            <section id="fontes"><p className="eyebrow">04 · Alimentação</p><h2>Fontes alimentares e aproveitamento</h2><FoodTable data={data} /><h3>Absorção e biodisponibilidade</h3>{data.absorption.map((item) => <p key={item}>{item}</p>)}<p className="nutrition-table-footnote">Os exemplos são qualitativos. Teores variam com alimento, porção, produção, processamento e preparo; consulte uma base de composição para cálculos específicos.</p></section>
            <section id="necessidades"><p className="eyebrow">05 · Números com contexto</p><h2>Quanto precisamos?</h2><div className="nutrition-vdr-callout"><span>VDR no Brasil</span><strong>{data.vdr}</strong><p>Referência da Anvisa para o %VD de alimentos em geral.</p></div><h3>Valor Diário não é necessidade individual</h3><p>O VDR permite calcular o percentual do rótulo e comparar alimentos. Não é dose ideal universal, limite máximo nem justificativa automática para suplementação.</p><p>RDA e AI orientam planejamento de ingestão em grupos saudáveis. UL é um teto populacional de baixa probabilidade de dano — não uma meta e não uma fronteira perfeita para cada pessoa.</p><ReferenceTable data={data} /><p className="nutrition-table-footnote">VDR brasileiro da Anvisa e referências individuais da National Academies. Valores populacionais não substituem avaliação individual.</p></section>
            <section id="avaliacao-status"><p className="eyebrow">06 · Interpretação</p><h2>Como o status nutricional é avaliado</h2>{data.assessment.map((item) => <p key={item}>{item}</p>)}<p className="nutrition-note"><strong>Exame não é prescrição automática.</strong> Método, unidade, laboratório, sintomas, alimentação, medicamentos e condições clínicas modificam a interpretação.</p></section>
            <section id="deficiencia"><p className="eyebrow">07 · Inadequação</p><h2>Deficiência de {data.name}</h2>{data.deficiency.map((item) => <p key={item}>{item}</p>)}<h3>Quem pode apresentar maior risco</h3><ul>{data.riskGroups.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="excesso"><p className="eyebrow">08 · Segurança</p><h2>Excesso, toxicidade e limites</h2>{data.excess.map((item) => <p key={item}>{item}</p>)}</section>
            <section id="evidencia"><p className="eyebrow">09 · Evidência em contexto</p><h2>O que a evidência sustenta — e o que ela não autoriza prometer</h2><div className="nutrition-risk-compare"><div><h3>O que podemos afirmar</h3><ul>{data.evidenceSupported.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>O que não está demonstrado</h3><ul>{data.evidenceNotSupported.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
            <section id="ponto-chave"><p className="eyebrow">10 · Ponto crítico</p><h2>{data.specialTitle}</h2>{data.specialBody.map((item) => <p key={item}>{item}</p>)}</section>
            <section id="suplementacao"><p className="eyebrow">11 · Decisão responsável</p><h2>Suplementação sem automatismos</h2><p>Suplemento não substitui alimentação equilibrada. Pode ser útil quando ingestão, absorção, fase da vida ou diagnóstico justificam, mas quantidade maior não significa benefício maior.</p><ol className="nutrition-checklist">{data.supplementChecklist.map((item) => <li key={item}>{item}</li>)}</ol><h3>Interações e situações que merecem revisão</h3><ul>{data.interactions.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="avaliacao"><p className="eyebrow">12 · Próximo passo</p><h2>Quando a avaliação profissional é especialmente importante</h2><ul><li>sinais progressivos, sangramento inexplicado, fraqueza persistente ou suspeita de deficiência;</li><li>infância, gravidez, lactação, idade avançada ou cirurgia bariátrica;</li><li>doença renal, hepática, pancreática, intestinal ou má absorção de gorduras;</li><li>uso de anticoagulantes, anticonvulsivantes ou outros medicamentos contínuos;</li><li>intenção de usar altas doses ou combinar diversos suplementos.</li></ul><aside className="health-note nutrition-health-note"><strong>Conteúdo educativo</strong><p>Esta página não diagnostica deficiência, não prescreve suplementação e não substitui avaliação de médico, nutricionista ou outro profissional habilitado.</p><Link href="/aviso-de-saude">Leia o Aviso de Saúde</Link></aside></section>

            <section className="nutrition-faq" id="perguntas-frequentes"><p className="eyebrow">Consulta rápida</p><h2>Perguntas frequentes</h2><div className="faq-list">{data.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
            <section className="nutrition-references" id="referencias"><p className="eyebrow">Base documental</p><h2>Fontes e referências</h2><ol>{references.map(([title, url, detail]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title}</a><p>{detail}</p></li>)}</ol><p className="nutrition-source-note">Fontes consultadas em 27 de agosto de 2026. Valores regulatórios podem mudar; para uso profissional, consulte o texto normativo vigente.</p></section>
            <nav className="nutrition-article-paths" aria-label="Continuar na área de Nutrição"><Link href="/nutricao/vitaminas">← Todas as vitaminas</Link><Link href="/nutricao">Explorar Nutrição</Link></nav>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
