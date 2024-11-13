import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Contact } from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Dashboard from './components/Dashboard';
import { Profile, Settings } from './components/Profile';
import NotFound from './components/NotFound';
import Login from './components/Login';
import './App.css'; // import Tailwind CSS

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
