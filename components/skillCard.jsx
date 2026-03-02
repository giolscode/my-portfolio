import React from 'react';

const skillCard = ({ title, icon }) => {
  return (
    <div className="w-full p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="w-full bg-black rounded-lg p-3 sm:p-4 text-white h-full">
        {/* Icône centrée en haut */}
        <div className="flex justify-center mb-4">
          <a
            href="https://skillicons.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`Technologies ${title}`}
              className="h-12 sm:h-14 md:h-16"
            />
          </a>
        </div>

        {/* Titre centré */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-2 break-words">
          {title}
        </h3>
      </div>
    </div>

  );
};

export default skillCard;