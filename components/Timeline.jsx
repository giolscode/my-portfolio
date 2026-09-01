"use client";

import React from "react";

const Timeline = ({
  items,
  accentClass = "border-[#F97316]/30 bg-[#F97316]/[0.08] text-[#F97316]",
}) => {
  return (
    <div>
      {items.map((item, index) => {
        const isCurrent = item.date.includes("🚀");

        return (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-8 py-6 border-t border-black/10"
          >
            {isCurrent ? (
              <span
                className={`inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-mono ${accentClass}`}
              >
                {item.date.replace("🚀", "").trim()}
              </span>
            ) : (
              <p className="font-mono text-xs uppercase tracking-widest text-black/45">
                {item.date}
              </p>
            )}
            <div>
              <div className="flex items-center gap-3">
                {item.logoDomain && (
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.logoDomain}&sz=128`}
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 rounded-md border border-black/10 bg-white object-contain p-1.5 shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <h3 className="text-base sm:text-lg font-semibold text-[#151310]">{item.title}</h3>
              </div>
              {item.description && (
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{item.description}</p>
              )}
              {item.technos && item.technos.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {item.technos.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wide text-[#F97316]">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
