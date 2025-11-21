import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email service not configured",
        description: "Add your EmailJS credentials to the environment variables to enable sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        reply_to: email,
        message,
      }, publicKey);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message right now. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
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
                  disabled={isSending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-105 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
