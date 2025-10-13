const Homepage = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/gym-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl ml-20 text-white space-y-4">
        <h1 className="text-6xl font-extrabold leading-tight">
          Unleash <br /> Your Power
        </h1>
        <h3 className="text-2xl font-semibold text-blue-400">
          Forge Your Strength. Build Your Legacy.
        </h3>
        <p className="text-gray-300 text-lg">
          Join a community dedicated to self-improvement and discipline.
          Discover your true potential and achieve your fitness goals.
        </p>

        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Start Free Trial
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition">
            Explore Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;