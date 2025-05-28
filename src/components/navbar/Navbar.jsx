import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <nav className="bg-gradient-to-r from-purple-900 to-black text-white p-4 flex items-center justify-between w-full flex-wrap-nowrap" data-aos="fade-down">
            <div className="flex items-center flex-shrink-0">
                <p className="text-xl font-bold text-white">PORTFOLIO</p>
            </div>
            <div className="flex items-center space-x-10 text-xl flex-shrink-0">
                <Link to="hero" smooth={true} duration={500} className="text-white hover:text-blue-300 whitespace-nowrap" data-aos="fade-down" data-aos-delay="100">Home</Link>
                <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-300 whitespace-nowrap" data-aos="fade-down" data-aos-delay="200">About</Link>
                <Link to="skills" smooth={true} duration={500} className="text-white hover:text-blue-300 whitespace-nowrap" data-aos="fade-down" data-aos-delay="300">Skills</Link>
                <Link to="projects" smooth={true} duration={500} className="text-white hover:text-blue-300 whitespace-nowrap" data-aos="fade-down" data-aos-delay="400">Projects</Link>
                <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" data-aos="fade-down" data-aos-delay="500" />
                    </a>
                    <a href="https://www.instagram.com/s.a.k.s.h.y.a.m/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" data-aos="fade-down" data-aos-delay="600" />
                    </a>
                    <a href="https://github.com/Sakshyam11111" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-white hover:text-blue-300 rounded-full bg-gray-800 p-1" data-aos="fade-down" data-aos-delay="700" />
                    </a>
                    <Link to="contact" smooth={true} duration={500}  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 whitespace-nowrap" data-aos="fade-down" data-aos-delay="800">
                        Let's Connect
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;