import Image from "next/image";
import { Box } from "@mui/material";

import ProfileImg from "/public/settings/profile.jpg";

import { BLOG_TITLE, JOB, NICKNAME } from "@/constants/user";
import { IMG_HEIGHT, IMG_WIDTH } from "@/constants";
import { PageTitle } from "@/components/common/Titles";

export default function SideProfile() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      sx={{
        flexShrink: 0,
        height: 215,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          width: IMG_WIDTH,
          height: IMG_HEIGHT,
        }}
      >
        <Image
          src={ProfileImg}
          alt="profile img"
          width={IMG_WIDTH}
          height={IMG_HEIGHT}
          priority
        />
      </Box>
      <PageTitle title={BLOG_TITLE} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <PageTitle title={JOB} fontSize={15} fontWeight={400} />
        <PageTitle title={NICKNAME} fontSize={13} fontWeight={300} />
      </Box>
    </Box>
  );
}
