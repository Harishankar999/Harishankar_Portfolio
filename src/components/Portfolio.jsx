import React from "react";
import Bellavita from "../assets/portfolio/Bellavita.png";
import Harvest from "../assets/portfolio/Harvest.png";
import NordStrom from "../assets/portfolio/NordStrome.png";
import Sugar from "../assets/portfolio/Sugar.png";
import tiktaktao from "../assets/tikTakTao.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Bellavita,
      details:
        "This is a Clone Project of Bella Vita Oraganic Website. We are the 3 members works on this website. We are using ",
      codeLink: "https://github.com/Harishankar999/Bella_vita_clone",
      liveLink: "https://melodious-moonbeam-d90fba.netlify.app/",
      TechStack: "Html, CSS, and JavaScript.",
    },
    {
      id: 2,
      src: NordStrom,
      details:
        "This is a Clone Project of NordStrom Website. We are the 6 members works on this website. We are using ",
      codeLink: "https://github.com/Harishankar999/NordStaarRock",
      liveLink: "https://dapper-pony-7db47d.netlify.app/",
      TechStack: "Html, CSS, and JavaScript.",
    },
    {
      id: 3,
      src: Sugar,
      details:
        "This is a Clone Project of Sugar Website. We are the 4 members works on this website. We are using ",
      codeLink: "https://github.com/Harishankar999/Sugar",
      liveLink: "https://sugarcosmetic.netlify.app/",
      TechStack: "React, React-Redux, Html, CSS, JavaScript and BootStrap.",
    },
    {
      id: 4,
      src: Harvest,
      details:
        "This is a Clone Project of Harvest Website. We are the 4 members works on this website. We are using ",
      codeLink: "https://github.com/Harishankar999/rough-support-2269",
      liveLink: "https://harvest-clone.netlify.app/",
      TechStack: "React, React-Redux, Html, CSS, JavaScript and Chakra-UI .",
    },
    {
      id: 5,
      src: tiktaktao,
      details: "This is Gaming website. This is a solo Project. I am using",
      codeLink: "https://github.com/Harishankar999/REACT-TIC_TAC_TAO",
      liveLink: "https://tic-tak-tao.vercel.app/",
      TechStack: " React, Html, CSS, and JavaScript.",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, details, codeLink, liveLink, TechStack }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div style={{ width: "90%", margin: "auto" }}>
                  <p
                    style={{
                      textAlign: "center",
                      color: "gray.500",
                      marginTop: "10px",
                    }}
                    //className="text-gray-500 py-4 max-w-md"
                  >
                    {details}
                    <span>{TechStack}</span>
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <a target="_blank" href={liveLink}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href={codeLink}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
