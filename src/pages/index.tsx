import MainLayout from "@/layouts/MainLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR, PROJECT_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import { CarouselSection } from "@/components/homeComponents/CarouselSection";
import { Box } from "@mui/material";
import { ProjectType } from "@/types/ProjectType";

export default function HomePage({ sortedPosts, sortedProjects }: any) {
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
        <CarouselSection
          label="최신 포스팅"
          link="blog"
          cardList={sortedPosts}
        />
        <CarouselSection
          label="최신 프로젝트"
          link="project"
          cardList={sortedProjects}
        />
      </Box>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const postFiles = fs.readdirSync(POST_DIR);
  const projectFiles = fs.readdirSync(PROJECT_DIR);

  const posts = postFiles.map((filename) => {
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

  const projects = projectFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_projects/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
    } as ProjectType;
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  let sortedPosts = posts.filter((el) => el !== null);
  let sortedProjects = projects.filter((el) => el !== null);

  sortedPosts = sortedPosts.sort((a, b) =>
    (a?.birthTime ?? 1) < (b?.birthTime ?? 1) ? 1 : -1
  );

  sortedProjects = sortedProjects.sort((a, b) =>
    a?.frontmatter.note < b?.frontmatter.note ? 1 : -1
  );

  return {
    props: {
      sortedPosts: sortedPosts.slice(0, 5),
      sortedProjects: sortedProjects,
    },
  };
}
