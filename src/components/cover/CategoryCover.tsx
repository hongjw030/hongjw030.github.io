// post/index.tsx 페이지 상단, 카테고리별 커버 컴포넌트

import { Box } from "@mui/material";

import HeaderCoverImg from "@/components/cover/HeadCoverImg";
import StyledSpacing from "@/components/common/StyledSpacing";
import { ImportantTitle } from "@/components/common/Titles";
import { GRAY_1_COLOR } from "@/constants/colors";
import { POST_PAGE_DESCRIPTION, POST_PAGE_TITLE } from "@/constants/texts";
import { SubCategoryApiType } from "@/types/CategoryApiType";

export default function CategoryCover({ ...data }: SubCategoryApiType) {
  return (
    <HeaderCoverImg imgUrl={data.coverImg ? data.coverImg : undefined}>
      <ImportantTitle
        title={`블로그 카테고리)${
          data?.groupPath ? ` ${data.groupPath},` : ""
        } ${data?.path ? ` ${data.path},` : "글 목록 전체보기"} `}
        fontSize={15}
      />
      <ImportantTitle title={data.title ?? POST_PAGE_TITLE} fontSize={40} />
      <StyledSpacing height={15} />
      <Box fontSize={14} color={GRAY_1_COLOR}>
        {data.description ?? POST_PAGE_DESCRIPTION}
      </Box>
    </HeaderCoverImg>
  );
}
