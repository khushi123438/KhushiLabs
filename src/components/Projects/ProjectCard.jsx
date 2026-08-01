import { motion } from "framer-motion";
import {
  FaGithub,

} from "react-icons/fa";

import {
  cardAnimation,
  cardHover,
  buttonHover,
  badgeHover,
} from "../../animations/motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      variants={cardAnimation}
      {...cardHover}
    >
      {/* Image */}

      <motion.div
        className="project-image"
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.6,
          }}
        />
      </motion.div>

      {/* Content */}

      <div className="project-content">

        {/* Category */}

        {/* Categories */}
<div className="category-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  {Array.isArray(project.category) ? (
    project.category.map((cat, index) => (
      <motion.span
        key={index}
        className="category"
        {...badgeHover}
      >
        {cat}
      </motion.span>
    ))
  ) : (
    <motion.span
      className="category"
      {...badgeHover}
    >
      {project.category}
    </motion.span>
  )}
</div>

        {/* Title */}

        <motion.h3
          whileHover={{
            x: 4,
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}

        <p>{project.description}</p>

        {/* Tech Stack */}

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <motion.span
              key={index}
              {...badgeHover}
              transition={{
                delay: index * 0.05,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}

        <div className="project-links">
          

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            {...buttonHover}
          >
            
            <FaGithub />
         
            Github
          </motion.a>

        </div>

      </div>

    </motion.div>
  );
}