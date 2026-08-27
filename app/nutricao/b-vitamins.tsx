import Link from "next/link";
import { JsonLd, PageShell } from "../site";

const SITE_URL = "https://www.cleversouza.com";
const ANVISA_URL =
  "https://www.gov.br/anvisa/en/rules-and-regulations/arquivos/in-75_2020.pdf/%40%40download/file";
const DRI_URL = "https://www.nationalacademies.org/read/6015";

export type BVitaminKey = "b1" | "b2" | "b3" | "b5" | "b6" | "b7" | "b9" | "b12";

type BVitaminData = {
  key: BVitaminKey;
  name: string;
  commonName: string;
  slug: string;
  accent: string;
  deck: string;
  lead: string;
  readingTime: string;
  vdr: string;
  referenceRows: Array<[string, string, string]>;
  quickFacts: string[];
  forms: Array<[string, string]>;
  functions: Array<[string, string]>;
  sources: Array<[string, string, string]>;
  absorption: string[];
  deficiency: string[];
  riskGroups: string[];
  excess: string[];
  specialTitle: string;
  specialBody: string[];
  supplementChecklist: string[];
  interactions: string[];
  faqs: Array<[string, string]>;
  nihUrl: string;
  extraReference?: [string, string, string];
};

export const B_VITAMIN_SUMMARIES = [
  { key: "B1", name: "Tiamina", slug: "vitamina-b1", summary: "Metabolismo energético, sistema nervoso e o risco de deficiência em contextos de baixa reserva." },
  { key: "B2", name: "Riboflavina", slug: "vitamina-b2", summary: "Coenzimas FAD e FMN, alimentos, luz, absorção e sinais de inadequação." },
  { key: "B3", name: "Niacina", slug: "vitamina-b3", summary: "NAD e NADP, equivalentes de niacina, flushing e limites de suplementos." },
  { key: "B5", name: "Ácido pantotênico", slug: "vitamina-b5", summary: "Coenzima A, ampla distribuição nos alimentos e deficiência rara." },
  { key: "B6", name: "Piridoxina", slug: "vitamina-b6", summary: "Vitamers, metabolismo de aminoácidos e neuropatia por excesso crônico." },
  { key: "B7", name: "Biotina", slug: "vitamina-b7", summary: "Carboxilases, deficiência incomum e interferência relevante em exames." },
  { key: "B9", name: "Folato", slug: "vitamina-b9", summary: "Folato, ácido fólico, DFE, divisão celular e período periconcepcional." },
  { key: "B12", name: "Cobalamina", slug: "vitamina-b12", summary: "Absorção com fator intrínseco, fontes, reservas e risco em dietas veganas." },
] as const;

