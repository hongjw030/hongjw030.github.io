import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { PROJECT_DIR } from "@/constants";
import { ProjectCardList } from "@/components/card/CardList";
import MainLayout from "@/layouts/MainLayout";
import { ProjectType } from "@/types/ProjectType";
import HeadMeta from "@/components/seo/HeadMeta";

export default function ProjectPage() {
  return (
    <MainLayout current="PROJECT">
      <HeadMeta
        title="프론트엔드 프로젝트"
        description="프론트엔드 프로젝트 리뷰 모음"
        image="/profile.jpg"
        url="project"
      />
      {/* <ProjectCardList sortedPosts={sortedProjects} /> */}
    </MainLayout>
  );
}
