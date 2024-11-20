import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.css';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';

/**
 * Main App component for the HR Management System
 * This component serves as the entry point and demonstrates the use of HOCs
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">HR Management System</h1>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
              <Route path="/" element={<Navigate to="/employees" replace />} />
            </Routes>
          </main>

          <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-center">&copy; 2024 HR Management System. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
