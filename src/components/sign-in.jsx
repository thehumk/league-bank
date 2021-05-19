import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/sign-in-logo.svg';

const SignIn = ({state, onSignInClosure, onSignInFieldChange, onPasswordShow, onPasswordHide}) => {
  const signInOpened = state.signInOpened;

  return (
    <div className={`sign-in ${signInOpened ? `sign-in--opened` : ``}`} onClick={onSignInClosure}>
      <form action="#" className="sign-in__form" onClick={(evt) => evt.stopPropagation()}>
        <img src={logo} alt="logo" className="sign-in__logo"/>
        <button type="button" className="sign-in__close-btn" onClick={onSignInClosure}>
          <span className="visually-hidden">Закрыть окно</span>
        </button>
        <label className="sign-in__label sign-in__label--login">
          Логин
          <input
            id="sign-in-login"
            type="text"
            name="sign-in-login"
            className="sign-in__input sign-in__input--login"
            onChange={onSignInFieldChange}
            value={localStorage.getItem(`sign-in-login`) !== null ? localStorage.getItem(`sign-in-login`) : ``}
            autoFocus
            required
          />
        </label>
        <label className="sign-in__label sign-in__label--password">
          Пароль
          <input
            id="sign-in-password"
            type="password"
            name="sign-in-password"
            className="sign-in__input sign-in__input--password"
            onChange={onSignInFieldChange}
            value={localStorage.getItem(`sign-in-password`) !== null ? localStorage.getItem(`sign-in-password`) : ``}
            required
          />
          <div className="sign-in__show-password" onMouseDown={onPasswordShow} onMouseUp={onPasswordHide}></div>
        </label>
        <a href="#top" className="sign-in__restore-password">Забыли пароль?</a>
        <button type="submit" className="sign-in__submit-btn">Войти</button>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  state: PropTypes.shape({
    menuOpened: PropTypes.bool.isRequired,
    signInOpened: PropTypes.bool.isRequired,
    signInValue: PropTypes.shape({
      [`sign-in-login`]: PropTypes.string.isRequired,
      [`sign-in-password`]: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onSignInClosure: PropTypes.func.isRequired,
  onSignInFieldChange: PropTypes.func.isRequired,
  onPasswordShow: PropTypes.func.isRequired,
  onPasswordHide: PropTypes.func.isRequired,
}

export default SignIn;
