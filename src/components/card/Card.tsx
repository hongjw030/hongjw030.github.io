/** 기본적으로 project 페이지나 blog 페이지에 들어가는 글 카드 컴포넌트
 */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

import { MIN_WIDTH } from "@/constants";
import { EMPTY_DESCRIPTION } from "@/constants/texts";
import { PostTitle } from "@/components/common/Titles";
import { DateTag, CategoryTag } from "@/components/common/Tags";
import { PostApiType } from "@/types/PostApiType";
import { ProjectApiType } from "@/types/ProjectApiType";
import { POST_LINK, PROJECT_LINK } from "@/constants/links";

export function PostingCard({
  _id,
  title,
  mainCategory,
  subCategory,
  coverImg,
  createdAt,
  description,
  content,
}: PostApiType) {
  const router = useRouter();
  return (
    <Card
      sx={{
        minWidth: MIN_WIDTH,
        boxShadow: "none",
        borderBottom: "1px solid #dfdfdf",
      }}
    >
      <CardActionArea
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`${POST_LINK}/${_id}`)}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          height="100"
          image={coverImg ?? "/public/noImg.png"}
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
          <PostTitle title={title} fontSize={16} />
          <DateTag date={createdAt} fontSize={12} />
          <CategoryTag
            mainCategory={mainCategory}
            subCategory={subCategory}
            fontSize={12}
          />
          <Typography color="text.secondary" fontSize={12}>
            {description ? description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ProjectCard({
  title,
  coverImg,
  createdAt,
  description,
  _id,
}: ProjectApiType) {
  const router = useRouter();

  return (
    <Card sx={{ minWidth: MIN_WIDTH, padding: "15px" }}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`${PROJECT_LINK}/${_id}`)}
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
          <DateTag date={createdAt} />
          <Typography color="text.secondary" fontSize={12}>
            {description ? description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
