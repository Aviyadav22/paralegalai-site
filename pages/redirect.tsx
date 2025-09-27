import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function RedirectPage() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'loading') return // Still loading

    if (session) {
      // User is authenticated, check for redirect URL
      const redirectUrl = router.query.url as string
      
      if (redirectUrl) {
        // If redirect URL is provided, open it in a new tab
        window.open(redirectUrl, '_blank')
        // Also redirect to home page in current tab
        router.replace('/')
      } else {
        // Default behavior: redirect to home page
        router.replace('/')
      }
    } else {
      // User is not authenticated, redirect to login
      router.replace('/login')
    }
  }, [session, status, router])

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}
