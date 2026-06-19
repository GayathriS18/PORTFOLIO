import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";

const COLS = "50px 4fr 2fr 0.8fr";

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ padding: "8rem 0" }}
    >
      <div className="bg-word top-10 left-[-80px]">WORK</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
          style={{ marginBottom: "5rem" }}
        >
          SELECTED
          <br />
          <span className="accent">PROJECTS</span>
        </motion.h2>

        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: COLS,
              columnGap: "4rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {["No.", "Project", "Stack", "Category"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: "11px",
                  color: "#b3a5a5",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: COLS,
                columnGap: "4rem",
                padding: "2rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background:
                  hovered === index
                    ? "rgba(215,255,63,0.03)"
                    : "transparent",
                position: "relative",
                transition: "all 0.25s ease",
              }}
            >
              {/* Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "#d7ff3f",
                  opacity: hovered === index ? 1 : 0,
                  transition: "0.25s ease",
                }}
              />

              {/* Number */}
              <div
                style={{
                  fontFamily: "Anton, sans-serif",
                  color: hovered === index ? "#d7ff3f" : "#666",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1rem",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project */}
              <div
                style={{
                paddingRight: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Hover Thumbnail */}
                  <div
                    style={{
                      width: hovered === index ? "72px" : "0px",
                      height: hovered === index ? "50px" : "0px",
                      overflow: "hidden",
                      borderRadius: "4px",
                      flexShrink: 0,
                      transition:
                        "width 0.35s ease, height 0.35s ease",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: "Anton, sans-serif",
                        textTransform: "uppercase",
                        fontSize: "clamp(1rem,1.6vw,1.5rem)",
                        color:
                          hovered === index
                            ? "#d7ff3f"
                            : "#ffffff",
                        transition: "0.25s ease",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "#666",
                        maxWidth: "500px",
                        opacity: hovered === index ? 1 : 0,
                        transform:
                          hovered === index
                            ? "translateY(0)"
                            : "translateY(6px)",
                        transition:
                          "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignContent: "flex-start",
                  
                }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "10px",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      border: `1px solid ${
                        hovered === index
                          ? "rgba(215,255,63,0.3)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                      color:
                        hovered === index
                          ? "#d7ff3f"
                          : "#666",
                      transition: "0.25s ease",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  {project.category}
                </span>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: "11px",
                      color:
                        hovered === index
                          ? "#d7ff3f"
                          : "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      width: "fit-content",
                      transition: "0.25s ease",
                    }}
                  >
                    Github ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;