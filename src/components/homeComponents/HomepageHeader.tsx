import { MIN_WIDTH, POST_MAX_WIDTH } from "@/constants";
import { Box, Divider, Link, Paper } from "@mui/material";
import {
  HeaderContact,
  HeaderInfo,
  HeaderPrivacy,
  HeaderSkillBadgeList,
  HeaderTitle,
} from "./HeaderSubComponents";
import StyledSpacing from "../common/StyledSpacing";

export default function HomepageHeader() {
  return (
    <Box
      sx={{
        minWidth: "400px",
        maxWidth: POST_MAX_WIDTH,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <HeaderTitle />
      <HeaderInfo />

      <StyledSpacing height={20} />

      <Divider style={{ width: "100%" }}>About me</Divider>
      <Box display="flex" flexDirection="column" gap="30px">
        <HeaderPrivacy />
        <HeaderSkillBadgeList />
        <HeaderContact />
      </Box>
    </Box>
  );
}
