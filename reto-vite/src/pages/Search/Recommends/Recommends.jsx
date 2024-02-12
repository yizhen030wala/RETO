import React from 'react';
import '../CSS/Search.scss';

const Recommends = () => {
    const arr_recommend = ['一日遊', '兩天一夜', '三天兩夜', '我想隨便看看'];
    return (
        <div className="recommend">
            <ul>
                {arr_recommend.map((recommend, index) => (
                    <li key={index}><a href="#">{recommend}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default Recommends; 