"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Code, Database, Cloud, Shield } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    icon: Cloud,
    title: "EDGE & SERVERLESS",
    description: "Cloudflare Workers, D1, Pages, Wrangler",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "Anti-phishing, fraud prevention, secure coding",
  },
  {
    icon: Code,
    title: "FRONTEND",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "BACKEND",
    description: "Node.js, NestJS, tRPC, PostgreSQL, D1",
  },
];

export function About() {
  const { theme } = useTheme();
  const [delayedImage, setDelayedImage] = useState(
    `/images/danideme${theme === "dark" ? "-dark" : ""}.png`,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedImage(`/images/danideme${theme === "dark" ? "-dark" : ""}.png`);
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);
  return (
    <section
      id="about"
      className="flex flex-col px-4 py-8 md:py-0 w-full max-w-5xl mx-auto min-h-screen"
    >
      <div className="flex flex-col items-start w-full">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            ABOUT <span className="text-accent">ME</span>
          </h2>
          <div className="neo-badge bg-primary text-primary-foreground mx-auto">
            PASSIONATE ABOUT ENGINEERING
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-6 w-full">
          <div className="relative">
            <div className="neo-card p-0 overflow-hidden">
              <Image
                loading="lazy"
                src={delayedImage}
                alt="Daniel working"
                className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="">
              <p className="text-foreground font-medium text-pretty">
                I'm a{" "}
                <span className="text-menu-foreground">
                  FULL-STACK SOFTWARE ENGINEER
                </span>{" "}
                specializing in Cloudflare edge/serverless and applied security.
                I build production anti-fraud systems end to end in TypeScript. I
                hold a B.Sc. in Computer Science and Engineering from Adama Science
                and Technology University.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                Over{" "}
                <span className="text-menu-foreground">3+ years at PhishFort</span>
                , I migrated a 3M+ incident-history collection to Cloudflare D1,
                built the client-facing dashboard, and contributed to analyst
                tooling that cut takedown time by ~50%. I also shipped a browser
                extension that reached 2,000+ installs.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                I work in an{" "}
                <span className="text-menu-foreground">
                  AI-augmented (agentic) workflow
                </span>
                —running coding agents like Claude Code and Hermes inside a
                security-isolated Docker sandbox, with a plan-then-build review
                discipline so AI output stays auditable. I care about shipping
                fast and safely.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-8 items-center">
          {skills.map((skill) => (
            <div key={skill.title} className={`col-span-2 text-center`}>
              <skill.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-black mb-2 text-sm uppercase tracking-wide">
                {skill.title}
              </h3>
              <p className="text-xs text-menu-foreground font-medium opacity-90">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
