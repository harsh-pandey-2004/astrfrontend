import React, { useState, useEffect } from "react";
import Sidebar from "./astroDash/astrodashcom/Sidebar";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Profile from "./astroDash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./astroDash/Stats";
import MailPage from "./astroDash/MailPage";
import axios from "axios";
import Astro_Messages from "./astroDash/Astro_Messages";
import Settings from "./astroDash/Settings";
import BankDetailsForm from "./astroDash/BankDetailsForm";
import Performance from "./astroDash/Performance";
import AstroSchedule from "./astroDash/AstroSchedule";


function MainDashAstro() {
  const [response, setResponse] = useState([]);
  const { id } = useParams(); // Destructuring id from useParams

  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/astrologer/${id}`);
        console.log(a.data.Data);
        setResponse(a.data.Data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col min-h-fit outline ">
      <div className="flex flex-grow  relative overflow-hidden top-24 lg:top-0">
        <Sidebar response={response} />
        <div className="h-full md:w-4/5 w-full overflow-y-auto">
          <Routes>
            {/* Redirect to profile as the default route */}
            <Route path="/" element={<Navigate to="profile"/>} />
            <Route path="profile" element={<Profile response={response}/>}/>
            {/* <Route path="schedule" element={<Schedule />} /> */}
            {/* <Route path="stats" element={<Stats />} /> */}
           <Route path="chats" element={<Astro_Messages/>}/>
            <Route path="mail" element={<MailPage response={response}/>}/>
            <Route path="schedule" element={<AstroSchedule/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="bank" element={<BankDetailsForm/>}/>
            <Route path="performance" element={<Performance/>}/>
            
          </Routes>
        </div>
      </div>
      {/* <footer className="md:hidden bg-white text-white py-4 mt-8 text-center "></footer> */}
    </div>
  );
}

export default MainDashAstro;
