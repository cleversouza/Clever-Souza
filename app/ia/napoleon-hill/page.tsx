import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../metadata";
import { JsonLd, PageShell } from "../../site";
import { CopyButton } from "../engenharia-de-prompt/copy-button";
import shared from "../engenharia-de-prompt/prompt-engineering.module.css";
import styles from "./napoleon-hill.module.css";

const SITE_URL = "https://www.cleversouza.com";
const PATH = "/ia/napoleon-hill";
const TITLE = "Napoleon Hill: ideias e aplicação crítica com IA";
const DESCRIPTION =
  "Conheça as obras e ideias de Napoleon Hill, seus limites históricos e científicos e um método crítico para aplicá-las a objetivos e decisões com IA.";

const baseMetadata = pageMetadata(TITLE, DESCRIPTION, PATH, [
  "Napoleon Hill",
  "Napoleon Hill livros",
  "princípios de Napoleon Hill",
  "Pense e Enriqueça",
  "como aplicar Napoleon Hill",
]);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    publishedTime: "2026-08-29T00:00:00.000Z",
    modifiedTime: "2026-08-29T00:00:00.000Z",
    authors: [`${SITE_URL}/sobre`],
  },
};

const truthLayers = [
  ["Obra", "O que está efetivamente escrito em uma obra identificada."],
  ["Relato do autor", "O que Hill afirmou ter vivido, pesquisado ou observado."],
  ["História", "O que documentação independente permite confirmar."],
  ["Evidência atual", "O que estudos contemporâneos sustentam, limitam ou contradizem."],
  ["Síntese editorial", "A organização prática construída nesta página e declarada como tal."],
] as const;

const works = [
  {
    title: "The Law of Success in Sixteen Lessons",
    year: "1928",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Sistema inicial amplo: propósito definido, autoconfiança, iniciativa, imaginação, pensamento preciso, cooperação, fracasso, tolerância e regra de ouro.",
  },
  {
    title: "The Magic Ladder to Success",
    year: "1930",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Condensação e reorganização do sistema anterior; edições posteriores podem alterar apresentação e contagem de princípios.",
  },
  {
    title: "Think and Grow Rich",
    year: "1937",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Reformula a filosofia em treze passos e concentra desejo, fé, autossugestão, conhecimento, planejamento, decisão, persistência e Master Mind.",
  },
  {
    title: "How to Sell Your Way Through Life",
    year: "1939",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Aplica partes do sistema a vendas, serviço, persuasão, qualificação e relações humanas.",
  },
  {
    title: "Mental Dynamite: The Philosophy of American Achievement",
    year: "c. 1941",
    status: "Curso / coautoria",
    authorship: "Napoleon Hill e William Plumer Jacobs",
    role: "Registro bibliográfico de curso publicado pela Jacobs Press. Compilações modernas com título semelhante não são automaticamente a mesma obra.",
  },
  {
    title: "The Master-Key to Riches",
    year: "1945",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Retoma a filosofia de realização e amplia a linguagem sobre hábitos, esforço organizado e riqueza.",
  },
  {
    title: "How to Raise Your Own Salary!",
    year: "1953",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Apresenta ideias em diálogo atribuído a Andrew Carnegie; o formato não deve ser tratado como transcrição histórica independente.",
  },
  {
    title: "Success Through a Positive Mental Attitude",
    year: "1960",
    status: "Coautoria",
    authorship: "Napoleon Hill e W. Clement Stone",
    role: "Torna a atitude mental positiva mais explícita e combina o sistema de Hill com a experiência editorial de Stone.",
  },
  {
    title: "Grow Rich! With Peace of Mind",
    year: "1967",
    status: "Publicada em vida",
    authorship: "Napoleon Hill",
    role: "Amplia a noção de riqueza para paz de espírito e acentua elementos espirituais e metafísicos.",
  },
  {
    title: "Succeed and Grow Rich Through Persuasion",
    year: "1970",
    status: "Coautoria",
    authorship: "Napoleon Hill e E. Harold Keown",
    role: "Retoma persuasão, comunicação e aplicação do sistema em relações e negócios.",
  },
  {
    title: "You Can Work Your Own Miracles",
    year: "1971",
    status: "Publicação póstuma próxima",
    authorship: "Napoleon Hill",
    role: "Publicada logo após a morte de Hill; pertence à fase final, mas seu status póstumo precisa permanecer visível.",
  },
  {
    title: "Outwitting the Devil",
    year: "manuscrito atribuído a 1938; publicado em 2011",
    status: "Manuscrito póstumo editado",
    authorship: "Napoleon Hill; edição e anotações de Sharon Lechter",
    role: "Explora medo, procrastinação e falta de direção em forma alegórica. A publicação tardia e a intervenção editorial impedem tratá-la como livro lançado em 1938.",
  },
] as const;

const conceptMap = [
  ["Propósito definido", "The Law of Success; Think and Grow Rich; How to Raise Your Own Salary!", "Muito alta", "Do objetivo central amplo à formulação mais orientada por desejo, prazo e plano."],
  ["Conhecimento especializado", "Think and Grow Rich; How to Sell Your Way Through Life", "Alta", "Conhecimento ganha valor quando organizado, aplicado ou obtido por pessoas complementares."],
  ["Imaginação e planejamento", "The Law of Success; Think and Grow Rich; The Master-Key to Riches", "Alta", "Ideia e plano aparecem como ponte entre desejo e execução; o plano pode ser reconstruído."],
  ["Decisão e iniciativa", "The Law of Success; Think and Grow Rich", "Alta", "Hill contrapõe decisão à procrastinação, mas sua preferência por rapidez não serve a todo risco."],
  ["Persistência", "Think and Grow Rich; How to Sell Your Way Through Life; obras posteriores", "Alta", "Permanece recorrente; a atualização crítica separa objetivo de estratégia."],
  ["Master Mind / cooperação", "The Law of Success; Think and Grow Rich; Success Through a Positive Mental Attitude", "Alta", "Passa de coordenação harmoniosa a fonte de poder coletivo, com componentes também metafísicos."],
  ["Autossugestão e fé", "Think and Grow Rich; Success Through a Positive Mental Attitude", "Média a alta", "Repetição, expectativa e crença são misturadas a afirmações causais mais fortes."],
  ["Medo e procrastinação", "Think and Grow Rich; Outwitting the Devil", "Média a alta", "O medo é tratado como obstáculo à decisão; a obra póstuma amplia o tema em linguagem alegórica."],
  ["Riqueza e paz de espírito", "Think and Grow Rich; The Master-Key to Riches; Grow Rich! With Peace of Mind", "Alta", "O foco financeiro inicial é gradualmente ampliado para relações, autonomia e paz mental."],
] as const;

