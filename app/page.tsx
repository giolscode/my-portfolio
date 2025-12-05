"use client";

import { useRouter } from "next/navigation";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { RetroGrid } from "@/components/ui/retro-grid";

import CTAButton from "@/components/CTAButton";
import ProjectCard from "@/components/cardProject";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col bg-black">

      <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 flex-col relative">

        <div className="absolute inset-0 w-full h-full"> 
          <RetroGrid
            opacity={0.3}
            lightLineColor="orange"
          /> 
        </div>
        <AuroraText className="text-5xl md:text-6xl lg:text-7xl font-bold text-center z-10"
          colors={["#FF6B35","#FF8C00","#FFD700","#FFDB58"]}
        >
          Giovanni LOSAT
        </AuroraText>
        <br />
        <h2 className="text-white text-2xl z-10 font-bold"> En construction, comme mes projets mais avec une meilleure doc. 😁 </h2>
        <br />
        <CTAButton
          label="Me contacter"
          className="bg-transparent hover:bg-gray-800 border border-gray-500 transition-colors"
          onClick={() => window.open("", "_blank")}
        />

      </div>

      {/* Section ME */}
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-16 md:py-24 gap-10 md:gap-16">
        
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-96 overflow-hidden rounded-lg shadow-xl border-2 border-gray-700">
          <img
            src="/moi.jpeg"
            className="object-cover w-full h-full"
            alt="Giovanni LOSAT"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-white max-w-lg space-y-6">
          <AuroraText className="text-3xl md:text-4xl font-bold text-center md:text-left"
            colors={["#FF6B35","#FF8C00","#FFD700","#FFDB58"]}
          >
            Moi en quelques mots...
          </AuroraText>

          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text">
            Étudiant en BUT Informatique | Développeur Full-Stack Junior
          </h2>

          <p className="text-base md:text-lg text-gray-300 text-center md:text-left leading-relaxed">
            Étudiant en 3ᵉ année de BUT informatique, je me spécialise en développement, conception et maintenance d'applications. 🧑🏽‍💻
            <br /><br />
            Ce parcours m'a permis d'acquérir des compétences techniques en développement <span className="text-orange-400">Front-end</span> et <span className="text-orange-400">Back-end</span>, en UI/UX, en gestion de bases de données et en gestion de projet. ⚙️
            <br /><br />
            Mon objectif ? Contribuer à des projets qui auraient émerveillé mon petit moi d'il y a 8 ans. ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full pt-4">
            <CTAButton
              label="Télécharger mon CV"
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={() => window.open("/CV_LOSAT_Giovanni.pdf", "_blank")}
            />
            <CTAButton
              label="Me contacter"
              className="bg-transparent hover:bg-gray-800 border border-gray-500 transition-colors"
              onClick={() => window.open("https://linktr.ee/Giovannilosat", "_blank")}
            />
          </div>
        </div>
      </div>


      {/* Section compétences */}
      <div className="min-h-screen h-auto bg-white text-black pt-4 z-0.5">
        <h1 className=" text-4xl text-center font-bold p-5"> Mon bagages techniques </h1>

      </div>

      {/* Section Projets */}
      <div className="min-h-screen h-auto w-full text-white bg-black py-10 px-4 z-0.5">
        <h1 className=" text-4xl text-center font-bold p-5"> Mon bagages techniques </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ProjectCard
            title="Skyrage"
            imageSrc="/projet.jpeg"
            description="Skyrage est un projet collaboratif développé dans le cadre de mes études."
            linkUrl="https://github.com/CorbeauBaptiste/Skyrage"
          />
          <ProjectCard
            title="Skyrage"
            imageSrc="/projet.jpeg"
            description="Skyrage est un projet collaboratif développé dans le cadre de mes études."
            linkUrl="https://github.com/CorbeauBaptiste/Skyrage"
          />
          <ProjectCard
            title="Skyrage"
            imageSrc="/projet.jpeg"
            description="Skyrage est un projet collaboratif développé dans le cadre de mes études."
            linkUrl="https://github.com/CorbeauBaptiste/Skyrage"
          />
        </div>
        <div className="flex justify-center mt-10">
          <CTAButton
            label="Pour plus de projet"
            onClick={() => router.push('/projet')}
          />
        </div>
      </div>
    </div>
  );
}