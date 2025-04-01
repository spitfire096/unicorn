/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
        pathname: '/wp/**',
      },
      {
        protocol: 'https',
        hostname: 'wallpapersafari.com',
        pathname: '/w/**',
      }
    ],
  },
}

module.exports = nextConfig 