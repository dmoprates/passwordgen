import { cn } from "@/lib/utils";
import type { SecurityInfo } from "@/lib/usePasswordGenerator";

interface SecurityBarProps {
  security: SecurityInfo;
}

const levelColors = {
  critical: "bg-destructive",
  warning: "bg-chart-1",
  safe: "bg-primary",
};

const levelTextColors = {
  critical: "text-destructive",
  warning: "text-chart-1",
  safe: "text-primary",
};

export function SecurityBar({ security }: SecurityBarProps) {
  return (
    <div className="mt-3 space-y-1.5">
      <div className="flex justify-between items-center text-xs px-0.5">
        <span className="text-text-muted">Força da senha</span>
        <span className={cn("font-semibold", levelTextColors[security.level])}>
          {security.label} — {security.percent}%
        </span>
      </div>
      <div className="h-2 w-full bg-border rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            levelColors[security.level]
          )}
          style={{ width: `${security.percent}%` }}
          role="progressbar"
          aria-valuenow={security.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Segurança da senha: ${security.label}`}
        />
      </div>
    </div>
  );
}
