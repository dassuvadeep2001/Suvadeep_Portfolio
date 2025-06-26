import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaGithub, FaRegHandPointRight } from "react-icons/fa";

const projects = {
  mernstack: [
    { 
      name: "UtsavAura (Event Management)", 
      image: "event.jpeg", 
      tools: "React, Node.js, Express, MongoDB, Tailwind", 
      code: "https://github.com/dassuvadeep2001/UtsavAura",
      about: "A event management platform with role-based authentication, category-wise event, booked an Event-Manager and payment integration."
    },
  ],
  frontend: [
    { 
      name: "Music Web", 
      image: "music.png", 
      tools: "React, Material-UI", 
      code: "https://github.com/dassuvadeep2001/music-web",
      about: "Music streaming web application with add and playlist and audio player functionality."
    },
    { 
      name: "Tic Tac Toe", 
      image: "tictac.png", 
      tools: "Advanced Javascript, HTML, CSS", 
      code: "https://github.com/dassuvadeep2001/AD-JS-Project---Tic-Tac-Toe",
      about: "Interactive Tic Tac Toe game with score tracking or Draw match and responsive design."
    },
    { 
      name: "Recipe Management System", 
      image: "recipe.png", 
      tools: "React, CSS", 
      code: "https://github.com/dassuvadeep2001/React-Custom_CSS-Project",
      about: "Recipe organizer with search functionality, user authentication, category-wise filtering and custom styling."
    },
    { 
      name: "Art Selling & Buying Platform", 
      image: "art.jpg", 
      tools: "Redux-Toolkit, Material-UI", 
      code: "https://github.com/dassuvadeep2001/Redux_MUI-Project",
      about: "E-commerce platform for artists to showcase and sell their artwork with authentication, cart functionality and responsive design."
    },
    { 
      name: "Todo Web App", 
      image: "todo.jpg", 
      tools: "Next.js, Tailwind", 
      code: "https://github.com/dassuvadeep2001/Next.js-project",
      about: "Task management application with authentication, add, edit and delete tasks with completed tasks and responsive design."
    },
  ],
  backend: [
    { 
      name: "E-Commerce", 
      image: "node-project.jpg", 
      tools: "Node.js, Express, MongoDB", 
      code: "https://github.com/dassuvadeep2001/Node_Project1",
      about: "RESTful API for e-commerce platform with user authentication using JWT, product management, review and cart functionality."
    },
    { 
      name: "Authentication", 
      image: "type-auth.png", 
      tools: "Node.js, Express, MongoDB, TypeScript", 
      code: "https://github.com/dassuvadeep2001/typescript_auth",
      about: "Secure authentication system with JWT tokens, password encryption, verify account with reset passord."
    },
    { 
      name: "Simple CRUD", 
      image: "crud.png", 
      tools: "Node.js, Express, MongoDB, EJS", 
      code: "https://github.com/dassuvadeep2001/simple_crud",
      about: "Basic CRUD operations with server-side rendering using EJS templates."
    },
  ],
};

const Carousel = ({ title, projects }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50">
      <h2 className="text-lg font-bold text-gray-600 mb-6 text-center relative">
        <span className="bg-white px-4 py-3 relative z-10 border-b-2 border-gray-300">{title}</span>
        {/* <span className="absolute h-px bg-gray-300 w-full top-1/2 left-0 transform -translate-y-1/2 z-0"></span> */}
      </h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className="p-4 bg-white rounded-lg my-10 shadow-lg group relative overflow-hidden">
<div className="relative">
  <img src={project.image} alt={project.name} className="w-full h-48 sm:h-60 object-cover rounded-md" />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
    <p className="text-white text-sm">{project.about}</p>
  </div>
</div>
            <h3 className="mt-2 text-gray-700 text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-md text-gray-500 mb-6"> Made with {project.tools}</p>
            <button className="flex items-center gap-2 mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Source Code
              </a> 
              <FaRegHandPointRight/> 
            </button>
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
      <p className="text-center text-gray-700 mb-2">These are the major & minor projects I have worked on. Below is the link to my github profile, click on it to see more.</p>
      <p className="flex justify-center items-center gap-2 text-gray-600 hover:text-black transition hover:underline mb-6"> 
        <FaGithub />
        <a href="https://github.com/dassuvadeep2001" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          Github-Suvadeep Das
        </a>
      </p>
      <Carousel title="MERN Stack Project" projects={projects.mernstack} />
      <Carousel title="Frontend Projects" projects={projects.frontend} />
      <Carousel title="Backend Projects" projects={projects.backend} />
    </div>
  );
};

export default ProjectsPage;