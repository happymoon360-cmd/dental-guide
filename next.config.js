/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // Image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // SWC minification
    swcMinify: true,
  },

  // Security headers (high priority)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=()',
          },
        ],
      },
    ];
  },

  // Production optimization
  compress: true, // gzip compression
  productionBrowserSourceMaps: false, // hide source maps in production
  poweredByHeader: false, // remove X-Powered-By header

  // Build optimizations

  // Build ID configuration
  generateBuildId: async () => {
    if (process.env.NODE_ENV === 'development') {
      return Date.now().toString();
    }
    return 'production';
  },
};

module.exports = nextConfig;
