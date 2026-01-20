"use client";

import { useRouter } from "next/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";

import Navbar from "@/components/navbar";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function About(){
    const router = useRouter();

    return(
        <div className="flex flex-col bg-black min-h-screen relative overflow-hidden">
            <div className="fixed absolute inset-0">
                <DotPattern width={20} height={20} radius={1} color="#ffffff" className="opacity-30" />
            </div>
            <Navbar />

            <div className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4">

                <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
                    <h1 className="text-white text-4xl font-bold text-center md:text-left">
                        À propos de moi
                    </h1>
                    <p className="text-white text-lg mt-4 mx-4 md:mx-0">
                        Bonjour! Je suis Giovanni Losat, un développeur passionné spécialisé dans la création d'applications web modernes et réactives. Avec une solide expérience en JavaScript, React et Next.js, j'aime transformer des idées en expériences numériques captivantes.
                    </p>
                </div>

                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <Image
                    src="/moi2.jpeg"
                    alt="Giovanni Losat"
                    width={500}
                    height={500}
                    className="mx-auto"
                    />
                </div>
            </div>

            <div className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4">

                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <Image
                    src="/code.jpeg"
                    alt="Giovanni Losat"
                    width={400}
                    height={400}
                    className="mx-auto"
                    />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
                    <h1 className="text-white text-4xl font-bold text-center md:text-left">
                        Bagage technique
                    </h1>
                    <p className="text-white text-lg mt-4 mx-4 md:mx-0">
                        Bonjour! Je suis Giovanni Losat, un développeur passionné spécialisé dans la création d'applications web modernes et réactives. Avec une solide expérience en JavaScript, React et Next.js, j'aime transformer des idées en expériences numériques captivantes.
                    </p>
                </div>

            </div>

            <div className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4">

                <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
                    <h1 className="text-white text-4xl font-bold text-center md:text-left">
                        Ma personne
                    </h1>
                    <p className="text-white text-lg mt-4 mx-4 md:mx-0">
                        Bonjour! Je suis Giovanni Losat, un développeur passionné spécialisé dans la création d'applications web modernes et réactives. Avec une solide expérience en JavaScript, React et Next.js, j'aime transformer des idées en expériences numériques captivantes.
                    </p>
                </div>

                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <Image
                    src="/moipiano.jpeg"
                    alt="Giovanni Losat"
                    width={500}
                    height={500}
                    className="mx-auto"
                    />
                </div>
            </div>
            <div className="m-10 justify-center items-center flex">
                <CTAButton
                    label="Télécharger mon CV"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/CV_Giovanni_LOSAT.pdf';
                        link.download = 'CV_Giovanni_LOSAT.pdf';
                        link.click();   
                    }}
                />
                <CTAButton
                    label="Voir mes projets"
                    onClick={() => router.push("/projet")}
                />
            </div>
            
        </div>
    );
}