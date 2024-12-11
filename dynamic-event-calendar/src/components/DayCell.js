import React, { useState } from "react";
import EventModal from "./EventModal";

const DayCell = ({ date }) => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleModal = () => setShowModal(!showModal);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="day-cell">
      <div onClick={toggleModal}>
        <span>{date.getDate()}</span>
      </div>
      {showModal && (
        <EventModal
          date={date}
          events={events}
          onClose={toggleModal}
          onAddEvent={addEvent}
        />
      )}
    </div>
  );
};

export default DayCell;
