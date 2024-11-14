import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { messages } from './messages';

const defaultLocale = localStorage.getItem('locale') || 'en';

export const IntlWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  // Update local storage whenever the locale changes
  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const handleChangeLocale = (newLocale: string) => {
    setLocale(newLocale);
  };

  // Pass the `changeLocale` function to the children
  return (
    <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
      {React.cloneElement(children as React.ReactElement, { changeLocale: handleChangeLocale })}
    </IntlProvider>
  );
};
