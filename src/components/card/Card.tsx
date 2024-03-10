import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { PostFrontMatterType } from "@/types/PostType";
import { useRouter } from "next/router";
import { MIN_WIDTH } from "@/constants";
import formatDate from "@/utils/formatDate";

interface PostingCardProps extends PostFrontMatterType {
  birthTime: string;
  slug: string;
}

export default function PostingCard({
  title,
  mainCategory,
  subCategory,
  coverImg,
  birthTime,
  description,
  slug,
}: PostingCardProps) {
  const router = useRouter();

  return (
    <Card sx={{ minWidth: MIN_WIDTH, padding: "15px" }}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`/${slug}`)}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          height="100"
          image={coverImg ?? "/noImg.png"}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              maxHeight: "55px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Box>
          <Typography variant="body2" component="div">
            작성일: {formatDate(birthTime)}
          </Typography>
          <Typography color="text.secondary" fontSize={12}>
            {description
              ? description
              : "description이 작성되지 않은 글입니다! 카드를 클릭해 본문 내용을 참조해주세요."}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
