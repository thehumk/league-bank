import React from 'react';
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
          <h3 className="credit-calculator__offer-title credit-calculator__offer-title--refusal">Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.</h3>
          <p className="credit-calculator__offer-name credit-calculator__offer-name--refusal">Попробуйте использовать другие параметры для расчёта.</p>
        </div>
      )}
    </>
  );
}

export default Offer;
