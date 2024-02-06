import React, { useState } from 'react';
import ButtonLine from '../Button/ButtonLine/ButtonLine.jsx';
import LightboxLine from "./LightboxLine.jsx";

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