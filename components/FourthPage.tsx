"use client"; // <-- FIX 1: Add this

import { AnimatedPhotoShowcase } from "./AnimatedPhotoShowcase"; // Make sure path is correct

// FIX 2: Define the gymPhotos array here!
const gymPhotos = [
  {
    src: "https://placehold.co/600x400/1e293b/facc15?text=Gym+Floor",
    alt: "Photo of the main gym floor",
  },
  {
    src: "https://placehold.co/600x400/facc15/1e293b?text=Weights",
    alt: "Photo of the weightlifting area",
  },
  {
    src: "https://placehold.co/600x400/1e293b/facc15?text=Cardio",
    alt: "Photo of the cardio equipment",
  },
  {
    src: "https://placehold.co/600x400/facc15/1e293b?text=Yoga+Class",
    alt: "Photo of a yoga class in session",
  },
];

export default function MyPage() {
  return (
    <section className="bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* This will now work because gymPhotos is defined */}
          <AnimatedPhotoShowcase images={gymPhotos} />

          {/* This is the text column to fill the other grid slot */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              A Glimpse Into{" "}
              <span className="text-yellow-400">Our Facility</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Our gym is more than just equipment. It's a high-energy
              environment built to motivate. See the place where you'll build
              your legacy.
            </p>
            <div className="mt-8">
              <a
                href="#join"
                className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg uppercase hover:bg-yellow-400 transition duration-300"
              >
                Join The Family
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
