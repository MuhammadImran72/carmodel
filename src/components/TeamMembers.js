import Teamperson1 from "../images/teammember1.png";
import Teamperson2 from "../images/person2.png";
import Teamperson3 from "../images/person3.png";
export default function TeamMembers() {
  return (
    <section className="commonhomepagespacetopandbottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commonheading spacebtm">
              <h3> Our Team Members</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="teammemberouterbox">
              <div className="teampersonimagebox">
                <div className="skewbox">
                <img
                  src={Teamperson1}
                  alt="  Ceo’s Message"
                  className="img-fluid ceoimage "
                />
                </div>
               
              </div>
              <div className="teaminfo">
              <h2>Name </h2>
              <p> Designation</p>
              </div>

            
            </div>
          </div>
          <div className="col-lg-4">
            <div className="teammemberouterbox">
              <div className="teampersonimagebox">
                <div className="skewbox">
                <img
                  src={Teamperson2}
                  alt="  Ceo’s Message"
                  className="img-fluid ceoimage "
                />
                </div>
               
              </div>
              <div className="teaminfo">
              <h2>Name </h2>
              <p> Designation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="teammemberouterbox">
              <div className="teampersonimagebox">
                <div className="skewbox">
                <img
                  src={Teamperson3}
                  alt="  Ceo’s Message"
                  className="img-fluid ceoimage "
                />
                </div>
               
              </div>
              <div className="teaminfo">
              <h2>Name </h2>
              <p> Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
