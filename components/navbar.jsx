"use client";

import { useState, useEffect } from "react";
import { FaHome, FaCode, FaFolder, FaUser, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const HScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);  
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", HScroll, { passive: true });
    return () => window.removeEventListener("scroll", HScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-black/50 text-white p-4 flex justify-around items-center z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-20"}`}>
      <h1 className="font-bold text-sm">Giovanni LOSAT</h1>
      <Link href="#Home" className="flex flex-col items-center text-xs hover:text-orange-500">
        <FaHome size={14} /><span>Accueil</span>
      </Link>
      <Link href="#skills" className="flex flex-col items-center text-xs hover:text-orange-500">
        <FaCode size={14} /><span>Skills</span>
      </Link>
      <Link href="#projet" className="flex flex-col items-center text-xs hover:text-orange-500">
        <FaFolder size={14} /><span>Projet</span>
      </Link>
      <Link href="#about" className="flex flex-col items-center text-xs hover:text-orange-500">
        <FaUser size={14} /><span>À propos</span>
      </Link>
      <Link href="#contact" className="flex flex-col items-center text-xs hover:text-orange-500">
        <FaEnvelope size={14} /><span>Contact</span>
      </Link>
    </nav>
  );
}
