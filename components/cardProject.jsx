import React from "react";
import CTAButton from "./CTAButton";

const cardProject = ({ title, imageSrc, description, linkUrl }) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = linkUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center text-center space-y-6 p-8 bg-gray-100 rounded-lg shadow-md ml-10">
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <img
        src={imageSrc}
        alt={`Aperçu du projet ${title}`}
        className="rounded-lg shadow-lg w-80 h-48 object-cover"
    />
    <p className="text-gray-600 max-w-lg">{description}</p>

    <CTAButton label="Voir plus" onClick={handleClick} />
    </div>
  );
};

export default cardProject;