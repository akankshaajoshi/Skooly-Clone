import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import Signup from "@/pages/Signup"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Signup></Signup>
    </BrowserRouter>
  </React.StrictMode>
);
