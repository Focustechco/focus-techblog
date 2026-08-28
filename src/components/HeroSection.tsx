import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

interface HeroSectionProps {
  category?: string;
}

const HeroSection = ({ category = "Todos" }: HeroSectionProps) => {
  const featured =
    category === "Todos"
      ? articles[0]
      : articles.find((a) => a.category === category) ?? articles[0];

  return (
    <Link
      to={`/artigo/${featured.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-elevated"
    >
      <div className="grid lg:grid-cols-2 lg:min-h-[460px]">
        {/* Left content */}
        <div className="relative z-10 p-6 md:p-12 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary text-primary-foreground font-body font-semibold text-[11px] tracking-wider uppercase rounded-full">
              Destaque
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
              <Clock size={12} /> {featured.readTime} de leitura
            </span>
            <span className="text-xs text-muted-foreground font-body">• {featured.category}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-foreground leading-[1.05] mb-5">
            {featured.title.includes(":") ? (
              <>
                <span className="block">{featured.title.split(":")[0].trim()}:</span>
                <span className="block lg:whitespace-nowrap">
                  {featured.title.split(":").slice(1).join(":").trim()}
                </span>
              </>
            ) : (
              featured.title
            )}
          </h1>


          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {featured.excerpt}
          </p>

          <span className="inline-flex items-center gap-2 self-start px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full transition-all duration-300 group-hover:shadow-glow group-hover:gap-3">
            Ler artigo completo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        {/* Right image */}
        <div className="relative order-1 lg:order-2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-0 overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-card via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent lg:hidden" />
        </div>
      </div>
    </Link>
  );
};

export default HeroSection;
