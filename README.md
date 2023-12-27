## Getting Started

```
# creating
npx create-next-app@latest connor
cd Dev/connor

# running the server on http://localhost:3000
npm run dev
# press Ctrl+C to stop 

npx @next/codemod new-link .
```

## Scructure
Below is the structure of the added files to the base nextjs project

```
connor/
├── pages/
│   ├── index.js
│   ├── apps/
│   │   └── [id].js
│   └── ...
├── components/
│   └── AppCard.js
├── public/
│   └── data/
│       └── apps.csv
└── ...
```

## Next steps

Add data.csv to index 

Use Headless Library to front search

Pagination of the main page

Categories based on industries and/or use case

Styling of the [id] page

(TBD) Sitemap generation

## Big future plans

Recreate data.csv dynamically using Github API; add contributors

Set up a system to add other connectors that are not part of the repository (i.e. https://exchange.adobe.com/apps/ec/102840/coveo-connector-for-adobe-experience-manager)
