import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';


// const socket = io('http://localhost:3000/user-namespace');

const Astro_Messages = ({response,handleSetMessages,activeChat,requests,userID,socket,handleAcceptRequest,handleRejectRequest,messages }) => {
  // const [requests, setRequests] = useState([]);
  // const [userID,setUserId]=useState('');
  // const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  // const [messages, setMessages] = useState([]);
  const astrologerId = response;
 
 
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
  // }, []);


  // const handleAcceptRequest = (request) => {
  //   console.log(request);
  //   setActiveChat(request);
  //   console.log(requests)
  //   setRequests((prevRequests) => prevRequests.filter((req) => req.userId !== request.userId));
  //   setUserId(request.userId);
  //   const initialMessage = {
  //     from: request.userId,
  //     to: astrologerId,
  //     message: request.message,
  //   };

  //   // Emit event to notify the user that the chat request was accepted
  //   socket.emit('acceptChat', { userId: request.userId, astrologerId });
  //   console.log(request.message)
  //   setMessages((prevMessages) => [...prevMessages, initialMessage]);
  // };

  // const handleRejectRequest = (request) => {
  //   setRequests((prevRequests) => prevRequests.filter((req) => req.userId !== request.userId));

  //   // Emit event to notify the user that the chat request was rejected
  //   socket.emit('rejectChat', { userId: request.userId });
  // };

  const handleSendMessage = () => {
    if (newMessage.trim() && activeChat) {
      console.log(requests)
      const roomId=`${userID}-${astrologerId}`;
      console.log(roomId)
      const message = {
        from: astrologerId,
        to: activeChat.userId,
        message: newMessage,
        roomId:roomId
      };

      // Emit the message to the server
      console.log("checking");
      socket.emit('sendMessage', message);

      // Update the local state with the new message
      // setMessages((prevMessages) => [...prevMessages, message]);
      handleSetMessages(message);
      setNewMessage('');
    }
  };


  return (
    // <div className='w-full h-screen  '>
    //   <div className="sm:relative top-20  fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 ">
    //       <div className="bg-black p-4 rounded-lg shadow-lg relative h-[31rem] sm:h-[30rem] border-4 border-[#f6c300] sm:w-1/2 text-white w-full">
            
    //         <div>
    //           <h4>Chats</h4>
    //         </div>
    //         <div className=" flex flex-col p-4">
    //           <div className="flex items-center space-x-4 mb-4 border-b-2 pb-4 border-b-[#f6c300]">
    //             <img
    //               src="https://placehold.co/40x40"
    //               alt="User profile picture"
    //               className="rounded-full"
    //             />
    //             <div>
    //               <h2 className="text-lg font-semibold">
    //                 {astrologer.firstName + " " + astrologer.lastName}
    //               </h2>
    //               <p className="text-sm text-[var(--muted-foreground)]">-
    //                 {`${new Date().getDate()}/${
    //                   new Date().getMonth() + 1
    //                 }/${new Date().getFullYear()}`}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="bg-black p-4 rounded-lg shadow-lg relative h-[31rem] sm:h-[30rem] border-4 border-[#f6c300] sm:w-1/2 text-white w-full">
    //         <Link
    //           to={`/astrologerdashboard/${id}`}
    //           className="absolute top-5 right-5 text-white hover:text-gray-100"
    //         >
    //           ✕
    //         </Link>
    //         <div>
    //           <h4>All Messages</h4>
    //         </div>
    //         <div className=" flex flex-col p-4">
    //           <div className="flex items-center space-x-4 mb-4 border-b-2 pb-4 border-b-[#f6c300]">
    //             <img
    //               src="https://placehold.co/40x40"
    //               alt="User profile picture"
    //               className="rounded-full"
    //             />
    //             <div>
    //               <h2 className="text-lg font-semibold">
    //                 {astrologer.firstName + " " + astrologer.lastName}
    //               </h2>
    //               <p className="text-sm text-[var(--muted-foreground)]">-
    //                 {`${new Date().getDate()}/${
    //                   new Date().getMonth() + 1
    //                 }/${new Date().getFullYear()}`}
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex flex-col space-y-4   overflow-y-scroll   h-[38vh] scrollbar ">
    //             <div className="self-start bg-[#f6c300] rounded-full px-4 py-2 max-w-xs">
    //               Hi Prasanna! What's up?
    //             </div>
    //             <div className="self-end bg-white text-black  rounded-full px-4 py-2 max-w-xs">
    //               Good, Thx, how r u?
    //             </div>
    //           </div>

    //           <div className="flex items-center space-x-4 mt-4 w-full absolute bottom-5 left-0 px-5">
    //             <input
    //               type="text"
    //               placeholder="type here..."
    //               className="flex-1 border-[#f6c300] border-2 bg-transparent rounded-full px-4 py-2 placeholder:text-[#f6c300] outline-none"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
                    
    //     {showRequestPopup && requestData && (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
    //       <div className="bg-black p-4 rounded-lg shadow-lg relative h-[15rem] w-[20rem] border-4 border-[#f6c300] text-white">
    //         <button
    //           className="absolute top-5 right-5 text-white hover:text-gray-100"
    //           onClick={() => setShowRequestPopup(false)}
    //         >
    //           ✕
    //         </button>
    //         <div className="flex flex-col p-4">
    //           <h2 className="text-lg font-semibold mb-2">
    //             Message Request from {requestData.userName}
    //           </h2>
    //           <p>{requestData.message}</p>
    //           <div className="flex justify-between mt-4">
    //             <button
    //               onClick={handleAcceptRequest}
    //               className="bg-[#f6c300] rounded-full px-4 py-2"
    //             >
    //               Accept
    //             </button>
    //             <button
    //               onClick={handleRejectRequest}
    //               className="bg-red-600 rounded-full px-4 py-2"
    //             >
    //               Reject
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     )}              
    // </div>
    <div className="astrologer-chat-container">
      <h2>Chat Requests</h2>
      <div className="requests-list mb-4">
        {requests.map((request, index) => (
          <div key={index} className="request-item border p-4 rounded-md mb-2">
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

      {activeChat && (
        <div className="active-chat">
          <h2>Chat with {activeChat.userName}</h2>
          <div className="chat-messages bg-white p-4 border rounded-md">
            <div className="flex flex-col space-y-4 h-[20rem] overflow-auto mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === astrologerId ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-2 rounded-md ${msg.from === astrologerId ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'}`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Astro_Messages