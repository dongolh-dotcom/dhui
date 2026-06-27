"use client";

import { useState } from "react";
// Optional: Install lucide-react for sharp icons (npm i lucide-react)
import { Check, Copy } from "lucide-react"; 

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 font-mono text-sm my-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400">
        <span>{language}</span>
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all active:scale-95"
          aria-label="Copy code to clipboard"
        >
          {isCopied ? (
            <>
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-green-500 text-[11px] font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-[11px] font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <pre className="p-4 overflow-x-auto text-zinc-100 scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}
