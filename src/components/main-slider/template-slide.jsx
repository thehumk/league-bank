import React from 'react';
import PropTypes from 'prop-types';

const TemplateSlide = ({slide}) => {
  const {promo, link, linkHref, name} = slide;
  return (
    <div className={`main-slider__slide main-slider__slide--${name}`}>
      <div className={`main-slider__gradient-container main-slider__gradient-container--${name}`}>
        <div className={`main-slider__background-container main-slider__background-container--${name}`}></div>
      </div>
      <div className={`main-slider__container main-slider__container--${name}`}>
        <h1 className={`main-slider__title main-slider__title--${name}`}>Лига Банк</h1>
        <p className={`main-slider__promo main-slider__promo--${name}`}>{promo}</p>
        {link && (
          <a href={`#${linkHref}`} className={`main-slider__link main-slider__link--${name}`}>{link}</a>
        )}
      </div>
    </div>
  );
}

TemplateSlide.propTypes = {
  slide: PropTypes.shape({
    promo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default TemplateSlide;
