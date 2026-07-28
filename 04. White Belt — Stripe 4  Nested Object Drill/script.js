"use strict";

import data from "./data.js";
console.log(data);

/* TODO: 
Your task — render a card for each country showing:

Flag image
Name (common)
Capital — empty array [] → "N/A"
Population formatted in millions
Languages — all of them, comma separated
Currency — "Name (symbol)"
Timezone — first one only
Borders — comma separated, or "None" if empty array

New challenges here:

capital is an empty array [] for Vatican — not null, not missing. [] is truthy. How do you handle that?
borders can be empty array — same problem
timezones — first item only

Figure out the empty array trap before you code.
*/

/* ============================================ */
/*                   SOLUTION                   */
const countriesContainer = document.querySelector(".countries");

const renderCard = function (country) {
    const countryName = country.name.common;
    const flagImage = country.flags.png;
    const capital = country.capital.join(", ") || "N/A";
    const population = (country.population / 1000000).toFixed(2);
    const languages = Object.values(country.languages).join(", ");
    const currency = Object.values(country.currencies)[0];
    const currencyName = currency.name;
    const currencySymbol = currency.symbol;
    const timezones = country.timezones[0];
    const borders = country.borders.join(", ") || "N/A";

    const html = `
         <article class="country">
    <img class="country__img" src="${flagImage}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__capital">${capital}</h4>
      <p class="country__row"><span>👫</span>${population} M</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currencyName} (${currencySymbol})</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};

data.forEach((country) => renderCard(country));
/* ============================================ */
