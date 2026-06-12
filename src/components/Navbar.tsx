import { useState } from "react";
import { Search } from "lucide-react";
import foxLogo from "@/assets/fox-logo.png";

const categories = ["Tecnologia", "IA", "Startups", "Marketing", "Automação", "Dev"];

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const Navbar = ({ activeCategory, onCategoryChange }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-nav">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img src={foxLogo} alt="Focus Tech" className="w-[42px] h-[42px] object-contain" />
            <span className="font-display text-[17px] font-bold tracking-tight text-foreground">
              FOCUS <span className="text-primary">TECH BLOG</span>
            </span>
          </div>

          {/* Categories */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onCategoryChange("Todos")}
              className={`px-3.5 py-2 text-[13px] font-body font-medium rounded-full transition-all duration-200 ${
                activeCategory === "Todos"
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-2 text-[13px] font-body font-medium rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            {searchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos..."
                className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all w-48"
                autoFocus
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Buscar"
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Mobile categories */}
        <div className="flex lg:hidden gap-1.5 pb-3 overflow-x-auto scrollbar-none">
          <button
            onClick={() => onCategoryChange("Todos")}
            className={`px-3 py-1.5 text-xs font-body font-medium rounded-full whitespace-nowrap transition-all ${
              activeCategory === "Todos" ? "bg-foreground/10 text-foreground" : "text-muted-foreground"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 text-xs font-body font-medium rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat ? "bg-foreground/10 text-foreground" : "text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
