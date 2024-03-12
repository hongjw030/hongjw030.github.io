import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import CATEGORY_ARRAY from "@/constants/category";
import MainLayout from "@/layouts/MainLayout";
import { CategoryGroupNumType, CategoryNumType } from "@/types/CategoryType";
import { Box, Stack } from "@mui/material";
import StyledCategoryGroup from "@/components/categoryComponents/StyledCategoryGroup";
import HeadMeta from "@/components/seo/HeadMeta";

export default function BlogPage({ countPostArray }: any) {
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
          {countPostArray.map((group: CategoryGroupNumType) => {
            return (
              <StyledCategoryGroup
                categoryGroup={group}
                key={`styled ${group.mainCategory.id}`}
              />
            );
          })}
        </Stack>
      </Box>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(POST_DIR);
  const countPostArray: CategoryGroupNumType[] = [];

  CATEGORY_ARRAY.forEach((group) => {
    const noTag: CategoryNumType = {
      id: "noTag",
      title: "태그 없음",
      note: -1,
      count: 0,
    };

    let countSubList = group.subCategory.map((category) => {
      return { ...category, count: 0 };
    });
    let originGroup = {
      mainCategory: { ...group.mainCategory, count: 0 },
      subCategory: [...countSubList, noTag],
    };

    countPostArray.push(originGroup);
  });

  files.forEach((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/_posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // data.mainCategory 에 글 +1
    const foundMain = CATEGORY_ARRAY.findIndex(
      (group) => group.mainCategory.id === data.mainCategory
    );
    countPostArray[foundMain].mainCategory.count++;

    // data.subCategory에 글 +1
    if (data.subCategory) {
      const foundSub = CATEGORY_ARRAY[foundMain].subCategory.findIndex(
        (category) => category.id === data.subCategory
      );
      countPostArray[foundMain].subCategory[foundSub].count++;
    } else {
      let len = countPostArray[foundMain].subCategory.length;
      countPostArray[foundMain].subCategory[len - 1].count++;
    }
  });

  return {
    props: { countPostArray },
  };
}
