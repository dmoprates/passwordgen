"use client";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import type { PasswordOptions } from "@/lib/usePasswordGenerator";

interface PasswordOptionsProps {
  options: PasswordOptions;
  onLengthChange: (value: number) => void;
  onToggle: (key: "uppercase" | "numbers" | "symbols", value: boolean) => void;
}

const CHECKBOXES: {
  key: "uppercase" | "numbers" | "symbols";
  label: string;
  description: string;
}[] = [
  { key: "uppercase", label: "Maiúsculas", description: "A–Z" },
  { key: "numbers", label: "Números", description: "1–9" },
  { key: "symbols", label: "Símbolos", description: "?!@&*()[]" },
];

export function PasswordOptions({
  options,
  onLengthChange,
  onToggle,
}: PasswordOptionsProps) {
  return (
    <div className="bg-surface rounded-xl p-5 shadow-lg space-y-5">
      <h2 className="text-lg font-semibold text-text-primary border-b border-border pb-3">
        Personalizar
      </h2>

      {/* Length slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password-length"
            className="text-sm font-medium text-text-muted"
          >
            Tamanho
          </label>
          <span className="text-sm font-mono font-bold text-primary bg-surface-hover px-2.5 py-0.5 rounded-md tabular-nums">
            {options.length}
          </span>
        </div>
        <Slider
          id="password-length"
          min={4}
          max={64}
          step={1}
          value={[options.length]}
          onValueChange={([val]) => onLengthChange(val)}
          aria-label="Tamanho da senha"
        />
        <div className="flex justify-between text-xs text-text-muted px-0.5">
          <span>4</span>
          <span>64</span>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-text-muted">Incluir</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CHECKBOXES.map(({ key, label, description }) => (
            <label
              key={key}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-accent cursor-pointer transition-colors group"
            >
              <Checkbox
                id={key}
                checked={options[key]}
                onCheckedChange={(checked) =>
                  onToggle(key, checked === true)
                }
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {label}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {description}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
