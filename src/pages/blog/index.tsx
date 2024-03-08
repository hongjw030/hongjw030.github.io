import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";

export default function BlogPage({ posts }: any) {
  return (
    <BlogLayout>
      <div>블로그 전체 글 리스트를 보여주는 페이지</div>
      {posts.map(
        ({
          frontmatter: { title, date, mainCategory, subCategory },
        }: {
          frontmatter: PostFrontMatterType;
        }) => (
          <article key={title}>
            <header>
              <h3>{title}</h3>
              <span>{date}</span>
            </header>
            <section>
              <p>{mainCategory}</p>
              <p>{subCategory}</p>
            </section>
          </article>
        )
      )}
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(POST_DIR);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    } as PostFrontMatterType;

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
