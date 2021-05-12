import React from 'react';
import PropTypes from 'prop-types';
import TemplateSlide from './template-slide';
import RadioControl from '../radio-control';
import withMainSlider from '../../hocs/with-main-slider';
import {QuantitySlides} from '../../const';
import {SlidesData} from '../../mocks';
import {Repeat} from '../../utils';

const MainSlider = ({activeSlide, onSwipeStart}) => {
  return (
    <section className="main-slider">
      <RadioControl quantity={QuantitySlides.MAIN} name={`main-slider`} active={activeSlide}/>
      <div
        className="main-slider__slides-container"
        style={{left: activeSlide === 1 ? `0` : `-` + (activeSlide - 1) + `00%`}}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        <Repeat numTimes={QuantitySlides.MAIN}>
          {(i) => (
            <TemplateSlide key={i} slide={SlidesData[i - 1]}/>
          )}
        </Repeat>
      </div>
    </section>
  );
}

MainSlider.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  onSwipeStart: PropTypes.func.isRequired,
}

export default withMainSlider(MainSlider);
