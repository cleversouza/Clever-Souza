/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    let decodedPath = url.pathname;
    try {
      decodedPath = decodeURIComponent(url.pathname);
    } catch {
      decodedPath = url.pathname;
    }
    const normalizedPath = decodedPath.replace(/\/+$/, "") || "/";
    const legacyHubs = new Set([
      "/conteudo",
      "/conteudos",
      "/conteúdo",
      "/conteúdos",
      "/massoterapia/conteudos",
      "/massoterapia/conteúdos",
    ]);
    const legacyArticles: Record<string, string> = {
      "o-que-e-massoterapia": "/massoterapia/conteudo",
      "primeira-sessao-de-massoterapia": "/massoterapia#como-funciona",
      "massagem-relaxante-e-terapeutica":
        "/massoterapia/conteudo/massagem-relaxante-como-funciona-e-cuidados",
      "cuidados-e-contraindicacoes": "/massoterapia#cuidados-gerais",
      "como-escolher-massoterapeuta-curitiba": "/massoterapia/conteudo",
    };

    if (legacyHubs.has(normalizedPath)) {
      return Response.redirect(
        new URL("/massoterapia/conteudo", url.origin),
        301,
      );
    }

    const legacyArticleMatch = normalizedPath.match(
      /^\/(?:conteudo|conteudos|conteúdo|conteúdos)\/([^/]+)$/,
    );
    if (legacyArticleMatch) {
      const destination =
        legacyArticles[legacyArticleMatch[1]] || "/massoterapia/conteudo";
      return Response.redirect(new URL(destination, url.origin), 301);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
