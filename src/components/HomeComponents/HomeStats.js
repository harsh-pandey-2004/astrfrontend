import React, { useEffect } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Stat = ({
  amount = "22,758+",
  live = "711",
  customers = "45.5",
  type = "pooja",
  bgColorFrom = "from-yellow-700",
  bgColorTo = "to-[#f6c300]",
  textColor = "text-white",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-evenly gap-7 sm:gap-3 w-full py-8 bg-gradient-to-t ${bgColorFrom} ${bgColorTo} ${textColor} stat-container`}
    >
      <div className="flex flex-col items-center" data-aos="fade-up">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp
            end={parseFloat(amount.replace(/,/g, ""))}
            duration={2}
            separator=","
          />
          +
        </p>
        <p className="stat-text text-2xl">Total {type}</p>
      </div>

      <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={parseFloat(live)} duration={2} /> Million Minutes
        </p>
        <p className="stat-text text-2xl">Total Minutes of Live Pooja</p>
      </div>

      <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={parseFloat(customers)} duration={2} /> Million
        </p>
        <p className="stat-text text-2xl">Total Customers</p>
      </div>
    </div>
  );
};

Stat.propTypes = {
  amount: PropTypes.string,
  live: PropTypes.string,
  customers: PropTypes.string,
  type: PropTypes.string,
  bgColorFrom: PropTypes.string,
  bgColorTo: PropTypes.string,
  textColor: PropTypes.string,
};

export default Stat;

// Usage example
// <Stat amount="22,758+" live="711" customers="45.5" type="pooja" bgColorFrom="from-blue-700" bgColorTo="to-blue-300" textColor="text-black" />
