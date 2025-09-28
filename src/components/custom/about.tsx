import { Code, Database, Globe, Shield, Star, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "FRONTEND DEV",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Database,
    title: "BACKEND DEV",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Globe,
    title: "FULL STACK",
    description: "End-to-end application development",
    color: "",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "Cybersecurity, fraud prevention, secure coding",
    color: "",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen px-4 py-8 md:py-0 w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-start w-full">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            ABOUT <span className="text-accent">ME</span>
          </h2>
          <div className="neo-badge bg-primary text-primary-foreground mx-auto">
            PASSIONATE ABOUT DIGITAL EXPERIENCES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-6 w-full">
          <div className="relative">
            <div className="neo-card p-0 overflow-hidden">
              <img
                src="/images/danideme.png"
                alt="Daniel working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="">
              <p className="text-foreground font-medium text-pretty">
                As a fullstack software engineer at{" "}
                <span className="neo-badge bg-secondary text-secondary-foreground inline">
                  PHISHFORT
                </span>
                , I specialize in building robust cybersecurity solutions that
                protect businesses from online threats. My work involves
                developing both user-facing applications and backend systems
                that process and analyze security data.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                I have experience working across the entire technology stack,
                from designing intuitive user interfaces to architecting
                scalable backend systems. I'm particularly passionate about
                writing clean, maintainable code and staying up-to-date with the
                latest web technologies.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-pretty">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through blog posts and technical discussions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-8 items-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`col-span-2 text-center ${skill.color}`}
            >
              <skill.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-black mb-2 text-sm uppercase tracking-wide">
                {skill.title}
              </h3>
              <p className="text-xs font-medium opacity-90">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
