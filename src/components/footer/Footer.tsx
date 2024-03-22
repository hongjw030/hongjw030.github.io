import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

import { DesginedByTag } from "@/components/common/Tags";
import { FOOTER_HEIGHT } from "@/constants";
import { GRAY_1_COLOR } from "@/constants/colors";

export default function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={3}
      bottom={0}
      left={0}
      right={0}
      gap={1}
      sx={{
        width: "100%",
        height: FOOTER_HEIGHT,
        borderTop: `1px solid ${GRAY_1_COLOR}`,
      }}
    >
      <GitHubIcon />
      <DesginedByTag fontSize={12} />
    </Box>
  );
}
