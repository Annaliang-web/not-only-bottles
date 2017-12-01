import React from 'react';
import './index.css';
// import Links from './Links';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>
    , document.getElementById('root'));
registerServiceWorker();