const evidenceMap = [
  {
    idea: "Metas específicas e desafiadoras",
    status: "Compatível com condições",
    text: "Pesquisas sobre metas encontram ganhos de desempenho quando há capacidade, compromisso, feedback e complexidade administrável. Clareza ajuda; não garante o resultado.",
    source: "https://pubmed.ncbi.nlm.nih.gov/12237980/",
  },
  {
    idea: "Transformar intenção em plano",
    status: "Compatível",
    text: "Planos do tipo “se X ocorrer, farei Y” ajudam a reduzir a distância entre intenção e ação. Isso reforça execução concreta, não pensamento mágico.",
    source: "https://kops.uni-konstanz.de/entities/publication/2e749bfb-8533-437c-8203-7e788c910c5f",
  },
  {
    idea: "Conhecimento especializado",
    status: "Parcialmente compatível",
    text: "Capital humano se relaciona ao sucesso empreendedor, mas o efeito agregado é pequeno e depende de contexto, aplicação e forma de medir sucesso.",
    source: "https://research.rug.nl/en/publications/human-capital-and-entrepreneurial-success-a-meta-analytical-revie/",
  },
  {
    idea: "Master Mind como colaboração",
    status: "Parcialmente compatível",
    text: "Grupos podem apresentar inteligência coletiva, mas processo, participação e percepção social importam mais que simplesmente reunir pessoas talentosas.",
    source: "https://pubmed.ncbi.nlm.nih.gov/34001598/",
  },
  {
    idea: "Persistência",
    status: "Compatibilidade limitada",
    text: "A faceta de perseverança tem utilidade, porém o construto popular de grit explica menos do que costuma ser prometido. Desengajar de metas inalcançáveis também pode ser adaptativo.",
    source: "https://pubmed.ncbi.nlm.nih.gov/27845531/",
  },
  {
    idea: "Autossugestão positiva",
    status: "Evidência mista",
    text: "Afirmações positivas podem ter benefício limitado para algumas pessoas e piorar o estado de outras. Repetição não deve substituir evidência, habilidade ou ação.",
    source: "https://pubmed.ncbi.nlm.nih.gov/19493324/",
  },
  {
    idea: "Visualização",
    status: "Parcialmente compatível",
    text: "Simular o processo pode apoiar planejamento e desempenho; fantasiar apenas o resultado ideal pode reduzir energia para agir.",
    source: "https://journals.sagepub.com/doi/10.1177/0146167299025002010",
  },
  {
    idea: "Pensamento causa riqueza",
    status: "Não sustentado como causalidade",
    text: "Pensamento pode influenciar atenção, escolha e esforço. Não há base para tratá-lo como causa suficiente de riqueza sem oportunidade, capital, competência, mercado, rede, risco e acaso.",
    source: "https://ideas.repec.org/a/eee/jbvent/v26y2011i3p341-358.html",
  },
  {
    idea: "Inteligência infinita, vibração e sexto sentido",
    status: "Filosófico / não testável diretamente",
    text: "Essas formulações pertencem à dimensão metafísica da obra. Podem ser estudadas como história das ideias, não apresentadas como ciência estabelecida.",
    source: "https://books.google.com/books/about/Think_and_Grow_Rich.html?id=igMb4wbnGoMC",
  },
] as const;

const protocol = [
  ["Delimitar", "Resuma a situação, a decisão real e o que está fora do escopo."],
  ["Definir", "Converta desejo em resultado observável, prazo ou critério de avanço — sem converter ambição em certeza."],
  ["Qualificar", "Explique por que o objetivo importa e que valor precisa ser criado, entregue ou trocado."],
  ["Mapear", "Liste conhecimento, recursos, restrições, riscos e fatos ainda desconhecidos."],
  ["Complementar", "Identifique pessoas e competências que reduzem lacunas; defina incentivos, papéis e regras de colaboração."],
  ["Planejar", "Formule um caminho atual, hipóteses, dependências e uma alternativa se o primeiro plano falhar."],
  ["Decidir", "Separe indecisão evitável de deliberação necessária. Considere informação faltante, reversibilidade e custo de adiar."],
  ["Executar", "Escolha a menor ação real capaz de produzir progresso ou informação."],
  ["Medir", "Defina qual evidência mostrará avanço, erro, risco ou ausência de aderência."],
  ["Adaptar", "Com feedback, decida entre persistir, mudar a estratégia, redefinir o objetivo ou encerrar — sem confundir recuo racional com fracasso moral."],
] as const;

const analysisMatrix = [
  ["Objetivo", "O que você quer concretamente — e como reconhecerá progresso?"],
  ["Motivo", "Por que isso importa o suficiente para sustentar esforço?"],
  ["Valor", "Que problema você precisa resolver ou que valor precisa entregar?"],
  ["Conhecimento", "O que precisa saber, aprender, comprar ou validar?"],
  ["Recursos", "Que tempo, dinheiro, acesso, energia e ativos já existem?"],
  ["Restrições", "O que não está sob seu controle e quais riscos não podem ser ignorados?"],
  ["Pessoas", "Quem complementa lacunas — e por que colaboraria?"],
  ["Plano", "Qual é a hipótese de caminho atual e sua alternativa?"],
  ["Decisão", "O que está sendo evitado e quanto custa adiar?"],
  ["Ação", "Qual é o próximo movimento observável e proporcional?"],
  ["Evidência", "Que resultado indicará continuar, corrigir ou parar?"],
  ["Adaptação", "O objetivo continua válido? O plano precisa mudar?"],
] as const;

