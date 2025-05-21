import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Image1 from '../assets/header-img.svg';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-purple-900 to-black text-white py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Text Content */}
            <div className="max-w-lg md:ml-16 ">
                <p className="bg-purple-800 bg-opacity-50 inline-block px-4 py-2 rounded-full text-sm mb-4">
                    Welcome to my Portfolio
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Hi! I'm Sakshyam Shrestha
                </h1>
                <p className="text-gray-300 mb-6 text-3xl">Front-end Developer</p>
                <div className="flex gap-4">
                    <a
                        href="/path-to-cv.pdf"
                        download
                        className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-600 flex items-center transition-colors">
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 flex items-center transition-colors">
                        Contact Info
                    </a>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src={Image1}
                    alt="Illustration representing Sakshyam Shrestha's portfolio"
                    className="w-full max-w-md"
                />
            </div>
        </section>
    );
};

export default Hero;