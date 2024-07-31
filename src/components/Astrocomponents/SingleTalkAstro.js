import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import RatingsCard from "./RatingsCard";
import "./SingleAstro.css";

const SingleTalkAstro = () => {
  const { slug} = useParams();
  console.log(slug);
  const [astrologer, setAstrologer] = useState({});
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://astrobackend.onrender.com/api/astrologer/${slug}`
      );

      setAstrologer(response.data.Data);
    };
    fetchData();
  }, [slug]);

 

 

  const qualifications = [
    "CA Inter (Group I)",
    "Member of the Indian Council for Astrological Sciences",
    "Expert in Vedic Astrology (Parashara method)",
    "Practices Prashnam, Jaimini System of Astrology, Muhurtha Fixing, Numerology, Horoscope Matching and Medical Astrology",
  ];

  const ratingData = {
    overallRating: 4.3,
    totalReviews: 150,
    ratingBreakdown: [
      { stars: 5, count: 90 },
      { stars: 4, count: 30 },
      { stars: 3, count: 15 },
      { stars: 2, count: 10 },
      { stars: 1, count: 5 },
    ],
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
                ₹{astrologer.talkPrice}/min
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
             
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto mt-6 rounded-md p-6">
        <h1 className="text-center text-4xl font-semibold">
          About <span className="text-[#f6c300]">{astrologer.firstName}</span>
        </h1>
        <p className="text-gray-700 text-base mt-2">{astrologer.about}</p>
        <h1 className="text-xl font-semibold mt-4">Qualifications</h1>
        <ul className="list-disc list-inside text-gray-700 text-base mt-2">
          {qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
      </div>
      <div className="w-full mx-auto mt-6 rounded-md p-6">
        <RatingsCard ratingData={ratingData} />
      </div>

    
    </div>
  );
};

export default SingleTalkAstro;
