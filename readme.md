# 🥋 API Belt Training Dojo

A structured, self-paced training system for mastering JavaScript API handling, JSON data manipulation, and DOM rendering — built as a foundation for React and Next.js development.

---

## 🎯 Goal

To go from **freezing on real API data** to confidently reading, transforming, and rendering any API response — without hesitation.

By the end of this training, I will be able to:

- Read any API response and identify its structure instantly
- Break complex nested JSON into simple, usable parts
- Avoid confusion with arrays vs objects in real responses
- Build UI from API data without hesitation
- Think like a React developer before writing a single React component

---

## 🏗 Structure

Each **belt** contains **5 stripes** (exercises) + **2 bonus exercises** + **1 Belt Test**.

- Stripes = guided practice with hints allowed
- Belt Test = unseen challenge, no hints, one submission

### Belt System

| Belt | Focus | Status |
|------|-------|--------|
| 🟢 White | Data Literacy — read and extract any API response | ✅ Complete |
| 🟡 Yellow | Data Transformation — reshape raw API into clean formats | ✅ Complete |
| 🟠 Orange | Real World UI — render API data to the DOM | 🔄 In Progress |
| 🔴 Red | Advanced Thinking — error handling, loading states, normalization layers | ⏳ Pending |
| ⚫ Black | React Ready — rebuild everything in React | ⏳ Pending |

---

## 📁 Folder Structure

```
api-belt-training/
├── white-belt/
│   ├── stripe-1-country-card/
│   ├── stripe-2-multi-country-loop/
│   └── stripe-3-currency-extractor/
├── yellow-belt/
│   ├── stripe-1-data-reshaping/
│   ├── stripe-2-comparison-tool/
│   ├── stripe-3-search-filter/
│   ├── stripe-4-user-profile-viewer/
│   ├── stripe-5-combined-challenge/
│   ├── bonus-1-product-inventory/
│   ├── bonus-2-student-grade-analyzer/
│   └── belt-test-employee-analyzer/
├── orange-belt/
│   └── stripe-1-country-dashboard/
└── README.md
```

---

## 🧠 Core Training Philosophy

**1. Structure first** — always identify the data shape before writing any code.

**2. No blind coding** — `console.log` the data, inspect the structure, then extract.

**3. Step-by-step decomposition** — break every API into layers before extraction.

**4. Normalize before rendering** — raw API → clean shape → UI. Never skip normalization.

---

## ⚔️ The Mental Checklist

> **"What am I looking at?"**
> - `[]` → array → use index, `.map()`, `.forEach()`
> - `{}` → object → use dot notation, `Object.keys/values/entries`
> - `{}` with unpredictable keys → use `Object.values()[0]` or loop with `Object.entries()`
> - Field might be missing → use `?.` and `??`
> - Know the key → dot notation. Don't know the key → `Object.values()`

---

## 🛠 Methods Covered

| Method | Purpose | Belt Introduced |
|--------|---------|-----------------|
| `forEach` | Loop through array | 🟢 White |
| `Object.values` | Get values from object | 🟢 White |
| `Object.keys` | Get keys from object | 🟢 White |
| `Object.entries` | Get key-value pairs | 🟢 White |
| `?.` optional chaining | Safe access on nullable fields | 🟢 White |
| `??` nullish coalescing | Fallback for null/undefined | 🟢 White |
| `map` | Transform array into new array | 🟡 Yellow |
| `filter` | Filter array by condition | 🟡 Yellow |
| `reduce` | Accumulate values / find min/max | 🟡 Yellow |
| `find` | Get first matching item | 🟠 Orange |
| `includes` | Check if value exists in array | 🟡 Yellow |
| `String.includes` | Check substring match | 🟡 Yellow |
| `join` | Array → string | 🟢 White |
| `toFixed` | Round to decimal places | 🟡 Yellow |
| `toLocaleString` | Format numbers with commas | 🟡 Yellow |

---

## ⚠️ Key Lessons Learned

- **Array wrapping** — always unwrap with `[0]` before accessing properties
- **`toFixed()` returns a string** — use `+` prefix to keep as number
- **Dynamic keys** — use `Object.values()` when you can't predict key names
- **`reduce` accumulator** — acc and cur are always the same type as the starting value
- **Variable naming** — descriptive names only. `failingStudents` not `looserStudents`
- **Booleans read as questions** — `isActive`, `hasScholarship`
- **API keys** — never commit to GitHub. Use `.env` + `.gitignore`
- **Normalize first** — always transform raw data before touching the DOM

---

## 🔗 Resources

- [MDN Web Docs](https://developer.mozilla.org) — primary reference
- [REST Countries API v5](https://restcountries.com) — country data
- [CoinGecko API](https://api.coingecko.com) — crypto data (Orange Belt)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com) — mock REST API

---

## 👤 About

Self-taught developer working toward: **JavaScript → React → Next.js → Full Stack**.

Training under a strict mentor system — hints only, no direct answers, MDN first.