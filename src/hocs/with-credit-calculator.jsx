import React from 'react';
import {MortgageParams, CarParams, KeyCode, REQUIRED_INCOME, QUANTITY_MONTH} from '../const';
import {shakeEffect} from '../utils';

const withCreditCalculator = (Component) => {
  class WithCreditCalculator extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        step: 1,
        purpose: `none`,
        isPurposeSelectOpened: false,
        paramsCredit: {},
        
        cost: 0,
        initialFee: 0,
        term: 0,

        maternalCapital: false,
        casco: false,
        lifeInsurance: false,

        creditAmount: 0,
        percent: `0`,
        monthlyPayment: 0,
        requiredIncome: 0,
      }

      this.onSelectOpen = this.onSelectOpen.bind(this);
      this.onSelectClose = this.onSelectClose.bind(this);
      this.onPurposeChange = this.onPurposeChange.bind(this);

      this.onInputBlur = this.onInputBlur.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onCostChange = this.onCostChange.bind(this);
      this.onInitialFeeChange = this.onInitialFeeChange.bind(this);
      this.onTermChange = this.onTermChange.bind(this);
      this.onInputRangeChange = this.onInputRangeChange.bind(this);
      this.onAdditionalChange = this.onAdditionalChange.bind(this);
      this.onCostChangeSign = this.onCostChangeSign.bind(this);

      this.getCreditAmount = this.getCreditAmount.bind(this);
      this.getInterestRate = this.getInterestRate.bind(this);
      this.getMonthlyPayment = this.getMonthlyPayment.bind(this);

      this.onMakeRequest = this.onMakeRequest.bind(this);
      this.onRegApplicationChange = this.onRegApplicationChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPopupClose = this.onPopupClose.bind(this);
      this.closePopupKeydown = this.closePopupKeydown.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
    }

    componentDidMount() {
      this.getCreditAmount();
      this.getInterestRate();
      this.getMonthlyPayment();
    }

    componentDidUpdate() {
      this.getCreditAmount();
      this.getInterestRate();
      this.getMonthlyPayment();
    }

    onSelectOpen(evt) {
      this.purposeSelect = evt.currentTarget;
      this.options = this.purposeSelect.querySelector(`.credit-calculator__select-list`);
      this.selectIcon = this.purposeSelect.querySelector(`.credit-calculator__select-icon`);


      this.options.style.display = `block`;
      this.purposeSelect.style.marginBottom = this.options.offsetHeight + `px`;
      this.selectIcon.style.transform = `rotate(180deg) translateY(50%)`;

      this.setState({isPurposeSelectOpened: true});
    }

    onSelectClose() {
      this.purposeSelect.style.marginBottom = 0;
      this.options.style.display = `none`;
      this.selectIcon.style.transform = `rotate(0) translateY(-50%)`;

      this.setState({isPurposeSelectOpened: false});
    }

    onPurposeChange(evt) {
      const params = evt.currentTarget.id === `mortgage` ? MortgageParams : CarParams;
      this.setState({
        step: 2,
        purpose: evt.currentTarget.id,
        paramsCredit: params,
        cost: params.minCost,
        initialFee: params.minCost * params.minInitialFee / 100,
        term: params.minTerm,
        maternalCapital: params.maternalCapital ? true : false,
      });
      this.onSelectClose();
    }

    onInputFocus(evt) {
      evt.target.style.display = `none`;
      evt.target.previousElementSibling.style.display = `block`;
    }

    onInputBlur(evt, name, value) {
      evt.target.style.display = `none`;
      evt.target.nextElementSibling.style.display = `block`;
      this.setState({[name]: value});
    }

    onInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    onCostChange(evt) {
      let {name, value} = evt.target;

      if (value < this.state.paramsCredit.minCost || value > this.state.paramsCredit.maxCost) {
        evt.target.nextElementSibling.style.color = `red`;
        value = `Некорректное значение`;
      } else {
        evt.target.nextElementSibling.style.color = `#1F1E25`;
        value = +value;
        this.setState({initialFee: value * this.state.paramsCredit.minInitialFee / 100});
      }

      this.onInputBlur(evt, name, value);
    }

    onInitialFeeChange(evt) {
      let {name, value} = evt.target;

      if (value < this.state.cost * this.state.paramsCredit.minInitialFee / 100) {
        value = this.state.cost * this.state.paramsCredit.minInitialFee / 100;
      }
      if (value > this.state.cost) {
        value = this.state.cost;
      }

      this.onInputBlur(evt, name, value);
    }

    onTermChange(evt) {
      let {name, value} = evt.target;

      if (value < this.state.paramsCredit.minTerm) {
        value = this.state.paramsCredit.minTerm;
      }
      if (value > this.state.paramsCredit.maxTerm) {
        value = this.state.paramsCredit.maxTerm;
      }

      this.onInputBlur(evt, name, value);
    }

    onInputRangeChange(evt) {
      const {name, value} = evt.target;

      if (name === `initialFee`) {
        this.setState({[name]: this.state.cost * value / 100});
      } else {
        this.setState({[name]: value});
      }
    }

    onAdditionalChange(evt) {
      this.setState({[evt.target.name]: !this.state[evt.target.name]});
    }

    onCostChangeSign(evt) {
      let cost = this.state.cost === `Некорректное значение` ? this.state.paramsCredit.minCost : this.state.cost;
      evt.target.offsetParent.querySelector(`.credit-calculator__input--show`).style.color = `#1F1E25`;

      evt.target.id === `plus` ? cost += this.state.paramsCredit.step : cost -= this.state.paramsCredit.step;
      if (cost < this.state.paramsCredit.minCost) {
        cost = this.state.paramsCredit.minCost;
      }
      if (cost > this.state.paramsCredit.maxCost) {
        cost = this.state.paramsCredit.maxCost;
      }

      this.setState({
        cost: cost,
        initialFee: this.state.cost === `Некорректное значение` ? cost * this.state.paramsCredit.minInitialFee / 100 : cost * this.state.initialFee / this.state.cost,
      });
    }

    getCreditAmount() {
      this.setState({creditAmount: this.state.cost - this.state.initialFee - (this.state.maternalCapital ? this.state.paramsCredit.maternalCapitalValue : 0)});
    }

    getInterestRate() {
      if (this.state.purpose === `mortgage`) {
        this.state.initialFee >= this.state.cost * this.state.paramsCredit.percent.amountForSpecialPercent / 100 ?
        this.setState({percent: this.state.paramsCredit.percent.specialPercent.toFixed(2)})
        :
        this.setState({percent: this.state.paramsCredit.percent.default.toFixed(2)});
      }
      
      if (this.state.purpose === `car`) {
        let percent = this.state.paramsCredit.percent.default;

        if (this.state.cost >= this.state.paramsCredit.percent.amountForSpecialPercent) {
          percent = this.state.paramsCredit.percent.specialPercent;
        }

        if (this.state.casco || this.state.lifeInsurance) {
          percent = this.state.paramsCredit.percent.oneAddition;
        }

        if (this.state.casco && this.state.lifeInsurance) {
          percent = this.state.paramsCredit.percent.allAdditions;
        }
        
        this.setState({percent: percent.toFixed(2)});
      }
    }

    getMonthlyPayment() {
      const monthlyPercent = (this.state.percent / 100) / QUANTITY_MONTH;

      const result = Math.floor(this.state.creditAmount * monthlyPercent / (1 - (1 / (1 + monthlyPercent)**(this.state.term * QUANTITY_MONTH))));

      this.setState({
        monthlyPayment: result,
        requiredIncome: Math.floor(result * 100 / REQUIRED_INCOME),
      });
    }

    onMakeRequest(evt) {
      evt.preventDefault();
      this.requestNumber = localStorage.getItem(`requestNumber`) !== null ? +localStorage.getItem(`requestNumber`) + 1 : 1;

      this.setState({step: 3});
    }

    onRegApplicationChange(evt) {
      const {name, value} = evt.target;

      this.setState({name: value});
      localStorage.setItem(name, value);
    }

    onSubmit(evt) {
      evt.preventDefault();

      if(evt.currentTarget.querySelector(`.reg-application__input--phone`).value.length < 17) {
        shakeEffect(evt.currentTarget.querySelector(`.reg-application__input--phone`));
        return;
      }
      
      localStorage.setItem(`requestNumber`, this.requestNumber);
      this.setState({step: 4});
      document.documentElement.style.overflow = `hidden`;
      document.addEventListener(`keydown`, this.closePopupKeydown);
    }

    onPopupClose() {
      this.setState({
        step: 1,
        purpose: `none`,
      });

      document.documentElement.style.overflow = `auto`;
      document.removeEventListener(`keydown`, this.closePopupKeydown);
    }

    closePopupKeydown(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.onPopupClose();
      }
    }

    onChangePhone(evt) {
      const {name, value} = evt.target;

      this.setState({name, value});
      localStorage.setItem(name, value);
    }

    render() {

      return (
        <Component
          state={this.state}
          onSelectOpen={this.onSelectOpen}
          onSelectClose={this.onSelectClose}
          onPurposeChange={this.onPurposeChange}
          onInputFocus={this.onInputFocus}
          onInputBlur={this.onInputBlur}
          onInputChange={this.onInputChange}
          onCostChange={this.onCostChange}
          onInitialFeeChange={this.onInitialFeeChange}
          onTermChange={this.onTermChange}
          onInputRangeChange={this.onInputRangeChange}
          onAdditionalChange={this.onAdditionalChange}
          onCostChangeSign={this.onCostChangeSign}
          onMakeRequest={this.onMakeRequest}
          onSubmit={this.onSubmit}
          onPopupClose={this.onPopupClose}
          onRegApplicationChange={this.onRegApplicationChange}
          onChangePhone={this.onChangePhone}
          requestNumber={this.requestNumber}
        />
      );
    }
  }

  return WithCreditCalculator;
}

export default withCreditCalculator;
