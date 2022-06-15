import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>Calculadora</h1>
    <br/>
    <Calculator />
  </div>
);

