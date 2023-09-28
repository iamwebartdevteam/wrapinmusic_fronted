import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <section class="thankyousec py-5">
        <div class="container">
          <div class="row justify-content-evenly">
            <div class="col-md-11">
              <div class="thnkbx text-center">
                <div class="thnkimg">
                  <img src="assets/images/email.png" />
                </div>
                <h1>Thank You!</h1>
                <h4 class="pb-2">
                  Your Order <span>#4561238234</span> has been placed
                </h4>
                <p>
                  We sent an email to{" "}
                  <a href="mailto:info@demo.com">info@demo.com</a> with your
                  order confirmation and reciept. If the email hasn't arrived
                  within two minutes. Please check your spam folder to see if
                  the email was routed there.
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <h5 class="mb-4">Order List</h5>
              <div class="grp_sec">
                <div class="img_sec border_prt">
                  <img src="assets/images/music.png" />
                </div>
                <div class="song_item border_prt">
                  <h5>Alan Walker - Faded</h5>
                  <p>#415642534780</p>
                </div>
                <div class="border_prt">
                  <p>$1.99</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="right_sec">
                <h5 class="mb-4">Order Summary</h5>
                <div class="list_sec">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                  </ul>
                </div>
                <div class="total_sec">
                  <ul>
                    <li>Total</li>
                    <li>$8.63</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="btnprt text-center mt-5">
                <Link to="/songs" class="ms_btn">
                  Back to Song
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
