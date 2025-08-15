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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }

    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }

    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const conflict = existingBookings.some(
      booking => booking.date === formData.date && booking.time === formData.time
    );

    if (conflict) {
      setErrors({ time: "This time slot is already booked. Please choose another time." });
      return;
    }

    const success = submitAPI(formData);

    if (success) {
      localStorage.setItem('bookings', JSON.stringify([...existingBookings, formData]));
      navigate('/confirmed', { state: formData });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  noValidate
  className="booking-form"
  style={{ display: 'grid', gap: '20px' }}
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
  {errors.date && <p className="error">{errors.date}</p>}

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
  {errors.time && <p className="error">{errors.time}</p>}

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
  {errors.guests && <p className="error">{errors.guests}</p>}

  <label htmlFor="occasion">Occasion</label>
  <select
    id="occasion"
    name="occasion"
    value={formData.occasion}
    onChange={handleChange}
    required
  >
    <option value="">Select occasion</option>
    <option>Birthday</option>
    <option>Anniversary</option>
  </select>
  {errors.occasion && <p className="error">{errors.occasion}</p>}

  <button
    className="form-btn"
    type="submit"
  >
    Make Your Reservation
  </button>
</form>

  );
};

export default BookingForm;
