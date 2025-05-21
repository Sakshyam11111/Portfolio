import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold">Connect with Me</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://github.com/Sakshyam11111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/s.a.k.s.h.y.a.m/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Sakshyam Shrestha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;