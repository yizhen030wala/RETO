import React, { useState } from 'react';
import '../CSS/home.scss';
import cardimg1 from '../../../assets/img_hsc/feat_box/cardimg1.svg';
import cardimg2 from '../../../assets/img_hsc/feat_box/cardimg2.svg';
import cardimg3 from '../../../assets/img_hsc/feat_box/cardimg3.svg';
import cardimg4 from '../../../assets/img_hsc/feat_box/cardimg4.svg';

const title = ['Web App有夠輕便', '大圖好決定', '行程行李一起整理', '行程備案輕鬆換'];
const content = [
    '解放你的手機容量! <br /> 空間留給最重要的回憶照片',
    '一次瀏覽多個景點 <br /> 我們要看圖!我們愛大圖! ',
    '行程跟行李清單放一起， <br /> 雙重確認真方便!',
    '想去的店家臨時沒開? <br /> 同性質景點輕鬆替換!'
];
const num_card = [1, 2, 3, 4];
const cardImages = [cardimg1, cardimg2, cardimg3, cardimg4];
const data_box_feat = num_card.map((number, index) => {

    return {
        imgUrl: cardImages[index],
        class_name: `item_feat box${number}`,
        title: title[index],
        content: content[index],
    }
});



//Feat Box 
const BoxFeat = () => {

    //處理特點box互動效果
    const [isBox2Hovered, setIsBox2Hovered] = useState(false);
    const [isBox4Hovered, setIsBox4Hovered] = useState(false);

    const handleBox2Hover = () => {
        setIsBox2Hovered(true);
    };

    const handleBox2Leave = () => {
        setIsBox2Hovered(false);
    };

    const handleBox4Hover = () => {
        setIsBox4Hovered(true);
    };

    const handleBox4Leave = () => {
        setIsBox4Hovered(false);
    };
    return (
        <section id="features">
            <h2 className='title_section_home'>旅藤特點</h2>
            <div className="box_feat">
                {data_box_feat.map((card, index) => (

                    //處理互動效果=>box2、box4屬於後方兄弟元素，可以用css控制，
                    //反之以hover box2、4時給box1、3添加className:hovered並設定class
                    <div className={`${card.class_name} ${index === 0 && isBox2Hovered ? 'hovered' : ''} ${index === 2 && isBox4Hovered ? 'hovered' : ''}`}
                        key={index}
                        onMouseEnter={index === 1 ? handleBox2Hover : index === 3 ? handleBox4Hover : undefined}
                        onMouseLeave={index === 1 ? handleBox2Leave : index === 3 ? handleBox4Leave : undefined}
                    >
                        <h3>{card.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: card.content }}></p>
                        <figure><img src={card.imgUrl} alt="" /></figure>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BoxFeat;