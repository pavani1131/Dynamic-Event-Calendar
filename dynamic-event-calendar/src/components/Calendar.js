import React, { useState, useEffect } from "react";
import DayCell from "./DayCell";
import { getMonthDays, getCurrentMonthYear } from "../utils/calendarUtils";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthDays, setMonthDays] = useState([]);

  useEffect(() => {
    setMonthDays(getMonthDays(currentDate));
  }, [currentDate]);

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const { month, year } = getCurrentMonthYear(currentDate);

  return (
    <div className="calendar">
      <header>
        <button onClick={handlePreviousMonth}>Previous</button>
        <h2>{`${month} ${year}`}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="calendar-grid">
        {monthDays.map((day, index) => (
          <DayCell key={index} date={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
