import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import PostingCard from "@/components/card/Card";

export default function BlogPage({ sortedPosts }: any) {
  return (
    <BlogLayout>
      <div>블로그 전체 글 리스트를 보여주는 페이지</div>
      {sortedPosts.map(
        ({
          frontmatter: {
            title,
            description,
            coverImg,
            date,
            mainCategory,
            subCategory,
          },
        }: {
          frontmatter: PostFrontMatterType;
        }) => (
          <PostingCard
            title={title}
            date={date}
            coverImg={coverImg}
            mainCategory={mainCategory}
            subCategory={subCategory}
            description={description}
            key={title}
          />
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

  const sortedPosts = posts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );

  return {
    props: {
      sortedPosts,
    },
  };
}
