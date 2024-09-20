import { dividerClasses } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



// const socket = io('https://astrobackend.onrender.com/user-namespace');

// const Astro_Messages = ({ response, handleSetMessages, activeChat, requests, userID, socket, handleAcceptRequest, handleRejectRequest, messages }) => {

//   const [chats, setChats] = useState([]);
//   const [newMessage, setNewMessage] = useState([]);
//   const [currentChatUser, setCurrentChatUser] = useState(null);
//   const [pendingRequests,setPendingRequests]=useState([]);
//   const [status,setStatus]=useState(false);

//   const astrologerId = response;



//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post("http://localhost:3000/api/getastrochats", { astrologerId });
//         // console.log(response.data);
//         setChats(response.data);

//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchData();
//   })
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/getmessagerequestonthebasisofstatus");
//         // console.log(response.data);
//         setPendingRequests(response.data);


//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchData();
//   },[])

//   const handleSendMessage = () => {
//     if (newMessage.trim() && activeChat && currentChatUser) {
//       console.log(requests)
//       const roomId = `${currentChatUser.userId}-${astrologerId}`;
//       console.log(roomId)
//       const message = {
//         from: astrologerId,
//         to: currentChatUser.userId,
//         message: newMessage,
//         roomId: roomId
//       };

//       // Emit the message to the server
//       console.log("checking");

//       socket.emit('sendMessage', message);

//       // Update the local state with the new message
//       // setMessages((prevMessages) => [...prevMessages, message]);
//       handleSetMessages(message);
//       setNewMessage('');
//     }
//   };

//   const handleUserClick = (user) => {
//     setCurrentChatUser(user);
//   };


//   const currentChat = chats.find(chat => chat.userId === currentChatUser?.userId);


//   const filteredMessages = currentChat?.messages.filter(msg => 
//     (msg.from === astrologerId && msg.to === currentChatUser?.userId) || 
//     (msg.from === currentChatUser?.userId && msg.to === astrologerId)
//   ) || [];



//   return (
//     <div className=''>
//       <div className='border-b-2 w-full'>

//         <div className="astrologer-chat-container ml-10 ">
//           <h2>Chat Requests</h2>
//           <div className="requests-list mb-4">
//             {pendingRequests.map((request, index) => (
//               <div key={index} className="request-item border p-4 rounded-md mb-2 w-96">
//                 <p><strong>{request.userName}</strong> sent a message request</p>
//                 <div className="flex">
//                   <button
//                     onClick={() =>
//                       handleAcceptRequest(request)
//                     }
//                     className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleRejectRequest(request)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className='flex mt-10'>
//         <div className='w-2/5 h-screen bg-slate-500'>
//           <h2>Users</h2>
//           <ul>
//             {chats.map((chat, index) => (
//               <li
//                 key={index}
//                 className='p-2 cursor-pointer hover:bg-gray-300'
//                 onClick={() => handleUserClick(chat)}
//               >
//                 {chat.userName} {/* Display the username */}
//               </li>
//             ))}
//           </ul>

//         </div>
//         <div className='w-3/5 h-screen bg-purple-500'>
//           {currentChatUser ? (
//             <>
//               <h2>Chat with {currentChatUser.userName}</h2>
//               <div className="chat-messages bg-white p-4 border rounded-md h-[80%] overflow-auto">
//                 <div className="flex flex-col space-y-4 h-full">
//                   {filteredMessages.map((msg, index) => (
//                     <div key={index} className={`flex ${msg.from === astrologerId ? 'justify-end' : 'justify-start'}`}>
//                       <div className={`p-2 rounded-md ${msg.from === astrologerId ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//                         {msg.message}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex items-center p-4 border-t">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type your message here..."
//                   className="border rounded-md px-4 py-2 w-full"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-[#f6c300] text-black px-4 py-2 rounded-md ml-2"
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p>Select a user to start a chat</p>
//           )}
//         </div>
//       </div>


//     </div>

//   )
// }

// export default Astro_Messages

