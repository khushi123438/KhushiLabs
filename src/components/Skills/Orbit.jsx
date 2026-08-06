import "./Orbit.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiMongodb,
  SiJavascript,
  SiPytorch,
  SiOpencv,
  SiTailwindcss,
} from "react-icons/si";

const orbitIcons = [
  { icon: <FaReact />, color: "#61DAFB", angle: 0, label: "React" },
  { icon: <FaNodeJs />, color: "#3C873A", angle: 30, label: "Node.js" },
  { icon: <FaPython />, color: "#FFD43B", angle: 60, label: "Python" },
  { icon: <SiTensorflow />, color: "#FF6F00", angle: 90, label: "TensorFlow" },
  { icon: <SiPytorch />, color: "#EE4C2C", angle: 120, label: "PyTorch" },
  { icon: <SiMongodb />, color: "#47A248", angle: 150, label: "MongoDB" },
  { icon: <FaGitAlt />, color: "#F05032", angle: 180, label: "Git" },
  { icon: <FaDocker />, color: "#2496ED", angle: 210, label: "Docker" },
  { icon: <SiJavascript />, color: "#F7DF1E", angle: 240, label: "JavaScript" },
  { icon: <SiTailwindcss />, color: "#38BDF8", angle: 270, label: "Tailwind" },
  { icon: <SiOpencv />, color: "#5C3EE8", angle: 300, label: "OpenCV" },
  { icon: <FaJava />, color: "#F89820", angle: 330, label: "Java" },
];


export default function Orbit() {
    const [radius, setRadius] = useState(180);

  useEffect(() => {

    const updateRadius = () => {

      if (window.innerWidth <= 480) {
        setRadius(110);
      } else if (window.innerWidth <= 768) {
        setRadius(140);
      } else if (window.innerWidth <= 1024) {
        setRadius(160);
      } else {
        setRadius(180);
      }

    };

    updateRadius();

    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);

  }, []);

  return (
    <div className="orbit-wrapper">

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="orbit-glow"></div>

      {/* Decorative Outer Ring */}
      <motion.div
        className="outer-ring"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      />

      {/* Decorative Inner Ring */}
      <motion.div
        className="inner-ring"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      />

      {/* Icons Orbit */}
      <motion.div
        className="orbit-ring"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {orbitIcons.map((item, index) => {
          const x = radius * Math.cos((item.angle * Math.PI) / 180);
          const y = radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="orbit-icon"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                color: item.color,
              }}
              whileHover={{
                scale: 1.25,
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center */}
      <motion.div
        className="orbit-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
 
      </motion.div>

    </div>
  );
}