import "./Hero.css";
import FloatingCards from "./FloatingCards";
import HeroImage from "./HeroImage";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT */}

      <div className="hero-left">

        <p className="hero-tag">
          👋 Welcome to my Portfolio
        </p>

        <h1>
          Hi, I'm
          <br />
          <span>Khushi</span>
        </h1>

        <div className="typing">

          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Machine Learning Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Deep Learning Explorer",
              2000,
            ]}
            repeat={Infinity}
            speed={45}
          />

        </div>

        <p className="hero-desc">
          Passionate Computer Science Engineering student
          building AI products, ML models and beautiful
          full-stack applications.
        </p>

        <div className="hero-buttons">

          <a href="#projects" style={{ textDecoration: 'none' }}>
            <button className="primary">
              View Projects
              <FaArrowRight />
            </button>
          </a>

          <button className="secondary">
            Download Resume
          </button>

        </div>

       <div className="socials">
  <a
    href="https://github.com/khushi123438/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/khushi-pandey-12a104343/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://leetcode.com/u/csai_093/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
  >
    <SiLeetcode />
  </a>
</div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

         <HeroImage />



       <div className="floating-cards-wrapper">
    <FloatingCards />
</div>

    
      </div>

    </section>
  );
}