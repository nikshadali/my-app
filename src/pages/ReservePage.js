/* global fetchAPI, submitAPI */

import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import { fetchAPI } from '../api';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

const ReservePage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section className="booking-page">
      <div className="container">
        <div className='form-container'>
        <h1>Reserve a Table</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
      </div>
    </section>
  );
};

export default ReservePage;
