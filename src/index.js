import React from 'react';
import ReactDOM from 'react-dom/client'; // support of WEB DOM (API)
import './index.css';
import 'tachyons';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { robots } from './Robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App robots={robots} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
