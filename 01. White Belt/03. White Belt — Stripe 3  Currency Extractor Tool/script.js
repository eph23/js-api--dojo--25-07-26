"use strict";

import data from "./data.js";
console.log(data);

/* TODO: 
Your task — produce this exact output in console:

USD ($) — US Dollar — United States
JPY (¥) — Japanese Yen — Japan
EUR (€) — Euro — European Union
BDT (৳) — Bangladeshi Taka — Bangladesh

Constraints:

One loop only
Extract currency code (USD, JPY etc.) — no hardcoding key names
Console output only, no UI
Use your renderCard pattern — but for console this time
*/

/* ============================================ */
/*                   SOLUTION                   */
data.forEach((country) => {
    const countryName = country.name.common;
    const currencyKey = Object.keys(country.currencies)[0];
    const curr = Object.values(country.currencies)[0];
    const currencyName = curr.name;
    const currencySymbol = curr.symbol;

    console.log(
        `${currencyKey} (${currencySymbol}) - ${currencyName} - ${countryName}`,
    );
});

/* ============================================ */
