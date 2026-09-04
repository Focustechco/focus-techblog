import { useState } from "react";
import { Link2, Check, Instagram } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
}

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.79 9.79 0 0 1-1.5-5.23c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.4 9.82-9.81 9.82M20.5 3.49A11.7 11.7 0 0 0 12.05 0C5.55 0 .26 5.29.26 11.79c0 2.08.54 4.11 1.58 5.9L.16 24l6.45-1.69a11.74 11.74 0 0 0 5.44 1.39h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34" />
  </svg>
);

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = `${title} — Focus Tech Blog`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWindow = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer");

  const handleInstagram = async () => {
    await copyLink();
    toast.success("Link copiado!", {
      description: "Cole no seu story ou na bio do Instagram.",
    });
    openWindow("https://www.instagram.com/");
  };

  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card font-body text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-soft";

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-border py-5 my-10">
      <span className="font-body text-sm text-muted-foreground mr-1">
        Compartilhar:
      </span>

      <button
        type="button"
        onClick={() =>
          openWindow(
            `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`
          )
        }
        className={base}
        aria-label="Compartilhar no WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </button>

      <button
        type="button"
        onClick={() =>
          openWindow(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              text
            )}&url=${encodeURIComponent(url)}`
          )
        }
        className={base}
        aria-label="Compartilhar no X"
      >
        <XIcon />X
      </button>

      <button
        type="button"
        onClick={handleInstagram}
        className={base}
        aria-label="Compartilhar no Instagram"
      >
        <Instagram size={16} />
        Instagram
      </button>

      <button
        type="button"
        onClick={async () => {
          await copyLink();
          toast.success("Link copiado para a área de transferência!");
        }}
        className={base}
        aria-label="Copiar link do artigo"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
        {copied ? "Copiado" : "Copiar link"}
      </button>
    </div>
  );
};

export default ShareButtons;
