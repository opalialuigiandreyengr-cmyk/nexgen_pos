"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Laptop, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground opacity-60"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("system");
  };

  return (
    <div className="flex items-center rounded-lg border border-border bg-card/80 p-0.5 shadow-xs">
      <button
        type="button"
        onClick={() => setTheme("light")}
        title="Light mode"
        className={`flex h-7 w-7 items-center justify-center rounded-md text-xs transition-colors cursor-pointer ${
          theme === "light"
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        title="Dark mode"
        className={`flex h-7 w-7 items-center justify-center rounded-md text-xs transition-colors cursor-pointer ${
          theme === "dark"
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        title="Auto-detect system theme"
        className={`flex h-7 w-7 items-center justify-center rounded-md text-xs transition-colors cursor-pointer ${
          theme === "system"
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="System mode"
      >
        <Laptop className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
