import { motion } from "framer-motion";

const skills = [
  "Python",
  "C/C++",
  "TypeScript",
  "Machine Learning",
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
                <div className="absolute -inset-6 rounded-[44px] bg-accent/20 blur-2xl -z-10" />
                <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-[36px] border-2 border-accent overflow-hidden shadow-[0_25px_80px_rgba(255,75,159,0.35)]">
                  <img
                    src="/UN_headshot.jpg"
                    alt="Portrait of Uyen Nguyen"
                    className="w-full h-full object-cover object-center brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/35" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                I'm a senior double-majoring in Mathematics and Computer Science at Denison University, 
                with a brain that naturally thinks in theorems, proofs, and algorithms. 
                Most of my time is spent at the intersection of theory and practice, 
                where I get to turn abstract ideas into things 
                that actually run.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                I care about mathematical rigor, clean experiments, and code that reflects 
                the underlying structure of the problem. Whether I'm verifying the GRH, 
                modeling voter behavior, or building ML systems, my goal is the same: use 
                math to understand the world a little better and build tools that are both 
                technically solid and genuinely useful.
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
