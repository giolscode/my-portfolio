import React from "react";
import { AuroraText } from "./ui/aurora-text";

const FormationTimeline = ({ items }) => {
    return (
        <section className="bg-transparent">
            <div className="justify-center items-center text-center">
                <AuroraText
                    colors={["#ffd322", "#FFAE00", "#ff6600"]}
                    className="text-lg sm:text-3xl font-bold mt-4"
                >
                    Parcours scolaire et mes expériences professionelles
                </AuroraText>
            </div>

            <div className="mt-6 overflow-x-auto pb-3">
                <ol className="relative flex min-w-max gap-6 sm:gap-8 px-2 sm:px-4 before:absolute before:left-2 sm:before:left-4 before:right-2 sm:before:right-4 before:top-2 before:h-[2px] before:bg-orange-500/40">
                    {items.map((item, index) => (
                        <li key={index} className="relative w-[260px] sm:w-[300px] pt-8 shrink-0">
                            <span className="absolute top-0 left-6 flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_16px_rgba(249,115,22,0.45)]">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5" />
                                </svg>
                            </span>

                            <div className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-4 h-full">
                                <p className="text-xs sm:text-sm text-orange-300 mb-1">{item.date}</p>
                                <h3 className="text-sm sm:text-base font-semibold leading-snug">{item.title}</h3>
                                {item.description && (
                                    <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
    </section>
    );
};

export default FormationTimeline;
