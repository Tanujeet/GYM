"use client";

const Navbar = () => {
  const navlinks = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "Team", href: "team" },
    { label: "Reviews", href: "reviews" },
  ];

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className="p-5 bg-black text-white fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div>
            <p className="text-2xl font-bold">Fitness 24</p>
          </div>

          <div className="flex gap-10">
            {navlinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="hover:text-gray-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
