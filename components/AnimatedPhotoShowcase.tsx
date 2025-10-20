"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  // <-- FIX 1: Add state to check if we are on the client
  const [isClient, setIsClient] = useState(false);

  // <-- FIX 2: When component mounts, set isClient to true
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    // Make sure autoplay only runs if there are images
    if (autoplay && images.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, images.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative h-80 w-full sm:h-96">
        {/* <-- FIX 3: Only render AnimatePresence on the client --> */}
        {isClient && (
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(), // Now safe to use here
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                  unoptimized={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
