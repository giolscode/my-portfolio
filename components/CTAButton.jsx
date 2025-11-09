import React from "react";

const CTAButton = ({ label = "Contacter", onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`m-2 px-6 py-2 border-2 border-orange-400 text-orange-400 hover:bg-yellow-600 hover:text-white font-semibold rounded-md transition bg-transparent ${className}`}
    >
      {label}
    </button>
  );
};

export default CTAButton;