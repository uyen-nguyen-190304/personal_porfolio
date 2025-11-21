import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Email service coming soon",
      description: "For now, feel free to email me directly at thaouyen190304@gmail.com.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Contact</h2>
          <p className="text-accent text-lg mb-8">Let's Connect</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, internships, 
                or research projects. Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:thaouyen190304@gmail.com"
                  className="flex items-center gap-3 text-accent hover:text-accent-glow transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/30 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">thaouyen190304@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">Find me on:</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/uyen-nguyen-190304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thaouyen-190304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <FileText className="h-5 w-5" />
                    <span className="text-sm font-medium">CV / Resume</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-card border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-card border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-accent focus:ring-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
