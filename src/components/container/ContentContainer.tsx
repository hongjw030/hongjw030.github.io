import { Box } from "@mui/material";
import { ReactNode } from "react";

import { MIN_WIDTH, POST_MAX_WIDTH } from "@/constants";

interface ContentContainerProps {
  children: ReactNode;
  gap?: number;
  align?: string;
}

export default function ContentContainer({
  children,
  gap = 50,
  align = "flex-start",
}: ContentContainerProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignContent={align}
      gap={`${gap}px`}
      sx={{
        minWidth: MIN_WIDTH,
        maxWidth: POST_MAX_WIDTH,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
