import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8 flex flex-col items-center">
            <div className="text-center mb-8 mt-40" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
                <p className="text-gray-600">Get in Touch</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-40">
                <a href="mailto:sakshyamshrestha111@gmail.com" className="flex items-center bg-white rounded-4xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="100">
                    <FaEnvelope className="w-8 h-8 text-gray-700 mr-3" />
                    <span className="text-lg text-gray-800">E-mail</span>
                </a>
                <a href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/" className="flex items-center bg-white rounded-4xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="200">
                    <FaLinkedin className="w-8 h-8 text-gray-700 mr-3" />
                    <span className="text-lg text-gray-800">LinkedIn</span>
                </a>
                <a href="tel:+9779808002930" className="flex items-center bg-white rounded-4xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="300">
                    <FaPhone className="w-8 h-8 text-gray-700 mr-3" />
                    <span className="text-lg text-gray-800">Phone</span>
                </a>
                <a href="https://github.com/Sakshyam11111" className="flex items-center bg-white rounded-4xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="400">
                    <FaGithub className="w-8 h-8 text-gray-700 mr-3" />
                    <span className="text-lg text-gray-800">Github</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;