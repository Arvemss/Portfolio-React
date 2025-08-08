import React from "react";
import { projects } from "../data/config";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Proyectos</h2>
        <div className="mt-4 grid gap-4">
          {projects.map((p) => (
            <article key={p.name} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="text-sm text-slate-500">{p.tech.join(" · ")}</div>
              </div>
              <p className="mt-2 text-slate-700">{p.description}</p>
              <div className="mt-3 flex gap-2">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded hover:bg-primary hover:text-white">Demo</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded hover:bg-accent hover:text-white">Repo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
