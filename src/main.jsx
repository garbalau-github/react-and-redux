import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get Provider
import { Provider } from 'react-redux';

// Get store from store.js
import { store } from './state/store.js';

// Wrap Redux provider (states in the store) around the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Access to the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
