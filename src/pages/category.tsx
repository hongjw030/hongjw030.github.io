import { Box, Divider, Stack } from "@mui/material";

import HeadMeta from "@/components/seo/HeadMeta";
import MainLayout from "@/layouts/MainLayout";
import useGetCategory from "@/hooks/useGetCategory";
import CategoryGroupAccordion from "@/components/categoryGroupAccordion/CategoryGroupAccordion";
import { PageTitle } from "@/components/common/Titles";

export default function BlogPage() {
  const { data } = useGetCategory();

  return (
    <MainLayout current="CATEGORY">
      <HeadMeta
        title="블로그"
        description="프론트엔드 기술 블로그 카테고리"
        url="category"
      />
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
    </MainLayout>
  );
}
