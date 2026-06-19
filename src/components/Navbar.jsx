import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6"
    >
      <div className="flex items-center justify-end">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="w-14 h-14 flex items-center justify-center border border-white/10 bg-[#1a241a]/70 backdrop-blur-md hover:border-[#d7ff3f] transition-all duration-300 cursor-pointer"
        >
          {open ? (
            <X size={22} color="#d7ff3f" />
          ) : (
            <Menu size={22} color="#d7ff3f" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ width: "200px" }}
            className="absolute top-24 right-6 md:right-10 bg-[#1a241a] border border-[#d7ff3f]/20 overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: "3px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeft = "3px solid #d7ff3f";
                  e.currentTarget.style.background = "rgba(215,255,63,0.06)";
                  e.currentTarget.querySelector("span").style.color = "#d7ff3f";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeft = "3px solid transparent";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.querySelector("span").style.color = "#9ca3af";
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#9ca3af", transition: "color 0.2s ease" }}>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;