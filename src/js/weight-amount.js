const RATE = 96799.54;

function weightToAmount(target, weight) {
  let amount = (RATE * weight) / 10;
  target.value = (amount).toFixed(2);
}

function amountToWeight(target, amount) {
  let weight = (amount * 10) / RATE;
  target.value = (weight).toFixed(2);
}

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const callWeightToAmount = debounce((target, value ) => {
    return weightToAmount(target, value);
});

export const callAmountToWeight = debounce((target, value) => {
    return amountToWeight(target, value);
});
