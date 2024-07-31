import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import RatingsCard from "./RatingsCard";
import "./SingleAstro.css";
import { io } from 'socket.io-client';

const SingleAstro = () => {
  const { id } = useParams();
  const [astrologer, setAstrologer] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [userId, setUserId] = useState(null);

  const socket = io('/user-namespace', {
    auth: {
      token: astrologer._id,
    },
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('loadChats', (data) => {
      setMessages(data.chats);
    });

    socket.on('loadNewChat', (data) => {
      if (astrologer._id === data.receiver_id && currentChat === data.sender_id) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    return () => {
      socket.off('connect');
      socket.off('loadChats');
      socket.off('loadNewChat');
    };
  }, [currentChat, astrologer._id]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://astrobackend.onrender.com/api/astrologer/${id}`
      );
      console.log(response.data.Data);
      setAstrologer(response.data.Data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [isPopupOpen]);

  const handleChatNowClick = () => {
    setIsPopupOpen(true);
    setCurrentChat(astrologer._id);
    socket.emit('joinRoom', { userId, astrologerId: astrologer._id });
    socket.emit('existChat', { sender_id: userId, receiver_id: astrologer._id });
    console.log(`User connected to astrologer with ID: ${astrologer._id} and user ID: ${userId}`);
    console.log(`isPopupOpen: ${isPopupOpen}`);  // Debug log
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    console.log(`isPopupOpen: ${isPopupOpen}`);  // Debug log
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('/save-chat', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       sender_id: userId,
  //       receiver_id: currentChat,
  //       message: newMessage,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setMessages((prevMessages) => [...prevMessages, data.data]);
  //         setNewMessage('');
  //         socket.emit('newChat', data.data);
  //       } else {
  //         alert(data.msg);
  //       }
  //     })
  //     .catch((error) => console.error('Error:', error));
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/save-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender_id: userId,
          receiver_id: currentChat,
          message: newMessage,
        }),
      });
  
      if (!response.ok) {
        // If the response is not ok, log the error
        const errorText = await response.text();
        console.error('Error:', errorText);
        return;
      }
  
      const data = await response.json();
      if (data.success) {
        setMessages((prevMessages) => [...prevMessages, data.data]);
        setNewMessage('');
        socket.emit('newChat', data.data);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="mb-12">
      <div
        className={`rounded-md w-full mx-auto flex lg:flex-row flex-col gap-12 p-6 items-center relative justify-between pt-24 lg:pb-16 lg:pt-40 bg-gradient-to-b from-orange-200 to-[#f6c300]`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-5">
          <div className="flex flex-col items-center justify-center gap-1">
            <img
              src={astrologer.image}
              height={250}
              width={250}
              className="bg-gray-200 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center w-full">
            <p className="text-2xl font-semibold text-center lg:text-start">
              {astrologer.firstName} {astrologer.lastName}
            </p>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 text-lg">
                <span className="text-lg font-semibold pr-3">Skills:</span>
                {astrologer.Skills}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="text-lg font-semibold pr-3">Language:</span>
                {astrologer.languages}
              </p>
              <p className="flex items-center text-lg font-semibold text-gray-700">
                Rating:
                <span className="text-yellow-300 flex pl-3">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span>
              </p>
              <p className="text-lg text-gray-700 font-bold ">
                ₹{astrologer.chatPrice}/min
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 justify-center">
          <div className="flex items-center justify-between sm:justify-center">
            <div className="flex flex-col items-center justify-center border-r border-black py-6 sm:pr-8 pr-3">
              <p className="font-bold text-xl">{astrologer.experience}</p>
              <p className="text-gray-700 text-lg">years of exp</p>
            </div>
            <p className="flex gap-1 flex-col sm:px-8 items-center border-black py-7 text-gray-700 text-lg px-3">
              <RiMessage2Fill />
              37K mins
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              className="border rounded-md bg-black text-white px-12 py-2 hover:text-[#f6c300] hover:-translate-y-1 transition-all"
              onClick={handleChatNowClick}
            >
              Chat Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto mt-6 rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Qualifications:</h1>
        <ul className="list-disc list-inside text-lg">
          <li>CA Inter (Group I)</li>
          <li>Member of the Indian Council for Astrological Sciences</li>
          <li>Expert in Vedic Astrology (Parashara method)</li>
          <li>Practices Prashnam, Jaimini System of Astrology, Muhurtha Fixing, Numerology, Horoscope Matching and Medical Astrology</li>
        </ul>
      </div>
      <div className="max-w-full mx-auto mt-6 rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Ratings and Reviews:</h1>
        <RatingsCard ratingData={{
          overallRating: 4.3,
          totalReviews: 150,
          ratingBreakdown: [
            { stars: 5, count: 90 },
            { stars: 4, count: 30 },
            { stars: 3, count: 15 },
            { stars: 2, count: 10 },
            { stars: 1, count: 5 },
          ],
        }} />
      </div>

      {isPopupOpen && (
        <div className="sm:absolute fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 sm:-top-[60rem] -top-0">
          <div className="bg-black p-4 rounded-lg shadow-lg relative h-[31rem] sm:h-[30rem] border-4 border-[#f6c300] sm:w-1/2 text-white w-full">
            <button
              className="absolute top-5 right-5 text-white hover:text-gray-100"
              onClick={handleClosePopup}
            >
              ✕
            </button>
            <div className="flex flex-col p-4">
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
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {`${new Date().getDate()}/${
                      new Date().getMonth() + 1
                    }/${new Date().getFullYear()}`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 overflow-y-scroll h-[38vh] scrollbar">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`self-${msg.sender_id === userId ? 'end' : 'start'} ${msg.sender_id === userId ? 'bg-white text-black' : 'bg-[#f6c300]'} rounded-full px-4 py-2 max-w-xs`}
                  >
                    {msg.message}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 w-full absolute bottom-5 left-0 px-5">
              <input
                type="text"
                placeholder="type here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border-[#f6c300] border-2 bg-transparent rounded-full px-4 py-2 placeholder:text-[#f6c300] outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#f6c300] rounded-full px-4 py-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAstro;
