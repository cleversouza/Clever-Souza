import type { NutrientData, NutrientReference } from "./nutrient-types";

const WHO_PROTEIN: NutrientReference = {
  title: "FAO/WHO/UNU — Protein and amino acid requirements in human nutrition",
  url: "https://iris.who.int/handle/10665/43411",
  detail: "Relatório técnico sobre necessidades de proteína e aminoácidos indispensáveis por fase da vida.",
};

const NASEM_PROTEIN: NutrientReference = {
  title: "National Academies — DRI de proteína e aminoácidos",
  url: "https://www.nationalacademies.org/read/11537/chapter/14",
  detail: "Fundamentos de necessidades, qualidade proteica e aminoácidos indispensáveis.",
};

const FAO_QUALITY: NutrientReference = {
  title: "FAO — Dietary protein quality evaluation in human nutrition",
  url: "https://openknowledge.fao.org/bitstreams/ac92088c-139a-4d63-8460-be036581c87f/download",
  detail: "Consulta de especialistas sobre aminoácidos digestíveis indispensáveis e qualidade proteica.",
};

type AminoInput = {
  slug: string;
  name: string;
  accent: string;
  requirement: string;
  deck: string;
  lead: string;
  chemistry: Array<[string, string]>;
  functions: Array<[string, string]>;
  sourceNote: string;
  physiology: string[];
  inadequacy: string[];
  riskGroups: string[];
  excess: string[];
  evidenceTitle: string;
  evidenceBody: string[];
  practicalChecklist: string[];
  interactions: string[];
  faqs: Array<[string, string]>;
};

function amino(input: AminoInput): NutrientData {
  return {
    category: "aminoacidos",
    slug: input.slug,
    name: input.name,
    kicker: "Aminoácido indispensável · Proteínas",
    accent: input.accent,
    deck: input.deck,
    lead: input.lead,
    readingTime: "12 min",
    labelReference: "Sem VDR individual",
    labelReferenceNote: "A legislação brasileira usa VDR para proteína, não %VD separado para este aminoácido.",
    quickFacts: [
      "É indispensável: o organismo não produz quantidade suficiente para atender às necessidades.",
      "A necessidade é expressa por quilograma de peso e depende da oferta proteica total.",
      "Alimentos fornecem misturas de aminoácidos, não moléculas isoladas.",
      `Referência FAO/WHO/UNU para adultos: ${input.requirement}.`,
      "Suplementação isolada não substitui proteína, energia e variedade adequadas.",
    ],
    forms: input.chemistry,
    functions: input.functions,
    sources: [
      ["Alimentos animais", "Ovos, leite, carnes, peixes e aves", "Geralmente oferecem todos os indispensáveis em proporções favoráveis."],
      ["Leguminosas", "Feijões, lentilha, grão-de-bico, ervilha e soja", "Boas fontes; perfil varia por alimento."],
      ["Grãos e pseudocereais", "Arroz, trigo, aveia, milho e quinoa", "Contribuem e podem complementar leguminosas."],
      ["Sementes e oleaginosas", "Amendoim, castanhas e sementes", input.sourceNote],
    ],
    physiology: input.physiology,
    referenceRows: [
      ["VDR brasileiro individual", "Não estabelecido", "O rótulo usa 75 g para proteína total."],
      ["Necessidade média adulta — FAO/WHO/UNU", input.requirement, "Expressa por kg de peso corporal ao dia."],
      ["RDA de proteína — adultos", "0,8 g/kg/dia", "Aminoácidos devem estar contidos na proteína total digestível."],
      ["UL", "Não estabelecido", "Não significa que grandes doses isoladas sejam seguras."],
    ],
    inadequacy: input.inadequacy,
    riskGroups: input.riskGroups,
    excess: input.excess,
    evidenceTitle: input.evidenceTitle,
    evidenceBody: input.evidenceBody,
    practicalChecklist: input.practicalChecklist,
    interactions: input.interactions,
    faqs: input.faqs,
    references: [WHO_PROTEIN, NASEM_PROTEIN, FAO_QUALITY],
  };
}

