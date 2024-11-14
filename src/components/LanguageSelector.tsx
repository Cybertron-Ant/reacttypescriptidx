import React from 'react';

const LanguageSelector: React.FC<{ changeLocale: (locale: string) => void }> = ({ changeLocale }) => {
  return (
    <select
      onChange={(e) => changeLocale(e.target.value)}
      className="px-4 py-2 rounded-lg shadow-lg focus:outline-none"
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
    </select>
  );
};

export default LanguageSelector;
