"use strict";

import data from "./data.js";
console.log(data);

/* TODO: Data is given in the data.js file. From the data extract these into clean variables:
const countryName   = ???   // "Portugal"
const capital       = ???   // "Lisbon"
const population    = ???   // "10.31 M"
const flagUrl       = ???   // png url
const languages     = ???   // "Portuguese"
const currency      = ???   // "Euro (€)" 

Render a simple card to the DOM with all six values.
Rules:
console.log each variable before rendering
currency format: "Name (symbol)"
Population in millions, 2 decimal places
No libraries, plain HTML/JS
*/

/* ============================================ */
/*                   SOLUTION                   */
// Normalizing data
const country = data[0];
const countryName = country.name.common;
const capital = country.capital[0];
const population = `${(country.population / 1000000).toFixed(2)} M`;
const flagUrl = country.flags.png;
const languages = Object.values(country.languages)[0];
const currencyData = Object.values(country.currencies)[0];
const currency = `${currencyData.name} (${currencyData.symbol})`;

const countriesContainer = document.querySelector(".countries");

const html = `
  <article class="country">
    <img class="country__img" src="${flagUrl}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__capital">${capital}</h4>
      <p class="country__row"><span>👫</span>${population}</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
`;

countriesContainer.insertAdjacentHTML("beforeend", html);
console.log(`Hello`)
/* ============================================ */
