import React from "react";
import { siteConfig } from "@/lib/config";
import ContactLinks from "./ContactLinks";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-medium text-2xl text-[#151310]">Discutons.</p>
          <p className="mt-1 text-sm text-black/50">
            Toujours ouvert aux nouvelles opportunités et collaborations.
          </p>
        </div>
        <ContactLinks />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 pb-8 flex flex-wrap items-center justify-between gap-3 text-xs text-black/40">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F97316] transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F97316] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
