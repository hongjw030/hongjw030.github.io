function InnerUrl(url = "") {
  return `  
	<url>
	<loc>https://hongjw030-github-io.vercel.app/${url}</loc>
	<changefreq>daily</changefreq>
	<priority>0.8</priority>
  </url>
	
	`;
}

const Sitemap = () => {};

export async function getServerSideProps({ res }: any) {
  const DEFAULT_PAGES = ["category", "project", "blog"];

  let totalUrl = "";
  for (let page of DEFAULT_PAGES) {
    totalUrl += InnerUrl(page);
  }

  let sitemapString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://hongjw030-github-io.vercel.app</loc>
</url>
${totalUrl}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapString);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
