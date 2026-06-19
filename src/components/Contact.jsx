import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "gathri07@gmail.com", href: "mailto:gathri07@gmail.com", tag: "Write to me" },
  { label: "GitHub", value: "GayathriS18", href: "https://github.com/GayathriS18", tag: "See my code" },
  { label: "LinkedIn", value: "Connect →", href: "https://www.linkedin.com/in/gayathri-sudheesh-a248622a7/", tag: "Let's network" },
];

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: "8rem 0" }}>
      <div className="bg-word top-0 left-[-80px]">CONNECT</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end", marginBottom: "6rem" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ fontSize: "11px", color: "#555", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "2rem" }}>
              Get in touch
            </p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              LET'S<br /><span className="accent">CONNECT</span>
            </h2>
          </motion.div>

          {/* Right — statement + LinkedIn CTA */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ paddingBottom: "0.5rem" }}>
            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#9ca3af", lineHeight: 1.7, maxWidth: "480px" }}>
              I'm open to internships, freelance work, collaborations, and innovative product ideas.
              Let's build something impactful together.
            </p>
            <a
              href="https://www.linkedin.com/in/gayathri-sudheesh-a248622a7/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                marginTop: "2.5rem", background: "#d7ff3f", color: "#000",
                fontWeight: 700, fontSize: "11px", letterSpacing: "0.3em",
                textTransform: "uppercase", padding: "1rem 2rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Connect on LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Contact rows — centered */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: "12px" }}>
            {links.slice(0, 2).map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1.2rem 2.5rem",
                  background: "rgba(255, 255, 255, 0.03)", 
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  transition: "background 0.2s ease, border-color 0.2s ease", 
                  cursor: "pointer",
                  textDecoration: "none"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                }}
              >
                <span className="lv" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(1rem, 1.8vw, 1.4rem)", textTransform: "uppercase", color: "#ffffff", transition: "color 0.2s ease", letterSpacing: "0.05em" }}>
                  {link.value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;