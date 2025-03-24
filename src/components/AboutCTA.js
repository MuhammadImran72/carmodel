import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="ctaaboutus">
      <div className="container">
        <div className="row  ">
          <div className="col-lg-10 ">
            <div className="aboutctainner">
              <h3> Get Expert Mobile Tyre Fitting – Anytime, Anywhere!</h3>
              <p>
                {" "}
                CLM Tyres is committed to keeping you on the road with fast,
                professional mobile tyre fitting across London and the UK.
                Whether you're at home, at work, or stranded roadside, our
                skilled fitters will get you back on track. Don’t wait—book your
                tyre fitting today! Call us now or schedule an appointment
                online for a stress-free, on-the-go tyre replacement service.
              </p>
            </div>
          </div>
          <div className="col-lg-2">
          <div className="aboutctainnerright">

            <Link  className="ctabtnss"  to="/" >   CLM Tyres </Link>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
