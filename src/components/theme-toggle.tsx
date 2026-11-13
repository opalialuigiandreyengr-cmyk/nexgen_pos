"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

// React 18/19 idiom to detect client mount without triggering cascading setState re-renders
function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) {
    return (
      <div
        className="w-14 h-7 rounded-full bg-slate-800/80 border border-slate-700/80 p-0.5 opacity-60"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to day mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border border-slate-700/80 bg-slate-900/90 p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-inner group"
      title={isDark ? "Switch to Day Mode" : "Switch to Dark Mode"}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className="h-3.5 w-3.5 text-amber-400" />
        <Moon className="h-3.5 w-3.5 text-sky-400" />
      </div>

      {/* Sliding Switch Thumb */}
      <span
        className={`pointer-events-none relative z-10 flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-slate-100 text-slate-800 shadow-md ring-0 transition-transform duration-200 ease-in-out ${
          isDark ? "translate-x-7" : "translate-x-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-sky-600 fill-sky-600" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500 fill-amber-500" />
        )}
      </span>
    </button>
  );
}
