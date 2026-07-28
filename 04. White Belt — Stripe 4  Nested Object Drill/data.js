const data = [
    {
        name: {
            common: "Switzerland",
            official: "Swiss Confederation",
            nativeName: {
                fra: { common: "Suisse" },
                deu: { common: "Schweiz" },
                ita: { common: "Svizzera" },
            },
        },
        capital: ["Bern"],
        population: 8654622,
        flags: { png: "https://flagcdn.com/w320/ch.png" },
        languages: { fra: "French", deu: "German", ita: "Italian" },
        currencies: { CHF: { name: "Swiss franc", symbol: "Fr" } },
        timezones: ["UTC+01:00"],
        borders: ["AUT", "FRA", "ITA", "LIE", "DEU"],
    },
    {
        name: {
            common: "New Zealand",
            official: "New Zealand",
            nativeName: {
                eng: { common: "New Zealand" },
                mri: { common: "Aotearoa" },
            },
        },
        capital: ["Wellington"],
        population: 5084300,
        flags: { png: "https://flagcdn.com/w320/nz.png" },
        languages: { eng: "English", mri: "Māori" },
        currencies: { NZD: { name: "New Zealand dollar", symbol: "$" } },
        timezones: ["UTC+12:00", "UTC+12:45", "UTC+13:00"],
        borders: [],
    },
    {
        name: {
            common: "Vatican City",
            official: "Vatican City State",
            nativeName: {
                ita: { common: "Città del Vaticano" },
            },
        },
        capital: [],
        population: 825,
        flags: { png: "https://flagcdn.com/w320/va.png" },
        languages: { ita: "Italian", lat: "Latin" },
        currencies: { EUR: { name: "Euro", symbol: "€" } },
        timezones: ["UTC+01:00"],
        borders: ["ITA"],
    },
];

export default data;
