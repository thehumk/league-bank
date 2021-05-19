import React from 'react';
import PropTypes from 'prop-types';
import LoanParams from './loan-params';
import Offer from './offer';
import RegApplication from './reg-application';
import PopupFeedback from './popup-feedback';
import withCreditCalculator from '../../hocs/with-credit-calculator';

const PurposeValue = {
  none: `Выберите цель кредита`,
  mortgage: `Ипотечное кредитование`,
  car: `Автомобильное кредитование`,
}

const CreditCalculator = (props) => {
  const {state, onSelectOpen, onSelectClose, onPurposeChange, onMakeRequest, onRegApplicationChange, onSubmit, onPopupClose, onChangePhone, requestNumber} = props;
  const {step, purpose, isPurposeSelectOpened} = state;

  return (
    <section className="credit-calculator">
      <a name="credit-calculator"></a>
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
        <RegApplication
          state={state}
          onRegApplicationChange={onRegApplicationChange}
          onChangePhone={onChangePhone}
          onSubmit={onSubmit}
          requestNumber={requestNumber}
        />
      )}
      {step >= 4 && (
        <PopupFeedback onPopupClose={onPopupClose}/>
      )}
    </section>
  );
}

CreditCalculator.propTypes = {
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
      cost: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      initialFee: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      term: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      maternalCapital: PropTypes.bool.isRequired,
      casco: PropTypes.bool.isRequired,
      lifeInsurance: PropTypes.bool.isRequired,
      creditAmount: PropTypes.number.isRequired,
      percent: PropTypes.string.isRequired,
      monthlyPayment: PropTypes.number.isRequired,
      requiredIncome: PropTypes.number.isRequired,
  }).isRequired,
  onSelectOpen: PropTypes.func.isRequired,
  onSelectClose: PropTypes.func.isRequired,
  onPurposeChange: PropTypes.func.isRequired,
  onMakeRequest: PropTypes.func.isRequired,
  onRegApplicationChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPopupClose: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
  requestNumber: PropTypes.number,
}

export default withCreditCalculator(CreditCalculator);
