import React from 'react';
import logo from '../img/logo.svg';
import logoMobile from '../img/logo-mobile.svg';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__container">
        <section className="page-footer__address">
        <a href="#top">
          <picture>
            <source media="(max-width: 767px)" srcSet={logoMobile}/>
            <img className="page-footer__logo" src={logo} alt="logo" width="150" height="27"/>
          </picture>
        </a>
          <div className="page-footer__info">
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>Ⓒ Лига Банк, 2019</p>
          </div>
          <nav className="page-footer__nav footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <a href="#top" className="footer-nav__link">Услуги</a>
              </li>
              <li className="footer-nav__item">
                <a href="#top" className="footer-nav__link">Рассчитать кредит</a>
              </li>
              <li className="footer-nav__item">
                <a href="#top" className="footer-nav__link">Контакты</a>
              </li>
              <li className="footer-nav__item">
                <a href="#top" className="footer-nav__link">Задать вопрос</a>
              </li>  
            </ul>
          </nav>
        </section>
        <section className="page-footer__contacts">
          <ul className="page-footer__contacts-list">
            <li className="page-footer__contacts-item">
              <a href="tel: *0904" className="page-footer__tel page-footer__tel--mobile">*0904</a>
              <p className="page-footer__phone-info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </li>
            <li className="page-footer__contacts-item page-footer__contacts-item--main-phone">
              <a href="tel: +78001112233" className="page-footer__tel page-footer__tel--main">8 800 111 22 33</a>
              <p className="page-footer__phone-info">Бесплатный для всех городов России</p>
            </li>
          </ul>
          <section className="page-footer__social social">
            <ul className="social__list">
              <li className="social__item">
                <a href="#top" className="social__link social__link--fb">
                  <span className="visually-hidden">Мы в фейсбуке</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#top" className="social__link social__link--inst">
                  <span className="visually-hidden">Мы в инстаграме</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#top" className="social__link social__link--twitter">
                  <span className="visually-hidden">Мы в твиттере</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#top" className="social__link social__link--youtube">
                  <span className="visually-hidden">Наш канал на ютубе</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
