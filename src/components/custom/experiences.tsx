import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "FULL-STACK SOFTWARE ENGINEER",
    company: "PHISHFORT",
    period: "APR 2023 — JUN 2026",
    location: "REMOTE",
    description:
      "Owned core infrastructure across a multi-service anti-phishing platform. Migrated a 3M+ incident-history collection (plus 100K+ attachments, 60K+ documents) to Cloudflare D1, built the client-facing dashboard (stats + reporting), contributed to the analyst tooling and AI case-triage that cut takedown time ~50%, and shipped the NightHawk browser extension (2,000+ installs).",
    technologies: [
      "CLOUDFLARE WORKERS",
      "D1",
      "tRPC",
      "NEXT.JS",
      "NESTJS",
      "TYPESCRIPT",
    ],
    link: "https://phishfort.com",
  },
  {
    title: "FULL-STACK DEVELOPER",
    company: "ADDIS SOFTWARE PLC",
    period: "AUG 2019 — DEC 2022",
    location: "ADDIS ABABA, ET",
    description:
      "Built full-stack products for a software & IT firm serving clients nationwide and worldwide. Contributed to the architecture of Behiwot, an event-planning platform — converting complex Figma designs into clean, maintainable React, building secure Node.js/Express APIs, integrating local + international payments, and improving state management (Redux/Redux-Saga) and MongoDB aggregations.",
    technologies: ["REACT", "NODE.JS", "EXPRESS", "REDUX-SAGA", "MONGODB"],
  },
  {
    title: "FULL-STACK DEVELOPER (FREELANCE)",
    company: "UTENTIC",
    period: "2021",
    location: "REMOTE",
    description:
      "Travel-community startup connecting travelers with curated trip groups. Built scalable REST APIs in Node.js/Express and designed back-end services and front-end UI components.",
    technologies: ["NODE.JS", "EXPRESS", "REACT"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col w-full items-center px-4 py-8 md:py-0 max-w-5xl mx-auto min-h-screen"
    >
      <div className="text-left mb-16 w-full">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          WORK <span className="text-accent">EXPERIENCE</span>
        </h2>
        <div className="neo-badge bg-primary text-primary-foreground mx-auto">
          MY PROFESSIONAL JOURNEY
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="py-2px-4">
            <CardHeader className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-xl font-black mb-2 uppercase tracking-wide">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className={`inline-flex items-center gap-1`}>
                    {exp.company}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="neo-badge bg-muted text-foreground inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <Badge className="flex items-center gap-2 ">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </Badge>
            </CardHeader>

            <CardContent>
              <p className="text-foreground font-medium mb-6 text-pretty">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-menu-foreground text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
