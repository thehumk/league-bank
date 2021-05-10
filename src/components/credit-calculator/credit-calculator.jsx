import React from 'react';
import LoanParams from './loan-params';
import Offer from './offer';
import RegApplication from './reg-application';
import withCreditCalculator from '../../hocs/with-credit-calculator';

const PurposeValue = {
  none: `Выберите цель кредита`,
  mortgage: `Ипотечное кредитование`,
  car: `Автомобильное кредитование`,
}

const CreditCalculator = (props) => {
  const {state, onSelectOpen, onSelectClose, onPurposeChange, onMakeRequest} = props;
  const {step, purpose, isPurposeSelectOpened} = state;

  return (
    <section className="credit-calculator">
      <form action="#" className="credit-calculator__form" onSubmit={onMakeRequest}>
        <h2 className="credit-calculator__title">Кредитный калькулятор</h2>
        <div className="credit-calculator__flex-container">
          <div className="credit-calculator__container">
            <fieldset className="credit-calculator__purpose">
              <h3 className="credit-calculator__legend">Шаг 1. Цель кредита</h3>
              <div className="credit-calculator__purpose-select" onClick={isPurposeSelectOpened ? onSelectClose : onSelectOpen}>
                <span className="credit-calculator__select-title">{PurposeValue[purpose]}</span>
                <span className="credit-calculator__select-icon"></span>
                <ul className="credit-calculator__select-list">
                  <li className="credit-calculator__option" id="mortgage" onClick={onPurposeChange}>Ипотечное кредитование</li>
                  <li className="credit-calculator__option" id="car" onClick={onPurposeChange}>Автомобильное кредитование</li>
                </ul>
              </div>
            </fieldset>
            {step >= 2 && (
              <LoanParams
                {...props}
              />
            )}
          </div>
          {step >= 2 && (
            <Offer state={state}/>
          )}
        </div>
      </form>
      {step >= 3 && (
        <RegApplication state={state}/>
      )}
    </section>
  );
}

export default withCreditCalculator(CreditCalculator);
