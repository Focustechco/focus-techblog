import { FileText, Users, PenTool, Activity } from "lucide-react";

const stats = [
  { icon: FileText, label: "Artigos", value: "128", color: "text-primary" },
  { icon: Users, label: "Leitores Ativos", value: "2.4K", color: "text-primary" },
  { icon: PenTool, label: "Autores", value: "12", color: "text-primary" },
  { icon: Activity, label: "Uptime", value: "99.9%", color: "text-primary" },
];

const StatusBar = () => {
  return (
    <div className="border-b border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 gap-4 overflow-x-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 shrink-0">
              <stat.icon size={14} className={stat.color} />
              <span className="font-mono-code text-xs text-muted-foreground">{stat.label}:</span>
              <span className="font-mono-code text-xs text-foreground font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
