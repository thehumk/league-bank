import React from 'react';
import PropTypes from 'prop-types';

const PopupFeedback = ({onPopupClose}) => {
  return (
    <div className="popup-feedback">
      <div className="popup-feedback__container">
        <button className="popup-feedback__close-btn" onClick={onPopupClose}></button>
        <h2 className="popup-feedback__title">Спасибо за обращение в наш банк.</h2>
        <p className="popup-feedback__content">Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
      </div>
    </div>
  );
}

PopupFeedback.propTypes = {
  onPopupClose: PropTypes.func.isRequired,
}

export default PopupFeedback;
