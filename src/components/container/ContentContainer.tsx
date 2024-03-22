import { Box } from "@mui/material";
import { ReactNode } from "react";

import { MAX_WIDTH, MIN_WIDTH } from "@/constants";

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
      padding="50px"
      justifyContent="flex-start"
      alignContent={align}
      gap={`${gap}px`}
      sx={{
        minWidth: MIN_WIDTH,
        maxWidth: MAX_WIDTH,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
