import React from 'react';
import './home.css';

//Step Button 
const Step = () => {
    const steps = ['第一步', '第二步', '第三步', '第四步', '第五步'];
    return (
        <div className="btn_step">
            <ul>
                {steps.map((step, index) => (
                    <li key={index}><a href="#">{step}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Step;