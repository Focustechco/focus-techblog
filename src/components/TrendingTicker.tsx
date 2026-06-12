const topics = [
  "Inteligência Artificial", "Startups 2025", "Automação", "Focus Tech",
  "Machine Learning", "Conlibras", "DevOps", "Cloud Computing",
  "React JS", "TypeScript", "UX Design", "Big Data",
  "Cyber Security", "IoT", "Blockchain", "No-Code",
];

const TrendingTicker = () => {
  const doubled = [...topics, ...topics];

  return (
    <div className="border-b border-border/60 overflow-hidden py-2.5">
      <div className="container mx-auto px-6 flex items-center gap-6">
        <span className="text-[11px] font-body font-semibold uppercase tracking-wider text-primary shrink-0">
          Em alta
        </span>
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-scroll flex gap-8 whitespace-nowrap">
            {doubled.map((topic, i) => (
              <span
                key={i}
                className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTicker;
