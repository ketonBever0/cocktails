/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
      },
    ],
  },
};

module.exports = nextConfig;
