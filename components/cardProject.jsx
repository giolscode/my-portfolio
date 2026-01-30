import React from "react";
import CTAButton from "./CTAButton";

const cardProject = ({ title, imageSrc, description, linkUrl }) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = linkUrl;
    link.click();
  };

  return (
  <div className="flex flex-col items-center text-center space-y-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
    <div className="relative group">
      <img
        src={imageSrc}
        alt={`Aperçu du projet ${title}`}
        className="rounded-lg w-80 h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 "
        height={200}
        width={300}
      />
    </div>
    <p className="text-gray-700 max-w-lg mx-auto"> {description} </p>
    <button onClick={handleClick}
      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
    >
      Voir plus
    </button>
  </div>
  );
};

export default cardProject;