import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import "@fontsource/roboto";
import { Provider } from 'react-redux';
import store from './store/store';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './helpers/auth/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ReactKeycloakProvider
      authClient={keycloak}
    >
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
              <App />
            </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ReactKeycloakProvider>
);
