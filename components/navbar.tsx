"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedMenuIconProps {
  isOpen: boolean;
  toggle: () => void;
}

interface NavLink {
  label: string;
  href: string;
}

const AnimatedMenuIcon: React.FC<AnimatedMenuIconProps> = ({
  isOpen,
  toggle,
}) => {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <button
      onClick={toggle}
      className="w-8 h-8 relative focus:outline-none z-50"
      aria-label="Toggle menu"
    >
      <motion.span
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-0.5 w-full bg-white transform"
        style={{ top: "25%" }}
      />
      <motion.span
        variants={middleVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-0.5 w-full bg-white transform"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      />
      <motion.span
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-0.5 w-full bg-white transform"
        style={{ bottom: "25%" }}
      />
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navlinks: NavLink[] = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "Team", href: "team" },
    { label: "Reviews", href: "reviews" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = navlinks.map((link) =>
        document.getElementById(link.href)
      );
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollObserver);
    return () => window.removeEventListener("scroll", handleScrollObserver);
  }, [navlinks]);

  return (
    <>
      <header className="bg-slate-900/80 backdrop-blur-lg fixed top-0 z-50 w-full border-b border-slate-700/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a
              href="#home"
              onClick={() => handleScroll("home")}
              className="text-2xl font-bold text-white tracking-wider"
            >
              Fitness<span className="text-amber-400">24</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navlinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-amber-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <AnimatedMenuIcon
                isOpen={isMenuOpen}
                toggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center"
          >
            <ul className="text-center space-y-8">
              {navlinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className={`text-4xl font-semibold transition-colors duration-300 ${
                      activeSection === link.href
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-amber-400"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
