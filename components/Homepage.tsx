"use client";

import React from "react";
import { motion } from "framer-motion";

const Homepage: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-xl text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg font-semibold text-amber-400 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            FORGE YOUR STRENGTH. BUILD YOUR LEGACY.
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Unleash Your <br /> Inner Power
          </motion.h1>
          <motion.p
            className="text-slate-300 text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Join a community dedicated to self-improvement and discipline.
            Discover your true potential and achieve your fitness goals with us.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <button className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Explore Classes
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
