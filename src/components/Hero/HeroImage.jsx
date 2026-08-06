import { motion } from "framer-motion";
import CodeWindow from "./CodeWindow";
import FloatingCards from "./FloatingCards";

export default function HeroImage() {
  return (
    <div className="hero-image-container">

      <div className="hero-glow"></div>

      <CodeWindow />

      <FloatingCards />

    </div>
  );
}