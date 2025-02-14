import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { responsive } from "../components/kundalicomponents/Data";
import { useNavigate, useLocation } from "react-router-dom";
const Bookpoojasub = () => {
  const [hideoffer, sethideOffer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");
  const [counters, setCounters] = useState({
    pujas: 0,
    pandits: 0,
    cities: 0,
  });
  const temple = location.state?.temple;
  const pandit = temple.pandit || [];
  // console.log(pandit);
  console.log(temple);
  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }
  const pandits = [
    {
      id: 1,
      name: "Pandit A",
      imageUrl:
        "https://th.bing.com/th/id/OIP.09gvlDxSK1fq1XMLUqXwzQHaFj?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Pandit B",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2020/08/1597716876_pandit-jasraj.jpg",
    },
    {
      id: 3,
      name: "Pandit B",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2020/08/1597716876_pandit-jasraj.jpg",
    },
    {
      id: 4,
      name: "Pandit B",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2020/08/1597716876_pandit-jasraj.jpg",
    },
    {
      id: 3,
      name: "Pandit C",
      imageUrl:
        "https://www.indiahallabol.com/wp-content/uploads/2015/12/PanditJi.jpg",
    },
    // Add more pandits as needed
  ];
  useEffect(() => {
    const finalCounters = {
      pujas: 7000,
      pandits: 2000,
      cities: 30,
    };

    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        pujas:
          prevCounters.pujas < finalCounters.pujas
            ? prevCounters.pujas + 100
            : finalCounters.pujas,
        pandits:
          prevCounters.pandits < finalCounters.pandits
            ? prevCounters.pandits + 10
            : finalCounters.pandits,
        cities:
          prevCounters.cities < finalCounters.cities
            ? prevCounters.cities + 1
            : finalCounters.cities,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`${
        !hideoffer ? "h-[80vh] realtive overflow-hidden" : "h-fit pb-12"
      } relative top-32 lg:top-0`}
    >
      <div
        className={`container mx-auto px-4 py-8 relative ${
          !hideoffer ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-5 items-center mt-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {temple && temple.name}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {temple.description}
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="aspect-w-16 aspect-h-9">
              <img



                src={temple.img}
                alt="temple"
                className="object-cover rounded-lg shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <h2 className="text-3xl">Benefits:</h2>
          <div>
            <p className="text-lg">Protection and Relief From</p>
            <div className="flex flex-col">
              <span>• Anxiety and Stress</span>
              <span>• Availabilty of money</span>
              <span>• Happiness</span>
            </div>
          </div>
          <div className="flex justify-between my-5">
            <h1 className="text-4xl font-sans font-normal uppercase">
              Pricing:
            </h1>
            <div className="flex flex-col gap-2 items-center sm:gap-3 md:gap-4">
              <p className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-center">
                📣 Discount will be applied on basis of earlier Booking
              </p>
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#f6c003] font-semibold">
                ₹ {temple.price}/-
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-center text-4xl">Stats</h1>
            <p className="text-center text-2xl text-gray-400 mb-3">
              Details about full updated Stats
            </p>
          </div>
        </div>

        <section className=" py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
              <div className="flex justify-center">
                <div className="countdown-box">
                  <div className="countdown-number-circle  text-white">
                    <img
                      src="https://www.smartpuja.com/img/home/countdown/smartpuja-puja-and-homas-performed.svg"
                      alt="pujas and homas performed"
                      className="block mx-auto w-[70%] bg-cover"
                      width="57"
                    />
                    <p className="text-center font-bold text-lg text-black">
                      {counters.pujas.toLocaleString()}+
                    </p>
                  </div>
                  <p className="text-center mt-4">Visits per Month</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="countdown-box">
                  <div className="countdown-number-circle  text-white">
                    <img
                      src="https://www.smartpuja.com/img/home/countdown/samrt-total-pandits.svg"
                      alt="Pandits and Purohits"
                      className="block mx-auto w-[70%] bg-cover"
                      width="83"
                    />
                    <p className="text-center font-bold text-lg text-black">
                      {counters.pandits.toLocaleString()}+
                    </p>
                  </div>
                  <p className="text-center mt-4">Pandits and Purohits</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="countdown-box">
                  <div className="countdown-number-circle  text-white">
                    <img
                      src="https://www.smartpuja.com/img/home/countdown/smartpuja-total-unique-services.svg"
                      alt="Cities and More"
                      className="block mx-auto w-[70%] bg-cover"
                      width="80"
                    />
                    <p className="text-center font-bold text-lg text-black">
                      #{counters.cities.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-center mt-4">Ranking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full mt-8">
          <h1 className="text-4xl font-bold mb-4 md:text-center">
            Pandits Here
          </h1>
          <Carousel
            showDots={myVariable}
            removeArrowOnDeviceType={["mobile"]}
            responsive={responsive}
            className="mt-8   relative"
          >
            {
              <motion.div
                key={pandit.id} // Add a unique key for each element in the array
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="Carousel flex flex-col items-center rounded-full overflow-hidden border relative  md:h-56 md:w-56 sm:h-36 sm:w-36 border-b-4  shadow-md hover:shadow-lg  gap-3 justify-center"
              >
                <img
                  src="https://images.pexels.com/photos/18555644/pexels-photo-18555644.jpeg?cs=srgb&dl=pexels-santosh-bhagat-164427997-18555644.jpg&fm=jpg"
                  height={100}
                  width={100}
                  className="self-center rounded-full h-full w-full"
                />
                <div className="absolute bottom-0 shadow-bg w-full items-center justify-center py-4">
                  <p className="text-center text-sm font-semibold">
                    {pandit.name}
                  </p>
                </div>
              </motion.div>
            }
          </Carousel>
        </div>
      </div>
      <div
        className={`absolute lg:top-72 lg:right-1/4  top-32 mx-auto left-1/5 md:top-64${
          hideoffer ? "block" : "hidden"
        }`}
      >
        <div
          className={`w-full h-fit mx-auto border-2 rounded-lg bg-white relative ${
            !hideoffer ? "block" : "hidden"
          }`}
        >
          {/* ///pop-up */}
          <p
            className="absolute right-10 top-5 font-sans font-semibold cursor-pointer"
            onClick={() => sethideOffer(!hideoffer)}
          >
            X
          </p>
          <div className="w-20 h-20 absolute left-4">
            <img
              src="https://th.bing.com/th/id/R.13ba389d75392a92835e7c68b70acc5a?rik=%2fPINe%2f6Uy0prgA&riu=http%3a%2f%2fwww.atomtechsoft.com%2fimages%2fatomtechsoftbundaloffer.gif&ehk=CqNZhNuCLkrpE5itcbTmGA4M5%2fVlByuSzvd5RtPUE4w%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full"
            ></img>
          </div>
          <div className="py-7 px-5">
            <h1 className="text-center text-lg mt-2 mb-5 font-semibold">
              GET DISCOUNTS ON EARLIER
            </h1>
            <div className="lg:flex justify-between grid-cols-2 grid">
              <div className="flex flex-col gap-2 items-center border-r-2 px-5">
                <span className="p-5 border-2 rounded-full bg-[#f6c003] text-white">
                  10%
                </span>
                <p>1+ month Booking</p>
              </div>
              <div className="flex flex-col gap-2 items-center border-r-2 px-5">
                <span className="p-5 border-2 rounded-full bg-[#f6c003] text-white">
                  8%
                </span>
                <p>15+ month Booking</p>
              </div>
              <div className="flex flex-col gap-2 items-center border-r-2 px-5">
                <span className="p-5 border-2 rounded-full bg-[#f6c003] text-white">
                  5%
                </span>
                <p>15 days Booking</p>
              </div>
              <div className="flex flex-col gap-2 items-center border-r-2 px-5">
                <span className="p-5 border-2 rounded-full bg-[#f6c003] text-white">
                  3%
                </span>
                <p>Any Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 mx-auto my-auto ">
        <button
          className="px-6 py-3  bg-[#f6c003] text-white uppercase w-40 mx-auto rounded hover:box-shadow1 hover:-translate-y-1"
          onClick={() => navigate("/pooja-booking")}
        >
          <span className=" flex gap-2">
            ૐ <span>Book Now</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Bookpoojasub;
