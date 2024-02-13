import React from 'react';
import './CSS/home.scss';
import FrontCover from './FrontCover/FrontCover';
import Subtitle from './HeaderHome/Subtitle/Subtitle';
import About from './About/About';
import BoxFeat from './BoxFeat/BoxFeat';
import Step from './Step/Step';


function Home() {      //做React元件必定要字首大寫(判斷字首大寫為元件)
    return (
        <div>
            {/* Front Cover Area */}
            <div id="land_page">
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
            <footer>
                <ul className="btn_footer_upper">
                    <li><a href="./search.html">關於我們</a></li>
                    <li><a href="">問題回報</a></li>
                    <li><a href="">服務條款</a></li>
                    <li><a href="">隱私權政策</a></li>
                </ul>
                <ul className="btn_footer_lower">
                    <li><a href="">版權申告</a></li>
                    <li><a href="">使用技術</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Home;