import { FileText, Users, PenTool, CalendarDays } from "lucide-react";
import { articles } from "@/data/articles";

const stats = [
  { icon: FileText, label: "Artigos publicados", value: String(articles.length) },
  { icon: Users, label: "Leitores ativos", value: "2.4K" },
  { icon: PenTool, label: "Autores especialistas", value: "6" },
  { icon: CalendarDays, label: "Novos artigos", value: "toda semana" },
];

const StatusBar = () => {
  return (
    <div className="border-b border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-3 md:flex md:items-center md:justify-between">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 min-w-0 md:shrink-0">
              <stat.icon size={14} className="text-primary" />
              <span className="text-[11px] md:text-xs font-body text-muted-foreground truncate">{stat.label}</span>
              <span className="text-[11px] md:text-xs font-body font-semibold text-foreground tabular-nums whitespace-nowrap">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
