import React, { useState } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useNavigate } from "react-router-dom";
import { MESSAGE } from "../schemas/Validation";

const MessagePlacePage = () => {
  const navigate = useNavigate();
  const [miniut, setMiniut] = useState("");
  const [secound, setSecound] = useState("");
  const [position, setPosition] = useState("");
  const inputHandaler = () => {
    if (!miniut || !secound || !position) {
      MESSAGE("Please choose data");
    }
    const reqObj = {
      duration: miniut + ":" + secound,
      add_position: position,
    };
    console.log("reeqObj", reqObj);

    localStorage.setItem("_messagePalace", JSON.stringify(reqObj));
  };
  const desabel = !miniut || !secound || !position;
  console.log("desabel", desabel);
  console.log(miniut);
  return (
    <>
      <InnerBanner />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form">
              <h3 className="headingC">Custom message Placement</h3>
              <div class="form-group text-center">
                <input
                  onChange={(e) => setPosition("start")}
                  id="c1"
                  type="radio"
                  name="chk"
                />
                <label for="c1"> At the Start</label>
              </div>
              <div class="form-group">
                <input
                  id="c2"
                  type="radio"
                  onChange={(e) => setPosition("end")}
                  name="chk"
                />
                <label for="c2" className="ms-">
                  At the End
                </label>
              </div>
              <div class="form-group">
                <label>Minutes</label>
                <input
                  type="text"
                  placeholder="Enter Hare"
                  class="form-control"
                  onChange={(e) => setMiniut(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Seconds</label>
                <input
                  type="text"
                  onChange={(e) => setSecound(e.target.value)}
                  placeholder="Enter Hare"
                  class="form-control"
                />
              </div>

              <div class="pro-form-btn text-center marger_top15">
                {desabel ? (
                  <Link onClick={inputHandaler} class="ms_btn">
                    Submit
                  </Link>
                ) : (
                  <Link
                    onClick={inputHandaler}
                    to="/order-details"
                    class="ms_btn"
                  >
                    Submit
                  </Link>
                )}
                {/* <Link
                  onClick={inputHandaler}
                  to="/order-details"
                  class="ms_btn"
                >
                  Submit
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePlacePage;
