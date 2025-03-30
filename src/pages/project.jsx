import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaGithub, FaRegHandPointRight } from "react-icons/fa";

const projects = {
  major: [
    { name: "Music Web", image: "music.png", tools: "React, Material-UI", code: "https://github.com/dassuvadeep2001/music-web" },
    { name: "Tic Tac Toe", image: "tictac.png", tools: "Advanced Javascript, HTML, CSS", code: "https://github.com/dassuvadeep2001/AD-JS-Project---Tic-Tac-Toe" },
    { name: "Recipe Management System", image: "recipe.png", tools: "React, CSS", code: "https://github.com/dassuvadeep2001/React-Custom_CSS-Project" },
    { name: "Art Selling & Buying Platform", image: "art.jpg", tools: "Redux-Toolkit, Material-UI", code: "https://github.com/dassuvadeep2001/Redux_MUI-Project" },
    { name: "Todo Web App", image: "todo.jpg", tools: "Next.js, Tailwind", code: "https://github.com/dassuvadeep2001/Next.js-project" },
  ],
  minor: [
    { name: "Online Shopping Cart System", image: "cart.jpg", tools: "Redux-Toolkit, Material-UI", code: "https://github.com/dassuvadeep2001/cart_redux" },
    { name: "Crypto Currency Platform", image: "crypto.png", tools: "React, CSS", code: "https://github.com/dassuvadeep2001/React.js_Home-project" },
    { name: "Authentication System", image: "auth.png", tools: "Redux-Toolkit, Material-UI", code: "https://github.com/dassuvadeep2001/Authentication_Redux" },
    { name: "E-Commerce Platform", image: "fasion.png", tools: "React-Query, Material-UI", code: "https://github.com/dassuvadeep2001/ReactQuery_HomeProject" },
  ],
};

const Carousel = ({ title, projects }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-center text-gray-600">{title}</h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className="p-4 bg-white rounded-lg my-10">
            <img src={project.image} alt={project.name} className="w-full h-48 sm:h-60 object-cover rounded-md" />
            <h3 className="mt-2 text-gray-700 text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-md text-gray-500 mb-6"> Made with {project.tools}</p>
            <button className="flex items-center gap-2 mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"><a href={project.code} target="_blank">
              Source Code
            </a> <FaRegHandPointRight/> </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 mt-6">
      <h1 className="text-2xl font-bold text-center mb-6 mt-8 border-b-2 border-gray-300 pb-5">My Projects</h1>
      <p className="text-center text-gray-700 mb-2">These are the mejor & minor projects, I have worked on. Below is the link to my github profile, click on it to see more.</p>
      <p className=" flex justify-center items-center gap-2 text-gray-600 hover:text-black transition hover:underline mb-6"> 
        <a href="https://github.com/dassuvadeep2001" className="cursor-pointer">Github-Suvadeep Das </a> <FaGithub /></p>
      <Carousel title="Major Projects" projects={projects.major} />
      <Carousel title="Minor Projects" projects={projects.minor} />
    </div>
  );
};

export default ProjectsPage;