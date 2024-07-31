import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const VerifyPhone = () => {
  const location = useLocation();
  const phoneNumber = location.pathname.split('/').pop();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(41);
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  async function getUser() {
    try {
      console.log(phoneNumber);
      console.log({ otp: otp.join("") });
      let a = await axios.post(
        `https://astrobackend.onrender.com/api/otp-verification/${phoneNumber}`,
        { otp: otp.join("") }
      );
      console.log(a);
      setResponse(a.data);
      if (a.data) {
        navigate(`/dashboard/${a.data.user._id}`);
      } else {
        alert("You entered wrong URL");
      }
      setOtp(["", "", "", ""]);
    } catch (error) {
      console.log("Some error occurred", error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index, value) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const nextInput = document.getElementById(`otp${index + 2}`);
      if (nextInput && value !== "") {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser();
    console.log(otp.join(""));
  };

  const handleResendOtp = () => {
    setResendTimer(41);
    // Call API to resend OTP here if needed
  };

  return (
    <div
      id="verify_mbl_nmbr"
      className="w-1/3 rounded mx-auto mb-16 pb-4 relative top-[6rem] bg-black"
    >
      <h1 className="text-2xl font-bold mb-6 bg-yellow-400 w-full p-3 text-center rounded text-black">
        Verify
      </h1>
      <div className="mb-6">
        <h6 className="text-sm otp_sent_number text-center text-yellow-300">
          OTP sent to <span className="font-semibold">+91-{phoneNumber}</span>
        </h6>
      </div>
      <div>
        <form
          autoComplete="off"
          className="mb-6 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp${index + 1}`}
                inputMode="numeric"
                maxLength="1"
                type="text"
                className="w-12 h-12 border border-yellow-500 rounded text-center mr-2 text-black bg-yellow-100"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            type="submit"
            className="mt-3 bg-yellow-400 hover:bg-yellow-500 hover:shadow-lg text-black font-bold py-2 px-4 w-[90%] rounded"
            disabled={otp.some((val) => val === "")}
          >
            LOGIN
          </button>
        </form>
        <div className="flex justify-between items-center px-7">
          <div>
            <h6 className="text-sm text-yellow-300">
              Resend OTP available in <span className="font-bold">{resendTimer}s</span>
            </h6>
          </div>
          <button
            type="button"
            className={`text-yellow-500 ${resendTimer === 0 ? "font-bold" : "font-light text-gray-400"}`}
            onClick={handleResendOtp}
            disabled={resendTimer > 0}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
