import { Link } from "react-router-dom";
import { Article } from "@/data/articles";

interface ArticleFeedProps {
  articles: Article[];
}

const ArticleFeed = ({ articles }: ArticleFeedProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article, idx) => (
        <Link
          to={`/artigo/${article.id}`}
          key={article.id}
          className="group relative bg-card border border-border rounded-lg p-5 transition-all duration-300 hover:border-primary hover:glow-orange cursor-pointer hover:-translate-y-1 block"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="font-mono-code text-xs text-primary opacity-60">
              #{String(idx + 1).padStart(2, "0")}
            </span>
            <span className="px-2 py-0.5 bg-primary/10 text-primary font-mono-code text-xs rounded border border-primary/20">
              {article.category}
            </span>
          </div>
          <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-glow-orange transition-all leading-tight">
            {article.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary to-transparent transition-all duration-500" />
        </Link>
      ))}
    </div>
  );
};

export default ArticleFeed;
