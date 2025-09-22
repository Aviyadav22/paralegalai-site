import Header from "../components/Header"
import Footer from "../components/Footer"
import { Target, BookOpen, Users, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#D4AF37]" />,
      title: "Precision-Driven Research",
      description: "Deliver accurate legal research in seconds, not hours. Our AI is trained specifically for Indian law and continuously updated with the latest judgments and amendments."
    },
    {
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
      title: "Equal Access for All",
      description: "From independent practitioners to large firms, we provide powerful tools that level the playing field and democratize access to legal research."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#D4AF37]" />,
      title: "Focus on What Matters",
      description: "Free legal professionals from research burdens so they can concentrate on advocacy, strategy, and delivering the best outcomes for their clients."
    }
  ]

  const milestones = [
    "Founded with a clear mission to solve legal research inefficiencies",
    "Extensive collaboration with legal professionals and academics",
    "AI-first solution tailored specifically for the Indian legal system",
    "Continuous refinement based on community feedback and needs",
    "Building towards becoming the most trusted legal AI platform"
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            About Paralegal AI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transforming legal research from a time-consuming burden into a seamless, 
            efficient, and precise process.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#c5a880] rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#1f1d1b]">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Paralegal AI, we envision a legal ecosystem where access to information is no longer a barrier 
              but an enabler of justice. We are committed to building a platform that transforms legal research 
              from a time-consuming burden into a seamless, efficient, and precise process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to become the most trusted AI-powered legal research assistant in India and globally — 
              a tool that empowers lawyers, firms, and law students to focus on advocacy, strategy, and impact, 
              while we handle the complexity of discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#c5a880] rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#1f1d1b]">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Paralegal AI was founded with a clear recognition of one of the legal profession's most persistent 
              challenges: the disproportionate amount of time and effort spent searching for precedents, judgments, 
              and case laws.
            </p>
            <p>
              Through extensive discussions with lawyers, firms, and academics, we identified a shared frustration — 
              valuable legal expertise was being consumed by research inefficiencies. This insight became our driving 
              force: to design an AI-first solution tailored for the Indian legal system and scalable for broader 
              jurisdictions.
            </p>
            <p>
              From our earliest prototypes to the platform we continue to refine today, Paralegal AI has been shaped 
              in close collaboration with the legal community. Every feature reflects a commitment to accuracy, 
              usability, and trustworthiness — qualities at the heart of effective legal practice.
            </p>
          </div>

          {/* Journey Milestones */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-[#1f1d1b] mb-6">Our Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are driven by core principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Mission Statements */}
          <div className="bg-[#1f1d1b] rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">Our Mission Today</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span>Deliver precision-driven legal research in seconds.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span>Provide equal access to tools for students, independent practitioners, and large firms alike.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span>Enhance the quality and speed of advocacy by enabling professionals to focus on what matters most: their clients and cases.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#c5a880] rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#1f1d1b]">
              Our Legacy for Tomorrow
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Paralegal AI is not just a technology company; it is a movement to modernize how law is practiced 
              in India. By bridging the gap between law and technology, we aim to create a legacy of empowerment:
            </p>
            
            <div className="bg-[#f8f5f0] p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span><strong>For legal professionals:</strong> sharper, faster, more confident case preparation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span><strong>For institutions:</strong> improved knowledge management and collaboration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span><strong>For society:</strong> a legal process that is more accessible, equitable, and transparent.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-xl font-semibold text-[#1f1d1b]">
              Our long-term vision is clear: a future where AI assistance becomes a standard in every law firm, 
              courtroom, and law school, with Paralegal AI standing at the forefront of this transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Us in Transforming Legal Practice
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the movement that's revolutionizing how legal research is conducted in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-[#1f1d1b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Try Our Demo
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f1d1b] transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
