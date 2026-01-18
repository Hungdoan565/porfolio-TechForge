/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Disable production source maps for smaller bundle
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

