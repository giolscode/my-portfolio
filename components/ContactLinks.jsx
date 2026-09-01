"use client";

import React, { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { siteConfig } from "@/lib/config";

const linkClass =
  "text-sm font-medium underline decoration-1 underline-offset-4 decoration-black/30 hover:decoration-[#F97316] hover:text-[#F97316] transition-colors";

const ContactLinks = ({ className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API indisponible — le lien mailto reste utilisable.
    }
  };

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          {siteConfig.email}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copier l'adresse email"
          title={copied ? "Copié !" : "Copier l'adresse"}
          className="text-black/35 hover:text-[#F97316] transition-colors"
        >
          {copied ? <FaCheck size={11} /> : <FaRegCopy size={11} />}
        </button>
      </span>

      <a
        href={siteConfig.linktree}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Linktree
      </a>
    </div>
  );
};

export default ContactLinks;
