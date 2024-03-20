/** 각 페이지 내부에 들어갈 타이틀 컴포넌트*/

import { Box } from "@mui/material";

interface TitleProps {
  title: string;
  fontSize?: number;
}
export function PageTitle({ title, fontSize = 20 }: TitleProps) {
  return (
    <Box fontSize={fontSize} fontWeight={700}>
      {title}
    </Box>
  );
}

export function PostTitle({ title, fontSize = 15 }: TitleProps) {
  return (
    <Box
      fontSize={fontSize}
      fontWeight={500}
      sx={{
        maxHeight: "55px",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {title}
    </Box>
  );
}
