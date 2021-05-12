import React from 'react';
import PropTypes from 'prop-types';
import {divideNumberToSpace} from '../../utils';

const RegApplication = ({state, onRegApplicationChange, onChangePhone, onSubmit}) => {
  const {purpose, cost, initialFee, term} = state;
  return (
    <form action="#" className="credit-calculator__reg-application reg-application" onSubmit={onSubmit}>
      <h3 className="reg-application__title">Шаг 3. Оформление заявки</h3>
      <table className="reg-application__table">
        <tbody>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Номер заявки</td>
            <td className="reg-application__field-value">№ 0010</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Цель кредита</td>
            <td className="reg-application__field-value">{purpose === `mortgage` ? `Ипотека` : `Автокредит`}</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Стоимость {purpose === `mortgage` ? `недвижимости` : `автомобиля`}</td>
            <td className="reg-application__field-value">{divideNumberToSpace(cost)} рублей</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Первоначальный взнос</td>
            <td className="reg-application__field-value">{divideNumberToSpace(initialFee)} рублей</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Срок кредитования</td>
            <td className="reg-application__field-value">{term} лет</td>
          </tr>
        </tbody>
      </table>
      <div className="reg-application__input-container">
        <input
          type="text"
          name="fullname"
          className="reg-application__input reg-application__input--full-name"
          placeholder="ФИО"
          onChange={onRegApplicationChange}
          value={localStorage.getItem(`fullname`) !== null ? localStorage.getItem(`fullname`) : ``}
          autoFocus
          required/>
        <input
          type="tel"
          name="tel"
          className="reg-application__input"
          placeholder="Телефон"
          pattern="\(\d{3}\) \d{3}\-\d{4}"
          onChange={onChangePhone}
          value={localStorage.getItem(`tel`) !== null ? localStorage.getItem(`tel`) : ``}
          required/>
        <input
          type="email"
          name="email"
          className="reg-application__input"
          placeholder="E-mail"
          onChange={onRegApplicationChange}
          value={localStorage.getItem(`email`) !== null ? localStorage.getItem(`email`) : ``}
          required/>
      </div>
      <button type="submit" className="reg-application__submit-btn">Отправить</button>
    </form>
  );
}

RegApplication.propTypes = {
  state: PropTypes.shape({
    step: PropTypes.number.isRequired,
    purpose: PropTypes.string.isRequired,
    isPurposeSelectOpened: PropTypes.bool.isRequired,
    paramsCredit: PropTypes.object.isRequired,
    cost: PropTypes.number.isRequired,
    initialFee: PropTypes.number.isRequired,
    term: PropTypes.number.isRequired,
    maternalCapital: PropTypes.bool.isRequired,
    casco: PropTypes.bool.isRequired,
    lifeInsurance: PropTypes.bool.isRequired,
    creditAmount: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
    requiredIncome: PropTypes.number.isRequired,
  }).isRequired,
  onRegApplicationChange: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default RegApplication;
