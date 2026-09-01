import React from "react";

const categoryStyles = [
  { dot: "bg-[#F97316]", chip: "border-[#F97316]/30 bg-[#F97316]/[0.06] text-[#F97316] hover:bg-[#F97316]/[0.12]" },
  { dot: "bg-[#F97316]", chip: "border-[#F97316]/30 bg-[#F97316]/[0.06] text-[#F97316] hover:bg-[#F97316]/[0.12]" },
  { dot: "bg-[#F97316]", chip: "border-[#F97316]/30 bg-[#F97316]/[0.06] text-[#F97316] hover:bg-[#F97316]/[0.12]" },
  { dot: "bg-[#F97316]", chip: "border-[#F97316]/30 bg-[#F97316]/[0.06] text-[#F97316] hover:bg-[#F97316]/[0.12]" },
];

const SkillsGrid = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {groups.map((group, i) => {
        const style = categoryStyles[i % categoryStyles.length];
        return (
          <div key={group.title} className="border border-black/10 rounded-sm p-5">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/45 mb-3">
              <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-sm rounded-full border px-3 py-1 transition-colors ${style.chip}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
