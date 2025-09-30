import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

const experiences = [
  {
    title: "FULLSTACK SOFTWARE ENGINEER",
    company: "PHISHFORT",
    period: "2023 — PRESENT",
    location: "REMOTE",
    description:
      "Building cybersecurity solutions to protect businesses from online threats. Developing both frontend applications and backend systems for fraud detection and prevention.",
    technologies: ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL"],
    link: "https://phishfort.com",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col w-full items-start px-4 py-8 md:py-0 max-w-5xl mx-auto"
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
          <div
            key={index}
            className="py-2 border-dotted border-2 rounded-base px-4"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
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
            </div>

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
          </div>
        ))}
      </div>
    </section>
  );
}
