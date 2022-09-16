import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const REACT_APP_DOMAIN="dev-exsw7bob.us.auth0.com";
// const REACT_APP_CLIENT_ID="EzyZPuNnxkJbd7cQsiPnpKvFhvV8KZbA";

root.render(
  <React.StrictMode>
    <App
    // domain="dev-exsw7bob.us.auth0.com"
    // clientId="EzyZPuNnxkJbd7cQsiPnpKvFhvV8KZbA"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
