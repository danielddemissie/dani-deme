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

  // scroll a little down to show the section title
  // useEffect(() => {
  //   const handleHashChange = () => {
  //     const hash = window.location.hash.substring(1);
  //     if (hash) {
  //       const element = document.getElementById(hash);
  //       if (element) {
  //         const yOffset = -10; // Adjust this value to control the offset
  //         const y =
  //           element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //         window.scrollTo({ top: y, behavior: "auto" });
  //       }
  //     }
  //   };

  //   window.addEventListener("hashchange", handleHashChange, false);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange, false);
  //   };
  // }, []);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="flex w-full items-center justify-between">
        <div>
          <a
            href="#"
            className="text-2xl font-black text-primary uppercase tracking-wider"
          >
            DANIDEME.
          </a>
        </div>
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
    </header>
  );
}
