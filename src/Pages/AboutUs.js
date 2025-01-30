import AboutIntroSec from "../components/AboutIntroSec";
import Faqs from "../components/Faqs";
import History from "../components/History";
import TeamMembers from "../components/TeamMembers";

export default function AboutUs() {
  return (
    <>
      <section className="aboutusbanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="commonbannerbox">
                <h1>About Us </h1>
                <p>
                  We’re an established local business offering a drive in and an
                  internet booking service. You don’t pay online, just place
                  your booking and you’ll be able to select a date to come in
                  and have your tyres fitted and make a payment in the normal
                  way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <AboutIntroSec />
      <TeamMembers />
        <History />
        <Faqs />
        
    
    </>
  );
}
