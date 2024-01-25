// 此份文件是入口，勿刪
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './components-common/Header/Header.jsx'
import Login from './pages/Login/Login.jsx'


import AddToast from './components-common/addToast/addToast.jsx'
import RemoveToast from './components-common/removeToast/removeToast.jsx'
import MemberToast from './components-common/memberToast/memberToast.jsx'
import TextToast from './components-common/textToast/textToast.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TextToast/>
    <MemberToast/>
    <RemoveToast/>
    <AddToast/>
    <Header/>
    <Login/>

  </React.StrictMode>,
)
