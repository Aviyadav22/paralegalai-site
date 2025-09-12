# Where to replace mocks with real services

- /pages/api/mock/query.ts -> replace with server-side RAG pipeline:
  - Step 1: retrieve top-k vectors from VECTOR_DB_URL
  - Step 2: stitch documents and call LLM with citations
  - Step 3: return structured answer { answer, citations }

- Auth: implement routes under /pages/api/auth and use middleware for protected routes.

- Stripe: create /pages/api/stripe/* endpoints for payments and webhooks.

- Calendly: replace contact form with Calendly embed script or link.

Recommended providers:
- Vector DB: Pinecone, Weaviate, OpenSearch, Elastic
- Embeddings: OpenAI embeddings, or self-hosted model embeddings
- LLM: OpenAI, Anthropic, or private model via API gateway

