"use client";

import { useEffect, useRef, useState } from "react";

const protocols = [
  {
    id: "recharge",
    name: "Clever Recharge",
    focus: "Pausa rápida",
    description:
      "Uma pausa breve e objetiva de Quick Massage em cadeira, pensada para rotinas com pouco tempo.",
    image: "/massoterapia/protocolos/clever-recharge.webp",
  },
  {
    id: "reset",
    name: "Clever Reset",
    focus: "Desacelerar e relaxar",
    description:
      "Uma experiência para desacelerar, relaxar e reduzir o ritmo durante uma pausa de cuidado.",
    image: "/massoterapia/protocolos/clever-reset.webp",
  },
  {
    id: "release",
    name: "Clever Release",
    focus: "Tensões corporais",
    description:
      "Cuidado direcionado às regiões de maior tensão, com intensidade ajustada ao longo da sessão.",
    image: "/massoterapia/protocolos/clever-release.webp",
  },
  {
    id: "flow",
    name: "Clever Flow",
    focus: "Mobilidade e movimento",
    description:
      "Mobilidade e movimento para uma experiência mais fluida e uma sensação de corpo mais solto.",
    image: "/massoterapia/protocolos/clever-flow.webp",
  },
  {
    id: "restore",
    name: "Clever Restore",
    focus: "Experiência completa",
    description:
      "Uma experiência completa e prolongada, que pode combinar escalda-pés, massagem corporal e massagem em cabeça ou couro cabeludo.",
    image: "/massoterapia/protocolos/clever-restore.webp",
  },
] as const;

function wrapIndex(index: number) {
  return (index + protocols.length) % protocols.length;
}

function relativePosition(index: number, activeIndex: number) {
  const forward = wrapIndex(index - activeIndex);
  return forward > Math.floor(protocols.length / 2)
    ? forward - protocols.length
    : forward;
}

export function ProtocolCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const selectProtocol = (index: number) => {
    setActiveIndex(wrapIndex(index));
    setManualPaused(true);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || hoverPaused || focusPaused || manualPaused) return;

    const autoplay = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1));
    }, 10_000);

    return () => window.clearInterval(autoplay);
  }, [focusPaused, hoverPaused, manualPaused, reducedMotion]);

  return (
    <div
      className="protocol-carousel"
      role="region"
      aria-label="Protocolos Clever"
      aria-roledescription="carrossel"
      data-autoplay={
        manualPaused || reducedMotion || hoverPaused || focusPaused
          ? "paused"
          : "active"
      }
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocusPaused(false);
        }
      }}
      onPointerDown={(event) => {
        if (event.isPrimary) {
          pointerStartX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
          setManualPaused(true);
        }
      }}
      onPointerUp={(event) => {
        if (pointerStartX.current === null) return;

        const distance = event.clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }

        if (Math.abs(distance) < 36) return;
        setActiveIndex((current) =>
          wrapIndex(current + (distance < 0 ? 1 : -1)),
        );
      }}
      onPointerCancel={(event) => {
        pointerStartX.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
    >
      <div className="protocol-carousel-stage">
        {protocols.map((protocol, index) => {
          const position = relativePosition(index, activeIndex);
          const isActive = index === activeIndex;

          return (
            <article
              className="protocol-card-shell"
              data-position={position}
              data-active={isActive ? "true" : "false"}
              key={protocol.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${protocol.name}: ${protocol.focus}`}
            >
              <button
                className="protocol-card-select"
                type="button"
                aria-label={
                  isActive
                    ? `${protocol.name}, protocolo em evidência`
                    : `Mostrar ${protocol.name}`
                }
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  if (!isActive) selectProtocol(index);
                }}
              >
              </button>
              <img
                className="protocol-card-image"
                src={protocol.image}
                alt=""
                width="1448"
                height="1086"
                loading="lazy"
                aria-hidden="true"
              />
              <span className="protocol-card-overlay" aria-hidden="true" />
              <img
                className="protocol-card-logo"
                src="/brand/logo-horizontal-branca.svg"
                alt=""
                width="657"
                height="112"
                aria-hidden="true"
              />
              <div className="protocol-card-copy">
                <p className="card-kicker">{protocol.focus}</p>
                <h3>{protocol.name}</h3>
                <p>{protocol.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="protocol-carousel-controls">
        <button
          className="protocol-arrow"
          type="button"
          aria-label="Protocolo anterior"
          onClick={() => selectProtocol(activeIndex - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="protocol-pagination" aria-label="Escolher protocolo">
          {protocols.map((protocol, index) => (
            <button
              type="button"
              key={protocol.id}
              aria-label={`Mostrar ${protocol.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => selectProtocol(index)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
        <button
          className="protocol-arrow"
          type="button"
          aria-label="Próximo protocolo"
          onClick={() => selectProtocol(activeIndex + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="protocol-carousel-status" aria-live="polite">
        {protocols[activeIndex].name} · {activeIndex + 1} de {protocols.length}
      </p>
    </div>
  );
}
