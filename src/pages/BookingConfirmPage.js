// ConfirmedBooking.js
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state;


  if (!formData) {
    return <Navigate to="/reservation" replace />;
  }

  return (
    <section style={{ textAlign: 'center', padding: '40px' }}>
      <h1>✅ Booking Confirmed!</h1>
      <p>Thank you for reserving with Little Lemon.</p>

      {formData && (
        <div style={{
          margin: '30px auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          textAlign: 'left'
        }}>
          <h2>Your Reservation Details</h2>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Occasion:</strong> {formData.occasion}</p>
        </div>
      )}

      <Link to="/" style={{
        padding: '10px 20px',
        backgroundColor: '#F4CE14',
        color: '#333',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Back to Home
      </Link>
    </section>
  );
};

export default ConfirmedBooking;
