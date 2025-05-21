import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-black text-white p-4 flex items-center justify-between w-full flex-wrap-nowrap">
      <div className="flex items-center flex-shrink-0">
        <p className="text-xl font-bold text-white">PORTFOLIO</p>
      </div>
      <div className="flex items-center space-x-10 text-xl flex-shrink-0">
        <button className="text-white hover:text-blue-300 whitespace-nowrap">Home</button>
        <button className="text-white hover:text-blue-300 whitespace-nowrap">About</button>
        <button className="text-white hover:text-blue-300 whitespace-nowrap">Skills</button>
        <button className="text-white hover:text-blue-300 whitespace-nowrap">Projects</button>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" />
          </a>
          <a href="https://www.instagram.com/s.a.k.s.h.y.a.m/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" />
          </a>
          <a href="https://github.com/Sakshyam11111" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" />
          </a>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 whitespace-nowrap">
            Let's Connect
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;