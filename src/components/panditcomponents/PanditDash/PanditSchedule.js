import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./panditdashcomponents/PanditSchedule.css"; // Ensure the CSS file is correctly imported

const localizer = momentLocalizer(moment);

const PanditSchedule = () => {
  const { id } = useParams();
  const [selectedDates, setSelectedDates] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [lastScheduleEndDate, setLastScheduleEndDate] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    if (!isBooked) {
      const selected = {
        start,
        end: moment(end).subtract(1, "days").toDate(), // Subtracting 1 day to make the range inclusive
      };

      // Generate array of dates between start and end dates
      const datesArray = [];
      let currentDate = moment(start);
      while (currentDate <= moment(end)) {
        datesArray.push(moment(currentDate).toDate());
        currentDate = moment(currentDate).add(1, "days");
      }

      setSelectedDates([...selectedDates, { ...selected, datesArray }]);
    }
  };

  const handleBooking = async () => {
    setIsBooked(true);

    // Flatten datesArray from all selected ranges and format them
    const allDates = selectedDates.flatMap((range) =>
      range.datesArray.map((date) => moment(date).format("DD/MM/YYYY"))
    );

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/update-pandit-profile/${id}`,
        { availability: allDates }
      );

      console.log(allDates);
      console.log(response.data);

      if (selectedDates.length > 0) {
        const lastSchedule = selectedDates[selectedDates.length - 1];
        setLastScheduleEndDate(lastSchedule.end);
      }
    } catch (error) {
      console.error("Error booking schedule:", error);
    }
  };

  const currentDate = new Date();

  return (<div className=' md:mt-20 w-full h-screen   bg-gray-800 overflow-y-auto'>
    <div className="container mx-auto w-3/4 pb-20 relative top-32 ">
      <h2 className="text-3xl  text-center font-semibold bg-yellow-400 pt-2 text-black">
        Schedule
      </h2>
      <p className="text-xl text-center bg-yellow-400 pb-2 font-semibold text-black">
        Select Your Preferred Dates
      </p>
      <div className="shadow-lg rounded-lg overflow-hidden bg-black text-yellow-500">
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          selectable={
            !isBooked &&
            (!lastScheduleEndDate || currentDate <= lastScheduleEndDate)
          }
          onSelectSlot={handleSelectSlot}
          style={{ height: "500px", backgroundColor: "black" }}
          className="w-full h-full calendar-custom"
          eventPropGetter={() => ({
            style: {
              backgroundColor: "#FFD700", // Gold
              color: "#000000", // Black
            },
          })}
          dayPropGetter={(date) => {
            // Highlight days in the selected date range
            const isSelected = selectedDates.some(({ datesArray }) =>
              datesArray.some(d => moment(d).isSame(date, 'day'))
            );

            return {
              style: {
                backgroundColor: isSelected ? 'rgba(255, 215, 0, 0.5)' : '#333333',
                color: isSelected ? '#000000' : '#FFD700',
              },
            };
          }}
          headerPropGetter={() => ({
            style: {
              backgroundColor: "#FFD700",
              color: "#000000",
              fontWeight: "bold",
            },
          })}
        />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl mb-4 text-yellow-400">YOUR SCHEDULE:</h3>
        <ul className="list-disc list-inside text-yellow-500">
          {selectedDates.map(({ start, end, datesArray }, index) => (
            <li key={index} className="text-lg">
              {moment(start).format("MMMM Do YYYY")} to{" "}
              {moment(end).format("MMMM Do YYYY")}
              <ul>
                {datesArray.map((date, idx) => (
                  <li key={idx}>{moment(date).format("MMMM Do YYYY")}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {!isBooked && selectedDates.length > 0 && (
          <button
            onClick={handleBooking}
            className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          >
            Book Schedule
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default PanditSchedule;
