import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6b7280] mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Information We Collect</h2>
            <p className="text-[#6b7280] mb-6">
              When you sign in with Google, we collect your name, email address, and profile picture 
              to provide you with personalized services. We do not store any additional personal 
              information beyond what is necessary for authentication.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">How We Use Your Information</h2>
            <p className="text-[#6b7280] mb-6">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-2">
              <li>Authenticate your identity</li>
              <li>Provide personalized services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our platform</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Data Security</h2>
            <p className="text-[#6b7280] mb-6">
              We implement appropriate security measures to protect your personal information. 
              Your data is encrypted and stored securely using industry-standard practices.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1f1d1b] mb-4">Contact Us</h2>
            <p className="text-[#6b7280] mb-6">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@paralegalai.com" className="text-[#c5a880] hover:underline">
                privacy@paralegalai.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
