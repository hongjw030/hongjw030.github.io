import MainLayout from "@/layouts/MainLayout";
import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import { CarouselSection } from "@/components/homeComponents/CarouselSection";
import { Box } from "@mui/material";

export default function HomePage({ sorted }: any) {
  // 맨 처음엔 자기 소개 header 더보기 누르면 about 페이지로 이동.

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarouselSection label="최신 포스팅" link="blog" cardList={sorted} />
        <CarouselSection
          label="최신 프로젝트"
          link="project"
          cardList={sorted}
        />
      </Box>
    </MainLayout>
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
    sortedPosts = posts.sort((a, b) =>
      (a?.birthTime ?? 1) < (b?.birthTime ?? 1) ? 1 : -1
    );
    let sorted = sortedPosts.slice(0, 5);
    return {
      props: { sorted },
    };
  }
}
