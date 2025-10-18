"use client";

import React from "react";
import { motion } from "framer-motion";


const StarIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

const reviews = [
  {
    image: "https://placehold.co/100x100/fde047/1e293b?text=SD",
    name: "Sarah Daniels",
    title: "Life-Changing Results",
    review:
      "Joining this gym was the best decision I've ever made. The trainers are incredibly supportive and the community is so motivating. I've never felt stronger or more confident!",
  },
  {
    image: "https://placehold.co/100x100/fde047/1e293b?text=MJ",
    name: "Mark Johnson",
    title: "Top-Notch Facilities",
    review:
      "The equipment is state-of-the-art and always clean. I love the variety of classes offered, especially the HIIT sessions. It's a fantastic environment to achieve your fitness goals.",
  },
  {
    image: "https://placehold.co/100x100/fde047/1e293b?text=EC",
    name: "Emily Chen",
    title: "A Welcoming Community",
    review:
      "I was nervous about joining a new gym, but everyone here, from the staff to the members, has been so welcoming. It truly feels like a second home. Highly recommend!",
  },
  {
    image: "https://placehold.co/100x100/fde047/1e293b?text=JW",
    name: "John Wilson",
    title: "Achieved My Goals",
    review:
      "The personalized training plans truly made a difference. I've surpassed all my fitness goals thanks to the dedicated trainers and supportive atmosphere.",
  },
  {
    image: "https://placehold.co/100x100/fde047/1e293b?text=LV",
    name: "Linda Veras",
    title: "Amazing Classes",
    review:
      "From yoga to spinning, every class is expertly led and incredibly fun. It's easy to stay motivated when you're enjoying your workouts this much!",
  },
];

const ReviewsSection = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="bg-slate-900 text-white antialiased py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            What Our <span className="text-amber-400">Members Say</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Real stories from real people who have transformed their lives with
            us. Hear directly from our community.
          </p>
        </div>
      </div>

      <motion.div
        className="flex space-x-8 px-4 md:px-8 lg:px-12 xl:px-16" // Added padding for left/right view
        style={{
          width: `calc(350px * ${duplicatedReviews.length} + 32px * ${
            duplicatedReviews.length - 1
          })`,
        }}
        animate={{
          x: ["0%", "-100%"],
          transition: {
            x: {
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            },
          },
        }}
      >
        {duplicatedReviews.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[300px] md:w-[350px] bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 hover:border-amber-400 transition-colors duration-300 transform hover:scale-105"
            whileHover={{ y: -8 }}
            style={{ minWidth: "300px" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex space-x-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-slate-300 text-base flex-grow leading-relaxed">
                &quot;{item.review}&quot;
              </p>
              <div className="flex items-center mt-6 pt-4 border-t border-slate-700">
                <img
                  src={item.image}
                  alt={`Avatar of ${item.name}`}
                  className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">{item.name}</h4>
                  <p className="text-sm text-slate-400 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
