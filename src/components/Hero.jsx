import { motion } from "framer-motion";
import profile from "../assets/profile/temp.JPG";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 text-white"
    >
      <div className="bg-word top-10 left-0 md:left-[-20px] select-none text-[clamp(5rem,10vw,10rem)]">
        GAYATHRI SUDHEESH
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid gap-16 items-center lg:grid-cols-[minmax(0,1fr)_480px]">
          <div className="text-center lg:text-left" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl text-white"
            >
              ◎
            </motion.div>

            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              GAYATHRI SUDHEESH
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.5em] text-xs text-gray-400"
            >
              FULL STACK • AI • WEB
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="editorial-heading text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-tight"
            >
              BUILDING <span className="accent">DIGITAL</span>
              <br />
              EXPERIENCES
              <br />
              FOR THE <span className="accent">MODERN</span>
              <br />
              WEB.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl text-gray-400 leading-relaxed text-sm md:text-base"
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              CS student turning caffeine and curiosity into
              full-stack apps and AI systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ marginBottom: "0.5rem" }}
            >
              <a href="#projects" className="lime-btn">View Projects</a>
              <a href="#resume" className="outline-btn">Resume</a>
            </motion.div>

            
          </div>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative mx-auto w-full max-w-[28rem]"
          >
            <img
              src={profile}
              alt="Gayathri Sudheesh"
              className="w-full object-cover rounded-[2rem] grayscale border border-white/10 opacity-90 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;