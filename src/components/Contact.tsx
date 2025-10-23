import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/90 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out through any of these channels!
          </p>
          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="mailto:your.email@example.com"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">Email</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Twitter className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">Twitter</span>
              </a>
            </div>
          </div>
          <Button size="lg" asChild>
            <a href="mailto:your.email@example.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
