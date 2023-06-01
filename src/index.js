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
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <GoogleOAuthProvider
      clientId="998815757024-m3ddk2elb9k5rrhubglml1duu4sj99n6.apps.googleusercontent.com"
    >
      <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
                <App />
              </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
);
