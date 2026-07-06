"use client";

import { Copy, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SecurityBar } from "@/components/SecurityBar";
import type { SecurityInfo } from "@/lib/usePasswordGenerator";
import { cn } from "@/lib/utils";

interface PasswordDisplayProps {
  password: string;
  security: SecurityInfo;
  copied: boolean;
  onCopy: () => void;
  onRegenerate: () => void;
}

function getPasswordFontSize(length: number): string {
  if (length > 45) return "text-lg";
  if (length > 32) return "text-2xl";
  if (length > 22) return "text-3xl";
  return "text-4xl";
}

export function PasswordDisplay({
  password,
  security,
  copied,
  onCopy,
  onRegenerate,
}: PasswordDisplayProps) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-lg">
      {/* Password row */}
      <div className="flex items-center gap-3 px-5 py-4">
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "font-mono font-medium text-text-primary tracking-wide truncate transition-all duration-150 select-all cursor-text",
              getPasswordFontSize(password.length)
            )}
            aria-label="Senha gerada"
            title={password}
          >
            {password}
          </p>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCopy}
            aria-label="Copiar senha"
            title="Copiar senha"
          >
            {copied ? (
              <Check className="w-5 h-5 text-safe" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRegenerate}
            aria-label="Gerar nova senha"
            title="Gerar nova senha"
          >
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Security bar */}
      <div className="px-5 pb-4">
        <SecurityBar security={security} />
      </div>
    </div>
  );
}
