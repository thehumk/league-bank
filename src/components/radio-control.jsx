import React from 'react';
import PropTypes from 'prop-types';
import {Repeat} from '../utils';

const RadioControl = ({quantity, name, active}) => {
  return (
    <div className={`radio-control ${name}__control-panel`}>
      <Repeat numTimes={quantity}>
        {(i) => (
          <React.Fragment key={i}>
            <input id={name + i} type="radio" name={name} className="radio-control__input" defaultChecked={active === i ? `defaultChecked`: ``}/>
            <label htmlFor={name + i}  className={`radio-control__label ${active === i ? `radio-control__label--active` : ``}`}></label>
          </React.Fragment>
        )}
      </Repeat>
    </div>
  );
}

RadioControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
}

export default RadioControl;
