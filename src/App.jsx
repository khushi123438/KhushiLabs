import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Project from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import "./components/MouseGlow/mouse.css";
import { useState } from "react";
import Loader from "./components/Loader/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader finishLoading={() => setLoading(false)} />}

      {!loading && (
        <>
          <Background />
          <section> ... </section>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
          <Achievements />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;