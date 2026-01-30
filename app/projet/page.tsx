"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardProject from "@/components/cardProject";


export default function Projet(){
    const router = useRouter();

    return(
<div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
    <DotPattern width={20} height={20} radius={1} color="#ff6600" className="absolute inset-0 opacity-30 z-0"/>

    <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        <header className="flex flex-col items-center px-4 py-12 md:py-16 lg:py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-6">
                Mes projets
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto">
                Chaque projet est une opportunité de transformer des idées en solutions concrètes. Découvrez une sélection de mes réalisations, où technologie, créativité et fonctionnalité se rencontrent pour répondre à des besoins variés.
            </p>
        </header>

        <main className="flex-1 px-4 py-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:px-6">
                <CardProject
                    title="Projet"
                    description="Un site web personnel pour présenter mes compétences, projets et expériences professionnelles."
                    imageSrc="/proj.jpg"
                    linkUrl="https://monportfolio.com"
                />
                <CardProject
                    title="Projet"
                    description="Un site web personnel pour présenter mes compétences, projets et expériences professionnelles."
                    imageSrc="/projet.jpeg"
                    linkUrl="https://monportfolio.com"
                />
                <CardProject
                    title="Projet"
                    description="Un site web personnel pour présenter mes compétences, projets et expériences professionnelles."
                    imageSrc="/proj.jpg"
                    linkUrl="https://monportfolio.com"
                />
            </div>
        </main>

        <Footer />
    </div>
</div>

    );
}