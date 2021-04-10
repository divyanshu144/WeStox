import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './components/Header'

import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


