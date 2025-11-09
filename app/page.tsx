"use client";

import { useRouter } from "next/navigation";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";


import CTAButton from "@/components/CTAButton";
import Image from "next/image";


export default function Home() {
  const link = document.createElement("a");
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen">
      <RetroGrid 
        opacity={0.1}
        angle={50}
        cellSize={50}
      />

      <div className="min-h-screen h-screen w-full bg-black flex items-center justify-center ">
        <img
          src="/moi.jpeg"
          className="rounded-full object-cover"
          height={300}
          width={350}
        />

        <div className="justify-center ml-20 text-white">
          <h2 className="text-4xl font-bold">
            Salut moi c'est Giovanni LOSAT - Développeur informatique . 👋🏽
          </h2>

          <br />

          <TypingAnimation className="text-lg font-bold">
            je suis un étudiant en 3eme année de BUT informatique qui à été toujours passionée par ce domaine depuis mon plus jeune age.
          </TypingAnimation>

          <br />
          <br />

          <div className="flex justify-center mt-3">
            <CTAButton
              label="Me contacter"
              onClick={() => router.push("/contact")}
            />

            <CTAButton
              label="Télécharger mon CV"
              onClick={() => {
                link.href = "/CV_LOSAT_Giovanni.pdf";
                link.download = "CV_LOSAT.pdf";
                link.click();
              }}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen h-screen w-full bg-white flex items-center justify-center">
        
      </div>

    </div>
  );
}
