import { Divider, Stack } from "@mui/material";

import HeadMeta from "@/components/seo/HeadMeta";
import CategoryGroupAccordion from "@/components/categoryGroupAccordion/CategoryGroupAccordion";
import { PageTitle } from "@/components/common/Titles";
import ContentContainer from "@/components/container/ContentContainer";
import useGetCategory from "@/hooks/apis/useGetCategory";
import MainLayout from "@/layouts/MainLayout";

export default function BlogPage() {
  const { data } = useGetCategory();

  return (
    <MainLayout current="CATEGORY">
      <HeadMeta
        title="블로그"
        description="프론트엔드 기술 블로그 카테고리"
        url="category"
      />
      <ContentContainer>
        <PageTitle title="블로그 전체 카테고리 모아보기" />

        <Divider />

        <Stack spacing={3}>
          {data &&
            data.map((group) => {
              return (
                <CategoryGroupAccordion
                  categoryGroup={group}
                  key={`styled ${group[0]._id}`}
                />
              );
            })}
        </Stack>
      </ContentContainer>
    </MainLayout>
  );
}
