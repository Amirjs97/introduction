import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '%PUBLIC_URL%/./App.jsx';
import '%PUBLIC_URL%/./index.css';
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
