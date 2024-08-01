import React from "react";
import Right from "../../images/right-arrow.webp"

const Workflow1 = () => {
  return (
    <div className=" flex flex-col gap-2  lg:px-12 py-10 w-full bg-white  ">
      <h1 className="text-2xl font-semibold text-center ">How It Works?</h1>

      <div className=" flex flex-col gap-4  mx-auto   ">
        <div className="md:flex  xs:flex-col  gap-4  items-center  ">
          <div className="md:flex  xs:flex-col items-center gap-4     ">
            <p className="border-2 border-black rounded-md w-72 sm:w-44 h-32 text-center py-8 bg-yellow-400 text-white">
              Set Details about Pooja and States
            </p>
            <img
              src={Right}
              width={100}
              className="hidden md:block"
            />
            <img
              src={Right}
              width={100}
              className=" md:hidden sm:block transform rotate-90 my-6 mx-auto"
            />
          </div>

          <div className="md:flex  xs:flex-col items-center gap-4  justify-center ">
            <p className="border-2 border-black rounded-md w-72  sm:w-44 h-32 text-center py-6 px-2 bg-yellow-400 text-white"> Set your Required Time Schedule </p>
            <img
              src={Right}
              width={100}
              className="hidden md:block"
            />
            <img
              src={Right}
              width={100}
              className=" md:hidden sm:block transform rotate-90 my-6 mx-auto"
            />
          </div>

          <div className="flex flex-col gap-4 items-center md:pt-24 xs:pt-0  ">
            <p className="border-2  border-black rounded-md w-72  sm:w-44 h-32 text-center pt-12  bg-yellow-400 text-white">
            Search For the Pooja Booking
            </p>
            <img
              src={Right}
              width={100}
              className="transform rotate-90 "
            />
          </div>
        </div>

        <div className="md:flex  xs:flex-col  gap-4 items-center">
          <div className="md:flex  xs:flex-col  items-center gap-4 ">
            <p className="border-2 border-black rounded-md w-72 sm:w-44 h-32 text-center py-8 bg-yellow-400 text-white">
            Go for the Data if available
            </p>
            <img
              src={Right}
              width={100}
              className="hidden md:block transform rotate-180  "
            />
            <img
              src={Right}
              width={100}
              className=" md:hidden sm:block transform rotate-90 my-6 mx-auto"
            />
          </div>

          <div className="md:flex  xs:flex-col items-center gap-4  ">
            <p className="border-2 border-black rounded-md w-72 sm:w-44 h-32 text-center py-12 bg-yellow-400 text-white">
            Click on Book now after Reading all info
            </p>
            <img
              src={Right}
              width={100}
              className="hidden md:block transform rotate-180"
            />
            <img
              src={Right}
              width={100}
              className=" md:hidden sm:block transform rotate-90 my-6 mx-auto"
            />
          </div>

          <div>
            <p className="border-2 border-black rounded-md w-72 h-32  sm:w-44 text-center py-12 bg-yellow-400 text-white">
              Fill the form and Book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow1;
