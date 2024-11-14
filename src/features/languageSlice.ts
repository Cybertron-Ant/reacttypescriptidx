import { createSlice } from '@reduxjs/toolkit';

const loadLanguageFromStorage = () => localStorage.getItem('language') || 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState: loadLanguageFromStorage(),
  reducers: {
    setLanguage: (_state, action) => {
      localStorage.setItem('language', action.payload);
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
