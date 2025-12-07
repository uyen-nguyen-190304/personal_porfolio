import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Fellow",
    organization: "Abt Global",
    date: "Aug 2025 - Present",
    location: "Remote",
    points: [
      "Co-develop an end-to-end ML pipeline merging 3.7M+ outage records with 7 years (2014-2020) of NOAA weather data and engineering 19 temporal, weather, and geographic features",
      "Train and tune a Gradient Boosting model that achieved 73.4% accuracy and 0.811 ROC-AUC, outperforming both logistic regression baseline and naive majority-class predictor",
      "Led data loading. preprocessing, and bootstrapped validation, and synthesized findings for stakeholders, showing that geographic/infrastructure factors are stronger outage drivers than weather alone"
    ]
  },
  { 
    title: "Research Assistant",
    organization: "Department of Mathematics, Denison University (Advisor: Dr. Sara Clifton)",
    date: "Mar 2025 - Present",
    location: "Granville, OH",
    points: [
      "Build a standardized county-level dataset by cleaning and merging per-state 2008, 2016, and 2020 U.S. primary and general presidential election results into analysis-ready CSVs",
      'Fit early turnout and voting-multiplier models linking primary dynamics to general-election outcomes, exploring patterns consistent with "voter complacency" theory across elections',
      "Quantify primary competitiveness using Shannon entropy by state, party, and calendar date, and visualize how fragmentation evolves over the primary season"
    ],
  },
  { 
    title: "Research Assistant",
    organization: "Department of Mathematics, Denison University (Advisor: Dr. Matthew Neal)",
    date: "Jan 2024 - Present",
    location: "Granville, OH",
    points: [
      "Study metric-linear norm criteria for algebraic structure in operator spaces, focusing on Jordan subalgebras of C*-algebras",
      "Derive norm conditions for 2 x 2 and 4 x 4 matrices real unitary upper-triangular matrices that guarantee nilpotency",
      "Formulate and investigate conjectural norm conditions for arbitary n x n matrices and inifite-dimensional spaces",
    ],
  },
  {
    title: "Research Assistant",
    organization: "Department of Mathematics, The Ohio State University (Advisor: Dr. Ghaith Hiary)",
    date: "May 2025 - July 2025",
    location: "Columbus, OH",
    points: [
      "Conducted research on the Generalized Riemann Hypothesis (GRH) for quadratic Dirichlet L-functions, extending an inequality-based verification theorem to negative fundamental discriminants",
      "Designed and implemented a modular computational pipeline in Python, SageMath, and lcalc with parallel processing to efficiently verify GRH for over 2 million discriminants up to 12.0",
      "Analyzed the asymptotic behavior of zero counts and fited empirical models to characterize how the number of zeros required for verification grows with discriminant size and height",
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
