import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 text-sm text-slate-600 text-center">
        © {new Date().getFullYear()} Arnaldo Velis — Frontend Developer
      </div>
    </footer>
  );
};

export default Footer;
