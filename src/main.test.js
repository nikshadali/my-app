// Main.test.js
import { render, screen } from '@testing-library/react';
import { fetchAPI } from './api';
import  { initializeTimes, updateTimes } from './pages/ReservePage';

jest.mock('./api'); // Mock the API module

describe('initializeTimes', () => {
  test('returns available times from fetchAPI', () => {
    // Arrange: Mock return value
    fetchAPI.mockReturnValue(['17:00', '18:00']);

    // Act
    const times = initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalled();
    expect(times).toEqual(['17:00', '18:00']);
  });
});

describe('updateTimes', () => {
  test('returns updated times for the given date', () => {
    const mockDate = new Date('2025-08-12');
    fetchAPI.mockReturnValue(['19:00', '20:00']);

    const state = updateTimes([], { type: 'UPDATE_TIMES', date: mockDate });

    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(state).toEqual(['19:00', '20:00']);
  });
});
