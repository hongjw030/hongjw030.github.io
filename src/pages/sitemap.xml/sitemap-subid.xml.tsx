// pages/sitemap.xml.ts
import CATEGORY_ARRAY from "@/constants/category";

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
  const SUB_CATEGORY_PAGES = [];
  for (let group of CATEGORY_ARRAY) {
    for (let el of group.subCategory) {
      SUB_CATEGORY_PAGES.push(`blog/${group.mainCategory.id}/${el.id}`);
    }
  }

  const PAGES = [...SUB_CATEGORY_PAGES];

  let totalUrl = "";
  for (let page of PAGES) {
    totalUrl += InnerUrl(page);
  }

  let sitemapString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
