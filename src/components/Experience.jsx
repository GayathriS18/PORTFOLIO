import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function ResumeIcon() {
  return (
    <div className="relative w-32 h-40 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
      
      {/* Folded Corner */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-white/10 clip-path-triangle" />

      {/* Progress Bars */}
      <div className="absolute top-8 left-5 right-5 h-3 rounded-full bg-[#d7ff3f]/80" />

      <div className="absolute top-16 left-5 right-10 h-3 rounded-full bg-white/15" />
      <div className="absolute top-16 left-5 w-2/3 h-3 rounded-full bg-[#d7ff3f]/60" />

      <div className="absolute top-24 left-5 right-12 h-3 rounded-full bg-white/15" />
      <div className="absolute top-24 left-5 w-1/2 h-3 rounded-full bg-[#d7ff3f]/50" />

      <div className="absolute top-32 left-5 right-8 h-3 rounded-full bg-white/15" />
      <div className="absolute top-32 left-5 w-3/4 h-3 rounded-full bg-[#d7ff3f]/40" />
    </div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Typography */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-word top-0 left-[-150px]"
      >
        EXPERIENCE
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "4rem"}}
        >
          EXPERIENCE
        </motion.h2>

        {/* Timeline */}

        <div className="relative border-l border-white/10 ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-32 ml-10"
              style={{ marginBottom:"3rem"}}
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-[#d7ff3f] border-4 border-[#111] shadow-[0_0_20px_rgba(215,255,63,0.5)]" />

              {/* Year */}

              <p className="text-sm uppercase tracking-[0.3em] text-[#d7ff3f] mb-3">
                {index === 0 ? "2025" : "2024"}
              </p>

              {/* Role */}

              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {exp.role}
              </h3>

              {/* Company */}

              <p className="text-gray-400 mb-6 uppercase tracking-[0.15em] text-sm">
                {exp.company} • {exp.duration}
              </p>

              {/* Points */}

              <ul className="space-y-3 text-gray-300 leading-relaxed">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#d7ff3f] mt-[2px]">
                      ●
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 max-w-4xl"
        >
          <p className="text-3xl md:text-4xl font-black uppercase leading-tight">
            GAINING HANDS-ON EXPERIENCE THROUGH
            INTERNSHIPS, TRAINING PROGRAMS,
            AND REAL-WORLD DEVELOPMENT PROJECTS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;