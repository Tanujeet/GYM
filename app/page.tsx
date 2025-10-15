import Homepage from "@/components/Homepage";
import Navbar from "@/components/navbar";
import Secondpage from "@/components/secondpage";

const Page = () => {
  return (
    <main className="bg-gray-700">
      <Navbar />
      <Homepage />
      <Secondpage />
    </main>
  );
};

export default Page;
