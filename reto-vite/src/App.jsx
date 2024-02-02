// App.jsx 所有的link在這裡跳轉
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test'
import MyTrip from './pages/MyTrip'
import Schedule from './pages/Schedule'

const App = () => {
  return (
    <>
      <Routes>

        <Route path="home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Reto />}>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/mytrip" element={<MyTrip />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/mymap" element={<MyMap />} />
        </Route>


      </Routes>
    </>
  );
};

export default App;

