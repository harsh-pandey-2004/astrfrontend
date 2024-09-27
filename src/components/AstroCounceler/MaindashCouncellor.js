import React, { useState, useEffect } from "react";
import Sidebar from "./councellordash/dashcomponents/Sidebar";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Profile from "./councellordash/Profile";
import Stats from "./councellordash/Stats";
import MailPage from "./councellordash/MailPage";
import axios from "axios";
import Settings from "./councellordash/Settings";
import BankDetailsForm from "./councellordash/BankDetailsForm";
// import CounsellorSchedule from "./councellordash/CounsellorSchedule";

function MaindashCouncellor() {
  const [response, setResponse] = useState([]);
  const { id } = useParams(); // Destructuring id from useParams

  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/astroCouncelor/${id}`);
        console.log(a.data.Data);
        setResponse(a.data.Data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow relative overflow-hidden top-24 lg:top-0">
        <Sidebar response={response} />
        <div className="h-full md:w-3/4 w-full overflow-y-auto">
          <Routes>
            {/* Redirect to profile as the default route */}
            <Route path="/" element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile response={response} />} />
            {/* <Route path="schedule" element={<CounsellorSchedule />} /> */}
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings/>}/>
            <Route path="bank" element={<BankDetailsForm/>}/>
            <Route path="mail" element={<MailPage response={response} />} />
          </Routes>
        </div>
      </div>
      <footer className="md:hidden bg-white text-black py-4 mt-8 text-center">
        {/* Footer content here */}
      </footer>
    </div>
  );
}

export default MaindashCouncellor;
