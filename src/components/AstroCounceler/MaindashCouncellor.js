import Sidebar from "./councellordash/dashcomponents/Sidebar";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "./councellordash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./councellordash/Stats";
import MailPage from "./councellordash/MailPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function MaindashCouncellor() {
  const [response, setResponse] = useState([]);
  const  slug  = useParams();
  console.log(slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/astroCouncelor/${slug.id}`);
        console.log(a.data.Data);
        setResponse(a.data.Data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div className="md:flex  relative overflow-hidden top-24 lg:top-0">
      
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

export default MaindashCouncellor;
