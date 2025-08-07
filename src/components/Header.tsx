import React from "react";
import { profile } from "../data/config";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">{profile.name}</div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:text-primary">Sobre mí</a>
          <a href="#projects" className="hover:text-primary">Proyectos</a>
          <a href="#skills" className="hover:text-primary">Habilidades</a>
          <a href="#contact" className="hover:text-primary">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
