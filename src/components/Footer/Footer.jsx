import "./Footer.css";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaLaptopCode
} from "react-icons/fa";

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer-left"
        >

          <h2>

            Khushi
            <span>Labs</span>

          </h2>

          <p>

            Building intelligent AI solutions,
            scalable software, and impactful digital
            experiences through Artificial Intelligence,
            Machine Learning and Full Stack Development.

          </p>

          <div className="footer-social">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Center */}

        <motion.div
          className="footer-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#certifications">Certificates</a>

          <a href="#contact">Contact</a>

        </motion.div>

        {/* Right */}

        <motion.div
          className="footer-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h3>Currently Looking Opportunities For</h3>

          <div className="footer-tags">

            <span>AI Engineer</span>

            <span>ML Engineer</span>

            <span>Software Developer</span>

            <span>Data Scientist</span>

            <span>Full Stack Developer</span>

            <span>AI Developer</span>

          </div>

          <button
            onClick={scrollTop}
            className="scroll-top"
          >

            <FaArrowUp />

            Back to Top

          </button>

        </motion.div>

      </div>

      <div className="footer-bottom">

        <p>

          <FaCode />

          Designed & Developed by
          <span> Khushi</span>

          <FaLaptopCode />

        </p>

        <small>

          © 2026 KhushiLabs. All Rights Reserved.

        </small>

      </div>

    </footer>

  );

}