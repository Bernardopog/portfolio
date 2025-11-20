import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/webp'],
    qualities: [75, 50, 25],
  },
  devIndicators: false,
};

export default nextConfig;
