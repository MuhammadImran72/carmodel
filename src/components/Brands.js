import autogrip from "../images/autogrip-logo.webp";
import gtradial from "../images/gt-radial-logo.webp";
import runway from "../images/runway-logo.webp";
import michelinbrand from "../images/michelin-logo-brand.webp";
import falkenbrand from "../images/falken-logo-brand.webp";

export default function Brands() {
  return (
    <section className="commonhomepagespacetopandbottom brandsmainbox">
      <div className="container">
        <div className="brandmainheading">
          <h3>Tyre Brands</h3>
        </div>

        <div
          id="imageSlider"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={autogrip} className="img-fluid" alt="Autogrip" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={gtradial} className="img-fluid" alt="GTradial" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={runway} className="img-fluid" alt="Runway" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={michelinbrand} className="img-fluid" alt="Michelin" />
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={michelinbrand} className="img-fluid" alt="Michelin" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={falkenbrand} className="img-fluid" alt="Falken" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={autogrip} className="img-fluid" alt="Autogrip" />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <img src={michelinbrand} className="img-fluid" alt="Michelin" />
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
         
        </div>
      </div>
    </section>
  );
}
