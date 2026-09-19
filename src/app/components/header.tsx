"use client";

import { useState } from "react";
import { IoDownload } from "react-icons/io5";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mi", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Cursos", href: "#courses" },
  { label: "Contacto", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-border/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <a
          href="/Ramiro_Mauricio_Cuellar_Curriculum.pdf"
          download="Ramiro_Mauricio_Cuellar_Curriculum.pdf"
          className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
        >
          <IoDownload size={16} />
          Curriculum
        </a>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-base/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Ramiro_Mauricio_Cuellar_Curriculum.pdf"
              download="Ramiro_Mauricio_Cuellar_Curriculum.pdf"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              <IoDownload size={16} />
              Descargar Curriculum
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
