"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour accentuer l'ombre de la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/80 border-b border-gray-200 shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo [IK] */}
        <div className="text-2xl font-black font-mono text-[var(--primary)] cursor-pointer hover:text-gray-900 transition-colors">
          [IK]
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-[var(--primary)] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Mobile */}
        <div className="md:hidden font-mono text-sm font-bold text-gray-900">
          MENU
        </div>
      </div>
    </motion.nav>
  );
}