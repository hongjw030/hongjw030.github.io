/** TODO - postingCard 컴포넌트 누를 때 onClick 속성의 이동하는거 그거 고치기
 *
 */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

import { MIN_WIDTH } from "@/constants";
import { EMPTY_DESCRIPTION } from "@/constants/alertText";
import { PostTitle } from "@/components/common/Titles";
import { DateTag, CategoryTag } from "@/components/common/Tags";
import { ProjectType } from "@/types/ProjectType";
import { PostApiType } from "@/types/PostApiType";

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
        onClick={() => router.push(`/#`)}
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

export function ProjectCard({ title, coverImg, date, description, slug }: any) {
  const router = useRouter();

  return (
    <Card sx={{ minWidth: MIN_WIDTH, padding: "15px" }}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => router.push(`/project/${slug}`)}
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
            작성일: {date}
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
