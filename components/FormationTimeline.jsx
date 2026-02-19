import React from "react";
import { AuroraText } from "./ui/aurora-text";

const FormationTimeline = ({ items }) => {
    return (
    <section className="bg-transparent">
        <div className="justtify-center items-center text-center">
            <AuroraText 
                colors={["#ffd322","#FFAE00","#ff6600"]} 
                className="text-xl font-bold mt-4"
            > Parcours scolaire et mes expériences professionelles </AuroraText>
        </div>

        <div className="mt-5">
            <ol className="relative border-l border-yellow-500/40 ml-4">
                {items.map((item, index) => (
                    <li key={index} className="mb-10 ml-6">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5" />
                        </svg>
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-300">{item.date}</p>
                    {item.description && <p className="text-gray-300">{item.description}</p>}
                    </li>
                ))}
            </ol>
        </div>


    </section>
    );
};

export default FormationTimeline;
