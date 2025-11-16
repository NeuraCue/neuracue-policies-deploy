/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Ensure CSS is properly bundled
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;