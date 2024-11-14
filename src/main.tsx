import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { IntlWrapper } from './i18n/IntlWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlWrapper>
        <App changeLocale={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </IntlWrapper>
    </Provider>
  </React.StrictMode>
);
