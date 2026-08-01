import "./Loader.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBrain,
  FaMicrochip,
  FaRobot,
  FaCode,
} from "react-icons/fa";

const loadingSteps = [
  "Initializing AI Core...",
  "Loading TensorFlow...",
  "Preparing Neural Network...",
  "Loading Computer Vision...",
  "Loading NLP Engine...",
  "Launching Portfolio..."
];

const terminalLogs = [
  "TensorFlow Loaded",
  "CUDA Drivers Ready",
  "Neural Network Compiled",
  "OpenCV Initialized",
  "NLP Models Loaded",
  "Portfolio Ready"
];

export default function Loader({ finishLoading }) {

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(loadingSteps[0]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {

    let value = 0;

    const interval = setInterval(() => {

      value++;

      setProgress(value);

      if (value < 20)
        setStatus(loadingSteps[0]);
      else if (value < 40)
        setStatus(loadingSteps[1]);
      else if (value < 60)
        setStatus(loadingSteps[2]);
      else if (value < 80)
        setStatus(loadingSteps[3]);
      else if (value < 95)
        setStatus(loadingSteps[4]);
      else
        setStatus(loadingSteps[5]);

      setLogs(terminalLogs.slice(0, Math.floor(value / 17)));

      if (value >= 100) {

        clearInterval(interval);

        setTimeout(() => {
          finishLoading();
        }, 700);

      }

    }, 38);

    return () => clearInterval(interval);

  }, [finishLoading]);

  return (

    <motion.div
      className="loader"
      exit={{
        opacity:0,
        scale:1.05,
        filter:"blur(20px)"
      }}
      transition={{duration:.8}}
    >

      {/* Purple Glow */}

      <div className="loader-glow glow-left"></div>
      <div className="loader-glow glow-right"></div>

      {/* Floating Particles */}

      <div className="particles">

        {Array.from({length:30}).map((_,i)=>(

          <span
            key={i}
            className="particle"
            style={{
              left:`${Math.random()*100}%`,
              animationDelay:`${Math.random()*8}s`,
              animationDuration:`${7+Math.random()*6}s`
            }}
          />

        ))}

      </div>

      {/* Glass Card */}

      <motion.div

        className="loader-card"

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

      >

        {/* AI Core */}

        <div className="core-wrapper">

          <motion.div

            className="ring ring1"

            animate={{
              rotate:360
            }}

            transition={{
              duration:15,
              repeat:Infinity,
              ease:"linear"
            }}

          />

          <motion.div

            className="ring ring2"

            animate={{
              rotate:-360
            }}

            transition={{
              duration:10,
              repeat:Infinity,
              ease:"linear"
            }}

          />

          <motion.div

            className="ring ring3"

            animate={{
              rotate:360
            }}

            transition={{
              duration:22,
              repeat:Infinity,
              ease:"linear"
            }}

          />

          <motion.div

            className="brain"

            animate={{
              scale:[1,1.08,1]
            }}

            transition={{
              duration:2,
              repeat:Infinity
            }}

          >

            <FaBrain/>

          </motion.div>

        </div>

        {/* Logo */}

        <h1 className="logo">

          Khushi

          <span>Labs</span>

        </h1>

        {/* Status */}

        <motion.p

          key={status}

          className="status"

          initial={{
            opacity:0,
            y:10
          }}

          animate={{
            opacity:1,
            y:0
          }}

        >

          {status}

        </motion.p>

        {/* Progress */}

        <div className="progress">

          <motion.div

            className="progress-fill"

            animate={{
              width:`${progress}%`
            }}

          >

            <div className="shine"></div>

          </motion.div>

        </div>

        <div className="percentage">

          {progress}%

        </div>

        {/* Terminal */}

        <div className="terminal">

          <div className="terminal-header">

            <FaMicrochip/>

            AI Boot Sequence

          </div>

          <div className="terminal-body">

            {logs.map((item,index)=>(

              <motion.p

                key={index}

                initial={{
                  opacity:0,
                  x:-15
                }}

                animate={{
                  opacity:1,
                  x:0
                }}

              >

                ✓ {item}

              </motion.p>

            ))}

          </div>

        </div>


      </motion.div>

    </motion.div>

  );

}