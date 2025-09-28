"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTheme } from "./theme-provider";

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
            <span className="neo-badge bg-secondary text-secondary-foreground inline">
              PHISHFORT
            </span>
            , specializing in cybersecurity and fraud prevention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#projects"
              className="neo-button bg-accent text-accent-foreground group"
            >
              VIEW MY WORK
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
            </a>
            <a href="#contact" className="neo-button">
              GET IN TOUCH
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/danielddemissie"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-button text-background p-3"
            >
              <Button>
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/danielddemissie"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-button text-white p-3"
            >
              <Button>
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a
              href="mailto:daniel@danideme.com"
              className="neo-button text-white p-3"
            >
              <Button>
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Button>
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
