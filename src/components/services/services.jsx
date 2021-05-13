import React from 'react';
import PropTypes from 'prop-types';
import RadioControl from '../radio-control';
import TemplateService from './template-service';
import withServices from '../../hocs/with-services';
import {ServicesData} from '../../mocks';
import {Repeat} from '../../utils';
import {QuantitySlides} from '../../const';


const Services = ({activeSlide, onTabChange, onSwipeStart}) => {
  return (
    <section className="services">
      <ul className="services__tabs-control">
        <Repeat numTimes={QuantitySlides.SERVICES}>
          {(i) => (
            <li
              key={i}
              className={`services__control-item services__control-item--${ServicesData[i - 1].name} ${activeSlide === i ? `services__control-item--active` : ``}`}
              onClick={() => {
              onTabChange(i);
              }}
            >
              <span className={`services__control-value services__control-value--${ServicesData[i - 1].name}`}>{ServicesData[i - 1].tabTitle}</span>
            </li>
          )}
        </Repeat>
      </ul>
      <div className="services__tabs-container" style={{left: activeSlide === 1 ? `0` : `-` + (activeSlide - 1) + `00%`}} onMouseDown={onSwipeStart} onTouchStart={onSwipeStart}>
        <Repeat numTimes={QuantitySlides.SERVICES}>
          {(i) => (
            <TemplateService
              key={i}
              data={ServicesData[i -1]}
            />
          )}
        </Repeat>
      </div>
      <RadioControl quantity={4} name={`services`} active={activeSlide}/>
    </section>
  );
}

Services.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  onSwipeStart: PropTypes.func.isRequired,
}

export default withServices(Services);