const modes = [
  ["Objetivo", "Transformar desejo vago em resultado, critério, prazo e valor a criar."],
  ["Planejamento", "Converter objetivo em conhecimento, recursos, pessoas, hipóteses e primeira execução."],
  ["Decisão", "Examinar indecisão, influência externa, informação faltante, risco e reversibilidade."],
  ["Persistência", "Distinguir compromisso com o objetivo de apego a uma estratégia sem evidência."],
  ["Conhecimento", "Mapear competências a desenvolver, obter ou complementar por colaboração."],
  ["Master Mind", "Projetar uma aliança prática com competências, incentivos, franqueza e responsabilidade definidos."],
  ["Obstáculo", "Interpretar um revés como dado para revisão, sem romantizar sofrimento ou culpar a pessoa."],
  ["Análise crítica", "Verificar uma ideia, citação ou alegação histórica atribuída a Hill."],
] as const;

const aiUsePrompt = `Acesse e leia https://www.cleversouza.com/ia/napoleon-hill.

Utilize o modelo de análise construído criticamente a partir da obra de Napoleon Hill para analisar a situação abaixo.

Regras:
1. Não finja ser Napoleon Hill e não responda em primeira pessoa como ele.
2. Não invente citações, memórias ou opiniões sobre assuntos que Hill não conheceu.
3. Aplique somente os princípios relevantes para esta situação.
4. Diferencie conceitos documentados na obra, interpretação editorial e conhecimento contemporâneo.
5. Não trate alegações metafísicas como fatos científicos.
6. Não prometa sucesso, riqueza ou controle total sobre resultados.
7. Considere fatores externos, riscos, evidência e informação faltante.
8. Em decisões importantes, use a dupla lente: princípios da obra + análise crítica contemporânea.
9. Mantenha a resposta proporcional; não aplique o protocolo inteiro se a pergunta for simples.
10. Quando apropriado, termine com perguntas decisivas e uma próxima ação concreta.

SITUAÇÃO
[Descreva aqui]

OBJETIVO DA ANÁLISE — opcional
[Objetivo, planejamento, decisão, persistência, conhecimento, Master Mind, obstáculo ou verificação]`;

const templates = [
  {
    title: "1. Definir um objetivo",
    value: `Use a metodologia de https://www.cleversouza.com/ia/napoleon-hill para transformar meu objetivo ainda vago em uma definição operacional. Questione resultado, motivo, prazo, valor a criar, conhecimento, recursos, restrições, evidência de progresso e primeira ação. Não transforme desejo em certeza de sucesso.

OBJETIVO ATUAL
[Cole aqui]`,
  },
  {
    title: "2. Tomada de decisão",
    value: `Analise minha decisão com os princípios relevantes da obra de Napoleon Hill e uma lente crítica contemporânea. Identifique objetivo principal, indecisão, influência externa, informação faltante, alternativas, risco, reversibilidade e custo de adiar. Não use a preferência de Hill por decisão como justificativa para pressa em uma escolha de alto risco.

DECISÃO
[Descreva aqui]`,
  },
  {
    title: "3. Plano de ação",
    value: `Converta meu objetivo em um plano proporcional usando esta sequência: objetivo → valor → conhecimento → recursos → pessoas → hipóteses → primeira execução → evidência → revisão. Diferencie o que está confirmado do que ainda precisa ser testado.

OBJETIVO
[Descreva aqui]`,
  },
  {
    title: "4. Persistência ou mudança",
    value: `Use o modelo da página para responder: devo persistir no objetivo ou estou apenas insistindo em uma estratégia ruim? Separe objetivo, estratégia, resultados observados, custo de oportunidade, riscos e possibilidade de adaptação. Admita encerrar quando a evidência justificar.

SITUAÇÃO
[Descreva o objetivo, o plano tentado e os resultados]`,
  },
  {
    title: "5. Master Mind operacional",
    value: `Aplique a interpretação operacional de Master Mind desta página. Mapeie competências que já possuo, lacunas, pessoas ou perfis complementares, incentivos, papéis, processo de decisão, forma de discordar e mecanismo de acompanhamento. Não apresente a colaboração como fenômeno místico.

OBJETIVO E CONTEXTO
[Descreva aqui]`,
  },
  {
    title: "6. Verificar uma citação",
    value: `Verifique se a frase abaixo é realmente de Napoleon Hill. Procure a obra primária, edição, capítulo ou página quando possível e ocorrências históricas confiáveis. Diferencie texto original, tradução, paráfrase e atribuição sem fonte. Se não puder confirmar, diga claramente “não consegui confirmar essa atribuição” e não a credite a Hill.

FRASE
[Cole aqui]`,
  },
] as const;

