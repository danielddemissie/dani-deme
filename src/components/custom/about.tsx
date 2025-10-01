"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Code, Database, Globe, Shield } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    icon: Code,
    title: "FRONTEND DEV",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "BACKEND DEV",
    description: "Node.js, NextJs, PostgreSQL, MongoDB",
  },
  {
    icon: Globe,
    title: "FULL STACK",
    description: "End-to-end application development",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "Cybersecurity, fraud prevention, secure coding",
  },
];

export function About() {
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
  return (
    <section
      id="about"
      className="flex flex-col px-4 py-8 md:py-0 w-full max-w-5xl mx-auto"
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
                  Mid-Level Fullstack Software Developer
                </span>{" "}
                specializing in web development, primarily focusing on
                delivering robust back-end services and efficient front-end
                applications. I hold a B.Sc. in Computer Science and Engineering
                from Adama Science and Technology University
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                My professional journey includes significant roles at{" "}
                <span className="text-menu-foreground">
                  PhishFort, Addis Software, and Utentic
                </span>
                , where I contributed to designing, architecting, and
                implementing full-stack solutions.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                I am driven by a passion for engineering and continuous skill
                enhancement. I actively build products and tools—from powerful
                commercial applications to CLI utilities like{" "}
                <span className="text-menu-foreground">pr-desc</span> to
                simplify complex daily tasks, boost my personal productivity,
                and deepen my technical expertise through continuous fun and
                learning.
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
