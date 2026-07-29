"use strict";

import data from "./data.js";
console.log(data);

/* TODO: 
Your task — render a card for each country showing:

Flag, Name, Capital, Population, 
Languages — "N/A" if empty
Currency — all of them comma separated, or "N/A" if empty
First timezone
Borders — "None" if empty

Constraints:

renderCard function
Handle all edge cases without crashing
No hardcoding

Figure out the empty array trap before you code.
*/

/* ============================================ */
/*                   SOLUTION                   */
const countriesContainer = document.querySelector(".countries");

const renderCard = function (country) {
    const flagImage = country.flags.png;
    const countryName = country.name.common;
    const capital = country.capital.join(", ") || "N/A";
    const population = (country.population / 1000000).toFixed(2);
    const languages = Object.values(country.languages).join(", ") || "N/A";
    const currency =
        Object.values(country.currencies)
            .map((curr) => `${curr.name} (${curr.symbol})`)
            .join(", ") || "N/A";

    const timezones = country.timezones[0];
    const borders = country.borders.join(", ") || "None";

    console.log(currency);

    const html = `
         <article class="country">
    <img class="country__img" src="${flagImage}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__capital">${capital}</h4>
      <p class="country__row"><span>👫</span>${population} M</p>
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
