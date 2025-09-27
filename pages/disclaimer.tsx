import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6b7280] mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Legal Disclaimer</h2>
            <p className="text-[#6b7280] mb-6">
              The information provided by Paralegal AI is for general informational purposes only. 
              All information on the site is provided in good faith, however we make no representation 
              or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
              reliability, availability or completeness of any information on the site.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Not Legal Advice</h2>
            <p className="text-[#6b7280] mb-6">
              Under no circumstance shall we have any liability to you for any loss or damage of any 
              kind incurred as a result of the use of the site or reliance on any information provided 
              on the site. Your use of the site and your reliance on any information on the site is 
              solely at your own risk.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Professional Legal Advice</h2>
            <p className="text-[#6b7280] mb-6">
              This site cannot and does not contain legal advice. The legal information is provided 
              for general informational and educational purposes only and is not a substitute for 
              professional legal advice. Accordingly, before taking any actions based upon such 
              information, we encourage you to consult with the appropriate legal professionals.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Contact Us</h2>
            <p className="text-[#6b7280] mb-6">
              If you have any questions about this Disclaimer, please contact us at{" "}
              <a href="mailto:legal@paralegalai.com" className="text-[#c5a880] hover:underline">
                legal@paralegalai.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
