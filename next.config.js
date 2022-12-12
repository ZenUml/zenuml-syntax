const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
}

module.exports = withMarkdoc()(nextConfig)
