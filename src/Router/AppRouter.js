import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Song from "../pages/Song";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Category from "../pages/Category";
import AudioTrack from "../components/AudioTrack";
import WrapInMusic from "../pages/WrapInMusic";
import Testimonialss from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyAccount from "../pages/MyAccount";
import ForgotPassword from "../pages/ForgotPassword";
import CategoryDetails from "../pages/CategoryDetails";
import VoiceMess from "../pages/VoiceMess";
import MessagePlacePage from "../pages/MessagePlacePage";
import MusicDetails from "../pages/MusicDetails";
import ThankYou from "../pages/ThankYou";

import * as API from "../api/index";
import CataDetails from "../pages/CataDetails";
import Payment from "../pages/Payment";
import SongDetails from "../pages/SongDetails";
import MusicTemplete from "../pages/MusicTemplete";
const AppRouter = () => {
  const tracks = [
    {
      title: "Death Bed",
      artist: "Powfu",
      artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      id: "1",
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      id: "2",
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
      url: "https://samplesongs.netlify.app/Faded.mp3",
      id: "3",
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      id: "4",
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
      url: "https://samplesongs.netlify.app/Solo.mp3",
      id: "5",
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
      id: "6",
    },
  ];

  const [trackData, setTrackData] = useState([]);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  const singMusicPlay = (index) => {
    // setIsPlaying(true);
    // setCurrentTrack(tracks[index]);
    //setIsPlaying(true);
    //setCurrentTrack(tracks[index]);
    // setMusicIndex(index);
    // singMusicPlayTest();
    //console.log("singMusicPlay", data);
  };

  const all_musicData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_song_list(header);
      console.log("allMusic", response);
      setTrackData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    all_musicData();
  }, []);

  return (
    <>
      <Router>
        <div className="ms_main_wrapper">
          <Sidebar
            isOpen={isOpen}
            sidebarOpen={sidebarOpen}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          />
          <div
            class={
              isOpen
                ? "ms_content_wrapper padder_top80 ms_cont_left_marg"
                : "ms_content_wrapper padder_top80"
            }
          >
            <Header isOpen={isOpen} />
            {isLogin ? (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/songs/category"
                    element={<Song setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/songs/sub-category"
                    element={<Category setIsLogin={setIsLogin} />}
                  />
                  <Route path="/wrapin-music" element={<WrapInMusic />} />
                  <Route path="/testimonials" element={<Testimonialss />} />
                  <Route path="/contact-us" element={<Contact />} />

                  <Route path="/song-list" element={<CategoryDetails />} />
                  <Route path="/song-details" element={<MusicTemplete />} />
                  
                  <Route
                    path="/message-placement"
                    element={<MessagePlacePage />}
                  />
                  <Route path="/order-details" element={<MusicDetails />} />
                  <Route path="/songs-details" element={<SongDetails />} />
                  <Route path="/voice-message" element={<VoiceMess />} />
                  <Route
                    path="/thankyou"
                    element={<ThankYou setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/my-account"
                    element={<MyAccount setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/payment"
                    element={<Payment setIsLogin={setIsLogin} />}
                  />
                </Routes>
              </>
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/songs/category"
                    element={<Song setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/songs/sub-category"
                    element={<Category setIsLogin={setIsLogin} />}
                  />
                  <Route path="/wrapin-music" element={<WrapInMusic />} />
                  <Route path="/testimonials" element={<Testimonialss />} />
                  <Route path="/contact-us" element={<Contact />} />

                  <Route path="/song-list" element={<CategoryDetails />} />
                  <Route
                    path="/message-placement"
                    element={<MessagePlacePage />}
                  />
                  <Route path="/order-details" element={<MusicDetails />} />
                  <Route path="/voice-message" element={<VoiceMess />} />
                  <Route
                    path="/thankyou"
                    element={<ThankYou setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/my-account"
                    element={<MyAccount setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/signup"
                    element={<SignUp setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/login"
                    element={<Login setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPassword setIsLogin={setIsLogin} />}
                  />
                </Routes>
              </>
            )}
          </div>
        </div>
        <Footer isOpen={isOpen} />
        {/* <AudioTrack tracks={tracks} musicIndex={musicIndex} /> */}
      </Router>
    </>
  );
};

export default AppRouter;
