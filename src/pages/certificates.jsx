import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { title: "HTML Workshop", description: "A online course from GeeksforGeeks", img: "/gfg.jpg" },
  { title: "CSS Workshop", description: "A online course from Great Learning", img: "/gl.jpg" },
  { title: "Java Programming", description: "Online Assessment from Hackerrank", img: "hr1.jpg" },
  { title: "SQL(Basic)", description: "Online Assessment from Hackerrank", img: "hr2.jpg" },
  { title: "Python(Basic)", description: "Online Assessment from Hackerrank", img: "/hr3.jpg" },
  { title: "Data Staructure & Algorithm", description: "Online Assessment from Hackerrank", img: "/hr4.jpg" },
  { title: "DSA using Java", description: "A online course from Infosys Springboard", img: "/info.jpg" },
  { title: "Young Professional", description: "One week Assessment from TCSiON", img: "/tcs.jpg" },
  { title: "SQL Learning", description: "2 hour Assessment from LinkedIn", img: "/linked.jpg" },
  { title: "Android App Development using Java", description: "One Month Course from Coursera", img: "/course.jpg" },
  { title: "Digital Marketing", description: "A small course of Fundamentals of Digital Marketing from Google Digital Workshop", img: "/google.jpg" },
  { title: "IICC", description: "Participation of Appreciation in IICC, organized by Coding Ninjas & Chandigarh University", img: "/code.jpg" }
];

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 md:px-16">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8 pb-3 border-b-2 border-gray-300 relative">
        Certificates
      </h1>

      <p className="text-center text-gray-600 mb-16">During my college years and the lockdown period, I utilized my time to enhance my skills by completing various online courses. Each certificate showcased here reflects the dedication and effort I put into learning new technologies and improving my professional knowledge.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-transparent overflow-hidden transition"
          >
             <motion.div
                className="flex flex-col items-center py-4 bg-transparent"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-60 object-cover border-8 border-gray-500"
            />
            </motion.div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 hover:text-black transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
