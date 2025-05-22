import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCircleCheck } from "react-icons/fa6";

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8 flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-center mb-8" data-aos="fade-up">
                <a href="#explore" className="text-gray-500 text-sm hover:underline">
                    Explore My
                </a>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">Skills</h2>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-20 w-full max-w-4xl">
                {/* Front-end Development Card */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex-1 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300" data-aos="zoom-in">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Front-end Development</h3>
                    <ul className="text-left space-y-2 text-gray-600">
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>HTML - Intermediate</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>CSS - Intermediate</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>JavaScript - Intermediate</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>React - Intermediate</span>
                        </li>
                    </ul>
                </div>

                {/* Back-end Development Card */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex-1 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Back-end Development</h3>
                    <ul className="text-left space-y-2 text-gray-600">
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>Git - Intermediate</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>Node.js - Basic</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>Socket.io - Basic</span>
                        </li>
                        <li className="flex items-center">
                            <FaCircleCheck className="w-4 h-4 text-black mr-2" />
                            <span>Zustand - Basic</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-700 text-center max-w-2xl" data-aos="fade-up" data-aos-delay="200">
                This just wraps up my first project as a front-end developer. Fingers crossed that everyone enjoys what I've put together. It's been a journey of learning and coding, and I'm hopeful it brings value.
            </p>
        </section>
    );
};

export default Skills;