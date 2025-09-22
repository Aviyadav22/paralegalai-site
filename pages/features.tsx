import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { CheckCircle, Search, FileText, Shield, Clock, Users, BarChart, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-[#D4AF37]" />,
      title: "Semantic Legal Research",
      description: "AI-powered search through vast legal databases with natural language queries. Find relevant cases, statutes, and precedents instantly.",
      benefits: [
        "Natural language search queries",
        "Context-aware results ranking",
        "Cross-reference case law",
        "Real-time legal updates"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#D4AF37]" />,
      title: "AI Document Drafting",
      description: "Generate legal documents, contracts, and briefs with AI assistance. Maintain consistency and accuracy across all legal writing.",
      benefits: [
        "Contract generation",
        "Legal brief drafting",
        "Document templates",
        "Compliance checking"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
      title: "Compliance Monitoring",
      description: "Stay updated with changing regulations and ensure your practice remains compliant with the latest legal requirements.",
      benefits: [
        "Regulatory change alerts",
        "Compliance dashboards",
        "Risk assessment tools",
        "Audit trail tracking"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-[#D4AF37]" />,
      title: "Time Tracking & Billing",
      description: "Automated time tracking for billable hours with intelligent categorization and client billing integration.",
      benefits: [
        "Automatic time capture",
        "Client billing integration",
        "Expense tracking",
        "Invoice generation"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
      title: "Client Management",
      description: "Comprehensive client relationship management with case tracking, communication logs, and document sharing.",
      benefits: [
        "Client portal access",
        "Case management",
        "Communication tracking",
        "Document collaboration"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#D4AF37]" />,
      title: "Analytics & Insights",
      description: "Data-driven insights into your practice performance, case outcomes, and client satisfaction metrics.",
      benefits: [
        "Performance analytics",
        "Case outcome tracking",
        "Client satisfaction metrics",
        "Practice growth insights"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Powerful Features for Modern Legal Practice
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your legal practice with AI-powered tools designed specifically for Indian law. 
            From research to billing, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Try Demo
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Our comprehensive suite of tools is designed to streamline every aspect of your legal practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who trust Paralegal AI for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started Today
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f1d1b] transition"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
