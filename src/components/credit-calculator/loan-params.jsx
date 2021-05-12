import React from 'react';
import PropTypes from 'prop-types';
import {divideNumberToSpace} from '../../utils';

const LoanParams = ({state, onInputFocus, onInputChange, onCostChange, onInitialFeeChange, onTermChange, onInputRangeChange, onAdditionalChange, onCostChangeSign}) => {
  const {cost, initialFee, term, paramsCredit} = state;

  const getRangeValuePosition = () => {
    let position = ((initialFee * 100 / cost) - paramsCredit.minInitialFee) * 100 / (100 - paramsCredit.minInitialFee);
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    return position;
  }

  return (
    <fieldset className="credit-calculator__params">
      <h3 className="credit-calculator__legend credit-calculator__legend--params">Шаг 2. Введите параметры кредита</h3>
      <label className="credit-calculator__label credit-calculator__label--cost">
        <h4 className="credit-calculator__field-title">Стоимость {paramsCredit.type === `mortgage` ? `недвижимости` : `автомобиля`}</h4>

        <span className="credit-calculator__minus-icon" id="minus" onClick={onCostChangeSign}></span>
        <input
          type="number"
          className="credit-calculator__input"
          name="cost"
          min={paramsCredit.minCost}
          max={paramsCredit.maxCost}
          value={cost}
          onBlur={onCostChange}
          onChange={onInputChange}
        />
        <div className="credit-calculator__input credit-calculator__input--show" tabIndex="0" onFocus={onInputFocus}>{typeof cost === `string` ? cost : divideNumberToSpace(cost) + ` рублей`}</div>
        <span className="credit-calculator__plus-icon" id="plus" onClick={onCostChangeSign}></span>

        <p className="credit-calculator__help-text">От {divideNumberToSpace(paramsCredit.minCost)} &nbsp;до {divideNumberToSpace(paramsCredit.maxCost)} рублей</p>
      </label>

      <label className="credit-calculator__label credit-calculator__label--initial-fee">
        <h4 className="credit-calculator__field-title">Первоначальный взнос</h4>

        <input
          type="number"
          className="credit-calculator__input"
          name="initialFee"
          min={paramsCredit.minCost * paramsCredit.minInitialFee / 100}
          max={paramsCredit.maxCost}
          value={initialFee}
          onBlur={onInitialFeeChange}
          onChange={onInputChange}
        />
        <div className="credit-calculator__input credit-calculator__input--show" tabIndex="0" onFocus={onInputFocus}>{divideNumberToSpace(initialFee)} рублей</div>

        <input
          type="range"
          className="credit-calculator__input-range"
          name="initialFee"
          min={paramsCredit.minInitialFee}
          max="100"
          step="5"
          value={initialFee * 100 / cost}
          onChange={onInputRangeChange}
        />
        <span
          className="credit-calculator__range-value"
          style={{
            marginLeft: getRangeValuePosition() + `%`,
            transform: `translateX(-${getRangeValuePosition() / 2}%)`
          }}
        >{Math.floor(initialFee * 100 / cost)} %</span>
      </label>

      <label className="credit-calculator__label credit-calculator__label--term">
        <h4 className="credit-calculator__field-title">Срок кредитования</h4>

        <input
          type="number"
          className="credit-calculator__input"
          name="term"
          min={paramsCredit.minTerm}
          max={paramsCredit.maxTerm}
          value={term}
          onBlur={onTermChange}
          onChange={onInputChange}
        />
        <div className="credit-calculator__input credit-calculator__input--show" tabIndex="0" onFocus={onInputFocus}>{term} лет</div>

        <input
          type="range"
          className="credit-calculator__input-range credit-calculator__input-range--term"
          name="term"
          min={paramsCredit.minTerm}
          max={paramsCredit.maxTerm}
          step="1"
          value={term}
          onChange={onInputRangeChange}
        />
        <div className="credit-calculator__term-container">
          <span className="credit-calculator__range-value">{paramsCredit.minTerm} {paramsCredit.minTerm === 1 ? `год` : `лет`}</span>
          <span className="credit-calculator__range-value">{paramsCredit.maxTerm} лет</span>
        </div>
      </label>

      {paramsCredit.maternalCapitalValue && (
        <label className="credit-calculator__additional">
          <input type="checkbox" name="maternalCapital" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
          <span className="credit-calculator__checkbox-icon"></span>
          Использовать материнский капитал
        </label>
      )}
      {paramsCredit.additionalToCar && (
        <>
          <label className="credit-calculator__additional">
            <input type="checkbox" name="casco" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
            <span className="credit-calculator__checkbox-icon"></span>
            Оформить КАСКО в нашем банке
          </label>
          <label className="credit-calculator__additional">
            <input type="checkbox" name="lifeInsurance" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
            <span className="credit-calculator__checkbox-icon"></span>
            Оформить Страхование жизни в нашем банке
          </label>
        </>
      )}
    </fieldset>
  );
}

LoanParams.propTypes = {
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
  onInputFocus: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCostChange: PropTypes.func.isRequired,
  onInitialFeeChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
  onInputRangeChange: PropTypes.func.isRequired,
  onAdditionalChange: PropTypes.func.isRequired,
  onCostChangeSign: PropTypes.func.isRequired,
}

export default LoanParams;
