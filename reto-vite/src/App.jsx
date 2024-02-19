


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MyTrip from './pages/MyTrip';
import MyMap from './pages/MyMap';
import Schedule from './pages/Schedule';
import Reto from './pages/Reto';
import Search from './pages/Search/Search';
import Collections from './pages/Collections/Collections';
import Header from './components-common/Header/Header';
import Relevant_Card from './pages/Search/Relevant_Card/Relevant_Card';
import Set_Journey from './pages/Search/Set_Journey/Set_journey';

const App = () => {
  return (
    <>
      <Routes>
        {/* 定義首頁 */}
        <Route path="/" element={<Home />} />
        
        <Route path="/search" element={<Search />} />

        {/* 其他路由 */}

        <Route path="/reto" element={<Reto />}>
          <Route path="login" element={<Login />} />
          <Route path="mytrip" element={<MyTrip />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="mymap" element={<MyMap />} />
          <Route path="Collections" element={<Collections />} />
        </Route>

        <Route path="/Header" element={<Header />} />
        <Route path="/Relevant_Card" element={<Relevant_Card />} />
        <Route path="/Set_Journey" element={<Set_Journey />} />
      </Routes>
    </>
  );
};

export default App;