import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, Calendar } from "lucide-react";
import { articles } from "@/data/articles";
import Starfield from "@/components/Starfield";
import foxLogo from "@/assets/fox-logo.png";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <Starfield />
        <div className="scanlines" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">ARTIGO NÃO ENCONTRADO</h1>
          <Link to="/" className="text-primary font-body hover:underline">← Voltar ao blog</Link>
        </div>
      </div>
    );
  }

  const articleIndex = articles.findIndex((a) => a.id === article.id);
  const prevArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];

  return (
    <div className="min-h-screen relative">
      <Starfield />
      <div className="scanlines" />

      <div className="relative z-10">
        {/* Top bar */}
        <nav className="fixed top-0 left-0 right-0 z-40 glass-nav border-b border-border">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              <ArrowLeft size={16} />
              Voltar ao blog
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="font-display text-primary-foreground text-lg leading-none">F</span>
              </div>
              <span className="font-display text-xl tracking-wider text-foreground hidden sm:inline">
                FOCUS <span className="text-primary">TECNOLOGIA</span>
              </span>
            </div>
          </div>
        </nav>

        {/* Article content */}
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono-code text-xs rounded border border-primary/30">
                  {article.category}
                </span>
                <span className="font-mono-code text-xs text-muted-foreground">
                  #{String(article.id).padStart(2, "0")}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-6 text-glow-orange">
                {article.title}
              </h1>

              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm border-t border-b border-border py-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={14} className="text-primary" />
                  <span className="font-body">{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} className="text-primary" />
                  <span className="font-body">{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  <span className="font-body">{article.readTime} leitura</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag size={14} className="text-primary" />
                  <span className="font-body">{article.category}</span>
                </div>
              </div>
            </header>

            {/* Body */}
            <div className="space-y-6 mb-16">
              {article.content.map((paragraph, i) => (
                <p key={i} className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/artigo/${prevArticle.id}`}
                  className="group bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300"
                >
                  <span className="font-mono-code text-xs text-muted-foreground">← Anterior</span>
                  <p className="font-display text-sm text-foreground mt-1 group-hover:text-glow-orange transition-all">
                    {prevArticle.title}
                  </p>
                </Link>
              ) : <div />}
              {nextArticle && (
                <Link
                  to={`/artigo/${nextArticle.id}`}
                  className="group bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 text-right"
                >
                  <span className="font-mono-code text-xs text-muted-foreground">Próximo →</span>
                  <p className="font-display text-sm text-foreground mt-1 group-hover:text-glow-orange transition-all">
                    {nextArticle.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono-code text-xs text-muted-foreground">
              © 2025 Focus Tecnologia. Todos os direitos reservados.
            </span>
            <span className="font-mono-code text-xs text-muted-foreground">
              v2.4.1 • Sistema operacional
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticlePage;
