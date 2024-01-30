import React, { useState } from 'react';
import Lightbox from './Lightbox';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
import "./index.css"

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
        <div className='text-wrap'>
          <div className='icon-luggage'></div>
          行李清單
        </div>
      </ButtonChk>
      {isLightboxOpen && <Lightbox onClose={closeLightbox} />}
    </>
  );
};

export default App;