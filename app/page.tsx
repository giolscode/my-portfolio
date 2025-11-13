"use client";

import { useRouter } from "next/navigation";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";

import CTAButton from "@/components/CTAButton";
import ProjectCard from "@/components/cardProject";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col">
      <RetroGrid opacity={0.1} angle={50} cellSize={50} />
      {/* Section ME */}
      <div className="min-h-screen h-auto w-full bg-black flex flex-col md:flex-row items-center justify-center p-4 md:p-0">
        <img
          src="/moi.jpeg"
          className="rounded-full object-cover w-64 h-64 md:w-80 md:h-96 mb-4 md:mb-0 md:mr-10"
          alt="Giovanni LOSAT"
        />
        <div className="flex flex-col items-center md:items-start text-white text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold">
            Salut moi c'est Giovanni LOSAT - Développeur informatique . 👋🏽
          </h2>
          <br />
          <TypingAnimation className="text-base md:text-lg font-bold">
            je suis un étudiant en 3eme année de BUT informatique qui a toujours été passionné par ce domaine depuis mon plus jeune âge.
          </TypingAnimation>
          <br />
          <div className="flex flex-col md:flex-row justify-center md:justify-start mt-3 space-y-2 md:space-y-0 md:space-x-4">
            <CTAButton
              label="Télécharger mon CV"
              onClick={() => window.open("/CV_LOSAT_Giovanni.pdf", "_blank")}
            />
            <CTAButton
              label="Me contacter"
              onClick={() => window.open("https://linktr.ee/Giovannilosat", "_blank")}
            />
          </div>
        </div>
      </div>

      {/* Section compétences */}


      {/* Section Projets */}
      <div className="min-h-screen h-auto w-full bg-black py-10 px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
          Mes projets
        </h2>
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
