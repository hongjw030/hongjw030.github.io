import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { PROJECT_DIR } from "@/constants";
import { ProjectCardList } from "@/components/card/CardList";
import MainLayout from "@/layouts/MainLayout";
import { ProjectType } from "@/types/ProjectType";
import HeadMeta from "@/components/seo/HeadMeta";

export default function ProjectPage({ sortedProjects }: any) {
  return (
    <MainLayout current="PROJECT">
      <HeadMeta
        title="프론트엔드 프로젝트"
        description="프론트엔드 프로젝트 리뷰 모음"
        image="/profile.jpg"
        url="project"
      />
      <ProjectCardList sortedPosts={sortedProjects} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(PROJECT_DIR);

  const projects = files.map((filename) => {
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

  let sortedProjects = projects.filter((el) => el !== null);

  if ((sortedProjects.length == 1 && sortedProjects[0] == null) || !projects) {
    return {
      props: { sortedProjects: [] },
    };
  } else {
    sortedProjects = sortedProjects.sort((a, b) =>
      a?.frontmatter.note < b?.frontmatter.note ? 1 : -1
    );
    return {
      props: { sortedProjects },
    };
  }
}
