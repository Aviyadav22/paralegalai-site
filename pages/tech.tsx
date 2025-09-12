import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Tech(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">Augmentation, not automation</h1>
        <p className="mt-4 text-gray-700">Paralegal AI is designed to enhance legal professionals, not replace them. While rote tasks can be automated, legal strategy, client counselling and ethical judgment remain human work. Lawyers who leverage AI will outpace those who do not.</p>

        <p className="mt-4 text-gray-700">Our mission: provide mechanical leverage to the Indian legal system by combining a verified legal database, Retrieval-Augmented Generation (RAG), and a GraphRAG knowledge layer so that outputs are grounded, verifiable, and defensible.</p>

        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Freemium for students</li>
          <li>Affordable Solo plan</li>
          <li>Enterprise-grade security</li>
          <li>API for ecosystem partners</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">How it works</h2>
        <ol className="mt-2 list-decimal pl-6 text-gray-700 space-y-2">
          <li><strong>User Query:</strong> A legal professional asks a natural-language question (e.g., “precedent for interim relief in trademark disputes — Delhi High Court”).</li>
          <li><strong>Retrieval:</strong> Retriever searches a vector DB of semantically indexed legal chunks (judgments, statutes, commentary).</li>
          <li><strong>Augmentation:</strong> Top documents are stitched to the query into a rich prompt.</li>
          <li><strong>Generation & Citation:</strong> The LLM generates an answer grounded in retrieved text with precise citations linking back to the source.</li>
        </ol>

        <p className="mt-4 text-gray-700">A knowledge graph connects cases, statutes, judges and citations. Querying this graph returns clusters of contextually linked evidence — reducing hallucination and improving nuance.</p>

        <h2 className="mt-8 text-xl font-semibold">Data & Sources</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-700">
          <li><strong>Public domain judgments (Supreme Court, High Courts):</strong> ingested via official portals, NJDG, and vetted third-party aggregators.</li>
          <li><strong>Tribunals & Bare Acts:</strong> NCLT, central & state acts.</li>
          <li><strong>Continuous ingestion pipeline:</strong> scraping + OCR for older PDFs, metadata extraction, semantic chunking, and legal-tuned embeddings.</li>
        </ul>

        <p className="mt-4 text-sm text-gray-600">All AI outputs include source citations. Pipeline includes data validation, OCR correction, and change-detection to ensure currency.</p>

      </main>
      <Footer />
    </div>
  )
}
