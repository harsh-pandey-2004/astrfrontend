import React, { useEffect, useState } from 'react'
import {  useParams, Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from 'axios';
const Astro_Messages = ({ astrologerId }) => {
  const [astrologer, setAstrologer] = useState({});
  const {slug}=useParams();
  console.log(slug);
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState('');
  // const [currentChat, setCurrentChat] = useState(null);
  // const [userId, setUserId] = useState(null);

  // const socket = io('/user-namespace', {
  //   auth: {
  //     token: astrologerId,
  //   },
  // });

  // useEffect(() => {
  //   const storedUserId = localStorage.getItem('userId');
  //   if (storedUserId) {
  //     setUserId(storedUserId);
  //   }
  // }, []);

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Connected to server');
  //   });

  //   socket.on('loadChats', (data) => {
  //     setMessages(data.chats);
  //   });

  //   socket.on('loadNewChat', (data) => {
  //     if (astrologerId === data.receiver_id && currentChat === data.sender_id) {
  //       setMessages((prevMessages) => [...prevMessages, data]);
  //     }
  //   });

  //   return () => {
  //     socket.off('connect');
  //     socket.off('loadChats');
  //     socket.off('loadNewChat');
  //   };
  // }, [currentChat, astrologerId]); 
  // const handleJoinRoom = (userId) => {
  //   setCurrentChat(userId);
  //   socket.emit('joinRoom', { userId, astrologerId });
  //   socket.emit('existChat', { sender_id: userId, receiver_id: astrologerId });
  // }; 
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3000/api/save-chat', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         sender_id: astrologerId,
  //         receiver_id: currentChat,
  //         message: newMessage,
  //       }),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error('Error:', errorText);
  //       return;
  //     }

  //     const data = await response.json();
  //     if (data.success) {
  //       setMessages((prevMessages) => [...prevMessages, data.data]);
  //       setNewMessage('');
  //       socket.emit('newChat', data.data);
  //     } else {
  //       alert(data.msg);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }; 
  return (
    <div className='w-4/5 h-screen  '>
      <div className="sm:relative top-20  fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 ">
          <div className="bg-black p-4 rounded-lg shadow-lg relative h-[31rem] sm:h-[30rem] border-4 border-[#f6c300] sm:w-1/2 text-white w-full">
            
            <div>
              <h4>Chats</h4>
            </div>
            <div className=" flex flex-col p-4">
              <div className="flex items-center space-x-4 mb-4 border-b-2 pb-4 border-b-[#f6c300]">
                <img
                  src="https://placehold.co/40x40"
                  alt="User profile picture"
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {astrologer.firstName + " " + astrologer.lastName}
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)]">-
                    {`${new Date().getDate()}/${
                      new Date().getMonth() + 1
                    }/${new Date().getFullYear()}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black p-4 rounded-lg shadow-lg relative h-[31rem] sm:h-[30rem] border-4 border-[#f6c300] sm:w-1/2 text-white w-full">
            <Link
              to={`/astrologerdashboard/${slug}`}
              className="absolute top-5 right-5 text-white hover:text-gray-100"
            >
              ✕
            </Link>
            <div>
              <h4>All Messages</h4>
            </div>
            <div className=" flex flex-col p-4">
              <div className="flex items-center space-x-4 mb-4 border-b-2 pb-4 border-b-[#f6c300]">
                <img
                  src="https://placehold.co/40x40"
                  alt="User profile picture"
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {astrologer.firstName + " " + astrologer.lastName}
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)]">-
                    {`${new Date().getDate()}/${
                      new Date().getMonth() + 1
                    }/${new Date().getFullYear()}`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-4   overflow-y-scroll   h-[38vh] scrollbar ">
                <div className="self-start bg-[#f6c300] rounded-full px-4 py-2 max-w-xs">
                  Hi Prasanna! What's up?
                </div>
                <div className="self-end bg-white text-black  rounded-full px-4 py-2 max-w-xs">
                  Good, Thx, how r u?
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4 w-full absolute bottom-5 left-0 px-5">
                <input
                  type="text"
                  placeholder="type here..."
                  className="flex-1 border-[#f6c300] border-2 bg-transparent rounded-full px-4 py-2 placeholder:text-[#f6c300] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Astro_Messages