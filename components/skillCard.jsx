import React from 'react';

const skillCard = ({ title, icon }) => {
  return (
    <div className="w-full p-[1px] rounded-md bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="w-full bg-black rounded-md p-2 sm:p-3 text-white h-full">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://skillicons.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity shrink-0 w-1/5"
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`Technologies ${title}`}
              className="w-full h-auto"
            />
          </a>

          <h3 className="flex-1 min-w-0 text-[11px] sm:text-xs md:text-sm font-bold break-words whitespace-normal leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </div>

  );
};

export default skillCard;