import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { Box, Divider } from "@mui/material";
import HomepageHeader from "@/components/homeComponents/HomepageHeader";
import HeadMeta from "@/components/seo/HeadMeta";
import { useQuery } from "@tanstack/react-query";
import { CarouselSection } from "@/components/homeComponents/CarouselSection";
import { getPostList } from "@/apis/post";
import { getProjectList } from "@/apis/project";

export default function HomePage() {
  const { data: postCarousel } = useQuery({
    queryKey: ["post-carousel"],
    queryFn: () => getPostList({}),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  const { data: projectCarousel } = useQuery({
    queryKey: ["project-carousel"],
    queryFn: () => getProjectList({}),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <MainLayout>
      <HeadMeta
        title="블로그"
        description="프론트엔드 기술 블로그"
        image="/profile.jpg"
      />

      <HomepageHeader />

      <Divider style={{ width: "100%" }}>Project</Divider>
      {projectCarousel && (
        <CarouselSection
          label="최신 프로젝트"
          link="project"
          cardList={projectCarousel}
        />
      )}

      <Divider style={{ width: "100%" }}>Posting</Divider>
      {postCarousel && (
        <CarouselSection
          label="최신 포스팅"
          link="blog"
          cardList={postCarousel}
        />
      )}
    </MainLayout>
  );
}
