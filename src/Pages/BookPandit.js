import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import PanditTestimonial from "../components/BookaPanditComponents/PanditTestimonial";
import ResponseCard from "../components/BookaPanditComponents/ResponseCard";
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
  const [filterData, setfilterData] = useState([]);
  const handleChange = ({ name, target }) => {
    setResponse({ ...response, [name]: target });
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
      const response1 = await axios.get(
        "http://localhost:3000/api/panditpooja"
      );
      const filteredData = response1.data.data.filter(
        (e) =>
          e.availability.date.includes(formattedDate) &&
          e.city === response.location &&
          e.Skills.includes(response.nameOfPooja)
      );

      setfilterData(filteredData);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
      } 
       flex flex-col bg-white gap-5 relative top-20 lg:top-0 lg:pt-5 pt-10 py-20 w-full`}
    >
      <h1 className="text-3xl text-center font-sans font-bold md:text-4xl text-[#f6c003] mb-2">
        Book a Pandit
      </h1>
      <p className="text-lg text-center font-sans font-medium text-[#f1d980] md:text-xl mb-5">
        Filter by price, location, and type of Pooja
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-[80%] mx-auto gap-4">
        <input
          placeholder="Enter Pooja Name"
          name="nameOfPooja"
          className="p-3 rounded border-2 border-gray-300 outline-none shadow-sm w-full lg:w-1/4"
          onChange={(e) =>
            handleChange({ name: e.target.name, target: e.target.value })
          }
          value={response.nameOfPooja}
        ></input>
        <select
          className="p-3 rounded border-2 border-gray-300 outline-none shadow-sm w-full lg:w-1/4"
          name="location"
          onChange={(e) =>
            handleChange({ name: e.target.name, target: e.target.value })
          }
          value={response.location}
        >
          {indianStatesAndUTs.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <DatePicker
          className="p-3 rounded border-2 border-gray-300 outline-none shadow-sm w-full lg:w-full"
          placeholderText="Select a Date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          value={selectedDate}
        />
        <button onClick={handleClick}>Click</button>
      </div>
      <div className=" w-[95%] lg:w-[80%] mx-auto ">
        <ResponseCard filterData={filterData && filterData} />
      </div>
      <div className=" w-[95%] lg:w-[80%] mx-auto ">
        <PanditTestimonial />
      </div>
    </div>
  );
};

export default BookPandit;
