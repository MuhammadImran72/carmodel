import HeroSection from "../components/HeroSection";
import TyresCompany from "../components/TyresCompany";
import History from "../components/History";
import Faqs from "../components/Faqs";
import OurMission from "../components/OurMission";
import ImageSlider from "../components/ImageSlider";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurMission />

      <ImageSlider />
      <TyresCompany />
      <History />
      <Faqs />
      {/* <VehicleDataShow /> */}
      
    </div>
  );
}
