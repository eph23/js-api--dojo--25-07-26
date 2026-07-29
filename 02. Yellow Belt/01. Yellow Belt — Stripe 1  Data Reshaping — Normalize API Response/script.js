"use strict";

import data from "./data.js";
console.log(data);

/* TODO: 
Your task — transform into this clean shape using .map():

{
  name: "Netherlands",
  capital: "Amsterdam",
  population: "17.44 M",
  area: "41,543 km²",
  flag: "https://flagcdn.com/w320/nl.png",
  language: "Dutch",
  currency: "Euro (€)",
  region: "Europe"
}

Then console.log the final normalized array. No UI yet.

Constraints:

.map() only — no forEach
Population formatted to 2dp millions — keep as string this time
Area with comma formatting
currency in "Name (symbol)" format
Console only
*/

/* ============================================ */
/*                   SOLUTION                   */
const formatted = data.map((country) => {
    return {
        name: country.name.common,
        capital: country.capital.join(", "),
        population: `${(country.population / 1000000).toFixed(2)} M`,
        area: `${country.area.toLocaleString()} km²`,
        flag: country.flags.png,
        language: Object.values(country.languages).join(", "),
        currency: Object.values(country.currencies)
            .map((curr) => `${curr.name} (${curr.symbol})`)
            .join(", "),
        region: country.region,
    };
});

console.log(formatted);
/* ============================================ */
