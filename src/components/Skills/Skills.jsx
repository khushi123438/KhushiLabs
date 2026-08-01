import "./Skills.css";
import Orbit from "./Orbit";
import "./Orbit.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "🤖 AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Natural Language Processing",
      "Computer Vision",
      "Prompt Engineering"
    ]
  },

  {
    title: "💻 Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C++"
    ]
  },

  {
    title: "🌐 Full Stack Development",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST API",
      "JWT Authentication"
    ]
  },

  {
    title: "📊 Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Feature Engineering",
      "EDA",
      "Data Cleaning"
    ]
  },

  {
    title: "⚙ AI Frameworks",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Hugging Face"
    ]
  },

  {
    title: "🛠 Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Google Colab",
      "Docker"
    ]
  },

  {
    title: "🧩 CS Fundamentals",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating System",
      "Computer Networks",
      "System Design",
      "SQL"
    ]
  },

  {
    title: "☁ Deployment",
    skills: [
      "Vercel",
      "Netlify",
      "Render"
    ]
  }
];

export default function Skills() {
  return (

<section className="skills" id="skills">

    <motion.div
        className="skills-title"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
    >

        <span>MY EXPERTISE</span>

        <h2>
            Skills &
            <span> Technologies</span>
        </h2>

        <p>
            Passionate about Artificial Intelligence, Machine Learning,
            Full Stack Development and building scalable software
            solutions.
        </p>

    </motion.div>

    <div className="skills-layout">

        {/* LEFT */}

        <div className="skills-column">

            {
                skillCategories
                .slice(0,4)
                .map((category,index)=>(

                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{
                            y:-10,
                            scale:1.02
                        }}
                    >

                        <h3>{category.title}</h3>

                        <div className="skill-tags">

                            {
                                category.skills.map((skill,i)=>(

                                    <span key={i}>
                                        {skill}
                                    </span>

                                ))
                            }

                        </div>

                    </motion.div>

                ))
            }

        </div>

        {/* CENTER */}

        <Orbit />

        {/* RIGHT */}

        <div className="skills-column">

            {
                skillCategories
                .slice(4)
                .map((category,index)=>(

                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{
                            y:-10,
                            scale:1.02
                        }}
                    >

                        <h3>{category.title}</h3>

                        <div className="skill-tags">

                            {
                                category.skills.map((skill,i)=>(

                                    <span key={i}>
                                        {skill}
                                    </span>

                                ))
                            }

                        </div>

                    </motion.div>

                ))
            }

        </div>

    </div>

    {/* Currently Learning */}

    <motion.div

        className="learning-card"

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:.7}}

    >

        <h3>🚀 Currently Exploring</h3>

        <div className="learning-tags">

            <span>Generative AI</span>

            <span>Large Language Models</span>

            <span>LangChain</span>

            <span>RAG</span>

            <span>MCP</span>

            <span>AI Agents</span>

            <span>Prompt Engineering</span>

            <span>Fine Tuning</span>

            <span>Hugging Face</span>

        </div>

    </motion.div>

</section>

);
}