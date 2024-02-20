// 此份文件是入口，勿刪


// import React from 'react'
// // import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
// import App from './App';
// // import './index.css'

// import Home from './pages/Home/index.jsx'
// import Header from './components-common/Header/Header.jsx'
// import Login from './pages/Login/Login.jsx'
// import { BrowserRouter } from 'react-router-dom';
// // import { createRoot } from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )
import { jsxDEV } from 'react/jsx-dev-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
