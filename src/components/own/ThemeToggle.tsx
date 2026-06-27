"use client";

import { useState, useEffect, useCallback } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState("luxury");

  useEffect(() => {
    setMounted(true);
    const saved = document.documentElement.getAttribute("data-theme");
    if (saved) setCurrent(saved);
  }, []);

  const toggle = useCallback(() => {
    const next = current === "luxury" ? "light" : "luxury";
    document.documentElement.setAttribute("data-theme", next);
    setCurrent(next);
  }, [current]);

  if (!mounted) {
    return (
      <div
        className="btn btn-ghost btn-circle btn-sm sm:btn-md"
        aria-hidden="true"
      >
        <div className="h-5 w-5 animate-pulse rounded-full bg-base-300 sm:h-6 sm:w-6" />
      </div>
    );
  }

  return (
    <button
      onClick={toggle}
      className="btn btn-ghost btn-circle btn-sm gap-1.5 text-xs sm:btn-md sm:gap-2 sm:text-sm"
      aria-label={current === "luxury" ? "Switch to Light" : "Switch to Luxury"}
    >
      <span className="text-base sm:text-lg">
        {current === "luxury" ? "💎" : "☀️"}
      </span>
      <span className="hidden sm:inline">
        {current === "luxury" ? "Luxury" : "Light"}
      </span>
    </button>
  );
}