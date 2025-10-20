"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

type ImageProp = {
  src: string;
  alt: string;
};

const gymPhotos: ImageProp[] = [
  {
    src: "https://placehold.co/800x600/111827/facc15?text=Main+Floor",
    alt: "Spacious main floor with modern equipment",
  },
  {
    src: "https://placehold.co/800x600/111827/facc15?text=Cardio+Zone",
    alt: "Dedicated cardio zone with treadmills and bikes",
  },
  {
    src: "https://placehold.co/800x600/111827/facc15?text=Weight+Area",
    alt: "Free weights and strength training area",
  },
  {
    src: "https://placehold.co/800x600/111827/facc15?text=Yoga+Studio",
    alt: "Calm and serene yoga and stretching studio",
  },
];

const gymLocation = {
  name: "Fitness24 Gym",
  address: "Gomti Nagar, Lucknow, Uttar Pradesh",

  query: "Fitness24%20Gym%20Gomti%20Nagar%20Lucknow",
};

const ImageCarousel = ({ images }: { images: ImageProp[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute h-full w-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            width={42}
            height={42}
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-full object-cover"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-amber-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const LocationMap = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${gymLocation.query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${gymLocation.query}`;

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400">
        Visit Us
      </h2>
      <div className="flex items-center mt-4 text-slate-300">
        <MapPin className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" />
        <p>{gymLocation.address}</p>
      </div>
      <div className="relative mt-6 flex-grow w-full min-h-[300px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label={`Get directions to ${gymLocation.name}`}
        >
          <p className="text-xl font-bold text-white">Get Directions</p>
          <ArrowRight className="w-8 h-8 mt-2 text-amber-400" />
        </a>
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src={mapEmbedUrl}
          title={`Map of ${gymLocation.name}`}
        ></iframe>
      </div>
    </div>
  );
};

export default function FindUsPage() {
  return (
    <main
      className="bg-slate-900 min-h-screen text-white antialiased"
      id="gallery"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Something About <span className=" text-amber-400 mb-12">Us</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full">
            <ImageCarousel images={gymPhotos} />
          </div>

          <div className="w-full">
            <LocationMap />
          </div>
        </div>
      </div>
    </main>
  );
}
