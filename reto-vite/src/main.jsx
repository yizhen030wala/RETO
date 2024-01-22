// 此份文件是入口，勿刪
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components-common/Header/Header.jsx'
import Login from './pages/Login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Login/>

  </React.StrictMode>,
)
