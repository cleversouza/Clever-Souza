import { pageMetadata } from "../metadata";
import { ContentsPage } from "../site";

export const metadata = pageMetadata(
  "Conteúdos",
  "Artigos e materiais publicados por Clever Souza sobre massoterapia, saúde corporal e bem-estar.",
  "/conteudos",
  ["conteúdos Clever Souza", "massoterapia", "saúde corporal", "bem-estar"],
);

export default function Page() {
  return <ContentsPage />;
}
