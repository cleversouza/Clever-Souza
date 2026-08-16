import { pageMetadata } from "../metadata";
import { ContactPage } from "../site";

export const metadata = pageMetadata(
  "Contato",
  "Entre em contato com Clever Souza pelo canal oficial de WhatsApp.",
  "/contato",
  ["contato Clever Souza", "Cleverson Batista de Souza contato"],
);

export default function Page() {
  return <ContactPage />;
}
