import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"

interface ErrorPageProps {
  error: string
}

export default function AuthError({ error }: ErrorPageProps) {
  const getErrorMessage = (error: string) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration."
      case "AccessDenied":
        return "Access was denied. You may not have permission to sign in."
      case "Verification":
        return "The verification token has expired or has already been used."
      default:
        return "An error occurred during authentication. Please try again."
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-4">
            Authentication Error
          </h1>
          
          <p className="text-[#6b7280] mb-8">
            {getErrorMessage(error)}
          </p>
          
          <div className="space-y-4">
            <Link
              href="/auth/signin"
              className="block w-full bg-[#1f1d1b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4b2e2e] transition"
            >
              Try Again
            </Link>
            
            <Link
              href="/"
              className="block w-full text-[#c5a880] hover:underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const { error } = context.query

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      error: error || "Unknown",
    },
  }
}
