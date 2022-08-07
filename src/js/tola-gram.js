const convConst = 11.6638;

function gramToTola(target, gram) {
  let tola = (convConst * gram) / 10;
  target.value = tola;
}

function tolaToGram(target, tola) {
  let gram = (tola * 10) / convConst;
  target.value = gram;
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

export const callTolaToGram = debounce((target, value ) => {
    return tolaToGram(target, value);
});
export const callGramToTola = debounce((target, value) => {
    return gramToTola(target, value);
});
