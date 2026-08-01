import { motion } from "framer-motion";

export default function AchievementCard({ item }) {

return(

<motion.div
className="achievement-card"

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

whileHover={{
y:-10,
scale:1.03
}}

transition={{duration:.5}}
>

<div className="achievement-icon">

{item.icon}

</div>

<h2>{item.value}</h2>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</motion.div>

);

}