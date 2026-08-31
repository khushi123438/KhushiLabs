import "./About.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">

      {/* LEFT */}

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="about-glow"></div>

     <motion.div
  className="about-left"
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="about-glow"></div>

  <div className="profile-wrapper">

    <div className="profile-card">

      <div className="profile-circle">
        👩🏻‍💻
      </div>

      <h2>Khushi</h2>

      <p>Aspiring AI Engineer</p>

      <span className="profile-subtitle">
        AI • ML • Full Stack
      </span>

    </div>

    <motion.div
      className="profile-bottom-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="bottom-item">
        <h3>🚀</h3>
        <p>Open to Work</p>
      </div>

      <div className="divider"></div>

      <div className="bottom-item">
        <h3>💻</h3>
        <p>AI • MERN</p>
      </div>

      <div className="divider"></div>

      <div className="bottom-item">
        <h3>📍</h3>
        <p>India</p>
      </div>
    </motion.div>

    
  <motion.div
  className="status-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="status-header">

    <span className="status-dot"></span>

    <span>Available for Opportunities</span>

  </div>

  <div className="status-body">

    <div className="role-chip">
      🤖 AI Engineer
    </div>

    <div className="role-chip">
      🧠 ML Engineer
    </div>

    <div className="role-chip">
      💻 Software Developer
    </div>

    <div className="role-chip">
      🌐 Full Stack Developer
    </div>

    <div className="role-chip">
      🤖 AI Developer
    </div>

    <div className="role-chip">
      📊 Data Scientist
    </div>

  </div>

</motion.div>

  </div>


</motion.div>



      </motion.div>




      {/* RIGHT */}

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          ABOUT ME
        </span>

        <h2>
  Aspiring
  <span> AI Engineer</span>
  <br />
  Building Intelligent Solutions
</h2>
      
      <p>
  I'm a Computer Science Engineering student and an aspiring
  <strong> AI Engineer</strong> with a strong passion for building
  intelligent applications that solve real-world problems.

  Currently, I'm expanding my expertise in
  <strong> Artificial Intelligence, Machine Learning, Deep Learning,
  Generative AI, Natural Language Processing (NLP),</strong> and
  <strong> Computer Vision</strong>, while also developing scalable
  full-stack applications using the MERN stack.

  I enjoy transforming ideas into impactful products by combining AI,
  software engineering, and modern web technologies.
</p>


        {/* Cards */}

        <div className="about-grid">

          <div className="about-box">

            <FaBrain />

            <h4>AI</h4>

            <p>Machine Learning & Deep Learning</p>

          </div>

          <div className="about-box">

            <FaLaptopCode />

            <h4>Full Stack</h4>

            <p>MERN Stack Development</p>

          </div>

          <div className="about-box">

            <FaRobot />

            <h4>Automation</h4>

            <p>Smart AI Applications</p>

          </div>

          <div className="about-box">

            <FaCode />

            <h4>DSA</h4>

            <p>Problem Solving & Algorithms</p>

          </div>

        </div>
<button
  className="about-btn"
  onClick={() =>
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Let's Build Together
  <FaArrowRight />
</button>

      </motion.div>


    </section>
  );
}