import Aboutintroimage from "../images/homeourmission.png";
export default function AboutIntroSec() {
  return (
    <section className="commonhomepagespacetopandbottom"> 
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="ceobox">
            <h3>  Ceo’s Message</h3>
               
              
                <p>At CLM Tyres, we understand that time is valuable. Our goal is to make mobile tyre fitting as seamless as possible for our customers. Whether you're at home, work, or on the roadside, our experienced team will arrive with the right tyres and tools to get you back on the road quickly and safely.
                <br></br>  We believe in quality service, competitive pricing, and customer satisfaction. Our extensive range of UK tyres, from budget-friendly options to high-performance brands, ensures we have the perfect fit for every vehicle. 
 </p>
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
