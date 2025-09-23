import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { 
  Check, 
  Star,
  ArrowRight,
  Shield,
  Zap,
  Users
} from "lucide-react"

export default function Pricing() {
  const { data: session, status } = useSession()
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "month",
      description: "Perfect for getting started",
      features: [
        "10 document analyses per month",
        "Basic legal research tools",
        "Email support",
        "Standard templates"
      ],
      current: false,
      cta: session ? "Current Plan" : "Get Started",
      popular: false,
      href: session ? "#" : "/register"
    },
    {
      name: "Professional",
      price: 29,
      period: "month",
      description: "For individual lawyers and small firms",
      features: [
        "100 document analyses per month",
        "Advanced AI research tools",
        "Priority support",
        "Custom templates",
        "API access",
        "Advanced analytics"
      ],
      current: false,
      cta: session ? "Coming Soon" : "Sign In to Upgrade",
      popular: true,
      href: session ? "/account?tab=billing" : "/login?callbackUrl=/pricing"
    },
    {
      name: "Enterprise",
      price: 99,
      period: "month",
      description: "For large law firms and organizations",
      features: [
        "Unlimited document analyses",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "Advanced security"
      ],
      current: false,
      cta: "Contact Sales",
      popular: false,
      href: "/contact"
    }
  ]

  const handlePlanClick = (plan: any) => {
    if (plan.name === "Free" && !session) {
      // Redirect to register for free plan
      window.location.href = "/register"
    } else if (plan.name === "Professional" && !session) {
      // Redirect to login with callback
      window.location.href = "/login?callbackUrl=/pricing"
    } else if (plan.name === "Professional" && session) {
      // Show coming soon message
      alert("Payment gateway integration coming soon! Please contact us for now.")
    } else if (plan.name === "Enterprise") {
      // Redirect to contact
      window.location.href = "/contact"
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-[#1f1d1b] mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect plan for your legal practice. Start free and upgrade anytime.
          </p>
          
          {session && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Check size={16} />
              Signed in as {session.user?.name}
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-[#D4AF37] scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#1f1d1b]">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className="mt-0.5 flex-shrink-0 text-[#D4AF37]" 
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition ${
                    plan.name === "Free" && session
                      ? "bg-green-100 text-green-800 cursor-not-allowed"
                      : plan.name === "Professional" && session
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : plan.popular
                      ? "bg-[#1f1d1b] text-white hover:bg-[#4b2e2e]"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  disabled={plan.name === "Free" && !!session || plan.name === "Professional" && !!session}
                >
                  <span className="flex items-center justify-center gap-2">
                    {plan.cta}
                    {plan.cta !== "Current Plan" && plan.cta !== "Coming Soon" && <ArrowRight size={16} />}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need help choosing? <Link href="/contact" className="text-[#D4AF37] hover:underline">Contact our sales team</Link>
          </p>
          <p className="text-sm text-gray-500">
            All plans include 30-day money-back guarantee • Cancel anytime • No setup fees
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
