/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  optimizeFonts: true,
  async rewrites() {
    return [
      {
        destination: '/top',
        source: '/',
      },
    ];
  },
}

module.exports = nextConfig
