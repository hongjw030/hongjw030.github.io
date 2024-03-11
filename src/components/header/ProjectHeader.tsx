import { MIN_WIDTH } from "@/constants";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ProjectType } from "@/types/ProjectType";

export default function ProjectHeader({
  note,
  title,
  date,
  description,
  coverImg,
  members,
  developmentUrl,
  githubUrl,
  functions,
}: ProjectType) {
  return (
    <Paper
      sx={{
        minWidth: MIN_WIDTH,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "24px",
      }}
      elevation={2}
    >
      <Box fontWeight={800} fontSize={35}>
        {title}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      ></Box>

      <Divider />
      <Box>
        <Box>기간: {date ? date : "진행 중"}</Box>
        <Box>인원: {members ? members : "1인 개발"}</Box>
        <Box>
          깃허브 링크: {githubUrl ? githubUrl : "문제가 있어 잠시 내렸습니다."}
        </Box>
        <Box>
          시연 링크:
          {developmentUrl ? developmentUrl : "문제가 있어 잠시 내렸습니다."}
        </Box>
        <Box>
          주요 기능:
          {functions ? functions : "문제가 있어 잠시 내렸습니다."}
        </Box>
      </Box>

      {description && (
        <>
          <Divider />
          <Typography variant="body2">{description}</Typography>
        </>
      )}
    </Paper>
  );
}
