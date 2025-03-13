import HeroSection from "../components/HeroSection";
import TyresCompany from "../components/TyresCompany";
import History from "../components/History";
import Faqs from "../components/Faqs";
import OurMission from "../components/OurMission";
import ImageSlider from "../components/ImageSlider";
import HowToBuyTyres from "../components/HowToBuyTyres";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurMission />

      <ImageSlider />
      <TyresCompany />
      <History />
   <WhyChooseUs />
      <HowToBuyTyres />
      <Faqs />
      {/* <VehicleDataShow /> */}
      
    </div>
  );
}
