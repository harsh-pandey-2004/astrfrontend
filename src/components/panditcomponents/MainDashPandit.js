import React, { useEffect, useState } from "react";
import Sidebar from "./PanditDash/panditdashcomponents/Sidebar";
import { Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import Profile from "./PanditDash/Profile";
import Stats from "./PanditDash/Stats";
import MailPage from "./PanditDash/MailPage";
import axios from "axios";
import PanditSchedule from "./PanditDash/PanditSchedule";
import BankDetailsForm from "./PanditDash/BankDetailsForm";


function MainPanditDash(){
  const [response, setResponse] = useState([]);
  const location = useLocation();
  // const slug = location.pathname.split('/').pop();
  const {id}=useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await axios.get(`https://astrobackend.onrender.com/api/panditdata/${id}`);
        console.log(a.data.panditData);
        setResponse(a.data.panditData);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="flex flex-col min-h-fit outline ">
      <div className="flex flex-grow relative overflow-hidden top-24 lg:top-0">
        <Sidebar response={response} />
        <div className="h-full md:w-4/5 w-full overflow-y-auto">
          <Routes>
            {/* Redirect to profile as the default route */}
            <Route path="/" element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile response={response} />} />
            <Route path="schedule" element={<PanditSchedule />} />
            <Route path="panditbank" element={<BankDetailsForm/>}/>
            <Route path="stats" element={<Stats />} />
            <Route path="mail" element={<MailPage response={response} />} />
          </Routes>
        </div>
      </div>
      <footer className="md:hidden bg-white text-white py-4 mt-8 text-center"></footer>
    </div>
  );
}

export default MainPanditDash;
