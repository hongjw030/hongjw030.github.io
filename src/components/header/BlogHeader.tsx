import { HEADER_HEIGHT, MIN_WIDTH } from "@/constants";
import { Divider, Paper, Typography } from "@mui/material";
import React from "react";

interface BlogHeaderProps {
  title?: string;
  description?: string;
  note?: number;
  coverImg?: string;
}

export default function BlogHeader({
  title,
  description,
  note,
  coverImg,
}: BlogHeaderProps) {
  const imgUrl = `url(/${coverImg ?? "category/gradient.png"})`;

  return (
    <Paper
      sx={{
        minWidth: MIN_WIDTH,
        backgroundImage: imgUrl,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: HEADER_HEIGHT,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "15px",
      }}
      elevation={3}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "700" }}
      >
        {title ? title : "홍장군네 블로그"}
      </Typography>
      <Divider />
      <Typography color="text.secondary" fontSize={13}>
        {description ? description : "홍장군네 블로그 글 전체 보기"}
      </Typography>
    </Paper>
  );
}
