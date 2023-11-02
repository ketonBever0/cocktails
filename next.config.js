/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
      },
    ],
  },
  env: {
    COCKTAILS_URL: "https://www.thecocktaildb.com",
    // HOST: "http://localhost:3000",
    HOST: "https://cocktails-fpfb1akct-ketonbever0s-projects.vercel.app",
  },
};

module.exports = nextConfig;
