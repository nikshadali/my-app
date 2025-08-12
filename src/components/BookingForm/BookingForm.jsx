import { useState } from "react";
import { submitAPI } from "../../api";
import './bookingForm.css';
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If date changes, update available times
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Get existing bookings from localStorage or empty array
  const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

  // Check for conflict
  const conflict = existingBookings.some(
    booking => booking.date === formData.date && booking.time === formData.time
  );

  if (conflict) {
    alert("This time slot is already booked. Please choose another time.");
    return;
  }

  // If no conflict, submit to API
  const success = submitAPI(formData);

  if (success) {
    // Save to localStorage
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, formData]));

    navigate('/confirmed', { state: formData });
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
   
     <form
      className="booking-form"
      style={{ display: 'grid',  gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input className="form-btn" type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
