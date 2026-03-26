const topics = [
  "#InteligênciaArtificial", "#Startups2025", "#Automação", "#FocusTech",
  "#MachineLearning", "#Conlibras", "#DevOps", "#CloudComputing",
  "#ReactJS", "#TypeScript", "#UXDesign", "#BigData",
  "#CyberSecurity", "#IoT", "#Blockchain", "#NoCode",
];

const TrendingTicker = () => {
  const doubled = [...topics, ...topics];

  return (
    <div className="border-b border-border bg-card/30 overflow-hidden py-2">
      <div className="ticker-scroll flex gap-6 whitespace-nowrap">
        {doubled.map((topic, i) => (
          <span
            key={i}
            className="font-mono-code text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTicker;
