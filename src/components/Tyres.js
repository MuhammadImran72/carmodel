import React from "react";
import Form from "react-bootstrap/Form";

export default function Tyres({ tyres }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          {tyres.map((tyre) => (
            <div className="col-lg-4 col-md-6 mb-4" key={tyre.id}>
              <div className="outermintyrebox">
                <img
                  src={tyre.brandImg?.src || "fallback-image.jpg"} // ✅ Prevents errors
                  className="brandtyreimage"
                  alt={tyre.tyreImage?.alt || "No Image"}
                />

                <div className="toptyrebox">
                  <img
                    src={tyre.tyreImage || "fallback-tyre.jpg"} // ✅ Fallback image
                    className="brandtyreimage"
                    alt={tyre.tyremodelname}
                  />
                </div>

                <div className="bottomtyre">
                  <h3>{tyre.tyremodelname}</h3>
                  <p>{tyre.tyreregister}</p>
                </div>

                <div className="pricebox">
                  <h2>{tyre.typreprice}</h2>
                  <span>{tyre.tyreinfo}</span>
                </div>

                <div className="slectoptionsbox">
                  <Form.Select aria-label="Select tyre quantity">
                    {tyre.quantityPrices?.map((option, index) => (
                      <option key={index} value={option.quantity}>
                        {option.quantity} tyre{option.quantity > 1 ? "s" : ""} (
                        {option.price})
                      </option>
                    )) || <option>No options available</option>} {/* ✅ Handles missing quantityPrices */}
                  </Form.Select>
                  <button className="butbtn">Buy</button>
                </div>

                <div className="ordernowbox">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <span className="orderinfo">
                    Order <strong>now</strong> to fit tomorrow
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
