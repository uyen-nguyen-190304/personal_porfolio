import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Power Outage Predictor",
    subtitle: "Weather-Driven Outage Forecasting",
    description:
      "Co-developed a county-level outage risk model using 3.7M+ EAGLE-I outage records and 7 years of NOAA weather data, engineering 19 temporal, weather, and geographic features and training a tuned Gradient Boosting classifier (73.4% accuracy, 0.811 ROC-AUC).",
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    github: "https://github.com/BTT-Abt-Global-1A/AI-Studio-Project",
  },
  {
    title: "Generalized Riemann Hypothesis Verification",
    subtitle: "Computational Number Theory Research",
    description:
      "Built a modular Python/SageMath pipeline to numerically verify the Generalized Riemann Hypothesis for ~2M quadratic Dirichlet L-functions up to height η = 12, using lcalc, interval arithmetic, and parallelization to control truncation and rounding error.",
    tech: ["Python", "lcalc", "Parallel Computing"],
    github: "https://github.com/uyen-nguyen-190304/GRH-verification",
  },
  {
    title: "Analysis of Voter Complacency",
    subtitle: "Statistical Modeling of Election Data",
    description:
      "Constructed standardized county-level datasets for the 2008, 2016, and 2020 U.S. elections, quantified primary competitiveness with Shannon entropy, and fit regression models linking primary dynamics to general-election turnout gaps across states.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/uyen-nguyen-190304/analyze-voter-turnout"
  },
  {
    title: "PandOS Operating System",
    subtitle: "Simplified UNIX-Style Operating System",
    description:
      "Implemented a simplified operating system with cooperative and preemptive scheduling, base-and-bounds memory protection, exception and interrupt handling, basic device I/O, and a minimal system call interface.",
    tech: ["C", "GDB", "Git"],
    github: "https://github.com/uyen-nguyen-190304/cs372-operating-systems",
  },
  {
    title: "Real-time AQI Prediction",
    subtitle: "Hybrid Air Quality Forecasting",
    description:
      "Trained an LSTM-based model with learned location embeddings to forecast AQI from historical pollution and weather time series, comparing hybrid deep-learning pipelines against classical baselines for multi-step air quality prediction.",
    tech: ["Python", "Pandas", "PyTorch", "Scikit-learn"],
    github: "https://github.com/uyen-nguyen-190304/AI4ALL_final_project",
  },
  {
    title: "Object Detection with YOLOv8",
    subtitle: "Traffic Sign Object Detection Pipeline",
    description:
      "Built a complete YOLOv8 pipeline on a custom traffic-sign dataset to predict and classify 3 different classes, covering data preprocessing and augmentation, model training and evaluation, and visualization of detections on road-scene images.",
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
