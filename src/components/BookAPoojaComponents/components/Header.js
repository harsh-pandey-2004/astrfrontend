// Header.js
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./Header.css"; // Add this line to import your custom CSS

const indianStatesAndUTs = [
  {
    value: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands",
  },
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  {
    value: "Dadra and Nagar Haveli and Daman and Diu",
    label: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { value: "Delhi", label: "Delhi" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
];

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

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [response, setResponse] = useState({ nameOfPooja: "", location: "" });
  const [filterData, setFilterData] = useState([]);
  const [isPoojaDropdownOpen, setIsPoojaDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const handleChange = (selectedOption, actionMeta) => {
    setResponse({ ...response, [actionMeta.name]: selectedOption });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
          pandit.availability.date.filter((e) => e == formattedDate) &&
          pandit.city === response.location.value &&
          pandit.Skills.includes(response.nameOfPooja.value)
      );
      console.log(filteredData);
      setFilterData(filteredData);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const togglePoojaDropdown = () => {
    setIsPoojaDropdownOpen(!isPoojaDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  return (
    <div className="bg-black py-6 w-full flex">
      <div className="w-full mx-auto px-6">
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row mx-auto">
          {/* Enter Pooja Name */}
          <div className="w-full pl-56">
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

          {/* Select State */}
          <div className="w-full">
            <div className={`select-input ${isLocationDropdownOpen ? 'is-open' : ''}`}>
              <Select
                name="location"
                options={indianStatesAndUTs}
                classNamePrefix="select-input"
                className="text-black w-full"
                placeholder="Select State"
                onChange={handleChange}
                onMenuOpen={toggleLocationDropdown}
                onMenuClose={toggleLocationDropdown}
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
            className="w-full hover:bg-[#f6c300] bg-transparent border-2 border-[#f6c300] transition-colors delay-75 text-white py-2 px-4 rounded-md text-center"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
