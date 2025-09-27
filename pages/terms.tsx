import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1f1d1b] mb-4">
              Terms of Service
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
                These Terms of Service (&quot;Terms&quot;) govern your use of Paralegal AI&apos;s AI-powered legal research 
                and drafting platform. By accessing or using our services, you agree to be bound by these Terms. 
                Please read them carefully before using our platform.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                1. Acceptance of Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.1 Agreement to Terms</h3>
              <p className="text-[#6b7280] mb-4">
                By accessing, browsing, or using Paralegal AI (&quot;Platform,&quot; &quot;Service,&quot; or &quot;we&quot;), you acknowledge 
                that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these Terms, you may not access or use our Platform.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.2 Capacity to Enter Agreement</h3>
              <p className="text-[#6b7280] mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>You are at least 18 years of age and have the legal capacity to enter into this agreement</li>
                <li>You are a licensed legal professional, law student, or authorized legal support staff</li>
                <li>You have the authority to bind any organization you represent to these Terms</li>
                <li>Your use of the Platform will not violate any applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">1.3 Modifications to Terms</h3>
              <p className="text-[#6b7280] mb-6">
                We reserve the right to modify these Terms at any time. We will notify users of material changes 
                via email or through our Platform at least 30 days before changes take effect. Your continued 
                use of the Platform after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                2. Description of Services
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.1 AI-Powered Legal Research</h3>
              <p className="text-[#6b7280] mb-4">
                Paralegal AI provides artificial intelligence-powered legal research tools that include:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Semantic search across Indian case law, statutes, and legal precedents</li>
                <li>AI-generated case law summaries and legal analysis</li>
                <li>Citation verification and legal authority checking</li>
                <li>Trend analysis and legal research insights</li>
                <li>Integration with major legal databases and repositories</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.2 Document Drafting and Analysis</h3>
              <p className="text-[#6b7280] mb-4">
                Our platform offers AI-assisted legal document services:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Automated generation of legal documents, contracts, and pleadings</li>
                <li>Document review and clause analysis</li>
                <li>Legal compliance checking and risk assessment</li>
                <li>Template customization and document formatting</li>
                <li>Collaborative editing and version control</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">2.3 Professional Features</h3>
              <p className="text-[#6b7280] mb-6">
                Additional features for legal professionals include client management tools, billing integration, 
                team collaboration features, and advanced analytics for practice management.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                3. User Accounts and Registration
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">3.1 Account Creation</h3>
              <p className="text-[#6b7280] mb-4">
                To access our services, you must create an account by providing accurate, complete, and current 
                information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Promptly notifying us of any unauthorized use or security breaches</li>
                <li>Updating your account information to keep it accurate and current</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">3.2 Professional Verification</h3>
              <p className="text-[#6b7280] mb-4">
                We may require verification of your professional credentials, including:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Bar enrollment verification for practicing lawyers</li>
                <li>Institutional affiliation for law students and academic users</li>
                <li>Professional references and background checks</li>
                <li>Compliance with continuing legal education requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">3.3 Account Suspension and Termination</h3>
              <p className="text-[#6b7280] mb-6">
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in 
                fraudulent activity, or pose a security risk to our Platform or other users.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                4. Acceptable Use Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.1 Permitted Uses</h3>
              <p className="text-[#6b7280] mb-4">
                You may use our Platform for legitimate legal research and professional purposes, including:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Conducting legal research for client matters and cases</li>
                <li>Drafting legal documents and contracts</li>
                <li>Educational and academic research purposes</li>
                <li>Professional development and continuing legal education</li>
                <li>Internal law firm or legal department operations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.2 Prohibited Uses</h3>
              <p className="text-[#6b7280] mb-4">
                You agree not to use our Platform for any unlawful or prohibited purposes, including:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Violating any applicable laws, regulations, or professional conduct rules</li>
                <li>Attempting to reverse engineer, hack, or compromise our systems</li>
                <li>Sharing account credentials or allowing unauthorized access</li>
                <li>Using the Platform for commercial purposes without proper licensing</li>
                <li>Uploading malicious code, viruses, or harmful content</li>
                <li>Impersonating other users or providing false information</li>
                <li>Interfering with the proper functioning of the Platform</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">4.3 Content Standards</h3>
              <p className="text-[#6b7280] mb-6">
                All content uploaded to or generated through our Platform must comply with applicable laws, 
                professional ethics rules, and our content policies. You are solely responsible for the 
                accuracy, legality, and appropriateness of all content you submit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                5. Intellectual Property Rights
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.1 Platform Ownership</h3>
              <p className="text-[#6b7280] mb-4">
                Paralegal AI and its licensors own all rights, title, and interest in and to the Platform, 
                including all intellectual property rights. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Software, algorithms, and AI models</li>
                <li>User interface designs and user experience elements</li>
                <li>Database structures and data organization methods</li>
                <li>Trademarks, logos, and branding materials</li>
                <li>Documentation, training materials, and educational content</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.2 User Content</h3>
              <p className="text-[#6b7280] mb-4">
                You retain ownership of content you upload to our Platform. However, by using our services, 
                you grant us a limited, non-exclusive license to:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Process, store, and analyze your content to provide our services</li>
                <li>Use anonymized data to improve our AI models and algorithms</li>
                <li>Backup and maintain your content for service continuity</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">5.3 Generated Content</h3>
              <p className="text-[#6b7280] mb-6">
                Content generated by our AI systems (including research results, document drafts, and analyses) 
                is provided for your professional use. You are responsible for reviewing, verifying, and 
                customizing all AI-generated content before use in professional contexts.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                6. Payment Terms and Billing
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">6.1 Subscription Plans</h3>
              <p className="text-[#6b7280] mb-4">
                We offer various subscription plans with different features and usage limits. Current pricing 
                and plan details are available on our Platform. All fees are:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Charged in advance for the billing period</li>
                <li>Non-refundable except as required by law</li>
                <li>Subject to applicable taxes and fees</li>
                <li>Automatically renewed unless cancelled before the renewal date</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">6.2 Payment Processing</h3>
              <p className="text-[#6b7280] mb-4">
                Payments are processed through secure third-party payment processors. You authorize us to 
                charge your designated payment method for all applicable fees. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Maintaining current and valid payment information</li>
                <li>Paying all applicable taxes and fees</li>
                <li>Resolving any payment disputes with your financial institution</li>
                <li>Notifying us of any changes to your payment method</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">6.3 Refunds and Cancellations</h3>
              <p className="text-[#6b7280] mb-6">
                Refunds are provided only in accordance with our refund policy and applicable law. You may 
                cancel your subscription at any time through your account settings. Cancellation will take 
                effect at the end of your current billing period.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                7. Privacy and Data Protection
              </h2>
              <p className="text-[#6b7280] mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal 
                information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-[#6b7280] mb-6">
                We implement industry-standard security measures to protect your data, including encryption, 
                access controls, and regular security audits. However, no system is completely secure, and 
                you acknowledge that you use our Platform at your own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                8. Disclaimers and Limitations of Liability
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">8.1 Service Disclaimers</h3>
              <p className="text-[#6b7280] mb-4">
                Our Platform and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. 
                We disclaim all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Accuracy, completeness, or reliability of AI-generated content</li>
                <li>Uninterrupted or error-free operation of the Platform</li>
                <li>Compatibility with all devices, browsers, or third-party software</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">8.2 Legal Advice Disclaimer</h3>
              <p className="text-[#6b7280] mb-4">
                <strong>Important:</strong> Our Platform provides AI-assisted legal research and drafting tools, 
                but does not constitute legal advice. All content generated by our AI systems should be:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Reviewed and verified by qualified legal professionals</li>
                <li>Customized to specific client needs and circumstances</li>
                <li>Checked for accuracy and compliance with applicable laws</li>
                <li>Used in accordance with professional conduct rules</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">8.3 Limitation of Liability</h3>
              <p className="text-[#6b7280] mb-6">
                To the maximum extent permitted by law, Paralegal AI shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of 
                profits, data, or business opportunities, arising from your use of our Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                9. Indemnification
              </h2>
              <p className="text-[#6b7280] mb-4">
                You agree to indemnify, defend, and hold harmless Paralegal AI and its officers, directors, 
                employees, and agents from and against any claims, damages, losses, costs, and expenses 
                (including reasonable attorneys&apos; fees) arising from:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Your use of the Platform in violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your infringement of any third-party rights</li>
                <li>Content you upload or generate through our Platform</li>
                <li>Your professional use of AI-generated content without proper verification</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                10. Termination
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">10.1 Termination by You</h3>
              <p className="text-[#6b7280] mb-6">
                You may terminate your account at any time by contacting our support team or using the 
                account deletion feature in your settings. Upon termination, your access to the Platform 
                will cease, and we will delete your personal data in accordance with our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">10.2 Termination by Us</h3>
              <p className="text-[#6b7280] mb-4">
                We may terminate or suspend your account immediately if you:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Violate these Terms or our Acceptable Use Policy</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Fail to pay applicable fees when due</li>
                <li>Pose a security risk to our Platform or other users</li>
                <li>Use our services in a manner that violates professional conduct rules</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">10.3 Effect of Termination</h3>
              <p className="text-[#6b7280] mb-6">
                Upon termination, your right to use the Platform ceases immediately. We may delete your 
                account data and content, though we may retain certain information as required by law or 
                for legitimate business purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                11. Governing Law and Dispute Resolution
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">11.1 Governing Law</h3>
              <p className="text-[#6b7280] mb-6">
                These Terms are governed by the laws of India, without regard to conflict of law principles. 
                Any legal action or proceeding arising under these Terms will be brought exclusively in the 
                courts of New Delhi, India.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">11.2 Dispute Resolution</h3>
              <p className="text-[#6b7280] mb-4">
                Before initiating any legal proceedings, the parties agree to attempt to resolve disputes 
                through good faith negotiations. If negotiations fail, disputes will be resolved through:
              </p>
              <ul className="list-disc list-inside text-[#6b7280] mb-6 space-y-3 ml-4">
                <li>Mediation through a mutually agreed mediator</li>
                <li>Binding arbitration under the Arbitration and Conciliation Act, 2015</li>
                <li>Court proceedings only if alternative dispute resolution fails</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                12. General Provisions
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">12.1 Entire Agreement</h3>
              <p className="text-[#6b7280] mb-6">
                These Terms, together with our Privacy Policy and any other legal notices published on our 
                Platform, constitute the entire agreement between you and Paralegal AI regarding your use of our services.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">12.2 Severability</h3>
              <p className="text-[#6b7280] mb-6">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining 
                provisions will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">12.3 Waiver</h3>
              <p className="text-[#6b7280] mb-6">
                Our failure to enforce any provision of these Terms does not constitute a waiver of that 
                provision or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">12.4 Assignment</h3>
              <p className="text-[#6b7280] mb-6">
                You may not assign or transfer your rights or obligations under these Terms without our 
                prior written consent. We may assign these Terms in connection with a merger, acquisition, 
                or sale of assets.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-6 border-b border-[#e5e7eb] pb-2">
                13. Contact Information
              </h2>
              <p className="text-[#6b7280] mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[#f8f5f0] p-6 rounded-lg mb-6">
                <p className="text-[#1f1d1b] font-semibold mb-2">Legal Department</p>
                <p className="text-[#6b7280] mb-2">Paralegal AI</p>
                <p className="text-[#6b7280] mb-2">Email: <a href="mailto:legal@paralegalai.com" className="text-[#c5a880] hover:underline">legal@paralegalai.com</a></p>
                <p className="text-[#6b7280] mb-2">Phone: +91-11-XXXX-XXXX</p>
                <p className="text-[#6b7280] mb-2">Address: [Company Address], New Delhi, India</p>
                <p className="text-[#6b7280]">Response Time: Within 48 hours for general inquiries, 24 hours for urgent matters</p>
              </div>
            </section>

            <div className="bg-[#f8f5f0] border-l-4 border-[#c5a880] p-6 mt-8">
              <p className="text-[#1f1d1b] font-medium mb-2">
                <strong>Questions About These Terms?</strong>
              </p>
              <p className="text-[#6b7280] text-sm">
                Our legal team is available to answer any questions you may have about these Terms of Service. 
                We&apos;re committed to transparency and ensuring you understand your rights and obligations when using our Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}