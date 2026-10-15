/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cardio-vantage',
  images: {
    unoptimized: true,
  },
  // This automatically prefixes all asset and image paths with your subfolder name
  assetPrefix: '/cardio-vantage', 
};

export default nextConfig;
