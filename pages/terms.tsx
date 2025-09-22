import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6b7280] mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Acceptance of Terms</h2>
            <p className="text-[#6b7280] mb-6">
              By accessing and using Paralegal AI, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Use License</h2>
            <p className="text-[#6b7280] mb-6">
              Permission is granted to temporarily use Paralegal AI for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Disclaimer</h2>
            <p className="text-[#6b7280] mb-6">
              The materials on Paralegal AI are provided on an &apos;as is&apos; basis. Paralegal AI makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other 
              warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Limitations</h2>
            <p className="text-[#6b7280] mb-6">
              In no event shall Paralegal AI or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on Paralegal AI, even if Paralegal AI or an authorized representative has been 
              notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Contact Information</h2>
            <p className="text-[#6b7280] mb-6">
              If you have any questions about these Terms of Service, please contact us at{" "}
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
