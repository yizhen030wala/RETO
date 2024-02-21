import React, { useState } from 'react';
import '../CSS/home.scss';
import guideimg from '../../../assets/img_hsc/index/guideimg.svg';

// Step Button 
const Step = () => {
    const steps = ['第一步', '第二步', '第三步', '第四步', '第五步'];
    const content = [
        '在開始搜索輕鬆<br>瀏覽喜歡的景點',
        '景點資訊通通有<br>判斷不煩惱',
        '拖曳編輯行程<br>直覺好用',
        '店家沒有開?<br>沒關係!找類似的<br>替換就好',
        '確認路線不繞路<br>最有效率玩透透<br>也有手機版喔'
    ];
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState('forward');

    const handleStepClick = (stepNumber) => {
        setDirection(stepNumber > currentStep ? 'forward' : 'backward');
        setCurrentStep(stepNumber);
    };

    return (
        <section id="how">
            <h2 className='title_section_home'>如何使用旅藤?</h2>
            {/* 步驟按鈕 */}
            <div className="btn_step">
                <ul>
                    {steps.map((step, index) => (
                        <li key={index}>
                            <button
                                className={currentStep === index + 1 ? 'btn_step_active' : ''}
                                onClick={() => handleStepClick(index + 1)}>
                                {step}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="guide">
                {steps.map((step, index) => (
                    <div
                        className={`direction step${index + 1} ${currentStep === index + 1 ? 'active' : ''} ${direction === 'forward' ? 'slide-in-right' : 'slide-in-left'}`}
                        style={{ transform: `translateX(${(index + 1 - currentStep) * 100}%)` }}
                        key={index}
                    >
                        <div className="text">
                            <h3>第 <span>{index + 1}</span> 步</h3>
                            <p dangerouslySetInnerHTML={{ __html: content[index] }}></p>
                        </div>
                        <figure><img src={guideimg} alt="使用說明" /></figure>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Step;

