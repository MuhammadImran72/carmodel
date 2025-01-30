import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Brands from "../components/Brands";
import TyresCompany from "../components/TyresCompany";
import VehicleDataShow from "../components/VehicleDataShow";
import History from "../components/History";
import Faqs from "../components/Faqs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Brands />
      <TyresCompany />
      <History />
      <Faqs />
      <VehicleDataShow />
      
    </div>
  );
}
