import Checkoutprod from "../images/checkoutprodut.png";
export default function CheckOut() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="commonheadingyellow spacebtm">
                <h3>Checkout</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="checkoutinfo">
                <h5> Shipping Information</h5>
                <form class="row g-3">
                  <div class="col-lg-12">
                    <label for="formGroupExampleInput" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="col-lg-12">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Enter Your E-Mail"
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label" for="form7Example6">
                      Phone
                    </label>
                    <input
                      type="number"
                      id="form7Example6"
                      class="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label">
                      Address{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">
                      City
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Zip
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="reviewboxcheckout">
                <h5> Review your cart</h5>

                <div className="productmainbox">
                  <div className="roductimage">
                    <img
                      src={Checkoutprod}
                      alt="  Ceo’s Message"
                      className="img-fluid ceoimage "
                    />
                  </div>
                  <div className="productinfo">
                    <p> Aspire XP</p>
                    <p>205/40 R18 Y (86)</p>
                    <p>Car Tyre - Reinforced</p>
                    <p> 1x</p>

                    <h6> $ 208.72</h6>
                  </div>
                </div>

                <div className="pricetotlabox">
                    <div className="totalinfo">
                        <p> Subtotal</p>
                        <p> Shipping</p>
                        <p> Discount</p>
                        <h6> Total</h6>
                    </div>
                    <div className="totalprice">
                        <p> $80.00</p>
                        <p> $5.00</p>
                        <p> -$10.00</p>
                        <p> $75.00</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
