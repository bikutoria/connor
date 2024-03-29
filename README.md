## Getting Started

Connectivity Library was an inspiration for an app, and it starts with the same 4 letters. Connectivity, Connor.

Also, in loving memory of Sinead O'Connor.

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

- ✅ Add data.csv to index with Push Source
- ✅ Use Headless Library to front search
- Add commerce events and trackers
- Enable embeddings on the source
- Add a CIU category for RT context
- Define essential metadata (protocol of acceptance) that a partner's page needs to be a part of the library for supplier quality management
- Define events that needs to be tracked on the app for connectivity product decision-making

## Mid-term

- Fix overall styling (https://tailwindcss.com/?), especially [id] page
- Add pagination or infinite scroll on the main page
- Discuss a submission protocol for [id] page for supplier management
- Add filtering/categories based on industries and/or use case
- Code refactoring and clean up (components, I am looking at you)

## Big future plans

- Try indexing with catalog source / embeddings to test vector search
- Recreate data.csv dynamically using Github API;
- Set up a system to add other connectors that are not part of the repository (i.e. https://exchange.adobe.com/apps/ec/102840/coveo-connector-for-adobe-experience-manager)
