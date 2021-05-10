import React from 'react';

const TemplateSlide = ({slide}) => {
  const {promo, link, name} = slide;
  return (
    <div className={`main-slider__slide main-slider__slide--${name}`}>
      <div className={`main-slider__gradient-container main-slider__gradient-container--${name}`}>
        <div className={`main-slider__background-container main-slider__background-container--${name}`}></div>
      </div>
      <div className={`main-slider__container main-slider__container--${name}`}>
        <h1 className={`main-slider__title main-slider__title--${name}`}>Лига Банк</h1>
        <p className={`main-slider__promo main-slider__promo--${name}`}>{promo}</p>
        {link && (
          <a href="#" className={`main-slider__link main-slider__link--${name}`}>{link}</a>
        )}
      </div>
    </div>
  );
}

export default TemplateSlide;
