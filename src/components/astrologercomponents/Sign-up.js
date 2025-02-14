import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AstrologerRegistrationForm = () => {
  const initialState = {
    name: "",
    mobile: "",
    password: "",
    // countryCode: "",
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [response, setResponse] = useState(initialState);
  const [countryCode, setCountryCode] = useState("+91");
  const navigate = useNavigate();

  function handleCountryCOde(e) {
    setCountryCode(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");
    setPhoneNumber(value);
  };

  const handleChange = (e) => {
    setResponse({ ...response, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();
    try {
      console.log({
        ...response,
        mobile: phoneNumber,
        // countrycode: countryCode,
      });
      let a = await axios.post("https://astrobackend.onrender.com/api/astrologer-register", {
        ...response,
        mobile: phoneNumber,
        // countrycode: countryCode,
      });
      navigate(`astrologerverify-phone/${phoneNumber}`)
    } catch (error) {
      console.log("Error in Fetching :", error);
    }
  };

  return (
    <div className="bg-black shadow-md rounded pb-8 mb-28 lg:w-1/2 w-[90%] mx-auto relative top-[6.8rem]  lg:top-[6rem] md:w-3/4 sm:top-32 sm:w-4/5">
      <form
        autoComplete="on"
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-bold mb-4 p-4 bg-yellow-400 text-center w-full rounded">
          Continue with Phone
        </h1>
        <div className="">
          <h6 className="text-lg text-center text-white">
            You will receive a 4 digit code <p>for verification</p>
          </h6>
        </div>
        <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
          <h6 className="text-lg font-sans text-white">Enter your Name</h6>
          <input
            type="text"
            placeholder="Enter your Name"
            className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white"
            value={response.name}
            name="name"
            onChange={handleChange}
          ></input>
        </div>

        <div className="mx-3">
          <h6 className="text-lg mb-2 font-sans text-white">Enter your phone number</h6>
          <div className="flex items-center justify-center bg-gray-700 p-3 gap-2 rounded">
            <div className="mr-2">
              <img
                src="https://aws.astrotalk.com/assets/images/in.webp"
                alt="flag"
                className="h-6 w-6"
              />
            </div>
            <select
              className="form-select bg-transparent text-white"
              value={countryCode}
              onChange={handleCountryCOde}
              name="countryCode"
            >
              <option value="+91">+91 India</option>
            </select>
            <input
              id="mobileNo"
              inputMode="numeric"
              name="mobNo"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 text-white"
              placeholder="Enter mobile no."
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>
        </div>
        <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
          <h6 className="text-lg font-sans text-white">Enter your Password</h6>
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white"
            value={response.password}
            onChange={handleChange}
            name="password"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:box-shadow1 text-black font-sans py-2 px-4 rounded-lg w-[95%] mx-auto"
        >
          GET OTP <i className="fa fa-arrow-right"></i>
        </button>
        <div className="w-full flex justify-center my-1">
          <p
            className="text-center text-yellow-400 hover:text-yellow-300 hover:underline cursor-pointer"
            onClick={() => navigate("/loginPandit")}
          >
            Already have Account?
          </p>
        </div>
        <div className="mt-1 text-sm">
          <p className="terms-line text-center text-white">
            By Signing up, you agree to our{" "}
            <a
              href="https://astrotalk.com/terms-and-conditions"
              rel="noopener"
              target="_blank"
              className="text-yellow-400 underline"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href="https://astrotalk.com/privacy-policies"
              rel="noopener"
              target="_blank"
              className="text-yellow-400 underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AstrologerRegistrationForm;
