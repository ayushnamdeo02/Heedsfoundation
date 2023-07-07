import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Helmet } from 'react-helmet';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Heeds-Foundation | Home</title>
      <meta name="description" content="Welcome to Heeds Foundation - a platform for volunteering, making a difference, and creating a positive impact. Join us today!" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
