const siteUrl = "https://hongjw030-github-io.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1, 
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap.xml/sitemap-projectid.xml`,
      `${siteUrl}/sitemap.xml/sitemap-post.xml`,
      `${siteUrl}/sitemap.xml/sitemap-mainid.xml`,
      `${siteUrl}/sitemap.xml/sitemap-subid.xml`,
    ],
  },
};