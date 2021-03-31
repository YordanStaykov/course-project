import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);