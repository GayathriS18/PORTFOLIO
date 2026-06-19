import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="bg-word top-0 left-[-60px]">ABOUT</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          ABOUT<br /><span className="accent">ME</span>
        </motion.h2>

        <div className="grid gap-20 lg:grid-cols-[minmax(0,1fr)_420px] items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold uppercase leading-tight">
              CODE. CREATE. IMPROVE.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                I build things that live on the web. From AI-powered applications
                to full-stack platforms, I enjoy transforming ideas into digital
                experiences that are clean, impactful, and user-focused.
              </p>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                Every project I take on is a chance to learn something new,
                experiment boldly, and push my skills further. My journey has been driven by one belief — that great
                technology is a balance of logic, creativity, and the stubborn
                will to keep building.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}
            className="max-w-xl mx-auto lg:mx-0 lg:text-left"
          >
            <div>
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Location</p>
              <h3 className="text-3xl font-bold">Kerala, India</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Education</p>
              <h3 className="text-3xl font-bold">SCMS School of Engineering & Technology</h3>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8"
          style={{ marginTop: "2rem", paddingTop: "2.5rem" }}
        >
          {[
            { value: "7+", label: "Projects Shipped" },
            { value: "2", label: "Internships" },
            { value: "15+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <span style={{
                display: "inline-flex", width: "fit-content",
                alignItems: "center",
                border: "1px solid rgba(215,255,63,0.3)",
                borderRadius: "9999px",
                padding: "6px 24px",
              }}>
                <span className="editorial-heading accent" style={{ fontSize: "40px", lineHeight: 1 }}>
                  {s.value}
                </span>
              </span>
              <p className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;