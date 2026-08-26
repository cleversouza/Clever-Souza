"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./quick-massage-corporativo.module.css";

const MTE_NR1 =
  "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1";
const MTE_MANUAL =
  "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/manuais-e-publicacoes/2026/manual_gro_pgr_da_nr_1.pdf/view";
const MTE_PSYCHOSOCIAL_GUIDE =
  "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/guia-nr-01-revisado.pdf";
const WHATSAPP_NUMBER = "5541992051173";

type Briefing = {
  company: string;
  contact: string;
  location: string;
  participants: string;
  frequency: string;
  period: string;
  format: string;
  environment: string;
  notes: string;
};

const initialBriefing: Briefing = {
  company: "",
  contact: "",
  location: "",
  participants: "",
  frequency: "",
  period: "",
  format: "",
  environment: "",
  notes: "",
};

const faqs = [
  {
    question: "Contratar Quick Massage faz a empresa cumprir a NR-1?",
    answer:
      "Não. A NR-1 trata do Gerenciamento de Riscos Ocupacionais. A Quick Massage pode compor uma iniciativa de bem-estar, mas não substitui a identificação, avaliação, prevenção ou controle de riscos, nem as responsabilidades técnicas aplicáveis à organização.",
  },
  {
    question: "Por que a NR-1 aparece nesta página?",
    answer:
      "A redação vigente do capítulo 1.5 inclui expressamente os fatores de risco psicossociais relacionados ao trabalho no GRO. Isso ampliou a atenção das empresas ao tema, mas não transforma uma ação de bem-estar em controle de risco automaticamente.",
  },
  {
    question: "Preciso definir toda a logística antes do primeiro contato?",
    answer:
      "Não. O briefing pede uma estimativa de participantes, frequência e contexto. O formato, a logística e a disponibilidade são alinhados antes de uma proposta.",
  },
  {
    question: "O formulário gera preço ou capacidade automaticamente?",
    answer:
      "Não. Ele organiza o pedido inicial. Valores, duração, capacidade, quantidade de profissionais e condições dependem de uma proposta construída para o cenário informado.",
  },
];

function safeValue(value: string, fallback = "—") {
  return value.trim() || fallback;
}

function frequencyLabel(value: string) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number) || number < 1) return "—";
  return `${number} ${number === 1 ? "vez" : "vezes"} / mês`;
}

