const data = [
    {
        name: { common: "Norway", official: "Kingdom of Norway" },
        capital: ["Oslo"],
        population: 5379475,
        flags: { png: "https://flagcdn.com/w320/no.png" },
        languages: {
            nno: "Norwegian Nynorsk",
            nob: "Norwegian Bokmål",
            smi: "Sami",
        },
        currencies: { NOK: { name: "Norwegian krone", symbol: "kr" } },
        timezones: ["UTC+01:00"],
        borders: ["FIN", "SWE", "RUS"],
    },
    {
        name: {
            common: "Sri Lanka",
            official: "Democratic Socialist Republic of Sri Lanka",
        },
        capital: ["Sri Jayawardenepura Kotte"],
        population: 21919000,
        flags: { png: "https://flagcdn.com/w320/lk.png" },
        languages: { sin: "Sinhala", tam: "Tamil" },
        currencies: { LKR: { name: "Sri Lankan rupee", symbol: "Rs" } },
        timezones: ["UTC+05:30"],
        borders: ["IND"],
    },
    {
        name: { common: "Antarctica" },
        capital: [],
        population: 1000,
        flags: { png: "https://flagcdn.com/w320/aq.png" },
        languages: {},
        currencies: {},
        timezones: [
            "UTC-03:00",
            "UTC+03:00",
            "UTC+05:00",
            "UTC+06:00",
            "UTC+07:00",
        ],
        borders: [],
    },
    {
        name: { common: "Panama", official: "Republic of Panama" },
        capital: ["Panama City"],
        population: 4351267,
        flags: { png: "https://flagcdn.com/w320/pa.png" },
        languages: { spa: "Spanish" },
        currencies: {
            PAB: { name: "Panamanian balboa", symbol: "B/." },
            USD: { name: "United States dollar", symbol: "$" },
        },
        timezones: ["UTC-05:00"],
        borders: ["COL", "CRI"],
    },
];

export default data;
