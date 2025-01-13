
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Stili di Bootstrap
import './app.css'; // Stili personalizzati
import { App } from './App.jsx'; // Componente principale

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);