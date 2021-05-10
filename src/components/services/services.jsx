import React from 'react';
import RadioControl from '../radio-control';
import TemplateService from './template-service';
import withServices from '../../hocs/with-services';

const ServicesData = {
  deposits: {
    title: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
    advantages: [`Проценты по вкладам до 7%`, `Разнообразные условия`, `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`],
  },
  credits: {
    title: `Лига Банк выдает кредиты под любые цели`,
    advantages: [`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`],
  },
  insurance: {
    title: `Лига Страхование – застрахуем все что захотите`,
    advantages: [`Автомобильное страхование`, `Страхование жизни и здоровья`, `Страхование недвижимости`],
  },
  online: {
    title: `Лига Банк – это огромное количество онлайн-сервисов для вашего удобства`,
    advantages: [`Мобильный банк,
    который всегда под рукой`, `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`],
  },
};

const Services = ({activeSlide, onTabChange, onSwipeStart}) => {
  return (
    <section className="services">
      <ul className="services__tabs-control">
        <li className={`services__control-item services__control-item--deposits ${activeSlide === 1 ? `services__control-item--active` : ``}`} onClick={() => {
          onTabChange(1);
        }}>
          <span className="services__control-value services__control-value--deposits">Вклады</span>
        </li>
        <li className={`services__control-item services__control-item--credits ${activeSlide === 2 ? `services__control-item--active` : ``}`} onClick={() => {
          onTabChange(2);
        }}>
          <span className="services__control-value services__control-value--credits">Кредиты</span>
        </li>
        <li className={`services__control-item services__control-item--insurance ${activeSlide === 3 ? `services__control-item--active` : ``}`} onClick={() => {
          onTabChange(3);
        }}>
          <span className="services__control-value services__control-value--insurance">Страхование</span>
        </li>
        <li className={`services__control-item services__control-item--online ${activeSlide === 4 ? `services__control-item--active` : ``}`} onClick={() => {
          onTabChange(4);
        }}>
          <span className="services__control-value services__control-value--online">Онлайн-сервисы</span>
        </li>
      </ul>
      <div className="services__tabs-container" style={{left: activeSlide === 1 ? `0` : `-` + (activeSlide - 1) + `00%`}} onMouseDown={onSwipeStart} onTouchStart={onSwipeStart}>
        <TemplateService
          tab={`deposits`}
          content={`link`}
          data={ServicesData.deposits}
        />
        <TemplateService
          tab={`credits`}
          content={`text`}
          data={ServicesData.credits}
        />
        <TemplateService
          tab={`insurance`}
          content={`link`}
          data={ServicesData.insurance}
        />
        <TemplateService
          tab={`online`}
          content={`link`}
          data={ServicesData.online}
        />
      </div>
      <RadioControl quantity={4} name={`services`} active={activeSlide}/>
    </section>
  );
}

export default withServices(Services);
