import React from 'react';
import PropTypes from 'prop-types';
import {divideNumberToSpace} from '../../utils';

const Offer = ({state}) => {
  const {creditAmount, percent, monthlyPayment, requiredIncome, paramsCredit} = state;

  return (
    <>
      {creditAmount >= paramsCredit.minCreditAmount && (
        <div className="credit-calculator__offer">
          <h3 className="credit-calculator__offer-title">Наше предложение</h3>
          <ul className="credit-calculator__offer-list">
            <li className="credit-calculator__offer-item">
              <p className="credit-calculator__offer-value">{divideNumberToSpace(creditAmount)} рублей</p>
              <p className="credit-calculator__offer-name">Сумма ипотеки</p>
            </li>
            <li className="credit-calculator__offer-item credit-calculator__offer-item--monthly-payment">
              <p className="credit-calculator__offer-value">{divideNumberToSpace(monthlyPayment)} рублей</p>
              <p className="credit-calculator__offer-name">Ежемесячный платеж</p>
            </li>
            <li className="credit-calculator__offer-item credit-calculator__offer-item--interest-rate">
              <p className="credit-calculator__offer-value">{percent}%</p>
              <p className="credit-calculator__offer-name">Процентная ставка</p>
            </li>
            <li className="credit-calculator__offer-item credit-calculator__offer-item--income">
              <p className="credit-calculator__offer-value">{divideNumberToSpace(requiredIncome)} рублей</p>
              <p className="credit-calculator__offer-name">Необходимый доход</p>
            </li>
          </ul>
          <button type="submit" className="credit-calculator__submit-btn">Оформить заявку</button>
        </div>
      )}
      {creditAmount < paramsCredit.minCreditAmount && (
        <div className="credit-calculator__offer credit-calculator__offer--refusal">
          <h3 className="credit-calculator__offer-title credit-calculator__offer-title--refusal">Наш банк не выдаёт ипотечные кредиты меньше {divideNumberToSpace(paramsCredit.minCreditAmount)} рублей.</h3>
          <p className="credit-calculator__offer-name credit-calculator__offer-name--refusal">Попробуйте использовать другие параметры для расчёта.</p>
        </div>
      )}
    </>
  );
}

Offer.propTypes = {
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
}

export default Offer;
