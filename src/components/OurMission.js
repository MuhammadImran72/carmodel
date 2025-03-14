import Aboutintroimage from "../images/homeourmission.png";
export default function OurMission() {
  return (
    <section className="commonhomepagespacetopandbottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ceobox">
              <h3> Our Mission</h3>

              <p>
              At CLM Tyres, our mission is simple: to offer fast, convenient, and affordable mobile tyre fitting services for drivers across the UK. We’re dedicated to delivering top-notch tyre solutions with exceptional customer service—whether you’re stuck on the roadside or just need a routine tyre replacement at home or work.
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
