const counterFactory = (initialValue) => {
  return () => ++initialValue;
};

const fromOne = counterFactory(1);
console.log(fromOne());

const fromThirty = counterFactory(30);
console.log(fromThirty());

const loanFactory = (rate) => {
  return [
    (pricipal, noOfInstallment) => (rate * pricipal * noOfInstallment) / 100,
    (newRate) => (rate = newRate),
  ];
};

const [carEMICal, carEMIRateUpater] = loanFactory(8);
console.log(carEMICal(12000, 10));
carEMIRateUpater(12);
console.log(carEMICal(12000, 10));
