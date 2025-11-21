import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neural Network Optimizer",
    subtitle: "Advanced ML Training Framework",
    description:
      "Built a custom neural network optimization library that reduces training time by 30% compared to standard optimizers. Implements novel adaptive learning rate algorithms.",
    tech: ["Python", "PyTorch", "CUDA", "NumPy"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Data Visualization Dashboard",
    subtitle: "Interactive Analytics Platform",
    description:
      "Created a real-time data visualization dashboard for analyzing large datasets. Features interactive charts, custom filters, and exportable reports.",
    tech: ["React", "TypeScript", "D3.js", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Algorithmic Trading Bot",
    subtitle: "AI-Powered Trading System",
    description:
      "Developed an algorithmic trading system using machine learning for market prediction. Achieved 18% ROI in backtesting with risk management strategies.",
    tech: ["Python", "Pandas", "Scikit-learn", "TA-Lib"],
    github: "https://github.com",
  },
  {
    title: "Natural Language Processor",
    subtitle: "Text Analysis & Generation",
    description:
      "Built a custom NLP pipeline for sentiment analysis and text generation. Processes 100K+ documents with 92% accuracy using transformer models.",
    tech: ["Python", "Transformers", "spaCy", "TensorFlow"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Mathematical Modeling Tool",
    subtitle: "Computational Mathematics",
    description:
      "Created a computational tool for solving complex differential equations and visualizing mathematical models. Used in research publications.",
    tech: ["Python", "SageMath", "Matplotlib", "SymPy"],
    github: "https://github.com",
  },
  {
    title: "Computer Vision System",
    subtitle: "Object Detection & Tracking",
    description:
      "Implemented real-time object detection and tracking system using deep learning. Achieves 30 FPS with high accuracy on edge devices.",
    tech: ["Python", "OpenCV", "YOLO", "TensorRT"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h2>
          <p className="text-accent text-lg mb-12">What I've Built</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/30 hover:bg-accent/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/30 hover:bg-accent/10"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
