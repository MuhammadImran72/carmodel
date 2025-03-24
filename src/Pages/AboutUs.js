import AboutCTA from "../components/AboutCTA";
import AboutFaqs from "../components/AboutFaqs";
import AboutIntroSec from "../components/AboutIntroSec";
import WhyChooseUs from "../components/WhyChooseUs";
import Aboutintroimage from "../images/OurCommitment.png";
export default function AboutUs() {
  return (
    <>
      <section className="aboutusbanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="commonbannerbox">
                <h5> CLM Tyres </h5>
                <h1>Trusted Mobile Tyre Fitting</h1>
                <p>
                  CLM Tyres is your trusted mobile tyre fitting service
                  provider. We ensure quick and reliable tyre replacement
                  services across London and the UK. Choose from our large
                  selection of new tyres, from budget-friendly options to
                  premium brands, ensuring safety and performance for all
                  vehicles. With our convenient mobile service, we come to
                  you—at home, work, or on the roadside.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutIntroSec />

      <AboutCTA />

      <section className="commonhomepagespacetopandbottom  mobilereserve">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <img
                src={Aboutintroimage}
                alt="  Ceo’s Message"
                className="img-fluid ceoimage "
              />
            </div>
            <div className="col-lg-6">
              <div className="ceobox">
                <h3> Our Commitment to Quality</h3>

                <p>
                  At CLM Tyres, we prioritize safety and reliability. Every tyre
                  we supply meets UK safety standards, ensuring you get durable
                  and roadworthy tyres. Our experienced fitters provide
                  professional installation, balancing, and advice on
                  maintaining your tyres for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <AboutFaqs />
    </>
  );
}
