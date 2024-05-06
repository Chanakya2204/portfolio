import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700  to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-vold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          necessitatibus quia earum, nesciunt voluptatu m odit similique non
          atque modi officiis voluptatibus facere nemo architecto magnam maxime
          in debitis! Inventore, voluptatibus.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem necessitatibus quia earum,
          nesciunt voluptatu m odit similique non atque modi officiis
          voluptatibus facere nemo architecto magnam maxime in debitis!
          Inventore, voluptatibus.
        </p>
        <p className="text-xl mt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Soluta quam omnis culpa quos natus nostrum, itaque sunt dicta cumque eligendi.
        </p>
      </div>
    </div>
  );
}

export default About;
