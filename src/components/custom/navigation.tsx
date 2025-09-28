"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import clsx from "clsx";
import { handleNavClick } from "@/lib/utils";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [closeMobileMenu, setCloseMobileMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background w-full">
      <nav className="flex w-full items-center justify-between px-4 py-2 md:px-8">
        <div>
          <a
            href="#"
            className="text-xl md:text-2xl font-black text-primary uppercase tracking-wider"
          >
            DANIDEME.
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-2 border-border shadow-shadow rounded-base neo-border px-3 py-2">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.name}
              onClick={(e) => handleNavClick(e, item.href)}
              className={clsx(
                `uppercase text-accent-foreground text-sm px-2 py-1 transition-colors hover:shadow-shadow hover:rounded-base`
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/pdf/danideme.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-accent-foreground px-2 py-1 transition-colors text-sm hover:shadow-shadow hover:rounded-base"
          >
            RESUME
          </a>
          <ThemeToggle />
        </div>
        <div className="flex md:hidden items-center">
          <details className="relative">
            <summary className="list-none cursor-pointer px-2 py-1 rounded-base border border-border bg-background shadow-shadow">
              <span className="sr-only">Open navigation</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-base shadow-lg flex flex-col z-50">
              {navigation.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setCloseMobileMenu(true);
                  }}
                  className="uppercase text-accent-foreground text-sm px-4 py-2 hover:bg-accent/10 border-b last:border-b-0 border-border"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/pdf/danideme.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-accent-foreground px-4 py-2 text-sm hover:bg-accent/10 border-b border-border"
              >
                RESUME
              </a>
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
