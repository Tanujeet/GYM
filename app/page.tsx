import Footer from "@/components/Footer";
import FourthPage from "@/components/FourthPage";
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
      <FourthPage />
      <ReviewPage />
      <Footer />
    </main>
  );
};

export default Page;
