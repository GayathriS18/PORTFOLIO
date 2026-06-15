import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "gathri07@gmail.com",
    href: "mailto:gathri07@gmail.com",
    tag: "Write to me",
  },
  {
    label: "GitHub",
    value: "GayathriS18",
    href: "https://github.com/GayathriS18",
    tag: "See my code",
  },
  {
    label: "LinkedIn",
    value: "Connect →",
    href: "https://www.linkedin.com/in/gayathri-sudheesh-a248622a7/",
    tag: "Let's network",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: "8rem 0" }}>

      <div className="bg-word top-0 left-[-80px]">CONNECT</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top row: label + statement side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "6rem" }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "11px", color: "#555", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "2rem" }}>
              Get in touch
            </p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              LET'S
              <br />
              <span className="accent">CONNECT</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ paddingBottom: "0.5rem" }}
          >
            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#9ca3af", lineHeight: 1.7, maxWidth: "480px" }}>
              I'm open to internships, freelance work,
              collaborations, and innovative product ideas.
              Let's build something impactful together.
            </p>

            <a
              href="mailto:gathri07@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "2.5rem",
                background: "#d7ff3f",
                color: "#000",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Say Hello ↗
            </a>
          </motion.div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "0" }} />

        {/* Contact rows */}
        {links.map((link, i) => (
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
              display: "grid",
              gridTemplateColumns: "160px 1fr auto",
              alignItems: "center",
              gap: "2rem",
              padding: "2rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              textDecoration: "none",
              transition: "background 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(215,255,63,0.03)";
              e.currentTarget.querySelector(".link-value").style.color = "#d7ff3f";
              e.currentTarget.querySelector(".link-tag").style.opacity = "1";
              e.currentTarget.querySelector(".link-tag").style.transform = "translateX(0)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.querySelector(".link-value").style.color = "#ffffff";
              e.currentTarget.querySelector(".link-tag").style.opacity = "0";
              e.currentTarget.querySelector(".link-tag").style.transform = "translateX(8px)";
            }}
          >
            <span style={{ fontSize: "15px", color: "#555", textTransform: "uppercase", letterSpacing: "0.35em" }}>
              {link.label}
            </span>

            <span
              className="link-value"
              style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 2rem)", textTransform: "uppercase", color: "#ffffff", transition: "color 0.2s ease", letterSpacing: "0.02em" }}
            >
              {link.value}
            </span>

            <span
              className="link-tag"
              style={{ fontSize: "11px", color: "#d7ff3f", textTransform: "uppercase", letterSpacing: "0.25em", opacity: 0, transform: "translateX(8px)", transition: "opacity 0.2s ease, transform 0.2s ease" }}
            >
              {link.tag}
            </span>
          </motion.a>
        ))}

        

      </div>
    </section>
  );
}

export default Contact;