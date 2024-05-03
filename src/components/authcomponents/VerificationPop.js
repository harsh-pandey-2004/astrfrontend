import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const VerifyPhone = () => {
  const { id } = useParams();
  console.log(id)
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(41);
  const [response, setResponse] = useState([]);

  async function getUser() {
    try {
      let a = await axios.post(`http://localhost:3000/api/otp-verification/${id}`,otp);
      setResponse(a.data);
      setOtp(["", "", "", ""])
      console.log(a.data)
    } catch (error) {
      console.log("some Error", error);
    }
  }
  useEffect(() => {
 
    const timer = setInterval(() => {
      setResendTimer((prevTimer) => prevTimer - 1);
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
    getUser()
    console.log(otp.join(""))
  };

  const handleResendOtp = () => {
    setResendTimer(41);
  };

  return (
    <div
      id="verify_mbl_nmbr"
      className=" border-2 w-1/3 rounded mx-auto mt-8 pb-4 "
    >
      <h1 className="text-2xl font-bold mb-6 bg-orange-400 w-full p-3 text-center rounded">
        Verify{" "}
      </h1>
      <div className="mb-6">
        <h6 className="text-sm otp_sent_number text-center">
          OTP sent to <span className="font-semibold">+91-{id}</span>
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
                className="w-12 h-12 border border-gray-300 rounded text-center mr-2"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            type="submit"
            className="mt-3 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4  w-[90%] rounded"
            disabled={otp.some((val) => val === "")}
          >
            LOGIN
          </button>
        </form>
        <div className="flex justify-between items-center px-7">
          <div>
            <h6 className="text-sm cursor-pointer">
              Resend OTP available in{" "}
              <span className="text-danger">
                {resendTimer > 0 ? resendTimer : 0}s
              </span>
            </h6>
          </div>
          <button
            type="button"
            className={`${
              resendTimer == 0 ? "font-bold" : "font-light text-gray-400"
            }`}
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
