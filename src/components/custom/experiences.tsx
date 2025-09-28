import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const experiences = [
  {
    title: "FULLSTACK SOFTWARE ENGINEER",
    company: "PHISHFORT",
    period: "2023 — PRESENT",
    location: "REMOTE",
    description:
      "Building cybersecurity solutions to protect businesses from online threats. Developing both frontend applications and backend systems for fraud detection and prevention.",
    technologies: [
      "REACT",
      "NEXT.JS",
      "TYPESCRIPT",
      "NODE.JS",
      "POSTGRESQL",
      "PYTHON",
    ],
    link: "https://phishfort.com",
    color: "bg-accent text-accent-foreground",
  },
  {
    title: "SOFTWARE DEVELOPER",
    company: "PREVIOUS COMPANY",
    period: "2021 — 2023",
    location: "HYBRID",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["REACT", "VUE.JS", "JAVASCRIPT", "EXPRESS.JS", "MONGODB"],
    color: "",
  },
  {
    title: "JUNIOR DEVELOPER",
    company: "STARTUP INC.",
    period: "2020 — 2021",
    location: "ON-SITE",
    description:
      "Started my professional journey building responsive web applications and learning best practices in software development.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT", "GIT"],
    color: "",
  },
];

export function Experience() {
  return (
    <section id="experience" className="flex-col w-full items-start h-screen">
      <div className="text-left mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          WORK <span className="text-accent">EXPERIENCE</span>
        </h2>
        <div className="neo-badge bg-primary text-primary-foreground mx-auto">
          MY PROFESSIONAL JOURNEY
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="py-2">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-xl font-black mb-2 uppercase tracking-wide">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div
                    className={`neo-badge ${exp.color} inline-flex items-center gap-1`}
                  >
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
            </div>

            <p className="text-foreground font-medium mb-6 text-pretty">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="neo-badge bg-background text-foreground text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
