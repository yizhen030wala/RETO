import React, { useState } from 'react';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
import ButtonLine from '../Button/ButtonLine/ButtonLine.jsx';

const Index = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <ButtonLine onClick={openLightbox}>
                路線整理
            </ButtonLine>
            {isLightboxOpen && <LightboxLine onClose={closeLightbox} />}
        </>
    );
};

export default Index;