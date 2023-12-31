import React, { useState } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useNavigate } from "react-router-dom";
import { MESSAGE } from "../schemas/Validation";
import VoiceRecord from "../components/VoiceRecord";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const MessagePlacePage = () => {
  const navigate = useNavigate();
  const [miniut, setMiniut] = useState("");
  const [secound, setSecound] = useState("");
  const [position, setPosition] = useState("");
  const [voiceMessage, setVoiceMessage] = useState("");

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //console.log(base64data);
      setVoiceMessage(base64data);
    };
    const audioTag = document.querySelector("#recordAudioss");
    audioTag.appendChild(audio);
  };

  const recorderControlss = useAudioRecorder();
  const addAudioElements = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //console.log(base64data);
      setVoiceMessage(base64data);
    };
    const audioTag = document.querySelector("#recordAudio");
    audioTag.appendChild(audio);
  };
  return (
    <>
      <InnerBanner />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form">
              <h3 className="headingC">
                <i class="bi bi-music-note-beamed"></i> Just the Way You Are
              </h3>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <select className="form-control">
                    <option>--- Select ---</option>
                    <option>Use Prerecorded</option>
                    <option>Record My Own</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div class="form-groupd">
                    <AudioRecorder
                      recorderControls={recorderControls}
                      onRecordingComplete={addAudioElement}
                      audioTrackConstraints={{
                        noiseSuppression: true,
                        echoCancellation: true,
                      }}
                      downloadOnSavePress={false}
                      downloadFileExtension="mp3"
                    />
                    <div id="recordAudioss"></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <select className="form-control">
                    <option>--- Select ---</option>
                    <option>Use Prerecorded</option>
                    <option>Record My Own</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <div class="form-groups">
                    <AudioRecorder
                      recorderControls={recorderControlss}
                      onRecordingComplete={addAudioElements}
                      audioTrackConstraints={{
                        noiseSuppression: true,
                        echoCancellation: true,
                      }}
                      downloadOnSavePress={false}
                      downloadFileExtension="mp4"
                    />
                    <div id="recordAudio"></div>
                    {/* <label for="c1"> At the Start</label> */}
                  </div>
                </div>
              </div>

              <div class="pro-form-btn text-center marger_top15">
                <button class="ms_btn">Process Start</button>

                {/* <Link to="/order-details" class="ms_btn">
                  Process Start
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
