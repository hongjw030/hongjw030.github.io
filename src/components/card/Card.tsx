import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PostFrontMatterType } from "@/types/PostType";
import { useRouter } from "next/router";
import { MIN_WIDTH } from "@/constants";

interface PostingCardProps extends PostFrontMatterType {
  slug: string;
}

export default function PostingCard({
  title,
  mainCategory,
  subCategory,
  coverImg,
  date,
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
          sx={{ width: 140 }}
          height="140"
          image={coverImg ?? "/noImg.png"}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700" }}
          >
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            {date}
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
