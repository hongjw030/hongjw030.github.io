/** 각 페이지 내부에 들어갈 타이틀 컴포넌트*/

import { Box } from "@mui/material";

interface PageTitleProps {
  title: string;
  fontSize?: number;
}
export function PageTitle({ title, fontSize = 20 }: PageTitleProps) {
  return (
    <Box fontSize={fontSize} fontWeight={700}>
      {title}
    </Box>
  );
}
