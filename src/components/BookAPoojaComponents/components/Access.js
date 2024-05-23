import React from "react";
import logo from "./assets/location.png";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Access = () => {
  const [location, setLocation] = useState(false);

  function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
      setLocation(true);
    } else {
      const coordinates = JSON.parse(localCoordinates);
      console.log(coordinates);
    }
  }

  function getLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert.send("Location not Found");
    }

    setLocation(false);
  }

  function showPosition(position) {
    console.log(position);

    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      city: position.city
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  }

  useEffect(() => {
    sessionStorage.clear();
    getfromSessionStorage();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={`${
        location
          ? " flex flex-col items-center justify-center  border-2 border-[#f1d980] rounded-md px-4 py-4  bg-[#fff] text-black "
          : "hidden "
      }`}
    >
      <img src={logo} width="40" height="40" loading="lazy" />
      <p className="text-sm ">Grant Location Access</p>
      <p className="text-sm ">Allow Access to get Nearby Temple Information</p>
      <button
        className=" border border-[#f1d980] rounded-md px-4  bg-[#f1d980]  mt-4"
        onClick={() => {
          getLocation();
        }}
      >
        Grant Access
      </button>
    </motion.div>
  );
};

export default Access;
