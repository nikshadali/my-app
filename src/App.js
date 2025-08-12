import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import ReservePage from './pages/ReservePage';
import ConfirmedBooking from './pages/BookingConfirmPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservation" element={<ReservePage />} />
          <Route path="confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
