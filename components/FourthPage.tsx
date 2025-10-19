"use client";

import { AnimatedPhotoShowcase } from "./AnimatedPhotoShowcase"; // Make sure this path is correct

// 1. Define your images (you need this for the component)
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
    // Your section is set to text-center, which is great for mobile
    <section className="bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- COLUMN 1: YOUR PHOTO SHOWCASE --- */}
          <AnimatedPhotoShowcase images={gymPhotos} />

          {/* --- COLUMN 2: NEW TEXT CONTENT --- */}
          {/* On large screens, we align text left for a classic layout */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              A Glimpse Into{" "}
              <span className="text-yellow-400">Our Facility</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Our gym is more than just equipment. It's a high-energy
              environment built to motivate. From our spacious free-weight area
              to dedicated cardio and functional training zones, see the place
              where you'll build your legacy.
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