const examples = [
  {
    title: "Objetivo vago: “Quero ficar rico”",
    diagnosis: "Desejo não é objetivo operacional e riqueza não é um efeito garantido do pensamento.",
    application: "Defina valor líquido, renda ou segurança desejada, prazo, valor que será criado, competências, capital, risco e primeiro teste. Separe agência pessoal de mercado, oportunidade e acaso.",
    next: "Escolha uma métrica financeira e mapeie uma hipótese verificável de criação de valor para os próximos 30 dias.",
  },
  {
    title: "Três negócios ao mesmo tempo",
    diagnosis: "O problema pode ser ausência de propósito principal, critérios de escolha ou recursos suficientes.",
    application: "Compare aderência ao objetivo, conhecimento, capital, acesso a clientes, reversibilidade e velocidade para produzir evidência. Hill favoreceria foco; a lente atual acrescenta teste pequeno antes de compromisso irreversível.",
    next: "Defina uma tese e um teste barato para cada ideia; selecione uma para o ciclo principal e limite as outras.",
  },
  {
    title: "Procrastinação",
    diagnosis: "Adiar pode vir de medo, mas também de falta de informação, tarefa mal definida, sobrecarga ou risco real.",
    application: "Não faça diagnóstico psicológico. Clarifique a decisão, identifique o próximo comportamento e escreva um plano condicional para o obstáculo mais provável.",
    next: "Converta a tarefa em uma ação de até 25 minutos com início definido.",
  },
  {
    title: "Plano que não funciona",
    diagnosis: "Persistir no objetivo não exige repetir indefinidamente o mesmo método.",
    application: "Revise hipóteses, dados, custo, feedback e alternativas. A obra valoriza reconstruir planos; a pesquisa atual também reconhece adaptação e desengajamento de metas inalcançáveis.",
    next: "Defina um critério de continuidade, um pivô e uma condição de encerramento.",
  },
  {
    title: "Falta de conhecimento",
    diagnosis: "A lacuna pode ser técnica, comercial, regulatória ou de acesso — e nem toda competência precisa ser internalizada.",
    application: "Separe o que aprender, o que contratar, o que validar com especialista e o que obter por parceria. Conhecimento só ajuda quando ligado à tarefa.",
    next: "Liste três lacunas que bloqueiam a decisão e uma fonte legítima para cada uma.",
  },
  {
    title: "Compor um Master Mind",
    diagnosis: "Um grupo sem complementaridade, franqueza ou processo pode apenas amplificar concordância.",
    application: "Defina competências, incentivos, papéis, acesso à informação, como discordar e como acompanhar compromissos. A leitura metafísica de “mente coletiva” não é necessária para o uso prático.",
    next: "Convide uma pessoa que complemente a maior lacuna e proponha uma pauta e uma troca de valor explícitas.",
  },
  {
    title: "Revés ou fracasso",
    diagnosis: "Um resultado ruim fornece informação, mas não garante que exista um benefício equivalente escondido.",
    application: "Identifique o que o evento revela, o que permanece fora do controle e quais perdas precisam ser reconhecidas. Evite motivação automática e culpa moral.",
    next: "Registre uma aprendizagem verificável e uma decisão que ela altera.",
  },
  {
    title: "Decisão de alto risco",
    diagnosis: "Velocidade não é virtude universal quando a escolha é irreversível, cara ou regulada.",
    application: "Use objetivo e decisão para evitar adiamento indefinido, mas priorize diligência factual, cenários, aconselhamento financeiro, jurídico ou profissional e limites de perda.",
    next: "Liste fatos que precisam ser verificados antes de decidir e marque a data de revisão.",
  },
  {
    title: "Alegação metafísica",
    diagnosis: "Conceitos como vibração, inteligência infinita ou sexto sentido pertencem à filosofia da obra.",
    application: "Você pode reinterpretar intuição como hipótese baseada em experiência, mas não deve afirmar que isso prova transmissão mental ou causalidade externa.",
    next: "Traduza a intuição em hipótese e procure evidência independente.",
  },
  {
    title: "Citação famosa sem fonte",
    diagnosis: "Popularidade e repetição não estabelecem autoria.",
    application: "Procure a frase em obras identificadas, considere tradução e paráfrase e só atribua com localização confiável. Sem confirmação, mantenha a autoria em aberto.",
    next: "Registre obra, edição e localizador — ou use “atribuição não confirmada”.",
  },
] as const;

