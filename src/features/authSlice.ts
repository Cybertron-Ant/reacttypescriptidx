import { createSlice } from '@reduxjs/toolkit';

const loadAuthFromStorage = () => localStorage.getItem('isAuthenticated') === 'true';

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthFromStorage(),
  reducers: {
    login: () => {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    },
    logout: () => {
      localStorage.setItem('isAuthenticated', 'false');
      return false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
