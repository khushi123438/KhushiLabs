import "./Contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaMapMarkerAlt,
FaPhoneAlt,
FaPaperPlane
} from "react-icons/fa";

export default function Contact(){
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ugrk1tq",
      "template_9yo3mlc",
      form.current,
      "NBmZYk7nw-r2i8Dwp"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
};

return(

<section
className="contact"
id="contact"
>

<div className="contact-glow"></div>

<motion.div
className="contact-title"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
>

<span>CONTACT</span>

<h2>

Let's
<span> Connect</span>

</h2>

<p>

Have an AI project,
research idea,
internship opportunity,
or just want to connect?

I'd love to hear from you.

</p>

</motion.div>

<div className="contact-container">

{/* LEFT */}

<motion.div

className="contact-info"

initial={{opacity:0,x:-60}}

whileInView={{
opacity:1,
x:0
}}

transition={{duration:.8}}

>

<h3>

Let's Build Something Amazing

</h3>

<p>
  I'm actively looking for opportunities as an{" "}
  <strong>AI Engineer</strong>,
  {" "}<strong>Machine Learning Engineer</strong>,
  {" "}<strong>Software Developer</strong>,
  {" "}and{" "}
  <strong>Data Scientist</strong>. Feel free to reach out.
</p>
<div className="contact-items">

<div>

<FaEnvelope/>

<span>

kp8238977@gmail.com
</span>

</div>

<div>

<FaPhoneAlt/>

<span>

+91 9918458742

</span>

</div>

<div>

<FaMapMarkerAlt/>

<span>

India

</span>

</div>

</div>

<div className="contact-social">

<a
  href="https://github.com/khushi123438"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/khushi-pandey-12a104343/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=2k24.csai1b.2411385@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>


</div>

</motion.div>

{/* RIGHT */}

<motion.form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: .8 }}
>

<input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
/>

<input
  type="email"
  name="user_email"
  placeholder="Email Address"
  required
/>

<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
/>

<textarea
  rows="6"
  name="message"
  placeholder="Write your message..."
  required
></textarea>

<button type="submit">
  <FaPaperPlane />
  Send Message
</button>
</motion.form>

</div>

</section>

);

}