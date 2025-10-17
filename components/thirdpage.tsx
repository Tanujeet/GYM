import { Instagram, Facebook } from "lucide-react";
const Thirdpage = () => {
  const trainers = [
    {
      image: "https://placehold.co/600x400/1e293b/facc15?text=Alex",
      name: "Alex Morgan",
      specialty: "Strength & Conditioning",
      bio: "With over 10 years of experience, Alex specializes in helping clients build functional strength and achieve peak physical performance.",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      image: "https://placehold.co/600x400/1e293b/facc15?text=Jess",
      name: "Jessica Carter",
      specialty: "Yoga & Flexibility",
      bio: "Jess is a certified yoga instructor who believes in the power of mind-body connection for a healthier, more balanced life.",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      image: "https://placehold.co/600x400/1e293b/facc15?text=Mike",
      name: "Mike Anderson",
      specialty: "HIIT & Cardio",
      bio: "Mike's high-energy classes are designed to push your limits, burn calories, and improve your cardiovascular health.",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="bg-slate-900 text-white antialiased">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Meet Our <span className="text-amber-400">Expert Trainers</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our certified and experienced trainers are here to guide you,
            motivate you, and help you crush your fitness goals.
          </p>
        </div>

        {/* Trainers List with Alternating Layout */}
        <div className="mt-16 space-y-16">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left lg:gap-12 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:w-5/12 flex-shrink-0">
                <img
                  src={trainer.image}
                  alt={`Portrait of ${trainer.name}`}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-slate-900/70"
                />
              </div>

              {/* Details */}
              <div className="lg:w-7/12">
                <p className="text-md font-semibold text-amber-400 tracking-wider">
                  {trainer.specialty}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  {trainer.name}
                </h3>
                <p className="text-slate-400 mt-4 text-lg">{trainer.bio}</p>

                <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                  <a
                    href={trainer.social.twitter}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a
                    href={trainer.social.instagram}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thirdpage;
