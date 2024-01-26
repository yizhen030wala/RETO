// 此份文件是入口，勿刪
import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css'

import Home from './pages/Home/index.jsx'
import Header from './components-common/Header/Header.jsx'
import Login from './pages/Login/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App/>

  </React.StrictMode>,
)
