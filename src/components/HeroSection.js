import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { FaRegRegistered } from "react-icons/fa6";
import TireSizeForm from "./TireSizeForm";

export default function HeroSection() {

  const [regNumber, setRegNumber] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setRegNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/vehicle-info/${regNumber}`);
  };
  return (
    <section className="heroobox">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="heroright">
              
              <h1>CLM Tyres – Your Trusted Mobile Tyre Fitting Service in the UK</h1>
              <p>
              Looking for reliable mobile tyre fitting in London and the UK? CLM Tyres brings high-quality, affordable tyre solutions directly to your doorstep. Whether you need premium or cheap tyre brands, 4x4 tyres, or emergency replacements, we’re here to keep you moving safely and efficiently.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="registertabsss">
              <h2>Enter Vehicle Registration</h2>
              <Tabs defaultActiveKey="registration" id="uncontrolled-tab-example">
                <Tab eventKey="registration" title="Registration">
                  <form className="sameline" onSubmit={handleSubmit}>
                    <div className="vehicleformss input-group">
                      <span className="input-group-text">
                        <FaRegRegistered />
                      </span>
                      <input
                       type="text"
                       value={regNumber}
                       onChange={handleInputChange}
                       placeholder="Enter Registration Number"
                        className="form-control"
                       required
                     
                      />
                    </div>
                    <button type="submit" className="btn searchbtnss" >
                    Search
                    </button>
                  </form>
                {/* Display error message */}
                </Tab>
                <Tab eventKey="tyre-size" title="Tyres Size">
                  <TireSizeForm />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
