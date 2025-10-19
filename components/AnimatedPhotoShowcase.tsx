"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// A simpler type for just images
type ImageProp = {
  src: string;
  alt: string;
};

export const AnimatedPhotoShowcase = ({
  images,
  autoplay = true, // Defaulting to true, as it's a "showcase"
}: {
  images: ImageProp[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      // Autoplay interval
      const interval = setInterval(handleNext, 5000); // 5-second interval
      return () => clearInterval(interval);
    }
    // Added images.length to dependency array
  }, [autoplay, images.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    // Updated container to be centered and responsive
    <div className="mx-auto max-w-lg px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      {/* This is the container from the *left* column of your original code */}
      <div className="relative h-80 w-full sm:h-96">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : images.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* The entire 2nd column for text and buttons has been removed. */}
    </div>
  );
};
