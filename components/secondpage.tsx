import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, HeartPulse, UserCheck, Users } from "lucide-react";
const services = [
  {
    icon: <Dumbbell className="w-10 h-10 text-amber-400" />,
    title: "Strength Training",
    description:
      "Build muscle and increase power with our state-of-the-art weights and resistance machines.",
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-amber-400" />,
    title: "Cardio Training",
    description:
      "Improve your endurance and get your heart pumping with a wide variety of cardio equipment.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-amber-400" />,
    title: "Group Classes",
    description:
      "From high-intensity Zumba to calming Yoga, find the perfect group class to match your vibe.",
  },
  {
    icon: <Users className="w-10 h-10 text-amber-400" />,
    title: "Personal Trainers",
    description:
      "Get one-on-one guidance and a personalized plan from our certified expert trainers.",
  },
];

const Secondpage = () => {
  return (
    <section id="services" className="bg-slate-900 text-white antialiased">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            We Offer Something For{" "}
            <span className="text-amber-400">Everybody</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Explore our diverse range of fitness programs designed to help you
            achieve your goals, no matter your fitness level.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-xl text-center flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <CardHeader className="flex flex-col items-center pt-8">
                <div className="bg-slate-900 p-4 rounded-full">{item.icon}</div>
                <CardTitle className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 pb-4">
                <p className="text-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secondpage;
