"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg group w-full flex flex-col">
      <button
        onClick={copyToClipboard}
        aria-label="Copy code"
        className="w-fit self-end mr-2 flex items-center gap-2 rounded text-sm "
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span className="text-xs text-green-700">Copied!</span>
          </>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      <div className="overflow-x-auto">
        <pre
          tabIndex={0}
          className="p-4 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {children}
        </pre>
      </div>
    </div>
  );
}
