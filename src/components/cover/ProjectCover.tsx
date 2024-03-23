// post/index.tsx 페이지 상단, 카테고리별 커버 컴포넌트

import { Box } from "@mui/material";

import HeaderCoverImg from "@/components/cover/HeadCoverImg";
import StyledSpacing from "@/components/common/StyledSpacing";
import { InfoDescription } from "@/components/common/Descriptions";
import { ImportantTitle } from "@/components/common/Titles";
import { DateTag } from "@/components/common/Tags";
import { GRAY_1_COLOR } from "@/constants/colors";
import { POST_PAGE_DESCRIPTION } from "@/constants/texts";
import { ProjectApiType } from "@/types/ProjectApiType";

export default function ProjectCover({ ...data }: ProjectApiType) {
  return (
    <HeaderCoverImg imgUrl={data.coverImg ? data.coverImg : undefined}>
      <ImportantTitle title={data.title} fontSize={30} />

      <StyledSpacing height={10} />
      <InfoDescription
        label="팀 규모: "
        value={data.isTeam}
        width={250}
        gap={1}
      />
      <InfoDescription
        label="프로젝트 기간: "
        value={data.term}
        width={250}
        gap={1}
      />

      <StyledSpacing height={20} />
      <DateTag
        additional="리뷰 작성 날짜: "
        date={data.createdAt}
        fontSize={13}
      />
      <DateTag
        additional="리뷰 업뎃 날짜: "
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
