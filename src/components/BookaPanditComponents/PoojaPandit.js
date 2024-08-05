import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const PoojaPandit = () => {
  const [response, setResponse] = useState([]);
  const [responsePandit, setResponsePandit] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  async function fetchPooja() {
    let a = await axios.get(
      "https://astrobackend.onrender.com/api/PoojaDetails/Rudrabhishek Puja"
    );
    setResponse(a.data.pooja);
    console.log(a.data);
  }
  async function fetchPandit() {
    let a = await axios.get(`https://astrobackend.onrender.com/api/panditdata/${id}`);
    setResponsePandit(a.data.panditData);
  }
  useEffect(() => {
    fetchPooja();
    fetchPandit();
  }, []);
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="flex flex-col gap-20 max-w-5xl  mx-auto pt-8 mb-12   ">
      {/* Pooja Details */}
      <div className="md:flex xs:flex-col justify-between items-center w-full  pl-6">
        <div className="flex flex-col  gap-6 md:w-1/2 xs:w-full">
          <h1 className="font-bold text-4xl">
            {response && response.poojaName}
          </h1>
          <p className="font-normal text-lg text-gray-700">
            {response && response.description}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">
              Significance of {response && response.poojaName} :-
            </p>
            <div>
              <p>
                {" "}
                <span className="font-semibold">1.</span> Appeasing Lord Shiva
              </p>
              <p>
                <span className="font-semibold">2.</span> Destruction of
                Negativity
              </p>
              <p>
                <span className="font-semibold">3.</span> Prosperity and Success
              </p>
              <p>
                <span className="font-semibold">4.</span> Health and Wealth
                Being
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-1/2 ">
          <img
            src="https://wallpapercave.com/wp/wp6808310.jpg"
            className="rounded-md w-2/3 mx-auto"
          />
          <div className="flex flex-col justify-center items-center italic">
            <h2>ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।</h2>
            <h2> उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥</h2>
          </div>
        </div>
      </div>

      {/* Pandit Details */}
      <div className=" pr-4 ">
        <h1 className="font-bold text-3xl  w-full text-center ">
          Pandit Available
        </h1>
        <div className="md:flex xs:flex-col justify-between items-center w-full mt-4">
          <div className="md:w-1/2 xs:w-full flex flex-col justify-center items-center gap-6  pt-8 ">
            <div className="flex flex-col justify-center items-center gap-2 ">
              <img
                src={responsePandit.image}
                className="w-1/2 rounded-full"
              />
              <p className="text-xl  font-semibold">
                {responsePandit.firstName}
                {responsePandit.lastName}
              </p>

              <div className="w-full flex flex-col justify-center items-center  ">
                <p className=" w-1/4 flex gap-2">
                  <span className="font-medium">Exp</span> <span>:</span>{" "}
                  <span>{responsePandit.experience}years</span>
                </p>
                <p className="w-1/4  flex gap-2">
                  <span className="font-medium">Language</span>:
                  <span>
                   
                     { responsePandit.languages && responsePandit.languages.map(e=><p>{e}</p>)}
                  </span>
                </p>
                <p className="w-1/4  flex gap-2">
                  
                  <span className="font-medium">Belongsto:</span>
                  <span>{responsePandit.belongsTo}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 xs:w-full flex flex-col justify-center items-center  pt-4">
            <div className="text-xl font-semibold text-center">About</div>
            <p className="text-lg font-normal text-gray-700 px-3 py-2">
              Pandit Ramakrishna is a highly respected and renowned Hindu priest
              specializing in various Vedic rituals and ceremonies. With over 20
              years of experience in performing sacred rites, Pandit Ramakrishna
              has gained a reputation for his deep knowledge, precision, and
              dedication to his spiritual practice. His expertise in conducting
              the Rudrabhishek Puja, among other significant Hindu rituals, has
              made him a sought-after priest for those seeking to invoke the
              blessings of Lord Shiva.
            </p>
          </div>
        </div>
      </div>

      {/* Procedure */}

      <div className="">
        <h1 className="text-center font-bold text-3xl">
          Rudrabhishek Puja Procedure
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          The Vedic puja rituals use all five elements in the worshipping of
          God. For performing Rudra Abhishek at home, follow the step-by-step
          Rudra Abhishek puja procedure given below.
        </p>
        <p className="font-semibold text-xl mt-6">
          Ingredients Needed For {response && response.poojaName} :
        </p>
        <div className="flex flex-col gap-1 mt-2 text-lg text-gray-700">
          <p className=" flex  flex-col">
            {response.Ingredients &&
              response.Ingredients.map((e) => (
                <div key={e} className="flex gap-3 items-center">
                  <RxDotFilled />
                  {e}
                </div>
              ))}
          </p>
        </div>

        <div>
          <p className="font-semibold text-xl mt-6">
            The Procedure Of Rudrabhishek :
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Given below is a step-by-step guide to help devotees to Rudra
            Abhishek at home. The Rudrabhishek Mantra needs to be chanted with
            care. Then the Rudra Abhishek procedure should be followed in detail
            to get the maximum Shiv Rudrabhishek benefits.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Place Lingam so that Yoni faces North and you face the West face of
            the Lingam and look towards East. You need to sit on an Asan of
            Wool/ Kusha.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <p className="flex items-center font-semibold text-xl">
                <RxDotFilled />
                Smearing ash (Bhasma):
              </p>
              <p className="text-lg text-gray-700">
                The devotee worshipping Lord Shiva should smear holy ash on his
                forehead in three horizontal stripes - Tripundra. The stripes
                symbolize Absolute Knowledge, Purity and Penance (Yogasadhana).
              </p>
            </div>

            <div>
              <p className="flex items-center font-semibold text-xl">
                <RxDotFilled />
                Wearing Rudraksha:
              </p>
              <p className="text-lg text-gray-700">
                The devotee should wear Rudraksha beads mala while worshipping
                Lord Shiva. So it aids in absorbing the powerful vibrations,
                propelled by the frequencies of worship. This can transform our
                thought process, help to come into alignment with the Divine and
                help in attaining the intention of the worship. Rudraksha's high
                vibrations balance Chakras helping one elevate to higher
                consciousness
              </p>
            </div>

            <p className="text-lg text-gray-700 flex items-center">
              <RxDotFilled /> Water should be sprinkled over all items of Puja
              chanting and over yourself:&nbsp;
            </p>

            <div>
              <p className="text-gray-700 text-xl italic pl-12">
                'Om Apavitrah Pavitro Va Sarva Vastan Gatopi Va
              </p>
              <p className="text-gray-700 text-xl italic">
                Yah Smaret Pundari Kaksham Sa Bahya Bhyantarah{" "}
              </p>
              <p className="text-gray-700 text-xl italic pl-20">Shuchi'</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className=" w-1/4 mx-auto border rounded-md px-4  border-green-500 text-green-600 hover:bg-green-600 hover:text-white shadow-md shadow-gray-400 h-1/6 py-1"
        onClick={() =>
          navigate(
            "/poojapandit/navratri/pandit/shyamdutt/date/5-May-2024/time/12:00pm"
          )
        }
      >
        Book Now
      </button>
    </div>
  );
};

export default PoojaPandit;
