import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1f1d1b] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#6b7280]">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-[#9ca3af] mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-[#f8f5f0] border-l-4 border-[#c5a880] p-6 mb-8">
              <p className="text-[#1f1d1b] font-medium mb-2">
                <strong>Important Notice:</strong>
              </p>
              <p className="text-[#6b7280] text-sm">
                This Privacy Policy describes how Paralegal AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, 
                and protects your personal information when you use our AI-powered legal research platform. 
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.1 Personal Information</h3>
              <p className="text-[#6b7280] mb-4">
                We collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Account Information:</strong> Full name, email address, professional designation, law firm affiliation, and profile picture (when using third-party authentication services)</li>
                <li><strong>Professional Details:</strong> Bar enrollment number, practice areas, years of experience, and institutional affiliations</li>
                <li><strong>Contact Information:</strong> Phone number, mailing address, and preferred communication methods</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors), and transaction history</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.2 Usage and Technical Data</h3>
              <p className="text-[#6b7280] mb-4">
                We automatically collect certain information about your use of our platform:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Research Queries:</strong> Search terms, case law citations, legal concepts searched, and research patterns</li>
                <li><strong>Document Interactions:</strong> Documents accessed, analysis requests, drafting activities, and collaboration features used</li>
                <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers, and mobile network information</li>
                <li><strong>Usage Analytics:</strong> Time spent on platform, features utilized, error logs, and performance metrics</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address (for compliance and service optimization)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-[#6b7280] mb-4">
                We use various tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Essential Cookies:</strong> Required for platform functionality, authentication, and security</li>
                <li><strong>Analytics Cookies:</strong> Help us understand user behavior and improve our services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and customizations</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising and promotional communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                2. How We Use Your Information
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.1 Primary Service Delivery</h3>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Provide AI-powered legal research and case law analysis services</li>
                <li>Generate legal document drafts and contract templates</li>
                <li>Deliver personalized legal insights and recommendations</li>
                <li>Maintain and update your professional profile and preferences</li>
                <li>Process payments and manage subscription services</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.2 Platform Improvement and Development</h3>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Analyze usage patterns to enhance AI algorithms and accuracy</li>
                <li>Develop new features and legal research capabilities</li>
                <li>Conduct research and development for legal technology innovation</li>
                <li>Improve user interface and overall platform experience</li>
                <li>Train and refine machine learning models (using anonymized data)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.3 Communication and Support</h3>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Send important service updates, security alerts, and policy changes</li>
                <li>Provide customer support and technical assistance</li>
                <li>Share educational content, legal updates, and industry insights</li>
                <li>Conduct user surveys and feedback collection</li>
                <li>Send marketing communications (with your explicit consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.4 Legal and Compliance</h3>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Comply with applicable laws, regulations, and legal obligations</li>
                <li>Respond to legal requests, court orders, and government inquiries</li>
                <li>Protect our rights, property, and the safety of our users</li>
                <li>Prevent fraud, abuse, and unauthorized access to our services</li>
                <li>Maintain audit trails and compliance records as required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                3. Data Security and Protection
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">3.1 Security Measures</h3>
              <p className="text-[#6b7280] mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication, role-based access controls, and regular access reviews</li>
                <li><strong>Infrastructure Security:</strong> Secure cloud hosting with regular security audits and penetration testing</li>
                <li><strong>Data Minimization:</strong> We collect only the minimum necessary information for service delivery</li>
                <li><strong>Regular Updates:</strong> Continuous security monitoring, vulnerability assessments, and system updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">3.2 Data Breach Response</h3>
              <p className="text-[#6b7280] mb-4">
                In the unlikely event of a data breach, we will:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Immediately investigate and contain the breach</li>
                <li>Notify affected users within 72 hours of discovery</li>
                <li>Report to relevant authorities as required by law</li>
                <li>Provide detailed information about the breach and remediation steps</li>
                <li>Offer credit monitoring and identity protection services if appropriate</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                4. Your Privacy Rights
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.1 General Rights</h3>
              <p className="text-[#6b7280] mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete personal information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your personal information</li>
                <li><strong>Objection:</strong> Object to certain types of data processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.2 GDPR Rights (EU Residents)</h3>
              <p className="text-[#6b7280] mb-4">
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Right to be informed about data processing activities</li>
                <li>Right to data portability and automated decision-making</li>
                <li>Right to lodge a complaint with supervisory authorities</li>
                <li>Right to compensation for damages resulting from data protection violations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.3 CCPA Rights (California Residents)</h3>
              <p className="text-[#6b7280] mb-4">
                California residents have specific rights under the California Consumer Privacy Act:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Right to know what personal information is collected and how it&apos;s used</li>
                <li>Right to delete personal information (with certain exceptions)</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                5. Data Sharing and Third Parties
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.1 Service Providers</h3>
              <p className="text-[#6b7280] mb-4">
                We may share your information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Cloud hosting and data storage services</li>
                <li>Payment processing and billing management</li>
                <li>Customer support and communication platforms</li>
                <li>Analytics and performance monitoring</li>
                <li>AI model training and improvement (using anonymized data only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.2 Legal Requirements</h3>
              <p className="text-[#6b7280] mb-4">
                We may disclose your information when required by law or to:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Comply with court orders, subpoenas, or legal processes</li>
                <li>Respond to government investigations or regulatory requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or illegal activities</li>
                <li>Enforce our Terms of Service or other agreements</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.3 Business Transfers</h3>
              <p className="text-[#6b7280] mb-6">
                In the event of a merger, acquisition, or sale of assets, your personal information may be 
                transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                6. Data Retention and Deletion
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">6.1 Retention Periods</h3>
              <p className="text-[#6b7280] mb-4">
                We retain your personal information for different periods depending on the type of data:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li><strong>Account Information:</strong> Retained for the duration of your account plus 7 years for legal compliance</li>
                <li><strong>Usage Data:</strong> Retained for 3 years for service improvement and analytics</li>
                <li><strong>Research Queries:</strong> Anonymized and retained for 2 years for AI model training</li>
                <li><strong>Payment Records:</strong> Retained for 7 years as required by financial regulations</li>
                <li><strong>Communication Records:</strong> Retained for 3 years for customer support purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">6.2 Deletion Process</h3>
              <p className="text-[#6b7280] mb-6">
                When you request account deletion or when retention periods expire, we will:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Permanently delete your personal information from our active systems</li>
                <li>Remove your data from backup systems within 90 days</li>
                <li>Anonymize any data that must be retained for legal or business purposes</li>
                <li>Provide confirmation of deletion upon request</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                7. International Data Transfers
              </h2>
              <p className="text-[#6b7280] mb-4">
                Your personal information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Certification schemes and codes of conduct</li>
                <li>Binding corporate rules and other appropriate safeguards</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-[#6b7280] mb-6">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If we become aware that we have collected personal 
                information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-[#6b7280] mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. When we make material changes, we will:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Post the updated policy on our website with a new effective date</li>
                <li>Notify you via email or through our platform at least 30 days before changes take effect</li>
                <li>Highlight significant changes in a summary at the top of the policy</li>
                <li>Provide an opportunity to review and accept the updated terms</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                10. Contact Information and Complaints
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">10.1 Data Protection Officer</h3>
              <p className="text-[#6b7280] mb-4">
                For privacy-related inquiries, data subject requests, or complaints, please contact our Data Protection Officer:
              </p>
              <div className="bg-[#f8f5f0] p-6 rounded-lg mb-6">
                <p className="text-[#1f1d1b] font-semibold mb-2">Data Protection Officer</p>
                <p className="text-[#6b7280] mb-2">Paralegal AI Legal Department</p>
                <p className="text-[#6b7280] mb-2">Email: <a href="mailto:privacy@paralegalai.com" className="text-[#c5a880] hover:underline">privacy@paralegalai.com</a></p>
                <p className="text-[#6b7280] mb-2">Phone: +91-11-XXXX-XXXX</p>
                <p className="text-[#6b7280]">Response Time: Within 72 hours for urgent matters, 30 days for complex requests</p>
              </div>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">10.2 Supervisory Authority</h3>
              <p className="text-[#6b7280] mb-6">
                If you are not satisfied with our response to your privacy concerns, you have the right to 
                lodge a complaint with your local data protection supervisory authority. For EU residents, 
                you can find your supervisory authority at: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-[#c5a880] hover:underline">https://edpb.europa.eu/about-edpb/board/members_en</a>
              </p>
            </section>

            <div className="bg-[#f8f5f0] border-l-4 border-[#c5a880] p-6 mt-8">
              <p className="text-[#1f1d1b] font-medium mb-2">
                <strong>Questions About This Policy?</strong>
              </p>
              <p className="text-[#6b7280] text-sm">
                If you have any questions about this Privacy Policy or our data practices, please don&apos;t hesitate 
                to contact us. We&apos;re committed to transparency and will respond to all inquiries promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}