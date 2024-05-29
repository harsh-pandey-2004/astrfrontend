import Sidebar from "./PanditDash/panditdashcomponents/Sidebar";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "./PanditDash/Profile";
// import Schedule from "./PanditDash";
import Stats from "./PanditDash/Stats";
import MailPage from "./PanditDash/MailPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function MainPanditDash() {
  const [response, setResponse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`http://localhost:3000/api/panditdata/${id}`);
        console.log(a.data.panditData);
        setResponse(a.data.panditData);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex relative overflow-hidden">
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
