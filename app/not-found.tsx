import type { Metadata } from "next";
import { NotFoundPage } from "./site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
