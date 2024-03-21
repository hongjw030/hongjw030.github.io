/** 각 페이지 내부에 들어갈 타이틀 컴포넌트*/

import { Box } from "@mui/material";

interface TitleProps {
  title: string;
  fontSize?: number;
  fontWeight?: number;
}

export function PageTitle({
  title,
  fontSize = 20,
  fontWeight = 700,
}: TitleProps) {
  return (
    <Box fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </Box>
  );
}

export function PostTitle({
  title,
  fontSize = 15,
  fontWeight = 500,
}: TitleProps) {
  return (
    <Box
      fontSize={fontSize}
      fontWeight={fontWeight}
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

export function ImportantTitle({
  title,
  fontSize = 25,
  fontWeight = 500,
}: TitleProps) {
  return (
    <Box fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </Box>
  );
}
