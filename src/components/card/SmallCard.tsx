import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
import { MIN_WIDTH } from "@/constants";
import { PostApiType } from "@/types/PostApiType";
import { DateTag } from "../common/Tags";
import { EMPTY_DESCRIPTION } from "@/constants/texts";

export default function SmallCard({
  title,
  mainCategory,
  subCategory,
  coverImg,
  createdAt,
  description,
  _id,
}: PostApiType) {
  const router = useRouter();

  return (
    <Card sx={{ width: MIN_WIDTH, padding: "15px", height: "300px" }}>
      <CardActionArea onClick={() => router.push(`/${_id}`)}>
        <CardMedia
          component="img"
          height="100"
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
          <Box
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
          <DateTag date={createdAt} />
          <Typography color="text.secondary" fontSize={12}>
            {description ? description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