const vitamins: Record<BVitaminKey, BVitaminData> = {
  b1: {
    key: "b1",
    name: "Vitamina B1",
    commonName: "Tiamina",
    slug: "vitamina-b1",
    accent: "#a75d36",
    deck: "Tiamina com contexto: metabolismo energético, sistema nervoso, fontes alimentares, baixa reserva corporal e situações em que a deficiência exige rapidez.",
    lead: "A vitamina B1, ou tiamina, é uma vitamina hidrossolúvel necessária para transformar nutrientes em energia utilizável pelas células. O corpo armazena pouco, por isso a oferta regular pela alimentação importa.",
    readingTime: "12 min",
    vdr: "1,2 mg",
    referenceRows: [
      ["VDR geral no rótulo brasileiro", "1,2 mg", "Calcular o %VD; não é uma dose individual."],
      ["RDA — homens adultos", "1,2 mg/dia", "Planejamento da ingestão de homens adultos saudáveis."],
      ["RDA — mulheres adultas", "1,1 mg/dia", "Planejamento da ingestão de mulheres adultas saudáveis."],
      ["RDA — gravidez e lactação", "1,4 mg/dia", "Referência populacional; não prescreve suplemento."],
      ["UL", "Não estabelecido", "Dados insuficientes para definir um teto; não significa ausência de risco em qualquer dose."],
    ],
    quickFacts: [
      "Sua principal forma coenzimática é o difosfato de tiamina (TDP ou TPP).",
      "Participa do metabolismo de carboidratos, aminoácidos e lipídios.",
      "Grãos integrais, carne suína, leguminosas, sementes e alimentos fortificados contribuem.",
      "O VDR brasileiro de rotulagem é 1,2 mg.",
      "Uso crônico de álcool e cirurgia bariátrica estão entre os contextos de maior risco.",
    ],
    forms: [
      ["Tiamina livre", "Forma absorvida no intestino após a retirada de grupos fosfato presentes nos alimentos."],
      ["TDP ou TPP", "Difosfato/pirofosfato de tiamina: principal forma coenzimática ativa nas células."],
      ["Mononitrato e cloridrato", "Formas estáveis usadas em alimentos fortificados e suplementos."],
      ["Benfotiamina", "Derivado sintético convertido em tiamina; não é evidência de superioridade clínica universal."],
    ],
    functions: [
      ["Produção de energia", "O TDP é cofator de enzimas que processam glicose e outros combustíveis."],
      ["Sistema nervoso", "Neurônios dependem de metabolismo energético contínuo; deficiência grave pode produzir alterações neurológicas."],
      ["Metabolismo celular", "Participa de etapas envolvendo aminoácidos de cadeia ramificada e a via das pentoses-fosfato."],
      ["Crescimento e função celular", "Ajuda a sustentar processos básicos de crescimento, desenvolvimento e funcionamento das células."],
    ],
    sources: [
      ["Grãos e derivados", "Arroz integral, aveia, pães e cereais integrais ou enriquecidos", "Refino reduz o teor; fortificação pode repor parte do nutriente."],
      ["Leguminosas", "Feijões, lentilha e ervilha", "Contribuem junto com fibras, proteínas e outros micronutrientes."],
      ["Carnes e peixes", "Carne suína, truta, atum e mexilhões", "A quantidade depende do corte, porção e preparo."],
      ["Sementes e oleaginosas", "Sementes de girassol e algumas castanhas", "São fontes complementares em porções alimentares usuais."],
    ],
    absorption: [
      "No intestino delgado, formas fosforiladas são convertidas em tiamina livre antes da absorção.",
      "Em quantidades nutricionais predomina transporte ativo; em quantidades farmacológicas aumenta a difusão passiva, com eficiência limitada.",
      "A tiamina é sensível ao calor e se dissolve na água; cocção prolongada e descarte do líquido podem reduzir o teor.",
    ],
    deficiency: [
      "A deficiência pode começar com perda de apetite, perda de peso, fraqueza, confusão e alterações de memória. Em progressão, pode causar beribéri, com comprometimento neurológico ou cardiovascular.",
      "A encefalopatia de Wernicke é uma emergência associada à deficiência grave. Confusão aguda, alteração da marcha ou dos movimentos oculares exigem atendimento imediato — não tentativa de correção doméstica.",
    ],
    riskGroups: [
      "pessoas com transtorno por uso de álcool, pela combinação de baixa ingestão, menor absorção e metabolismo alterado;",
      "pessoas após cirurgia bariátrica, especialmente com vômitos persistentes ou baixa ingestão;",
      "idosos com alimentação insuficiente, múltiplas condições ou uso de vários medicamentos;",
      "pessoas com má absorção, alimentação extremamente restrita ou necessidade aumentada em contexto clínico;",
      "pessoas em uso prolongado de alguns diuréticos, quando a equipe assistente identificar risco.",
    ],
    excess: [
      "Não foi estabelecido UL porque os dados disponíveis não permitem definir com segurança um teto de ingestão oral. Isso não transforma doses muito altas em necessárias ou comprovadamente benéficas.",
      "Suplementos podem causar reações individuais e interferir no cuidado quando usados para adiar investigação de sintomas. Doses terapêuticas pertencem ao contexto clínico.",
    ],
    specialTitle: "Por que a urgência importa na suspeita de deficiência grave",
    specialBody: [
      "As reservas corporais são pequenas e podem se esgotar em semanas quando ingestão e absorção estão muito comprometidas. Em pessoas vulneráveis, vômitos persistentes ou realimentação após privação podem aumentar o risco.",
      "Sinais neurológicos agudos não devem esperar um suplemento oral fazer efeito. Diagnóstico, via de administração e sequência do cuidado são decisões de urgência.",
    ],
    supplementChecklist: [
      "Não use a presença de cansaço como diagnóstico de falta de B1.",
      "Some a tiamina de multivitamínicos, complexo B e produtos fortificados.",
      "Após bariátrica ou em uso crônico de álcool, siga o plano da equipe assistente.",
      "Não substitua atendimento urgente por comprimidos diante de sinais neurológicos.",
    ],
    interactions: [
      "Alguns diuréticos podem aumentar a eliminação urinária de tiamina em certos contextos.",
      "Quimioterápicos específicos e condições de má absorção exigem análise profissional.",
      "O álcool reduz absorção, armazenamento e ativação da vitamina.",
    ],
    faqs: [
      ["Vitamina B1 dá energia?", "Ela participa das reações que liberam energia dos nutrientes, mas não é um estimulante nem gera energia sozinha. Em quem já está adequado, mais tiamina não garante mais disposição."],
      ["Beribéri é falta de vitamina B1?", "Sim. É uma manifestação de deficiência avançada, com formas predominantemente neurológicas ou cardiovasculares. Precisa de diagnóstico e tratamento profissional."],
      ["Arroz branco tem tiamina?", "O refino remove parte importante da tiamina. Produtos enriquecidos podem receber o nutriente de volta; o rótulo ajuda a verificar."],
      ["Existe limite máximo para B1?", "Não há UL estabelecido por insuficiência de dados. Isso não é uma declaração de segurança irrestrita nem uma indicação de megadose."],
    ],
    nihUrl: "https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/",
  },
  b2: {
    key: "b2", name: "Vitamina B2", commonName: "Riboflavina", slug: "vitamina-b2", accent: "#b07924",
    deck: "Riboflavina sem simplificações: coenzimas FAD e FMN, metabolismo, fontes, sensibilidade à luz e o que a deficiência realmente significa.",
    lead: "A vitamina B2, ou riboflavina, integra as coenzimas FAD e FMN, que transferem elétrons em numerosas reações. Ela ajuda o organismo a processar energia e a manter sistemas celulares de oxidação e redução.",
    readingTime: "11 min", vdr: "1,2 mg",
    referenceRows: [
      ["VDR geral no rótulo brasileiro", "1,2 mg", "Referência para o %VD, não prescrição."],
      ["RDA — homens adultos", "1,3 mg/dia", "Planejamento para homens adultos saudáveis."],
      ["RDA — mulheres adultas", "1,1 mg/dia", "Planejamento para mulheres adultas saudáveis."],
      ["RDA — gravidez", "1,4 mg/dia", "Referência populacional para gestantes."],
      ["RDA — lactação", "1,6 mg/dia", "Referência populacional para lactantes."],
      ["UL", "Não estabelecido", "Ausência de dados suficientes, não licença para megadoses."],
    ],
    quickFacts: ["FAD e FMN são suas principais formas coenzimáticas.", "Leite, ovos, carnes, amêndoas, cogumelos e alimentos fortificados contribuem.", "A riboflavina é relativamente estável ao calor, mas sensível à luz.", "O VDR brasileiro é 1,2 mg.", "Deficiência isolada é incomum e costuma coexistir com outras inadequações."],
    forms: [["Riboflavina", "Forma livre encontrada em alimentos, fortificação e suplementos."], ["FMN", "Flavina mononucleotídeo: forma coenzimática derivada da riboflavina."], ["FAD", "Flavina adenina dinucleotídeo: coenzima de numerosas flavoproteínas."], ["Riboflavina-5-fosfato", "Forma usada em alguns suplementos; é processada no intestino antes da absorção."]],
    functions: [["Metabolismo energético", "FAD e FMN participam da cadeia respiratória e do aproveitamento de carboidratos, gorduras e proteínas."], ["Sistemas antioxidantes", "A riboflavina participa da regeneração da glutationa por meio de enzimas dependentes de FAD."], ["Metabolismo de outras vitaminas", "Ajuda na ativação da vitamina B6 e em etapas relacionadas a folato e niacina."], ["Integridade celular", "Sustenta reações essenciais para crescimento, desenvolvimento e manutenção dos tecidos."]],
    sources: [["Laticínios", "Leite, iogurte e queijos", "Exposição à luz pode degradar riboflavina no leite."], ["Alimentos animais", "Ovos, carnes magras, fígado e alguns peixes", "Fígado é concentrado; porção e frequência importam."], ["Vegetais", "Amêndoas, cogumelos e espinafre", "Fontes vegetais variadas contribuem para o conjunto."], ["Fortificados", "Cereais e farinhas enriquecidas, conforme o produto", "Verifique quantidade e porção no rótulo."]],
    absorption: ["A maior parte do FAD e FMN dos alimentos é convertida em riboflavina livre antes de ser absorvida no intestino delgado.", "A absorção é saturável; dividir a oferta alimentar ao longo do dia é diferente de concentrar uma grande dose.", "A luz degrada riboflavina, razão histórica para o uso de embalagens opacas em alguns produtos lácteos."],
    deficiency: ["A deficiência, chamada ariboflavinose, pode envolver fissuras nos cantos da boca, lábios inflamados, língua avermelhada, alterações de pele e garganta. Esses sinais não são específicos.", "Deficiência grave e prolongada pode afetar o metabolismo do ferro e coexistir com falta de outras vitaminas do complexo B."],
    riskGroups: ["pessoas com alimentação muito restrita ou baixa ingestão de laticínios e alternativas adequadas;", "gestantes e lactantes com baixa ingestão, especialmente em dietas predominantemente vegetais sem planejamento;", "pessoas com má absorção ou condições endócrinas específicas;", "atletas vegetarianos ou veganos quando variedade e adequação energética são insuficientes."],
    excess: ["A absorção intestinal limitada e a rápida excreção ajudam a explicar a baixa toxicidade observada. Não há UL estabelecido.", "Urina amarelo-intensa após suplemento costuma refletir excreção de riboflavina, não comprova melhor aproveitamento e não torna doses altas necessárias."],
    specialTitle: "Luz, cozimento e a cor da riboflavina",
    specialBody: ["Riboflavina é um pigmento amarelo fluorescente. Ela tolera relativamente bem o calor culinário, mas é sensível à luz ultravioleta e visível.", "A cor forte da urina após um complexo B vem principalmente da riboflavina eliminada. Esse efeito visual não mede deficiência, absorção intracelular ou benefício."],
    supplementChecklist: ["Revise alimentação antes de atribuir fissuras labiais à B2.", "Confira a soma em multivitamínicos, bebidas e complexo B.", "Não interprete urina fluorescente como sinal de eficácia.", "Em restrições alimentares, planeje o padrão completo, não um nutriente isolado."],
    interactions: ["Alguns medicamentos podem alterar metabolismo ou absorção, mas a relevância depende de dose e contexto.", "Condições de má absorção e doenças endócrinas justificam avaliação individual.", "Suplementos não substituem investigação de anemia ou lesões persistentes em boca e pele."],
    faqs: [["Vitamina B2 é a mesma coisa que riboflavina?", "Sim. Riboflavina é o nome do nutriente; FAD e FMN são formas coenzimáticas derivadas dele."], ["Por que o complexo B deixa a urina amarela?", "Principalmente pela excreção de riboflavina, que tem pigmentação fluorescente. Isso não indica toxicidade por si só nem benefício maior."], ["A luz destrói vitamina B2?", "Exposição à luz pode degradá-la, sobretudo em líquidos transparentes. O efeito depende de intensidade e tempo."], ["Existe limite máximo para B2?", "Não foi estabelecido UL por falta de evidência suficiente de efeitos adversos. Ainda assim, não há razão para tratar doses muito altas como meta."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/",
  },
  b3: {
    key: "b3", name: "Vitamina B3", commonName: "Niacina", slug: "vitamina-b3", accent: "#8f5b74",
    deck: "Niacina com unidades e limites claros: ácido nicotínico, nicotinamida, NAD/NADP, equivalentes de niacina e riscos de doses farmacológicas.",
    lead: "Vitamina B3 é o nome nutricional da niacina, precursora das coenzimas NAD e NADP. O organismo também consegue produzir parte da necessidade a partir do aminoácido triptofano, por isso os valores são expressos em equivalentes de niacina.",
    readingTime: "13 min", vdr: "15 mg de NE",
    referenceRows: [["VDR geral no rótulo brasileiro", "15 mg de NE", "%VD e comparação entre produtos."], ["RDA — homens adultos", "16 mg de NE/dia", "Planejamento da ingestão."], ["RDA — mulheres adultas", "14 mg de NE/dia", "Planejamento da ingestão."], ["RDA — gravidez", "18 mg de NE/dia", "Referência populacional."], ["RDA — lactação", "17 mg de NE/dia", "Referência populacional."], ["UL — adultos", "35 mg/dia", "Aplica-se à niacina de suplementos e fortificados, com base em flushing; não à niacina natural dos alimentos."]],
    quickFacts: ["Ácido nicotínico e nicotinamida têm atividade de vitamina B3, mas perfis adversos diferentes.", "NAD e NADP participam de centenas de reações.", "1 mg de NE equivale a 1 mg de niacina ou, convencionalmente, 60 mg de triptofano.", "O VDR brasileiro é 15 mg de NE.", "Doses usadas como medicamento não devem ser reproduzidas por conta própria."],
    forms: [["Ácido nicotínico", "Forma que pode causar rubor, calor e coceira; em doses farmacológicas, afeta lipídios e exige acompanhamento."], ["Nicotinamida", "Também chamada niacinamida; não produz o mesmo flushing, mas altas doses ainda podem causar efeitos adversos."], ["NAD e NADP", "Coenzimas celulares centrais em transferência de elétrons, reparo e sinalização."], ["Equivalente de niacina", "Unidade que integra niacina ingerida e contribuição potencial do triptofano."]],
    functions: [["Energia celular", "NAD recebe e transfere elétrons durante o metabolismo de carboidratos, gorduras e proteínas."], ["Síntese e defesa", "NADP apoia síntese de ácidos graxos e sistemas antioxidantes."], ["Reparo e sinalização", "NAD é substrato de enzimas envolvidas em reparo de DNA e comunicação celular."], ["Metabolismo integrado", "A produção a partir de triptofano depende também de energia, riboflavina, B6 e ferro adequados."]],
    sources: [["Proteínas animais", "Aves, carnes, peixes e vísceras", "Fornecem niacina e triptofano."], ["Vegetais", "Amendoim, leguminosas, cogumelos e grãos integrais", "A biodisponibilidade varia com a matriz."], ["Enriquecidos", "Farinhas, pães e cereais conforme a formulação", "O rótulo informa a quantidade adicionada."], ["Triptofano alimentar", "Ovos, leite, carnes, soja e outras proteínas", "Contribuição indireta, não conversão completa nem imediata."]],
    absorption: ["Niacina e nicotinamida são absorvidas no intestino; em doses usuais, o aproveitamento é alto.", "Em milho não tratado, parte pode estar ligada e pouco disponível. Processos alcalinos tradicionais aumentam a disponibilidade.", "A conversão de triptofano é regulada e depende de outros nutrientes; 60:1 é um fator de equivalência, não uma promessa de conversão idêntica em todos."],
    deficiency: ["Deficiência grave causa pelagra, classicamente associada a dermatite fotossensível, diarreia e alterações neurológicas. Sem cuidado, pode evoluir de forma grave.", "Sinais iniciais são inespecíficos e podem coexistir com deficiência de proteínas e outras vitaminas."],
    riskGroups: ["pessoas com alimentação muito limitada em niacina e proteína;", "pessoas com transtorno por uso de álcool;", "pessoas com má absorção ou condições que desviam o metabolismo do triptofano;", "pessoas em insegurança alimentar grave ou com dietas baseadas em milho não processado adequadamente."],
    excess: ["O ácido nicotínico de suplementos pode causar flushing a partir de quantidades relativamente baixas. O UL de 35 mg/dia foi definido para reduzir esse efeito e não se aplica à niacina naturalmente presente nos alimentos.", "Doses farmacológicas podem causar hipotensão, alterações de glicose, toxicidade hepática e problemas gastrointestinais. Produtos de liberação prolongada não tornam a automedicação segura."],
    specialTitle: "Flushing não é alergia — e também não é sinal de eficácia",
    specialBody: ["O ácido nicotínico dilata pequenos vasos da pele e pode causar calor, vermelhidão, ardor ou coceira. A intensidade não mede correção de deficiência.", "Nicotinamida costuma não causar flushing, mas isso não elimina riscos de altas doses. Quando niacina é usada como medicamento, função hepática, glicemia, ácido úrico e interações podem precisar de acompanhamento."],
    supplementChecklist: ["Diferencie ácido nicotínico de nicotinamida no rótulo.", "Não use flushing como teste de potência.", "Não replique doses para colesterol sem prescrição e monitoramento.", "Some niacina de pré-treinos, energéticos, multivitamínicos e fortificados."],
    interactions: ["Álcool e outros agentes hepatotóxicos podem aumentar preocupação com o fígado em altas doses.", "Medicamentos para pressão, glicose, lipídios e anticoagulação exigem revisão profissional.", "Doença hepática, úlcera, gota ou diabetes mudam a avaliação de segurança."],
    faqs: [["Niacina é vitamina B3?", "Sim. O termo inclui ácido nicotínico, nicotinamida e sua contribuição para NAD e NADP."], ["O que significa NE?", "Equivalente de niacina. Na regra brasileira, 1 mg de NE equivale a 1 mg de niacina ou 60 mg de triptofano."], ["Niacina baixa colesterol?", "Doses farmacológicas de ácido nicotínico podem alterar lipídios, mas têm riscos e não são suplementação nutricional comum. O uso exige decisão médica."], ["O UL de 35 mg inclui alimentos?", "Foi estabelecido para niacina sintética de suplementos e alimentos fortificados por causa do flushing, não para a niacina naturalmente presente nos alimentos."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/",
  },
  b5: {
    key: "b5", name: "Vitamina B5", commonName: "Ácido pantotênico", slug: "vitamina-b5", accent: "#4f788d",
    deck: "Ácido pantotênico em perspectiva: coenzima A, ampla presença nos alimentos, Ingestão Adequada e por que deficiência isolada é rara.",
    lead: "A vitamina B5, ou ácido pantotênico, é parte da coenzima A e da proteína carreadora de acila. Seu nome remete à distribuição ampla nos alimentos — mas presença frequente não significa que suplementos tragam benefícios extras.",
    readingTime: "10 min", vdr: "5 mg",
    referenceRows: [["VDR geral no rótulo brasileiro", "5 mg", "Referência para o %VD."], ["AI — adultos", "5 mg/dia", "Ingestão Adequada usada quando não há dados para RDA."], ["AI — gravidez", "6 mg/dia", "Referência populacional."], ["AI — lactação", "7 mg/dia", "Referência populacional."], ["UL", "Não estabelecido", "Dados insuficientes; não significa vantagem em altas doses."]],
    quickFacts: ["É componente essencial da coenzima A.", "Está presente em muitos grupos alimentares.", "A referência individual é uma AI, não uma RDA.", "O VDR brasileiro é 5 mg.", "Deficiência isolada é rara e costuma ocorrer com desnutrição ampla."],
    forms: [["Ácido pantotênico", "Forma livre absorvida no intestino."], ["Coenzima A", "Molécula celular que transporta grupos acila em inúmeras reações."], ["4'-fosfopanteteína", "Parte funcional da coenzima A e de proteínas carreadoras."], ["Pantotenato de cálcio", "Forma estável comum em suplementos e fortificação."]],
    functions: [["Metabolismo energético", "A coenzima A participa da oxidação e síntese de ácidos graxos e do metabolismo de carboidratos."], ["Síntese de moléculas", "Contribui para produção de colesterol, hormônios esteroides, acetilcolina e outras moléculas."], ["Transporte de grupos acila", "Permite mover unidades químicas entre diferentes vias metabólicas."], ["Função celular básica", "Sua ampla atuação explica por que deficiência severa afeta vários sistemas ao mesmo tempo."]],
    sources: [["Carnes e vísceras", "Frango, carne bovina e fígado", "Contribuem, mas não são as únicas fontes."], ["Vegetais", "Cogumelos, abacate, batata e brócolis", "Variedade alimentar distribui a oferta."], ["Leguminosas e grãos", "Lentilha, ervilha, aveia e cereais integrais", "Processamento pode reduzir o teor."], ["Ovos e laticínios", "Ovo, leite e iogurte", "Fontes complementares no padrão alimentar."]],
    absorption: ["A coenzima A e derivados dos alimentos são quebrados até pantotenato antes da absorção.", "Em concentrações usuais há transporte intestinal específico; em altas concentrações, difusão passiva ganha participação.", "Refino, congelamento industrial e processamento podem reduzir parte do conteúdo, mas uma alimentação variada oferece múltiplas fontes."],
    deficiency: ["Deficiência isolada é muito rara. Em privação grave pode aparecer fadiga, irritabilidade, desconforto gastrointestinal, dormência e sensação de queimação nos pés.", "Como esses sintomas são inespecíficos e a deficiência costuma vir com falta de outros nutrientes, autodiagnóstico é especialmente pouco confiável."],
    riskGroups: ["pessoas com desnutrição grave ou alimentação extremamente restrita;", "pessoas com uma condição genética rara que impede a reciclagem normal da vitamina;", "pessoas com má absorção extensa, avaliadas no contexto do conjunto de micronutrientes."],
    excess: ["Não existe UL estabelecido. Doses muito altas, na faixa de gramas, foram associadas principalmente a diarreia e desconforto gastrointestinal.", "A ausência de toxicidade bem definida em ingestões usuais não comprova benefícios para acne, cabelo, estresse ou desempenho."],
    specialTitle: "AI não é sinônimo de exigência exata",
    specialBody: ["Para B5, a National Academies definiu Ingestão Adequada (AI), porque as evidências não permitiram estimar necessidade média e RDA com a mesma precisão.", "A AI é uma referência de adequação baseada em ingestões observadas; não deve ser tratada como ponto de corte diagnóstico nem como dose obrigatória de suplemento."],
    supplementChecklist: ["Não use promessas de beleza como evidência de necessidade.", "Observe se o produto traz B5 isolada ou dentro de múltiplas fórmulas.", "Considere que a alimentação variada já distribui o nutriente.", "Diarreia com altas doses não é sinal de desintoxicação."],
    interactions: ["Interações clinicamente relevantes são pouco documentadas em doses nutricionais.", "Produtos combinados podem interagir por outros ingredientes, não pela B5 isoladamente.", "Condições raras ou uso de dose muito alta justificam avaliação profissional."],
    faqs: [["Vitamina B5 é ácido pantotênico?", "Sim. O nome vem do grego relacionado a 'em toda parte', refletindo sua ampla distribuição nos alimentos."], ["B5 trata acne?", "Não há base para apresentar suplementação geral de B5 como tratamento comprovado de acne. Cuidados dermatológicos exigem avaliação própria."], ["O que é AI de 5 mg?", "É a Ingestão Adequada para adultos, usada quando os dados não permitem definir uma RDA. Não é dose de suplemento."], ["Existe limite máximo?", "Não foi estabelecido UL, mas doses muito altas podem causar diarreia e não têm benefício geral demonstrado."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/PantothenicAcid-HealthProfessional/",
  },
  b6: {
    key: "b6", name: "Vitamina B6", commonName: "Piridoxina e outros vitamers", slug: "vitamina-b6", accent: "#705b99",
    deck: "Vitamina B6 além da piridoxina: formas coenzimáticas, metabolismo de aminoácidos, fontes, referências por idade e neuropatia por excesso.",
    lead: "Vitamina B6 é um conjunto de seis compostos relacionados. As formas coenzimáticas PLP e PMP participam de mais de uma centena de reações, sobretudo no metabolismo de aminoácidos. A mesma versatilidade não justifica megadoses.",
    readingTime: "14 min", vdr: "1,3 mg",
    referenceRows: [["VDR geral no rótulo brasileiro", "1,3 mg", "Referência para o %VD."], ["RDA — adultos de 19 a 50 anos", "1,3 mg/dia", "Homens e mulheres saudáveis."], ["RDA — homens com 51+", "1,7 mg/dia", "A necessidade varia com idade e sexo."], ["RDA — mulheres com 51+", "1,5 mg/dia", "A necessidade varia com idade e sexo."], ["RDA — gravidez / lactação", "1,9 / 2,0 mg/dia", "Referências populacionais."], ["UL — adultos", "100 mg/dia (EUA); 12 mg/dia (EFSA)", "Padrões divergem; ambos tratam neuropatia como efeito crítico e não são metas."]],
    quickFacts: ["Piridoxina é apenas um dos vitamers B6.", "PLP é a forma coenzimática mais conhecida.", "Participa de metabolismo proteico, hemoglobina e neurotransmissores.", "O VDR brasileiro é 1,3 mg.", "Uso crônico de suplementos em excesso pode causar neuropatia sensorial."],
    forms: [["Piridoxina", "Forma comum em vegetais e suplementos, frequentemente como cloridrato."], ["Piridoxal", "Vitamer que pode ser convertido em PLP."], ["Piridoxamina", "Outro vitamer, com seu respectivo fosfato como forma coenzimática."], ["PLP e PMP", "Piridoxal-5-fosfato e piridoxamina-5-fosfato: formas coenzimáticas ativas."]],
    functions: [["Aminoácidos", "PLP participa de transaminação, descarboxilação e outras reações do metabolismo proteico."], ["Hemoglobina", "Contribui para a síntese do heme e para o funcionamento normal das células sanguíneas."], ["Neurotransmissores", "É cofator na síntese de serotonina, dopamina, GABA e outros mensageiros."], ["Glicogênio e homocisteína", "Participa da liberação de glicose do glicogênio e do metabolismo de unidades de um carbono."], ["Função imunológica", "Integra processos necessários ao funcionamento normal do sistema imune, sem prometer 'aumento de imunidade'."]],
    sources: [["Leguminosas", "Grão-de-bico e outras leguminosas", "Contribuem com B6, fibras e proteínas."], ["Peixes e aves", "Atum, salmão, frango e peru", "Fontes com boa disponibilidade."], ["Vegetais amiláceos", "Batata e outros tubérculos", "A porção e o preparo influenciam a contribuição."], ["Frutas", "Banana e frutas não cítricas", "Parte da B6 vegetal está ligada a açúcares e é menos disponível."]],
    absorption: ["Formas fosforiladas são desfosforiladas antes da absorção no jejuno.", "A disponibilidade média em dieta mista é estimada em cerca de 75%; formas glicosiladas vegetais tendem a ser menos disponíveis.", "Suplementos são bem absorvidos, mas isso não evita toxicidade por exposição crônica elevada."],
    deficiency: ["Deficiência isolada é incomum. Pode associar-se a anemia microcítica, dermatite, fissuras nos cantos da boca, língua inflamada, confusão e alterações imunológicas.", "Concentrações baixas também podem refletir inflamação, doença renal, má absorção ou efeito de medicamentos, e não apenas baixa ingestão."],
    riskGroups: ["pessoas com função renal comprometida;", "pessoas com doenças autoimunes ou síndromes de má absorção;", "pessoas com dependência de álcool;", "pessoas em uso prolongado de certos antiepilépticos ou outros medicamentos que afetam B6."],
    excess: ["Excesso alimentar não foi associado a neuropatia; a preocupação central é suplementação crônica. Dormência, formigamento, queimação, perda de sensibilidade ou equilíbrio alterado exigem suspensão da automedicação e avaliação.", "A National Academies mantém UL de 100 mg/dia para adultos; a EFSA adotou 12 mg/dia em 2023. A diferença mostra incerteza regulatória e reforça que o UL não é meta."],
    specialTitle: "Neuropatia: o risco que um rótulo de complexo B pode esconder",
    specialBody: ["Muitos produtos reúnem B6 em quantidades dezenas de vezes maiores que o VDR. O risco depende de dose, duração, susceptibilidade e soma de diferentes produtos.", "A neuropatia por piridoxina pode se parecer com sintomas que algumas pessoas tentam tratar com complexo B. Continuar suplementando sem revisar o total pode agravar o problema."],
    supplementChecklist: ["Some B6 de complexo B, multivitamínico, magnésio combinado e bebidas funcionais.", "Compare miligramas, não apenas percentuais chamativos.", "Não use por meses para formigamento sem investigar a causa.", "Gravidez e náusea exigem orientação; não reproduza doses terapêuticas por conta própria."],
    interactions: ["Alguns antiepilépticos alteram o metabolismo da B6; doses altas também podem interferir em tratamentos.", "Cicloserina e teofilina são exemplos de medicamentos que justificam avaliação específica.", "Levodopa sem inibidor periférico pode ter efeito reduzido pela piridoxina; fórmulas atuais variam e precisam ser conferidas."],
    faqs: [["Piridoxina é a única vitamina B6?", "Não. É um dos seis vitamers. PLP e PMP são formas coenzimáticas centrais."], ["B6 ajuda no formigamento?", "Formigamento tem muitas causas. Paradoxalmente, excesso crônico de B6 pode causar neuropatia sensorial; não é seguro autotratar sem avaliar."], ["Por que existem dois limites máximos?", "Órgãos diferentes revisaram evidências e aplicaram margens distintas. EUA usam 100 mg/dia; a EFSA adotou 12 mg/dia. Nenhum é meta."], ["B6 aumenta imunidade?", "Ela participa do funcionamento normal do sistema imunológico. Doses extras não garantem resposta maior nem prevenção de doenças."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/",
    extraReference: ["EFSA — Scientific opinion on the tolerable upper intake level for vitamin B6", "https://www.efsa.europa.eu/en/efsajournal/pub/8006", "Revisão de 2023 que estabeleceu UL europeu de 12 mg/dia para adultos com base em neuropatia periférica."],
  },
  b7: {
    key: "b7", name: "Vitamina B7", commonName: "Biotina", slug: "vitamina-b7", accent: "#477b74",
    deck: "Biotina com foco no que importa: carboxilases, fontes, deficiência rara, ausência de promessas cosméticas e interferência potencialmente grave em exames.",
    lead: "A vitamina B7, ou biotina, funciona como cofator de carboxilases envolvidas no metabolismo de gorduras, glicose e aminoácidos. A deficiência é rara; suplementos em altas doses são muito mais comuns que uma necessidade comprovada.",
    readingTime: "12 min", vdr: "30 µg",
    referenceRows: [["VDR geral no rótulo brasileiro", "30 µg", "Referência para o %VD."], ["AI — adultos e gravidez", "30 µg/dia", "Ingestão Adequada, não RDA."], ["AI — lactação", "35 µg/dia", "Referência populacional."], ["UL", "Não estabelecido", "Não contempla risco de interferência em exames como uma toxicidade clássica."],
    ],
    quickFacts: ["É cofator de cinco carboxilases humanas.", "Deficiência verdadeira é rara.", "Não há evidência robusta de benefício para cabelo e unhas em pessoas sem deficiência.", "O VDR brasileiro é 30 µg.", "Doses altas podem distorcer exames, inclusive marcadores cardíacos e hormonais."],
    forms: [["Biotina livre", "Forma absorvível liberada dos alimentos durante a digestão."], ["Biocitina", "Biotina ligada à lisina em proteínas; precisa ser processada antes da reutilização."], ["Biotina em suplementos", "Quimicamente ativa, muitas vezes oferecida em milhares de microgramas."], ["Ligação a carboxilases", "A enzima holocarboxilase sintetase conecta biotina às enzimas que dela dependem."]],
    functions: [["Síntese de ácidos graxos", "A acetil-CoA carboxilase depende de biotina."], ["Produção de glicose", "A piruvato carboxilase participa da gliconeogênese."], ["Metabolismo de aminoácidos", "Carboxilases dependentes de biotina processam leucina e outros substratos."], ["Uso de propionato", "A propionil-CoA carboxilase integra o metabolismo de alguns ácidos graxos e aminoácidos."]],
    sources: [["Ovos e carnes", "Gema cozida, fígado e outras carnes", "Clara crua contém avidina, que pode prender biotina."], ["Peixes", "Salmão e atum", "Contribuem dentro de uma alimentação variada."], ["Vegetais", "Batata-doce, espinafre e brócolis", "O teor varia e bases de composição são incompletas."], ["Oleaginosas e sementes", "Amêndoas, amendoim e sementes", "Fontes complementares em porções usuais."]],
    absorption: ["Biotina ligada a proteínas é liberada por enzimas digestivas e pela biotinidase antes da absorção.", "A avidina da clara de ovo crua liga-se fortemente à biotina; cocção desnatura a avidina. Consumo habitual de ovos cozidos não causa esse problema.", "A contribuição da biotina produzida pela microbiota intestinal para a necessidade humana ainda não está bem estabelecida."],
    deficiency: ["Deficiência pode causar queda de cabelo, erupção ao redor de olhos, nariz e boca, conjuntivite, alterações neurológicas e, em casos graves, convulsões. Esses sinais são inespecíficos.", "Defeitos genéticos de biotinidase ou holocarboxilase sintetase são condições raras que exigem cuidado especializado."],
    riskGroups: ["pessoas com deficiência de biotinidase ou outras condições genéticas raras;", "pessoas em uso prolongado de alguns antiepilépticos;", "pessoas que consomem grande quantidade de clara de ovo crua por longos períodos;", "gestantes, nas quais marcadores de status podem mudar, sem que isso justifique megadoses autônomas."],
    excess: ["Não há UL estabelecido e não foram descritos efeitos tóxicos clássicos em humanos nas quantidades estudadas. O principal risco prático é analítico: resultados laboratoriais falsamente altos ou baixos.", "Quanto maior a dose e mais próximo o exame, maior pode ser a interferência, mas o tempo seguro varia conforme produto, dose, função renal e método do laboratório."],
    specialTitle: "Biotina pode alterar exames sem alterar o organismo",
    specialBody: ["Muitos imunoensaios usam a ligação biotina-estreptavidina. Biotina circulante em excesso pode distorcer testes de troponina, tireoide, hormônios e outros marcadores.", "Um resultado incorreto pode atrasar o diagnóstico de uma emergência cardíaca ou simular uma doença hormonal. Informe suplemento, dose e horário à equipe e ao laboratório; não suspenda tratamento prescrito sem orientação."],
    supplementChecklist: ["Procure a unidade: 5.000 µg equivalem a 5 mg e ultrapassam muito o VDR.", "Não confunda depoimentos sobre cabelo com demonstração de deficiência.", "Informe uso antes de coleta de sangue e em atendimentos de urgência.", "Siga a orientação do laboratório sobre pausa; ela depende do teste e da dose."],
    interactions: ["O risco mais importante é a interferência com métodos laboratoriais, não uma interação medicamentosa tradicional.", "Antiepilépticos usados por longo período podem reduzir status de biotina.", "Produtos para cabelo e unhas podem omitir 'B7' na frente da embalagem; confira a lista completa."],
    faqs: [["Biotina faz o cabelo crescer?", "Há benefício claro quando existe deficiência, que é rara. Para pessoas sem deficiência, a evidência de melhora geral de cabelo ou unhas é limitada."], ["Quanto são 10.000 µg?", "São 10 mg — mais de 300 vezes o VDR brasileiro de 30 µg. O percentual alto não prova necessidade."], ["Biotina interfere na tireoide?", "Pode distorcer alguns imunoensaios de tireoide e simular padrões anormais. Informe o uso ao laboratório e ao profissional."], ["Devo parar antes de exame?", "O intervalo depende da dose, do produto, do exame e do método. Confirme com o laboratório ou equipe solicitante; não adote um prazo universal."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/Biotin-HealthProfessional/",
    extraReference: ["FDA — Biotin interference with troponin lab tests", "https://www.fda.gov/medical-devices/in-vitro-diagnostics/biotin-interference-troponin-lab-tests-assays-subject-biotin-interference", "Alerta oficial sobre interferência da biotina em exames e risco de resultados incorretos."],
  },
  b9: {
    key: "b9", name: "Vitamina B9", commonName: "Folato", slug: "vitamina-b9", accent: "#3f758a",
    deck: "Folato, ácido fólico e DFE explicados com rigor: síntese de DNA, formação celular, fontes, fortificação, período periconcepcional e segurança.",
    lead: "Vitamina B9 é o nome do grupo de folatos. Nos alimentos predominam formas naturais; ácido fólico é a forma estável usada em fortificação e muitos suplementos. Eles têm biodisponibilidade diferente, por isso referências usam equivalentes de folato dietético (DFE).",
    readingTime: "15 min", vdr: "400 µg de DFE",
    referenceRows: [["VDR geral no rótulo brasileiro", "400 µg de DFE", "Referência para o %VD."], ["RDA — adultos", "400 µg de DFE/dia", "Planejamento da ingestão."], ["RDA — gravidez", "600 µg de DFE/dia", "Necessidade nutricional; não substitui recomendação específica de ácido fólico."], ["RDA — lactação", "500 µg de DFE/dia", "Referência populacional."], ["UL — adultos", "1.000 µg/dia", "Aplica-se a ácido fólico de suplementos e fortificados, não ao folato natural dos alimentos."]],
    quickFacts: ["Folato natural e ácido fólico não são termos intercambiáveis em cálculos de ingestão.", "É essencial para síntese de DNA e divisão celular.", "O VDR brasileiro é 400 µg de DFE.", "A recomendação periconcepcional de ácido fólico tem objetivo e janela específicos.", "Excesso de ácido fólico pode dificultar o reconhecimento da deficiência de B12."],
    forms: [["Folatos alimentares", "Família de formas reduzidas presentes naturalmente em alimentos."], ["Ácido fólico", "Forma oxidada estável de fortificação e suplementos, com maior biodisponibilidade em certas condições."], ["5-MTHF", "5-metiltetraidrofolato: forma circulante e ingrediente de alguns suplementos."], ["DFE", "Equivalente de folato dietético: unidade que ajusta diferenças de biodisponibilidade."]],
    functions: [["Síntese de DNA", "Folatos transferem unidades de um carbono necessárias para produzir nucleotídeos."], ["Divisão celular", "A necessidade é especialmente relevante em tecidos de renovação rápida e durante o desenvolvimento."], ["Formação de células sanguíneas", "Deficiência pode prejudicar a maturação celular e causar anemia megaloblástica."], ["Metabolismo da homocisteína", "Folato atua com B12 e outras vitaminas; reduzir um marcador não garante prevenir eventos clínicos."]],
    sources: [["Folhas verde-escuras", "Espinafre, couve e outras folhas", "O nome folato deriva de folha; cocção pode reduzir parte do teor."], ["Leguminosas", "Feijão, lentilha, ervilha e grão-de-bico", "Fontes importantes no padrão alimentar brasileiro."], ["Frutas e vegetais", "Abacate, laranja, aspargos e brócolis", "Variedade ajuda a distribuir a oferta."], ["Fortificados", "Farinhas e produtos formulados segundo regras aplicáveis", "Ácido fólico adicionado deve ser considerado na ingestão total."]],
    absorption: ["Folatos alimentares com vários resíduos de glutamato são processados antes da absorção. Ácido fólico é mais estável e tende a ter maior biodisponibilidade.", "Na regra brasileira, 1 µg de DFE equivale a 1 µg de folato natural ou 0,6 µg de ácido fólico/5-MTHF de suplemento.", "Genética pode alterar enzimas da via, mas testes comerciais de variantes não determinam sozinhos forma ou dose de suplemento."],
    deficiency: ["Deficiência pode causar anemia megaloblástica, fadiga, fraqueza, palpitações, língua dolorida e alterações em tecidos de rápida renovação. Os sinais se sobrepõem aos da deficiência de B12.", "No início da gestação, baixa disponibilidade de folato aumenta o risco de defeitos do tubo neural. A prevenção precisa começar antes que muitas pessoas saibam que estão grávidas."],
    riskGroups: ["pessoas com alimentação insuficiente, transtorno por uso de álcool ou insegurança alimentar;", "pessoas com doença celíaca, doença inflamatória intestinal ou cirurgia que cause má absorção;", "pessoas em uso de medicamentos que antagonizam folato, conforme indicação clínica;", "pessoas com demanda aumentada, inclusive gestação, sempre no contexto do cuidado pré-concepcional e pré-natal."],
    excess: ["O UL de 1.000 µg/dia aplica-se ao ácido fólico de suplementos e fortificados. Não foi definido para o folato natural dos alimentos.", "Grandes quantidades podem corrigir a anemia causada por deficiência de B12 sem corrigir o dano neurológico, atrasando o diagnóstico. Isso é uma das razões para evitar automedicação prolongada."],
    specialTitle: "Período periconcepcional: uma recomendação que não deve ser improvisada",
    specialBody: ["A OMS recomenda 400 µg de ácido fólico por dia desde o início das tentativas de engravidar até 12 semanas de gestação para reduzir o risco de defeitos do tubo neural.", "Algumas situações de alto risco usam protocolos diferentes e precisam de prescrição. A RDA de 600 µg de DFE na gravidez e a recomendação de 400 µg de ácido fólico têm finalidades e unidades relacionadas, mas não são a mesma instrução."],
    supplementChecklist: ["Diferencie µg de DFE de µg de ácido fólico no rótulo.", "Planeje a suplementação antes da concepção com a equipe de saúde.", "Não aumente a dose por histórico familiar ou medicamento sem avaliação.", "Considere vitamina B12 antes de uso prolongado em altas quantidades."],
    interactions: ["Metotrexato tem usos distintos; suplementação de folato deve seguir a equipe que conduz o tratamento.", "Alguns antiepilépticos e sulfassalazina podem alterar o metabolismo ou a absorção.", "Altas doses de ácido fólico podem interagir com o controle de certos medicamentos antiepilépticos."],
    faqs: [["Folato e ácido fólico são a mesma coisa?", "Ambos têm atividade de vitamina B9, mas folato descreve formas naturais e ácido fólico é a forma estável de fortificação/suplementos. A biodisponibilidade difere."], ["O que significa DFE?", "Equivalente de folato dietético. A unidade permite comparar folato natural e formas adicionadas com absorção diferente."], ["Toda gestante deve tomar ácido fólico?", "A recomendação periconcepcional é amplamente adotada, mas início, dose e situações de alto risco devem ser alinhados no cuidado pré-concepcional/pré-natal."], ["Mais ácido fólico protege mais?", "Não. Doses maiores não significam benefício maior e podem mascarar sinais hematológicos de deficiência de B12."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/",
    extraReference: ["WHO — Periconceptional folic acid supplementation", "https://www.who.int/tools/elena/interventions/folate-periconceptional", "Recomendação de ácido fólico desde a tentativa de concepção até 12 semanas de gestação."],
  },
  b12: {
    key: "b12", name: "Vitamina B12", commonName: "Cobalamina", slug: "vitamina-b12", accent: "#8a4f61",
    deck: "Vitamina B12 com a absorção explicada passo a passo: cobalaminas, fator intrínseco, fontes, reservas, dietas veganas, deficiência e suplementação.",
    lead: "A vitamina B12, ou cobalamina, participa da síntese de DNA, da formação normal de células sanguíneas e da manutenção neurológica. Sua absorção depende de várias etapas; ingestão suficiente no papel não garante aproveitamento em todos os contextos.",
    readingTime: "15 min", vdr: "2,4 µg",
    referenceRows: [["VDR geral no rótulo brasileiro", "2,4 µg", "Referência para o %VD."], ["RDA — adultos", "2,4 µg/dia", "Planejamento da ingestão."], ["RDA — gravidez", "2,6 µg/dia", "Referência populacional."], ["RDA — lactação", "2,8 µg/dia", "Referência populacional."], ["UL", "Não estabelecido", "Baixa toxicidade observada; não prova benefício de megadoses."]],
    quickFacts: ["Metilcobalamina e adenosilcobalamina são formas coenzimáticas humanas.", "Alimentos animais e fortificados são as fontes dietéticas confiáveis usuais.", "Absorção alimentar depende de ácido gástrico, proteína R, fator intrínseco e íleo.", "O VDR brasileiro é 2,4 µg.", "Deficiência pode causar dano neurológico mesmo sem anemia evidente."],
    forms: [["Metilcobalamina", "Forma coenzimática citosólica envolvida no metabolismo da homocisteína."], ["Adenosilcobalamina", "Forma coenzimática mitocondrial envolvida no metabolismo do metilmalonato."], ["Cianocobalamina", "Forma estável e bem estudada usada em fortificação e suplementos."], ["Hidroxocobalamina", "Forma usada em algumas preparações clínicas; indicação e via dependem do caso."]],
    functions: [["Síntese de DNA", "Trabalha com folato na regeneração de unidades necessárias à produção de DNA."], ["Células sanguíneas", "Deficiência prejudica a maturação e pode causar anemia megaloblástica."], ["Sistema nervoso", "É necessária ao metabolismo que mantém mielina e função neurológica."], ["Homocisteína e metilmalonato", "Participa de duas reações cujos metabólitos ajudam na avaliação laboratorial."], ["Metabolismo energético", "Ajuda a processar certos ácidos graxos e aminoácidos, mas não funciona como estimulante."]],
    sources: [["Carnes e vísceras", "Carne bovina, fígado e outras carnes", "Fígado é concentrado; não é necessário consumi-lo em excesso."], ["Peixes e frutos do mar", "Sardinha, salmão, atum, mariscos", "Teores variam com espécie e porção."], ["Ovos e laticínios", "Ovos, leite, iogurte e queijo", "Contribuição pode não bastar em toda dieta vegetariana."], ["Fortificados", "Bebidas vegetais, cereais e levedura nutricional quando adicionada", "Confirme no rótulo; produtos semelhantes podem não ser fortificados."]],
    absorption: ["No estômago, ácido e enzimas liberam B12 das proteínas. Ela se liga primeiro à proteína R e depois ao fator intrínseco.", "O complexo B12–fator intrínseco é absorvido no íleo. Uma pequena fração de doses livres altas pode entrar por difusão passiva.", "Suplementos não têm uma forma universalmente superior. O problema de absorção, a causa da deficiência e a adesão orientam forma, dose e via."],
    deficiency: ["Pode causar anemia megaloblástica, fadiga, palidez, língua dolorida, formigamento, perda de sensibilidade, alteração de marcha, memória ou humor. Alterações neurológicas podem ocorrer sem anemia.", "O fígado armazena B12 por anos; por isso uma dieta inadequada pode demorar a produzir sintomas, enquanto má absorção importante pode exigir estratégia contínua."],
    riskGroups: ["pessoas veganas que não usam fonte fortificada ou suplementação adequadamente planejada;", "idosos com menor acidez gástrica ou gastrite atrófica;", "pessoas com anemia perniciosa, doença do íleo ou cirurgias gástricas/intestinais;", "pessoas em uso prolongado de metformina ou supressores de ácido, conforme avaliação;", "gestantes e lactantes veganas, porque a adequação também afeta o bebê."],
    excess: ["Não há UL estabelecido porque a toxicidade observada é baixa. Ainda assim, doses muito acima da necessidade não são automaticamente melhores e podem confundir investigação de sintomas.", "Reações cutâneas e outros eventos foram relatados em situações específicas. O uso deve ter finalidade clara, especialmente quando injetável ou prolongado."],
    specialTitle: "B12 em dietas veganas: planejamento é parte da segurança",
    specialBody: ["Plantas não são fontes confiáveis de B12 ativa. Algas, fermentados e alimentos não fortificados podem conter quantidades variáveis ou análogos que não substituem uma fonte validada.", "Alimentos fortificados e suplementos são estratégias legítimas. Frequência, quantidade, idade, gestação, lactação e absorção mudam o plano; por isso uma dose universal não cabe nesta página."],
    supplementChecklist: ["Verifique se o alimento vegetal é realmente fortificado e quanto fornece por porção.", "Não escolha forma sublingual, metilada ou injetável apenas por marketing.", "Investigue a causa quando o nível está baixo; ingestão e má absorção pedem estratégias diferentes.", "Avalie B12 antes de corrigir folato em altas doses por longo período."],
    interactions: ["Metformina pode reduzir absorção e concentração de B12 com uso prolongado em algumas pessoas.", "Inibidores de bomba de prótons e bloqueadores H2 podem reduzir a liberação da B12 ligada aos alimentos.", "Óxido nitroso inativa B12 funcionalmente e merece atenção em exposição médica ou recreativa."],
    faqs: [["Veganos precisam de vitamina B12?", "Precisam de uma fonte confiável, geralmente alimentos fortificados e/ou suplemento planejado. Plantas não fortificadas não são fonte segura."], ["Metilcobalamina é melhor que cianocobalamina?", "Não existe superioridade universal comprovada. Cianocobalamina é estável e bem estudada; a escolha depende do contexto e do produto."], ["B12 baixa sempre causa anemia?", "Não. Alterações neurológicas podem aparecer sem anemia ou macrocitose, especialmente quando folato está alto."], ["B12 dá energia?", "Ela é necessária ao metabolismo normal, mas não é estimulante. Em deficiência, corrigir a causa pode melhorar sintomas; em pessoas adequadas, megadoses não garantem disposição."]],
    nihUrl: "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/",
  },
};

type BVitaminEvidence = {
  status: string[];
  supported: string[];
  notSupported: string[];
};

const B_VITAMIN_EVIDENCE: Record<BVitaminKey, BVitaminEvidence> = {
  b1: {
    status: [
      "O difosfato de tiamina (TDP) no sangue total é um dos marcadores mais usados porque reflete a forma presente nos eritrócitos. A atividade da transcetolase eritrocitária também pode ajudar, mas não está disponível em todos os serviços.",
      "Tiamina plasmática isolada representa mais a ingestão recente do que as reservas. Na suspeita de encefalopatia de Wernicke, a urgência clínica prevalece: não se deve atrasar o cuidado esperando confirmação laboratorial.",
    ],
    supported: [
      "Corrigir deficiência confirmada ou fortemente suspeita e prevenir deficiência em contextos clínicos de alto risco definidos pela equipe assistente.",
      "Manter oferta alimentar regular, porque as reservas corporais são pequenas.",
    ],
    notSupported: [
      "Usar megadoses como estimulante ou promessa de mais energia em quem já tem ingestão adequada.",
      "Tratar benfotiamina como solução universal para neuropatia, diabetes ou desempenho metabólico.",
    ],
  },
  b2: {
    status: [
      "O coeficiente de ativação da glutationa redutase eritrocitária (EGRAC) é um marcador funcional usado em pesquisa e em alguns contextos clínicos. A excreção urinária também pode refletir ingestão recente.",
      "Não existe um único exame de rotina que, isoladamente, confirme toda suspeita de deficiência. Inflamação, gravidez, outros nutrientes e o método laboratorial influenciam a interpretação.",
    ],
    supported: [
      "Corrigir inadequação documentada e garantir fontes regulares dentro de um padrão alimentar variado.",
      "Riboflavina em doses específicas tem evidência para prevenção de enxaqueca em alguns adultos, mas isso é uso clínico — não justificativa para automedicação ou promessa de resposta.",
    ],
    notSupported: [
      "Prometer emagrecimento, disposição imediata ou aceleração do metabolismo com complexo B.",
      "Usar a cor fluorescente da urina como medida de absorção, necessidade ou benefício.",
    ],
  },
  b3: {
    status: [
      "Metabólitos urinários da niacina, como N¹-metilnicotinamida e seus derivados, são mais informativos para avaliar o estado nutricional do que a concentração sérica isolada.",
      "Na prática, a avaliação também considera dieta, ingestão de proteína e triptofano, medicamentos, álcool e sinais compatíveis. Pelagra é diagnóstico clínico relevante e não deve ser reduzida a um número laboratorial.",
    ],
    supported: [
      "Tratar deficiência e pelagra com avaliação adequada da causa e das demais carências que podem coexistir.",
      "Ácido nicotínico pode ser usado como medicamento em situações específicas, com dose e monitoramento definidos pela equipe de saúde.",
    ],
    notSupported: [
      "Interpretar flushing como desintoxicação, circulação melhorada ou prova de eficácia.",
      "Usar niacina em alta dose por conta própria para colesterol, coração, longevidade ou controle de glicose.",
    ],
  },
  b5: {
    status: [
      "Não há um exame simples, amplamente padronizado e usado na rotina para diagnosticar inadequação de ácido pantotênico. Medidas no sangue total e na urina aparecem sobretudo em pesquisa.",
      "Como a vitamina está distribuída em muitos alimentos e a deficiência isolada é rara, a avaliação concentra-se no padrão alimentar e no contexto clínico global.",
    ],
    supported: [
      "Manter variedade alimentar costuma fornecer ácido pantotênico junto de outros nutrientes essenciais.",
      "Corrigir deficiência em contextos raros, geralmente acompanhada de múltiplas inadequações.",
    ],
    notSupported: [
      "Tratar B5 como solução comprovada para estresse, acne, queda de cabelo ou melhora de desempenho.",
      "Supor que o nome ‘pantotênico’ — relacionado a ‘em toda parte’ — torne qualquer dieta automaticamente adequada.",
    ],
  },
  b6: {
    status: [
      "Piridoxal-5-fosfato (PLP) plasmático é o marcador mais usado. Inflamação, função renal, albumina e atividade de fosfatases podem alterar o resultado sem representar apenas ingestão.",
      "Outros marcadores funcionais e metabólitos podem complementar a análise. Sintomas neurológicos precisam ser avaliados junto da dose total e da duração de todos os suplementos.",
    ],
    supported: [
      "Corrigir deficiência e usar B6 em indicações clínicas específicas, quando diagnóstico, forma, dose e duração são definidos profissionalmente.",
      "Revisar suplementos diante de formigamento, dormência ou desequilíbrio, porque o excesso crônico também pode causar neuropatia.",
    ],
    notSupported: [
      "Usar altas doses rotineiramente para humor, cognição, energia ou síndrome pré-menstrual sem avaliar benefício e risco.",
      "Aumentar a dose para tratar formigamento sem investigação — o próprio suplemento pode estar envolvido.",
    ],
  },
  b7: {
    status: [
      "Não há marcador único e amplamente validado para avaliar biotina na rotina. Metabólitos urinários e atividade de enzimas dependentes de biotina são usados principalmente em pesquisa.",
      "História alimentar, medicamentos, sinais clínicos e causas raras orientam a investigação. Deficiência de biotinidase em recém-nascidos é uma condição genética específica, coberta por triagem e cuidado próprios.",
    ],
    supported: [
      "Tratar deficiência confirmada e distúrbios genéticos raros conforme protocolos especializados.",
      "Informar laboratório e equipe de saúde sobre uso de biotina antes de exames, pois a interferência pode produzir resultados falsamente altos ou baixos.",
    ],
    notSupported: [
      "Prometer crescimento de cabelo ou unhas fortes para pessoas sem deficiência comprovada.",
      "Interpretar uma dose alta no rótulo como inofensiva só porque não existe UL estabelecido.",
    ],
  },
  b9: {
    status: [
      "Folato sérico responde mais à ingestão recente; folato eritrocitário representa um período mais longo. Homocisteína pode subir na deficiência, mas também muda por B12, B6, função renal e outros fatores.",
      "A leitura deve diferenciar folato alimentar, ácido fólico e DFE. Antes de corrigir doses elevadas por longo período, é importante considerar vitamina B12, porque a anemia pode melhorar enquanto dano neurológico progride.",
    ],
    supported: [
      "Ácido fólico no período periconcepcional reduz o risco de defeitos do tubo neural quando usado segundo recomendações de saúde pública e cuidado pré-natal.",
      "Corrigir deficiência e planejar fontes alimentares, fortificação e suplemento conforme fase da vida e risco individual.",
    ],
    notSupported: [
      "Concluir que reduzir homocisteína com altas doses previne automaticamente eventos cardiovasculares ou declínio cognitivo.",
      "Tratar metilfolato como universalmente superior ou aumentar a dose sem considerar B12, medicamentos e histórico obstétrico.",
    ],
  },
  b12: {
    status: [
      "B12 sérica é um ponto de partida, mas valores limítrofes podem exigir ácido metilmalônico (MMA). Homocisteína é menos específica; ambos os metabólitos precisam de contexto, especialmente função renal.",
      "Hemograma normal não exclui deficiência neurológica. Dieta, cirurgia, gastrite, medicamentos, sintomas e resposta ao cuidado ajudam a identificar causa e estratégia de longo prazo.",
    ],
    supported: [
      "Corrigir deficiência e manter uma fonte confiável em dietas veganas por alimentos fortificados e/ou suplementação planejada.",
      "Adaptar via e frequência quando há má absorção, anemia perniciosa ou cirurgia, em vez de presumir que uma forma comercial serve para todos.",
    ],
    notSupported: [
      "Usar B12 como estimulante, agente de emagrecimento ou intensificador cognitivo em pessoas com estado adequado.",
      "Tratar versões sublinguais, metiladas ou injetáveis como automaticamente superiores sem relação com a causa e a adesão.",
    ],
  },
};

function DataTable({ data }: { data: BVitaminData }) {
  return (
    <div className="nutrition-table-wrap" tabIndex={0} role="region" aria-label={`Valores de referência de ${data.name}; deslize horizontalmente para ver todas as colunas`}>
      <table className="nutrition-table">
        <caption>Valores de referência selecionados para {data.name}</caption>
        <thead><tr><th scope="col">Referência</th><th scope="col">Valor</th><th scope="col">Como interpretar</th></tr></thead>
        <tbody>{data.referenceRows.map(([label, value, detail]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td><td>{detail}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function FoodTable({ data }: { data: BVitaminData }) {
  return (
    <div className="nutrition-table-wrap" tabIndex={0} role="region" aria-label={`Exemplos de fontes alimentares de ${data.name}; deslize horizontalmente para ver todas as colunas`}>
      <table className="nutrition-table">
        <caption>Fontes alimentares e leitura prática</caption>
        <thead><tr><th scope="col">Grupo</th><th scope="col">Exemplos</th><th scope="col">Leitura prática</th></tr></thead>
        <tbody>{data.sources.map(([group, examples, note]) => <tr key={group}><th scope="row">{group}</th><td>{examples}</td><td>{note}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export function BVitaminPage({ vitamin }: { vitamin: BVitaminKey }) {
  const data = vitamins[vitamin];
  const evidence = B_VITAMIN_EVIDENCE[vitamin];
  const path = `/nutricao/vitaminas/${data.slug}`;
  const canonical = `${SITE_URL}${path}`;
  const references = [
    ["Anvisa — Instrução Normativa nº 75/2020", ANVISA_URL, `VDR brasileiro de ${data.vdr} e referências de rotulagem.`],
    [`NIH Office of Dietary Supplements — ${data.commonName}`, data.nihUrl, "Ficha técnica para profissionais sobre formas, funções, fontes, ingestões, deficiência, excesso e interações."],
    ["National Academies — Dietary Reference Intakes do complexo B", DRI_URL, "Documento-base para RDA, AI, UL e equivalências das vitaminas do complexo B."],
    ...(data.extraReference ? [data.extraReference] : []),
  ];
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: `${data.name} (${data.commonName})`,
    description: data.deck, datePublished: "2026-08-26", dateModified: "2026-08-27", inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical }, image: [`${SITE_URL}/social/${data.slug}.png`],
    author: { "@type": "Organization", name: "Clever Souza", url: SITE_URL }, publisher: { "@type": "Organization", name: "Clever Souza", url: SITE_URL },
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` }, about: [data.name, data.commonName, "Vitaminas do complexo B"],
    citation: references.map((reference) => reference[1]),
  };
  const toc = [["entenda", "O que é"], ["formas", "Formas"], ["funcoes", "Funções"], ["fontes", "Fontes e absorção"], ["necessidades", "Quanto precisamos?"], ["status-nutricional", "Como avaliar o status"], ["deficiencia", "Deficiência"], ["excesso", "Excesso e segurança"], ["evidencia", "O que a evidência sustenta"], ["ponto-chave", data.specialTitle], ["suplementacao", "Suplementação"], ["avaliacao", "Quando buscar avaliação"]];

  return (
    <PageShell active="/nutricao" breadcrumb={[{ label: "Início", href: "/" }, { label: "Nutrição", href: "/nutricao" }, { label: "Vitaminas", href: "/nutricao/vitaminas" }, { label: data.name }]}>
      <JsonLd value={articleSchema} />
      <article className="nutrition-article nutrition-article--b" style={{ "--b-accent": data.accent } as React.CSSProperties}>
        <header className="nutrition-article-hero">
          <div className="nutrition-article-heading">
            <p className="eyebrow">Nutrição · Complexo B</p><h1>{data.name}</h1><p className="nutrition-vitamin-name">{data.commonName}</p>
            <p className="nutrition-deck">{data.deck}</p>
            <div className="nutrition-publication-meta"><span>Conteúdo editorial Clever Souza</span><span>Atualizado em <time dateTime="2026-08-27">27 de agosto de 2026</time></span><span>Leitura aprofundada · cerca de {data.readingTime}</span></div>
          </div>
          <div className="nutrition-b-visual" aria-hidden="true"><span>Complexo B</span><strong>{data.key.toUpperCase()}</strong><small>{data.commonName}</small></div>
        </header>
        <div className="nutrition-article-layout">
          <aside className="nutrition-toc" aria-label="Índice do guia"><strong>Neste guia</strong><ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}<li><a href="#perguntas-frequentes">Perguntas frequentes</a></li><li><a href="#referencias">Referências</a></li></ol></aside>
          <div className="nutrition-article-body prose">
            <p className="nutrition-lead">{data.lead}</p>
            <aside className="nutrition-essential" aria-label={`${data.name} em poucas palavras`}><p className="eyebrow">Em poucas palavras</p><ul>{data.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>

            <section id="entenda"><p className="eyebrow">01 · Fundamento</p><h2>O que é {data.name}</h2><p><strong>{data.commonName}</strong> é o nome nutricional associado a {data.name}. O número identifica a nomenclatura histórica do nutriente — não uma ordem de importância, potência ou quantidade necessária.</p><p>Ela pertence ao complexo B, um grupo de vitaminas hidrossolúveis que atuam de modo interdependente, mas não são uma substância única. Cada vitamina tem funções, fontes, referências e riscos próprios.</p><p>Ser hidrossolúvel não significa que qualquer dose seja segura ou útil. Absorção, excreção, duração do uso e condições individuais mudam a avaliação.</p></section>

            <section id="formas"><p className="eyebrow">02 · Formas</p><h2>Nomes e formas que aparecem em alimentos e suplementos</h2><dl className="nutrition-form-grid">{data.forms.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl><p className="nutrition-note"><strong>Forma diferente não significa automaticamente melhor.</strong> Biodisponibilidade, estabilidade e indicação precisam ser analisadas junto da quantidade e do contexto.</p></section>

            <section id="funcoes"><p className="eyebrow">03 · Fisiologia</p><h2>O que ela faz no organismo</h2><ul className="nutrition-function-list">{data.functions.map(([name, detail]) => <li key={name}><strong>{name}:</strong> {detail}</li>)}</ul><p>Participar de uma via metabólica não significa que doses extras acelerem essa via, tratem sintomas inespecíficos ou previnam doenças em pessoas sem deficiência.</p></section>

            <section id="fontes"><p className="eyebrow">04 · Alimentação</p><h2>Fontes alimentares e aproveitamento</h2><FoodTable data={data} /><h3>Absorção, preparo e biodisponibilidade</h3>{data.absorption.map((item) => <p key={item}>{item}</p>)}<p className="nutrition-table-footnote">Os exemplos são qualitativos. Teores variam com alimento, porção, processamento e preparo; uma base de composição é necessária para cálculos específicos.</p></section>

            <section id="necessidades"><p className="eyebrow">05 · Números com contexto</p><h2>Quanto precisamos?</h2><div className="nutrition-vdr-callout"><span>VDR no Brasil</span><strong>{data.vdr}</strong><p>Referência da Anvisa para o %VD de alimentos em geral.</p></div><h3>Valor Diário não é necessidade individual</h3><p>O VDR é uma ferramenta regulatória para calcular o percentual do rótulo e comparar produtos. Não é dose ideal universal, limite máximo nem indicação automática de suplementação.</p><p>RDA é uma meta de planejamento que cobre quase todos os indivíduos saudáveis de um grupo. AI é usada quando faltam dados para uma RDA. UL é um teto de baixa probabilidade de dano — nunca uma meta.</p><DataTable data={data} /><p className="nutrition-table-footnote">VDR da Anvisa; RDA, AI e UL da National Academies, salvo quando outra autoridade está identificada. Valores populacionais não substituem avaliação individual.</p></section>

            <section id="status-nutricional"><p className="eyebrow">06 · Avaliação</p><h2>Como o status nutricional é avaliado</h2>{evidence.status.map((item) => <p key={item}>{item}</p>)}<p className="nutrition-note"><strong>Um resultado não existe sozinho.</strong> Intervalo do laboratório, inflamação, função renal, medicamentos, ingestão recente e sintomas podem mudar a interpretação.</p></section>

            <section id="deficiencia"><p className="eyebrow">07 · Inadequação</p><h2>Deficiência de {data.name}</h2>{data.deficiency.map((item) => <p key={item}>{item}</p>)}<h3>Quem pode apresentar maior risco</h3><ul>{data.riskGroups.map((item) => <li key={item}>{item}</li>)}</ul><p className="nutrition-note"><strong>Sintomas isolados não diagnosticam deficiência.</strong> Avaliação combina alimentação, histórico, condições clínicas e, quando apropriado, exames interpretados em conjunto.</p></section>

            <section id="excesso"><p className="eyebrow">08 · Segurança</p><h2>Excesso, limites e o que “hidrossolúvel” não resolve</h2>{data.excess.map((item) => <p key={item}>{item}</p>)}</section>

            <section id="evidencia"><p className="eyebrow">09 · Evidência</p><h2>O que a evidência sustenta — e o que ela não autoriza concluir</h2><div className="nutrition-risk-compare"><div><h3>Aplicações bem estabelecidas ou contextualizadas</h3><ul>{evidence.supported.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Atalhos que a evidência não sustenta</h3><ul>{evidence.notSupported.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

            <section id="ponto-chave"><p className="eyebrow">10 · Ponto crítico</p><h2>{data.specialTitle}</h2>{data.specialBody.map((item) => <p key={item}>{item}</p>)}</section>

            <section id="suplementacao"><p className="eyebrow">11 · Decisão responsável</p><h2>Suplementação sem automatismos</h2><p>Suplemento não substitui alimentação equilibrada. Pode ser útil quando ingestão, absorção ou fase da vida justificam — mas quantidade maior não significa benefício maior.</p><ol className="nutrition-checklist">{data.supplementChecklist.map((item) => <li key={item}>{item}</li>)}</ol><h3>Interações e situações que merecem revisão</h3><ul>{data.interactions.map((item) => <li key={item}>{item}</li>)}</ul></section>

            <section id="avaliacao"><p className="eyebrow">12 · Próximo passo</p><h2>Quando a avaliação profissional é especialmente importante</h2><ul><li>sintomas neurológicos, anemia, perda de peso, vômitos persistentes ou sinais progressivos;</li><li>gravidez, lactação, infância, cirurgia bariátrica ou má absorção;</li><li>doença renal ou hepática e uso contínuo de medicamentos;</li><li>dieta muito restrita, insegurança alimentar ou intenção de usar altas doses por longo período;</li><li>resultado laboratorial alterado ou suspeita de interferência causada por suplemento.</li></ul><aside className="health-note nutrition-health-note"><strong>Conteúdo educativo</strong><p>Esta página não diagnostica deficiência, não prescreve suplementação e não substitui avaliação de médico, nutricionista ou outro profissional habilitado.</p><Link href="/aviso-de-saude">Leia o Aviso de Saúde</Link></aside></section>

            <section className="nutrition-faq" id="perguntas-frequentes"><p className="eyebrow">Consulta rápida</p><h2>Perguntas frequentes</h2><div className="faq-list">{data.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

            <section className="nutrition-references" id="referencias"><p className="eyebrow">Base documental</p><h2>Fontes e referências</h2><ol>{references.map(([title, url, detail]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title}</a><p>{detail}</p></li>)}</ol><p className="nutrition-source-note">Fontes consultadas em 27 de agosto de 2026. Valores regulatórios podem mudar; para uso profissional, consulte o texto vigente.</p></section>

            <nav className="nutrition-article-paths" aria-label="Continuar na área de Nutrição"><Link href="/nutricao/vitaminas">← Todas as vitaminas</Link><Link href="/nutricao">Explorar Nutrição</Link></nav>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
