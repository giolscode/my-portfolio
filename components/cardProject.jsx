import React from "react";
import CTAButton from "./CTAButton";
import { div } from "motion/react-client";

const cardProject = ({ title, imageSrc, description, linkUrl,technos }) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = linkUrl;
    link.click();
  };

  return (
    <div className="flex flex-col bg-transparent border-2 border-white space-y-6 p-8 text-white rounded-lg max-w-md mx-auto hover:border-yellow-500 transition-colors duration-300 h-full">
      <div className="relative group">
        <img
          src={imageSrc}
          alt={`Aperçu du projet ${title}`}
          height={200}
          width={400}
          className="w-full h-50 object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <div className="">
        <img
          src={`https://skillicons.dev/icons?i=${technos}`}
          className="h-10"
        />
      </div>
      <p className="text-gray-300 line-clamp-3 flex-grow"> {description} </p>
      <div className=" mt-auto pt-2">
        <CTAButton onClick={handleClick} label="Voir le projet" />
      </div>
      
    </div>
  );
};

export default cardProject;