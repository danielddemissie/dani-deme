"use client";

import {
  ExternalLink,
  Github,
  Code,
  Music,
  Terminal,
  Smartphone,
  Sparkles,
} from "lucide-react";
import React from "react";

function getProjectSymbol(project: { title: string; technologies?: string[] }) {
  const name = project.title.toLowerCase();
  if (name.includes("music") || name.includes("awraris"))
    return <Music className="w-6 h-6 text-menu-foreground" />;
  if (name.includes("cli") || name.includes("command"))
    return <Terminal className="w-6 h-6 text-menu-foreground" />;
  if (
    name.includes("mobile") ||
    name.includes("react native") ||
    name.includes("birr")
  )
    return <Smartphone className="w-6 h-6 text-menu-foreground" />;
  if (name.includes("ai") || name.includes("desc"))
    return <Sparkles className="w-6 h-6 text-menu-foreground" />;
  // fallback: first letter
  return (
    <span className="text-2xl font-black text-menu-foreground">
      {project.title.charAt(0)}
    </span>
  );
}

function ProjectImageWithFallback({
  project,
}: {
  project: { title: string; image?: string; technologies?: string[] };
}) {
  const [imgError, setImgError] = React.useState(false);
  const hasImage = project.image && !imgError;
  return (
    <>
      {hasImage ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-center rounded-base"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-base">
          {getProjectSymbol(project)}
        </div>
      )}
    </>
  );
}
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const projects = [
  {
    title: "PR DESC",
    description:
      "An intelligent command-line interface (CLI) tool designed to streamline your development workflow by automatically generating comprehensive Pull Request (PR) descriptions and Conventional Commit messages from your Git changes.",
    image: "/images/pr-desc.png",
    technologies: [
      "TYPESCRIPT",
      "NODEJS",
      "AI-SDK",
      "COMMANDER",
      "SIMPLE-GIT",
      "AI",
    ],
    github: "https://github.com/danielddemissie/pr-desc-cli",
    demo: "https://www.npmjs.com/package/pr-desc-cli",
  },
  {
    title: "AWRARIS",
    description:
      "AWRARIS is a TypeScript-based, zero-setup CLI music streaming application. It provides an `out-of-the-box` experience—no Node.js installation or manual dependency management required.",
    technologies: [
      "Typescript",
      "NODEJS",
      "Inquirer",
      "boxen",
      "COmmander",
      "puppeteer",
      "google-apis",
      "ytdlp-nodejs",
    ],
    image: "/images/awraris.png",
    github: "https://github.com/danielddemissie/awraris",
    demo: "https://github.com/danielddemissie/awraris",
  },
  {
    title: "BIrr verify",
    description:
      "Transaction check for all mobile banking apps in Ethiopia (At least that's the plan 😅), built with React Native",
    technologies: ["Typescript", "REACT-NATIVE", "EXPO", "SUPABASE"],
    github: "https://github.com/danielddemissie/birr-verify",
    demo: "https://birrverify.vercel.app/",
    // image: "/images/birr-verify.png",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen px-4 py-8 md:py-0 w-full max-w-6xl mx-auto"
    >
      <div className="text-left mb-16 w-full">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          FEATURED <span className="text-accent">PROJECTS</span>
        </h2>
        <div className="neo-badge bg-primary text-primary-foreground mx-auto">
          RECENT WORK & EXPERIMENTS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="py-2 overflow-hidden relative">
            <div className="aspect-video overflow-hidden relative">
              <ProjectImageWithFallback project={project} />
            </div>

            <div className="p-0">
              <div className="flex">
                <h3 className="text-xl font-black mb-3 uppercase tracking-wide">
                  {project.title}
                </h3>
                {getProjectSymbol(project)}
              </div>
              <p className="text-foreground font-medium mb-4 text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>
                    <span className="text-menu-foreground text-xs">{tech}</span>
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-button bg-accent text-accent-foreground text-xs flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE DEMO
                  </a>
                </Button>

                <Button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-button text-xs flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    CODE
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
