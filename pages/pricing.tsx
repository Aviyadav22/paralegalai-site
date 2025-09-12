import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Pricing(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-primary">Pricing</h1>
        <p className="text-gray-600 mt-2">Choose a plan that fits your practice.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold">Freemium — Student & Explorer — Free</h3>
            <p className="text-sm text-gray-600 mt-2">Core public database access, 10–15 AI searches/summaries per month, watermarked document downloads. Community forum support.</p>
            <div className="mt-4">
              <button className="bg-accent text-white px-3 py-2 rounded">Start Free</button>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold">Professional — Solo Practitioner — ~₹999–₹1,250 / month</h3>
            <p className="text-sm text-gray-600 mt-2">Unlimited AI searches & summaries, drafting features, basic case management for limited active cases, email support.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold">Enterprise — Law Firm & Corporate — Custom pricing</h3>
            <p className="text-sm text-gray-600 mt-2">All Pro features + team workspaces, granular permissions, SSO, dedicated onboarding, private cloud/on-prem options, SLA & account management.</p>
            <div className="mt-4"><button className="px-3 py-2 border rounded">Request Enterprise Demo</button></div>
          </div>
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="font-semibold">API Access — The Platform — Tiered / pay-per-call</h3>
            <p className="text-sm text-gray-600 mt-2">Programmatic access for semantic search and summarization. Volume pricing and enterprise SLAs available.</p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
