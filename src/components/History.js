import Brakessold from "../images/tyrsold.png";
import Oilchangenumber from "../images/oilchnage200.png";
import Btterys from "../images/battrys.png";
import Bakrefixed from "../images/brakefixed.png";
import { useEffect, useState } from "react";

export default function History() {
  const [tyresSold, setTyresSold] = useState(0);
  const [oilChanged, setOilChanged] = useState(0);
  const [batteries, setBatteries] = useState(0);
  const [brakesFixed, setBrakesFixed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyresSold((prev) => (prev < 100 ? prev + 1 : 100));
      setOilChanged((prev) => (prev < 200 ? prev + 1 : 200));
      setBatteries((prev) => (prev < 50 ? prev + 1 : 50));
      setBrakesFixed((prev) => (prev < 80 ? prev + 1 : 80));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="soldoutbox">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 yellowbox">
            <img
              src={Brakessold}
              alt="Brakes sold"
              className="img-fluid historyimage"
            />

            <h2>{tyresSold}+</h2>
            <p> Tyres Sold</p>
          </div>
          <div className="col-lg-3 blackbox">
            <img
              src={Oilchangenumber}
              alt="Oil changed"
              className="img-fluid historyimage"
            />
            <h2>{oilChanged}+</h2>
            <p> Oil Changed</p>
          </div>
          <div className="col-lg-3 yellowbox">
            <img
              src={Btterys}
              alt="Batteries sold"
              className="img-fluid historyimage"
            />
            <h2>{batteries}+</h2>
            <p> Battery</p>
          </div>
          <div className="col-lg-3 blackbox">
            <img
              src={Bakrefixed}
              alt="Brakes fixed"
              className="img-fluid historyimage"
            />
            <h2>{brakesFixed}+</h2>
            <p> Brakes Fixed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
