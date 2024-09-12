// @ts-check
/**
 * @type {import('next').NextConfig}
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // output: 'export',
  // async rewrites() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //     },
  //   ];
  // },
};

export default nextConfig;
