import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Mathematician in Training",
  "Aspiring Research Scientist",
  "Software Engineer Hustler",
  "Machine Learning Fellow"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="pointer-events-none absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-sm sm:text-base mb-2">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
              Uyen Nguyen
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <p className="text-lg sm:text-xl text-muted-foreground">I'm a</p>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl text-accent font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Rooted in mathematical rigor and a love of proofs, 
              I develop algorithms and models that transform abstract theory into practical, high-performance applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-105"
              >
                View My Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="border-accent/50 text-accent hover:bg-accent/10 transition-all hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/uyen-nguyen-190304"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thaouyen-190304/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:thaouyen190304@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-glow/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute inset-8 bg-gradient-to-tr from-accent/30 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute inset-16 border-2 border-accent/30 rounded-full"></div>
              <div className="absolute inset-24 border border-accent/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
