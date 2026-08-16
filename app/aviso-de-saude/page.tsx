import { pageMetadata } from "../metadata";
import { HealthNoticePage } from "../site";

export const metadata = pageMetadata(
  "Aviso de Saúde",
  "Entenda os limites dos conteúdos e atendimentos de massoterapia e quando buscar avaliação de um profissional de saúde.",
  "/aviso-de-saude",
);

export default function Page() {
  return <HealthNoticePage />;
}
