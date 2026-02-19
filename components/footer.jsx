import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white/80 py-6  mt-12 bottom-0">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center">
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} – Giovanni LOSAT
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/giovanni-losat-a72a33328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/giolscode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 text-center text-xs text-white/60">
            <p>Portfolio conçu et développé avec passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
