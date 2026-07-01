import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Mail, Sparkles, Workflow, BarChart3, Cloud, Code2 } from "lucide-react";
import adrianoPhoto from "@/assets/authors/adriano.png";
import gabrielPhoto from "@/assets/authors/gabriel.jpg";
import mariaPhoto from "@/assets/authors/maria.jpg";
import marceloPhoto from "@/assets/authors/marcelo.jpg";

const trendingTopics = [
  { name: "Inteligência Artificial", count: 24, icon: Sparkles, slug: "inteligencia-artificial" },
  { name: "Automação de Processos", count: 18, icon: Workflow, slug: "automacao-empresarial" },
  { name: "React & TypeScript", count: 15, icon: Code2, slug: "react-typescript" },
  { name: "Startups & Funding", count: 12, icon: BarChart3, slug: "startups-funding" },
  { name: "Cloud Computing", count: 9, icon: Cloud, slug: "cloud-computing" },
];

const authors = [
  { name: "Adriano Leal", role: "Founder and CEO", photo: adrianoPhoto },
  { name: "Gabriel Sbrana", role: "Dev Lead", photo: gabrielPhoto },
  { name: "Maria Esther", role: "AI Researcher", photo: mariaPhoto },
  { name: "Marcelo Rezende", role: "Business leader", photo: marceloPhoto },
];

const BlogSidebar = () => {
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleFollow = (name: string) =>
    setFollowing((prev) => ({ ...prev, [name]: !prev[name] }));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <aside className="space-y-5">
      {/* Trending */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="font-display text-base text-foreground flex items-center gap-2 mb-5">
          <TrendingUp size={16} className="text-primary" />
          Assuntos em alta
        </h3>
        <ul className="space-y-1">
          {trendingTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <li key={topic.name}>
                <Link
                  to={`/hub/${topic.slug}`}
                  className="w-full flex items-center justify-between gap-3 p-2.5 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </span>
                    <span className="text-sm font-body font-medium text-foreground truncate">
                      {topic.name}
                    </span>
                  </span>
                  <span className="text-xs font-mono-code text-muted-foreground tabular-nums">
                    {topic.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Authors */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="font-display text-base text-foreground mb-5">Autores</h3>
        <div className="space-y-3.5">
          {authors.map((author) => (
            <div key={author.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-border">
                  <img src={author.photo} alt={author.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-medium text-foreground leading-tight truncate">{author.name}</p>
                  <p className="font-body text-xs text-muted-foreground truncate">{author.role}</p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(author.name)}
                className={`px-3 py-1.5 text-xs font-body font-semibold rounded-full transition-all duration-200 shrink-0 ${
                  following[author.name]
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {following[author.name] ? "Seguindo" : "Seguir"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
            <Mail size={18} className="text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-1.5">Newsletter Focus</h3>
          <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
            Insights semanais sobre IA, automação e transformação digital.
          </p>
          {subscribed ? (
            <p className="font-body text-sm text-primary">✓ Inscrição confirmada!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="bg-background border border-border rounded-full px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-body font-semibold text-sm py-2.5 rounded-full transition-all hover:shadow-glow duration-300"
              >
                Inscrever-se
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
