import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden"
      style={{ padding: "8rem 0" }}
    >
      <div className="bg-word" style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}>
        RESUME
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", marginBottom: "2rem" }}
        >
        
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "4rem" }}
        >
          GRAB MY
          <br />
          <span className="accent">RÉSUMÉ</span>
        </motion.h2>

        <motion.a
          href="/MyResume.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "#d7ff3f", color: "#000", fontWeight: 700,
            fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase",
            padding: "1.2rem 3rem", transition: "transform 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download Resume
        </motion.a>

      </div>
    </section>
  );
}

export default Resume;