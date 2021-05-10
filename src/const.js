export const MortgageParams = {
  type: `mortgage`,
  minCost: 1200000,
  maxCost: 25000000,
  step: 100000,
  minInitialFee: 10,
  minTerm: 5,
  maxTerm: 30,
  minCreditAmount: 500000,
  maternalCapitalValue: 470000,
  percent: {
    default: 9.4,
    specialPercent: 8.5,
    amountForSpecialPercent: 15,
  },
};

export const CarParams = {
  type: `car`,
  minCost: 500000,
  maxCost: 5000000,
  step: 50000,
  minInitialFee: 20,
  minTerm: 1,
  maxTerm: 5,
  minCreditAmount: 200000,
  additionalToCar: {
    casco: `casco`,
    lifeInsurance: `lifeInsurance`,
  },
  percent: {
    default: 16,
    specialPercent: 15,
    amountForSpecialPercent: 2000000,
    oneAddition: 8.5,
    allAdditions: 3.5,
  },
};