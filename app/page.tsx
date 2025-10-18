import Homepage from "@/components/Homepage";
import Navbar from "@/components/navbar";
import ReviewPage from "@/components/ReviewPage";
import Secondpage from "@/components/secondpage";
import Thirdpage from "@/components/thirdpage";

const Page = () => {
  return (
    <main className="bg-gray-700">
      <Navbar />
      <Homepage />
      <Secondpage />
      <Thirdpage />
      <ReviewPage />
    </main>
  );
};

export default Page;
