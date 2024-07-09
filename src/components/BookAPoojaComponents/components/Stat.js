import React from "react";
import CountUp from "react-countup";

const Stat = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-7 sm:gap-3 w-full py-8 bg-gradient-to-t from-yellow-700 to-[#f6c300] text-white stat-container">
      <div className="flex flex-col items-center">
        <p className=" text-3xl md:text-5xl font-bold stat-number">
          <CountUp
            end={parseFloat(props.amount.replace(/,/g, ""))}
            duration={2}
            separator=","
          />
          +
        </p>
        <p className="stat-text text-2xl">Total {props.type}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={props.live} duration={2} /> Million Minutes
        </p>
        <p className="stat-text text-2xl">Total Minutes of Live Pooja</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={props.customers} duration={2} /> Million
        </p>
        <p className="stat-text text-2xl">Total Customers</p>
      </div>
    </div>
  );
};

export default Stat;

// Usage example
// <Stat amount="22,758+" live="711" customers="45.5" type="pooja" />
