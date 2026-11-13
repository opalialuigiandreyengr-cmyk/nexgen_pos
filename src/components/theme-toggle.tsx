"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-10 px-3.5 gap-2 rounded-lg border-border bg-card text-sm font-medium"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
        <span className="hidden sm:inline">Theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 px-3.5 gap-2 rounded-lg border-border bg-card hover:bg-accent text-sm font-medium text-foreground transition-all cursor-pointer shadow-xs"
      title={isDark ? "Switch to Day Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Day Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-amber-400" />
          <span className="font-semibold text-xs uppercase tracking-wider">Day</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-sky-600" />
          <span className="font-semibold text-xs uppercase tracking-wider">Dark</span>
        </>
      )}
    </Button>
  );
}
