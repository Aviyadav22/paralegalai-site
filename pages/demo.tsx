import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const SAMPLE_QUERY = 'precedent for interim relief in trademark disputes — Delhi High Court';

export default function Demo(){
  const [query, setQuery] = useState(SAMPLE_QUERY)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function runDemo(e:any){
    e?.preventDefault()
    setLoading(true)
    const res = await fetch('/api/mock/query', { method:'POST', body: JSON.stringify({q:query}) })
    const json = await res.json()
    setResult(json)
    setLoading(false)
  }

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">Live demo (mocked)</h1>
        <p className="text-sm text-gray-600 mt-2">This demo simulates a RAG response using seeded documents.</p>

        <form onSubmit={runDemo} className="mt-6">
          <label className="block text-sm font-medium">Query</label>
          <div className="mt-2 flex gap-2">
            <input className="flex-1 border px-3 py-2 rounded" value={query} onChange={e=>setQuery(e.target.value)} />
            <button className="bg-accent text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Running...' : 'Run'}</button>
          </div>
        </form>

        {result && (
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-4 rounded shadow-sm">
              <h2 className="font-semibold">AI Answer</h2>
              <p className="mt-2 text-gray-700">{result.answer}</p>
              <div className="mt-4">
                <h3 className="font-medium">Citations</h3>
                <ul className="mt-2 text-sm text-gray-600">
                  {result.citations.map((c:any,i:number)=>(<li key={i}><a className="underline" href={c.url} target="_blank" rel="noreferrer">{c.title}</a> — paragraph {c.paragraph}</li>))}
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold">Source Viewer</h3>
              <div className="mt-2 text-sm text-gray-600">
                <p><strong>{result.citations[0].title}</strong></p>
                <p className="mt-2">[Highlighted snippet placeholder] — clicking a citation in the real product scrolls to paragraph anchors in the original document.</p>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  )
}
