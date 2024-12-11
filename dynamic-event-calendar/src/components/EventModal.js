import React, { useState } from "react";

const EventModal = ({ date, events, onClose, onAddEvent }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, startTime, endTime, description };
    onAddEvent(newEvent);
    onClose();
  };

  return (
    <div className="event-modal">
      <h2>Events on {date.toDateString()}</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong> ({event.startTime} - {event.endTime}): {event.description}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Event</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default EventModal;
