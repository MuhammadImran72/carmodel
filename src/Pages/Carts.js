import Checkoutprod from "../images/checkoutprodut.png";

import { RxCrossCircled } from "react-icons/rx";
import WhelAligments from "../images/wheelaligment.png";
export default function Carts() {
  return (
    <section className="commonhomepagespacetopandbottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commonheadingyellow spacebtm">
              <h3>Cart</h3>
              <p> Review items in My Basket</p>
            </div>
          </div>
        </div>

        <div className="row  cartsspaceee">
          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Product</h5>
              <img
                src={Checkoutprod}
                alt="  Ceo’s Message"
                className="img-fluid ceoimage "
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Product Info</h5>

              <p> Aspire XP</p>
              <p> 205/40 R18 Y (86) </p>
              <p> Car Tyre - Reinforced</p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Price per Tyre</h5>
              <p> $ 208.72</p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Quantity</h5>
              <div class="arrowSelect">
                <select class="custom-select custom-select-lg" id="select">
                  <option selected>Select Tyres Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               
                </select>
                <span class="upArrow" id="upArrow">
                  <i class="fa fa-angle-up"></i>
                </span>
                <span class="downArrow" id="downArrow">
                  <i class="fa fa-angle-down"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Remove this item</h5>

              <button className="crossbtnss">
                <RxCrossCircled size={30} />{" "}
              </button>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cartproductinfo">
              <h5> Total Amount</h5>
              <p> $ 208.72</p>
            </div>
          </div>
        </div>

        <div className="row  cartsspaceee ">
          <div className="col-lg-12">
            <div className="commonheading spacebtm">
              <h3> Do you need any additional services? </h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-9">
            <div className="otherservices">
              <div className="wheelbox">
                <h5>Wheel Alignment </h5>

                <p> £35.00</p>
              </div>

              <div className="wheelprice">
                <img
                  src={WhelAligments}
                  alt=" Wheel Aligments"
                  className="img-fluid ceoimage "
                />
                <p>
                  {" "}
                  The simple act of banging a kerb or hitting a pothole can skew
                  your wheel alignment. Poorly aligned wheels result in
                  irregular and accelerated tyre wear and can affect the
                  handling and safety of your vehicle.
                </p>
                <button className="addmoreservices"> Addd </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <button className="addmoreservices"> Checkout </button>
          </div>
        </div>
      </div>
    </section>
  );
}
