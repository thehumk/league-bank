import React from 'react';
import PropTypes from 'prop-types';

const TemplateService = ({data}) => {
  const {name, title, advantages, content} = data;
  return (
    <div className={`service-tab service-tab--${name}`}>
      <h3 className={`service-tab__title service-tab__title--${name}`}>{title}</h3>
      <ul className={`service-tab__advantages service-tab__advantages--${name}`}>
        {advantages.map((elem, i) => (
          <li key={i} className={`service-tab__advantages-item service-tab__advantages-item--${name}`}>{elem}</li>
        ))}
      </ul>
      {content === `link` && (
        <a href="#top" className="service-tab__see-more">Узнать подробнее</a>
      )}
      {content === `text` && (
        <p className="service-tab__text">
          Рассчитайте ежемесячный платеж<br/>и ставку по кредиту воспользовавшись нашим <a href="#top">кредитным калькулятором</a>
        </p>
      )}
    </div>
  );
}

TemplateService.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default TemplateService;