export const AMINO_ACID_NUTRIENTS: NutrientData[] = [
  amino({
    slug: "histidina", name: "Histidina", accent: "#7d648f", requirement: "10 mg/kg/dia",
    deck: "Histidina como aminoácido indispensável: proteínas, hemoglobina, histamina, carnosina, crescimento e por que suplementos isolados raramente resolvem sintomas vagos.",
    lead: "Histidina é indispensável em todas as fases da vida. Ela integra proteínas e serve de precursora para histamina e carnosina, além de participar da estrutura da hemoglobina e de enzimas.",
    chemistry: [["L-histidina", "Forma incorporada às proteínas humanas."], ["Histamina", "Produzida por descarboxilação; atua em imunidade, ácido gástrico e neurotransmissão."], ["Carnosina", "Dipeptídeo de histidina e beta-alanina presente em músculo e cérebro."], ["Resíduo de histidina", "Sua cadeia lateral aceita e doa prótons, útil em centros ativos de enzimas."]],
    functions: [["Proteínas", "Integra estrutura e sítios catalíticos."], ["Hemoglobina", "Ajuda a estabilizar a ligação e liberação de oxigênio."], ["Histamina", "É precursora de um mensageiro com ações diversas."], ["Carnosina", "Contribui para tamponamento intracelular."],
    ],
    sourceNote: "Contribuem com histidina, mas o perfil total da proteína importa.",
    physiology: ["É absorvida com outros aminoácidos e entra no pool corporal.", "A enzima histidina descarboxilase produz histamina sob regulação tecidual.", "Pequenas quantidades não utilizadas em síntese são catabolizadas; não há depósito exclusivo."],
    inadequacy: ["Deficiência isolada é improvável em dietas com proteína suficiente. Restrição experimental pode alterar hemoglobina e balanço nitrogenado.", "Anemia, alergia ou intolerância à histamina não devem ser atribuídas automaticamente a baixa histidina."],
    riskGroups: ["pessoas com desnutrição proteico-energética;", "pessoas com má absorção extensa;", "pacientes em dietas terapêuticas muito restritas;", "crianças em crescimento com oferta proteica inadequada."],
    excess: ["Não há UL. Doses isoladas alteram competição entre aminoácidos e podem causar efeitos gastrointestinais.", "Aumentar histidina não é tratamento geral para anemia, alergia ou fadiga."],
    evidenceTitle: "Precursor de histamina não significa “causar alergia”", evidenceBody: ["Histamina é produzida e degradada por vias reguladas; alergia envolve resposta imune, não simplesmente comer histidina.", "Restrição de histamina alimentar e suplementação de histidina são discussões diferentes."],
    practicalChecklist: ["Avalie proteína total antes de um aminoácido isolado.", "Não use para automedicar anemia.", "Diferencie histidina de histamina.", "Em dietas terapêuticas, siga plano individualizado."],
    interactions: ["Inibidores da histamina agem em receptores, não retiram a necessidade de histidina.", "Doenças metabólicas raras podem exigir manejo específico.", "Grandes doses podem competir com outros aminoácidos no transporte."],
    faqs: [["Histidina vira histamina?", "Uma parte pode ser convertida por enzima específica, mas a produção é regulada e não equivale a alergia automática."], ["É essencial para adultos?", "Sim. Evidências modernas reconhecem sua indispensabilidade em todas as idades."], ["Carnes são obrigatórias?", "Não. Leguminosas, soja, grãos e outros alimentos podem compor oferta suficiente."], ["Preciso suplementar?", "Raramente quando proteína e energia são adequadas."]],
  }),
  amino({
    slug: "isoleucina", name: "Isoleucina", accent: "#4f7588", requirement: "20 mg/kg/dia",
    deck: "Isoleucina sem o marketing de BCAA: síntese proteica, energia muscular, glicose, fontes alimentares e limites de doses isoladas.",
    lead: "Isoleucina é um dos três aminoácidos de cadeia ramificada, os BCAA. Ela integra proteínas e pode ser oxidada no músculo, mas sua função ocorre dentro do conjunto de aminoácidos e energia.",
    chemistry: [["L-isoleucina", "Forma incorporada às proteínas."], ["BCAA", "Família com leucina e valina; compartilha enzimas de catabolismo."], ["Cetogênica e glicogênica", "Seu carbono pode contribuir para acetil-CoA e intermediários que apoiam gliconeogênese."], ["Aminoácido neutro", "Compartilha transportadores com outros aminoácidos grandes."]],
    functions: [["Síntese proteica", "Fornece material para proteínas corporais."], ["Energia muscular", "Pode ser oxidada especialmente em exercício e jejum."], ["Glicose", "Participa de vias que influenciam captação e produção energética."], ["Hemoglobina", "Oferta adequada integra renovação de células e proteínas sanguíneas."]],
    sourceNote: "Aparece em proteínas vegetais e animais; quantidade total importa.",
    physiology: ["O fígado inicia pouco do catabolismo de BCAA; músculo e outros tecidos têm papel importante.", "Isoleucina, leucina e valina competem em transporte e degradação.", "Doses isoladas podem desequilibrar a proporção sem melhorar síntese se outros indispensáveis faltarem."],
    inadequacy: ["Deficiência isolada é rara e ocorreria com dieta proteica inadequada ou fórmula desequilibrada.", "Pode contribuir para perda de massa e balanço nitrogenado negativo, sinais comuns à falta de proteína."],
    riskGroups: ["pessoas com desnutrição;", "pessoas em dietas artificiais mal formuladas;", "portadores de doença da urina do xarope de bordo;", "pessoas com má absorção extensa."],
    excess: ["Não há UL. Grandes doses podem aumentar amônia, sintomas gastrointestinais e competição com outros BCAA.", "Erros inatos do catabolismo tornam ingestão sem controle especialmente perigosa."],
    evidenceTitle: "BCAA isolado não substitui proteína completa", evidenceBody: ["Sinalizar síntese e construir proteína são tarefas diferentes; todos os aminoácidos indispensáveis precisam estar disponíveis.", "Quando proteína alimentar já é suficiente, benefício adicional de BCAA isolado tende a ser limitado."],
    practicalChecklist: ["Conte proteína total antes de BCAA.", "Não use proporções de academia como referência médica.", "Em doença metabólica, siga fórmula prescrita.", "Considere energia e treinamento junto."],
    interactions: ["Compartilha transporte com outros aminoácidos neutros.", "Doença da urina do xarope de bordo exige restrição especializada dos três BCAA.", "Diabetes e doença hepática mudam a leitura de suplementos."],
    faqs: [["Isoleucina é BCAA?", "Sim, junto com leucina e valina."], ["BCAA evita perda muscular?", "Proteína suficiente, energia e treino são mais determinantes; suplemento isolado não é garantia."], ["Veganos conseguem obter?", "Sim, com proteína vegetal suficiente e variada."], ["Existe dose diária fixa?", "A referência é por kg e dentro da proteína total, não uma cápsula universal."]],
  }),
  amino({
    slug: "leucina", name: "Leucina", accent: "#9b6b36", requirement: "39 mg/kg/dia",
    deck: "Leucina, mTOR e síntese muscular com contexto: gatilho não é construção completa, alimentos, envelhecimento e limites da lógica do “limiar”.",
    lead: "Leucina é um BCAA indispensável e um sinal metabólico importante para síntese proteica. Ela ajuda a ativar mTORC1, mas o músculo só constrói proteína quando todos os aminoácidos, energia e estímulo estão disponíveis.",
    chemistry: [["L-leucina", "Forma proteica e suplementar."], ["BCAA", "Compartilha catabolismo com isoleucina e valina."], ["KIC", "Alfa-cetoisocaproato, intermediário do catabolismo."], ["HMB", "Metabólito produzido em pequena quantidade; não é equivalente à leucina nem substitui proteína."]],
    functions: [["Sinalização mTOR", "Ajuda a indicar disponibilidade de aminoácidos."], ["Síntese proteica", "Fornece substrato e sinal, mas depende dos demais indispensáveis."], ["Energia", "Pode ser oxidada; é exclusivamente cetogênica."], ["Preservação tecidual", "Integra renovação muscular dentro de dieta e atividade adequadas."]],
    sourceNote: "Leite, soja e leguminosas podem contribuir de forma relevante.",
    physiology: ["A elevação após refeição sinaliza mTORC1 por sensores celulares.", "Existe resposta saturável por refeição, mas um “limiar” fixo não vale para toda idade, corpo e refeição.", "Idosos podem ter menor sensibilidade anabólica; isso não autoriza megadose sem avaliar proteína total e exercício."],
    inadequacy: ["Deficiência isolada é rara e acompanha oferta proteica inadequada.", "Perda muscular tem causas múltiplas: inatividade, energia, doença, inflamação e hormônios."],
    riskGroups: ["idosos com baixa ingestão e sarcopenia;", "pessoas em recuperação ou com baixo consumo energético;", "portadores de doença da urina do xarope de bordo;", "pessoas com doença hepática ou renal que consideram suplementos."],
    excess: ["Não há UL. Doses altas podem desequilibrar BCAA e não constroem músculo sem os demais substratos.", "Suplementos podem somar adoçantes, sódio e outros ingredientes."],
    evidenceTitle: "Gatilho não é tijolo suficiente", evidenceBody: ["Leucina sinaliza, mas síntese para quando outro aminoácido indispensável limita.", "Alimentos e proteínas completas entregam o conjunto; leucina isolada tem uso mais estreito do que o marketing sugere."],
    practicalChecklist: ["Priorize refeições com proteína suficiente.", "Combine com treino de força quando o objetivo é músculo.", "Não persiga um limiar fixo sem contexto.", "Em doença metabólica ou renal, não use isoladamente."],
    interactions: ["Compartilha vias com isoleucina e valina.", "Doença da urina do xarope de bordo exige controle rigoroso.", "Leucina pode influenciar glicose, mas não substitui tratamento."],
    faqs: [["Leucina constrói músculo?", "Participa e sinaliza, mas todos os aminoácidos, energia e treino são necessários."], ["Quanto por refeição?", "Não há número universal; idade, massa, proteína e refeição mudam a resposta."], ["Whey tem leucina?", "Sim, assim como leite, carnes, ovos e soja em diferentes proporções."], ["HMB é leucina?", "É um metabólito derivado, com evidência e dose próprias."]],
  }),
  amino({
    slug: "lisina", name: "Lisina", accent: "#8a5571", requirement: "30 mg/kg/dia",
    deck: "Lisina em proteínas, colágeno e carnitina: fontes, cereais como aminoácido limitante, complementaridade e o que suplementos não demonstram de forma geral.",
    lead: "Lisina é indispensável e frequentemente é o aminoácido limitante em cereais. Ela integra proteínas, participa da estrutura do colágeno e é precursora de carnitina.",
    chemistry: [["L-lisina", "Forma incorporada às proteínas."], ["Hidroxilisina", "Derivado presente em colágeno e importante para ligações e glicosilação."], ["Carnitina", "Produzida a partir de lisina e metionina com participação de outros nutrientes."], ["Aminoácido básico", "Sua cadeia lateral positiva influencia estrutura e modificação de proteínas."]],
    functions: [["Proteínas", "Integra síntese e renovação."], ["Colágeno", "Resíduos de lisina e hidroxilisina participam de ligações cruzadas."], ["Carnitina", "Serve de esqueleto para síntese endógena."], ["Epigenética", "Modificações de lisinas em histonas ajudam a regular genes."]],
    sourceNote: "Leguminosas tendem a oferecer mais lisina que cereais.",
    physiology: ["É absorvida com outros aminoácidos básicos.", "Cereais podem ter lisina como aminoácido limitante; leguminosas complementam o padrão diário.", "A síntese de carnitina não significa que lisina extra aumente automaticamente queima de gordura."],
    inadequacy: ["Deficiência isolada é rara fora de baixa proteína ou dieta muito monotônica baseada em cereal.", "Pode prejudicar crescimento e balanço proteico, sem sinal clínico específico."],
    riskGroups: ["pessoas em insegurança alimentar com dietas monótonas;", "pessoas com baixa ingestão total de proteína;", "pacientes em dietas artificiais inadequadas;", "pessoas com doença genética de transporte de aminoácidos."],
    excess: ["Não há UL. Doses suplementares podem causar desconforto gastrointestinal e têm segurança limitada em doença renal ou hepática.", "Alegações para herpes têm resultados mistos e não substituem antivirais quando indicados."],
    evidenceTitle: "Complementaridade não exige combinar em cada garfada", evidenceBody: ["Arroz tende a ter menos lisina; feijão oferece mais. O pool de aminoácidos ao longo do dia permite complementação.", "A prioridade é variedade e proteína total suficiente, não regras rígidas de combinação instantânea."],
    practicalChecklist: ["Inclua leguminosas em dietas baseadas em grãos.", "Não use lisina como queimador de gordura.", "Herpes recorrente merece plano clínico.", "Considere proteína total."],
    interactions: ["Altas doses compartilham transporte com arginina e outros básicos.", "Doença renal/hepática muda segurança.", "Antibióticos aminoglicosídeos têm toxicidade própria; não combine suplementos sem orientação."],
    faqs: [["Lisina ajuda herpes?", "Alguns estudos sugerem efeito sob condições específicas, mas evidência é inconsistente e não substitui tratamento antiviral."], ["Arroz tem lisina?", "Tem, porém em proporção menor em relação à necessidade; feijões complementam."], ["Lisina forma colágeno?", "Integra colágeno, mas suplemento isolado não garante mais síntese."], ["Veganos têm risco?", "Podem atender com leguminosas, soja e proteína total adequada."]],
  }),
  amino({
    slug: "metionina", name: "Metionina", accent: "#596f55", requirement: "15 mg/kg/dia de metionina + cisteína",
    deck: "Metionina, enxofre, SAM e homocisteína: necessidade em conjunto com cisteína, fontes, metilação e por que restrição ou megadose não são estratégias domésticas.",
    lead: "Metionina é um aminoácido sulfurado indispensável e ponto de partida para S-adenosilmetionina, doadora de grupos metil. A necessidade é avaliada junto à cisteína, que pode poupar parte da metionina.",
    chemistry: [["L-metionina", "Forma proteica e iniciadora da tradução de muitas proteínas."], ["SAM", "S-adenosilmetionina doa grupos metil a DNA, proteínas e lipídios."], ["Homocisteína", "Intermediário reciclado a metionina ou direcionado à produção de cisteína."], ["Cisteína", "Aminoácido sulfurado condicionalmente indispensável que poupa parte da necessidade de metionina."]],
    functions: [["Síntese proteica", "Integra proteínas e inicia tradução."], ["Metilação", "SAM apoia inúmeras reações regulatórias."], ["Enxofre", "Fornece enxofre para cisteína, glutationa e outros compostos."], ["Poliaminas e creatina", "Participa indiretamente de vias biossintéticas."]],
    sourceNote: "Sementes costumam ter mais metionina que leguminosas, ajudando a complementar perfis.",
    physiology: ["Ciclo da metionina conecta folato, B12, B6, riboflavina e colina.", "Homocisteína elevada tem muitas causas e não é simples medida de metionina ingerida.", "A exigência é expressa como soma de metionina e cisteína porque uma poupa a outra parcialmente."],
    inadequacy: ["Deficiência isolada é rara e acompanha proteína inadequada.", "Distúrbios de metilação ou homocisteína podem refletir vitaminas, rim, genética e medicamentos."],
    riskGroups: ["pessoas com desnutrição proteica;", "portadores de homocistinúria ou outros erros inatos;", "pessoas em fórmulas terapêuticas;", "pessoas com doença hepática que usam SAMe ou metionina."],
    excess: ["Não há UL. Grandes doses podem elevar homocisteína, causar náusea e alterar equilíbrio de aminoácidos.", "Restrição experimental de metionina em longevidade não é recomendação clínica para pessoas."],
    evidenceTitle: "Metilação não é uma chave para “ligar genes bons”", evidenceBody: ["SAM participa de metilação, mas vias são reguladas e dependem de muitos nutrientes.", "Mais doador de metil não significa melhor epigenética; tanto excesso quanto deficiência podem perturbar equilíbrio."],
    practicalChecklist: ["Considere metionina + cisteína.", "Não use SAMe como equivalente alimentar sem avaliar interações.", "Homocisteína alta exige investigação.", "Evite dietas de restrição extrema por promessa de longevidade."],
    interactions: ["Folato, B12, B6, colina e riboflavina conectam-se ao ciclo.", "SAMe pode interagir com antidepressivos e transtorno bipolar.", "Erros inatos exigem dietas médicas específicas."],
    faqs: [["Metionina aumenta homocisteína?", "Pode contribuir no metabolismo, mas níveis dependem de vitaminas, rim, genética e outros fatores."], ["Por que a necessidade inclui cisteína?", "Cisteína pode poupar parte da metionina usada para produzi-la."], ["É antioxidante?", "É precursora de cisteína e glutationa, mas isso não transforma megadose em antioxidante seguro."], ["Restringir aumenta longevidade?", "Dados experimentais não justificam restrição extrema em humanos."]],
  }),
  amino({
    slug: "fenilalanina", name: "Fenilalanina", accent: "#75609b", requirement: "25 mg/kg/dia de fenilalanina + tirosina",
    deck: "Fenilalanina, tirosina e neurotransmissores: necessidade conjunta, fontes proteicas, fenilcetonúria, aspartame e limites da ideia de melhorar foco com precursores.",
    lead: "Fenilalanina é indispensável e pode ser convertida em tirosina. Juntas sustentam síntese proteica e fornecem precursores para catecolaminas, hormônios tireoidianos e melanina.",
    chemistry: [["L-fenilalanina", "Forma natural incorporada às proteínas."], ["Tirosina", "Produzida a partir de fenilalanina; torna-se condicionalmente indispensável na fenilcetonúria."], ["D-fenilalanina", "Isômero não usado da mesma forma em proteínas humanas."], ["Aspartame", "Edulcorante que libera fenilalanina e deve trazer alerta para fenilcetonúricos."]],
    functions: [["Proteínas", "Integra síntese e renovação."], ["Tirosina", "Fornece o precursor para uma via ampla."], ["Catecolaminas", "Tirosina antecede dopamina, noradrenalina e adrenalina."], ["Tireoide e melanina", "Tirosinas integram hormônios e pigmentos."]],
    sourceNote: "Alimentos proteicos variados fornecem fenilalanina; soja é uma fonte relevante.",
    physiology: ["Fenilalanina hidroxilase converte fenilalanina em tirosina com cofator BH4.", "Na fenilcetonúria, falha nessa via eleva fenilalanina e pode lesar o cérebro.", "Dar mais precursor não aumenta linearmente neurotransmissores porque transporte e enzimas são regulados."],
    inadequacy: ["Deficiência isolada é rara com proteína adequada.", "Na fenilcetonúria, o problema é excesso de fenilalanina e deficiência relativa de tirosina, não falta alimentar comum."],
    riskGroups: ["pessoas com fenilcetonúria;", "gestantes com fenilcetonúria, que precisam de controle rigoroso antes e durante gestação;", "pessoas em dietas médicas de baixo teor proteico;", "usuários de medicamentos que atuam em catecolaminas."],
    excess: ["Não há UL geral. Em fenilcetonúria, quantidades comuns são tóxicas sem manejo.", "Suplementos podem causar cefaleia, náusea e interação com medicamentos."],
    evidenceTitle: "Precursor não é estimulante previsível", evidenceBody: ["A via até dopamina é regulada e fenilalanina compete com outros aminoácidos para entrar no cérebro.", "Suplementar não garante foco, humor ou energia e pode ser perigoso em fenilcetonúria."],
    practicalChecklist: ["Respeite o alerta “contém fenilalanina”.", "Não use para foco sem avaliar medicamentos.", "Fenilcetonúria exige equipe e fórmulas específicas.", "Considere a soma fenilalanina + tirosina."],
    interactions: ["Levodopa e aminoácidos grandes competem por transporte.", "Inibidores de MAO e outros psicofármacos exigem cautela com precursores.", "Sapropterina e dietas médicas pertencem ao tratamento de fenilcetonúria."],
    faqs: [["Aspartame contém fenilalanina?", "É metabolizado em componentes que incluem fenilalanina, por isso há alerta para fenilcetonúricos."], ["Fenilalanina vira dopamina?", "Indiretamente, via tirosina, mas o processo é regulado e não aumenta linearmente com suplemento."], ["PKU é alergia?", "Não. É um erro genético do metabolismo que exige controle de fenilalanina."], ["Por que a referência inclui tirosina?", "Tirosina poupa fenilalanina que seria usada para produzi-la."]],
  }),
  amino({
    slug: "treonina", name: "Treonina", accent: "#4c7d77", requirement: "15 mg/kg/dia",
    deck: "Treonina em proteínas, mucinas e tecido conjuntivo: fontes, metabolismo intestinal, indispensabilidade e a falta de evidência para suplementação isolada rotineira.",
    lead: "Treonina é indispensável e integra proteínas estruturais e mucinas que protegem superfícies do trato gastrointestinal. Parte relevante é utilizada pelo próprio intestino.",
    chemistry: [["L-treonina", "Forma proteica."], ["Fosfotreonina", "Modificação reversível que regula atividade de proteínas."], ["Glicina", "Pode ser produzida a partir de treonina por algumas vias."], ["Mucinas", "Proteínas ricas em serina e treonina, com açúcares ligados."]],
    functions: [["Proteínas", "Integra síntese corporal."], ["Barreira intestinal", "Resíduos de treonina são abundantes em mucinas."], ["Regulação", "Fosforilação de treonina modula enzimas e sinais."], ["Tecido conjuntivo", "Integra colágeno, elastina e outras proteínas."]],
    sourceNote: "Fontes vegetais variadas contribuem dentro da proteína total.",
    physiology: ["Intestino utiliza parte da treonina dietética para mucinas e proteínas locais.", "É catabolizada por vias que geram glicina, acetil-CoA ou outros intermediários.", "Isso não significa que suplemento de treonina repare intestino de forma geral."],
    inadequacy: ["Deficiência isolada é rara e acompanha proteína inadequada ou fórmulas desequilibradas.", "Sinais de barreira intestinal ou digestivos têm causas múltiplas."],
    riskGroups: ["pessoas com desnutrição;", "pessoas em nutrição artificial inadequada;", "pessoas com má absorção extensa;", "crianças com baixa oferta proteica."],
    excess: ["Não há UL. Segurança de doses isoladas altas por longo prazo é pouco definida.", "Desequilíbrio pode aumentar carga de nitrogênio sem benefício demonstrado."],
    evidenceTitle: "Participar da mucina não significa tratar o intestino", evidenceBody: ["Mucinas dependem de síntese proteica, energia, microbiota e saúde epitelial.", "A indispensabilidade sustenta adequação proteica, não uma indicação universal de cápsulas."],
    practicalChecklist: ["Garanta proteína total e variedade.", "Não trate sintomas intestinais com treonina isolada.", "Dietas artificiais exigem formulação profissional.", "Considere energia e outros aminoácidos."],
    interactions: ["Não há interações medicamentosas comuns bem estabelecidas em doses alimentares.", "Doença hepática ou renal muda carga de aminoácidos.", "Fórmulas metabólicas têm proporções próprias."],
    faqs: [["Treonina protege intestino?", "É componente de mucinas, mas suplemento não é tratamento geral de barreira intestinal."], ["Quais alimentos têm?", "A maioria das fontes proteicas; ovos, leite, carnes, soja, feijões e grãos contribuem."], ["É BCAA?", "Não. BCAA são leucina, isoleucina e valina."], ["Preciso suplementar?", "Raramente quando proteína total é suficiente."]],
  }),
  amino({
    slug: "triptofano", name: "Triptofano", accent: "#5d6194", requirement: "4 mg/kg/dia",
    deck: "Triptofano além da serotonina: síntese proteica, via da quinurenina, melatonina, niacina, competição no cérebro e riscos de suplementos com antidepressivos.",
    lead: "Triptofano é indispensável e precursor de serotonina, melatonina e niacina, mas a maior parte é metabolizada pela via da quinurenina. Comer ou suplementar triptofano não eleva neurotransmissores de forma simples.",
    chemistry: [["L-triptofano", "Forma natural nas proteínas."], ["Serotonina", "Produzida por via regulada em intestino e sistema nervoso."], ["Melatonina", "Derivada de serotonina em tecidos específicos."], ["Quinurenina", "Principal rota de degradação, conectada a imunidade e NAD."]],
    functions: [["Proteínas", "Integra síntese e renovação."], ["Serotonina", "Fornece precursor para um neurotransmissor regulado."], ["Melatonina", "Contribui indiretamente à síntese circadiana."], ["Niacina", "Pode gerar equivalentes de niacina, com eficiência limitada e dependente de outros nutrientes."]],
    sourceNote: "Sementes, amendoim e soja contribuem; não existe alimento mágico do sono.",
    physiology: ["Compete com outros aminoácidos neutros grandes para atravessar a barreira hematoencefálica.", "Insulina pode alterar essa competição indiretamente, mas refeições não funcionam como dose farmacológica previsível.", "Inflamação desvia metabolismo pela via da quinurenina; isso não prova que suplemento trate humor."],
    inadequacy: ["Deficiência isolada é rara. Baixa proteína geral pode afetar balanço e síntese de niacina.", "Insônia, ansiedade e depressão não diagnosticam falta de triptofano."],
    riskGroups: ["pessoas com desnutrição;", "pessoas com síndrome carcinoide ou doença de Hartnup;", "usuários de antidepressivos ou outros serotoninérgicos;", "pessoas com doença hepática ou renal."],
    excess: ["Suplementos podem causar náusea, sonolência e, com fármacos serotoninérgicos, síndrome serotoninérgica.", "Produtos contaminados de triptofano foram ligados historicamente à síndrome eosinofilia-mialgia; qualidade importa."],
    evidenceTitle: "Precursor de serotonina não é antidepressivo alimentar", evidenceBody: ["Transporte ao cérebro é competitivo e a síntese é regulada.", "Sono e humor são multifatoriais; alimentos com triptofano podem integrar uma dieta, mas não substituem cuidado clínico."],
    practicalChecklist: ["Não combine suplemento com antidepressivos sem avaliação.", "Não use para substituir tratamento de insônia.", "Considere proteína total.", "Evite produtos de procedência incerta."],
    interactions: ["ISRS, IMAO, tramadol, triptanos e erva-de-são-joão podem somar atividade serotoninérgica.", "Sedativos podem aumentar sonolência.", "Doença hepática altera metabolismo."],
    faqs: [["Banana tem triptofano e dá sono?", "Tem pequenas quantidades dentro de proteína; isso não funciona como sedativo previsível."], ["Triptofano vira serotonina?", "Pode, mas transporte e enzimas regulam a quantidade."], ["Ajuda depressão?", "Não deve substituir avaliação e tratamento; suplementos têm evidência e riscos próprios."], ["Quanto preciso?", "A referência adulta é cerca de 4 mg/kg/dia dentro da proteína total."]],
  }),
  amino({
    slug: "valina", name: "Valina", accent: "#4c7390", requirement: "26 mg/kg/dia",
    deck: "Valina como BCAA: proteínas, energia muscular, competição com leucina e isoleucina, fontes e limites de suplementos para desempenho.",
    lead: "Valina é um BCAA indispensável. Ela integra proteínas e pode ser oxidada em músculo e outros tecidos. Seus efeitos dependem do equilíbrio com leucina, isoleucina e os demais aminoácidos.",
    chemistry: [["L-valina", "Forma incorporada às proteínas."], ["BCAA", "Um dos três aminoácidos de cadeia ramificada."], ["Succinil-CoA", "Seu catabolismo é glicogênico e chega a intermediários do ciclo de Krebs."], ["Cetoácido da valina", "Intermediário que se acumula em erros do catabolismo dos BCAA."]],
    functions: [["Proteínas", "Fornece substrato para síntese."], ["Energia", "Pode ser oxidada em tecidos periféricos."], ["Balanço nitrogenado", "Integra o pool de indispensáveis necessário à renovação."], ["Metabolismo muscular", "Compartilha enzimas com os outros BCAA."]],
    sourceNote: "Alimentos proteicos variados oferecem valina; não é exclusiva de carnes.",
    physiology: ["Primeira etapa do catabolismo dos BCAA ocorre amplamente fora do fígado.", "Competição entre BCAA significa que excesso isolado de um pode alterar uso dos outros.", "Na doença da urina do xarope de bordo, a enzima comum está comprometida e os três exigem controle."],
    inadequacy: ["Deficiência isolada é rara; em dietas experimentais pode causar balanço nitrogenado negativo e alterações neurológicas.", "Fadiga muscular não diagnostica falta de valina."],
    riskGroups: ["pessoas com desnutrição proteica;", "portadores de doença da urina do xarope de bordo;", "pessoas em dietas artificiais desequilibradas;", "pessoas com doença hepática ou renal usando BCAA."],
    excess: ["Não há UL. Altas doses podem causar desconforto, aumentar nitrogênio e desequilibrar BCAA.", "Evidência para desempenho em pessoas já bem alimentadas é limitada."],
    evidenceTitle: "Os três BCAA trabalham em conjunto, mas não são uma proteína completa", evidenceBody: ["Leucina, isoleucina e valina compartilham vias e aparecem juntas em alimentos.", "Ainda faltam seis aminoácidos indispensáveis para construir proteínas; BCAA não substitui uma fonte completa."],
    practicalChecklist: ["Conte proteína total antes do suplemento.", "Não atribua fadiga a valina baixa.", "Em erro metabólico, siga fórmula prescrita.", "Evite doses desbalanceadas."],
    interactions: ["Compartilha transporte e enzimas com leucina e isoleucina.", "Doença da urina do xarope de bordo exige controle vitalício.", "Doença renal/hepática altera segurança de misturas."],
    faqs: [["Valina é BCAA?", "Sim, junto com leucina e isoleucina."], ["Dá energia?", "Pode ser oxidada, mas não é estimulante e não substitui carboidratos, gorduras e energia total."], ["BCAA contém valina?", "Sim, em proporções definidas pelo produto; isso não prova benefício."], ["Veganos obtêm?", "Sim, por soja, leguminosas, grãos, sementes e proteína total adequada."]],
  }),
];

