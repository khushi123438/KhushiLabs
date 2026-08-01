import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
export default function FloatingCards() {
  return (
    <>
      {/* Tech Stack Card */}
      <motion.div
        className="floating-card code-card"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <h4>Tech Stack</h4>

        <div className="tech-list">

    <span><FaReact className="text-sky-400 text-xl" />React</span>
 

    <span><FaNodeJs className="text-green-500 text-xl" />Node.js</span>

    <span><FaPython className="text-yellow-400 text-xl" />Python</span>

    <span> <SiTensorflow className="text-orange-500 text-xl" />TensorFlow</span>


</div>
      </motion.div>

    
    </>
  );
}