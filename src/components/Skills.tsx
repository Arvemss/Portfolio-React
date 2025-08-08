import React from "react";
import { skills } from "../data/config";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Habilidades</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 border rounded text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
