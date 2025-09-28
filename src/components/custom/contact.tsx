"use client";

import {
  Mail,
  MessageSquare,
  Calendar,
  Send,
  Stars,
  GitFork,
} from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function Contact() {
  const year = new Date().getFullYear();
  const [repoDetails, setRepoDetails] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/danielddemissie/dani-deme"
        );
        const data = await response.json();
        setRepoDetails({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch {
        setRepoDetails({ stars: 0, forks: 0 });
      }
    };
    fetchRepoDetails();
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen px-4 py-8 md:py-0 w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="text-left mb-16 w-full">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
          <div className="neo-badge bg-primary text-primary-foreground mx-auto mb-6">
            LET'S BUILD SOMETHING AMAZING
          </div>
          <p className="text-base text-pretty text-ellipsis w-5/6">
            I'm always interested in hearing about new opportunities and
            interesting projects. Let's connect and discuss how we can work
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="flex-col items-center justify-center w-full text-center">
            <Mail className="w-12 h-12 mx-auto" />
            <p className="text-sm font-medium mb-4">Drop me a line anytime</p>
            <Button>
              <a href="mailto:daniel@danideme.com" className="text-xs">
                SEND EMAIL
              </a>
            </Button>
          </div>

          <div className="flex-col items-center justify-center w-full text-center">
            <MessageSquare className="w-12 h-12 mx-auto" />
            <p className="text-sm font-medium mb-4">
              Let's connect professionally
            </p>
            <Button>
              <a
                href="https://linkedin.com/in/danielddemissie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                CONNECT
              </a>
            </Button>
          </div>

          <div className="flex-col items-center w-full justify-center text-center">
            <Calendar className="w-12 h-12 mx-auto" />
            <p className="text-sm font-medium mb-4">Book a time to chat</p>
            <Button>
              <a
                href="https://calendly.com/danielddemissie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                BOOK CALL
              </a>
            </Button>
          </div>
        </div>

        <div className="text-base text-pretty text-ellipsis w-5/6">
          <div className="my-8">
            <p className="text-foreground font-medium mb-6 text-pretty">
              Currently open to new opportunities and interesting
              collaborations. Whether you have a project in mind or just want to
              say hello, I'd love to hear from you.
            </p>
            <Button>
              <a
                href="mailto:daniel@danideme.com"
                className="neo-button bg-primary text-primary-foreground inline-flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                START A CONVERSATION
              </a>
            </Button>
          </div>
        </div>

        <footer className="border-t-4 border-dotted w-full text-center">
          <div className="mx-auto text-menu-foreground flex items-center justify-between">
            <p> © {year} DANIEL DEMELASH</p>
            {/* show stars and forks */}
            <div className="flex items-start justify-center gap-4 mt-2">
              <a
                href="https://github.com/danielddemissie/dani-deme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-start"
                aria-label="GitHub stars"
              >
                <Stars className="w-4 h-4" />
                <span className="text-menu-foreground">
                  {repoDetails.stars ?? 0}
                </span>
                <span className="sr-only">Stars</span>
              </a>
              <a
                href="https://github.com/danielddemissie/dani-deme/network/members"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-start"
                aria-label="GitHub forks"
              >
                <GitFork className="w-4 h-4" />
                <span className="text-sm">{repoDetails.forks ?? 0}</span>
                <span className="sr-only">Forks</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
