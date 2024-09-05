import React from "react";

const EXperience = () => {
  const Experience = [
    {
      year: "2021-Present",
      position: "Full-stack",
      company: "Milkyway Cooperation",
    },
    {
      year: "2021-Present",
      position: "Full-stack",
      company: "Milkyway Cooperation",
    },
    {
      year: "2021-Present",
      position: "Full-stack",
      company: "Milkyway Cooperation",
    },
    {
      year: "2021-Present",
      position: "Full-Stack",
      company: "Milkyway Cooperation",
    },
  ];
  return (
    <div className="grid grid-cols-2 grid-rows-2  ">
      {...Experience.map((Experience, index) => {
        return (
          // <div className=" ">
          <div
            key={index}
            className=" rounded-xlm-3 border border-white p-3 m-3"
          >
            <h1 className="text-accent">{Experience.year}</h1>
            <h1>{Experience.position}</h1>
            <h1>{Experience.company}</h1>
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default EXperience;
