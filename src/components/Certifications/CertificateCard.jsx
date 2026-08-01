import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

export default function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      className={`certificate-card ${
        certificate.featured ? "featured-card" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
    >
      {/* Glow */}
      <div className="certificate-glow"></div>

      {/* Top */}

      <div className="certificate-top">

        <div className="certificate-logo">
          {certificate.logo}
        </div>

        {certificate.featured && (
          <span className="featured-badge">
            ⭐ Featured
          </span>
        )}

      </div>

      {/* Content */}

      <div className="certificate-content">

        <span className="certificate-category">
          {certificate.category}
        </span>

        <h3>
          {certificate.title}
        </h3>

        <div className="issuer">

          <FaAward />

          <span>{certificate.issuer}</span>

        </div>

        <div className="date">

          <FaCalendarAlt />

          <span>{certificate.date}</span>

        </div>

      </div>

      {/* Skills */}

      <div className="certificate-skills">

        {certificate.skills.map((skill, i) => (
          <span key={i}>
            {skill}
          </span>
        ))}

      </div>

      {/* Button */}

      <a
        href={certificate.credential}
        target="_blank"
        rel="noreferrer"
        className="credential-btn"
      >
        View Credential

        <FaExternalLinkAlt />
      </a>

    </motion.div>
  );
}