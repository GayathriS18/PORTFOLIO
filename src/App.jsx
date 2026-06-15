import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">

      <Navbar />

      <main className="pt-24">
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Resume />
  <Contact />
  <Footer />
</main>

    </div>
  );
}

export default App;