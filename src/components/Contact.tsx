import React from "react";
import { profile } from "../data/config";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="mt-3 text-slate-700">¿Te interesa colaborar o tienes una propuesta? Escríbeme.</p>
        <div className="mt-4">
          <a href={`mailto:${profile.contact.email}`} className="px-4 py-2 border rounded hover:bg-primary hover:text-white">{profile.contact.email}</a>
        </div>
        <p className="mt-3 text-sm text-slate-500">También puedes ver mi LinkedIn: <a href={profile.contact.linkedIn} className="underline" target="_blank" rel="noreferrer">{profile.contact.linkedIn}</a></p>
      </div>
    </section>
  );
};

export default Contact;
