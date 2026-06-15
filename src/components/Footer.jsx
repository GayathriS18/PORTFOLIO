function Footer() {
  return (
    <footer style={{ marginTop: "6rem", padding: "0 0 3rem 0" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "4rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Left — name + tagline */}
          <div>
            <h3 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}>
              Gayathri<br />
              <span style={{ color: "#d7ff3f" }}>Sudheesh</span>
            </h3>
            <p style={{ fontSize: "16px", color: "#555", textTransform: "uppercase", letterSpacing: "0.2em", lineHeight: 1.8 }}>
              Computer Science Engineering Student<br />
              Full-Stack Developer • AI Enthusiast
            </p>
          </div>

          {/* Right — availability */}
          <div>
            <p style={{ fontSize: "18px", color: "#1c6640", textTransform: "uppercase", letterSpacing: "0.35em", marginBottom: "1.5rem" }}>
              Status
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#d7ff3f", boxShadow: "0 0 8px rgba(215,255,63,0.6)", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "#d7ff3f", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Available for work
              </span>
            </div>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, letterSpacing: "0.05em" }}>
              Open to internships, freelance projects, and collaborations.
            </p>
          </div>

        </div>

        <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.06)", margin: "3rem 0 1.5rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "18px", color: "#0e6531", textTransform: "uppercase", letterSpacing: "0.25em" }}>
            © 2026 Gayathri Sudheesh
          </p>
          <p style={{ fontSize: "11px", color: "#333", textTransform: "uppercase", letterSpacing: "0.25em" }}>
            Kerala, India
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;