import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const projects = [
  {
    title: "SECURITY DASHBOARD",
    description:
      "A comprehensive cybersecurity dashboard for monitoring and analyzing threats in real-time. Features advanced data visualization and automated alert systems.",
    image: "/cybersecurity-dashboard.png",
    technologies: ["REACT", "NEXT.JS", "TYPESCRIPT", "D3.JS", "POSTGRESQL"],
    github: "https://github.com/danielddemissie/security-dashboard",
    demo: "https://security-dashboard-demo.vercel.app",
    color: "bg-accent text-accent-foreground",
  },
  {
    title: "E-COMMERCE PLATFORM",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["NEXT.JS", "STRIPE", "PRISMA", "POSTGRESQL", "TAILWIND"],
    github: "https://github.com/danielddemissie/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    title: "TASK MANAGEMENT APP",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    image: "/kanban-task-management-app.png",
    technologies: ["REACT", "NODE.JS", "SOCKET.IO", "MONGODB", "EXPRESS"],
    github: "https://github.com/danielddemissie/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    color: "bg-chart-1 text-white",
  },
  {
    title: "WEATHER ANALYTICS",
    description:
      "Weather data visualization platform that aggregates data from multiple sources and provides detailed analytics and forecasting.",
    image: "/weather-analytics-dashboard-with-maps-and-charts.jpg",
    technologies: ["VUE.JS", "PYTHON", "FASTAPI", "CHART.JS", "REDIS"],
    github: "https://github.com/danielddemissie/weather-analytics",
    demo: "https://weather-analytics-demo.vercel.app",
    color: "bg-chart-2 text-black",
  },
];

export function Projects() {
  return (
    <section id="projects" className="flex-col items-center min-h-screen">
      <div className="text-left mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          FEATURED <span className="text-accent">PROJECTS</span>
        </h2>
        <div className="neo-badge bg-primary text-primary-foreground mx-auto">
          RECENT WORK & EXPERIMENTS
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="py-2 overflow-hidden relative">
            <div className="aspect-video overflow-hidden relative">
              <img
                src={"/images/danideme.png"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div
                className={`absolute top-4 right-4 neo-badge ${project.color}`}
              >
                <Code className="w-4 h-4" />
              </div>
            </div>

            <div className="p-0">
              <h3 className="text-xl font-black mb-3 uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-foreground font-medium mb-4 text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>
                    <span className="neo-badge bg-muted text-foreground text-xs">
                      {tech}
                    </span>
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
