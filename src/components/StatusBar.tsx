import { Zap } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="border-b border-border/60">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center gap-2.5">
            <Zap size={14} className="text-primary" />
            <span className="text-xs font-body uppercase tracking-wider text-muted-foreground">
              Insights sobre tecnologia toda quarta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
