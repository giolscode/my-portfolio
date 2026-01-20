import Link from "next/link";
import { FaHome, FaFolder, FaEnvelope, FaUser } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-6 flex justify-around items-center z-50 rounded-b-lg shadow-lg">
      <Link
        href="/"
        className="flex flex-col items-center hover:text-orange-500"
      >
        <FaHome size={20} />
        <span>Accueil</span>
      </Link>
      <Link
        href="/about"
        className="flex flex-col items-center hover:text-orange-500"
      >
        <FaUser size={20} />
        <span>À propos</span>
      </Link>
      <Link
        href="/projet"
        className="flex flex-col items-center hover:text-orange-500"
      >
        <FaFolder size={20} />
        <span>Portfolio</span>
      </Link>
      <Link
        href="/contact"
        className="flex flex-col items-center hover:text-orange-500"
      >
        <FaEnvelope size={20} />
        <span>Contact</span>
      </Link>
    </nav>
  );
}
