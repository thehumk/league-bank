import React from 'react';

const TemplateService = ({tab, content, data}) => {
  const {title, advantages} = data;
  return (
    <div className={`service-tab service-tab--${tab}`}>
      <h3 className={`service-tab__title service-tab__title--${tab}`}>{title}</h3>
      <ul className={`service-tab__advantages service-tab__advantages--${tab}`}>
        {advantages.map((elem, i) => (
          <li key={i} className={`service-tab__advantages-item service-tab__advantages-item--${tab}`}>{elem}</li>
        ))}
      </ul>
      {content === `link` && (
        <a href="#" className="service-tab__see-more">Узнать подробнее</a>
      )}
      {content === `text` && (
        <p className="service-tab__text">
          Рассчитайте ежемесячный платеж<br/>и ставку по кредиту воспользовавшись нашим <a href="#">кредитным калькулятором</a>
        </p>
      )}
    </div>
  );
}

export default TemplateService;
