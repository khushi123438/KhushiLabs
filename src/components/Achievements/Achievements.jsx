import "./Achievements.css";
import achievements from "./achievementsData";
import AchievementCard from "./AchievementCard";
import { motion } from "framer-motion";

export default function Achievements(){

return(

<section className="achievements" id="achievements">

<motion.div
className="achievement-heading"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}
>

<span>MY ACHIEVEMENTS</span>

<h2>

Learning &
<span> Milestones</span>

</h2>

<p>

Every project, every solved problem and every certificate
represents another step towards becoming an AI Engineer.

</p>

</motion.div>

<div className="achievement-grid">

{

achievements.map((item,index)=>(

<AchievementCard

key={index}

item={item}

/>

))

}

</div>

<div className="stats-strip">

<div>

<h2>500+</h2>

<p>DSA</p>

</div>

<div>

<h2>15+</h2>

<p>Projects</p>

</div>

<div>

<h2>12+</h2>

<p>Certificates</p>

</div>

<div>

<h2>1000+</h2>

<p>GitHub Commits</p>

</div>

</div>

</section>

)

}