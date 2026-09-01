"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ContactLinks from "./ContactLinks";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full border-b border-black/10 bg-[#F6F3EC]/95 backdrop-blur-md transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        <Link href="#top" aria-label={siteConfig.name} className="flex items-center">
          <img
            src="/signature.png"
            alt={siteConfig.name}
            className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        <ContactLinks className="hidden sm:flex" />

        <a
          href={`mailto:${siteConfig.email}`}
          className="sm:hidden text-sm font-medium underline underline-offset-4 decoration-black/30"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
