"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { Badge } from "../ui/badge";
import { useHandleNavClick } from "@/lib/use-handle-nav-click";
import { useEffect, useState } from "react";

export function Hero() {
  const { theme } = useTheme();
  const [delayedImage, setDelayedImage] = useState(
    `/images/danideme${theme === "dark" ? "-dark" : ""}.png`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedImage(`/images/danideme${theme === "dark" ? "-dark" : ""}.png`);
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);

  const handleNavClick = useHandleNavClick();
  return (
    <section
      className="flex items-center min-h-screen px-4 py-8 md:py-0"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 w-full max-w-6xl mx-auto">
        <div className="text-left w-full">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-balance uppercase tracking-tight">
              Daniel <span className="text-accent">Demelash</span>
            </h1>

            <div className="uppercase mb-2 inline-block">
              MID LEVEL SOFTWARE developer
            </div>
          </div>

          <p className="uppercase text-foreground max-w-xl mb-8 leading-relaxed">
            I'm Daniel, fullstack typeScript developer. Building good quality
            softwares with TypeScript, React/Next.js, and NodeJs/NestJs I'm
            currently working as mid-level software developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
            <Button>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="group"
              >
                VIEW MY WORK
              </a>
            </Button>
            <Button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group"
              >
                GET IN TOUCH
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-start gap-1.5 mt-4">
            <a
              href="https://github.com/danielddemissie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge>
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Badge>
            </a>
            <a
              href="https://linkedin.com/in/danielddemissie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge>
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Badge>
            </a>
            <a href="mailto:daniel@danideme.com">
              <Badge>
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Badge>
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center lg:justify-end ">
          <Image
            src={delayedImage}
            alt="Daniel Demelash"
            width={350}
            height={350}
            className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
