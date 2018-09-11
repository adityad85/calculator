import Big from 'big.js';
import evaluate from './evaluate';

const calculate = (object, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  const isNumber = !Number.isNaN(Number(buttonName));
  if (isNumber) {
    if (buttonName === '0' && object.next === '0') {
      return {};
    }
    // if there's no operation then check and append the second element as you type
    if (object.operation) {
      if (object.next) {
        return {
          next: object.next + buttonName,
        };
      }
      return { next: buttonName };
    }
    if (object.next) {
      return {
        next: object.next + buttonName,
        total: null,
      };
    }

    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '%') {
    if (object.operation && object.next) {
      const result = evaluate(object.total, object.next, object.operation);
      return {
        total: Big(result)
          .div(Big('100'))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (object.next) {
      return {
        next: Big(object.next)
          .div(Big('100'))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === '=') {
    if (object.next && object.operation) {
      return {
        total: evaluate(object.total, object.next, object.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (object.next) {
      return { next: (-1 * parseFloat(object.next)).toString() };
    }
    if (object.total) {
      return { total: (-1 * parseFloat(object.total)).toString() };
    }
    return {};
  }

  if (object.operation === '/' && object.next === null) {
    return {
      total: evaluate(object.total, '1', object.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (object.operation) {
    return {
      total: evaluate(object.total, object.next, object.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!object.next) {
    return { operation: buttonName };
  }

  return {
    total: object.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
