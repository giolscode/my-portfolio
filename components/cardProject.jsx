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
    <div className="flex flex-col bg-black border-2 border-white space-y-3 sm:space-y-4 p-3 sm:p-4 text-white rounded-lg w-full max-w-xs mx-auto hover:border-yellow-500 transition-colors duration-300 h-full">
      <div className="relative group">
        <img
          src={imageSrc}
          alt={`Aperçu du projet ${title}`}
          height={200}
          width={400}
          className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-md"
        />
      </div>
      <AuroraText 
          colors={["#ffd322","#FFAE00","#ff6600"]} 
          className="text-lg sm:text-xl md:text-2xl font-bold leading-tight"
        > {title} </AuroraText>
      <div>
        <img
          src={`https://skillicons.dev/icons?i=${technos}`}
          className="h-7 sm:h-8 md:h-9"
        />
      </div>
      <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 flex-grow"> {description} </p>
      <div className=" mt-auto pt-2">
        <CTAButton onClick={handleClick} label="Voir le projet" className="px-4 py-2 text-sm" />
      </div>
      
    </div>
  );
};

export default cardProject;