import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeContextProvider } from './context/ColorModeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeContextProvider>
        <App />
      </ColorModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