export function QuickMassageCorporateLanding() {
  const [briefing, setBriefing] = useState<Briefing>(initialBriefing);
  const frequency = Math.min(Math.max(Number.parseInt(briefing.frequency, 10) || 0, 0), 31);
  const cadence = useMemo(
    () => Array.from({ length: 4 }, (_, week) =>
      Math.max(0, Math.min(8, Math.ceil((frequency - week) / 4))),
    ),
    [frequency],
  );

  function updateField(name: keyof Briefing, value: string) {
    setBriefing((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Olá, Clever. Gostaria de solicitar um orçamento de Quick Massage para empresa.\n\nEmpresa: ${briefing.company}\nContato: ${briefing.contact}\nCidade/local: ${briefing.location}\nNúmero estimado de pessoas: ${briefing.participants}\nFrequência: ${frequencyLabel(briefing.frequency)}\nPeríodo: ${briefing.period}\nFormato: ${briefing.format}\nAmbiente: ${briefing.environment}\nObservação: ${briefing.notes.trim() || "Não informada"}\n\nPodemos conversar sobre o dimensionamento da proposta?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="quick-hero-title">
        <div className={styles.heroHalo} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Quick Massage para empresas · Curitiba</p>
              <h1 id="quick-hero-title">
                Uma pausa planejada para empresas em um novo contexto de <em>NR-1.</em>
              </h1>
              <p className={styles.heroLead}>
                Quick Massage corporativa para ações de bem-estar organizadas conforme a equipe, a frequência e o contexto da empresa.
              </p>
              <p className={styles.complianceNote}>
                <span aria-hidden="true" />
                Esta página não apresenta Quick Massage como solução isolada de conformidade. GRO, PGR e as responsabilidades de SST devem ser tratados pela organização com os responsáveis e profissionais habilitados.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#solicitar-orcamento">
                  Solicitar orçamento <span aria-hidden="true">↓</span>
                </a>
                <a className={styles.secondaryButton} href="#contexto-nr1">
                  Entender o contexto da NR-1
                </a>
              </div>
            </div>

            <div className={styles.rhythmCard} aria-label="Fluxo da proposta: equipe, pausa e continuidade">
              <div className={styles.rhythmHeader}>
                <div>
                  <span>Uma proposta começa pelo contexto</span>
                  <strong>Equipe → pausa → continuidade</strong>
                </div>
                <b>Briefing</b>
              </div>
              <svg viewBox="0 0 560 230" role="img" aria-label="Fluxo ilustrativo entre equipe, pausa e continuidade">
                <defs>
                  <linearGradient id="quick-flow" x1="0" x2="1">
                    <stop stopColor="#7ce3ec" />
                    <stop offset="0.52" stopColor="#8ca6ff" />
                    <stop offset="1" stopColor="#7ce3ec" />
                  </linearGradient>
                </defs>
                <path className={styles.flowSoft} d="M70 170 C180 25 328 222 492 74" />
                <path className={styles.flowLine} d="M70 170 C180 25 328 222 492 74" />
                <circle className={styles.flowNode} cx="70" cy="170" r="25" />
                <circle className={styles.flowNode} cx="281" cy="121" r="25" />
                <circle className={styles.flowNode} cx="492" cy="74" r="25" />
                <circle className={styles.flowDot} cx="70" cy="170" r="6" />
                <circle className={styles.flowDot} cx="281" cy="121" r="6" />
                <circle className={styles.flowDot} cx="492" cy="74" r="6" />
              </svg>
              <div className={styles.rhythmLegend}>
                <span><b>01</b> Equipe e local</span>
                <span><b>02</b> Formato da ação</span>
                <span><b>03</b> Proposta alinhada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-label="Temas desta página">
        <div className={styles.tickerTrack}>
          {["NR-1", "GRO", "Bem-estar corporativo", "Quick Massage", "Planejamento por equipe", "Orçamento sob medida", "NR-1", "GRO", "Bem-estar corporativo", "Quick Massage", "Planejamento por equipe", "Orçamento sob medida"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i aria-hidden="true" /></span>
          ))}
        </div>
      </div>

      <section className={styles.section} id="contexto-nr1" aria-labelledby="nr1-title">
        <div className={`${styles.container} ${styles.nrGrid}`}>
          <div>
            <p className={styles.kicker}>NR-1 · contexto regulatório</p>
            <h2 id="nr1-title">A NR-1 trata de gestão de riscos. Não de uma ação isolada.</h2>
            <p className={styles.lead}>
              O ponto relevante para empresas é que os fatores de risco psicossociais relacionados ao trabalho passaram a constar expressamente no escopo do GRO. Isso direciona a atenção para a organização e gestão do trabalho, avaliação de riscos e medidas de prevenção proporcionais ao cenário identificado.
            </p>
            <div className={styles.sourceLinks}>
              <a href={MTE_NR1} target="_blank" rel="noreferrer">NR-1 oficial · MTE <span aria-hidden="true">↗</span></a>
              <a href={MTE_MANUAL} target="_blank" rel="noreferrer">Manual GRO/PGR · MTE <span aria-hidden="true">↗</span></a>
              <a href={MTE_PSYCHOSOCIAL_GUIDE} target="_blank" rel="noreferrer">Guia psicossocial · MTE <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className={styles.nrCards}>
            <article><span>01</span><h3>O que mudou?</h3><p>A redação vigente desde <strong>26 de maio de 2026</strong> inclui expressamente fatores de risco psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais.</p></article>
            <article><span>02</span><h3>O foco continua sendo o risco ocupacional.</h3><p>O processo envolve identificar perigos, avaliar riscos e definir medidas de prevenção. O MTE orienta que o tema seja tratado dentro do GRO/PGR e em articulação com a ergonomia.</p></article>
            <article><span>03</span><h3>Onde entra o bem-estar?</h3><p>Iniciativas de bem-estar podem coexistir com outras ações internas. <strong>Isso não transforma Quick Massage em controle de risco ou comprovação de conformidade com a NR-1.</strong></p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.quickSection}`} id="quick-massage" aria-labelledby="quick-title">
        <div className={`${styles.container} ${styles.quickGrid}`}>
          <figure className={styles.quickPhoto}>
            <picture>
              <source srcSet="/massoterapia/tecnicas/quick-massage-540.webp 540w, /massoterapia/tecnicas/quick-massage-1080.webp 1080w" sizes="(max-width: 900px) calc(100vw - 2rem), 44vw" type="image/webp" />
              <img src="/massoterapia/tecnicas/quick-massage-1080.webp" alt="Quick Massage realizada em cadeira específica" width="1080" height="1080" loading="lazy" decoding="async" />
            </picture>
          </figure>
          <div>
            <p className={`${styles.kicker} ${styles.lightKicker}`}>Quick Massage para empresas</p>
            <h2 id="quick-title">Uma ação de bem-estar dimensionada para a realidade da equipe.</h2>
            <p>A proposta corporativa pode ser organizada conforme o número de participantes, a frequência desejada e o contexto da ação — como uma iniciativa pontual, evento interno ou programação recorrente.</p>
            <p>Em geral, a Quick Massage utiliza cadeira específica e sessões breves. O formato exato, a logística e a capacidade por ação são definidos na proposta, de acordo com o cenário informado pela empresa.</p>
            <ul className={styles.pointList}>
              <li>Planejamento baseado no tamanho da equipe e no formato solicitado.</li>
              <li>Possibilidade de ação pontual ou recorrente, conforme alinhamento comercial.</li>
              <li>Orçamento construído antes de qualquer compromisso, sem preço presumido nesta página.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="como-funciona-title">
        <div className={styles.container}>
          <p className={styles.kicker}>Como funciona</p>
          <h2 id="como-funciona-title">Do primeiro contato à proposta.</h2>
          <p className={styles.lead}>A página coleta apenas o necessário para iniciar o dimensionamento. Detalhes operacionais são alinhados depois.</p>
          <ol className={styles.steps}>
            <li><span>01 · CONTEXTO</span><h3>Entendemos a empresa</h3><p>Equipe estimada, local da ação, formato desejado e objetivo geral.</p></li>
            <li><span>02 · CADÊNCIA</span><h3>Definimos a frequência</h3><p>Uma ação pontual ou uma quantidade aproximada de vezes por mês.</p></li>
            <li><span>03 · DIMENSIONAMENTO</span><h3>Avaliamos a logística</h3><p>O volume de participantes orienta a construção de um formato viável para a proposta.</p></li>
            <li><span>04 · PROPOSTA</span><h3>Você recebe o orçamento</h3><p>O contato continua pelo WhatsApp para alinhar disponibilidade, escopo e condições.</p></li>
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.quoteSection}`} id="solicitar-orcamento" aria-labelledby="quote-title">
        <div className={styles.container}>
          <p className={styles.kicker}>Solicitar orçamento</p>
          <h2 id="quote-title">Conte um pouco sobre a ação que sua empresa imagina.</h2>
          <p className={styles.lead}>O resumo muda conforme você preenche. Ele não calcula preço, duração, capacidade ou número de profissionais: serve para organizar o briefing.</p>
          <div className={styles.quoteGrid}>
            <form className={styles.quoteForm} onSubmit={handleSubmit} data-whatsapp-target={`https://wa.me/${WHATSAPP_NUMBER}`}>
              <div className={styles.formHead}><p className={styles.kicker}>Briefing inicial</p><h3>Informações da empresa</h3><p>Preencha o básico e continue a conversa pelo WhatsApp.</p></div>
              <div className={styles.fieldGrid}>
                <label>Nome da empresa<input required value={briefing.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Nome da empresa" autoComplete="organization" /></label>
                <label>Nome da pessoa de contato<input required value={briefing.contact} onChange={(event) => updateField("contact", event.target.value)} placeholder="Pessoa de contato" autoComplete="name" /></label>
                <label>Cidade / local da ação<input required value={briefing.location} onChange={(event) => updateField("location", event.target.value)} placeholder="Ex.: Curitiba" /></label>
                <label>Número estimado de participantes<input required type="number" min="1" inputMode="numeric" value={briefing.participants} onChange={(event) => updateField("participants", event.target.value)} placeholder="Ex.: 80" /></label>
                <label>Quantas vezes por mês?<input required type="number" min="1" max="31" inputMode="numeric" value={briefing.frequency} onChange={(event) => updateField("frequency", event.target.value)} placeholder="Ex.: 2" /></label>
                <label>Período preferencial<select required value={briefing.period} onChange={(event) => updateField("period", event.target.value)}><option value="">Selecione</option><option>Manhã</option><option>Tarde</option><option>Noite</option><option>Horário comercial</option><option>A definir</option></select></label>
                <label>Formato<select required value={briefing.format} onChange={(event) => updateField("format", event.target.value)}><option value="">Selecione</option><option>Ação pontual</option><option>Ação recorrente</option><option>Evento interno</option><option>Campanha de bem-estar</option><option>Ainda não definido</option></select></label>
                <label>Ambiente<select required value={briefing.environment} onChange={(event) => updateField("environment", event.target.value)}><option value="">Selecione</option><option>Empresa</option><option>Evento externo</option><option>A definir</option></select></label>
              </div>
              <label className={styles.fullField}>Observação opcional<textarea value={briefing.notes} onChange={(event) => updateField("notes", event.target.value)} placeholder="Ex.: quantidade de turnos, evento específico, datas em avaliação..." /></label>
              <p className={styles.privacyNote}><span aria-hidden="true" /> Evite inserir dados de saúde de colaboradores. Este formulário é apenas comercial e de planejamento inicial.</p>
              <button className={styles.primaryButton} type="submit">Enviar briefing pelo WhatsApp <span aria-hidden="true">↗</span></button>
            </form>

            <aside className={styles.summary} aria-live="polite">
              <p>Resumo da solicitação</p>
              <h3>{briefing.company ? `Briefing · ${briefing.company}` : "Sua proposta começa aqui."}</h3>
              <dl>
                <div><dt>Empresa</dt><dd>{safeValue(briefing.company, "Ainda não informada")}</dd></div>
                <div><dt>Pessoas</dt><dd>{briefing.participants ? `${briefing.participants} ${briefing.participants === "1" ? "pessoa" : "pessoas"}` : "—"}</dd></div>
                <div><dt>Frequência</dt><dd>{frequencyLabel(briefing.frequency)}</dd></div>
                <div><dt>Formato</dt><dd>{safeValue(briefing.format)}</dd></div>
                <div><dt>Período</dt><dd>{safeValue(briefing.period)}</dd></div>
              </dl>
              <div className={styles.cadence}>
                <div><span>Cadência mensal</span><strong>{frequency ? `${frequency} ${frequency === 1 ? "ação" : "ações"}` : "0 ações"}</strong></div>
                <div className={styles.cadenceWeeks}>{cadence.map((count, index) => <div key={index}><small>Semana {index + 1}</small><span>{Array.from({ length: count }, (_, dot) => <i key={dot} aria-label="Ação ilustrativa" />)}</span></div>)}</div>
                <p>Representação ilustrativa da frequência informada. Dias, horários e capacidade dependem do alinhamento da proposta.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="limites-title">
        <div className={styles.container}>
          <div className={styles.boundaryPanel}>
            <div><p className={styles.kicker}>Onde a Quick Massage pode entrar</p><h2 id="limites-title">Como iniciativa de bem-estar.</h2><ul><li>Ações internas de cuidado e bem-estar corporativo.</li><li>Programações pontuais ou recorrentes, conforme a realidade da empresa.</li><li>Eventos e campanhas internas em que a empresa deseje oferecer uma pausa de cuidado aos participantes.</li></ul></div>
            <div><p className={`${styles.kicker} ${styles.lightKicker}`}>Onde ela não substitui</p><h2>Gestão de riscos e responsabilidade técnica.</h2><ul><li>GRO e PGR previstos na NR-1.</li><li>Avaliação de fatores de risco psicossociais e medidas sobre a organização do trabalho.</li><li>AEP/AET, atuação de SST, diagnóstico ou acompanhamento de saúde.</li></ul></div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div><p className={styles.kicker}>Perguntas frequentes</p><h2 id="faq-title">Antes de solicitar a proposta.</h2><p className={styles.lead}>A página separa claramente o contexto regulatório da contratação de uma ação de bem-estar.</p></div>
          <div className={styles.faqs}>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}><div><div><h2>Quer avaliar uma ação de Quick Massage para sua empresa?</h2><p>Informe o tamanho da equipe e a frequência desejada para iniciar o orçamento.</p></div><a className={styles.primaryButton} href="#solicitar-orcamento">Solicitar orçamento <span aria-hidden="true">↑</span></a></div></div>
      </section>

      <a className={styles.mobileCta} href="#solicitar-orcamento">Solicitar orçamento</a>
    </div>
  );
}
