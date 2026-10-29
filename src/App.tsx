import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Moh Imron Rofiki</span>
        <a href="#top">Kembali ke atas</a>
      </footer>
    </>
  );
}

export default App;
