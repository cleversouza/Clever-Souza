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
  "/nutricao": "nutricao",
  "/nutricao/vitaminas": "vitaminas",
  "/nutricao/vitaminas/vitamina-a": "vitamina-a",
  "/nutricao/vitaminas/vitamina-b1": "vitamina-b1",
  "/nutricao/vitaminas/vitamina-b2": "vitamina-b2",
  "/nutricao/vitaminas/vitamina-b3": "vitamina-b3",
  "/nutricao/vitaminas/vitamina-b5": "vitamina-b5",
  "/nutricao/vitaminas/vitamina-b6": "vitamina-b6",
  "/nutricao/vitaminas/vitamina-b7": "vitamina-b7",
  "/nutricao/vitaminas/vitamina-b9": "vitamina-b9",
  "/nutricao/vitaminas/vitamina-b12": "vitamina-b12",
  "/nutricao/vitaminas/vitamina-c": "vitamina-c",
  "/nutricao/vitaminas/vitamina-d": "vitamina-d",
  "/nutricao/vitaminas/vitamina-e": "vitamina-e",
  "/nutricao/vitaminas/vitamina-k": "vitamina-k",
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
