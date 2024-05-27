import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const BookPanditForm = () => {
  const { poojaId, panditId, time, date } = useParams();
  const [formData, setFormData] = useState({
    poojaName: "",
    panditName: "",
    Day: "",
    Time: "",
    MaterialRequired: false,
    TotalPrice: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,

     

      panditName: panditId,
      poojaName: poojaId,
      Day: date,
      Time: time,
      PanditId: "6653477bc7147eaa4a1c3d59",
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      let a = await axios.post(
        "http://localhost:3000/api/bookPandit/user-deatils/6641cad19e2a39f948f0a8b0",
        formData
      );
      console.log(a, "Book Pandit Done");
    } catch (error) {
      console.log("ERROR :", error);
    }
  };
useEffect(()=>{
  window.scrollTo(0,0)
})
  return (
    <div
      className="min-h-screen relative  top-20 lg:top-0 py-10 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1625072290979-cac544181be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="max-w-xl w-full p-6 shadow-bg1 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
          Book a Pooja
        </h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-bg1 p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Pooja Name
            </label>
            <input
              type="text"
              name="poojaName"
              value={poojaId}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Enter Pooja Name"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Pandit Name
            </label>
            <input
              type="text"
              name="panditName"
              value={panditId}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Enter Pandit Name"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Day
            </label>
            <input
              type="text"
              name="day"
              value={date}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Enter Day"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Time
            </label>
            <input
              type="text"
              name="time"
              value={time}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Enter Time"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center text-gray-200">
              <input
                type="checkbox"
                name="MaterialRequired"
                checked={formData.MaterialRequired}
                onChange={handleChange}
                className="form-checkbox text-blue-600 border-gray-300 rounded focus:ring-blue-600 "
              />
              <span className="ml-2">Materials Required</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Pricing
            </label>
            <select
              name="TotalPrice"
              value={formData.TotalPrice}
              onChange={handleChange}
              className="border border-yellow-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-yellow-600"
            >
              <option value="">Select Pricing</option>
              <option value="5000">5000</option>
              <option value="8000">8000</option>
              <option value="12000">12000</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-400  rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-200"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookPanditForm;
