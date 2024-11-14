import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../features/languageSlice';

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(setLanguage(e.target.value))}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageSelector;
