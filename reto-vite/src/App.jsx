// App.jsx 所有的link在這裡跳轉
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Test from './pages/Test'
import MyTrip from './pages/MyTrip'
import Schedule from './pages/Schedule'
import Search from './pages/Search/Search';

import Header from './components-common/Header/Header';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/MyTrip" element={<MyTrip />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;

