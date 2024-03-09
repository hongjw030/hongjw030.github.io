/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: 'http://localhost:3000' || 'https://hongjw030-github-io.vercel.app/',
  reactStrictMode: true,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
};

export default nextConfig;
