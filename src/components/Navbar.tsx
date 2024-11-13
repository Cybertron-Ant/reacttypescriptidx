import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Modern App</h1>
        <div className="flex space-x-6">
          <Link className="hover:text-gray-200 text-lg font-medium" to="/">Home</Link>
          <Link className="hover:text-gray-200 text-lg font-medium" to="/about">About</Link>
          <Link className="hover:text-gray-200 text-lg font-medium" to="/contact">Contact</Link>
          <Link className="hover:text-gray-200 text-lg font-medium" to="/products">Products</Link>
          <Link className="hover:text-gray-200 text-lg font-medium" to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
