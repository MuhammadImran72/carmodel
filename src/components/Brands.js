import autogrip from "../images/autogrip-logo.webp";
import gtradial from "../images/gt-radial-logo.webp";
import runway from "../images/runway-logo.webp";
import michelinbrand from "../images/michelin-logo-brand.webp";
import falkenbrabd from "../images/falken-logo-brand.webp";

export default function Brands() {
  return (
    <section className="commonhomepagespacetopandbottom brandsmainbox">
      <div className="container">
        <div className="commonheading spacebtm">
        <h3> Tyre Brands</h3>
        </div>
      
        <div
          id="imageSlider"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000" // Autoplay every 3 seconds
        >
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <img src={autogrip} className="d-block w-100" alt="Autogrip" />
                </div>
                <div className="col-md-3">
                  <img src={gtradial} className="d-block w-100" alt="GTradial" />
                </div>
                <div className="col-md-3">
                  <img src={runway} className="d-block w-100" alt="Runway" />
                </div>
                <div className="col-md-3">
                <img src={michelinbrand} className="d-block w-100" alt="Michelin" />
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <img src={michelinbrand} className="d-block w-100" alt="Michelin" />
                </div>
                <div className="col-md-3">
                  <img src={falkenbrabd} className="d-block w-100" alt="Falken" />
                </div>
                <div className="col-md-3">
                  <img src={autogrip} className="d-block w-100" alt="Autogrip" />
                </div>
                <div className="col-md-3">
                <img src={michelinbrand} className="d-block w-100" alt="Michelin" />
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
}
