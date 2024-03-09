import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import CATEGORY_ARRAY from "@/constants/category";
import CardList from "@/components/card/CardList";

export default function BlogPage({ sortedPosts, mainId }: any) {
  const currentMainObject = mainId
    ? CATEGORY_ARRAY[
        CATEGORY_ARRAY.findIndex((el) => el.mainCategory.id === mainId)
      ]
    : null;

  return (
    <BlogLayout
      mainId={mainId}
      mainTitle={currentMainObject?.mainCategory.title}
      description={currentMainObject?.mainCategory.description}
      note={currentMainObject?.mainCategory.note}
      coverImg={currentMainObject?.mainCategory.coverImg}
    >
      <CardList sortedPosts={sortedPosts} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { mainId: "TIL" } },
      { params: { mainId: "algorithm" } },
      { params: { mainId: "study" } },
      { params: { mainId: "troubleshooting" } },
      { params: { mainId: "diary" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: {
  params: { mainId: string };
}) {
  const mainId = params.mainId;
  const files = fs.readdirSync(POST_DIR);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_posts/${filename}`)
      .toString();
    const { data } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
    } as PostFrontMatterType;

    if (frontmatter?.mainCategory === mainId) {
      return {
        slug: filename.replace(".md", ""),
        frontmatter,
      };
    } else return null;
  });

  let sortedPosts = posts.filter((el) => el !== null);
  if ((posts.length == 1 && posts[0] == null) || !posts) {
    return {
      props: { sortedPosts: [], mainId },
    };
  } else {
    sortedPosts = posts.sort((a, b) =>
      (a?.frontmatter.date ?? 1) < (b?.frontmatter.date ?? 1) ? 1 : -1
    );
    return {
      props: { sortedPosts, mainId },
    };
  }
}
