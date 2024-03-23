// post/index.tsx 페이지 상단, 카테고리별 커버 컴포넌트

import { Box } from "@mui/material";

import HeaderCoverImg from "@/components/cover/HeadCoverImg";
import StyledSpacing from "@/components/common/StyledSpacing";
import { ImportantTitle } from "@/components/common/Titles";
import { CategoryTag, DateTag } from "@/components/common/Tags";
import { GRAY_1_COLOR } from "@/constants/colors";
import { POST_PAGE_DESCRIPTION } from "@/constants/texts";
import { PostApiType } from "@/types/PostApiType";

export default function PostCover({ ...data }: PostApiType) {
  return (
    <HeaderCoverImg imgUrl={data.coverImg ? data.coverImg : undefined}>
      <ImportantTitle title={data.title} fontSize={35} />

      <StyledSpacing height={20} />
      <CategoryTag
        additional="카테고리: "
        mainCategory={data.mainCategory}
        subCategory={data.subCategory}
        fontSize={13}
      />
      <DateTag
        additional="포스팅 작성 날짜: "
        date={data.createdAt}
        fontSize={13}
      />
      <DateTag
        additional="포스팅 업뎃 날짜: "
        date={data.updatedAt}
        fontSize={13}
      />

      <StyledSpacing height={15} />
      <Box fontSize={13} color={GRAY_1_COLOR}>
        {data.description ?? POST_PAGE_DESCRIPTION}
      </Box>
    </HeaderCoverImg>
  );
}
