import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Astro_Messages = ({ setNewMessage1, response, handleSetMessages, requests, userID, socket, handleAcceptRequest, handleRejectRequest, messages, acceptedrequest }) => {

  const [newMessage, setNewMessage] = useState([]);
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const astrologerId = response;
  console.log(messages);
  console.log(requests);
  console.log(currentChatUser);
 

  useEffect(() => {

    socket.on('loadChats', (data) => {
      // setChats(data.chats);
      console.log(data.chats);
      handleSetMessages(data.chats)
    });

    return () => {

      socket.off('loadChats');

    };
  }, [currentChatUser])


  const handleSendMessage = () => {
    if (newMessage.trim() && currentChatUser) {
      console.log(currentChatUser);
      const roomId = currentChatUser;
      const userId = roomId.split("-")[0];
      console.log(userId);
      console.log(roomId)
      const message = {
        from: astrologerId,
        to: userId,
        message: newMessage,
        roomId: roomId
      };

      // Emit the message to the server
      console.log("checking");
      // setChats([...chats, message]);
      socket.emit('sendMessage', message);
      setNewMessage1(message)

      // Update the local state with the new message
      // setNewMessage1(message)
      // handleSetMessages(message);
      setNewMessage('');
    }
  };

  const handleUserClick = (roomId) => {
    socket.emit('acceptChat',userID);
    console.log(roomId)
    socket.emit('existChat', { roomId })
    setCurrentChatUser(roomId);
    // socket.emit('join', { type: 'astrologer', astrologerId }, () => {
    //   console.log('emit');
    // });

  };

  return (
    <div className=''>
      <div className='border-b-2 w-full'>

        <div className="astrologer-chat-container ml-10">
          <h2>Chat Requests</h2>
          <div className="requests-list mb-4">
            {requests.map((request, index) => (
              <div key={index} className="request-item border p-4 rounded-md mb-2 w-96">
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
        </div>
      </div>
      <div className='flex mt-10'>
        <div className='w-2/5 h-screen bg-slate-500'>
          <h2>Users</h2>
          <ul>
            {
              acceptedrequest.map((chat, index) => (
                <li
                  key={index}
                  className='p-2 cursor-pointer hover:bg-gray-300'
                  onClick={() => handleUserClick(chat.roomId)}
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
                  {messages.length > 0 && messages.map((msg, index) => (
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