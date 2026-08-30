"use client";

import { useState } from "react";
import styles from "./prompt-engineering.module.css";

type CopyButtonProps = {
  value: string;
  label?: string;
};

export function CopyButton({ value, label = "Copiar" }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      let copied = false;

      if (navigator.clipboard?.writeText) {
        try {
          await Promise.race([
            navigator.clipboard.writeText(value),
            new Promise<never>((_, reject) =>
              window.setTimeout(() => reject(new Error("Clipboard timeout")), 800),
            ),
          ]);
          copied = true;
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        copied = document.execCommand("copy");
        textarea.remove();
      }

      if (!copied) throw new Error("Copy command failed");

      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const visibleLabel =
    status === "copied" ? "Copiado" : status === "error" ? "Selecione e copie" : label;

  return (
    <button className={styles.copyButton} type="button" onClick={copy}>
      <span>{visibleLabel}</span>
      <span className={styles.srOnly} aria-live="polite">
        {status === "copied"
          ? "Conteúdo copiado para a área de transferência."
          : status === "error"
            ? "Não foi possível copiar automaticamente. Selecione o texto e copie."
            : ""}
      </span>
    </button>
  );
}
