import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { CategoryGroupNumType, CategoryNumType } from "@/types/CategoryType";
import { Box, Stack } from "@mui/material";
import StyledCategoryGroup from "@/components/categoryComponents/StyledCategoryGroup";
import HeadMeta from "@/components/seo/HeadMeta";

export default function BlogPage() {
  return (
    <MainLayout current="CATEGORY">
      <HeadMeta
        title="블로그"
        description="프론트엔드 공부 카테고리"
        image="/profile.jpg"
        url="category"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box fontSize={20} fontWeight={700}>
          블로그 전체 카테고리
        </Box>
        <Stack spacing={2}>
          {/* {countPostArray.map((group: CategoryGroupNumType) => {
            return (
              <StyledCategoryGroup
                categoryGroup={group}
                key={`styled ${group.mainCategory.id}`}
              />
            );
          })} */}
        </Stack>
      </Box>
    </MainLayout>
  );
}
