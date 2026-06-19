# WorldView

**Real-Time Global Intelligence Dashboard**

Free, open-source intelligence platform aggregating live news, markets, military movements, conflicts, and infrastructure into one unified real-time dashboard. Powered by 65+ live data sources.

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![GitHub Stars](https://img.shields.io/github/stars/mannie09/World_View?style=social)](https://github.com/mannie09/World_View)
[![GitHub Issues](https://img.shields.io/github/issues/mannie09/World_View)](https://github.com/mannie09/World_View/issues)

---

## What It Does

- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 56 map layer types
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Instability Index (CII)** — server-authoritative CII v8 stress scoring for 31 Tier-1 countries
- **Finance radar** — 29 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **6 site variants** from a single codebase (world, tech, finance, commodity, happy, energy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **24 languages** with native-language feeds and RTL support

---

## Quick Start

```bash
git clone https://github.com/mannie09/World_View.git
cd World_View
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). The app runs with no environment variables.

Feature-specific data sources may require credentials — see `.env.example` for the full list.

### Variant Development

```bash
npm run dev:tech        # tech.worldview.app
npm run dev:finance     # finance.worldview.app
npm run dev:commodity   # commodity.worldview.app
npm run dev:happy       # happy.worldview.app
npm run dev:energy      # energy.worldview.app
```

---

## Tech Stack

- **Frontend**: TypeScript SPA (Vite + Preact), class-based components
- **Backend**: Vercel Edge Functions (plain JS, self-contained)
- **Maps**: globe.gl (3D), deck.gl (flat WebGL)
- **Desktop**: Tauri 2 (Rust + Node.js sidecar)
- **AI**: Ollama (local), OpenAI, Anthropic (cloud)
- **Database**: Redis (Upstash) for caching
- **Auth**: Clerk
- **Deployment**: Vercel (web), Railway (relay/seeds), GitHub Actions (CI)

---

## Site Variants

| Variant | Focus |
|---------|-------|
| `full` (default) | Geopolitics, conflicts, military, infrastructure |
| `tech` | AI labs, startups, cloud, cybersecurity |
| `finance` | Global markets, central banks, forex, crypto |
| `commodity` | Mining, energy, supply chains, freight |
| `happy` | Positive news, breakthroughs, conservation |
| `energy` | Oil, gas, chokepoints, energy security |

---

## Data Sources

WorldView aggregates **65+ external providers** across geopolitics, finance, energy, climate, aviation, cyber, military, infrastructure, and news intelligence — surfaced through **500+ curated feeds** tracked by a freshness monitor covering **35 source groups**.

Key sources include: ACLED, UCDP, NASA FIRMS, USGS, OpenSky Network, AISStream, FRED, IMF, BIS, OFAC, ECMWF, IAEA, WHO, ADS-B Exchange, and more.

---

## Development

```bash
npm run typecheck        # Type checking
npm run test:data        # Unit/integration tests
npm run test:e2e         # Playwright E2E tests
npm run build:full       # Production build
```

---

## Self-Hosting

See [SELF_HOSTING.md](SELF_HOSTING.md) for deployment options (Vercel, Docker, static).

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

AGPL-3.0-only. See [LICENSE](LICENSE) for details.

Copyright (C) 2024-2026 Mannie. All rights reserved.

---

## Contact

- **Email**: mannie_fossil@rediffmail.com
- **GitHub**: [@mannie09](https://github.com/mannie09)
