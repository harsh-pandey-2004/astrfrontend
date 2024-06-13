import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const localizer = momentLocalizer(moment);

const Schedule = () => {
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
      range.datesArray.map((date) => moment(date).format("YYYY/MM/DD"))
    );

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/update-pandit-profile/${id}`,
        { date: allDates }
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

  return (
    <div className="container mx-auto max-w-2xl mt-8 pb-20">
      <h2 className="text-4xl text-center mb-4">Schedule</h2>
      <p className="text-2xl text-center mb-8">Select Your Preferred Dates</p>
      <div className="shadow-lg rounded-lg overflow-hidden">
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
          style={{ height: "500px" }}
          className="w-full h-full"
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: "#3182CE",
              color: "#FFFFFF",
            },
          })}
        />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl mb-4">YOUR SCHEDULE:</h3>
        <ul className="list-disc list-inside">
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
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Book Schedule
          </button>
        )}
      </div>
    </div>
  );
};

export default Schedule;
