const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/overview/introduction',
        permanent: true,
      },
    ];
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude .d.ts files from being processed by loaders
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader',
    });

    // Add fallback for 'builtin-modules'
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'builtin-modules': require.resolve('builtin-modules'),
    };

    return config;
  },
};

module.exports = withMDX(nextConfig);
