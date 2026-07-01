import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { articles } from "@/data/articles";
import foxLogo from "@/assets/fox-logo.png";
import adrianoPhoto from "@/assets/authors/adriano.png";
import gabrielPhoto from "@/assets/authors/gabriel.jpg";
import mariaPhoto from "@/assets/authors/maria.jpg";
import marceloPhoto from "@/assets/authors/marcelo.jpg";

const authorPhotos: Record<string, string> = {
  "Adriano Leal": adrianoPhoto,
  "Gabriel Sbrana": gabrielPhoto,
  "Maria Esther": mariaPhoto,
  "Marcelo Rezende": marceloPhoto,
};

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/" className="text-primary font-body hover:underline">← Voltar ao blog</Link>
        </div>
      </div>
    );
  }

  const articleIndex = articles.findIndex((a) => a.id === article.id);
  const prevArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];

  return (
    <div className="min-h-screen relative bg-background">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* Top bar */}
        <nav className="fixed top-0 left-0 right-0 z-40 glass-nav">
          <div className="container mx-auto px-6 h-[68px] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
              <ArrowLeft size={16} />
              Voltar ao blog
            </Link>
            <div className="flex items-center gap-2.5">
              <img src={foxLogo} alt="Focus Tech" className="w-[42px] h-[42px] object-contain" />
              <span className="font-display text-[17px] font-bold tracking-tight text-foreground hidden sm:inline">
                FOCUS <span className="text-primary">TECH BLOG</span>
              </span>
            </div>
          </div>
        </nav>

        <article className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Header */}
            <header className="mb-10 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground font-body font-semibold text-[11px] tracking-wider uppercase rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                  <Clock size={12} /> {article.readTime} de leitura
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-6 text-balance">
                {article.title}
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm border-y border-border py-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-primary-foreground">
                      {article.author.split(" ").map(n => n[0]).join("").slice(0,2)}
                    </span>
                  </div>
                  <span className="font-body font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} />
                  <span className="font-body">{article.date}</span>
                </div>
              </div>
            </header>

            {/* Cover image */}
            <div className="rounded-2xl overflow-hidden mb-10 border border-border shadow-elevated aspect-[16/9]">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Body */}
            <div className="space-y-6 mb-16">
              {article.content.map((paragraph, i) => (
                <p key={i} className="font-body text-base md:text-lg text-foreground/85 leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/artigo/${prevArticle.id}`}
                  className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
                >
                  <span className="font-body text-xs text-muted-foreground">← Anterior</span>
                  <p className="font-display text-sm text-foreground mt-1.5 group-hover:text-primary transition-colors">
                    {prevArticle.title}
                  </p>
                </Link>
              ) : <div />}
              {nextArticle && (
                <Link
                  to={`/artigo/${nextArticle.id}`}
                  className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-soft transition-all duration-300 text-right"
                >
                  <span className="font-body text-xs text-muted-foreground">Próximo →</span>
                  <p className="font-display text-sm text-foreground mt-1.5 group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </article>

        <footer className="border-t border-border/60 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-body text-muted-foreground">
              © 2025 Focus Tecnologia. Todos os direitos reservados.
            </span>
            <span className="text-xs font-body text-muted-foreground">
              Inteligência Artificial • Software • Automação
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticlePage;
