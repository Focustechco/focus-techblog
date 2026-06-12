import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import TrendingTicker from "@/components/TrendingTicker";
import HeroSection from "@/components/HeroSection";
import ArticleFeed from "@/components/ArticleFeed";
import BlogSidebar from "@/components/BlogSidebar";
import { articles } from "@/data/articles";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Todos") return articles.slice(1);
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen relative bg-background">
      {/* Ambient gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="pt-[100px] md:pt-[68px]">
          <StatusBar />
          <TrendingTicker />

          <main className="container mx-auto px-6 py-10 md:py-14">
            {/* Hero */}
            <section className="mb-14 animate-fade-up">
              <HeroSection />
            </section>

            {/* Feed + Sidebar */}
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 min-w-0">
                <div className="flex items-end justify-between gap-3 mb-7">
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                      Mais recentes
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-foreground">
                      Últimos artigos
                    </h2>
                  </div>
                  <span className="font-body text-xs text-muted-foreground pb-2">
                    {filteredArticles.length} {filteredArticles.length === 1 ? "publicação" : "publicações"}
                  </span>
                </div>
                <ArticleFeed articles={filteredArticles} />
              </div>

              <div className="w-full lg:w-[340px] shrink-0">
                <div className="lg:sticky lg:top-28">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-border/60 py-8 mt-16">
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
    </div>
  );
};

export default Index;
