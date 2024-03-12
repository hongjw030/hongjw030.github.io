const siteUrl = "https://hongjw030-github-io.vercel.app/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};