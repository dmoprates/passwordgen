"use client";

import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PasswordDisplay } from "@/components/PasswordDisplay";
import { PasswordOptions } from "@/components/PasswordOptions";
import { usePasswordGenerator } from "@/lib/usePasswordGenerator";

export function PasswordGenerator() {
  const {
    password,
    options,
    security,
    copied,
    generate,
    copyToClipboard,
    updateOption,
  } = usePasswordGenerator();

  return (
    <main className="min-h-screen bg-background text-text-primary font-sans">
      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
        {/* Hero */}
        <header className="text-center space-y-2 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            Gerador de Senha
          </h1>
          <p className="text-text-muted text-base max-w-md mx-auto">
            Crie senhas complexas e seguras para proteger suas contas.
          </p>
        </header>

        {/* Password Display */}
        <PasswordDisplay
          password={password}
          security={security}
          copied={copied}
          onCopy={copyToClipboard}
          onRegenerate={generate}
        />

        {/* Options */}
        <PasswordOptions
          options={options}
          onLengthChange={(val) => updateOption("length", val)}
          onToggle={(key, val) => updateOption(key, val)}
        />

        {/* Copy CTA */}
        <div className="flex justify-center pt-2">
          <Button
            size="lg"
            onClick={copyToClipboard}
            className="min-w-50 gap-2 text-base font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copiar senha
              </>
            )}
          </Button>
        </div>
      </div>
    </main>
  );
}
