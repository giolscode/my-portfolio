import React from "react";

const SkillsInline = ({ groups }) => {
  return (
    <div>
      {groups.map((group) => (
        <div
          key={group.title}
          className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-2 sm:gap-8 py-5 border-t border-black/10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-black/45">
            {group.title}
          </p>
          <p className="text-base sm:text-lg text-[#151310] leading-relaxed">
            {group.items.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsInline;
