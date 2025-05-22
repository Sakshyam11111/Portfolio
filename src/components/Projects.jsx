import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
import Image1 from "../assets/Realtimechat.png";
import Image2 from "../assets/Chatbot.jpeg";
import Image3 from "../assets/Bankportal.jpeg";
import Image4 from "../assets/Coffeeshop.png";

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const projectData = [
        {
            title: 'Realtime Chat App',
            description: 'Technologies Used: MERN Stack, Socket.io, TailwindCSS, Daisy UI, JWT, Zustand',
            githubLink: 'https://github.com/Sakshyam11111/Real-Time-Chat.git',
            image: Image1,
        },
        {
            title: 'Fully Responsive AI Chatbot',
            description: 'Technologies Used: React, Tailwind UI, API Integration',
            githubLink: 'https://github.com/Sakshyam11111/Chatbot.git',
            image: Image2,
        },
        {
            title: 'Fully Responsive Bank Portal',
            description: 'Technologies Used: React, Tailwind UI, API Integration, AI Chatbot, Props',
            githubLink: 'https://github.com/Sakshyam11111/CAS-Fontend.git',
            image: Image3,
        },
        {
            title: 'CoffeeShop Website',
            description: 'Technologies Used: HTML, CSS, JavaScript',
            githubLink: 'https://github.com/Sakshyam11111/Coffee-Shop.git',
            image: Image4,
        },
    ];

    return (
        <section id="projects" className="bg-black text-white mx-auto py-12 px-4">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold" data-aos="fade-up">Browse My Recent Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projectData.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="mb-4 h-48 bg-gray-600 flex items-center justify-center">
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover rounded" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex justify-center space-x-4">
                            <a href={project.githubLink} className="text-white hover:underline">
                                View on GitHub
                                <FaGithub className="inline-block ml-3" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;