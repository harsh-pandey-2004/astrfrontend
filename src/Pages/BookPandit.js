import React, { useEffect, useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { SearchLogo } from "../icons/icons";
import Testimonials from "../components/BookAPoojaComponents/components/Testimonials";
import Stat from "../components/BookAPoojaComponents/components/Stat";
import Workflow from "../components/BookAPoojaComponents/components/Workflow";
import Destinations from "../components/BookAPoojaComponents/components/Destinations";
import Preference from "../components/BookAPoojaComponents/components/Preference";
import Header from "../components/BookAPoojaComponents/components/Header";
import ResponseCard from "../components/BookaPanditComponents/ResponseCard";
import Vedio3 from "../vedios/panditpagebg.mp4";
import axios from "axios";
import Workflow1 from "../components/BookAPoojaComponents/components/Workflow1";
import UpcomingEvents from "../components/BookAPoojaComponents/components/UpcomingEvents";
// import Stats from "./VastuPage/Stats";
import BookPanditStat from "../components/BookaPanditComponents/BookPanditStat/BookPanditStat";
// import Reviews from "./VastuPage/Reviews";
import BookPanditReview from "../components/BookaPanditComponents/BookPanditReview/BookPanditReview";

const indianStatesAndUTs = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const BookPandit = (props) => {
  const showblur = props.showblur;
  const [selectedDate, setSelectedDate] = useState(null);
  const [response, setResponse] = useState({ nameOfPooja: "", location: "" });
  const [filterData, setFilterData] = useState([]);
  const [pandit, setPandit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const formattedDate = selectedDate
      ? `${selectedDate.getFullYear()}/${(selectedDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`
      : null;

    if (!formattedDate || !response.nameOfPooja || !response.location) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.get(
        "https://astrobackend.onrender.com/api/panditpooja"
      );
      console.log(res);
      const filteredData = res.data.data.filter(
        (pandit) =>
          pandit.availability.date.includes(formattedDate) &&
          pandit.city === response.location &&
          pandit.Skills.includes(response.nameOfPooja)
      );
      console.log(filteredData);
      setFilterData(filteredData);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
    // AOS.init({
    //   duration: 1000,
    //   easing: 'ease-in-out',
    //   once: true,
    // });
  }, []);

  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full "
      } 
       flex flex-col bg-[#ffff]  relative top-20 lg:top-0   w-full`}
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row lg:p-16 px-5 bg-black pb-2">
          <div className="lg:w-1/2 outline sm:pt-16 pt-8 w-full">
            <h1 className="text-white text-base font-semibold pl-2 sm:text-lg w-fit ">
              Book a Pandit for Your Sacred Rituals
            </h1>
            <div className="flex flex-col gap-2 text-white pl-2 mt-6" >
              <p className="text-3xl lg:text-4xl">
                Experience Traditional Poojas
              </p>
              <p className="text-3xl lg:text-4xl">from </p>
              <p className="text-3xl lg:text-4xl">the Comfort of Your Home</p>
            </div>
            <p className="mt-6 text-gray-400 pb-6 pl-2" >
              In today's fast-paced world, finding time to visit temples for
              traditional rituals can be challenging. Our "Book a Pandit"
              service brings the spiritual experience to you, allowing you to
              partake in sacred ceremonies from the convenience of your home.
              Whether it's for personal solace, family events, or special
              occasions, you can now connect with experienced pandits who will
              guide you through authentic poojas. Choose your desired ritual,
              select a convenient time, and our pandits will perform the
              ceremonies live, ensuring you receive blessings and spiritual
              fulfillment. Embrace the tranquility and divine connection that
              comes with traditional rituals, all without the need for travel.
              Start your spiritual journey with us today and bring the divine
              blessings to your doorstep.
            </p>
          </div>

          <div className="lg:w-1/2 pt-5 lg:pt-5 relative lg:pl-10 w-full flex  justify-center" >
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <img
              src={"https://panditforpujainpune.com/wp-content/uploads/2021/04/priest-s.png"}
              alt="Temple"
              className="filter brightness-75 contrast-125 "
            />
          </div>
        </div>
        <Header />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        {/* <Preference /> */}
        <UpcomingEvents />
        <Workflow1 />
        {/* <Stat amount="22,758+" live="711" customers="45.5" type="pooja" /> */}
        <BookPanditStat
          amount="15,324+"   // Total number of bookings made
          live="120"         // Number of Pandits currently available
          customers="92.3"   // Customer satisfaction rate as a percentage
          type="pandit"      // Type of service
        />

        {/* <Reviews /> */}
        <BookPanditReview/>
      </div>
    </div>
  );
};

export default BookPandit;
