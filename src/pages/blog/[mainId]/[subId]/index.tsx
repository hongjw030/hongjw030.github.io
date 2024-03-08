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
      {posts?.map(
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { mainId: "TIL", subId: "TIL_blog" } },
      { params: { mainId: "algorithm", subId: "algorithm_study" } },
      { params: { mainId: "algorithm", subId: "algorithm_problem" } },
      { params: { mainId: "study", subId: "study_cs" } },
      { params: { mainId: "study", subId: "study_book" } },
      { params: { mainId: "diary", subId: "diary_daily" } },
      { params: { mainId: "diary", subId: "diary_weekly" } },
      { params: { mainId: "diary", subId: "diary_monthly" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: {
  params: { subId: string };
}) {
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

  if (posts.length == 1 && posts[0] == null) {
    return {
      props: {},
    };
  }

  return {
    props: { posts },
  };
}
