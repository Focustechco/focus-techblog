import { useState } from "react";
import { TrendingUp, Mail } from "lucide-react";

const trendingTopics = [
  "Inteligência Artificial",
  "Automação de Processos",
  "React & TypeScript",
  "Startups & Funding",
  "Cloud Computing",
];

const authors = [
  { name: "Lucas Ferreira", role: "CTO" },
  { name: "Ana Costa", role: "Dev Lead" },
  { name: "Pedro Santos", role: "AI Researcher" },
  { name: "Maria Oliveira", role: "UX Designer" },
];

const BlogSidebar = () => {
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleFollow = (name: string) => {
    setFollowing((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <aside className="space-y-6">
      {/* Trending */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-display text-lg text-foreground flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-primary" />
          TRENDING TOPICS
        </h3>
        <ul className="space-y-2">
          {trendingTopics.map((topic, i) => (
            <li
              key={topic}
              className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            >
              <span className="font-mono-code text-xs text-primary opacity-50 w-4">
                {i + 1}
              </span>
              <span className="group-hover:text-glow-orange transition-all">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Authors */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-display text-lg text-foreground mb-4">AUTORES</h3>
        <div className="space-y-3">
          {authors.map((author) => (
            <div key={author.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="font-display text-xs text-primary">
                    {author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm text-foreground leading-tight">{author.name}</p>
                  <p className="font-mono-code text-xs text-muted-foreground">{author.role}</p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(author.name)}
                className={`px-3 py-1 text-xs font-body font-semibold rounded border transition-all duration-300 ${
                  following[author.name]
                    ? "bg-primary text-primary-foreground border-primary glow-orange"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {following[author.name] ? "Seguindo" : "Seguir"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-display text-lg text-foreground flex items-center gap-2 mb-2">
          <Mail size={16} className="text-primary" />
          NEWSLETTER
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Receba as últimas novidades da Focus Tech direto no seu e-mail.
        </p>
        {subscribed ? (
          <p className="font-mono-code text-sm text-primary animate-fade-in">
            ✓ Inscrito com sucesso!
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="bg-secondary border border-border rounded px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body font-semibold py-2 rounded transition-all hover:glow-orange-strong duration-300"
            >
              Inscrever-se
            </button>
          </form>
        )}
      </div>
    </aside>
  );
};

export default BlogSidebar;
