"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { Badge } from "../ui/badge";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="flex items-center h-screen" id="hero">
      <div className="grid lg:grid-cols-2 items-center justify-between">
        <div className="text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-balance uppercase tracking-tight">
              Daniel <span className="text-accent">Demelash</span>
            </h1>

            <div className="neo-badge bg-primary text-primary-foreground mb-2 inline-block">
              FULLSTACK SOFTWARE ENGINEER
            </div>
          </div>

          <p className="uppercase text-foreground max-w-xl mb-8 leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
            Currently crafting secure solutions at{" "}
            <span className="text-pretty">PHISHFORT</span>, specializing in
            cybersecurity and fraud prevention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button>
              <a href="#projects" className="group">
                VIEW MY WORK
              </a>
            </Button>
            <Button>
              <a href="#contact" className="">
                GET IN TOUCH
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-start gap-1.5">
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

        <div className="flex justify-center lg:justify-end">
          <Image
            src={`/images/danideme${theme === "dark" ? "-dark" : ""}.png`}
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
