import React from "react";
import Checkoutprod from "../images/checkoutprodut.png";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import WhelAligments from "../images/wheelaligment.png";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const [updatedQuantity, setUpdatedQuantity] = useState({});

  const handleQuantityChange = (index, quantity) => {
    setUpdatedQuantity((prevState) => ({
      ...prevState,
      [index]: quantity,
    }));
    updateQuantity(index, quantity);
  };

  return (
    <>
      <section className="commonhomepagespacetopandbottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="commonheadingyellow spacebtm">
                <h3>Cart</h3>
                <p>Review items in My Basket</p>
              </div>
            </div>
          </div>

          <div className="row cartsspaceee">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((vehicle, index) => (
                <div key={index} className="row">
                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Product</h5>
                      <img
                        src={Checkoutprod}
                        alt="Ceo’s Message"
                        className="img-fluid ceoimage"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Product Info</h5>
                      <div className="vehicleouterbox22">
                        <h3>{vehicle.VehicleDetails.Make} - {vehicle.VehicleDetails.Model}</h3>
                        <p><strong>Year:</strong> {vehicle.VehicleDetails.BuildYear}</p>
                        <p><strong>Make:</strong> {vehicle.VehicleDetails.Make}</p>
                        <p><strong>Model:</strong> {vehicle.VehicleDetails.Model}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Price per Tyre</h5>
                      <p>$208.72</p>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Quantity</h5>
                      <div className="arrowSelect">
                        <strong>Quantity:</strong>
                        <input
                          type="number"
                          value={updatedQuantity[index] || vehicle.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Remove this item</h5>
                      <button
                        className="crossbtnss"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove <RxCrossCircled size={30} />
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="cartproductinfo">
                      <h5>Total Amount</h5>
                      <p>${208.72 * (updatedQuantity[index] || vehicle.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="row cartsspaceee ">
            <div className="col-lg-12">
              <div className="commonheading spacebtm">
                <h3>Do you need any additional services?</h3>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-9">
              <div className="otherservices">
                <div className="wheelbox">
                  <h5>Wheel Alignment</h5>
                  <p>£35.00</p>
                </div>

                <div className="wheelprice">
                  <img
                    src={WhelAligments}
                    alt="Wheel Aligments"
                    className="img-fluid ceoimage"
                  />
                  <p>
                    The simple act of banging a kerb or hitting a pothole can skew
                    your wheel alignment. Poorly aligned wheels result in
                    irregular and accelerated tyre wear and can affect the
                    handling and safety of your vehicle.
                  </p>
                  <button className="addmoreservices">Add</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <button className="addmoreservices">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
