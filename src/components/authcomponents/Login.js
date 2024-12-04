import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleProfile }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const navigate = useNavigate();

  function handleCountryCode(e) {
    setCountryCode(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("https://astrobackend.onrender.com/api/login", {
      mobile: phoneNumber,
    });

    if (response.data.success) {
      const userId = response.data.user._id;
      const userSlug = response.data.user.slug;
      localStorage.setItem("userId", userId);
      localStorage.setItem("userSlug", userSlug);
      localStorage.setItem("userdetails", JSON.stringify(response.data.user));
      navigate(`verify-phone/${phoneNumber}`);
      handleProfile();
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-black shadow-md rounded mb-36 lg:w-1/3 w-[90%] mx-auto relative top-24 lg:top-[7rem] md:w-3/4 sm:w-4/5">
      <form
        autoComplete="on"
        className="flex flex-col px-6 py-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-bold mb-6 p-4 bg-yellow-400 text-center w-full rounded-lg">
          Login with Phone
        </h1>

        <div className="mb-6">
          <h6 className="text-lg mb-2 font-sans text-white">Enter your phone number</h6>
          <div className="flex items-center bg-gray-700 p-4 gap-2 rounded-lg">
            <div className="mr-2">
              <img
                src="https://aws.astrotalk.com/assets/images/in.webp"
                alt="flag"
                className="h-6 w-6"
              />
            </div>
            <select
              className="form-select bg-transparent text-white border-none outline-none"
              value={countryCode}
              onChange={handleCountryCode}
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
              className="form-input flex-1 bg-transparent placeholder:text-gray-400 text-white border-none outline-none"
              placeholder="Enter mobile no."
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:shadow-lg text-black font-sans py-3 px-6 rounded-lg w-full"
        >
          Log in <i className="fa fa-arrow-right ml-2"></i>
        </button>

        <div className="mt-4 text-sm text-center text-white">
          <p>
            By Signing up, you agree to our <br />
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

export default LoginForm;
