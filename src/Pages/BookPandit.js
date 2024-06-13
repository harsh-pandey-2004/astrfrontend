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
  const [filterData, setFilterData] = useState([]);

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
      const res = await axios.get("http://localhost:3000/api/panditpooja");
      console.log(res);
      const filteredData = res.data.data.filter(
        (pandit) =>
          pandit.availability.date.filter((e) => e == formattedDate) &&
          pandit.city === response.location &&
          pandit.Skills.includes(response.nameOfPooja)
      );
      console.log(filteredData);
      setFilterData(filteredData);
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
          onChange={handleChange}
          value={response.nameOfPooja}
        />
        <select
          className="p-3 rounded border-2 border-gray-300 outline-none shadow-sm w-full lg:w-1/4"
          name="location"
          onChange={handleChange}
          value={response.location}
        >
          <option value="" disabled>
            Select Location
          </option>
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
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <ResponseCard filterData={filterData} />
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <PanditTestimonial />
      </div>
    </div>
  );
};

export default BookPandit;
