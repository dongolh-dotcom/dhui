"use client";

<<<<<<< HEAD
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
=======
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>;
  }

  // Now theme is literally "luxury" or "emerald"
  const isDark = theme === "luxury";

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      <input
        type="checkbox"
        className="theme-controller"
        checked={isDark}
        onChange={() => setTheme(isDark ? "emerald" : "luxury")}
      />

      {/* Sun Icon — shows in dark to switch back to light */}
      <svg
        className="swap-on fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,12.92a1,1,0,0,0-.71.29,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,15.64l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0Zm1.41-7.76a1,1,0,0,0-.71-.29,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
      </svg>

      {/* Moon Icon — shows in light to switch to dark */}
      <svg
        className="swap-off fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z" />
      </svg>
    </label>
>>>>>>> 3f53f4b07c0801627c88409563d9fb9495735852
  );
}