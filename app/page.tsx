"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WordPullUpText } from "@/components/ui/word-pull-up-text";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
      <DotPattern width={20} height={20} radius={1} color="#ff6600" className="absolute inset-0 opacity-30" />
      <Navbar />

      <div className="flex flex-col flex-grow justify-center items-center">
          <h1 className="text-white text-6xl"> Hey je suis un </h1>
          <WordPullUpText text="Développeur informatique " className="text-8xl text-orange-500" />
          <h1 className="text-white text-6xl"> prêt à  </h1>
          <WordPullUpText text="relever des nouveaux défis" className="text-8xl text-yellow-500" />

          <div className="mt-8">
          <CTAButton
            label="En savoir plus sur moi"
            onClick={() => router.push("/about")}
          />
          <CTAButton
            label="Voir mes projets"
            onClick={() => router.push("/projet")}
          />
        </div>
      </div>
        <Footer />
    </div>
  );
}
