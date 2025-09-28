"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import clsx from "clsx";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

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
    <header className="fixed top-0 z-50 w-full bg-background neo-border border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-black text-primary uppercase tracking-wider"
          >
            DANIDEME.
          </a>

          <div className="hidden md:flex items-center space-x-2 border-border shadow-shadow rounded-base neo-border px-3 py-2">
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.name}
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
        </nav>
      </div>
    </header>
  );
}
