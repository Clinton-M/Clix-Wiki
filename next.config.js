/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  //  `next/image`, hostname "upload.wikimedia.org" is not configured under images in your `next.config.js`
  images: {
    domains: ['upload.wikimedia.org'],
  },


}

module.exports = nextConfig
