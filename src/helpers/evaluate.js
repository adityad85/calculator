import Big from 'big.js';

const evaluate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || '0');
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x' || operation === '%') {
    return one.times(two).toString();
  }
  if (operation === '/') {
    return one.div(two).toString();
  }
  if (operation === '%') {
    let tempTwo = numberTwo;
    if (numberTwo === '0') {
      tempTwo = Big('1');
    }
    return one.times(tempTwo).toString();
  }
  return numberOne;
};

export default evaluate;
