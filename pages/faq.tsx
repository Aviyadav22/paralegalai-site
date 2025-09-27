import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What is Paralegal AI and how does it work?",
      answer: "Paralegal AI is an AI-powered legal research and document drafting platform designed specifically for Indian law. It uses advanced natural language processing to help lawyers find relevant cases, statutes, and precedents, while also providing intelligent tools for document drafting and legal writing."
    },
    {
      question: "Is my data secure and confidential?",
      answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure cloud storage, and strict access controls. All data is stored in compliance with Indian data protection regulations, and we never share your confidential information with third parties."
    },
    {
      question: "How accurate is the AI-powered legal research?",
      answer: "Our AI is trained on extensive Indian legal databases and continuously updated with the latest case law and statutory changes. While we maintain high accuracy rates, we always recommend that lawyers verify AI-generated results and use them as a starting point for their research."
    },
    {
      question: "Can I integrate Paralegal AI with my existing practice management software?",
      answer: "Yes, we offer API integrations with most popular practice management systems. Our platform is designed to work seamlessly with your existing workflow, allowing you to export research results and drafted documents to your preferred systems."
    },
    {
      question: "What types of legal documents can the AI help me draft?",
      answer: "Our AI can assist with a wide range of legal documents including contracts, legal briefs, notices, applications, and legal opinions. The system includes templates for common document types and can be customized for specific practice areas."
    },
    {
      question: "How does the pricing work?",
      answer: "We offer flexible pricing plans based on the size of your practice and the features you need. Our plans include a free tier for individual practitioners, professional plans for small to medium firms, and enterprise solutions for large law firms. All plans include our core research and drafting features with additional advanced tools available in higher tiers."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes, we provide comprehensive onboarding, training sessions, and ongoing support for our research and drafting tools. Our team includes legal professionals who understand the unique challenges of legal practice. We offer live training sessions, video tutorials, and 24/7 technical support."
    },
    {
      question: "Can I try Paralegal AI before purchasing?",
      answer: "Absolutely! We offer a free trial period where you can explore our research and drafting features without any commitment. You can also schedule a personalized demo to see how Paralegal AI can specifically benefit your practice. Contact our sales team to get started."
    },
    {
      question: "How often is the legal database updated?",
      answer: "Our legal database is updated regularly as new cases are published and laws are amended. We monitor all major legal databases, court websites, and government publications to ensure you always have access to the most current legal information."
    }
    
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to common questions about Paralegal AI and how it can transform your legal practice.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:bg-white/90 transition-all duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-[#1f1d1b] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </Link>
            <Link
              href="/contact"
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
