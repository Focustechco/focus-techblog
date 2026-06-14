import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Flame,
  BookOpen,
  Video,
  Mic,
  BarChart3,
  Newspaper,
  Mail,
  Share2,
  Eye,
  MessageCircle,
  Clock,
  Tag,
} from "lucide-react";
import { getHubBySlug } from "@/data/hubs";
import { articles } from "@/data/articles";
import foxLogo from "@/assets/fox-logo.png";

type FilterType = "todos" | "artigos" | "videos" | "podcasts" | "noticias" | "guias";

const FILTERS: { id: FilterType; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "artigos", label: "Artigos" },
  { id: "videos", label: "Vídeos" },
  { id: "podcasts", label: "Podcasts" },
  { id: "noticias", label: "Notícias" },
  { id: "guias", label: "Guias" },
];

const HubPage = () => {
  const { slug = "" } = useParams();
  const hub = getHubBySlug(slug);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("todos");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const hubArticles = useMemo(
    () => (hub ? articles.filter((a) => a.category === hub.category) : []),
    [hub]
  );

  const filteredArticles = useMemo(() => {
    if (!query) return hubArticles;
    const q = query.toLowerCase();
    return hubArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
    );
  }, [hubArticles, query]);

  if (!hub) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Hub não encontrado</h1>
          <Link to="/" className="text-primary font-body hover:underline">← Voltar ao blog</Link>
        </div>
      </div>
    );
  }

  const showSection = (s: FilterType) => filter === "todos" || filter === s;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: hub.title, url }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(url); } catch {}
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="min-h-screen relative bg-background">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* Top nav */}
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

        {/* Breadcrumbs */}
        <div className="pt-24 pb-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-1.5 text-xs font-body text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <ChevronRight size={12} />
              <Link to="/" className="hover:text-foreground transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-foreground">{hub.title}</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative">
          <div className="container mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elevated aspect-[21/9] md:aspect-[21/8]">
              <img src={hub.heroImage} alt={hub.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 md:p-14 max-w-3xl animate-fade-up">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 border border-primary/30 text-primary font-mono-code text-[11px] tracking-wider uppercase rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Hub de Conhecimento
                  </span>
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] mb-4 text-balance">
                    {hub.accentEmoji} <span className="text-primary">{hub.title.replace("Hub de ", "").replace("Hub ", "")}</span>
                  </h1>
                  <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                    {hub.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search + filters */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border rounded-2xl p-5 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 shadow-soft">
              <div className="flex items-center gap-3 flex-1 bg-secondary/60 rounded-xl px-4 py-3 border border-border/50">
                <Search size={16} className="text-muted-foreground shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Buscar em ${hub.title}...`}
                  className="bg-transparent outline-none font-body text-sm w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter size={14} className="text-muted-foreground shrink-0" />
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold whitespace-nowrap transition-all ${
                      filter === f.id
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/70 text-foreground text-xs font-body font-semibold transition-colors"
              >
                <Share2 size={14} /> Compartilhar
              </button>
            </div>
          </div>
        </section>

        {/* TRENDS */}
        <section className="pb-14">
          <div className="container mx-auto px-6">
            <SectionHeader icon="📈" title="Tendências do Mercado" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {hub.trends.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.name}
                    className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-1.5">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MOST READ ARTICLES */}
        {showSection("artigos") && (
          <section className="pb-14">
            <div className="container mx-auto px-6">
              <SectionHeader icon="🔥" title="Artigos Mais Lidos" hint={`${filteredArticles.length} resultado(s)`} />
              {filteredArticles.length === 0 ? (
                <p className="font-body text-muted-foreground text-sm mt-6">Nenhum artigo encontrado para esta busca.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                  {filteredArticles.map((a) => (
                    <Link
                      key={a.id}
                      to={`/artigo/${a.id}`}
                      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] font-mono-code text-muted-foreground mb-3">
                          <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary">{a.category}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{a.readTime}</span>
                          <span className="flex items-center gap-1"><Eye size={11} />{(1000 + a.id * 137).toLocaleString("pt-BR")}</span>
                        </div>
                        <h3 className="font-display text-lg text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                          {a.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">{a.excerpt}</p>
                        <div className="flex items-center justify-between text-xs font-body text-muted-foreground">
                          <span>{a.author}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={11} />{(a.id * 7) % 40 + 3}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-6 pb-14">
          {/* VIDEOS */}
          {showSection("videos") && (
            <section>
              <SectionHeader icon="🎥" title="Vídeos em Destaque" />
              <div className="space-y-3 mt-6">
                {hub.videos.map((v, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                      <Video size={20} className="text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-body font-medium text-foreground text-sm leading-snug">{v.title}</p>
                      <p className="font-mono-code text-[11px] text-muted-foreground mt-1">{v.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PODCASTS */}
          {showSection("podcasts") && (
            <section>
              <SectionHeader icon="🎙️" title="Podcasts" />
              <div className="space-y-3 mt-6">
                {hub.podcasts.map((p, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                      <Mic size={20} className="text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-body font-medium text-foreground text-sm leading-snug">{p.title}</p>
                      <p className="font-body text-xs text-muted-foreground mt-1">{p.guest} · {p.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* GUIDES */}
        {showSection("guias") && (
          <section className="pb-14">
            <div className="container mx-auto px-6">
              <SectionHeader icon="📚" title="Guias Completos" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {hub.guides.map((g, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-card to-secondary border border-border rounded-2xl p-6 hover:border-primary/40 transition-all overflow-hidden"
                  >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                    <BookOpen size={22} className="text-primary mb-4 relative" />
                    <h3 className="font-display text-lg text-foreground mb-2 relative">{g.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 relative">{g.description}</p>
                    <span className="relative inline-flex items-center gap-1.5 text-xs font-body font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Ler guia <ArrowRight size={12} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* STATS */}
        <section className="pb-14">
          <div className="container mx-auto px-6">
            <SectionHeader icon="📊" title="Estatísticas do Setor" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {hub.stats.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-colors">
                  <BarChart3 size={18} className="text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl md:text-4xl text-foreground mb-1.5">{s.value}</p>
                  <p className="font-body text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS */}
        {showSection("noticias") && (
          <section className="pb-14">
            <div className="container mx-auto px-6">
              <SectionHeader icon="📰" title="Últimas Notícias" />
              <div className="bg-card border border-border rounded-2xl divide-y divide-border mt-6 overflow-hidden">
                {hub.news.map((n, i) => (
                  <div key={i} className="p-5 flex items-center gap-4 hover:bg-secondary/30 transition-colors group cursor-pointer">
                    <Newspaper size={18} className="text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-foreground text-sm leading-snug group-hover:text-primary transition-colors">{n.title}</p>
                      <p className="font-mono-code text-[11px] text-muted-foreground mt-1">{n.source} · {n.date}</p>
                    </div>
                    <ArrowRight size={14} className="text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAGS / RELATED */}
        <section className="pb-14">
          <div className="container mx-auto px-6">
            <SectionHeader icon="🏷️" title="Tags Relacionadas" />
            <div className="flex flex-wrap gap-2 mt-6">
              {[hub.category, ...hub.trends.map((t) => t.name)].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-body text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
                >
                  <Tag size={11} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Newsletter */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-10">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
                <div className="relative">
                  <Flame size={22} className="text-primary mb-4" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3 max-w-xl leading-tight">
                    Pronto para dar o próximo passo?
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 max-w-lg">
                    A Focus Tecnologia ajuda empresas a transformar conhecimento em resultado real.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-glow transition-all">
                    {hub.cta} <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative">
                  <Mail size={20} className="text-primary mb-3" />
                  <h3 className="font-display text-xl text-foreground mb-1.5">Newsletter do Hub</h3>
                  <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                    Receba conteúdos exclusivos de {hub.topicName} toda semana.
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
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-body text-muted-foreground">
              © 2026 Focus Tecnologia. Todos os direitos reservados.
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

const SectionHeader = ({ icon, title, hint }: { icon: string; title: string; hint?: string }) => (
  <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
    <h2 className="font-display text-2xl md:text-3xl text-foreground flex items-center gap-3">
      <span>{icon}</span> {title}
    </h2>
    {hint && <span className="font-mono-code text-[11px] text-muted-foreground">{hint}</span>}
  </div>
);

export default HubPage;
