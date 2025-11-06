import React from "react";

const CTAButton = ({ label = "Contacter", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CTAButton;