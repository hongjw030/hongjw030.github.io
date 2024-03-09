import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PostFrontMatterType } from "@/types/PostType";
import { useRouter } from "next/router";

export default function PostingCard({
  title,
  mainCategory,
  subCategory,
  coverImg,
  date,
  description,
}: PostFrontMatterType) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => router.push(`/${title}_${date}`)}>
        <CardMedia
          component="img"
          height="140"
          image={coverImg ?? "/profile.jpg"}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
