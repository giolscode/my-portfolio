import React from "react";
import { siteConfig } from "@/lib/config";
import ContactLinks from "./ContactLinks";
import { Highlighter } from "./ui/highlighter";

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20"
    >
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/50 mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
        {siteConfig.role}
      </p>

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <h1 className="font-display font-medium text-[clamp(2.75rem,11vw,7rem)] leading-[0.95] tracking-tight text-[#151310] shrink-0">
          Giovanni
          <br />
          Losat <span className="text-[#F97316]">.</span>
        </h1>

        <div className="w-full lg:flex-1 border border-black/10 rounded-sm bg-black/[0.015] overflow-hidden">
          {[
            <>
              Alternant chez ArcelorMittal en tant que chargé de projet
              digital, je participe à la{" "}
              <Highlighter
                action="highlight"
                color="rgba(249, 115, 22, 0.28)"
                animationDuration={700}
              >
                digitalisation des processus
              </Highlighter>{" "}
              et au{" "}
              <Highlighter action="underline" color="#F97316" strokeWidth={2}>
                pilotage de projets web
              </Highlighter>{" "}
              au service de la transformation numérique de l&apos;entreprise.
            </>,
            <>
              En parallèle, je me spécialise en{" "}
              <Highlighter
                action="circle"
                color="#F97316"
                strokeWidth={1.5}
                padding={4}
              >
                Ingénierie du Web
              </Highlighter>{" "}
              via un Mastère à l&apos;
              <Highlighter action="box" color="#F97316" strokeWidth={1.5}>
                ESGI
              </Highlighter>
              , alliant ainsi pratique professionnelle et expertise
              technique.
            </>,
          ].map((line, i) => (
            <div
              key={i}
              className="flex gap-4 px-4 py-3 border-b border-black/5 last:border-b-0"
            >
              <span className="shrink-0 font-mono text-xs text-black/30 select-none pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-black/70 leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ContactLinks />
        <a
          href={siteConfig.cv}
          className="text-sm font-medium underline decoration-1 underline-offset-4 decoration-black/30 hover:decoration-[#F97316] hover:text-[#F97316] transition-colors"
        >
          Mon CV
        </a>
      </div>
    </section>
  );
}
