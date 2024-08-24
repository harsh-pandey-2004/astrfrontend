import React from "react";
import CountUp from "react-countup";

const BookPanditStat = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-7 sm:gap-3 w-full py-8 bg-gradient-to-t from-yellow-700 to-[#f6c300] text-white stat-container">
      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp
            end={parseFloat(props.amount.replace(/,/g, ""))}
            duration={2}
            separator=","
          />
          +
        </p>
        <p className="stat-text text-2xl">Total Bookings</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={props.live} duration={2} />
        </p>
        <p className="stat-text text-2xl">Pandits Available</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold stat-number">
          <CountUp end={props.customers} duration={2} />%
        </p>
        <p className="stat-text text-2xl">Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default BookPanditStat;
