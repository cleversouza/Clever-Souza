import { pageMetadata } from "../metadata";
import { TermsPage } from "../site";

export const metadata = pageMetadata(
  "Termos de Uso",
  "Consulte os termos aplicáveis ao uso do site www.cleversouza.com e de seus conteúdos.",
  "/termos-de-uso",
);

export default function Page() {
  return <TermsPage />;
}
