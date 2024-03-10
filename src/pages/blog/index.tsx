import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import { PostingCardList } from "@/components/card/CardList";

export default function BlogPage({ sortedPosts }: any) {
  return (
    <BlogLayout>
      <PostingCardList sortedPosts={sortedPosts} />
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(POST_DIR);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_posts/${filename}`)
      .toString();
    let stats = fs.statSync(`src/_posts/${filename}`);

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    } as PostFrontMatterType;

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
      birthTime: stats.birthtime.toString(),
      mTime: stats.mtime.toString(),
    };
  });

  let sortedPosts = posts.filter((el) => el !== null);

  if ((sortedPosts.length == 1 && sortedPosts[0] == null) || !posts) {
    return {
      props: { sortedPosts: [] },
    };
  } else {
    sortedPosts = sortedPosts.sort((a, b) =>
      (a?.birthTime ?? 1) < (b?.birthTime ?? 1) ? 1 : -1
    );
    return {
      props: { sortedPosts },
    };
  }
}
