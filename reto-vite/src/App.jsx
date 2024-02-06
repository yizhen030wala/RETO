// App.jsx 所有的link在這裡跳轉
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from './pages/Search'
import Login from "./pages/Login";
import Test from "./pages/Test";
import MyTrip from "./pages/MyTrip";
import MyMap from "./pages/MyMap";
import Schedule from "./pages/Schedule";
import Reto from "./pages/Reto";
import Search from "../src/pages/Search/Search";
import Home from "../src/pages/Home/home";
import Collections from "../src/pages/Collections/Collections";

//Test Page
import Header from "./components-common/Header/Header";
import Relevant_Card from "./pages/Search/Relevant_Card/Relevant_Card";
import Set_Journey from "./pages/Search/Set_Journey/Set_journey";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/" element={<Reto />}>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/mytrip" element={<MyTrip />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/mymap" element={<MyMap />} />
          <Route path="/collections" element={<Collections />} />
        </Route>

        {/* R Test */}
        <Route path="/Relevant_Card" element={<Relevant_Card />} />
        <Route path="/Set_Journey" element={<Set_Journey />} />
      </Routes>
    </>
  );
};

export default App;
