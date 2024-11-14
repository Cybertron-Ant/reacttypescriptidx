import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthButton: React.FC = () => {
  const { state, login, logout } = useAuth();

  return (
    <button
      onClick={state.isAuthenticated ? logout : login}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      {state.isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;
