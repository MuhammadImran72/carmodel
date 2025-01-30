import HeroSection from "../components/HeroSection";

import Brands from "../components/Brands";
import TyresCompany from "../components/TyresCompany";
import VehicleDataShow from "../components/VehicleDataShow";
import History from "../components/History";
import Faqs from "../components/Faqs";
import OurMission from "../components/OurMission";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurMission />
      
      <Brands />
      <TyresCompany />
      <History />
      <Faqs />
      <VehicleDataShow />
      
    </div>
  );
}
