import React from 'react';
import '../CSS/home.css';

const title = ['Web App有夠輕便', '大圖好決定', '行程行李一起整理', '行程備案輕鬆換'];
const content = [
    '解放你的手機容量! <br /> 空間留給最重要的回憶照片',
    '一次瀏覽多個景點 <br /> 我們要看圖!我們愛大圖! ',
    '行程跟行李清單放一起， <br /> 雙重確認真方便!',
    '想去的店家臨時沒開? <br /> 同性質景點輕鬆替換!'
];
const num_card = [1, 2, 3, 4];
const data_box_feat = num_card.map((number, index) => {
    return {
        imgUrl: `./Images/cardimg${number}.svg`,
        class_name: `item_feat box${number}`,
        title: title[index],
        content: content[index],
    }
});
//Feat Box 
const BoxFeat = () => {
    return (
        <section id="features">
            <h2>旅藤特點</h2>
            <div className="box_feat">
                {data_box_feat.map((card, index) => (
                    <div className={card.class_name} key={index}>
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