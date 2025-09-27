/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Exclude sensitive environment variables from client-side bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Remove sensitive environment variables from client bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Define plugin to replace environment variables with empty strings in client bundle
      config.plugins.push(
        new (require('webpack')).DefinePlugin({
          'process.env.NEXTAUTH_URL': '""',
          'process.env.NEXTAUTH_SECRET': '""',
          'process.env.DATABASE_URL': '""',
          'process.env.GOOGLE_CLIENT_ID': '""',
          'process.env.GOOGLE_CLIENT_SECRET': '""',
          'process.env.RESEND_API_KEY': '""',
          'process.env.RESEND_FROM': '""',
          'process.env.CONTACT_RECEIVER': '""',
          'process.env.SHARED_JWT_SECRET': '""',
          'process.env.PRISMA_CLI_BINARY_TARGETS': '""',
        })
      );
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig