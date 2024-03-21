/** 각 페이지 내부에 들어갈 타이틀 컴포넌트*/

import { Box } from "@mui/material";

interface ImportantDescriptionProps {
  content: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

interface InfoDescriptionProps {
  label: string;
  value: string;
  align?: "flex-start" | "flex-end" | "space-between" | "center";
  gap?: number;
  fontSize?: number;
  color?: string;
}

export function ImportantDescription({
  content,
  fontSize = 15,
  fontWeight = 400,
  color = "inherit",
}: ImportantDescriptionProps) {
  return (
    <Box fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {content}
    </Box>
  );
}

export function InfoDescription({
  label,
  value,
  fontSize = 15,
  align = "space-between",
  gap = 10,
  color = "inherit",
}: InfoDescriptionProps) {
  return (
    <Box
      display="flex"
      justifyContent={align}
      fontSize={fontSize}
      color={color}
      marginTop="5px"
      marginBottom="5px"
      gap={gap}
      whiteSpace="nowrap"
    >
      <Box fontWeight={700}>{label}</Box>
      <Box>{value}</Box>
    </Box>
  );
}
