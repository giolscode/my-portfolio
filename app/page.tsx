"use client";
import { LightRays } from "@/components/ui/light-rays";
import CTAButton from "@/components/CTAButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const link = document.createElement("a");
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-12">
        <div className="text-center">
          <LightRays />
          <h2 className="text-3xl font-bold mb-4 text-white"> Giovanni LOSAT </h2>
          <span className="text-xl text-gray-300"> Développeur full-stack à en devenir... </span>
        </div>

        <div>

          <CTAButton
            label="Me contacter"
            onClick={() => router.push('/contact')}
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
  );
}
