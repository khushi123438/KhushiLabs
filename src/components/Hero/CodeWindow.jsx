import "./CodeWindow.css";
import { motion } from "framer-motion";

export default function CodeWindow() {
  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Header */}
      <div className="code-header">
        <div className="dots">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <p>Portfolio.jsx</p>
      </div>

      {/* Code */}
      <div className="code-body">
        <pre>
{`const Developer = () => {

  return (

    <Portfolio />

  );

};`}
        </pre>
      </div>

      {/* Footer */}
      <div className="code-footer">
        <span>React</span>
        <span>JavaScript</span>
      </div>
    </motion.div>
  );
}