import React, { useState } from "react";
import "./index.css";
import Calendar from "./components/Calendar";
import DayCell from "./components/DayCell";
import EventModal from "./components/EventModal";
import reportWebVitals from "./reportWebVitals";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState({});

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => {
      const dateKey = selectedDate.toDateString();
      const updatedEvents = prevEvents[dateKey] ? [...prevEvents[dateKey], event] : [event];
      return { ...prevEvents, [dateKey]: updatedEvents };
    });
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Dynamic Event Calendar</h1>
      </header>
      <main>
        <Calendar
          onDayClick={handleDayClick}
          events={events}
          renderDay={(day) => (
            <DayCell
              day={day}
              hasEvents={!!events[day.toDateString()]}
              onClick={() => handleDayClick(day)}
            />
          )}
        />
      </main>
      {showModal && (
        <EventModal
          date={selectedDate}
          events={events[selectedDate?.toDateString()] || []}
          onClose={handleCloseModal}
          onAddEvent={handleAddEvent}
        />
      )}
      <footer className="app-footer">
        <p>Built with React.js</p>
      </footer>
    </div>
  );
}

// Run performance analytics using reportWebVitals
reportWebVitals(console.log);

export default App;
