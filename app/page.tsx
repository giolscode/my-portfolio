"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { Pointer } from "@/components/ui/pointer";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
      <Pointer />

        {/* Accueil */}
          <div id="Home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 xl:px-24 relative z-10 gap-6 md:gap-12 pt-20 md:pt-18">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10">
              <Image
                src="/moi.jpeg"
                alt="Profile Image"
                width={400}
                height={500}
                className="rounded-3xl border-2 border-orange-500 object-cover w-56 sm:w-64 md:w-72 lg:w-80 h-auto"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white p-2 sm:p-4 max-w-xl">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                Salut, je suis
              </h1>
              <AuroraText
                colors={["#ffd322", "#FFAE00", "#ff6600"]}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left"
              >
                Giovanni Losat
              </AuroraText>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                Développeur Full-stack Junior
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-center md:text-left">
                Étudiant en troisième année de BUT informatique spécialisé dans la Réalisation d'application c'est-à-dire de la conception au développement jusqu'à la validation.
                Prêt à  relever des nouveaux défis à travers de nouveaux projets et évoluer dans le domaine de l'informatique dans un milieu professionel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
                <CTAButton
                  label="M'embaucher"
                  onClick={() => router.push("/about")}
                  className="py-3 px-6 text-md w-full sm:w-auto"
                />
                <CTAButton
                  label="Télécharger mon CV"
                  onClick={() => window.open("/CV_LOSAT_Giovanni.pdf")}
                  className="py-3 px-6 text-md w-full sm:w-auto"
                />
              </div>
            </div>
          </div>

        {/* Skills */}
          <div id="skills" className=" w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 relative z-10 py-8">
            <br />  
            <AuroraText 
              colors={["#ffd322","#FFAE00","#ff6600"]} 
              className="text-2xl sm:text-3xl font-bold mt-4 text-center"
            > Mon bagage technologique </AuroraText>

            <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
              <SkillCard icon="wordpress" title="Wordpress" />
              <SkillCard icon="html" title="HTML" />
              <SkillCard icon="css" title="CSS" />
              <SkillCard icon="bootstrap" title="Bootstrap" />
              <SkillCard icon="js" title="Javascript" />
              <SkillCard icon="nodejs" title="Node.js" />
              <SkillCard icon="nextjs" title="Next.js" />
              <SkillCard icon="postgresql" title="Postgre" />
              <SkillCard icon="mysql" title="MySql" />
              <SkillCard icon="tailwindcss" title=" TailwindCSS" />
              <SkillCard icon="php" title="Php" />
              <SkillCard icon="flutter" title="Flutter" />
              <SkillCard icon="python" title="Python" />
              <SkillCard icon="java" title="Java" />
              <SkillCard icon="c" title="C" />
              <SkillCard icon="godot" title="Godot" />
              <SkillCard icon="github" title="Github" />
              <SkillCard icon="apple" title="Apple" />
            </div>
          </div>

      {/* Projet */}
        <div id="projet" className=" w-full text-white flex flex-col items-center justify-center py-6 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <AuroraText 
            colors={["#ffd322","#FFAE00","#ff6600"]} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          > Quelques de mes projets </AuroraText>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-6 justify-items-center">
            <CardProject title=" Portfolio " imageSrc="/portfolio.jpeg"  description="Une page web qui retrace mon parcours scolaire et professionelle avec mes différents projets." linkUrl={"https://github.com/giolscode/my-portfolio"} technos={["nextjs","tailwindcss"]} />
            <CardProject title="TheLab" imageSrc="/projet.jpeg"  description="Projet universitaire d'initiation à la réalisation d'un puzzle game en réalité virtuelle avec Unreal Engine." linkUrl={""} technos={["unrealengine"]} />
            <CardProject title="Skyrage" imageSrc="/skyrage.jpeg"  description="Création d'un jeu de Plateau en 2D ou nous avons la possibilité d'affronter un ordinateur ou de jouer contre un vrai joueur." linkUrl={"https://github.com/CorbeauBaptiste/Skyrage"} technos={["godot"]}/>
            <CardProject title="CheckAuto" imageSrc="/codeapi.jpeg"  description="Une API permettant d'afficher, ajouter, modifier et supprimer des véhicules dans une base de données en utilisant node.js et prisma." linkUrl={"https://github.com/giolscode/CheckAuto"} technos={["nodejs","prisma","postman"]}/>
            <CardProject title="Image-Processing" imageSrc="/spatial.jpeg"  description="Un logiciel permettant de traiter des images FITS et pouvoir les afficher tout en modifiant certains paramètres." linkUrl={"https://github.com/giolscode/Image-Processing"} technos={["python","qt"]} />
            <CardProject title="MarketApp" imageSrc="/ihm.jpeg"  description="Application permettant de faire une liste de course et d'avoir le chemin le plus court pour faire ses courses." linkUrl={"https://gitlab.com/lads_dev/SAE_IHM_MARKET"} technos={["python","qt"]} />
          </div>
        </div>

        {/* About me */}
          <div id="about" className=" w-full text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"> 
            {/* <AuroraText 
              colors={["#ffd322","#FFAE00","#ff6600"]} 
              className="text-4xl font-bold mt-4 text-center"
            > Un peu plus sur moi </AuroraText>

            <p className="text-lg md:text-xl mt-8 leading-relaxed text-center max-w-6xl">
              Je suis originaire de la Martinique, une île des Caraïbes, et j'ai déménagé en France pour poursuivre mes études en informatique. 
              Passionné par la technologie depuis mon plus jeune âge, j'ai toujours été fasciné par la manière dont les applications et les sites web sont créés. 
              En dehors de mes études, j'aime explorer de nouvelles technologies, travailler sur des projets personnels et contribuer à des projets open source. 
            </p> */}

            {/* carousel */}
            {/* <div className=" mt-10">
              <Carousel className="flex justify-center items-center p-2">
                <CarouselContent>
                  <CarouselItem> <img src="/moi.jpeg" alt="" className="w-full max-w-md h-auto object-cover rounded-lg"/> </CarouselItem>
                  <CarouselItem> <img src="/moi2.jpeg" alt="" className="w-auto h-auto max-h-96 max-w-full"/> </CarouselItem>
                  <CarouselItem> <img src="/moipiano.jpeg" alt="" className="w-48 h-48 object-cover"/> </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div> */}

            {/* schéma de mon parcours */}
            <div className="mt-4 w-full max-w-5xl">
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
                    description: "Spécialités : Mathématiques, Numérique et Sciences Informatiques (NSI), Anglais.",
                  },
                ]}
              />
            </div>
          </div>

          {/* Mon BUT en 180s */}
            <div className=" w-full text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
              <a className="font-bold text-center"> Mon BUT en 180s </a>
              <br />  
              <AuroraText 
                colors={["#ffd322","#FFAE00","#ff6600"]} 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-center"
              > Un aperçu de mon parcours académique </AuroraText>

              <div className="relative w-full max-w-4xl mx-auto mt-8 sm:mt-10">
                <ShineBorder shineColor={["#ffd322","#FFAE00","#ff6600"]}/>
                <div className="relative w-full aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/e1KvWE0mUo0?si=GT-TE6z_pSwkoS_l" 
                  title="Mon BUT en 180s" 
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start mt-6">
                <CTAButton
                  label="M'embaucher"
                  onClick={() => router.push("/about")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
                <CTAButton
                  label="Télécharger mon CV"
                  onClick={() => window.open("/CV_LOSAT_Giovanni.pdf")}
                  className="py-3 px-6 text-lg w-full sm:w-auto"
                />
              </div>
            </div> 

        <Footer />
    </div>
  );
}
