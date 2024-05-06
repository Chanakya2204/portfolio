import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
function Homepg() {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-700  "
    >
      <div className="max-w-scrren-lg mx-auto flex  items-center justify-center h-full px-9 md:flex-row text-white  ">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-3xl sm:text-5xl font-bold text-white">I am a Full Stack Developer</h2> 
          {/* sm:7xl se text ko jab desktop mai dekhenge tab wo bada dikhenga aur jab phone mai tab chota */}
          
          <p className=" text-gray-500 max-w-md  py-4">
            I have a 8 years of experience building and designing software.
            currently I love to work on the application using the technologies
            like react tailwind ,react, nextjs and graphQL
          </p>
          <div  >
            <button className=" group text-white w-fit  px-6 py-3 my-2 flex   items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-600 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                {" "}
                <MdKeyboardArrowRight  size={22} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
      {/* profile picture */}
      <div >
        <img src="./profile.jpg" alt="heroimage" className=" rounded-full mb-4  w-2/3 md:w-full ml-5 duration-500"/>
      </div>

      </div> 
    </div>
  );
}

export default Homepg;
