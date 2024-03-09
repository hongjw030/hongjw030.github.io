import { POST_DIR } from "@/constants";
import CATEGORY_ARRAY from "@/constants/category";
import { BLOG_URL } from "@/constants/user";
import { ISitemapField } from "next-sitemap"; //(1)
import fs from "fs";

export const getServerSideProps = async ({ res }: any) => {
  const lastmod = new Date().toISOString();

  // home, 카테고리, 플젝, about 페이지
  const defaultFields = [
    {
      loc: BLOG_URL,
      changefreq: "daily",
      priority: "0.6",
      lastmod,
    },
    {
      loc: `${BLOG_URL}/about`,
      changefreq: "daily",
      priority: "0.8",
      lastmod,
    },
    {
      loc: `${BLOG_URL}/category`,
      changefreq: "daily",
      priority: "0.5",
      lastmod,
    },
    {
      loc: `${BLOG_URL}/project`,
      changefreq: "daily",
      priority: "0.8",
      lastmod,
    },
    {
      loc: `${BLOG_URL}/blog`,
      changefreq: "daily",
      priority: "0.8",
      lastmod,
    },
  ];

  // 각 카테고리별 페이지
  const mainCategoryField = CATEGORY_ARRAY.map((main) => ({
    loc: `${BLOG_URL}/blog/${main.mainCategory.id}`,
    changefreq: "daily",
    priority: "0.9",
    lastmod,
  }));

  const subCategoryField: any = [];

  CATEGORY_ARRAY.forEach((group) => {
    if (group.subCategory.length > 0) {
      group.subCategory.forEach((el) => {
        subCategoryField.push({
          loc: `${BLOG_URL}/blog/${group.mainCategory.id}/${el.id}`,
          changefreq: "daily",
          priority: "0.9",
          lastmod,
        });
      });
    }
  });

  const files = fs.readdirSync(POST_DIR);
  const postField = files.map((file: string) => ({
    loc: `${BLOG_URL}/${file.replace(".md", "")}`,
    changefreq: "daily",
    priority: "1.0",
    lastmod,
  }));

  const fields = [
    ...defaultFields,
    ...mainCategoryField,
    ...subCategoryField,
    ...postField,
  ];

  let fieldsArray: ISitemapField[] = fields.filter((el) => {
    return el !== null || el !== undefined;
  });

  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/0.7" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${BLOG_URL}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>${BLOG_URL}/feed</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  ${fieldsArray
    .map((field) => {
      return `
        <url>
          <loc>${field.loc}</loc>
          <changefreq>${field.changefreq}</changefreq>
          <priority>${field.priority}</priority>
          <lastmod>${field.lastmod}</lastmod>
        </url>
      `;
    })
    .join("")}
  </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
