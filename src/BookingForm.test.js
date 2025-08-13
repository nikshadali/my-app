import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm/BookingForm";
import { MemoryRouter } from "react-router-dom";

const mockDispatch = jest.fn();
const mockTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm HTML5 validation", () => {
  test("date input has required attribute", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("guests input has min and max attributes", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

describe("BookingForm React validation", () => {
  test("shows error when submitting empty form", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  test("does not show errors for valid form", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-08-20" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    expect(screen.queryByText(/please select/i)).toBeNull();
  });
});
