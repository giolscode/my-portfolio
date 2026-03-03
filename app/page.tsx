"use client";

import { LightRays } from "@/components/ui/light-rays";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import SkillCard from "@/components/skillCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/CTAButton";
import CardProject from "@/components/cardProject";
import FormationTimeline from "@/components/FormationTimeline";

import Image from "next/image";

export default function Home() {
  const skillGroups = [
    {
      title: "Développement Frontend",
      items: [
        { icon: "html", title: "HTML" },
        { icon: "css", title: "CSS" },
        { icon: "js", title: "Javascript" },
        { icon: "bootstrap", title: "Bootstrap" },
        { icon: "tailwindcss", title: "TailwindCSS" },
        { icon: "nextjs", title: "Next.js" },
        { icon: "wordpress", title: "Wordpress" },
      ],
    },
    {
      title: " Développement Backend",
      items: [
        { icon: "nodejs", title: "Node.js" },
        { icon: "php", title: "Php" },
        { icon: "postgresql", title: "PostgreSQL" },
        { icon: "mysql", title: "MySQL" },
      ],
    },
    {
      title: "Langages de programmation",
      items: [
        { icon: "python", title: "Python" },
        { icon: "java", title: "Java" },
        { icon: "c", title: "C" },
      ],
    },
    {
      title: "Autres compétences",
      items: [
        { icon: "flutter", title: "Flutter" },
        { icon: "godot", title: "Godot" },
        { icon: "github", title: "Github" },
        { icon: "postman", title: "Postman" },
        { icon: "apple", title: "Apple" },
        { icon: "unrealengine", title: "Apple" },
      ],
    },
  ];

  const compIUT = [
    {
      ue: "UE6.1A - C1",
      title: "Réaliser",
      proof: "Développement complet de l'API CheckAuto (CRUD + Prisma) et réalisation de pages web en stage (CMUA).",
      result: "Fonctionnalités livrées de bout en bout : conception, développement et validation.",
    },
    {
      ue: "UE6.2 - C2",
      title: "Optimiser",
      proof: "Optimisation responsive du portfolio et amélioration de la structure UI des sections (skills, projets, timeline).",
      result: "Meilleure lisibilité mobile/tablette et interface plus maintenable.",
    },
    {
      ue: "UE6.6A - C6",
      title: "Collaborer",
      proof: "Travail en équipe sur Skyrage / TheLab VR / SAE avec Git, répartition des tâches et intégration collective.",
      result: "Livraisons en groupe, coordination technique et suivi des contributions.",
    },
  ];

  const handleHireClick = () => {
    const email = "giolstpro@gmail.com";
    const subject = "Proposition d'embauche";
    const body = "Bonjour Giovanni,\n\nJe vous contacte pour une opportunité.\n";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <LightRays count={9} color="rgba(120, 180, 255, 0.22)" blur={42} speed={16} length="85vh"className="opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/55" />
      </div>
      <Navbar />

        {/* Accueil */}
          <div
            id="Home"
            className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 xl:px-100 relative z-10 gap-6 md:gap-12 pt-20 md:pt-12 "
          >
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-2"
            >
              <Image
                src="/moi3.jpeg"
                alt="Profile Image"
                width={400}
                height={500}
                className="rounded-3xl border-2 border-orange-500 object-cover w-56 sm:w-64 md:w-72 lg:w-80 h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white p-2 sm:p-4 max-w-xl"
            >
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                Salut, je suis
              </h1>
              <AuroraText
                colors={["#ffd322", "#FFAE00", "#ff6600"]}
                className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-center md:text-left"
              >
                Giovanni Losat
              </AuroraText>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                Développeur Full-stack Junior
              </h2>
              <p className="text-sm sm:text-base md:text-xl mb-8 leading-relaxed text-center md:text-left">
                Étudiant en troisième année de BUT informatique spécialisé dans la Réalisation d'application c'est-à-dire de la conception au développement jusqu'à la validation.
                Prêt à  relever des nouveaux défis à travers de nouveaux projets et évoluer dans le domaine de l'informatique dans un milieu professionel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <CTAButton
                  label="M'embaucher"
                  onClick={handleHireClick}
                  className="py-2 px-4 text-sm w-full sm:w-auto"
                />
                <CTAButton
                  label="Télécharger mon CV"
                  onClick={() => window.open("/CV_LOSAT_Giovanni.pdf")}
                  className="py-3 px-4 text-sm w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </div>

        {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.35 }}
            id="skills" 
            className=" w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 relative z-10 py-8"
          >
            <AuroraText 
              colors={["#ffd322","#FFAE00","#ff6600"]} 
              className="text-3xl sm:text-3xl font-bold mt-6 text-center"
            > Mon bagage technologique </AuroraText>
            <p className="text-white/70 text-sm sm:text-base mt-2 text-center">
              Technos utilisées en projets réels
            </p>

            <div className="w-full max-w-6xl mt-8 space-y-8">
              {skillGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{group.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                    {group.items.map((skill, skillIndex) => (
                      <motion.div
                        key={`${skill.icon}-${skill.title}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: (groupIndex * 0.08) + (skillIndex * 0.04) }}
                        viewport={{ once: true, amount: 0.4 }}
                      >
                        <SkillCard icon={skill.icon} title={skill.title} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

      {/* Compétences validées */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.35 }}
        className="w-full text-white flex flex-col items-center justify-center py-8 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"
      >
        <AuroraText
          colors={["#ffd322", "#FFAE00", "#ff6600"]}
          className="text-2xl sm:text-3xl md:text-3xl font-bold text-center"
        >
          Compétences (UE)
        </AuroraText>
        <p className="text-white/70 text-sm sm:text-base mt-2 text-center">
          Preuves concrètes de compétences travaillées en projet et en stage.
        </p>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mt-6">
          {compIUT.map((item) => (
            <div
              key={item.ue}
              className="rounded-lg border border-white/15 bg-white/[0.03] p-4 sm:p-5 hover:border-orange-500/50 transition-colors"
            >
              <p className="inline-block text-xs sm:text-sm text-orange-200 bg-orange-500/10 border border-orange-500/30 rounded-full px-2.5 py-0.5 mb-3">
                {item.ue}
              </p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-semibold text-white">Preuve :</span> {item.proof}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-2">
                <span className="font-semibold text-white">Résultat :</span> {item.result}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Projet */}
        <motion.div
          initial={{ opacity: 0.7, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.35 }}
          id="projet"
          className=" w-full text-white flex flex-col items-center justify-center py-6 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"
        >
          <AuroraText 
            colors={["#ffd322","#FFAE00","#ff6600"]} 
            className="text-2xl sm:text-3xl md:text-3xl font-bold text-center p-4"
          > Quelques de mes projets </AuroraText>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8 mt-6 justify-items-center">
            <CardProject title=" Portfolio " imageSrc="/portfolio.jpeg"  description="Une page web qui retrace mon parcours scolaire et professionelle avec mes différents projets." linkUrl={"https://github.com/giolscode/my-portfolio"} technos={["nextjs","tailwindcss"]} />
            <CardProject title="TheLab VR" imageSrc="/lab.jpeg"  description="Projet universitaire d'initiation à la réalisation d'un puzzle game en réalité virtuelle avec Unreal Engine." linkUrl={""} technos={["unrealengine"]} />
            <CardProject title="Skyrage" imageSrc="/skyrage.jpeg"  description="Création d'un jeu de Plateau en 2D ou nous avons la possibilité d'affronter un ordinateur ou de jouer contre un vrai joueur." linkUrl={"https://github.com/CorbeauBaptiste/Skyrage"} technos={["godot"]}/>
            <CardProject title="CheckAuto API" imageSrc="/codeapi.jpeg"  description="Une API permettant d'afficher, ajouter, modifier et supprimer des véhicules dans une base de données en utilisant node.js et prisma." linkUrl={"https://github.com/giolscode/CheckAuto"} technos={["nodejs","prisma","postman"]}/>
            <CardProject title="Buddies" imageSrc="/buddies.jpeg"  description="Une application mobile rescencant les évènements musicaux et permettant de communiquer des utilisateurs ." linkUrl={"https://github.com/giolscode/CheckAuto"} technos={["flutter","nodejs"]}/>
            <CardProject title="Image Processing" imageSrc="/spatial.jpeg"  description="Un logiciel permettant de traiter des images FITS et pouvoir les afficher tout en modifiant certains paramètres." linkUrl={"https://github.com/giolscode/Image-Processing"} technos={["python","qt"]} />
            <CardProject title="Supermarket App" imageSrc="/ihm.jpeg"  description="Application permettant de faire une liste de course et d'avoir le chemin le plus court pour faire ses courses." linkUrl={"https://gitlab.com/lads_dev/SAE_IHM_MARKET"} technos={["python","qt"]} />
          </div>
        </motion.div>

        {/* About me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.35 }}
            id="about"
            className=" w-full text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"
          > 
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
                    title: "BUT 3 Informatique — IUT Université du Littoral Côte d’Opale, Calais",
                    date: "2023 – Présent",
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
          </motion.div>

          {/* Mon BUT en 180s */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.35 }}
            className=" w-full text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10"
          >
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
                src="" 
                title="Mon BUT en 180s" 
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                className="absolute inset-0 w-full h-full"
              ></iframe>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6">
              <CTAButton
                label="M'embaucher"
                onClick={handleHireClick}
                className="py-2 px-4 text-sm md:py-2 md:px-4 md:text-base w-full sm:w-auto"
              />
              <CTAButton
                label="Télécharger mon CV"
                onClick={() => window.open("/CV_LOSAT_Giovanni.pdf")}
                className="py-2 px-4 text-sm md:py-3 md:px-6 md:text-base w-full sm:w-auto"
              />
            </div>
          </motion.div> 

        <Footer />
    </div>
  );
}
