import React from 'react';
import PropTypes from 'prop-types';
import {divideNumberToSpace, shakeEffect} from '../../utils';
import InputMask from 'react-input-mask';

const RegApplication = ({state, onRegApplicationChange, onChangePhone, onSubmit, requestNumber}) => {
  const {purpose, cost, initialFee, term} = state;
  return (
    <form action="#" className="credit-calculator__reg-application reg-application" onSubmit={onSubmit}>
      <h3 className="reg-application__title">Шаг 3. Оформление заявки</h3>
      <table className="reg-application__table">
        <tbody>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Номер заявки</td>
            <td className="reg-application__field-value">№ {requestNumber}</td>
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
          onInvalid={(evt) => {
            console.log(evt.target)
            shakeEffect(evt.target);
          }}
          value={localStorage.getItem(`fullname`) !== null ? localStorage.getItem(`fullname`) : ``}
          autoFocus
          required/>
        <InputMask
          mask="+7 (999) 999-9999"
          type="tel"
          name="tel"
          className="reg-application__input"
          placeholder="Телефон"
          onChange={onChangePhone}
          onInvalid={(evt) => {
            console.log(evt.target)
            shakeEffect(evt.target);
          }}
          value={localStorage.getItem(`tel`) !== null ? localStorage.getItem(`tel`) : ``}
          required
        />
        <input
          type="email"
          name="email"
          className="reg-application__input"
          placeholder="E-mail"
          onChange={onRegApplicationChange}
          onInvalid={(evt) => {
            console.log(evt.target)
            shakeEffect(evt.target);
          }}
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
    paramsCredit: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        minCost: PropTypes.number.isRequired,
        maxCost: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        minInitialFee: PropTypes.number.isRequired,
        minTerm: PropTypes.number.isRequired,
        maxTerm: PropTypes.number.isRequired,
        minCreditAmount: PropTypes.number.isRequired,
        maternalCapitalValue: PropTypes.number.isRequired,
        percent: PropTypes.shape({
          default: PropTypes.number.isRequired,
          specialPercent: PropTypes.number.isRequired,
          amountForSpecialPercent: PropTypes.number.isRequired,
        }),
      }),
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        minCost: PropTypes.number.isRequired,
        maxCost: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        minInitialFee: PropTypes.number.isRequired,
        minTerm: PropTypes.number.isRequired,
        maxTerm: PropTypes.number.isRequired,
        minCreditAmount: PropTypes.number.isRequired,
        percent: PropTypes.shape({
          default: PropTypes.number.isRequired,
          specialPercent: PropTypes.number.isRequired,
          amountForSpecialPercent: PropTypes.number.isRequired,
          oneAddition: PropTypes.number.isRequired,
          allAdditions: PropTypes.number.isRequired,
        }),
        additionalToCar: PropTypes.shape({
          casco: PropTypes.string.isRequired,
          lifeInsurance: PropTypes.string.isRequired,
        }),
      }),
    ]).isRequired,
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
  requestNumber: PropTypes.number.isRequired,
}

export default RegApplication;
