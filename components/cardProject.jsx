import React from "react";
import CTAButton from "./CTAButton";
import { AuroraText } from "@/components/ui/aurora-text";

const cardProject = ({ title, imageSrc, description, linkUrl,technos }) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = linkUrl;
    link.click();
  };

  return (
    <div className="flex flex-col bg-transparent border-2 border-white space-y-4 sm:space-y-5 p-4 sm:p-5 md:p-6 text-white rounded-lg w-full max-w-sm mx-auto hover:border-yellow-500 transition-colors duration-300 h-full">
      <div className="relative group">
        <img
          src={imageSrc}
          alt={`Aperçu du projet ${title}`}
          height={200}
          width={400}
          className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-md"
        />
      </div>
      <AuroraText 
          colors={["#ffd322","#FFAE00","#ff6600"]} 
          className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
        > {title} </AuroraText>
      <div>
        <img
          src={`https://skillicons.dev/icons?i=${technos}`}
          className="h-9 sm:h-10 md:h-12"
        />
      </div>
      <p className="text-sm sm:text-base text-gray-300 line-clamp-3 flex-grow"> {description} </p>
      <div className=" mt-auto pt-2">
        <CTAButton onClick={handleClick} label="Voir le projet" />
      </div>
      
    </div>
  );
};

export default cardProject;