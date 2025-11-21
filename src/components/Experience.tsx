import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Research Assistant",
    organization: "University Research Lab",
    date: "May 2024 – Present",
    location: "Remote",
    points: [
      "Developing novel deep learning architectures for time-series forecasting, achieving 15% improvement in prediction accuracy",
      "Collaborating with a team of 5 researchers on large-scale data analysis using PyTorch and TensorFlow",
      "Published 2 papers on optimization algorithms at top-tier ML conferences",
      "Mentoring 3 undergraduate students in machine learning research methodologies",
    ],
  },
  {
    title: "Software Engineering Intern",
    organization: "Tech Innovations Inc",
    date: "June 2023 – August 2023",
    location: "San Francisco, CA",
    points: [
      "Built scalable REST APIs using Python and FastAPI, handling 10K+ requests per minute",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Contributed to open-source projects improving code quality and documentation",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "Analytics Solutions Corp",
    date: "January 2023 – May 2023",
    location: "Boston, MA",
    points: [
      "Analyzed large datasets using Pandas and NumPy to extract actionable business insights",
      "Developed predictive models with 85% accuracy for customer behavior forecasting",
      "Created interactive data visualizations using Plotly and Streamlit",
      "Presented findings to stakeholders, influencing strategic business decisions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
          <p className="text-accent text-lg mb-12">My Professional Journey</p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent/30 group-hover:bg-accent transition-colors rounded-r-full"></div>

                <div className="ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-accent">{exp.organization}</p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
