import { Box } from "@mui/material";

import StyledSpacing from "@/components/common/StyledSpacing";
import { ImportantTitle } from "@/components/common/Titles";
import HeaderCoverImg from "@/components/homeCover/HeadCoverImg";
import { BLOG_TITLE, JOB_KOR } from "@/constants/user";
import { GRAY_1_COLOR } from "@/constants/colors";

export default function HomeCover() {
  return (
    <HeaderCoverImg>
      <ImportantTitle title={JOB_KOR} fontSize={25} />
      <ImportantTitle title={BLOG_TITLE} fontSize={40} />
      <StyledSpacing height={15} />
      <Box fontSize={14} color={GRAY_1_COLOR}>
        거침없이 앞으로 나아가는 장군감 개발자, 홍장군입니다!
        <br />
        어제보다 나은 내가 되기 위해 늘 노력하고 있습니다.
      </Box>
    </HeaderCoverImg>
  );
}
