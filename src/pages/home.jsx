import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 mt-16 bg-gray-50 relative overflow-hidden">
<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-8">
   {/* Profile Image */}
   <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="w-40 h-60 md:w-60 md:h-90 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl shadow-gray-700"
    >
      <img
        src="suvadeep.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>

  {/* Text Section */}
  <div className="text-center flex flex-col md:items-start items-center md:text-left">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-5xl font-bold text-gray-600 mb-4"
    >
      Hi, I'm <span className="text-gray-800">Suvadeep Das</span>
    </motion.h1>

    {/* Sub Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-xl md:text-2xl font-semibold text-gray-600 mb-2 h-12"
    >
      <Typewriter
        options={{
          strings: ["A MERN Stack Developer","An Artist", "A Photographer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 50,
        }}
      />
    </motion.h2>
    {/* <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className=" text-gray-500 flex md:flex-row flex-col items-center gap-2 mb-6 "
    >
      <img src="/star.png" alt="" className="w-15 h-15 md:w-20 md:h-20" />
      Hackerrank
      </motion.p> */}
  </div>
</div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-2 mb-8 flex-wrap">
        <a
          href="https://www.facebook.com/suvadeep.das.5680"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-2xl hover:scale-110 hover:text-black transition duration-300 ease-in-out p-2"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/the_suvadeep_gallery/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-2xl hover:scale-110 hover:text-black transition duration-300 ease-in-out p-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/suvadeep-das-b91552229/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-2xl hover:scale-110 hover:text-black transition duration-300 ease-in-out p-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/suvadeep_das_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-2xl hover:scale-110 hover:text-black transition duration-300 ease-in-out p-2"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/dassuvadeep2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 text-2xl hover:scale-110 hover:text-black transition duration-300 ease-in-out p-2"
        >
          <FaGithub />
        </a>
      </div>

      {/* Bio & Contact & Experience */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-5xl">
        {/* Bio */}
        <div className="w-full md:w-1/2 text-gray-800 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Biography</h3>
          <p className="mb-4 text-justify">
            Hi, I'm Suvadeep, a self-motivated and creative individual with a variety
            of skills and great passion for coding. I have a keen interest towards Web
            Development and Problem-Solving.
          </p>
        </div>

        {/* contact */}
      <div className="w-full md:w-1/2 text-gray-800 text-center md:text-left">
  <h3 className="text-lg font-semibold mb-2 text-gray-600">Contact</h3>
  <div className="flex items-center mb-2 gap-2 justify-center md:justify-start">
    <MdLocationPin />
    <span>1142/A Haridevpur, Kolkata-82</span>
  </div>
  <div className="flex items-center mb-2 gap-2 justify-center md:justify-start">
    <MdEmail />
    <span>suvadeepdas15@gmail.com</span>
  </div>
  <div className="flex items-center gap-2 justify-center md:justify-start">
    <MdPhone />
    <span>+91 9330653173</span>
  </div>
</div>

        {/* Experience */}
        <div className="w-full md:w-1/3 text-center md:text-left text-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Year of Experience</h3>
          <p className="text-2xl font-bold mb-2">0+</p>
          <p className="text-lg mb-4">Open to work</p>
        </div>
         {/* project & skill */}
         <div className="w-full md:w-1/3 text-center md:text-left text-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Skill</h3>
          <p className="text-2xl font-bold mb-2">10+</p>
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Completed Projects</h3>
          <p className="text-2xl font-bold">10+</p>
        </div>
      </div>

 {/* Download CV */}
 <a
        href="/Suvadeep Das_Resume.pdf"
        download
        className="inline-block px-4 py-2 bg-gray-800 text-white mt-8 rounded-md hover:bg-black transition duration-300 ease-in-out mb-10"
      >
        Download CV ⬇️
      </a>

    </section>
  );
}

export default HomePage;





