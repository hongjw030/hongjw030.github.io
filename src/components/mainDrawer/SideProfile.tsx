import ProfileImg from "/public/profile.jpg";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

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
      <Typography fontSize={20} sx={{ fontWeight: "bold" }}>
        홍장군의 개발 일지
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography>Frontend Developer</Typography>
        <Typography fontSize={13}>Hongjw</Typography>
      </Box>
    </Box>
  );
}
