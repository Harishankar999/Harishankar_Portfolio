import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a 21-year-old Full Stack Web-developer with 1000+ hours of coding experience in React, and JavaScript. A dedicated team player enthusiastic to be part of a reputed company. I describe myself as a passionate developer who loves coding, open-source, and the web platform.
        </p>

        <br />

        <p className="text-xl">
        An independent and self-motivated graduate with leadership, and great Teamwork and Communication
skills. Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills and
enhance my learning in the field of work. capable of mastering new technologies.
        </p>
        
      </div>
    </div>
  );
};

export default About;
