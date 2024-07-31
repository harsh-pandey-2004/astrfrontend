import Sidebar from "./astroDash/astrodashcom/Sidebar";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "./astroDash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./astroDash/Stats";
import MailPage from "./astroDash/MailPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Astro_Messages from "./astroDash/Astro_Messages";

function Maindashastro() {
  const [response, setResponse] = useState([]);
  const  slug  = useParams();
  console.log(slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/astrologer/${slug.id}`);
        // console.log(a.data.Data);
        console.log(a.data.Data);
        setResponse(a.data.Data);
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
          <Route path="profile" element={<Profile response={response} />} />
          {/* <Route path="/schedule" element={<Schedule />} /> */}
          {/* <Route path="/stats" element={<Stats />} /> */}
          <Route path="messages" element={<Astro_Messages astrologerId={response._id} />} />
          <Route path="mail" element={<MailPage response={response} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Maindashastro;
