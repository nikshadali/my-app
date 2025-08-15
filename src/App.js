import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import ReservePage from './pages/ReservePage';
import ConfirmedBooking from './pages/BookingConfirmPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/menuPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/cartContext';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservation" element={<ReservePage />} />
          <Route path="confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/menu" element={<MenuPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
        <Route path="login" element={<LoginPage/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
