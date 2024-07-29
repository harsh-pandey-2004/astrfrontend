import React from "react";
import CountUp from "react-countup";

const Stats = ({
  amount = "22,758+",
  live = "711",
  customers = "45.5",
  type = "Lives Transformed",
}) => {
  return (
    <div className="flex flex-col mt-10 lg:flex-row items-center justify-evenly gap-7 sm:gap-3 w-full py-8 bg-gradient-to-t from-yellow-700 to-[#f6c300] text-white stat-container">
      <div className="flex flex-col items-center">
        <p className=" text-3xl md:text-5xl font-bold stat-number">
          <CountUp
            end={parseFloat(amount.replace(/,/g, ""))}
            duration={2}
            separator=","
          />
          +
        </p>
        <p className="stat-text text-2xl">Lives Transformed</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={live} duration={2} /> Million Minutes
        </p>
        <p className="stat-text text-2xl">Full Time Volunteers</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={customers} duration={2} /> Million
        </p>
        <p className="stat-text text-2xl">Repeated Customers</p>
      </div>
    </div>
  );
};

export default Stats;
