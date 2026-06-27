import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import "./globals.css";
import Navbar from "@/components/own/Navbar";
import CopyButton from "@/components/own/ui/CopyButton";

import Glslhills from "@/registry/default/examples/glsl-hills-demo";
import Floating from "@/registry/default/examples/floating-label-input-demo";
import { ParticleCanvas } from "@/registry/default/ui/particle-canvas-1";
import { WavePath } from "@/registry/default/ui/wave-path";

import Link from "next/link";

export default function Home() {
  const installFloating =
    "npx shadcn@latest add https://dhui-bay.vercel.app/r/floating-label-input.json";
  const installGlsl =
    "npx shadcn@latest add https://dhui-bay.vercel.app/r/glsl-hills.json";
  const installParticle =
    "npx shadcn@latest add https://dhui-bay.vercel.app/r/particle-canvas-1.json";
  const installWave =
    "npx shadcn@latest add https://dhui-bay.vercel.app/r/wave-path.json";

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-3 py-6 sm:gap-8 sm:px-4 sm:py-8 md:py-12">
      <Navbar />

      {/* ── Hero ── */}
      <header className="flex flex-col items-center gap-2.5 text-center sm:gap-3">
        <div className="badge badge-outline badge-lg gap-1.5 px-4 py-3 text-[10px] tracking-[0.2em] uppercase opacity-60 sm:text-xs">
          ✦ Custom Registry ✦
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Dongolheart{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ui
          </span>
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-base-content/60 sm:max-w-lg sm:text-base">
          A curated collection of beautifully crafted components
          distributed through the shadcn registry.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6 sm:gap-8">
        {/* ═══ Card 1 — Floating Label ═══ */}
        <Card>
          <CardHeader
            title="Floating Label Input"
            description="A simple hello world component with elegant label animation"
            name="hello-world"
          />
          <div className="flex min-h-[260px] items-center justify-center sm:min-h-[300px]">
            <div className="w-full max-w-md px-2">
              <Floating />
            </div>
          </div>
          <CardFooter code={installFloating} />
        </Card>

        {/* ═══ Card 2 — GLSL Hills ═══ */}
        <Card>
          <CardHeader
            title="GLSL Hills"
            description="Generative terrain rendered with WebGL shaders"
            name="example-form"
          />
          <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-lg sm:min-h-[320px]">
            <Glslhills />
          </div>
          <CardFooter code={installGlsl} />
        </Card>

        {/* ═══ Card 3 — Particle Canvas ═══ */}
        <Card>
          <CardHeader
            title="Particle Canvas"
            description="Hover or touch — particles follow your cursor"
            name="complex-component"
          />
          <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-lg sm:min-h-[350px] md:min-h-[400px]">
            <ParticleCanvas />
          </div>
          <CardFooter code={installParticle} />
        </Card>

        {/* ═══ Card 4 — Wave Path ═══ */}
        <Card>
          <CardHeader
            title="Wave Path"
            description="Interactive SVG wave that responds to hover"
            name="example-with-css"
          />
          <div className="flex min-h-[200px] items-center justify-center overflow-hidden rounded-lg sm:min-h-[300px] md:min-h-[400px]">
            <WavePath />
          </div>
          <CardFooter code={installWave} />
        </Card>
      </main>

      {/* ── Footer ── */}
      <footer className="pt-4 text-center">
        <p className="text-[11px] tracking-wider text-base-content/30 italic sm:text-xs">
          Crafted with precision · Dongolheart-Ui
        </p>
      </footer>
    </div>
  );
}

/* ───────────── Reusable sub-components ───────────── */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-base-300/60 bg-base-200/40 p-3 shadow-sm backdrop-blur-sm transition-colors sm:gap-5 sm:p-5">
      {children}
    </div>
  );
}

function CardHeader({
  title,
  description,
  name,
}: {
  title?: string;
  description?: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="flex flex-col gap-0.5">
        {title && (
          <h2 className="text-lg font-semibold leading-snug sm:text-xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xs leading-relaxed text-base-content/50 sm:text-sm">
            {description}
          </p>
        )}
      </div>
      <OpenInV0Button name={name} className="w-fit shrink-0" />
    </div>
  );
}

function CardFooter({ code }: { code: string }) {
  return (
    <div className="flex flex-col gap-3 border-t border-base-300/40 pt-4">
      <div className="w-full px-1 sm:px-4">
        <h3 className="text-sm font-semibold sm:text-lg">Installation</h3>
        <p className="mb-3 mt-1 text-xs text-base-content/45 sm:text-sm">
          Run this command inside your root directory:
        </p>
        <div className="overflow-x-auto rounded-lg">
          <CopyButton code={code} language="bash" />
        </div>
      </div>

      <footer className="text-center">
        <Link href="docs/introduction">
          <details className="inline-block cursor-pointer text-xs text-base-content/35 underline-offset-2 transition-colors hover:text-base-content/65 hover:underline sm:text-sm">
            <summary>Click to view more information</summary>
          </details>
        </Link>
      </footer>
    </div>
  );
}