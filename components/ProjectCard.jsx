"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ index, title, description, imageSrc, linkUrl, technos = [] }) => {
  const hasLink = Boolean(linkUrl);

  const handleClick = () => {
    if (!hasLink) return;
    window.open(linkUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!hasLink}
      aria-label={hasLink ? `Voir le projet ${title}` : `${title} — bientôt disponible`}
      className="group text-left w-full border border-black/10 rounded-sm overflow-hidden hover:border-black/25 transition-colors duration-300 disabled:cursor-default"
    >
      <div className="relative overflow-hidden aspect-[16/11] bg-black/5">
        <img
          src={imageSrc}
          alt={`Aperçu du projet ${title}`}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-2 left-2 font-mono text-[10px] text-white bg-[#F97316]/90 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
          {index}
        </span>
      </div>

      <div className="p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-medium text-base sm:text-lg text-[#151310] group-hover:text-[#F97316] transition-colors">
            {title}
          </h3>
          <span
            className={`flex items-center justify-center shrink-0 w-6 h-6 rounded-full border border-black/15 text-black/50 transition-all duration-300 ${
              hasLink
                ? "group-hover:border-[#F97316] group-hover:text-[#F97316] group-hover:rotate-45"
                : "opacity-30"
            }`}
          >
            <FaExternalLinkAlt size={9} />
          </span>
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-black/60 leading-relaxed line-clamp-2">
          {description}
        </p>
        {technos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
            {technos.map((t) => (
              <span key={t} className="text-[10px] font-mono uppercase tracking-wide text-[#F97316]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default ProjectCard;
