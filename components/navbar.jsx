import Link from "next/link";
import { FaHome, FaFolder, FaEnvelope, FaUser } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <nav className="relative bg-transparent text-white p-6 flex justify-around items-center z-15 rounded-b-full shadow-lg border-b-2 border-yellow-500">
      <h1 className="font-extrabold text-xl"> Giovanni LOSAT </h1>

      <Link href="/" className="flex flex-col items-center hover:text-orange-500">
        <FaHome size={15} />
        <span> Accueil </span>
      </Link>

      <Link href="/" className="flex flex-col items-center hover:text-orange-500">
        <FaHome size={15} />
        <span> Skills </span>
      </Link>

      <Link href="/projet" className="flex flex-col items-center hover:text-orange-500">
        <FaFolder size={15} />
        <span> Projet </span>
      </Link>

      <Link href="/about" className="flex flex-col items-center hover:text-orange-500">
        <FaUser size={15} />
        <span> À propos </span>
      </Link>

      <Link href="/contact" className="flex flex-col items-center hover:text-orange-500">
        <FaEnvelope size={15} />
        <span> Contact </span>
      </Link>
    </nav>
  );
}


