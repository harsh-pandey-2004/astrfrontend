import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesVastu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-96 bg-fixed bg-parallax bg-cover"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl text-white text-center"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Get Your 3D / 2D Vastu instructions
      </h1>
      <div
        className="mt-2 flex flex-col md:flex-row justify-center items-center gap-8 py-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button
          className="border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300"
          onClick={() => navigate("/vastupricing")}
        >
          Get 2D Designs + Consultation
        </button>

        <button
          className="border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300"
          onClick={() => navigate("/vastupricing")}
        >
          Get 3D Designs + Consultation
        </button>
      </div>
    </div>
  );
};

export default ServicesVastu;
