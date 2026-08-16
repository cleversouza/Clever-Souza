import { pageMetadata } from "../metadata";
import { PrivacyPage } from "../site";

export const metadata = pageMetadata(
  "Política de Privacidade",
  "Saiba como o site oficial de Clever Souza trata dados pessoais, cookies, contatos e direitos dos titulares.",
  "/politica-de-privacidade",
);

export default function Page() {
  return <PrivacyPage />;
}
