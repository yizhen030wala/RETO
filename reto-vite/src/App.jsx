// App.jsx 所有的link在這裡跳轉
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Search from './pages/Search'
import Login from './pages/Login';
import Test from './pages/Test'
import MyTrip from './pages/MyTrip'
import MyMap from './pages/MyMap'
import Schedule from './pages/Schedule'
<<<<<<< HEAD
import Reto from './pages/Reto'
=======
import Search from './pages/Search/Search';
import Collections from './pages/Collections/Collections';

//Test Page
import Header from './components-common/Header/Header';
import Relevant_Card from './pages/Search/Relevant_Card/Relevant_Card';
import Set_Journey from './pages/Search/Set_Journey/Set_journey';

>>>>>>> Ralph

const App = () => {
  return (
    <>
      <Routes>

        <Route path="home" element={<Home />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/" element={<Reto />}>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/mytrip" element={<MyTrip />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/mymap" element={<MyMap />} />
        </Route>


        <Route path="/Collections" element={<Collections />} />

        <Route path="/Header" element={<Header />} />
        <Route path="/Relevant_Card" element={<Relevant_Card />} />
        <Route path="/Set_Journey" element={<Set_Journey />} />
      </Routes>
    </>
  );
};

export default App;

