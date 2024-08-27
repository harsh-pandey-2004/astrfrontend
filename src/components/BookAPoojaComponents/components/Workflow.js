import React, { useEffect } from "react";
import "./HowitWorks.css";
import Eye from "../../../images/view.png";
import Mission from "../../../images/mission.png";
import checkList from "../../../images/check-list.png";
import stopWatch from "../../../images/stopwatch.png";
import Surveyor from "../../../images/surveyor.png";
// import Call from "../../../images/call.png";
import Call from "../../../images/call.png";
import appointment from '../../../images/appointment (1).png'
import contactform from '../../../images/contact-form.png'
import paymenticon from '../../../images/cashless-payment.png'
import confirmicon from '../../../images/confirmation.png'
import poojaicon from '../../../images/pooja.png'
// import AOS from "aos";
// import "aos/dist/aos.css";

const HowItWorks = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration
  //     easing: "ease-in-out", // Animation easing
  //     once: true, // Whether animation should happen only once - while scrolling down
  //     mirror: false, // Whether elements should animate out while scrolling past them
  //   });
  // }, []);

  const steps = [
    {
      icon: "fa-calendar-check",  // Font Awesome icon for scheduling
      title: "Schedule Pooja",
      description: "Select a convenient date and time for your pooja.",
      gif: appointment,
    },
    {
      icon: "fa-pencil-alt", // Font Awesome icon for form filling
      title: "Fill Out Form",
      description: "Complete the form with your details and pooja requirements.",
      gif: contactform,
    },
    {
      icon: "fa-phone", // Font Awesome icon for phone
      title: "Receive Confirmation Call",
      description: "Our team will call you to confirm the details and finalize the arrangements.",
      gif: Call,
    },
    {
      icon: "fa-credit-card", // Font Awesome icon for payment
      title: "Make Payment",
      description: "Proceed with the payment to complete your booking.",
      gif: paymenticon,
    },
    {
      icon: "fa-check-circle", // Font Awesome icon for confirmation
      title: "Confirm Booking",
      description: "Receive a confirmation message and details about the pooja.",
      gif: confirmicon,
    },
    {
      icon: "fa-calendar-day", // Font Awesome icon for the pooja day
      title: "Pooja Day",
      description: "On the scheduled day, the pooja will be performed as per the arrangements.",
      gif: poojaicon,
    },
  ];

  return (
    <section className="how-it-works py-12 ">
      <div className=" mx-auto">
        <h2
          className="my-5 text-center text-5xl font-serif text-black"
          data-aos="fade-up"
        >
          How It <span className="text-[#f6c300]">Works</span>
        </h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 items-center w-full ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105 relative"
              
            >
              <div className="step-number text-white bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                {index + 1}
              </div>
              <div className="gif-container mb-4">
                <img src={step.gif} alt={step.title} className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="arrow absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-long-arrow-right text-yellow-500 text-4xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
