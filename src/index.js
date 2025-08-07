import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './context/LanguageContext';

// Optimización: lazy loading para componentes pesados
const root = ReactDOM.createRoot(document.getElementById('root'));

// Optimización: StrictMode solo en desarrollo
const AppWrapper = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <React.StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </React.StrictMode>
    );
  }
  
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

root.render(<AppWrapper />);

// Optimización: Solo medir performance en desarrollo
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
