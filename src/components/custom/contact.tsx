import { Mail, MessageSquare, Calendar, Send, Zap } from "lucide-react";
import { Button } from "../ui/button";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen px-4 py-8 md:py-0 w-full max-w-4xl mx-auto"
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

        <footer className="border-t-4 w-full text-center">
          <div className="mx-auto">© {year} DANIEL DEMELASH</div>
        </footer>
      </div>
    </section>
  );
}
