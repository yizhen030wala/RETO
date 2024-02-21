import React, { useState, useEffect } from "react";
import "./CSS/home.scss";
import FrontCover from "./FrontCover/FrontCover";
import Subtitle from "./HeaderHome/Subtitle/Subtitle";
import About from "./About/About";
import BoxFeat from "./BoxFeat/BoxFeat";
import Step from "./Step/Step";

function Home() {
  return (
    <div>
      {/* Front Cover Area */}
      <div
        id="land_page"
        // style={{ position: scrollPosition > window.innerHeight ? 'relative' : 'fixed', top: scrollPosition > window.innerHeight ? '90vh' : '0' }}
      >
        <FrontCover />
        {/* Subtitle */}
        <Subtitle />
      </div>
      {/* Main Content Area */}
      <main>
        {/* 關於旅藤 */}
        <About />
        {/* 旅藤特點 */}
        <BoxFeat />
        {/* 如何使用旅藤 */}
        <Step />
      </main>
      {/* Footer Area */}
      <footer >
        <ul className="btn_footer_lower">
          <li>Copyright © 2024 <a href="https://github.com/yizhen030wala/RETO">旅藤 RETO</a>. All rights reserved.</li>
          <li>此網頁為前端學習作品，無實際功能</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
