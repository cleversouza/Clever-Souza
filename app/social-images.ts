const SITE_URL = "https://www.cleversouza.com";

const routeImages: Record<string, string> = {
  "/": "inicio",
  "/sobre": "sobre",
  "/contato": "contato",
  "/aviso-de-saude": "aviso-de-saude",
  "/politica-de-privacidade": "politica-de-privacidade",
  "/termos-de-uso": "termos-de-uso",
  "/massoterapia": "massoterapia",
  "/massoterapia/quick-massage-corporativo": "quick-massage-corporativo",
  "/massoterapia-curitiba": "massoterapia-curitiba",
  "/servicos": "servicos",
  "/conteudos": "conteudos",
  "/massoterapia/conteudo": "massoterapia-conteudo",
  "/conteudos/o-que-e-massoterapia": "conteudos-o-que-e-massoterapia",
  "/conteudos/primeira-sessao-de-massoterapia": "conteudos-primeira-sessao-de-massoterapia",
  "/conteudos/massagem-relaxante-e-terapeutica": "conteudos-massagem-relaxante-e-terapeutica",
  "/conteudos/cuidados-e-contraindicacoes": "conteudos-cuidados-e-contraindicacoes",
  "/conteudos/como-escolher-massoterapeuta-curitiba": "conteudos-como-escolher-massoterapeuta-curitiba",
};

const techniqueImages: Record<string, string> = {
  "massagem-relaxante": "massagem-relaxante",
  shiatsu: "shiatsu",
  "tui-na": "tui-na",
  "reflexologia-podal": "reflexologia-podal",
  "thai-massage": "thai-massage",
  "quick-massage": "quick-massage",
};

export function socialImageUrl(name: string) {
  return `${SITE_URL}/social/${name}.png`;
}

export function routeSocialImage(path: string) {
  return socialImageUrl(routeImages[path] ?? "inicio");
}

export function techniqueSocialImage(imageStem: string) {
  return socialImageUrl(techniqueImages[imageStem] ?? "massoterapia-conteudo");
}
