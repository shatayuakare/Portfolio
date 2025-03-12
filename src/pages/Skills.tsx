import React from "react";
import skills from "../json/skills.json";

const Skills = () => {
  return (
    <div className="p-5 sm:px-0 flex gap-3 md:gap-5 justify-center sm:w-full md:w-4/5 flex-wrap mx-auto">
      {skills.map((elem, index) => (
        <div
          className="bg-dark-lightBackground p-1 sm:text-xs md:text-lg px-3 text-dark-lightText rounded-full"
          key={index}
        >
          {elem.title}
        </div>
      ))}
    </div>
  );
};

export default Skills;
