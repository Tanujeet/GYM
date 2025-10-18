"use client";

import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const navlinks = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "Team", href: "team" },
    { label: "Reviews", href: "reviews" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: <Instagram size={24} /> },
    { href: "https://facebook.com", icon: <Facebook size={24} /> },
    { href: "https://youtube.com", icon: <Youtube size={24} /> },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <a
              href="#home"
              onClick={() => handleScroll("home")}
              className="text-3xl font-bold text-white tracking-wider"
            >
              Fitness<span className="text-amber-400">24</span>
            </a>
            <p className="text-slate-400">
              Your journey to strength and wellness starts here. Join our
              community and transform your life.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navlinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-amber-400 mt-1 flex-shrink-0"
                />
                <span>
                  Vipin Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+91522400XXXX"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  +91 522 400 XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:contact@fitflex.com"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  contact@fitness24.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Fitness24 Gym. All Rights
            Reserved.
          </p>
          <button
            onClick={() => handleScroll("home")}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors duration-300"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
