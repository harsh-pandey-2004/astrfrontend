import React from "react";
import Sidebar from "./astroDash/astrodashcom/Sidebar";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "./astroDash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./astroDash/Stats";
import MailPage from "./astroDash/MailPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Maindashastro() {
  const [response, setResponse] = useState([]);
  const slug = useParams();
  console.log(slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/astrologer/${slug.id}`);
        console.log(a.data.Data);
        setResponse(a.data.Data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow relative overflow-hidden top-24 lg:top-0">
        <Sidebar response={response} />
        <div className="h-full md:w-4/5 w-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Profile response={response} />} />
            {/* <Route path="/schedule" element={<Schedule />} /> */}
            {/* <Route path="/stats" element={<Stats />} /> */}
            <Route path="/mail" element={<MailPage response={response} />} />
          </Routes>
        </div>
      </div>
      <footer className="md:hidden bg-white text-white py-4 mt-8 text-center">
       
      </footer>
    </div>
  );
}

export default Maindashastro;
