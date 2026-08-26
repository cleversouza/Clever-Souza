/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import { useLayoutEffect, useState } from "react";
import styles from "./reflexologia-landing.module.css";

const WHATSAPP_NUMBER = "5541992051173";
const WHATSAPP_MESSAGE =
  "Olá, Clever. Conheci a experiência de Reflexologia Podal pelo site e gostaria de conversar sobre a sessão.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const routineMoments = [
  { time: "07:10", label: "O dia começa", weight: 24 },
  { time: "09:40", label: "A rotina acelera", weight: 43 },
  { time: "13:20", label: "O corpo continua", weight: 61 },
  { time: "18:10", label: "O caminho de volta", weight: 79 },
  { time: "21:30", label: "Os pés ainda estão aqui", weight: 94 },
];

const experienceGuidance = [
  {
    title: "Antes",
    text: "Uma conversa breve para compreender preferências, sensibilidades e informações relevantes.",
  },
  {
    title: "Durante",
    text: "Toques e pressões concentrados nos pés, com intensidade ajustada ao seu conforto.",
  },
  {
    title: "Preferências",
    text: "Você pode indicar o que está confortável e sinalizar qualquer desconforto a qualquer momento.",
  },
  {
    title: "Ajuste",
    text: "A condução se adapta à sua percepção de conforto, respeitando seus limites.",
  },
];

const faqs = [
  {
    question: "A pressão precisa ser forte?",
    answer:
      "Não. A intensidade pode ser ajustada durante toda a sessão. Pressão mais forte não significa, por si só, uma experiência melhor.",
  },
  {
    question: "Posso avisar se meus pés forem sensíveis?",
    answer:
      "Sim. Sensibilidades, preferências e qualquer desconforto relevante devem ser comunicados para que a condução respeite seus limites.",
  },
  {
    question: "Preciso me preparar antes?",
    answer:
      "Não é necessário fazer uma preparação especial. Informações práticas podem ser alinhadas na conversa antes da sessão.",
  },
  {
    question: "Como a experiência funciona?",
    answer:
      "Ela começa com uma conversa breve e segue com toques e pressões concentrados nos pés, mantendo comunicação aberta para ajustes de conforto.",
  },
  {
    question: "Reflexologia substitui atendimento de saúde?",
    answer:
      "Não. Esta é uma experiência de bem-estar e autocuidado. Ela não substitui avaliação, diagnóstico ou tratamento realizado por profissional habilitado.",
  },
];

function pressureLabel(value: number) {
  if (value < 34) return "Mais suave";
  if (value > 66) return "Mais intensa";
  return "Equilibrada";
}

