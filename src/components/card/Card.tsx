/** 기본적으로 project 페이지나 blog 페이지에 들어가는 글 카드 컴포넌트
 */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

import { PostTitle } from "@/components/common/Titles";
import { DateTag, CategoryTag, TermTag } from "@/components/common/Tags";
import { EMPTY_DESCRIPTION } from "@/constants/texts";
import { MIN_WIDTH } from "@/constants";
import { GRAY_1_COLOR } from "@/constants/colors";
import { PostApiType } from "@/types/PostApiType";
import { ProjectApiType } from "@/types/ProjectApiType";
import {
  POST_LINK,
  PROJECT_LINK,
  PUBLIC_SETTING_IMPORT,
} from "@/constants/links";

export function PostingCard({ ...data }: PostApiType) {
  const router = useRouter();
  return (
    <Card
      sx={{
        minWidth: MIN_WIDTH,
        boxShadow: "none",
        borderBottom: `1px solid ${GRAY_1_COLOR}`,
      }}
    >
      <CardActionArea
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`${POST_LINK}/${data._id}`)}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          height="100"
          image={data.coverImg ?? `${PUBLIC_SETTING_IMPORT}/noImg.png`}
          alt={data.title}
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
          <PostTitle title={data.title} fontSize={16} />
          <DateTag date={data.createdAt} fontSize={12} />
          <CategoryTag
            mainCategory={data.mainCategory}
            subCategory={data.subCategory}
            fontSize={12}
          />
          <Typography color="text.secondary" fontSize={12}>
            {data.description ? data.description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ProjectCard({ ...data }: ProjectApiType) {
  const router = useRouter();

  return (
    <Card
      sx={{
        minWidth: MIN_WIDTH,
        boxShadow: "none",
        borderBottom: `1px solid ${GRAY_1_COLOR}`,
      }}
    >
      <CardActionArea
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`${PROJECT_LINK}/${data._id}`)}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          height="100"
          image={data.coverImg ?? `${PUBLIC_SETTING_IMPORT}/noImg.png`}
          alt={data.title}
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
            {data.title}
          </Box>
          <TermTag additional="제작 기간: " term={data.term} />
          <DateTag additional="포스팅 날짜: " date={data.createdAt} />
          <Typography color="text.secondary" fontSize={12}>
            {data.description ? data.description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
