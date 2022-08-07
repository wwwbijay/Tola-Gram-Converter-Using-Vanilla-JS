import "../css/style.css";
import { callTolaToGram, callGramToTola } from "./tola-gram.js";

const gram = document.getElementById("gram");
const tola = document.getElementById("tola");

gram.addEventListener(
  "change",
  (evt) => {
    x = callGramToTola(tola, evt.target.value);
  },
  false
);

tola.addEventListener(
  "change",
  (evt) => {
    y = callTolaToGram(gram, evt.target.value);
  },
  false
);
