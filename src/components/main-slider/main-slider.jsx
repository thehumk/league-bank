import React from 'react';
import TemplateSlide from './template-slide';
import RadioControl from '../radio-control';
import withMainSlider from '../../hocs/with-main-slider';

const SlidesData = [
  {
    promo: `Кредиты на любой случай`,
    link: `Рассчитать кредит`,
    name: `credit-slide`,
  },
  {
    promo: `Ваша уверенность в завтрашнем дне`,
    link: ``,
    name: `slogan-slide`,
  },
  {
    promo: `Всегда рядом`,
    link: `Найти отделение`,
    name: `branches-slide`,
  },
];

const MainSlider = ({activeSlide, onSwipeStart}) => {
  return (
    <section className="main-slider">
      <RadioControl quantity={3} name={`main-slider`} active={activeSlide}/>
      <div
        className="main-slider__slides-container"
        style={{left: activeSlide === 1 ? `0` : `-` + (activeSlide - 1) + `00vw`}}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        <TemplateSlide slide={SlidesData[0]}/>
        <TemplateSlide slide={SlidesData[1]}/>
        <TemplateSlide slide={SlidesData[2]}/>
      </div>
    </section>
  );
}

export default withMainSlider(MainSlider);
