# Crypto Trading Terminals

CSCI426 Project Phase I. A small React site that explains what a crypto trading terminal is and shows the top companies.

## Run

```bash
npm install
npm run dev
```

Open the URL that Vite prints (usually http://localhost:5173).

## Pages

- **Home**: what a terminal is, the main features, the types of terminals, and how it works.
- **Companies**: a card for each company, with a Like counter.
- **Compare**: all the companies in one table.
- **Contact**: a form to suggest a terminal. Suggestions show in a table and you can delete them. The table shows a message when it is empty.
- **About**: what the site is, the course topics it uses, and the sources.

## Course Topics Used

- Components and props, with many small components.
- React Router: `Routes`, `Route`, and `Link`.
- `useState` and events (Like click, form submit, delete click).
- A controlled form.
- Lists with `map` and `filter`.
- The ternary operator (empty table row).

## Structure

```
src/
  main.jsx         entry point
  App.jsx          router, navbar, footer
  pages/           Home, Companies, Compare, Contact, About
  components/      small reusable components
  data/            companies, features, types, steps, topics, sources
```

Built with Vite, React, React Router, and Bootstrap.