const sources = [
  {
    group: "Obras e registros bibliográficos",
    items: [
      ["Google Books — The Law of Success: In Sixteen Lessons", "https://books.google.com/books/about/The_Law_of_Success.html?id=TvVxYgEACAAJ"],
      ["Google Books — The Magic Ladder to Success", "https://books.google.com/books/about/The_Magic_Ladder_to_Success.html?id=KoUUAwAAQBAJ"],
      ["Google Books — Think and Grow Rich: Original 1937 Edition", "https://books.google.com/books/about/Think_and_Grow_Rich.html?id=igMb4wbnGoMC"],
      ["Library of Congress — descrição editorial de Think and Grow Rich", "https://catdir.loc.gov/catdir/enhancements/fy0720/2005044133-d.html"],
      ["WorldCat — How to Sell Your Way Through Life (©1939)", "https://search.worldcat.org/title/How-to-sell-your-way-through-life-%3A-the-principles-of-psychology-upon-which-all-master-salesmanship-is-based-%3A-how-to-sell-your-personal-services-at-top-notch-prices-%3A-including%3A-a-complete-analysis-of-the-stupendous-achievements-of-the-man-who-has-%22sold-his-way%22-into-more-millions-of-dollars-than-any-other-man-who-ever-lived/oclc/1035620709"],
      ["Google Books — The Master Key to Riches", "https://books.google.com/books?id=6YVRBlJBs5IC"],
      ["WorldCat — How to Raise Your Own Salary! (1953)", "https://search.worldcat.org/title/How-to-raise-your-own-salary%21/oclc/1421041"],
      ["WorldCat — Success Through a Positive Mental Attitude", "https://search.worldcat.org/oclc/16562547"],
      ["Google Books — Succeed and Grow Rich Through Persuasion (1970)", "https://books.google.com/books/about/Succeed_and_Grow_Rich_Through_Persuasion.html?id=Ev4JAQAAMAAJ"],
      ["WorldCat — Grow Rich! With Peace of Mind (©1967)", "https://search.worldcat.org/title/Grow-rich%21-%3A-with-peace-of-mind/oclc/1244784856"],
      ["WorldCat — You Can Work Your Own Miracles (©1971)", "https://search.worldcat.org/title/You-can-work-your-own-miracles/oclc/397892044"],
      ["WorldCat — Mental Dynamite (c. 1941)", "https://search.worldcat.org/title/7005680?tab=details"],
      ["Google Books — Outwitting the Devil, edição anotada", "https://books.google.com/books?cad=2&hl=en&id=I5ZpvwEACAAJ&source=gbs_book_other_versions_r"],
    ],
  },
  {
    group: "Biografia e contexto histórico",
    items: [
      ["EBSCO Research Starters — Napoleon Hill", "https://www.ebsco.com/research-starters/biography/napoleon-hill/"],
      ["Library of Congress — nota biográfica editorial", "https://catdir.loc.gov/catdir/enhancements/fy0720/2005044133-b.html"],
      ["Napoleon Hill Foundation — biografia institucional", "https://www.naphill.org/napoleon-hill/"],
      ["Paleofuture — investigação crítica e entrevista com David Nasaw", "https://paleofuture.com/blog/2016/12/6/the-untold-story-of-napoleon-hill-the-greatest-self-help-scammer-of-all-time"],
      ["Mitch Horowitz — The Enigma of Napoleon Hill", "https://mitch-horowitz-nyc.medium.com/the-enigma-of-napoleon-hill-b164cd1a8e33"],
    ],
  },
  {
    group: "Evidência contemporânea",
    items: [
      ["Locke & Latham (2002) — teoria e evidência sobre metas", "https://pubmed.ncbi.nlm.nih.gov/12237980/"],
      ["Gollwitzer & Sheeran (2006) — implementation intentions", "https://kops.uni-konstanz.de/entities/publication/2e749bfb-8533-437c-8203-7e788c910c5f"],
      ["Credé, Tynan & Harms (2017) — meta-análise de grit", "https://pubmed.ncbi.nlm.nih.gov/27845531/"],
      ["Wrosch et al. (2003) — desengajamento e reengajamento de metas", "https://pubmed.ncbi.nlm.nih.gov/15018681/"],
      ["Riedl et al. (2021) — inteligência coletiva em grupos", "https://pubmed.ncbi.nlm.nih.gov/34001598/"],
      ["Unger et al. (2011) — capital humano e sucesso empreendedor", "https://research.rug.nl/en/publications/human-capital-and-entrepreneurial-success-a-meta-analytical-revie/"],
      ["Macnamara et al. (2014) — meta-análise de prática deliberada", "https://pubmed.ncbi.nlm.nih.gov/24986855/"],
      ["Wood, Perunovic & Lee (2009) — afirmações positivas", "https://pubmed.ncbi.nlm.nih.gov/19493324/"],
      ["Pham & Taylor (1999) — simulação de processo e resultado", "https://journals.sagepub.com/doi/10.1177/0146167299025002010"],
      ["Kappes & Oettingen (2011) — fantasias positivas e energia", "https://www.sciencedirect.com/science/article/abs/pii/S002210311100031X"],
    ],
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}${PATH}#article`,
  headline: "Napoleon Hill: ideias, evidências e aplicação crítica com IA",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  image: `${SITE_URL}/social/napoleon-hill.png`,
  inLanguage: "pt-BR",
  datePublished: "2026-08-29",
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
  about: {
    "@type": "Person",
    name: "Napoleon Hill",
    birthDate: "1883-10-26",
    deathDate: "1970-11-08",
  },
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

export default function NapoleonHillPage() {
  return (
    <PageShell
      active="/ia"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "IA", href: "/ia" },
        { label: "Napoleon Hill" },
      ]}
    >
      <JsonLd value={articleSchema} />
      <article className={`${shared.page} ${styles.hillPage}`}>
        <header className={`${shared.hero} ${styles.hero}`}>
          <div className={shared.heroCopy}>
            <p className={shared.eyebrow}>Modelo de pensamento aplicado com IA</p>
            <h1>Napoleon Hill: ideias, evidências e aplicação crítica com IA</h1>
            <p className={shared.heroLead}>
              Uma leitura documentada da obra — com contexto histórico, limites e um método
              prático para objetivos, decisões, planejamento, colaboração e execução.
            </p>
            <div className={shared.heroActions}>
              <a className="button" href="#resposta-rapida">Compreender o modelo</a>
              <a className="button button-secondary" href="#usar-com-ia">Usar com uma IA</a>
            </div>
            <p className={shared.updateLine}>
              <span>Última atualização</span>
              <strong>29 de agosto de 2026</strong>
            </p>
          </div>

          <div className={styles.heroLens} role="group" aria-label="Cinco camadas de análise usadas nesta página">
            <p>Uma ideia, cinco camadas</p>
            <ol>
              {truthLayers.map(([title, text], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{title}</strong><small>{text}</small></div>
                </li>
              ))}
            </ol>
          </div>
        </header>

        <nav className={shared.toc} aria-label="Nesta página">
          <p>Nesta página</p>
          <ol>
            <li><a href="#resposta-rapida">Resposta rápida</a></li>
            <li><a href="#biografia">Biografia e fontes</a></li>
            <li><a href="#corpus">Obras</a></li>
            <li><a href="#conceitos">Conceitos</a></li>
            <li><a href="#evidencia">Evidência atual</a></li>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#exemplos">Exemplos</a></li>
            <li><a href="#usar-com-ia">Usar com IA</a></li>
            <li><a href="#citacoes">Citações</a></li>
            <li><a href="#referencias">Referências</a></li>
          </ol>
        </nav>

        <section className={shared.section} id="resposta-rapida" aria-labelledby="quick-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Resposta rápida</p>
            <h2 id="quick-title">O que ainda podemos aprender com Napoleon Hill?</h2>
            <p>O núcleo mais defensável não é “pensar e enriquecer”. É orientar intenção para objetivo, conhecimento, plano, decisão, colaboração, ação e revisão.</p>
          </div>
          <div className={styles.quickThesis}>
            <p>Uma leitura útil preserva a agência sem prometer controle total.</p>
            <div>
              <strong>Hill oferece</strong>
              <span>linguagem para propósito, compromisso, planejamento, iniciativa, persistência e cooperação.</span>
            </div>
            <div>
              <strong>A crítica acrescenta</strong>
              <span>proveniência, risco, fatores externos, evidência, limites da autossugestão e critérios para adaptar ou parar.</span>
            </div>
          </div>
          <blockquote className={styles.positioning}>
            Esta página não “interpreta” Napoleon Hill. Ela aplica princípios documentados e
            sínteses explicitamente identificadas.
          </blockquote>
        </section>

        <section className={`${shared.section} ${styles.historySection}`} id="biografia" aria-labelledby="bio-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Biografia crítica</p>
            <h2 id="bio-title">O autor é historicamente relevante — e suas histórias fundacionais exigem cautela</h2>
            <p>Napoleon Hill (1883–1970) foi um autor e conferencista americano que ajudou a consolidar a literatura moderna de sucesso pessoal. Sua obra mais conhecida, <em>Think and Grow Rich</em>, foi publicada em 1937.</p>
          </div>
          <div className={styles.historyGrid}>
            <article><span>Confirmável</span><h3>Obras, datas e influência editorial</h3><p>Registros bibliográficos sustentam a cronologia central das publicações, as coautorias e o papel de Hill no gênero de desenvolvimento pessoal.</p></article>
            <article><span>Hill afirmou</span><h3>Uma missão recebida de Andrew Carnegie</h3><p>Hill apresentou um encontro em 1908 e uma pesquisa com pessoas bem-sucedidas como origem de sua filosofia. Isso pertence ao relato autoral.</p></article>
            <article><span>Não confirmado</span><h3>Documentação independente suficiente</h3><p>Nas fontes consultadas, não foi localizada confirmação contemporânea independente do encontro ou da missão. O biógrafo de Carnegie David Nasaw declarou não ter encontrado evidência do encontro.</p></article>
          </div>
          <aside className={styles.sourceRule}>
            <strong>Regra de leitura</strong>
            <p>Uma história pode ser importante dentro da narrativa de uma obra sem se tornar, por isso, fato histórico estabelecido. A página preserva a distinção e evita tanto a canonização quanto o desmascaramento performático.</p>
          </aside>
          <div className={styles.truthTable}>
            {truthLayers.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </section>

        <section className={shared.section} id="corpus" aria-labelledby="corpus-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Corpus e bibliografia</p>
            <h2 id="corpus-title">Uma edição, uma compilação e uma obra original não são a mesma coisa</h2>
            <p>O mapa abaixo organiza as obras centrais identificadas. Reimpressões não foram contadas como novos livros; cursos, coautorias e publicações póstumas permanecem marcados.</p>
          </div>
          <div className={styles.accessNote}>
            <strong>Escopo real da leitura</strong>
            <p>A pesquisa analisou a estrutura e trechos legítimos das principais obras acessíveis, além de catálogos, sumários e registros editoriais. Não afirma leitura integral de todo texto atribuído a Hill. Obras protegidas não foram obtidas por scans piratas.</p>
          </div>
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Bibliografia principal de Napoleon Hill" aria-describedby="corpus-note">
            <table>
              <thead><tr><th scope="col">Obra</th><th scope="col">Ano</th><th scope="col">Autoria</th><th scope="col">Status</th><th scope="col">Função no corpus</th></tr></thead>
              <tbody>
                {works.map((work) => (
                  <tr key={work.title}>
                    <th scope="row"><cite>{work.title}</cite></th>
                    <td>{work.year}</td>
                    <td>{work.authorship}</td>
                    <td><span className={styles.statusTag}>{work.status}</span></td>
                    <td>{work.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.tableNote} id="corpus-note">Datas seguem os registros citados; algumas obras têm edições com datas, títulos ou conteúdos diferentes. “©1960”, por exemplo, pode aparecer em exemplares impressos em 1961.</p>
          <div className={styles.exclusionGrid}>
            <article><h3>Compilações posteriores</h3><p><em>Keys to Success</em>, seleções “best of”, livros anuais, workbooks e arranjos modernos podem ser úteis, mas não foram tratados como novas obras originais de Hill.</p></article>
            <article><h3>Títulos alternativos</h3><p><em>Think Your Way to Wealth</em> e materiais associados a <em>How to Raise Your Own Salary!</em> exigem controle de edição para não duplicar o corpus.</p></article>
            <article><h3>Autoria comercial</h3><p>Um título moderno com o nome de Hill não prova autoria integral. Editor, organizador, fonte do manuscrito e data de primeira publicação precisam ser verificados.</p></article>
          </div>
        </section>

        <section className={`${shared.section} ${shared.darkSection} ${styles.conceptSection}`} id="conceitos" aria-labelledby="concept-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Proveniência conceitual</p>
            <h2 id="concept-title">A filosofia é maior que os treze passos de 1937</h2>
            <p><em>The Law of Success</em> organiza um sistema amplo em 1928; <em>Think and Grow Rich</em> o condensa em 1937; obras posteriores enfatizam vendas, atitude mental positiva, persuasão e paz de espírito.</p>
          </div>
          <div className={styles.timeline} aria-label="Evolução editorial resumida">
            <div><span>1928</span><strong>Sistema amplo</strong><small>propósito, iniciativa, pensamento, cooperação</small></div>
            <div><span>1937</span><strong>Treze passos</strong><small>desejo, plano, decisão, persistência, Master Mind</small></div>
            <div><span>1939–60</span><strong>Aplicação</strong><small>vendas, serviço, persuasão e atitude mental</small></div>
            <div><span>1967–71</span><strong>Fase final</strong><small>paz de espírito, medo e linguagem mais espiritual</small></div>
          </div>
          <div className={styles.conceptRows}>
            {conceptMap.map(([concept, books, weight, evolution]) => (
              <article key={concept}>
                <div><span>{weight}</span><h3>{concept}</h3></div>
                <p><strong>Proveniência</strong>{books}</p>
                <p><strong>Evolução</strong>{evolution}</p>
              </article>
            ))}
          </div>
          <aside className={styles.thirteenNote}>
            <strong>Os treze princípios importam — mas pertencem a uma obra.</strong>
            <p>Desejo, fé, autossugestão, conhecimento especializado, imaginação, planejamento organizado, decisão, persistência, Master Mind, transmutação sexual, subconsciente, cérebro e sexto sentido formam a arquitetura de <em>Think and Grow Rich</em>. Eles não esgotam todo o corpus nem têm o mesmo status empírico.</p>
          </aside>
        </section>

        <section className={shared.section} id="evidencia" aria-labelledby="evidence-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Dupla lente</p>
            <h2 id="evidence-title">O que a evidência contemporânea confirma, limita ou não consegue testar</h2>
            <p>Sem tradução automática entre linguagem motivacional do século XX e ciência atual. A convergência é sobre mecanismos específicos, não sobre validar toda a filosofia.</p>
          </div>
          <div className={styles.evidenceList}>
            {evidenceMap.map((item) => (
              <article key={item.idea}>
                <div><span>{item.status}</span><h3>{item.idea}</h3></div>
                <p>{item.text}</p>
                <a href={item.source} target="_blank" rel="noopener noreferrer">Ver fonte <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <div className={styles.criticalGrid}>
            <article><h3>Riqueza</h3><p>Metas, habilidades e ação podem mudar probabilidades. Não anulam capital, mercado, desigualdade, rede, oportunidade, risco ou sorte.</p></article>
            <article><h3>Responsabilidade</h3><p>Agência pessoal não significa controle total. Doença, pobreza, trauma, desemprego e perdas não devem ser convertidos em falha moral.</p></article>
            <article><h3>Persistência</h3><p>Persistir pode significar aprender e adaptar. Repetir uma estratégia refutada não é coragem; pode ser escalada de compromisso.</p></article>
            <article><h3>Metafísica</h3><p>“Inteligência infinita”, vibração e sexto sentido podem ser analisados como filosofia ou história cultural, não como mecanismos científicos estabelecidos.</p></article>
          </div>
        </section>

        <section className={`${shared.section} ${shared.protocolSection} ${styles.methodSection}`} id="metodo" aria-labelledby="method-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Síntese operacional Clever Souza</p>
            <h2 id="method-title">Do desejo à ação revisável</h2>
            <p>O protocolo abaixo é uma organização editorial construída a partir de conceitos recorrentes nas obras analisadas e de contrapontos contemporâneos. Não é um framework publicado originalmente por Napoleon Hill.</p>
          </div>
          <ol className={shared.protocolList}>
            {protocol.map(([title, text], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
          <div className={styles.methodFlow} aria-label="Fluxo resumido do modelo operacional">
            <strong>Objetivo</strong><span>Conhecimento</span><span>Plano</span><span>Ação</span><span>Evidência</span><span>Adaptação</span>
          </div>
        </section>

        <section className={shared.section} id="matriz" aria-labelledby="matrix-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Matriz de análise</p>
            <h2 id="matrix-title">Doze perguntas para usar quando a situação exigir rigor</h2>
            <p>Não é um formulário obrigatório. Uma pergunta simples pode precisar de uma resposta simples; a matriz serve para decisões com dependências, risco ou execução prolongada.</p>
          </div>
          <div className={styles.matrixGrid}>
            {analysisMatrix.map(([dimension, question], index) => (
              <article key={dimension}><span>{String(index + 1).padStart(2, "0")}</span><h3>{dimension}</h3><p>{question}</p></article>
            ))}
          </div>
          <div className={styles.doubleLens}>
            <div><span>Lente Hill</span><p>Quais princípios documentados ajudam a organizar intenção, plano, decisão e ação?</p></div>
            <div><span>Lente contemporânea</span><p>Que evidência, risco, contexto, limite ou variável externa precisa ser acrescentado?</p></div>
            <div><span>Síntese prática</span><p>Qual ação é defensável agora — e o que mostrará que ela precisa mudar?</p></div>
          </div>
        </section>

        <section className={`${shared.section} ${styles.modesSection}`} id="modos" aria-labelledby="modes-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Modos de uso</p>
            <h2 id="modes-title">Aplique somente a lente necessária</h2>
            <p>O modelo não precisa recitar a obra inteira para resolver uma dúvida. Selecione o modo pelo trabalho real a realizar.</p>
          </div>
          <div className={styles.modeRows}>
            {modes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className={shared.section} id="exemplos" aria-labelledby="examples-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Aplicação prática</p>
            <h2 id="examples-title">Dez situações testadas pela dupla lente</h2>
            <p>Cada exemplo preserva o que existe de operacional na obra e corrige promessa, pressa, dogmatismo ou extrapolação.</p>
          </div>
          <div className={shared.exampleList}>
            {examples.map((example, index) => (
              <details key={example.title} open={index === 0}>
                <summary><span>Caso {String(index + 1).padStart(2, "0")}</span><strong>{example.title}</strong></summary>
                <div className={`${shared.exampleContent} ${styles.exampleContent}`}>
                  <div><span>Diagnóstico</span><p>{example.diagnosis}</p></div>
                  <div><span>Aplicação crítica</span><p>{example.application}</p></div>
                  <div><span>Próxima ação</span><p>{example.next}</p></div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${styles.templatesSection}`} id="templates" aria-labelledby="templates-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Templates</p>
            <h2 id="templates-title">Comandos copiáveis, sem personificação</h2>
            <p>Os templates orientam a análise; não pedem que a IA “seja” Hill e não transformam a filosofia em autoridade para decisões especializadas.</p>
          </div>
          <div className={shared.faqList}>
            {templates.map((template, index) => (
              <details key={template.title} open={index === 0}>
                <summary>{template.title}</summary>
                <div className={styles.templateBody}><PromptBlock label="Copiar template" value={template.value} /></div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${shared.section} ${shared.aiUseSection} ${styles.aiSection}`} id="usar-com-ia" aria-labelledby="ai-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Use esta página com uma IA</p>
            <h2 id="ai-title">Aplique um corpo de ideias. Não interprete um personagem.</h2>
            <p>Este comando fornece escopo, comportamento proibido, dupla lente e proporcionalidade. Acrescente apenas a situação que deseja analisar.</p>
          </div>
          <PromptBlock label="Copiar comando principal" value={aiUsePrompt} />
          <div className={styles.aiRules}>
            <div><h3>A IA não deve</h3><ul><li>responder em primeira pessoa como Hill;</li><li>inventar citações, lembranças ou conselhos;</li><li>atribuir opinião sobre Bitcoin, IA ou eventos posteriores a 1970;</li><li>tratar filosofia ou metáfora como evidência científica;</li><li>prometer riqueza ou sucesso.</li></ul></div>
            <div><h3>A IA deve</h3><ul><li>aplicar somente princípios pertinentes;</li><li>dizer de onde o conceito vem quando relevante;</li><li>marcar interpretações modernas;</li><li>considerar riscos, contexto e fatores externos;</li><li>declarar incerteza e terminar com ação proporcional.</li></ul></div>
          </div>
          <aside className={styles.answerFormat}>
            <strong>Formato adaptável de resposta</strong>
            <p>Situação → princípios relevantes → lente Hill → contraponto contemporâneo → síntese → perguntas decisivas → próxima ação. Para perguntas triviais, use apenas as partes necessárias.</p>
          </aside>
        </section>

        <section className={shared.section} id="citacoes" aria-labelledby="quotes-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Verificação de autoria</p>
            <h2 id="quotes-title">Napoleon Hill realmente disse isso?</h2>
            <p>Frases motivacionais circulam sem edição, localização ou idioma original. Repetição em redes sociais não é proveniência.</p>
          </div>
          <ol className={styles.quoteProtocol}>
            <li><span>01</span><div><strong>Localize a obra</strong><p>Busque o texto em livro, curso, discurso ou registro primário identificável.</p></div></li>
            <li><span>02</span><div><strong>Controle a edição</strong><p>Anote ano, editor, revisão e possível intervenção póstuma.</p></div></li>
            <li><span>03</span><div><strong>Encontre o localizador</strong><p>Capítulo e página quando disponíveis; não invente precisão.</p></div></li>
            <li><span>04</span><div><strong>Compare a linguagem</strong><p>Diferencie original, tradução, paráfrase e simplificação moderna.</p></div></li>
            <li><span>05</span><div><strong>Mantenha a incerteza</strong><p>Se a origem não puder ser confirmada, use “atribuição não confirmada”.</p></div></li>
          </ol>
          <div className={styles.falseQuote}><strong>Resposta correta quando a evidência falta</strong><p>“Não consegui confirmar essa atribuição nas fontes consultadas.”</p></div>
        </section>

        <section className={`${shared.section} ${styles.limitsSection}`} id="limites" aria-labelledby="limits-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Limites de aplicação</p>
            <h2 id="limits-title">Filosofia de realização não substitui análise especializada</h2>
            <p>Use o modelo para organizar reflexão e ação. Não para fornecer aconselhamento clínico, jurídico, financeiro ou de segurança sem fatos e profissionais adequados.</p>
          </div>
          <div className={styles.limitRows}>
            <article><h3>“O que Hill acharia de Bitcoin?”</h3><p>Hill não escreveu sobre Bitcoin. Só é possível aplicar princípios gerais como extrapolação moderna claramente identificada.</p></article>
            <article><h3>“Persistir sempre é certo?”</h3><p>Não. Evidência objetiva, perda crescente e custo de oportunidade podem justificar adaptar ou abandonar uma estratégia.</p></article>
            <article><h3>“Pensamento positivo cura ou enriquece?”</h3><p>Não como causalidade garantida. Expectativa pode afetar comportamento; não substitui tratamento, competência, oportunidade ou realidade econômica.</p></article>
            <article><h3>“O documento de Hill prova a história?”</h3><p>Não. A obra é fonte primária para o que Hill escreveu e afirmou, não confirmação independente de tudo que narra.</p></article>
          </div>
          <div className={styles.relatedGuides}>
            <h3>Onde este modelo encontra os guias de IA</h3>
            <p><Link href="/ia/engenharia-de-prompt">Engenharia de Prompt</Link> estrutura a instrução. <Link href="/ia/context-engineering">Context Engineering</Link> explica como esta URL funciona como contexto. <Link href="/ia/pesquisa-com-ia">Pesquisa com IA</Link> orienta verificação histórica e científica. <Link href="/ia/avaliacao-de-respostas-de-ia">Avaliação de respostas</Link> ajuda a conferir a análise produzida.</p>
          </div>
        </section>

        <section className={shared.section} id="faq" aria-labelledby="faq-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Perguntas frequentes</p>
            <h2 id="faq-title">Napoleon Hill, obras e aplicação com IA</h2>
          </div>
          <div className={shared.faqList}>
            {[
              ["Quais são os treze princípios de Think and Grow Rich?", "Desejo, fé, autossugestão, conhecimento especializado, imaginação, planejamento organizado, decisão, persistência, Master Mind, transmutação sexual, subconsciente, cérebro e sexto sentido. Eles pertencem à estrutura dessa obra e não resumem todo o corpus."],
              ["A página ensina a conversar com Napoleon Hill?", "Não. Ela instrui uma IA a aplicar princípios documentados e sínteses declaradas, sem personificar Hill, inventar voz histórica ou criar citações."],
              ["O encontro com Andrew Carnegie aconteceu?", "Hill afirmou que sim. As fontes consultadas não forneceram confirmação contemporânea independente suficiente; por isso, a página trata o encontro como relato de Hill, não como fato estabelecido."],
              ["Pensamento positivo aumenta a renda?", "Não existe base para uma relação causal simples. Atitudes podem influenciar comportamento, mas renda e riqueza também dependem de habilidade, contexto, capital, mercado, oportunidade, risco, rede e acaso."],
              ["O que é Master Mind nesta página?", "Uma aplicação prática de colaboração entre pessoas com competências complementares, incentivos, regras de decisão, abertura à discordância e acompanhamento. Essa é uma interpretação operacional contemporânea."],
              ["Quando persistir e quando parar?", "Persista enquanto objetivo, evidência de aprendizagem e custo forem defensáveis. Adapte ou encerre quando a estratégia estiver refutada, o objetivo perder validade ou os custos e riscos superarem o benefício esperado."],
              ["Todas as obras atribuídas a Hill foram lidas integralmente?", "Não. A pesquisa mapeou o corpus e analisou fontes legítimas acessíveis, sumários, trechos e registros. A ausência de acesso integral foi preservada em vez de preenchida por resumos não confiáveis."],
              ["Como verificar uma frase atribuída a Hill?", "Procure obra, edição e localizador; compare o original com traduções e paráfrases. Sem fonte suficiente, não atribua."],
            ].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className={`${shared.section} ${shared.references} ${styles.references}`} id="referencias" aria-labelledby="references-title">
          <div className={shared.sectionHeading}>
            <p className={shared.eyebrow}>Bibliografia e referências</p>
            <h2 id="references-title">Fontes usadas e função de cada grupo</h2>
            <p>Catálogos estabelecem autoria, edição e data; obras sustentam os conceitos; biografias e investigação histórica confrontam alegações; estudos contemporâneos avaliam mecanismos específicos.</p>
          </div>
          <div className={`${shared.sourceGroups} ${styles.sourceGroups}`}>
            {sources.map((group, index) => (
              <section key={group.group} aria-labelledby={`source-group-${index}`}>
                <h3 id={`source-group-${index}`}>{group.group}</h3>
                <ul>{group.items.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul>
              </section>
            ))}
          </div>
          <p className={shared.editorialNote}>Última revisão editorial: 29 de agosto de 2026. A bibliografia pode ser corrigida quando novas fontes legítimas alterarem uma data, autoria ou conclusão histórica.</p>
        </section>
      </article>
    </PageShell>
  );
}
