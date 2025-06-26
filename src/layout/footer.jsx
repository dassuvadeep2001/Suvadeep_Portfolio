import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-4">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="mb-6 flex flex-col items-center">
        <h2 className="text-gray-700 text-xl font-semibold mb-2"><a href="/" className="hover:text-black transition">Suvadeep Das</a></h2>
        <h2 className="text-gray-600 text-sm">MERN Stack Developer</h2>
        </div>
        <p className="text-gray-600 mb-2">Get in touch</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/suvadeep.das.5680" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaFacebookF size={15} />
          </a>
          <a href="https://www.instagram.com/the_suvadeep_gallery/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaInstagram size={15} />
          </a>
          <a href="https://x.com/suvadeep_das_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaTwitter size={15} />
          </a>
          <a href="https://www.linkedin.com/in/suvadeep-das-b91552229/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaLinkedinIn size={15} />
          </a>
          <a href="https://github.com/dassuvadeep2001" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaGithub size={15} />
          </a>
          <a href="https://wa.me/919330653173" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaWhatsapp size={15} />
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">Suvadeep </span>
            | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
