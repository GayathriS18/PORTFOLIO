import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="bg-word top-0 left-[-150px]"
      >
        EXPERIENCE
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "6rem" }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative border-l border-white/10 ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative ml-10"
              style={{ marginBottom: index < experiences.length - 1 ? "5rem" : "0" }}
            >
              <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-[#d7ff3f] border-4 border-[#111] shadow-[0_0_20px_rgba(215,255,63,0.5)]" />

              <p className="text-sm uppercase tracking-[0.3em] text-[#d7ff3f]" style={{ marginBottom: "0.75rem" }}>
                {index === 0 ? "2025" : "2024"}
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold" style={{ marginBottom: "0.5rem" }}>
                {exp.role}
              </h3>

              <p className="text-gray-400 uppercase tracking-[0.15em] text-sm" style={{ marginBottom: "1.5rem" }}>
                {exp.company} • {exp.duration}
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }} className="text-gray-300 leading-relaxed">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#d7ff3f] mt-[2px]">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
          style={{ marginTop: "4rem" }}
        >
          <p className="text-3xl md:text-4xl font-black uppercase" style={{ lineHeight: 1.3 }}>
            GAINING HANDS-ON EXPERIENCE THROUGH INTERNSHIPS,
            TRAINING PROGRAMS, AND REAL-WORLD DEVELOPMENT PROJECTS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;