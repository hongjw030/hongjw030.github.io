import { Divider } from "@mui/material";

import HeadMeta from "@/components/seo/HeadMeta";
import HomeCarouselSection from "@/components/carousel/HomeCarouselSection";
import HomeCover from "@/components/cover/HomeCover";
import AboutMe from "@/components/aboutMe/AboutMe";
import StyledSpacing from "@/components/common/StyledSpacing";
import Footer from "@/components/footer/Footer";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <HeadMeta title="블로그" description="프론트엔드 기술 블로그" />

      <HomeCover />
      <StyledSpacing height={50} />

      <Divider style={{ width: "100%" }}>About me</Divider>
      <AboutMe />

      <Divider style={{ width: "100%" }}>Project & Posting</Divider>
      <HomeCarouselSection />

      <StyledSpacing height={100} />
      <Footer />
    </MainLayout>
  );
}
