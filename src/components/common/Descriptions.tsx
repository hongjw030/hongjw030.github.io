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
  width?: number;
}

interface LongDescriptionProps {
  label: string;
  value: string;
  gap?: number;
  labelFontSize?: number;
  valueFontSize?: number;
  color?: string;
  width?: number;
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
  width,
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
      width={width ?? "100%"}
      gap={gap}
      whiteSpace="nowrap"
    >
      <Box fontWeight={700}>{label}</Box>
      <Box>{value}</Box>
    </Box>
  );
}

export function LongDescription({
  label,
  value,
  labelFontSize = 15,
  valueFontSize = 14,
  width,
  gap = 5,
  color = "inherit",
}: LongDescriptionProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      color={color}
      marginTop="5px"
      marginBottom="5px"
      width={width ?? "100%"}
      gap={gap}
    >
      <Box fontWeight={700} fontSize={labelFontSize}>
        {label}
      </Box>
      <Box fontWeight={300} fontSize={valueFontSize} color="black">
        {value}
      </Box>
    </Box>
  );
}
