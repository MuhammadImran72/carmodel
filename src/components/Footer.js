import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import foterlogo from "../images/CLMTYRESFOOTERLOGO.webp";

export default function Footer() {
  return (
    <section className="footerouter">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={foterlogo}
              alt="CLM Tyres"
              className="img-fluid footertyrelogo"
            />
          </div>
          <div className="col-lg-2">

          </div>

          <div className="col-lg-2">
            <h3>View All Tyres</h3>
            <ul>
              <li><a href="#">Tyres online</a></li>
              <li><a href="#">4x4 Tyres</a></li>
              <li><a href="#">All season Tyres</a></li>
              <li><a href="#">Car Tyres</a></li>
              <li><a href="#">Budget Tyres</a></li>
              <li><a href="#">EV Tyres</a></li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h3>Manufactures</h3>
            <ul>
              <li><a href="#">Kumho</a></li>
              <li><a href="#">Michelin</a></li>
              <li><a href="#">Appollo</a></li>
              <li><a href="#">Bridgestone</a></li>
              <li><a href="#">Rotalla</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Popular Sizes</h3>
            <ul>
              <li><a href="#">195/55 R16</a></li>
              <li><a href="#">215/55 R17</a></li>
              <li><a href="#">225/40 R18</a></li>
              <li><a href="#">235/35 R19</a></li>
              <li><a href="#">255/35 R19</a></li>
              <li><a href="#">205/45 R17</a></li>
            </ul>
          </div>
        </div>

        <div className="row spacefooter">
          <div className="col-lg-8">
            <div className="iconsfooterboxbotoms">
              <ul>
                <li>
                  <FaPhoneAlt style={{ color: "#f5d00e", fontSize: "1.5em" }} />
                  <a href="tel:+447123456789">+44 7123 456789</a>
                </li>
                <li>
                  <FaEnvelope style={{ color: "#f5d00e", fontSize: "1.5em" }} />
                  <a href="mailto:info@tyresshope.com">info@tyresshope.com</a>
                </li>
                <li>
                  <FaPaperPlane style={{ color: "#f5d00e", fontSize: "1.5em" }} />
                  <a href="#">Unit 51 Barton Road, MK2 2BH</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="iconsfooterboxbotomsoicalicon">
              <ul>
                <li>
                  <a href="https://facebook.com" aria-label="Facebook">
                    <FaFacebookF style={{ fontSize: "1.5em" }} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" aria-label="LinkedIn">
                    <FaLinkedinIn style={{ fontSize: "1.5em" }} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <FaInstagram style={{ fontSize: "1.5em" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="iconsfooterboxbotoms">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <p>CLM • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
