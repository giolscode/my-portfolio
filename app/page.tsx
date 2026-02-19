"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WordPullUpText } from "@/components/ui/word-pull-up-text";
import { AuroraText } from "@/components/ui/aurora-text";
import SkillCard from "@/components/skillCard";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/CTAButton";
import CardProject from "@/components/cardProject";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
      <DotPattern width={20} height={20} radius={1} color="#ff6600" className="absolute inset-0 opacity-30" />
      <Navbar />

        {/* Accueil */}
        <div className="min-h-screen w-full flex md:flex-row flex-col items-center justify-center px-4 md:px-10 lg:px-75 relative z-10">

          <div className="md:w-1/2 flex justify-center md:justify-end md:pr-10 mb-8 md:mb-0">
            <Image
              src="/moi.jpeg"
              alt="Profile Image"
              width={400}
              height={500}
              className="rounded-4xl border-4 border-orange-500 object-cover"
            />
          </div>

          <div className="md:w-1/2 flex flex-col text-white p-6 max-w-xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Salut, je suis</h1>
            <AuroraText
              colors={["#ffd322", "#FFAE00", "#ff6600"]}
              className="text-5xl md:text-6xl font-bold mb-6 text-center md:text-left"
            >
              Giovanni Losat
            </AuroraText>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Développeur Full-stack Junior
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Étudiant en troisième année de BUT informatique spécialisé dans la conception et le développement d'applications web et mobile.
              En capacité de concevoir et de développer des applications web et mobile.
            </p>

            {/* Boutons - alignés horizontalement */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label="M'embaucher"
                onClick={() => router.push("/about")}
                className="py-3 px-6 text-lg"
              />
              <CTAButton
                label="Télécharger mon CV"
                onClick={() => window.open("/CV_LOSAT_Giovanni.pdf", "_blank")}
                className="py-3 px-6 text-lg"
              />
            </div>
          </div>
        </div>


        {/* Skills */}
        <div className=" w-full text-white flex flex-col items-center justify-center p-10 px-4 md:px-20 relative z-10">
          <a className="font-bold text-center"> Skills </a>
          <br />  
          <AuroraText 
            colors={["#ffd322","#FFAE00","#ff6600"]} 
            className="text-4xl font-bold mt-4 text-center"
          > Mon bagage de Compétence </AuroraText>

          <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
            <SkillCard icon="html" title="HTML" />
            <SkillCard icon="css" title="CSS" />
            <SkillCard icon="js" title="Javascript" />
            <SkillCard icon="nodejs" title="Node.js" />
            <SkillCard icon="nextjs" title="Next.js" />
            <SkillCard icon="tailwindcss" title=" TailwindCSS" />
            <SkillCard icon="php" title="Php" />
          </div>
        </div>

        {/* Projet */}
        <div className=" w-full text-white flex flex-col items-center justify-center p-10 px-4 md:px-20 relative z-10">
          <a className="font-bold text-center"> Projets </a>
          <br />  
          <AuroraText 
            colors={["#ffd322","#FFAE00","#ff6600"]} 
            className="text-4xl font-bold mt-4 text-center"
          > Quelques de mes projets </AuroraText>

          <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
          </div>
        </div>
        
        <Footer />
    </div>
  );
}
