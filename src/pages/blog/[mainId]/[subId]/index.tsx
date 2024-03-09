import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import CATEGORY_ARRAY from "@/constants/category";
import CardList from "@/components/card/CardList";
import { CategorySubParamsType } from "@/types/CategoryType";

export default function BlogPage({ sortedPosts, mainId, subId }: any) {
  const currentMainObject = mainId
    ? CATEGORY_ARRAY[
        CATEGORY_ARRAY.findIndex((el) => el.mainCategory.id === mainId)
      ]
    : null;

  const currentSubObject =
    currentMainObject && subId
      ? currentMainObject.subCategory[
          currentMainObject.subCategory.findIndex((el) => el.id === subId)
        ]
      : null;
  return (
    <BlogLayout
      mainId={mainId}
      subId={subId}
      mainTitle={currentMainObject?.mainCategory.title}
      subTitle={currentSubObject?.title}
      description={currentSubObject?.description}
      note={currentSubObject?.note}
      coverImg={currentSubObject?.coverImg}
    >
      <CardList sortedPosts={sortedPosts} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths: CategorySubParamsType[] = [];
  CATEGORY_ARRAY.forEach((main) => {
    main.subCategory.forEach((sub) => {
      paths.push({
        params: {
          mainId: main.mainCategory.id,
          subId: sub.id,
        },
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { mainId: string; subId: string };
}) {
  const mainId = params.mainId;
  const subId = params.subId;
  const files = fs.readdirSync(POST_DIR);
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_posts/${filename}`)
      .toString();
    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    } as PostFrontMatterType;

    if (frontmatter?.subCategory === subId) {
      return {
        slug: filename.replace(".md", ""),
        frontmatter,
      };
    } else return null;
  });

  let sortedPosts = posts.filter((el) => el !== null);
  if ((posts.length == 1 && posts[0] == null) || !posts) {
    return {
      props: { sortedPosts: [], mainId, subId },
    };
  } else {
    sortedPosts = posts.sort((a, b) =>
      (a?.frontmatter.date ?? 1) < (b?.frontmatter.date ?? 1) ? 1 : -1
    );
    return {
      props: { sortedPosts, mainId, subId },
    };
  }
}
