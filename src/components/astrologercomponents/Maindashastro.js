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


//Socket
// import io from 'socket.io-client';
// const socket = io('https://astrobackend.onrender.com/user-namespace');




function MainDashAstro() {
  const [response, setResponse] = useState([]);
  const { id } = useParams(); // Destructuring id from useParams
  const [astrologerId,setastrologerId]=useState('');

  const [requests, setRequests] = useState([]);
  
  const [messages, setMessages] = useState([]);
  const [userID,setUserId]=useState('');
  const [activeChat, setActiveChat] = useState({});

  // console.log(requests);

  const handleAcceptRequest = async (request) => {
    const messageId=request._id;
    console.log(request);
    setRequests((prevRequests) => prevRequests.filter((req) => req.userId !== request.userId));
    setUserId(request.userId);
    const initialMessage = {
      from: request.userId,
      to: astrologerId,
      message: request.message,
    };

    // Emit event to notify the user that the chat request was accepted
    // socket.emit('acceptChat', { userId: request.userId, astrologerId,userName:request.userName });
    console.log(request.message)
    setMessages((prevMessages) => [...prevMessages, initialMessage]);
    try {
           const response = await axios.put("https://astrobackend.onrender.com/api/statusupdate",{messageId:messageId});
           console.log(response.data); 
           
         } catch (error) {
           console.log(error);
         }
  };

//   const handleAcceptRequest = async (requests) => {
//     const messageId=requests[0]._id;
//     try {
//      const response = await axios.put("https://astrobackend.onrender.com/api/statusupdate",messageId);
//      console.log(response.data); 
     
//    } catch (error) {
//      console.log(error);
//    }
//  };

  const handleRejectRequest = (request) => {
    setRequests((prevRequests) => prevRequests.filter((req) => req.userId !== request.userId));

    // Emit event to notify the user that the chat request was rejected
    // socket.emit('rejectChat', { userId: request.userId });
  };



  // const handleSetMessages=(message)=>{
  //   setMessages((prevMessages) => [...prevMessages, message]);
  // }


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        let a = await axios.get(`https://astrobackend.onrender.com/api/astrologer/${id}`);
        console.log(a.data.Data);
        setResponse(a.data.Data);
        setastrologerId(a.data.Data._id);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://astrobackend.onrender.com/api/getmessagerequestonthebasisofstatus");
  //       // console.log(response.data);
  //       setRequests(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // },[])

  useEffect(() => {
    // const astrologerId = astrologer._id;
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get("https://astrobackend.onrender.com/api/getmessagerequestonthebasisofstatus");
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    }, 500); 
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  // useEffect(() => {
  //   //Join the astrologer to a specific room
  //   socket.emit('join', { type: 'astrologer', astrologerId },()=>{
  //     console.log('emit');
  //   });

  //   // Listen for incoming chat requests
  //   socket.on('chatRequest', (data) => {
  //     setRequests((prevRequests) => [...prevRequests, data]);
  //     console.log(data);
  //   });

  //   // Listen for incoming messages in the active chat
  //   socket.on('message', (message) => {
  //     console.log(message);
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.off('chatRequest');
  //     socket.off('messageReceived');
  //   };
  // },  [astrologerId, socket]);


  return (
    <div className="flex flex-col min-h-fit outline ">
      <div className="flex flex-grow  relative overflow-hidden top-[5.6rem] lg:top-0">
        <Sidebar response={response} />
        <div className="h-full md:w-4/5 w-full overflow-y-auto">

        {/* //AcceptModal */}
        <div className="requests-list ">
        {requests.map((request, index) => (
          <div key={index} className="request-item border px-4 rounded-md mb-2">
            <p><strong>{request.userName}</strong> sent a message request</p>
            <div className="flex">
              <button
                onClick={() => handleAcceptRequest(request)}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleRejectRequest(request)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>



          <Routes>
            {/* Redirect to profile as the default route */}
            <Route path="/" element={<Navigate to="profile"/>} />
            <Route path="profile" element={<Profile response={response}/>}/>
            {/* <Route path="schedule" element={<Schedule />} /> */}
            {/* <Route path="stats" element={<Stats />} /> */}
           {/*<Route path="chats" element={<Astro_Messages response={response._id} handleSetMessages={handleSetMessages} activeChat={activeChat} requests={requests} userID={userID} socket={socket} handleAcceptRequest={handleAcceptRequest} handleRejectRequest={handleRejectRequest} messages={messages}/>}/>*/}
            <Route path="chats" element={<Astro_Messages response={response._id} requests={requests}  handleAcceptRequest={handleAcceptRequest} handleRejectRequest={handleRejectRequest} ></Astro_Messages>}/>
            <Route path="mail" element={<MailPage response={response}/>}/>
            <Route path="schedule" element={<AstroSchedule/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="bank" element={<BankDetailsForm/>}/>y
            {/* <Route path="performance" element={<Performance/>}/> */}
            
          </Routes>
        </div>
      </div>
      {/* <footer className="md:hidden bg-white text-white py-4 mt-8 text-center "></footer> */}
    </div>
  );
}

export default MainDashAstro;
