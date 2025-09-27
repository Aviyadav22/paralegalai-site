import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function ResetPassword() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
      } else {
        setError(data.error || "An error occurred. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#f8f5f0]">
        <Header />
        
        <div className="flex min-h-screen items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-4">
                Check Your Email
              </h1>
              
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions to reset your password.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/login"
                  className="w-full bg-[#1f1d1b] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#4b2e2e] transition inline-block"
                >
                  Back to Login
                </Link>
                
                <button
                  onClick={() => {
                    setSuccess(false)
                    setEmail("")
                  }}
                  className="w-full text-[#1f1d1b] py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Try Different Email
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="flex min-h-screen pt-16">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1f1d1b] to-[#4b2e2e] text-white items-center justify-center">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h1 className="text-4xl font-serif font-bold mb-4">Paralegal AI</h1>
              <p className="text-xl text-gray-300">Reset Your Password</p>
            </div>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Right Side - Reset Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-2">
                  Reset Password
                </h2>
                <p className="text-gray-600">Enter your email to receive reset instructions</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1f1d1b] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#4b2e2e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#B8941F] transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Link>
              </div>

              <div className="mt-8 text-center text-xs text-gray-500">
                © 2025 Paralegal AI · All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
