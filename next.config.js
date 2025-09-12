/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image remote patterns (replace specific hostnames for security when possible)
  images: {
    remotePatterns: [
      // Example: allow images from common external hosts
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      // If you truly want to allow any remote host (less secure), use:
      // { protocol: "https", hostname: "**" },
    ],
  },

  // Allow dev requests from your LAN/dev IP (adjust if your IP differs)
  allowedDevOrigins: ["http://192.168.56.1:3000"],

  // any other next config you already use (keep them here), but remove swcMinify
  // e.g. experimental: { ... }, env: { ... }
};

module.exports = nextConfig;
