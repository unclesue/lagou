/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    loader: 'imgix',
    path: ''
  },
}

module.exports = nextConfig
