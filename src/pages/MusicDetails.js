import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useNavigate } from "react-router-dom";
import { IMG } from "../api/constant";
import * as API from "../api/index";
import { MESSAGE } from "../schemas/Validation";
const MusicDetails = () => {
  const navigate = useNavigate();
  const messgeData = JSON.parse(localStorage.getItem("_messagePalace"));
  const voiceData = JSON.parse(localStorage.getItem("_voiceData"));
  const musicData = JSON.parse(localStorage.getItem("__musicData"));
  const songAmount = JSON.parse(musicData.song_amount);
  const extraAmount = voiceData.add_amount;
  const orderProduct = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        song_id: musicData.song_id,
        registration_id: localStorage.getItem("__userId"),
        amount:
          extraAmount === ""
            ? songAmount
            : songAmount + JSON.parse(voiceData.add_amount),
        is_ownscript: voiceData.chooseTab,
        script_id: voiceData.scriptId,
        add_position: messgeData.add_position,
        duration: messgeData.duration,
        music_file: voiceData.recordMess,
      };
      console.log("reqObj", reqObj);
      const response = await API.add_order(reqObj, header);
      console.log("response0", response);
      if (response.data.success === 1) {
        MESSAGE("");
        window.open(response.data.data.url, "_self");
        // navigate(response.data.data.url);
      }
    } catch (error) {}
  };

  const payment = (url) => {
    console.log("url", url);
    <Link to={url} onClick={true} target="_blank"></Link>;
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* <InnerBanner /> */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form songDetais">
              <h3 className="headingC">Song Order</h3>
              <div className="justify-content-center row justify-content-evenly">
                <div className="col-md-4">
                  <img
                    src={IMG + musicData.image}
                    className="w-100 musiDetImg"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="musicheading">{musicData.title}</h2>
                  <strong className="musicPrice">
                    Price : $
                    {extraAmount === ""
                      ? songAmount
                      : songAmount + JSON.parse(voiceData.add_amount)}
                    :00
                  </strong>
                  <span className="ownMusic">
                    Record Message : <i class="bi bi-music-note-beamed"></i>
                  </span>
                  <p>{musicData.decription}</p>
                  <div class="marger_top15 pro-form-btn text-left text-start">
                    <Link onClick={orderProduct} class="ms_btn m-0">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicDetails;
