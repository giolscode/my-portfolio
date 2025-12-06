import React from 'react';

const skillCard = ({ title, icons, progress }) => {
  return (
    <div className="w-auto h-auto bg-black rounded-lg p-6 text-white shadow-lg m-4">
      <h3 className="text-xl font-bold mb-4 text-center border-b border-gray-600 pb-2">
        {title}
      </h3>
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <a href="https://skillicons.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={`https://skillicons.dev/icons?i=${icons}`}
            alt={`Technologies ${title}`}
            className="h-12"
          />
        </a>
      </div>
      <div className="px-5">
        <div className="w-full bg-gray-200 rounded-lg h-4">
          <div
            className="bg-orange-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-right mt-1">{progress}%</p>
      </div>
    </div>
  );
};

export default skillCard;
