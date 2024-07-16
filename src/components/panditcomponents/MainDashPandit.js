import Sidebar from "./PanditDash/panditdashcomponents/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./PanditDash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./PanditDash/Stats";
import MailPage from "./PanditDash/MailPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function MainPanditDash() {
  const [response, setResponse] = useState([]);
  const location=useLocation();
  const slug=location.pathname.split('/').pop();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/panditdata/${slug}`);
        console.log(a.data.panditData);
        setResponse(a.data.panditData);
        
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div className="flex relative overflow-hidden top-24 lg:top-0">
      
      <Sidebar response={response}/>
      <div className="h-screen w-4/5">
        <Routes>
          <Route path="/" element={<Profile response={response} />} />
          {/* <Route path="/schedule" element={<Schedule />} /> */}
          {/* <Route path="/stats" element={<Stats />} /> */}
          <Route path="/mail" element={<MailPage response={response} />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPanditDash;
