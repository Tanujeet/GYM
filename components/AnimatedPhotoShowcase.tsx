"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

type ImageProp = {
  src: string;
  alt: string;
};

export const AnimatedPhotoShowcase = ({
  images,
  autoplay = true,
}: {
  images: ImageProp[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // ✅ store random rotations in a ref (doesn't cause re-renders)
  const randomRotations = useRef<number[]>([]);

  useEffect(() => {
    // only generate once when component mounts or images change
    randomRotations.current = images.map(
      () => Math.floor(Math.random() * 21) - 10
    );
  }, [images]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, images.length]);

  const isActive = (index: number) => index === active;

  return (
    <div className="mx-auto max-w-lg px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative h-80 w-full sm:h-96">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotations.current[index] || 0,
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index)
                  ? 0
                  : randomRotations.current[index] || 0,
                zIndex: isActive(index) ? 40 : images.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotations.current[index] || 0,
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
    </div>
  );
};
