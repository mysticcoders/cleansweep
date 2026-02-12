# CleanSweep

A self-assessment quiz app based on the Clean Sweep program. Answer 100 questions across categories like Environment, Health, Money, and Relationships to identify areas of your life worth paying more attention to.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production (outputs to `build/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Auto-fix lint issues |

## Features

- 100 questions across 4 categories
- Progress bar with question counter
- Quiz state is saved to localStorage automatically -- close the browser and pick up where you left off
- Light and dark mode toggle with preference saved across sessions
- CSV export of results
- Category breakdown with scores and percentages

## Tech Stack

- [React](https://react.dev/) with [React Router](https://reactrouter.com/)
- [Bulma](https://bulma.io/) CSS framework
- [Vite](https://vite.dev/) build tool

## Deploying to Netlify

The repo includes a `netlify.toml` with the build configuration:

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **SPA redirects:** All routes fall through to `index.html`

To deploy:

1. Push the repo to GitHub
2. Connect the repo in [Netlify](https://app.netlify.com/)
3. Netlify will auto-detect the settings from `netlify.toml` and deploy

Alternatively, deploy manually with the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```bash
npm run build
npx netlify-cli deploy --prod --dir=build
```

## License

MIT
