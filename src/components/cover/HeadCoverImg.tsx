import { Box } from "@mui/material";
import { ReactNode } from "react";

import { HEADER_COVER_IMG_HEIGHT, MIN_WIDTH, PADDING } from "@/constants";
import { PUBLIC_SETTING_IMPORT } from "@/constants/links";
import { HEADER_COVER_IMG_Z, HEADER_TEXT_Z } from "@/constants/zIndexes";

interface HeaderCoverImgProps {
  children: ReactNode;
  imgUrl?: string;
}

export default function HeaderCoverImg({
  children,
  imgUrl,
}: HeaderCoverImgProps) {
  return (
    <Box
      display="flex"
      sx={{
        minWidth: "345px",
        width: "100%",
        height: HEADER_COVER_IMG_HEIGHT,
      }}
      position="relative"
    >
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        sx={{
          top: 0,
          margin: "50px",
          color: "white",
          zIndex: HEADER_TEXT_Z,
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          top: 0,
          backgroundImage:
            imgUrl ?? `url(${PUBLIC_SETTING_IMPORT}/homeHeader.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: HEADER_COVER_IMG_HEIGHT,
          minWidth: MIN_WIDTH,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { PADDING },
          zIndex: HEADER_COVER_IMG_Z,
          filter: "brightness(30%)",
        }}
      ></Box>
    </Box>
  );
}
