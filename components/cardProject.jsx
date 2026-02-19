import React from "react";
import CTAButton from "./CTAButton";
import { div } from "motion/react-client";

const cardProject = ({ title, imageSrc, description, linkUrl }) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = linkUrl;
    link.click();
  };

  return (
  <div className="m-4 p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500">
    <div className="flex flex-col bg-black space-y-6 p-8 text-white rounded-lg max-w-md mx-auto">
      <div className="relative group">
        <img
          src={imageSrc}
          alt={`Aperçu du projet ${title}`}
          height={300}
          width={300}
        />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-white max-w-lg"> {description} </p>
      <CTAButton onClick={handleClick} label="Voir le projet" />
    </div>
  </div>
  );
};

export default cardProject;