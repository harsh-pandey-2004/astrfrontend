import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VastuIndiPage = () => {
  const [response, setResponse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const fetchVastu = async () => {
      try {
        let a = await axios.get(`http://localhost:3000/api/vastu/${id}`);
        setResponse(a.data);
        console.log(a.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchVastu();
  }, [id]);

  const handleReadMoreClick = (type) => {
    navigate(`/vastuType`, { state: { type } }); // Pass data via state
  };

  return (
    <div className="w-full h-fit pb-20 relative top-24">
      {response.length > 0 &&
        response.map((e) => (
          <div key={e.name}>
            <div className="w-full  bg-contain">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-6xl mx-auto">
              <p className="text-3xl font-semibold text-[#f6c300] my-5">
                {e.name}
              </p>
              <p>{e.description}</p>
              <p className="text-3xl font-semibold text-[#f6c300] my-5">
                Myths for {e.name}
              </p>
              <p>{e.myths}</p>
            </div>
            <div className="w-full bg-[#f6c300] py-8 flex justify-center items-center mt-6">
              <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-5   px-4 lg:px-40">
                <p className="text-white text-lg md:text-4xl font-semibold mb-4 md:mb-0">
                  Connect with Our Vastu Experts
                </p>
                <div className="text-center ">
                  <button
                    className="px-8 py-3 bg-[#fff] text-[#f6c300] hover:shadow-2xl font-semibold text-lg rounded shadow-lg hover:-translate-y-1 transition-all transition-colors duration-300"
                    onClick={() => navigate("/vastupricing")}
                  >
                    Get Consultation
                  </button>
                </div>
              </div>
            </div>
            <h1 className="py-3 text-center text-4xl font-semibold">Related<span className="text-[#f6c300]"> Articles</span> </h1>
            <div className="max-w-6xl grid grid-cols-3 items-center mx-auto pb-9 gap-4">
                
              {e.types &&
                e.types.map((type) => (
                  <div
                    key={type.name}
                    className="w-full p-3 bg-white shadow-2xl rounded-lg"
                  >
                    <img
                      src={type.img}
                      alt={type.name}
                      className="w-full h-48  rounded-lg mb-2"
                    />
                    <p className="text-2xl font-semibold text-[#f6c300] my-2">
                      {type.name}
                    </p>
                    <p>{type.description.slice(0, 60)}...</p>
                    <button
                      onClick={() => handleReadMoreClick(type)}
                      className="px-8 py-2 bg-[#f6c300] text-white rounded mt-5 hover:bg-yellow-500 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default VastuIndiPage;
