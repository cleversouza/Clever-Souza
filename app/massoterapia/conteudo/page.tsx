import { pageMetadata } from "../../metadata";
import { MassotherapyContentHubPage } from "../editorial";

export const metadata = pageMetadata(
  "Conteúdos de massoterapia",
  "Guias sobre técnicas de massoterapia, funcionamento das sessões, evidências, limites e cuidados para uma escolha informada.",
  "/massoterapia/conteudo",
  [
    "conteúdos de massoterapia",
    "técnicas de massoterapia",
    "massoterapia em Curitiba",
    "cuidados na massoterapia",
  ],
);

export default function Page() {
  return <MassotherapyContentHubPage />;
}
