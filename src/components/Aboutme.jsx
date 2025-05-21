import React from 'react';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import Image1 from "../assets/1.jpg";

const AboutMe = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={Image1}
          alt="Sakshyam Shrestha"
          className="rounded-4xl shadow-lg w-full max-w-xs"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-2/3 flex flex-col items-center">
        <div className="text-center mb-6">
          <a href="#more" className="text-gray-500 text-sm hover:underline">
            Get To Know More
          </a>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">About Me</h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
          {/* Experience Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex-1 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaCode className="w-8 h-8 text-purple-700" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Experience</h3>
            <p className="text-gray-600">Fresher in Frontend Development</p>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex-1 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaGraduationCap className="w-8 h-8 text-purple-700" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Education</h3>
            <p className="text-gray-600">BIT - IT Bachelors Degree - OnGoing</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-700 text-center max-w-lg">
          As an innovative IT graduate, I am passionate about creating intuitive and engaging user
          experiences. With a solid foundation in HTML, CSS, and JavaScript, alongside expertise in React,
          I am prepared to tackle complex web projects. My proficiency with modern development tools
          such as Git, GitHub, and GitLab, combined with my skills in cutting-edge frameworks like
          Tailwind, enables me to deliver high-quality, responsive designs. I am excited to contribute to
          your team's success by leveraging my skills to produce standout digital solutions in today’s
          competitive landscape.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;