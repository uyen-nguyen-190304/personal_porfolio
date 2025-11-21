import { motion } from "framer-motion";

const skills = [
  "Python",
  "C++",
  "TypeScript",
  "Machine Learning",
  "Deep Learning",
  "Data Analysis",
  "React",
  "TensorFlow",
  "PyTorch",
  "SageMath",
  "NumPy",
  "Pandas",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">About</h2>
          <p className="text-accent text-lg mb-12">Who I Am</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Avatar/Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-accent-glow/20 flex items-center justify-center border border-accent/30">
                  <div className="w-56 h-56 rounded-full bg-secondary flex items-center justify-center text-6xl font-bold text-accent">
                    AC
                  </div>
                </div>
                <div className="absolute -z-10 inset-0 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                I'm a graduate student specializing in Applied Mathematics and Computer Science, 
                with a deep passion for machine learning and algorithmic problem-solving. Currently, 
                I'm exploring the intersection of mathematical theory and practical AI applications.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                My work focuses on developing intelligent systems that leverage advanced mathematical 
                concepts to solve real-world challenges. I value collaboration, continuous learning, 
                and creating solutions that make a meaningful impact.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-accent/40 text-sm font-medium hover:bg-accent/10 hover:border-accent transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
