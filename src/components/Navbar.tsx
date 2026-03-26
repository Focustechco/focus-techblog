import { useState } from "react";
import { Search } from "lucide-react";

const categories = ["Tecnologia", "IA", "Startups", "Marketing", "Automação", "Dev"];

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const Navbar = ({ activeCategory, onCategoryChange }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-nav border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground text-lg leading-none">F</span>
            </div>
            <span className="font-display text-xl tracking-wider text-foreground">
              FOCUS <span className="text-primary">TECNOLOGIA</span>
            </span>
          </div>

          {/* Categories - hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onCategoryChange("Todos")}
              className={`px-3 py-1.5 text-sm font-body font-medium rounded transition-all duration-300 ${
                activeCategory === "Todos"
                  ? "bg-primary text-primary-foreground glow-orange"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 text-sm font-body font-medium rounded transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-orange"
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
                placeholder="Buscar..."
                className="bg-secondary border border-border rounded px-3 py-1.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all w-40"
                autoFocus
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Mobile categories */}
        <div className="flex md:hidden gap-1 pb-3 overflow-x-auto scrollbar-none">
          <button
            onClick={() => onCategoryChange("Todos")}
            className={`px-3 py-1 text-xs font-body font-medium rounded whitespace-nowrap transition-all ${
              activeCategory === "Todos"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1 text-xs font-body font-medium rounded whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
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
