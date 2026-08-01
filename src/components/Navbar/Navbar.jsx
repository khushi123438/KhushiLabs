import "./Navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="navbar">

      <div className="logo">
        Khushi<span>Labs</span>
      </div>

    <nav className={open ? "nav active" : "nav"}>

  <a href="#hero">Home</a>

  <a href="#about">About</a>

  <a href="#skills">Skills</a>

  <a href="#experience">Experience</a>

  <a href="#projects">Projects</a>

  <a href="#certifications">Certificates</a>

  <a href="#contact">Contact</a>

</nav>

      <div
        className="menu"
        onClick={() => setOpen(!open)}
      >

        {open ? <X /> : <Menu />}

      </div>

    </header>

  );

}