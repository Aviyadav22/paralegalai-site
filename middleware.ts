import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Define which routes require authentication
        const { pathname } = req.nextUrl
        
        // Protected routes that require authentication
        const protectedRoutes = [
          "/dashboard",
          "/profile",
          "/settings",
          "/account"
        ]
        
        // Check if the current path is protected
        const isProtectedRoute = protectedRoutes.some(route => 
          pathname.startsWith(route)
        )
        
        // If it's a protected route, require authentication
        if (isProtectedRoute) {
          return !!token
        }
        
        // Allow access to all other routes
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*", 
    "/settings/:path*",
    "/account/:path*"
  ]
}
