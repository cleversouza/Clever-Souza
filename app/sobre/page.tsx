import { pageMetadata } from "../metadata";
import { AboutPage } from "../site";

export const metadata = pageMetadata(
  "Sobre Clever Souza",
  "Informações oficiais sobre Clever Souza e Cleverson Batista de Souza.",
  "/sobre",
  ["Clever Souza", "Cleverson Batista de Souza"],
);

export default function Page() {
  return <AboutPage />;
}
