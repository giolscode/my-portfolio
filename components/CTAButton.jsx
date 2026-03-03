import React from "react";

const CTAButton = ({ label = "Contacter", onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`m-2 px-6 py-2 border-2 border-white-400 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold rounded-md transition bg-black ${className}`}
    >
      {label}
    </button>
  );
};

export default CTAButton;