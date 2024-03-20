import Image from "next/image";
import { Box, Typography } from "@mui/material";

import ProfileImg from "/public/profile.jpg";
import { BLOG_TITLE, JOB, NICKNAME } from "@/constants/user";
import { PageTitle } from "@/components/common/Titles";

export default function SideProfile() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "92px",
          height: "92px",
        }}
      >
        <Image
          src={ProfileImg}
          alt="profile img"
          width={92}
          height={92}
          priority
        />
      </Box>
      <PageTitle title={BLOG_TITLE} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography>{JOB}</Typography>
        <Typography fontSize={13}>{NICKNAME}</Typography>
      </Box>
    </Box>
  );
}
