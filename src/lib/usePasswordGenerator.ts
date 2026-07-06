"use client";

import { useState, useCallback } from "react";

export type PasswordOptions = {
  length: number;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export type SecurityLevel = "critical" | "warning" | "safe";

export type SecurityInfo = {
  level: SecurityLevel;
  percent: number;
  label: string;
};

const LOWERCASE = "abcdefghjkmnpqrstuvwxyz";
const UPPERCASE = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const NUMBERS = "123456789";
const SYMBOLS = "?!@&*()[]";

export function generatePasswordString(options: PasswordOptions): string {
  let chars = LOWERCASE;
  if (options.uppercase) chars += UPPERCASE;
  if (options.numbers) chars += NUMBERS;
  if (options.symbols) chars += SYMBOLS;

  return Array.from({ length: options.length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export function calculateSecurity(options: PasswordOptions): SecurityInfo {
  const percent = Math.round(
    (options.length / 64) * 25 +
      (options.uppercase ? 15 : 0) +
      (options.numbers ? 25 : 0) +
      (options.symbols ? 35 : 0)
  );

  const clampedPercent = Math.min(percent, 100);

  let level: SecurityLevel;
  let label: string;

  if (clampedPercent > 69) {
    level = "safe";
    label = "Segura";
  } else if (clampedPercent > 50) {
    level = "warning";
    label = "Moderada";
  } else {
    level = "critical";
    label = "Fraca";
  }

  return { level, percent: clampedPercent, label };
}

const defaultOptions: PasswordOptions = {
  length: 16,
  uppercase: true,
  numbers: true,
  symbols: true,
};

export function usePasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>(defaultOptions);

  const [password, setPassword] = useState(() =>
    generatePasswordString(defaultOptions)
  );
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    setPassword(generatePasswordString(options));
  }, [options]);

  const copyToClipboard = useCallback(async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  const updateOption = useCallback(
    <K extends keyof PasswordOptions>(key: K, value: PasswordOptions[K]) => {
      setOptions((prev) => {
        const next = { ...prev, [key]: value };
        setPassword(generatePasswordString(next));
        return next;
      });
    },
    []
  );

  const security = calculateSecurity(options);

  return {
    password,
    options,
    security,
    copied,
    generate,
    copyToClipboard,
    updateOption,
  };
}
