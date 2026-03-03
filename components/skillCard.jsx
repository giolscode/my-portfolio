import React from 'react';

const skillCard = ({ title, icon }) => {
  return (
    <div className="w-full p-[1px] rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange-500/20">
      <div className="w-full bg-black rounded-md p-2 sm:p-3 text-white h-full border border-transparent hover:border-orange-500/50 transition-colors duration-300">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://skillicons.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity shrink-0 w-1/5"
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