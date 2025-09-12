# Paralegal AI — Marketing & Demo Website (Starter)

This repository is a production-ready **starter** website for *Paralegal AI* built with **Next.js (TypeScript)** and **Tailwind CSS**. It contains mocked demo routes and clear integration points for RAG, GraphRAG, Auth, Stripe, and Calendly.

## What you get
- Next.js + TypeScript app with Tailwind styling.
- Homepage, Pricing, Tech (About), Demo (mocked), Contact and a demo API route.
- Accessibility basics (semantic HTML, focus styles, alt text placeholders).
- SEO meta tags, OpenGraph meta and minimal JSON-LD schema in `<head>`.
- Sample seed data and mock API route to simulate RAG responses.
- ENV placeholders in `.env.example`.
- README and DEPLOY.md with one-click deploy instructions.

## Quick start (local)
1. Install dependencies:
```bash
npm install
```
2. Run dev server:
```bash
npm run dev
```
3. Visit http://localhost:3000

## Environment variables
Create a `.env.local` with placeholders (see `.env.example`). This project uses mock integrations; set real keys before wiring production services.

## Integrations & where to connect real services
- **Auth**: see `pages/api/auth/*` (not implemented). Suggested: Clerk, Auth0, or a provider that supports SSO/enterprise.
- **Payments**: Connect Stripe, use `pages/api/webhooks/stripe` to capture events.
- **Calendly**: Replace contact form with Calendly embed or server-side booking link.
- **RAG/Vector DB**: Replace `/api/mock/query` with your retriever + embedding lookup. Comments in code mark integration points. Recommended providers: Pinecone, Weaviate, OpenSearch, Elastic.
- **Embeddings / LLMs**: Use OpenAI, Anthropic, or open models (Llama 2 variants) via a secure backend.

## Accessibility & i18n
- Uses semantic HTML and keyboard-accessible components. Add translation keys and a language toggle component for i18n.

## Deployment
See DEPLOY.md for Vercel one-click instructions.

## Legal pages
`/legal/terms.md` and `/legal/privacy.md` are skeletons — finalize with counsel.

## Notes & TODOs (developer)
- Replace placeholder OG image at `public/assets/og-image.png`.
- Add ESLint & Prettier rules, CI checks, and test suites.
- Implement real auth, payments and RAG pipeline on the server (server components recommended for secret safety).
- Implement analytics and cookie-consent banner.

