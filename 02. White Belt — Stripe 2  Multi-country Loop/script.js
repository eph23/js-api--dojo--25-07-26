"use strict";

import data from "./data.js";
console.log(data);

/* TODO: 
Your task:
Loop through all countries
Render a card for each one
Capital missing → show "N/A"
Same card structure as Stripe 1

Rules:

No hardcoding data[0], data[1] — use a loop
console.log each country inside the loop before rendering
One function that renders a single card, called inside the loop

That last rule is new — render function this time:
const renderCard = function(country) {
  // extract + render one card
}

data.forEach(country => renderCard(country))
*/

/* ============================================ */
/*                   SOLUTION                   */
const countriesContainer = document.querySelector(".countries");

const renderCard = function (country) {
    const flagURL = country.flags.png;
    const countryName = country.name.common;
    const capital = country.capital?.[0] ?? "N/A";
    const population = (country.population / 1000000).toFixed(2);
    const languages = Object.values(country.languages).join(", ");
    const curr = Object.values(country.currencies)[0];
    const currencyName = curr.name;
    const currencySymbol = curr.symbol;
    const currency = `${currencyName} (${currencySymbol})`;

    const html = `
         <article class="country">
    <img class="country__img" src="${flagURL}" />
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
    countriesContainer.style.opacity = 1;
};

data.forEach((country) => renderCard(country));

/* ============================================ */
