import { Box, Link } from "@mui/material";

import ContentContainer from "@/components/container/ContentContainer";
import { PageTitle } from "@/components/common/Titles";
import CardCarousel from "@/components/carousel/CardCarousel";
import { POST_LINK, PROJECT_LINK } from "@/constants/links";
import useGetCarouselCardList from "@/hooks/apis/useGetCarouselCardList";

export default function HomeCarouselSection() {
  const { postCarousel, projectCarousel } = useGetCarouselCardList();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        "@media (max-width:800px)": {
          flexDirection: "column",
        },
      }}
    >
      {projectCarousel && (
        <ContentContainer gap={5} align="center">
          <PageTitle title="최신 프로젝트" />
          <Link href={PROJECT_LINK}>더보기</Link>
          <CardCarousel
            cardType="project"
            smallCardList={projectCarousel.totalProject}
          />
        </ContentContainer>
      )}

      {postCarousel && (
        <ContentContainer gap={5}>
          <PageTitle title="최신 포스팅" />
          <Link href={POST_LINK}>더보기</Link>
          <CardCarousel
            cardType="post"
            smallCardList={postCarousel.totalPost}
          />
        </ContentContainer>
      )}
    </Box>
  );
}
