import Header from "../components/Header"
import Footer from "../components/Footer"
import { Users, Target, Lightbulb, ArrowRight, CheckCircle, Linkedin, Mail } from "lucide-react"

export default function Careers() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#D4AF37]" />,
      title: "Mission-Driven Work",
      description: "Every line of code, every design, and every partnership contributes directly to making the legal system more efficient and accessible."
    },
    {
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
      title: "Collaborative Culture",
      description: "We believe the best ideas emerge when lawyers, technologists, and creators work together."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#D4AF37]" />,
      title: "Growth & Learning",
      description: "Join a team that values mentorship, experimentation, and continuous learning."
    }
  ]

  const qualities = [
    "Excited about the future of AI and legal technology",
    "Motivated by real-world impact and improving access to justice",
    "A problem-solver who thrives in collaborative, startup environments",
    "Curious, proactive, and eager to grow with a fast-moving team"
  ]

  const opportunities = [
    {
      category: "Engineering & AI",
      roles: ["Machine Learning Engineer", "NLP Specialist", "Full-Stack Developer", "AI Research Scientist"]
    },
    {
      category: "Law & Research",
      roles: ["Legal Research Associate", "Case Law Analyst", "Legal Content Specialist", "Compliance Officer"]
    },
    {
      category: "Design & Product",
      roles: ["UX/UI Designer", "Product Manager", "Product Strategist", "User Research Specialist"]
    },
    {
      category: "Operations & Growth",
      roles: ["Business Development Manager", "Partnerships Lead", "Marketing Specialist", "Operations Manager"]
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Careers at Paralegal AI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join Us in Transforming Legal Research
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Paralegal AI, we are on a mission to reshape how legal professionals access and interpret information. 
            We believe that technology should empower, not replace — enabling lawyers, firms, and students to work 
            smarter, faster, and with greater confidence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our work is at the intersection of law, artificial intelligence, and design, and we're building 
              solutions that will redefine the future of legal practice in India and beyond.
            </p>
            <div className="bg-[#f8f5f0] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">
                Impact from Day One
              </h3>
              <p className="text-gray-700">
                At Paralegal AI, your work will reach lawyers, students, and firms who rely on our platform 
                to do their best work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-8 text-center">
            Who We're Looking For
          </h2>
          <div className="bg-[#f8f5f0] rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              We are not just hiring for roles — we are looking for people with passion, vision, and a drive to make a difference.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              If you are:
            </p>
            <ul className="space-y-3">
            {qualities.map((quality, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{quality}</span>
              </li>
            ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6 font-semibold">
              … then we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job — we offer a chance to be part of something meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 text-center hover:bg-white/90 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Open Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are always looking for passionate individuals across various disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-[#f8f5f0] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[#1f1d1b] mb-4">
                  {opportunity.category}
                </h3>
                <ul className="space-y-2">
                  {opportunity.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#1f1d1b] rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Don't See Your Role?
              </h3>
              <p className="text-gray-300 mb-6">
                Even if you don't see a specific role listed, we encourage you to connect — 
                if you bring passion and skills, we'll find a way to work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of the Journey */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-6">
            Be Part of the Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            At Paralegal AI, careers aren't just jobs. They're opportunities to help shape the future of legal research.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#1f1d1b] mb-6">
              📌 Interested in joining us?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Connect with us and let's start the conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/paralegalai-legalresearch"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005885] transition flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="/contact"
                className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
