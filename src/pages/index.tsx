import { Divider, Link } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getPostList } from "@/apis/post";
import { getProjectList } from "@/apis/project";
import HeadMeta from "@/components/seo/HeadMeta";
import HomeHeader from "@/components/header/HomeHeader";
import ContentContainer from "@/components/container/ContentContainer";
import { PageTitle } from "@/components/common/Titles";
import CardCarousell from "@/components/card/CardCarousell";
import { POST_LINK, PROJECT_LINK } from "@/constants/links";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
  const { data: postCarousel } = useQuery({
    queryKey: ["post-carousel"],
    queryFn: () => getPostList({ count: 5 }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  const { data: projectCarousel } = useQuery({
    queryKey: ["project-carousel"],
    queryFn: () => getProjectList({ count: 5 }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <MainLayout>
      <HeadMeta title="블로그" description="프론트엔드 기술 블로그" />

      <HomeHeader />

      <Divider style={{ width: "100%" }}>Project</Divider>
      {projectCarousel && (
        <ContentContainer gap={5} align="center">
          <PageTitle title="최신 프로젝트" />
          <Link href={PROJECT_LINK}>더보기</Link>
          <CardCarousell
            cardType="project"
            smallCardList={projectCarousel.totalProject}
          />
        </ContentContainer>
      )}

      <Divider style={{ width: "100%" }}>Posting</Divider>
      {postCarousel && (
        <ContentContainer gap={5}>
          <PageTitle title="최신 포스팅" />
          <Link href={POST_LINK}>더보기</Link>
          <CardCarousell
            cardType="post"
            smallCardList={postCarousel.totalPost}
          />
        </ContentContainer>
      )}
    </MainLayout>
  );
}
