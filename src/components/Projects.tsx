import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Math Atlas",
    subtitle: "Interactive Math Knowledge Platform",
    description:
      "Designing a personal math portal that organizes undergraduate coursework, proofs, and problem sets into searchable, cross-linked topic maps with GRE Math Subject style review sections.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Algorithm Compilation",
    subtitle: "Curated Library of Algorithms",
    description:
      "Implementing classic algorithms, including graph search, dynamic programming, divide and conquer, greedy methods, and network flows in clean, well-documented code with problem-driven examples.",
    tech: ["C++", "Python"],
    github: "https://github.com/uyen-nguyen-190304/algorithm-compilation",
  },
  {
    title: "Power Outage Predictor",
    subtitle: "Weather-Driven Outage Forecasting",
    description:
      "Built machine learning models to predict power outages from historical weather and infrastructure data, evaluating feature pipelines and improving recall on rare outage events.",
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    github: "https://github.com/BTT-Abt-Global-1A/AI-Studio-Project",
  },
  {
    title: "PandOS Operating System",
    subtitle: "Simplified UNIX-Style Operating System",
    description:
      "Created a simplified operating system implementing process scheduling, memory management, exception/interrupt handling, device I/O operations, and system calls.",
    tech: ["C", "GDB", "Git"],
    github: "https://github.com/uyen-nguyen-190304/cs372-operating-systems",
  },
  {
    title: "Real-time AQI Prediction",
    subtitle: "Hybrid Air Quality Forecasting",
    description:
      "Built hybrid LSTM model with embeddings layers to produce accurate, location-aware air quality predictions from historical pollution and weather data.",
    tech: ["Python", "Pandas", "PyTorch", "Scikit-learn"],
    github: "https://github.com/uyen-nguyen-190304/AI4ALL_final_project",
  },
  {
    title: "Object Detection with YOLOv8",
    subtitle: "Traffic Sign Object Detection Pipeline",
    description:
      "Trained YOLOv8 on a custom dataset and built an end-to-end pipeline for data preprocessing, model training, inference, and visualization of detections.",
    tech: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
    github: "https://github.com/uyen-nguyen-190304/object-detection-yolov8",
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
