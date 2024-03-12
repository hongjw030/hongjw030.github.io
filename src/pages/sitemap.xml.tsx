// pages/sitemap.xml.ts
import { NextPage } from "next";
import fs from "fs";
import { POST_DIR, PROJECT_DIR } from "@/constants";
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

export default function SitemapPage({ PAGES }: any) {
  let totalUrl = "";
  for (let page of PAGES) {
    totalUrl += InnerUrl(page);
  }

  let sitemapString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${totalUrl}
</urlset>`;

  return <>{sitemapString}</>;
}

export async function getStaticProps() {
  const postfiles = fs.readdirSync(POST_DIR);
  const projectfiles = fs.readdirSync(PROJECT_DIR);

  const DEFAULT_PAGES = ["category", "project", "blog"];
  const MAIN_CATEGORY_PAGES = [];
  const SUB_CATEGORY_PAGES = [];
  for (let group of CATEGORY_ARRAY) {
    MAIN_CATEGORY_PAGES.push(`blog/${group.mainCategory.id}`);
    for (let el of group.subCategory) {
      SUB_CATEGORY_PAGES.push(`blog/${group.mainCategory.id}/${el.id}`);
    }
  }

  const DYNAMIC_POST_PAGES = postfiles.map((filename) =>
    filename.replace(".md", "")
  );
  const DYNAMIC_PROJECT_PAGES = projectfiles.map(
    (filename) => `project/${filename.replace(".md", "")}`
  );

  const PAGES = [
    ...DEFAULT_PAGES,
    ...MAIN_CATEGORY_PAGES,
    ...SUB_CATEGORY_PAGES,
    ...DYNAMIC_POST_PAGES,
    ...DYNAMIC_PROJECT_PAGES,
  ];

  return {
    props: { PAGES },
  };
}
