import "./Certifications.css";
import { useState } from "react";
import { motion } from "framer-motion";
import certificates from "./certificateData";
import CertificateCard from "./CertificateCard";

const filters = [
  "All",
  "AI",
  "Machine Learning",
  "Data Science",
  "Web",
  "Programming",
  "Cloud",
  "Database"
];

export default function Certifications() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCertificates =
    activeFilter === "All"
      ? certificates
      : certificates.filter(
          (item) => item.category === activeFilter
        );

  const featuredCertificates =
    certificates.filter((item) => item.featured);

  return (

    <section
      className="certifications"
      id="certifications"
    >

      {/* Background Glow */}

      <div className="cert-bg"></div>

      {/* Heading */}

      <motion.div
        className="cert-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span>CERTIFICATIONS</span>

        <h2>

          Continuous
          <span> Learning</span>

        </h2>

        <p>

          Every certification reflects my commitment
          towards becoming an AI Engineer by mastering
          Artificial Intelligence, Machine Learning,
          Data Science and Full Stack Development.

        </p>

      </motion.div>

      {/* Statistics */}

      <div className="cert-stats">

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <h2>20+</h2>
          <p>Certificates</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <h2>6</h2>
          <p>Learning Platforms</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <h2>AI</h2>
          <p>Focused Learning</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <h2>2025-26</h2>
          <p>Learning Journey</p>
        </motion.div>

      </div>

      
      {/* Filter */}

      <div className="filter-container">

        {

          filters.map((filter) => (

            <button

              key={filter}

              className={
                activeFilter === filter
                  ? "active-filter"
                  : ""
              }

              onClick={() =>
                setActiveFilter(filter)
              }

            >

              {filter}

            </button>

          ))

        }

      </div>

      {/* Grid */}

      <div className="certificate-grid">

        {

          filteredCertificates.map(

            (certificate, index) => (

              <CertificateCard

                key={certificate.id}

                certificate={certificate}

                index={index}

              />

            )

          )

        }

      </div>

      {/* Skills Cloud */}

      <div className="skill-cloud">

        <h3>Skills Earned</h3>

        <div className="cloud">

          {

            [
              "Artificial Intelligence",
              "Machine Learning",
              "Deep Learning",
              "TensorFlow",
              "Neural Networks",
              "Python",
              "SQL",
              "React",
              "Node.js",
              "MongoDB",
              "AWS",
              "JavaScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "Scikit-Learn",
              "Matplotlib",
              "Pandas",
              "Prompt Engineering",
              "Generative AI",
              "OOP",
              "DBMS"
            ].map((skill, index) => (

              <motion.span

                key={index}

                whileHover={{
                  scale: 1.12
                }}

              >

                {skill}

              </motion.span>

            ))

          }

        </div>

      </div>

    </section>

  );

}