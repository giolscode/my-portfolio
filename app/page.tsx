"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShineBorder } from "@/components/ui/shine-border";


import SkillCard from "@/components/skillCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/CTAButton";
import CardProject from "@/components/cardProject";
import FormationTimeline from "@/components/FormationTimeline";

import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
      <DotPattern width={20} height={20} radius={1} color="#ff6600" className="absolute inset-0 opacity-30" />
      <Navbar />

        {/* Accueil */}
          <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-75 relative z-10 gap-8 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10">
              <Image
                src="/moi.jpeg"
                alt="Profile Image"
                width={400}
                height={500}
                className="rounded-4xl border-2 border-orange-500 object-cover max-w-xs md:max-w-sm"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white p-6 max-w-lg">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                Salut, je suis
              </h1>
              <AuroraText
                colors={["#ffd322", "#FFAE00", "#ff6600"]}
                className="text-5xl md:text-6xl font-bold mb-6 text-center md:text-left"
              >
                Giovanni Losat
              </AuroraText>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                Développeur Full-stack Junior
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-center md:text-left">
                Étudiant en troisième année de BUT informatique spécialisé dans la conception et le développement d'applications web et mobile.
                En capacité de concevoir et de développer des applications web et mobile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
                <CTAButton
                  label="M'embaucher"
                  onClick={() => router.push("/about")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
                <CTAButton
                  label="Télécharger mon CV"
                  onClick={() => window.open("/CV_LOSAT_Giovanni.pdf", "_blank")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
              </div>
            </div>
          </div>

        {/* Skills */}
          <div className=" w-full text-white flex flex-col items-center justify-center px-4 md:px-20 relative z-10">
            <a className="font-bold text-center"> Skills </a>
            <br />  
            <AuroraText 
              colors={["#ffd322","#FFAE00","#ff6600"]} 
              className="text-4xl font-bold mt-4 text-center"
            > Mon bagage de technique </AuroraText>

            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
              <SkillCard icon="wordpress" title="Wordpress" />
              <SkillCard icon="html" title="HTML" />
              <SkillCard icon="css" title="CSS" />
              <SkillCard icon="bootstrap" title="Bootstrap" />
              <SkillCard icon="js" title="Javascript" />
              <SkillCard icon="nodejs" title="Node.js" />
              <SkillCard icon="nextjs" title="Next.js" />
              <SkillCard icon="tailwindcss" title=" TailwindCSS" />
              <SkillCard icon="php" title="Php" />
              <SkillCard icon="python" title="Python" />
              <SkillCard icon="java" title="Java" />
              <SkillCard icon="c" title="C" />
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
            <CardProject title="Buddies" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
            <CardProject title="Test de projet" imageSrc="/projet.jpeg"  description="Description du projet" linkUrl={""} />
          </div>
        </div>

        {/* About me */}
          <div className=" w-full text-white flex flex-col items-center justify-center p-10 px-4 md:px-20 relative z-10"> 
            <a className="font-bold text-center"> A propos de moi </a>
            <br />  
            <AuroraText 
              colors={["#ffd322","#FFAE00","#ff6600"]} 
              className="text-4xl font-bold mt-4 text-center"
            > Un peu plus sur moi </AuroraText>

            <p className="text-lg md:text-xl mt-8 leading-relaxed text-center max-w-3xl">
              Je suis originaire de la Martinique, une île des Caraïbes, et j'ai déménagé en France pour poursuivre mes études en informatique. 
              Passionné par la technologie depuis mon plus jeune âge, j'ai toujours été fasciné par la manière dont les applications et les sites web sont créés. 
              En dehors de mes études, j'aime explorer de nouvelles technologies, travailler sur des projets personnels et contribuer à des projets open source. 
            </p>

            {/* carousel */}

            {/* schéma de mon parcours */}
            <div className="mt-4">
              <FormationTimeline
                items={[
                  {
                    title: "Employé polyvalent — Ecomax, Martinique",
                    date: "juin 2025 - août 2025",
                    description: "Job d'été",
                  },
                  {
                    title: "Développeur web — Centre de mémoire d'urbanisation de l'agglomération (CMUA), Dunkerque",
                    date: "juin 2025 - août 2025",
                    description: "Stage de 2 mois — Conception et développement d'un ensemble de page pour la gestion des archives numérisés du site web.",
                  },
                  {
                    title: "BUT Informatique — IUT Université du Littoral Côte d’Opale, Calais",
                    date: "2023 – 2026 (3ème année en cours)",
                    description: "Parcours A — Spécialité : Réalisation d'applications (conception, développement, validation).",
                  },
                  {
                    title: "Employé polyvalent — Ecomax, Martinique",
                    date: "juin 2023 - août 2023",
                    description: "Job d'été",
                  },
                  {
                    title: "Baccalauréat Général — Lycée La Jetée, Martinique",
                    date: "2023 — Obtention en juin 2023 (Mention Assez Bien)",
                    description: "Spécialités : Mathématiques, Numérique et Sciences Informatiques (NSI), Physique-Chimie.",
                  },
                ]}
              />

            </div>
          </div>

          {/* Mon BUT en 180s */}
            <div className=" w-full text-white flex flex-col items-center justify-center p-10 px-4 md:px-20 relative z-10">
              <a className="font-bold text-center"> Mon BUT en 180s </a>
              <br />  
              <AuroraText 
                colors={["#ffd322","#FFAE00","#ff6600"]} 
                className="text-4xl font-bold mt-4 text-center"
              > Un aperçu de mon parcours académique </AuroraText>

              <div className="relative mx-auto mt-10">
                <ShineBorder shineColor={["#ffd322","#FFAE00","#ff6600"]}/>
                <iframe 
                  width="800" 
                  height="450" 
                  src="https://www.youtube.com/embed/e1KvWE0mUo0?si=GT-TE6z_pSwkoS_l" 
                  title="Mon BUT en 180s" 
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                ></iframe>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                <CTAButton
                  label="M'embaucher"
                  onClick={() => router.push("/about")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
                <CTAButton
                  label="Télécharger mon CV"
                  onClick={() => window.open("/CV_LOSAT_Giovanni.pdf", "_blank")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
              </div>
            </div> 

        <Footer />
    </div>
  );
}
