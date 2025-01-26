import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I am Binaya Kumar Behera, a Fullstack MERN Developer currently
          pursuing my B.Tech in Civil Engineering at NIT Rourkela. With a
          passion for creating efficient and impactful solutions, I have worked
          on various projects and internships that have honed my skills in
          full-stack development and problem-solving.
        </p>
        <p className="text-xl mt-10">
          I have contributed as a Frontend developer Intern at Murmu Technology,
          where I designed and optimized end-to-end web applications, reducing
          server response times by 20% and increasing user engagement by 30%. My
          projects include "Chanakya Estate," a real estate web application, and
          "Focus Guard," a Chrome extension to enhance productivity. I am
          always eager to collaborate, learn, and deliver impactful
          technology-driven solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
