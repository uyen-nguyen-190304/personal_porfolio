import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Denison University",
    institution: "Bachelors of Science, Mathematics & Computer Science",
    date: "August 2022 - May 2026",
    location: "Granville, OH",
    gpa: "3.91/4.00",
    highlights: [
      "Math Coursework: Advanced Analysis, Real Analysis, Advanced Linear Algebra, Operator Theory, Statistical/Mathematical Modeling, Statistical Theory, Cryptography, Differential Equations, Discrete Math",
      "CS Coursework: Algorithms Design & Analysis, Operating Systems, Computer/Data Systems, Data Structures",
      "Fellowships: Mathematics Senior Fellow, Computer Science Junior Fellow, Studium Scholar-Leader Program",
      "Awards: First Place - Big Red Data Competition 2025, Chosaburo Kato Mathematics Award, First Place - 4 College Math Contest 2024, Forbes B. Wiley Award (2024, 2023), First Place - Kenyon AWN Mini-Conference, Best Presentation Pitch - Big Red Data Challenge 2023"
    ],
  },
  {
    degree: "The American College of Greece",
    institution: "Study Abroad, Information Technology",
    date: "September 2024 - December 2024",
    location: "Athens, Greece",
    gpa: "4.00/4.00",
    highlights: [
      "I traveled a lot this semester, 10 countries and 17 cities in total ;)",
      "Related Coursework: Cognitive Computing, Artificial Intelligence Principles",
      "Unrelated Coursework: Business Ethics, Greek Mythology, Modern Greek I"
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Education</h2>
          <p className="text-accent text-lg mb-12">Academic Background</p>

          <div className="space-y-8">
            {education.map((edu, index) => (
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
                        <GraduationCap className="h-5 w-5 text-accent" />
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-accent">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{highlight}</span>
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