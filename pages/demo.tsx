import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"
import { Search, FileText, Clock, CheckCircle, ArrowRight, Loader2 } from "lucide-react"

export default function Demo() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    
    setLoading(true)
    try {
      const response = await fetch("/api/mock/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      // Handle error silently in production
    } finally {
      setLoading(false)
    }
  }

  const sampleQueries = [
    "What are the requirements for filing a divorce petition?",
    "How to register a trademark in India?",
    "What is the procedure for property registration?",
    "What are the penalties for cybercrime under IT Act?",
    "How to file a consumer complaint?",
    "What are the rights of tenants in India?"
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Try Paralegal AI Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of AI-powered legal research. Ask any legal question and get instant, 
            accurate answers with relevant case laws and judgments.
          </p>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1f1d1b] mb-6 text-center">
              Ask Your Legal Question
            </h2>
            
            {/* Search Interface */}
            <div className="mb-8">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask any legal question... (e.g., What are the requirements for filing a divorce petition?)"
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a880] focus:border-transparent"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={loading || !query.trim()}
                  className="bg-[#1f1d1b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4b2e2e] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      Search
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sample Queries */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#1f1d1b] mb-4">
                Try these sample queries:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {sampleQueries.map((sampleQuery, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(sampleQuery)}
                    className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition"
                  >
                    {sampleQuery}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#c5a880]" />
                  Search Results
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-[#f8f5f0] p-6 rounded-lg">
                    <h4 className="font-semibold text-[#1f1d1b] mb-3">Answer:</h4>
                    <p className="text-gray-700 leading-relaxed">{result.answer}</p>
                  </div>

                  {result.citations && result.citations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[#1f1d1b] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#c5a880]" />
                        Relevant Cases & Laws:
                      </h4>
                      <div className="space-y-3">
                        {result.citations.map((citation: any, index: number) => (
                          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-medium text-[#1f1d1b] mb-2">{citation.title}</h5>
                            <p className="text-sm text-gray-600 mb-2">{citation.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {citation.year}
                              </span>
                              <span>{citation.court}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Why Choose Paralegal AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform is designed specifically for Indian legal practice, 
              providing accurate and comprehensive legal research tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-3">
                Instant Research
              </h3>
              <p className="text-gray-600">
                Get comprehensive legal research results in seconds, not hours. 
                Our AI searches through thousands of cases and statutes instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-3">
                Accurate Citations
              </h3>
              <p className="text-gray-600">
                Every answer comes with proper legal citations and references, 
                ensuring you have the authority to back up your legal arguments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-3">
                Always Updated
              </h3>
              <p className="text-gray-600">
                Our database is continuously updated with the latest judgments, 
                amendments, and legal developments across all courts in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who trust Paralegal AI for their research needs.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f1d1b] transition"
              >
                View Pricing Plans
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}