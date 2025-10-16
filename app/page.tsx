import Homepage from "@/components/Homepage";
import Navbar from "@/components/navbar";
import Secondpage from "@/components/secondpage";
import Thirdpage from "@/components/thirdpage";

const Page = () => {
  return (
    <main className="bg-gray-700">
      <Navbar />
      <Homepage />
      <Secondpage />
      <Thirdpage />
    </main>
  );
};

export default Page;
