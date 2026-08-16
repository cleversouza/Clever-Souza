"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function AnalyticsBridge() {
  const pathname = usePathname();

  useEffect(() => {
    const pageEvents: Record<string, string> = {
      "/": "view_home",
      "/sobre": "view_about",
      "/contato": "view_contact",
      "/massoterapia": "view_massotherapy",
      "/massoterapia/conteudo": "view_massotherapy_content_hub",
      "/massoterapia-curitiba": "view_massotherapy",
      "/servicos": "view_massotherapy_services",
    };

    if (pathname.startsWith("/massoterapia/conteudo/")) {
      window.dataLayer?.push({
        event: "view_massotherapy_article",
        page_path: pathname,
      });
    } else if (pageEvents[pathname]) {
      window.dataLayer?.push({
        event: pageEvents[pathname],
        page_path: pathname,
      });
    }

    let sentScroll = false;
    const onScroll = () => {
      if (sentScroll) return;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight > 0 && window.scrollY / documentHeight >= 0.75) {
        sentScroll = true;
        window.dataLayer?.push({
          event: "scroll_75",
          page_path: pathname,
        });
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const tracked = target?.closest<HTMLElement>("[data-event]");
      if (!tracked) return;

      window.dataLayer?.push({
        event: tracked.dataset.event,
        page_path: pathname,
        link_url:
          tracked instanceof HTMLAnchorElement ? tracked.href : undefined,
        service_name: tracked.dataset.service,
        front_name: tracked.dataset.front,
        link_location: tracked.dataset.location,
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
