import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AstroCouncellForm = () => {
  const navigate = useNavigate();
  const initialState = {
    password: "",
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [response, setResponse] = useState(initialState);
  const [countryCode, setCountryCode] = useState("+91");
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
   
    let a = await axios.post("https://astrobackend.onrender.com/api/astroCouncelor-login", {
      ...response,
      mobile: phoneNumber,
    });
    console.log(a.data)
    navigate(`/astrocouncellor/${a.data.Astrologer.slug}`);
  };

  return (
    <div className="bg-white shadow-md rounded  pb-8 my-4 lg:w-1/2 w-[90%] mx-auto relative top-[6.8rem] lg:top-0 md:w-3/4 sm:top-32 sm:w-4/5">
      <form
        autoComplete="on"
        className="flex flex-col "
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-bold mb-4 p-4 bg-orange-400 text-center w-full rounded">
          Login with Phone
        </h1>

        <div className="mx-3">
          <h6 className="text-lg mb-2 font-sans">Enter your phone number</h6>
          <div className="flex items-center justify-center bg-gray-300 p-3 gap-2 rounded">
            <div className="mr-2">
              <img
                src="https://aws.astrotalk.com/assets/images/in.webp"
                alt="flag"
                className="h-6 w-6"
              />
            </div>
            <select
              className="form-select bg-transparent text-gray-600"
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
              value={response.phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              type="text"
              className="form-input  outline-none  rounded bg-transparent placeholder:text-gray-600 "
              placeholder="Enter mobile no."
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>
        </div>
        <div className="flex p-3 gap-2 rounded-lg flex-col items-start ">
          <h6 className="text-lg  font-sans">Enter your Password</h6>
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-input  outline-none  rounded bg-transparent placeholder:text-gray-600 border-2 w-full py-2 px-3"
            value={response.password}
            onChange={handleChange}
            name="password"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-orange-400 hover:box-shadow1 text-white font-sans py-2 px-4 rounded-lg w-[95%] mx-auto"
        >
          Log in <i className="fa fa-arrow-right"></i>
        </button>
        <div className="w-full flex justify-center my-2"></div>
        <div className="mt-1 text-sm">
          <p className="terms-line text-center">
            By Signing up, you agree to our{" "}
            <a
              href="https://astrotalk.com/terms-and-conditions"
              rel="noopener"
              target="_blank"
              className="text-blue-400 underline"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href="https://astrotalk.com/privacy-policies"
              rel="noopener"
              target="_blank"
              className="text-blue-400 underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AstroCouncellForm;
