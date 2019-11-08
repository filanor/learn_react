import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/'; 
// Замечание: если не  указан конкретный файл, то webpack ищет в файле index.js


ReactDOM.render(<App />, document.getElementById('root'));

// Удалили serviceWorker
