"use client";

import { useState, useEffect } from "react";
import { FaHome, FaCode, FaFolder, FaUser, FaEnvelope, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#Home", label: "Accueil", icon: FaHome },
    { href: "#skills", label: "Skills", icon: FaCode },
    { href: "#projet", label: "Projet", icon: FaFolder },
    { href: "#about", label: "À propos", icon: FaUser },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

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
    <nav className={`fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-3 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-20"}`}>
      <div className="sm:hidden flex items-center justify-between">
        <h1 className="font-bold text-sm">Giovanni LOSAT</h1>
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 text-white hover:text-orange-500"
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden mt-2 rounded-lg border border-white/20 bg-black/90 p-3">
          <div className="grid grid-cols-2 gap-2">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-sm px-2 py-2 rounded-md hover:text-orange-500"
              >
                <Icon size={14} />
                <span>{label}</span>
              </Link>
            ))}
            <a
              href="/CV_LOSAT_Giovanni.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm px-2 py-2 rounded-md hover:text-orange-500"
            >
              <FaFileDownload size={14} />
              <span>Mon CV</span>
            </a>
          </div>
        </div>
      )}

      <div className="hidden sm:flex justify-around items-center">
        <h1 className="font-bold text-sm">Giovanni LOSAT</h1>
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex flex-col items-center text-xs hover:text-orange-500">
            <Icon size={14} />
            <span>{label}</span>
          </Link>
        ))}
        <a href="/CV_LOSAT_Giovanni.pdf" download className="flex flex-col items-center text-xs hover:text-orange-500">
          <FaFileDownload size={14} />
          <span>Mon CV</span>
        </a>
      </div>
    </nav>
  );
}
