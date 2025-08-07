import React from "react";
import { profile } from "../data/config";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-extrabold">
          {profile.name}
        </motion.h1>
        <p className="mt-2 text-xl text-slate-600">{profile.title}</p>
        <p className="mt-6 text-slate-700">{profile.bio}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href={profile.contact.linkedIn} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded hover:bg-primary hover:text-white">LinkedIn</a>
          <a href={`mailto:${profile.contact.email}`} className="px-4 py-2 border rounded hover:bg-accent hover:text-white">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
