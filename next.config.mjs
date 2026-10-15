/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cardio-vantage', // <--- This fixes the styling paths on GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
