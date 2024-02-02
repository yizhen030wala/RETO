import React from "react";
import "../CSS/Search.css";
import { Link } from "react-router-dom"; //物件內用到連結跳轉就需要放

const NavBar = () => {
  const arr_nav = ["開始探索", "我的景點", "行程表"];
  const arr_nav_link = ["search", "collections", "mytravel"];
  const arr_link = ["Search", "Collections", "MyTrip"];
  return (
    <nav className="nav_home">
      <ul>
        {arr_nav.map((nav, index) => (
          <Link to={`/${arr_link[index]}`}>
            <li key={index}>
              <a href="#">{nav}</a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
