"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WordPullUpText } from "@/components/ui/word-pull-up-text";

import Navbar from "@/components/navbar";


import Image from "next/image";


export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
      <DotPattern width={20} height={20} radius={1} color="#ff6600" className="absolute inset-0 opacity-30" />
      <Navbar />

      <div className="flex flex-grow justify-center items-center">
        <WordPullUpText
          text="Bienvenue sur mon portfolio"
          className="text-white text-center text-4xl font-bold cursor-pointer"
        />
      </div>

      
    </div>
  );
}
