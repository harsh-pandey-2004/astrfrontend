import React, { useEffect } from "react";
import "./HowitWorks.css";
import Eye from "../../images/view.png";
import Mission from "../../images/mission.png";
import checkList from "../../images/check-list.png";
import stopWatch from "../../images/stopwatch.png";
import Surveyor from "../../images/surveyor.png";
import Call from "../../images/call.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const steps = [
    {
      icon: "fa-pencil",
      title: "Interact",
      description: "User interacts with our form.",
      gif: Eye,
    },
    {
      icon: "fa-edit",
      title: "Fill Details",
      description: "User fills in the required details.",
      gif: checkList,
    },
    {
      icon: "fa-phone",
      title: "Receive Call",
      description: "A call from our Vastu maker to discuss your needs.",
      gif: Call,
    },
    {
      icon: "fa-clock-o",
      title: "Design Creation",
      description: "Our Vastu maker creates the design in 2-3 days.",
      gif: stopWatch,
    },
    {
      icon: "fa-handshake-o",
      title: "Handover",
      description: "The final design is handed over to the user.",
      gif: Surveyor,
    },
    {
      icon: "fa-check-square-o",
      title: "Confirm",
      description: "After handover, if users have any doubts they can also call our Vastu counselor to clarify their doubts.",
      gif: Mission,
    },
  ];

  return (
    <section className="how-it-works py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2
          className="my-5 text-center text-5xl font-serif text-black"
          data-aos="fade-up"
        >
          How It <span className="text-[#f6c300]">Works</span>
        </h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 items-center w-full md:ml-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105 relative"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
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
