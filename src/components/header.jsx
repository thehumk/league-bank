import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.svg';
import SignIn from './sign-in';
import withHeader from '../hocs/with-header';

const Header = ({state, onMenuOpening, onMenuClosure, onSignInOpening, onSignInClosure, onSignInFieldChange}) => {
  const menuOpened = state.menuOpened;

  return (
    <header className={`header ${menuOpened ? `header--opened` : ``}`}>
      <div className="container header__container">
        <div className="header__wrapper">
          <button className="header__burger-button" onClick={onMenuOpening}><span className="visually-hidden">Открыть меню</span></button>
          <a href="#top" className="header__logo">
            <img className="header__img" src={logo} alt="logo" width="150" height="27"/>
          </a>
          <button className={`header__close-menu ${menuOpened ? `header__close-menu--opened` : ``}`} onClick={onMenuClosure}><span className="visually-hidden">Закрыть меню</span></button>
        </div>
        <nav className={`header__nav ${menuOpened ? `header__nav--opened` : ``}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#top" className="header__nav-link">Услуги</a>
            </li>
            <li className="header__nav-item">
              <a href="#top" className="header__nav-link">Рассчитать кредит</a>
            </li>
            <li className="header__nav-item">
              <a href="#top" className="header__nav-link">Конвертер валют</a>
            </li>
            <li className="header__nav-item">
              <a href="#top" className="header__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={`header__user-block ${menuOpened ? `header__user-block--opened` : ``}`}>
          <a href="#top" className={`header__user-link ${menuOpened ? `header__user-link--opened` : ``}`} onClick={onSignInOpening}><span className={`header__user-link-value ${menuOpened ? `header__user-link-value--opened` : ``}`}>Войти в Интернет-банк</span></a>
          <SignIn
            state={state}
            onSignInClosure={onSignInClosure}
            onSignInFieldChange={onSignInFieldChange}
          />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  state: PropTypes.shape({
    menuOpened: PropTypes.bool.isRequired,
    signInOpened: PropTypes.bool.isRequired,
    signInValue: PropTypes.shape({
      [`sign-in-login`]: PropTypes.string.isRequired,
      [`sign-in-password`]: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onMenuOpening: PropTypes.func.isRequired,
  onMenuClosure: PropTypes.func.isRequired,
  onSignInOpening: PropTypes.func.isRequired,
  onSignInClosure: PropTypes.func.isRequired,
  onSignInFieldChange: PropTypes.func.isRequired,
}

export default withHeader(Header);
