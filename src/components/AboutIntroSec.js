import Aboutintroimage from "../images/aboutintro.png";
export default function AboutIntroSec() {
  return (
    <section className="commonhomepagespacetopandbottom"> 
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="ceobox">
            <h3>  Ceo’s Message</h3>
               
              
                <p>We’re an established local business offering a drive in and an internet booking service. You don’t pay online, just place your booking and you’ll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.We’re an established local business offering a drive in and an internet booking service. You don’t pay online, just place your booking and you’ll be able to select a date to come in and have your tyres fitted and make a payment in the normal way.We’re an established local business offering a drive in and an internet booking service. You don’t pay online, just place your booking and you’ll be able to select a date to come in and have your tyres fitted and make a payment in the normal way. </p>
                </div>
                
            </div>

            <div className="col-lg-6">
            <img
              src={Aboutintroimage}
              alt="  Ceo’s Message"
              className="img-fluid ceoimage "
            />
                </div>
        </div>
      </div>
    </section>
  );
}
