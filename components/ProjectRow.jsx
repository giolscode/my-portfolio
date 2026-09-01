"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

/**
 * @param {{
 *   index?: string,
 *   title?: string,
 *   description?: string,
 *   imageSrc?: string,
 *   linkUrl?: string,
 *   technos?: string[],
 * }} props
 */
const ProjectRow = ({ index, title, description, imageSrc, linkUrl, technos = [] }) => {
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
      className="group w-full grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[3rem_5rem_1fr_auto] items-center gap-4 sm:gap-6 py-6 border-t border-black/10 text-left disabled:cursor-default"
    >
      <span className="font-mono text-xs text-black/40">{index}</span>

      <img
        src={imageSrc}
        alt={`Aperçu du projet ${title}`}
        className="hidden sm:block w-20 h-14 object-cover rounded-sm border border-black/10 grayscale group-hover:grayscale-0 transition-all duration-300"
      />

      <div className="min-w-0">
        <h3 className="font-display font-medium text-xl sm:text-2xl text-[#151310] group-hover:text-[#F97316] transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-black/60 line-clamp-1 sm:line-clamp-none">
          {description}
        </p>
        {technos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {technos.map((t) => (
              <span key={t} className="text-[11px] font-mono uppercase tracking-wide text-black/45">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <span
        className={`flex items-center justify-center w-8 h-8 rounded-full border border-black/15 text-black/50 transition-all duration-300 ${
          hasLink
            ? "group-hover:border-[#F97316] group-hover:text-[#F97316] group-hover:rotate-45"
            : "opacity-30"
        }`}
      >
        <FaExternalLinkAlt size={11} />
      </span>
    </button>
  );
};

export default ProjectRow;