export function ReflexologiaLanding() {
  const [pressure, setPressure] = useState(48);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reflex-reveal]"),
    );

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.dataset.visible = "true");
      return;
    }

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.94) {
        element.dataset.visible = "true";
      }
    });
    root.classList.add("reflex-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7%" },
    );

    elements.forEach((element) => {
      if (element.dataset.visible !== "true") observer.observe(element);
    });
    return () => {
      observer.disconnect();
      root.classList.remove("reflex-motion-ready");
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.brand} aria-label="Clever Souza — identidade visual não clicável">
        <img
          src="/brand/logo-horizontal-branca.svg"
          alt="Clever Souza"
          width="657"
          height="112"
        />
      </div>

      <main id="conteudo-principal">
        <section className={styles.hero} aria-labelledby="reflexologia-hero-title">
          <div className={styles.heroAtmosphere} aria-hidden="true" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow} data-reflex-reveal>
                Reflexologia Podal
              </p>
              <h1 id="reflexologia-hero-title" data-reflex-reveal>
                Seu dia passa inteiro <span>pelos seus pés.</span>
              </h1>
              <p className={styles.heroLead} data-reflex-reveal>
                Antes de pedir que eles façam mais, talvez seja hora de oferecer uma pausa.
              </p>
            </div>

            <figure className={styles.heroVisual} data-reflex-reveal>
              <picture>
                <source
                  srcSet="/massoterapia/reflexologia/reflexologia-hero.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/massoterapia/reflexologia/reflexologia-hero.webp"
                  type="image/webp"
                />
                <img
                  src="/massoterapia/reflexologia/reflexologia-hero.jpg"
                  alt="Pés em repouso sobre uma superfície translúcida iluminada por pontos suaves de luz ciano"
                  width="1586"
                  height="992"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <figcaption>
                <span aria-hidden="true" />
                A pausa começa onde o dia se apoia.
              </figcaption>
            </figure>
          </div>
          <div className={styles.scrollCue} aria-hidden="true">
            <span>Desça para desacelerar</span>
            <i />
          </div>
        </section>

        <section className={styles.manifesto} aria-labelledby="manifesto-title">
          <div className={styles.shell}>
            <p className={styles.sceneNumber}>Sustentação</p>
            <h2 id="manifesto-title" data-reflex-reveal>
              Eles sustentam. <span>Acompanham.</span> Adaptam. E quase nunca entram na agenda.
            </h2>
          </div>
        </section>

        <section className={styles.load} aria-labelledby="load-title">
          <div className={styles.shell}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.kicker}>A carga do cotidiano</p>
                <h2 id="load-title" data-reflex-reveal>
                  O corpo segue. <span>Os pés participam de tudo.</span>
                </h2>
              </div>
              <p data-reflex-reveal>
                Trabalho, deslocamentos, tempo em pé, atividade física, rotina. O ritmo muda; o apoio continua.
              </p>
            </div>

            <ol className={styles.timeline} aria-label="Progressão ilustrativa de um dia em movimento">
              {routineMoments.map((moment) => (
                <li key={moment.time} data-reflex-reveal>
                  <div className={styles.timelineScale} aria-hidden="true">
                    <span style={{ width: `${moment.weight}%` }} />
                    <i style={{ left: `${moment.weight}%` }} />
                  </div>
                  <time>{moment.time}</time>
                  <strong>{moment.label}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.slowdown} aria-labelledby="slowdown-title">
          <div className={styles.slowdownField} aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} style={{ "--particle": index } as CSSProperties} />
            ))}
          </div>
          <div className={styles.slowdownCopy}>
            <p className={styles.kicker}>Mudança de ritmo</p>
            <h2 id="slowdown-title" data-reflex-reveal>
              Até que o movimento <span>cede espaço à atenção.</span>
            </h2>
            <p data-reflex-reveal>
              Menos estímulo. Menos pressa. Um intervalo para perceber conforto e presença.
            </p>
          </div>
        </section>

        <section className={styles.reveal} aria-labelledby="reveal-title">
          <div className={styles.revealCopy}>
            <p className={styles.kicker}>A experiência</p>
            <h2 id="reveal-title" data-reflex-reveal>
              Reflexologia Podal.
              <span>Uma pausa que começa por baixo.</span>
            </h2>
            <p data-reflex-reveal>
              Uma experiência concentrada nos pés, conduzida com toques, pressões ajustáveis e comunicação aberta durante a sessão.
            </p>
            <a
              className={`${styles.cta} ${styles.revealCta}`}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_reflexology_whatsapp"
              data-location="reflexology_reveal_cta"
              data-reflex-reveal
            >
              <span>Quero conversar sobre a sessão</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <figure className={styles.revealVisual} data-reflex-reveal>
            <picture>
              <source
                srcSet="/massoterapia/reflexologia/reflexologia-experiencia.avif"
                type="image/avif"
              />
              <source
                srcSet="/massoterapia/reflexologia/reflexologia-experiencia.webp"
                type="image/webp"
              />
              <img
                src="/massoterapia/reflexologia/reflexologia-experiencia.jpg"
                alt="Toque cuidadoso e pressão suave sendo aplicados em um pé em repouso"
                width="1440"
                height="1080"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption>
              <b>Presença</b>
              <span>Pressão comunicada. Conforto respeitado.</span>
            </figcaption>
          </figure>
        </section>

        <section className={styles.pressure} aria-labelledby="pressure-title">
          <div className={styles.shell}>
            <div className={styles.pressureGrid}>
              <div>
                <p className={styles.kicker}>Pressão e conforto</p>
                <h2 id="pressure-title" data-reflex-reveal>
                  Intensidade não precisa significar excesso.
                </h2>
                <p className={styles.pressureIntro} data-reflex-reveal>
                  A experiência pode ser ajustada. O ponto adequado é aquele que respeita sua percepção e permite comunicação.
                </p>
              </div>

              <div className={styles.pressureConsole} data-reflex-reveal>
                <div className={styles.pressureReadout} aria-live="polite">
                  <span>Sua preferência</span>
                  <strong>{pressureLabel(pressure)}</strong>
                </div>
                <label htmlFor="pressure-control">
                  Ajuste ilustrativo de intensidade
                </label>
                <input
                  id="pressure-control"
                  type="range"
                  min="0"
                  max="100"
                  value={pressure}
                  onChange={(event) => setPressure(Number(event.target.value))}
                  style={{ "--pressure": `${pressure}%` } as CSSProperties}
                />
                <div className={styles.pressureLabels} aria-hidden="true">
                  <span>Mais suave</span>
                  <span>Mais intensa</span>
                </div>
                <div className={styles.pressureMap} aria-hidden="true">
                  {[18, 36, 52, 69, 84].map((position, index) => (
                    <i
                      key={position}
                      style={{
                        left: `${position}%`,
                        opacity: 0.22 + (pressure / 100) * (0.12 + index * 0.025),
                        transform: `translate(-50%, -50%) scale(${0.78 + pressure / 165})`,
                      }}
                    />
                  ))}
                </div>
                <p>Controle conceitual: a intensidade real é combinada durante a sessão.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.experience} aria-labelledby="experience-title">
          <div className={styles.shell}>
            <div className={styles.experienceHeading}>
              <p className={styles.kicker}>Como a experiência é conduzida</p>
              <h2 id="experience-title" data-reflex-reveal>
                Clara desde o início. <span>Atenta ao longo da experiência.</span>
              </h2>
            </div>
            <ul className={styles.steps}>
              {experienceGuidance.map((step) => (
                <li key={step.title} data-reflex-reveal>
                  <span aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.statement} aria-labelledby="statement-title">
          <div className={styles.statementOrb} aria-hidden="true" />
          <div className={styles.shell}>
            <p className={styles.sceneNumber}>Reciprocidade</p>
            <h2 id="statement-title" data-reflex-reveal>
              O dia pede dos seus pés. <span>A sessão faz o contrário:</span> dá atenção a eles.
            </h2>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={styles.shell}>
            <div className={styles.faqGrid}>
              <div>
                <p className={styles.kicker}>Antes de decidir</p>
                <h2 id="faq-title" data-reflex-reveal>
                  Sem mistério. Sem promessas exageradas.
                </h2>
                <p data-reflex-reveal>
                  O essencial para você compreender a experiência antes de conversar.
                </p>
              </div>
              <div className={styles.faqList} data-reflex-reveal>
                {faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.final} aria-labelledby="final-title">
          <div className={styles.finalGlow} aria-hidden="true" />
          <div className={styles.finalContent}>
            <img
              src="/brand/logo-horizontal-branca.svg"
              alt="Clever Souza"
              width="657"
              height="112"
            />
            <p className={styles.kicker}>Reflexologia Podal</p>
            <h2 id="final-title" data-reflex-reveal>
              O dia exigiu dos seus pés. Agora, a atenção volta para eles.
            </h2>
            <p data-reflex-reveal>
              Se a ideia de oferecer atenção aos seus pés fez sentido, a conversa pode começar por aqui.
            </p>
            <a
              className={styles.cta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_reflexology_whatsapp"
              data-location="reflexology_final_cta"
              data-reflex-reveal
            >
              <span>Quero conversar sobre a sessão</span>
              <i aria-hidden="true">↗</i>
            </a>
            <small>O contato abre no WhatsApp. Nenhum agendamento é confirmado automaticamente.</small>
          </div>
        </section>
      </main>
    </div>
  );
}
