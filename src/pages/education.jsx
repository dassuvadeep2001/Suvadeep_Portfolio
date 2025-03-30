import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const qualifications = [
    {
    degree: "Mern Stack Development Course",
    institute: "Webskitters Academy",
    year: "2024-2025",
    grade: "In Progress",
    },
  {
    degree: "B.Tech (Bachelor of Technology) in IT (Information Technology)",
    institute: "Narula Institute of Technology",
    year: "2019-2023",
    grade: "8.77 CGPA",
  },
  {
    degree: "Higher Secondary Education",
    institute: "Gangapuri Siksha Sadan High School",
    year: "2018-2019",
    grade: "73.6%",
  },
  {
    degree: "Secondary Education",
    institute: "Gangapuri Siksha Sadan High School",
    year: "2016-2017",
    grade: "80.8%",
  },
];

const QualificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-20">
      {/* Heading with gray border */}
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">
        Qualifications & Experience
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side - Qualifications (5/8 width on large screens) */}
        <div className="flex-[5] space-y-8">
          {qualifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className="flex items-start gap-4"
            >
              <GraduationCap className="w-8 h-8 text-gray-700 hover:text-black transition" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 hover:text-black transition">
                  {item.degree}
                </h2>
                <p className="text-gray-600">{item.institute}</p>
                <p className="text-gray-600">{item.stream}</p>
                <p className="text-gray-600">{item.year}</p>
                <p className="text-gray-600 font-medium">
                  Grade: {item.grade}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Work Experience (3/8 width on large screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex-[3] flex flex-col items-center justify-center p-10"
        >
          <Briefcase className="w-12 h-12 text-gray-700 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Work Experience
          </h3>
          <p className="text-gray-600 mb-2">0 Years</p>
          <p className="text-green-600 font-medium">Open to Work</p>
        </motion.div>
      </div>
    </div>
  );
};

export default QualificationPage;


