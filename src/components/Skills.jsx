import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  const categories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Languages", items: skills.languages },
    { title: "AI & ML", items: skills.ai },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="bg-word top-0 right-[-120px]">SKILLS</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "6rem" }}
        >
          SKILLS
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 className="text-sm uppercase tracking-[0.3em] text-gray-400">{category.title}</h4>
              </div>
              <div className="skill-grid">
                {category.items.map((skill) => (
                  <button key={skill} className="skill-item" aria-label={skill}>
                    <span className="skill-name">{skill}</span>
                    <span className="skill-dot" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-4xl font-black uppercase leading-tight">
            CONSTANTLY LEARNING, BUILDING, TESTING,
            AND IMPROVING THROUGH REAL-WORLD PROJECTS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;