import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
      <nav className="flex justify-center space-x-8 mb-6">
        <Link className="text-lg font-medium text-indigo-600 hover:text-indigo-800" to="profile">Profile</Link>
        <Link className="text-lg font-medium text-indigo-600 hover:text-indigo-800" to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
