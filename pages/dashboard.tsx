import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-2">
              Welcome to your Dashboard
            </h1>
            <p className="text-[#6b7280]">
              Hello, {session?.user?.name}! You&apos;re successfully signed in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f8f5f0] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                Account Information
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {session?.user?.name}</p>
                <p><strong>Email:</strong> {session?.user?.email}</p>
                <p><strong>Role:</strong> {(session?.user as any)?.role || "user"}</p>
              </div>
            </div>

            <div className="bg-[#f8f5f0] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-[#1f1d1b] text-white rounded-lg hover:bg-[#4b2e2e] transition">
                  Try Demo
                </button>
                <button className="w-full text-left px-4 py-2 border border-[#1f1d1b] text-[#1f1d1b] rounded-lg hover:bg-[#1f1d1b] hover:text-white transition">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/dashboard",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
