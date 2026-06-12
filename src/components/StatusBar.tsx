import { FileText, Users, PenTool, Activity } from "lucide-react";

const stats = [
  { icon: FileText, label: "Artigos publicados", value: "128" },
  { icon: Users, label: "Leitores ativos", value: "2.4K" },
  { icon: PenTool, label: "Autores especialistas", value: "12" },
  { icon: Activity, label: "Disponibilidade", value: "99.9%" },
];

const StatusBar = () => {
  return (
    <div className="border-b border-border/60">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3 gap-6 overflow-x-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 shrink-0">
              <stat.icon size={14} className="text-primary" />
              <span className="text-xs font-body text-muted-foreground">{stat.label}</span>
              <span className="text-xs font-body font-semibold text-foreground tabular-nums">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
