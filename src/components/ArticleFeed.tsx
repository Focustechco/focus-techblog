import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleFeedProps {
  articles: Article[];
}

const ArticleFeed = ({ articles }: ArticleFeedProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Link
          to={`/artigo/${article.id}`}
          key={article.id}
          className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-elevated"
        >
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-background/80 backdrop-blur-md text-foreground font-body font-medium text-[11px] tracking-wider uppercase rounded-full border border-white/10">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6">
            <h3 className="font-display text-xl md:text-[22px] text-foreground leading-snug mb-3 transition-colors group-hover:text-primary text-balance">
              {article.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground font-body pt-4 border-t border-border/60">
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleFeed;
