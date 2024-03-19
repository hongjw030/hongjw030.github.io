import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { Box, Divider } from "@mui/material";
import HomepageHeader from "@/components/homeComponents/HomepageHeader";
import HeadMeta from "@/components/seo/HeadMeta";

export default function HomePage() {
  return (
    <MainLayout>
      <HeadMeta
        title="블로그"
        description="프론트엔드 기술 블로그"
        image="/profile.jpg"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20ox",
        }}
      >
        <HomepageHeader />

        <Divider style={{ width: "100%" }}>Project</Divider>

        {/* <CarouselSection
          label="최신 프로젝트"
          link="project"
          cardList={sortedProjects}
        />

        <Divider style={{ width: "100%" }}>Posting</Divider>

        <CarouselSection
          label="최신 포스팅"
          link="blog"
          cardList={sortedPosts}
        /> */}
      </Box>
    </MainLayout>
  );
}
