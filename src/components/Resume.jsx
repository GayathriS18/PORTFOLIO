import { motion } from "framer-motion";

const highlights = [
  { label: "Education", value: "SCMS School of Engineering & Technology" },
  { label: "Degree", value: "B.Tech Computer Science Engineering" },
  { label: "Focus", value: "Full Stack • AI • Machine Learning" },
  { label: "Location", value: "Kerala, India" },
  { label: "Available", value: "Open to Internships & Opportunities" },
];

function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden"
      style={{ padding: "8rem 0" }}
    >
      <div className="bg-word" style={{ top: 0, left: "-60px" }}>
        RESUME
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", marginBottom: "2rem" }}
        >
          Document / 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "5rem" }}
        >
          GRAB MY
          <br />
          <span className="accent">RÉSUMÉ</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

          {/* Left — identity + download */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "13px", color: "#666", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "1rem" }}>
              Full Name
            </p>
            <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: "1.5rem", color: "#fff" }}>
              Gayathri<br />Sudheesh
            </h3>

            <p style={{ fontSize: "13px", color: "#666", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "3rem" }}>
              Computer Science Engineering Student
              <br />Full-Stack Developer • AI Enthusiast
            </p>

            <a
              href="/MyResume.pdf"
              download
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#d7ff3f", color: "#000", fontWeight: 700, fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", padding: "1.1rem 2.5rem", transition: "transform 0.2s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Right — highlight rows */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "10px", color: "#444", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "2rem" }}>
              At a glance
            </p>

            {highlights.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "1.4rem 0",
                  borderBottom: i < highlights.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <span style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.3em" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "15px", color: "#e5e5e5", fontWeight: 500, letterSpacing: "0.02em" }}>
                  {item.value}
                </span>
              </div>
            ))}

            {/* What's inside pills */}
            <div style={{ marginTop: "2.5rem" }}>
              <p style={{ fontSize: "10px", color: "#444", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "1rem" }}>
                Includes
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Education", "Projects", "Internships", "Skills", "Achievements"].map((item) => (
                  <span key={item} style={{ fontSize: "11px", color: "#888", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "9999px", padding: "5px 16px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Resume;