// Header.js
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./Header.css"; // Add this line to import your custom CSS
import { usePanditData } from "../AvailablePandit/PanditDataContext";



const poojaOptions = [
  { value: "Satyanarayan Puja", label: "Satyanarayan Puja" },
  { value: "Durga Puja", label: "Durga Puja" },
  { value: "Ganesh Puja", label: "Ganesh Puja" },
  { value: "Lakshmi Puja", label: "Lakshmi Puja" },
  { value: "Saraswati Puja", label: "Saraswati Puja" },
  { value: "Shivratri Puja", label: "Shivratri Puja" },
  { value: "Navratri Puja", label: "Navratri Puja" },
  { value: "Hanuman Puja", label: "Hanuman Puja" },
  { value: "Kali Puja", label: "Kali Puja" },
  { value: "Janmashtami Puja", label: "Janmashtami Puja" },
  { value: "Vastu Shanti Puja", label: "Vastu Shanti Puja" },
  { value: "Griha Pravesh Puja", label: "Griha Pravesh Puja" },
  { value: "Wedding Puja", label: "Wedding Puja" },
  { value: "Namkaran Puja", label: "Namkaran Puja" },
  { value: "Annaprashan Puja", label: "Annaprashan Puja" },
  { value: "Mundan Puja", label: "Mundan Puja" },
  { value: "Akshaya Tritiya Puja", label: "Akshaya Tritiya Puja" },
  { value: "Karva Chauth Puja", label: "Karva Chauth Puja" },
  { value: "Sankranti Puja", label: "Sankranti Puja" },
  { value: "Bhoomi Puja", label: "Bhoomi Puja" },
];

const pincodeOptions = [
  { value: "111111", label: "111111" },
  { value: "110002", label: "110002" },
  { value: "110003", label: "110003" },
  { value: "110004", label: "110004" },
  // Add more pincode options as needed
];

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [response, setResponse] = useState({ nameOfPooja: "", pincode: "" });
  const [filterData, setFilterData] = useState([]);
  const [isPoojaDropdownOpen, setIsPoojaDropdownOpen] = useState(false);
  const [isPincodeDropdownOpen, setIsPincodeDropdownOpen] = useState(false);
  const { setFilteredData }=usePanditData();

  const handleChange = (selectedOption, actionMeta) => {
   
   
    setResponse({ ...response, [actionMeta.name]: selectedOption });
    if(actionMeta.name==='nameOfPooja'){
      localStorage.setItem('selectedPooja',selectedOption.value);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // const formattedDate = selectedDate
    //   ? `${selectedDate.getFullYear()}/${(selectedDate.getMonth() + 1)
    //       .toString()
    //       .padStart(2, "0")}/${selectedDate
    //       .getDate()
    //       .toString()
    //       .padStart(2, "0")}`
    //   : null;
    const formattedDate = selectedDate
    ? `${selectedDate.getDate().toString().padStart(2, "0")}/${
        (selectedDate.getMonth() + 1).toString().padStart(2, "0")
      }/${selectedDate.getFullYear()}`
    : null;

    localStorage.setItem('Poojadate',formattedDate);
   
   
    // console.log(response)
    //   console.log(formattedDate);
    //   console.log(response.pincode.value)
      const pincode=response.pincode.value;
      // console.log(pincode);

     localStorage.setItem('Pincode',pincode);

    if (!formattedDate || !response.nameOfPooja || !response.pincode) {
      console.error("Please fill in all fields");
      return;
    }
    
    try {
      console.log(formattedDate);
      const res = await axios.post(
        " https://astrobackend.onrender.com/api/panditprofile",{pincode:pincode,availability:formattedDate}
      );
      // console.log(res);
      // const filteredData = res.data.data.filter(
      //   (pandit) =>
      //     pandit.availability.date.filter((e) => e == formattedDate) &&
      //     pandit.pincode === response.pincode.value &&
      //     pandit.Skills.includes(response.nameOfPooja.value)
      // );
      // console.log(filteredData);
      // setFilterData(res.data);
      console.log(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const togglePoojaDropdown = () => {
    setIsPoojaDropdownOpen(!isPoojaDropdownOpen);
  };

  const togglePincodeDropdown = () => {
    setIsPincodeDropdownOpen(!isPincodeDropdownOpen);
  };

  return (
    <div className="bg-black py-6 w-full flex">
      <div className="w-full mx-auto px-6">
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row mx-auto">
          {/* Enter Pooja Name */}
          <div className="w-full sm:pl-56">
            <div className={`select-input ${isPoojaDropdownOpen ? 'is-open' : ''}`}>
              <Select
                name="nameOfPooja"
                options={poojaOptions}
                classNamePrefix="select-input"
                className="text-black w-full"
                placeholder="Enter Pooja Name"
                onChange={handleChange}
                onMenuOpen={togglePoojaDropdown}
                onMenuClose={togglePoojaDropdown}
              />
            </div>
          </div>

          {/* Enter Pincode */}
          <div className="w-full">
            <div className={`select-input ${isPincodeDropdownOpen ? 'is-open' : ''}`}>
              <Select
                name="pincode"
                options={pincodeOptions}
                classNamePrefix="select-input"
                className="text-black w-full"
                placeholder="Enter Pincode"
                onChange={handleChange}
                onMenuOpen={togglePincodeDropdown}
                onMenuClose={togglePincodeDropdown}
              />
            </div>
          </div>

          {/* Select Date */}
          <div className="w-full">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="date-input"
              placeholderText="Select Date"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <button
            className="w-full hover:bg-[#f6c300] bg-transparent text-yellow-500 border-2 border-[#f6c300] transition-colors delay-75  py-2 px-4 rounded-md text-center hover:text-white"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        {/* <AvailablePandit data={filterData} /> */}
      </div>
    </div>
  );
};

export default Header;
