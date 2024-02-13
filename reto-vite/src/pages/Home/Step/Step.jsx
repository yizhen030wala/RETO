import React from 'react';
import '../CSS/home.scss';
import guideimg from '../../../assets/img_hsc/index/guideimg.svg';

//Step Button 
const Step = () => {
    const steps = ['第一步', '第二步', '第三步', '第四步', '第五步'];
    return (
        <section id="how">
                    <h2 className='title_section_home'>如何使用旅藤?</h2>
                    {/* 步驟按鈕 */}
                    <div className="btn_step">
                        <ul>
                            {steps.map((step, index) => (
                                <li key={index}><a href="#">{step}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* 說明區塊，尚待JS */}
                    <div className="guide">
                        <div className="direction">
                            <div className="text">
                                <h3>使用說明1</h3>
                                <p>使用說明使用說明使用說明</p>
                            </div>
                            <figure><img src={guideimg} alt="使用說明" /></figure>
                        </div>
                        {/* <div className="direction">
                            <h3>使用說明2</h3>
                            <p>使用說明使用說明使用說明</p>
                            <figure><img src="" alt="使用說明" /></figure>
                        </div>
                        <div className="direction">
                            <h3>使用說明3</h3>
                            <p>使用說明使用說明使用說明</p>
                            <figure><img src="" alt="使用說明" /></figure>
                        </div>
                        <div className="direction">
                            <h3>使用說明4</h3>
                            <p>使用說明使用說明使用說明</p>
                            <figure><img src="" alt="使用說明" /></figure>
                        </div>
                        <div className="direction">
                            <h3>使用說明5</h3>
                            <p>使用說明使用說明使用說明</p>
                            <figure><img src="" alt="使用說明" /></figure>
                        </div> */}
                    </div>
                </section>
    )
}

export default Step;