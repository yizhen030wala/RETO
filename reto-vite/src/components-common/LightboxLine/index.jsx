// import React, { useState } from 'react';
// import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";

// const App = () => {
//     const [isLightboxOpen, setIsLightboxOpen] = useState(false);

//     const openLightbox = () => {
//         setIsLightboxOpen(true);
//     };

//     const closeLightbox = () => {
//         setIsLightboxOpen(false);
//     };

//     return (
//         <>
//             <ButtonChk onClick={openLightbox} className="btn-list">
//                 路線整理
//             </ButtonChk>
//             {isLightboxOpen && <Lightbox onClose={closeLightbox} />}
//         </>
//     );
// };

// export default App;


import React, { useState } from 'react';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
import LightboxLine from './LightboxLine.jsx';

const App = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <ButtonChk onClick={openLightbox} className="btn-list">
                路線整理
            </ButtonChk>
            {isLightboxOpen && <LightboxLine onClose={closeLightbox} />}
        </>
    );
};

export default App;