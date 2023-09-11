/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org'
      }
    ]
  }
}

module.exports = nextConfig
