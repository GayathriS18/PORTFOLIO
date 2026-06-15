import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" className="relative py-32 overflow-hidden"
    style={{ padding:"8rem 0"}}>
      {/* Background Word */}
      <div className="bg-word top-10 left-[-80px]">
        WORK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style= {{ marginBottom:"5rem"}}
        >
          SELECTED
          <br />
          <span className="accent">PROJECTS</span>
        </motion.h2>
        <div style={{ display:"grid",
          gridTemplateColumns: "3rem 1fr 12rem 8rem",
          gap: "1rem",
          padding: "0 0 1 rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "0",
        }}>
          <span style={{ fontSize: "10px", color: "#555", letterSpacing: "0.2rem", textTransform: "uppercase" }}>No.</span>
          <span style={{ fontSize: "10px", color: "#555", letterSpacing: "0.2rem", textTransform: "uppercase" }}>Projects</span>
          <span style={{ fontSize: "10px", color: "#555", letterSpacing: "0.2rem", textTransform: "uppercase" }}>Stack</span>
          <span style={{ fontSize: "10px", color: "#555", letterSpacing: "0.2rem", textTransform: "uppercase" }}>Category</span>
        </div>
        {/* Projects */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr 12rem 8rem",
              gap: "1rem",
              padding: "2rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              cursor: "pointer",
              transition: "background 0.2s ease",
              background: hovered === index ? "rgba(215,255,63,0.03)" : "transparent",
              position: "relative",
            }}
          >
            {/* Left accent bar on hover */}
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              background: "#d7ff3f",
              opacity: hovered === index ? 1 : 0,
              transition: "opacity 0.2s ease",
            }} />
 
            {/* Number */}
            <span style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "13px",
              color: hovered === index ? "#d7ff3f" : "#333",
              paddingTop: "6px",
              transition: "color 0.2s ease",
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>
 
            {/* Title + description + image on hover */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                {/* Thumbnail — appears on hover */}
                <div style={{
                  width: hovered === index ? "80px" : "0px",
                  height: hovered === index ? "56px" : "0px",
                  overflow: "hidden",
                  borderRadius: "4px",
                  flexShrink: 0,
                  transition: "width 0.35s ease, height 0.35s ease",
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }}
                  />
                </div>
 
                <div>
                  <h3 style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    textTransform: "uppercase",
                    color: hovered === index ? "#d7ff3f" : "#ffffff",
                    transition: "color 0.2s ease",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: "13px",
                    color: "#666",
                    maxWidth: "480px",
                    lineHeight: 1.5,
                    opacity: hovered === index ? 1 : 0,
                    transform: hovered === index ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
 
            {/* Stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "flex-start", paddingTop: "4px" }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  fontSize: "10px",
                  color: hovered === index ? "#d7ff3f" : "#888",
                  border: `1px solid ${hovered === index ? "rgba(215,255,63,0.3)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "9999px",
                  padding: "2px 10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}>
                  {t}
                </span>
              ))}
            </div>
 
            {/* Category + GitHub */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "4px" }}>
              <span style={{ fontSize: "11px", color: "#555", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                {project.category}
              </span>
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "10px",
                    color: hovered === index ? "#d7ff3f" : "#444",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    borderBottom: `1px solid ${hovered === index ? "#d7ff3f" : "transparent"}`,
                    transition: "color 0.2s ease, border-color 0.2s ease",
                    width: "fit-content",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
 
      </div>
    </section>
  );
}
 
export default Projects;