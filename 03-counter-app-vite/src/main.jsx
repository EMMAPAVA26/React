
import React from 'react';
import reactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp'

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';

import './styles.css';


reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
   < CounterApp/>
    </React.StrictMode>

);