const Astro_Messages = ({ response, requests, handleAcceptRequest, handleRejectRequest }) => {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  
  const [currentChatUser, setCurrentChatUser] = useState(null);
  
  const astrologerId = response;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/api/getastrochats", { astrologerId });
  //       console.log(response);
  //       setChats(response.data);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // })
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/getastrochats", { astrologerId });
        setChats(response.data);
      } catch (error) {
        console.log(error);
      }
    }, 1000); 
  
    return () => {
      clearInterval(intervalId);
    };
  }, [astrologerId]);

  // const handleSendMessage = () => {
  //       if (newMessage.trim() && currentChatUser) {
  //         console.log(requests)
  //         const roomId = `${currentChatUser.userId}-${astrologerId}`;
  //         console.log(roomId)
  //         const message = {
  //           from: astrologerId,
  //           to: currentChatUser.userId,
  //           message: newMessage,
  //           roomId: roomId
  //         };
    
  //         // Emit the message to the server
  //         console.log("checking");
    
  //         // socket.emit('sendMessage', message);
    
  //         // Update the local state with the new message
  //         // setMessages((prevMessages) => [...prevMessages, message]);
  //         // handleSetMessages(message);
  //         setNewMessage('');
  //       }
  //     };

  const handleSendMessage = async () => {
    if (newMessage.trim() && currentChatUser) {
      console.log(requests); 
      const roomId = `${currentChatUser.userId}-${astrologerId}`;
      console.log(roomId); 
      const message = {
        from: astrologerId,
        to: currentChatUser.userId,
        message: newMessage,
        roomId: roomId,
      };
      const chatData={
        userName:currentChatUser.userName,
        roomId: roomId,
        userId: currentChatUser.userId,
        astrologerId: astrologerId,
        message:message
      }
      try {
        const response = await axios.post('http://localhost:3000/api/createchat', chatData);
        console.log('Message sent successfully:', response.data);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      console.log("Message is empty or no current chat user."); 
    }
  };


    
  const handleUserClick = (user) => {
    setCurrentChatUser(user);
  };

  const currentChat = chats.find(chat => chat.userId === currentChatUser?.userId);
  const filteredMessages = currentChat?.messages.filter(msg => 
        (msg.from === astrologerId && msg.to === currentChatUser?.userId) || 
        (msg.from === currentChatUser?.userId && msg.to === astrologerId)
      ) || [];


  return (
    <div className=''>
      <div className='border-b-2 w-full'>

        <div className="astrologer-chat-container ml-10 ">
          <h2>Chat Requests</h2>
          <div className="requests-list mb-4">
            {requests.map((request, index) => (
              <div key={index} className="request-item border p-4 rounded-md mb-2 w-96">
                <p><strong>{request.userName}</strong> sent a message request</p>
                <div className="flex">
                  <button
                    onClick={() =>
                      handleAcceptRequest(request)
                    }
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
        </div>
      </div>
      <div className='flex mt-10'>
        <div className='w-2/5 h-screen bg-slate-500'>
          <h2>Users</h2>
          <ul>
            {chats.map((chat, index) => (
              <li
                key={index}
                className='p-2 cursor-pointer hover:bg-gray-300'
                onClick={() => handleUserClick(chat)}
              >
                {chat.userName} {/* Display the username */}
              </li>
            ))}
          </ul>

        </div>
        <div className='w-3/5 h-screen bg-purple-500'>
          {currentChatUser ? (
            <>
              <h2>Chat with {currentChatUser.userName}</h2>
              <div className="chat-messages bg-white p-4 border rounded-md h-[80%] overflow-auto">
                <div className="flex flex-col space-y-4 h-full">
                  {filteredMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.from === astrologerId ? 'justify-end' : 'justify-start'}`}>
                      <div className={`p-2 rounded-md ${msg.from === astrologerId ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center p-4 border-t">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="border rounded-md px-4 py-2 w-full"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#f6c300] text-black px-4 py-2 rounded-md ml-2"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p>Select a user to start a chat</p>
          )}
        </div>
      </div>


    </div>

  )
}

export default Astro_Messages