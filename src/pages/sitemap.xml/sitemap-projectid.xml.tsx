// pages/sitemap.xml.ts
import fs from "fs";
import { PROJECT_DIR } from "@/constants";

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
  const projectfiles = fs.readdirSync(PROJECT_DIR);

  const DYNAMIC_PROJECT_PAGES = projectfiles.map(
    (filename) => `project/${filename.replace(".md", "")}`
  );

  let totalUrl = "";
  for (let page of DYNAMIC_PROJECT_PAGES) {
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
