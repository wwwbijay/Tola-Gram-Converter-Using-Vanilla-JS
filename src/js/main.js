import "../css/style.css";
import { callTolaToGram, callGramToTola } from "./tola-gram.js";
import { callWeightToAmount, callAmountToWeight } from "./weight-amount.js";
/*
Gram~Tola Conversion
*/
const gram = document.getElementById("gram");
const tola = document.getElementById("tola");

gram.addEventListener(
  "keyup",
  (evt) => {
    x = callGramToTola(tola, evt.target.value);
  },
  false
);

tola.addEventListener(
  "keyup",
  (evt) => {
    y = callTolaToGram(gram, evt.target.value);
  },
  false
);

/*
Weight~Amount Conversion
*/
const weight = document.getElementById("weight");
const amount = document.getElementById("amount");


amount.addEventListener(
  "keyup",
  (evt) => {
    x = callAmountToWeight(weight, evt.target.value);
  },
  false
);

weight.addEventListener(
  "keyup",
  (evt) => {
    y = callWeightToAmount(amount, evt.target.value);
  },
  false
);