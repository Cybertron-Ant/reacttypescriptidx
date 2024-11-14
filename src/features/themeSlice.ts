import { createSlice } from '@reduxjs/toolkit';

const loadThemeFromStorage = () => localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: loadThemeFromStorage(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
