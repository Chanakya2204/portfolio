import React from "react";

function MyProfile() {
  const portfolios = [
    {
      id: 1,
      src: "./jarurat.jpeg", // Replace with the actual image file for Focus Guard
      codeLink: "https://github.com/Chanakya2204/jarurat", // Updated GitHub link
      demoLink: "https://jaruratngo.vercel.app/", // Replace with the actual demo link if available
    },
    {
      id: 2,
      src: "./estate.jpg", // Replace with the actual image file for Chanakya Estate
      codeLink: "https://github.com/Chanakya2204/real-estate-mern", // Updated GitHub link
      demoLink: "https://real-estate-mern-y31b.onrender.com/", // Replace with the actual demo link if available
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-x-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Portfolio Item"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
