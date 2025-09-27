import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { CheckCircle, Search, FileText, Clock, Target, Brain, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-[#D4AF37]" />,
      title: "Smart Legal Research",
      description: "Revolutionary AI-powered legal research that understands context, not just keywords. Transform hours of manual research into minutes of precise, relevant results.",
      detailedDescription: "Traditional keyword-based searches are time-consuming and often miss crucial precedents. Paralegal AI uses advanced semantic understanding to find cases with similar legal principles, even when they use different terminology. Simply describe your case facts, and our AI will identify the most relevant judgments, statutes, and legal precedents with pinpoint accuracy.",
      timeSavings: "Save 8-12 hours per case research",
      benefits: [
        "Context-based semantic search instead of keyword matching",
        "Finds cases with similar legal principles using different terminology",
        "Cross-references Supreme Court and High Court judgments",
        "Identifies relevant statutes and amendments automatically",
        "Provides case summaries with key legal points highlighted",
        "Real-time updates on new judgments and legal developments"
      ],
      useCases: [
        "Preparing for court hearings and arguments",
        "Client consultation and case assessment",
        "Legal opinion writing and research",
        "Academic research and law school assignments"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-[#D4AF37]" />,
      title: "AI Document Drafting",
      description: "Professional legal document generation that maintains accuracy, consistency, and compliance. From contracts to petitions, create comprehensive legal documents in minutes.",
      detailedDescription: "Drafting legal documents traditionally requires extensive time and expertise. Paralegal AI assists in creating first drafts of various legal documents, ensuring proper legal language, structure, and compliance with current laws. Our AI understands legal terminology and formatting requirements, helping you produce professional-quality documents efficiently.",
      timeSavings: "Reduce drafting time by 60-80%",
      benefits: [
        "Generate contracts, agreements, and legal notices",
        "Draft petitions, applications, and court documents",
        "Create legal opinions and advisory documents",
        "Ensure proper legal language and terminology",
        "Maintain consistency across document types",
        "Include relevant legal precedents and citations"
      ],
      useCases: [
        "Contract drafting and review",
        "Court petition and application preparation",
        "Legal notice and demand letter creation",
        "Legal opinion and advisory document writing"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Two Powerful Features That Transform Legal Practice
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of legal work with our AI-powered Smart Legal Research and Document Drafting tools. 
            Built specifically for Indian lawyers to save time and enhance accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.youtube.com/@ParalegalAI.official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Watch Demo
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f1d1b] transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Core Features That Drive Results
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Two powerful AI-driven features designed specifically for Indian legal professionals to maximize efficiency and accuracy.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b]">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-[#4b2e2e] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    {feature.detailedDescription}
                  </p>

                  {/* Time Savings Highlight */}
                  <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-4 mb-8 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-[#D4AF37] mr-2" />
                      <span className="font-semibold text-[#1f1d1b]">Time Savings</span>
                    </div>
                    <p className="text-[#4b2e2e] font-medium">{feature.timeSavings}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#1f1d1b] mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f1d1b] mb-4">Perfect For:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {feature.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="flex items-center text-sm text-gray-600">
                          <Target className="w-4 h-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual/Icon Area */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#1f1d1b]/10 rounded-2xl p-12 text-center">
                    <div className="mb-6">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-[#1f1d1b] mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Revolutionize Your Legal Research & Drafting?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of AI-driven legal tools. Save hours on research, create better documents, and focus on what matters most - your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="https://www.youtube.com/@ParalegalAI.official"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f1d1b] transition"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
