"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type NavItem = {
  href: string;
  label: string;
};

export function MobileMenu({
  active,
  items,
}: {
  active: string;
  items: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(true);

  const current = (href: string) =>
    href === "/"
      ? active === "/"
      : href === "/ia"
        ? active === "/ia" || active.startsWith("/ia/")
        : active.startsWith(href);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = true;
    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    const previousOverscroll = root.style.overscrollBehavior;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const menuButton = buttonRef.current;
    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#conteudo-principal, .site-footer, .skip-link, .site-header .brand, .desktop-nav, .header-contact, .mobile-menu-button",
      ),
    );

    document.body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    const backgroundInertState = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
    }));
    backgroundInertState.forEach(({ element }) => {
      element.inert = true;
    });

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusable = Array.from(
          panelRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        );
        const first = focusable[0];
        const last = focusable.at(-1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      root.style.overflow = previousRootOverflow;
      root.style.overscrollBehavior = previousOverscroll;
      backgroundInertState.forEach(({ element, inert }) => {
        element.inert = inert;
      });
      document.removeEventListener("keydown", onKeyDown);
      if (restoreFocusRef.current) {
        menuButton?.focus({ preventScroll: true });
      }
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        tabIndex={open ? -1 : undefined}
        onClick={(event) => {
          event.preventDefault();
          setOpen((value) => !value);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="mobile-menu-backdrop"
            data-mobile-menu-portal
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
          >
          <div
            ref={panelRef}
            className="mobile-menu-panel"
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
          >
            <div className="mobile-menu-heading">
              <span id="menu-mobile-title">Navegação</span>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
              >
                Fechar
              </button>
            </div>
            <nav aria-label="Navegação para celular">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={current(item.href) ? "page" : undefined}
                  onClick={() => {
                    restoreFocusRef.current = false;
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
