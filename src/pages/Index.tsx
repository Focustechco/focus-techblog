import { useState, useMemo } from "react";
import Starfield from "@/components/Starfield";
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
    if (activeCategory === "Todos") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen relative">
      {/* Background layers */}
      <Starfield />
      <div className="scanlines" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="pt-20 md:pt-16">
          <StatusBar />
          <TrendingTicker />

          <main className="container mx-auto px-4 py-8">
            {/* Hero */}
            <div className="mb-8">
              <HeroSection />
            </div>

            {/* Feed + Sidebar */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-display text-2xl text-foreground">ÚLTIMOS ARTIGOS</h2>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono-code text-xs text-muted-foreground">
                    {filteredArticles.length} posts
                  </span>
                </div>
                <ArticleFeed articles={filteredArticles} />
              </div>

              <div className="w-full lg:w-80 shrink-0">
                <BlogSidebar />
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-border py-6 mt-12">
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
    </div>
  );
};

export default Index;
