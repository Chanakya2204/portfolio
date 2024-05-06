import React from "react";

function MyProfile() {
  const portfolios = [
    {
      id: 1,
      src: "./cryptoimg.jpeg",
      codeLink: "https://github.com/Chanakya2204/Crypto-converter",
    },
    {
      id: 2,
      src: "./reactParallax.jpg",
      codeLink: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      src: "./navbar.jpg",
      codeLink: "https://github.com/yourusername/project3",
    },
    {
      id: 4,
      src: "./reactSmooth.jpg",
      codeLink: "https://github.com/yourusername/project4",
    },
    {
      id: 5,
      src: "./installNode.jpg",
      codeLink: "https://github.com/yourusername/project5",
    },
    {
      id: 6,
      src: "./reactWeather.jpg",
      codeLink: "https://github.com/yourusername/project6",
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
            {" "}
            Portfolio
          </p>
          <p className="py-6">Check out my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* structure for the card */}
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items=center justify-center">
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  demo
                </button>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                >
                  code
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
