import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* Background Word */}
      <div className="bg-word top-0 left-[-60px]">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          ABOUT
          <br />
          <span className="accent">
            ME
          </span>
        </motion.h2>

        <div className="grid gap-20 lg:grid-cols-[minmax(0,1fr)_420px] items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold uppercase leading-tight">
              I BUILD WEB APPLICATIONS,
              AI-POWERED SOLUTIONS,
              AND USER-FOCUSED DIGITAL
              EXPERIENCES.
            </p>

            <p className="text-gray-400 mt-8 leading-relaxed max-w-xl">
              Computer Science Engineering student
              passionate about full-stack development,
              machine learning, and creating impactful
              solutions through modern technologies.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "4rem" }}
            className="max-w-xl mx-auto lg:mx-0 lg:text-left"
          >
            <div>
              <p className="text-gray-300 text-sm mb-2 uppercase tracking-widest">
                Location
              </p>
              <h3 className="text-3xl font-bold">
                Kerala, India
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
                Education
              </p>
              <h3 className="text-3xl font-bold">
                SCMS School of
                Engineering & Technology
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">
                Focus Areas
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 className="text-2xl font-semibold text-white">
                  Full Stack Development
                </h3>
                <h3 className="text-2xl font-semibold accent">
                  AI Applications
                </h3>
                <h3 className="text-2xl font-semibold text-white">
                  Machine Learning
                </h3>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics — Pill style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 pt-10"
        >
          <div className="flex flex-col gap-3">
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              border: "1px solid rgba(215,255,63,0.3)",
              borderRadius: "9999px",
              padding: "6px 24px",
            }}>
              <span className="editorial-heading accent" style={{ fontSize: "40px", lineHeight: 1 }}>
                7+
              </span>
            </span>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Projects
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              border: "1px solid rgba(215,255,63,0.3)",
              borderRadius: "9999px",
              padding: "6px 24px",
            }}>
              <span className="editorial-heading accent" style={{ fontSize: "40px", lineHeight: 1 }}>
                2
              </span>
            </span>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Internships
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              border: "1px solid rgba(215,255,63,0.3)",
              borderRadius: "9999px",
              padding: "6px 24px",
            }}>
              <span className="editorial-heading accent" style={{ fontSize: "40px", lineHeight: 1 }}>
                15+
              </span>
            </span>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Technologies
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;