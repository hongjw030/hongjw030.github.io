import { HEADER_HEIGHT, MIN_WIDTH } from "@/constants";
import { Box, Divider, Paper, Typography } from "@mui/material";
import StyledChip from "../common/StyledChip";
import { useRouter } from "next/router";

interface PostHeaderProps {
  title: string;
  mainId?: string;
  mainTitle?: string;
  subId?: string;
  subTitle?: string;
  date?: string;
  description?: string;
}

export default function PostHeader({
  title,
  mainId,
  mainTitle,
  subId,
  subTitle,
  date,
  description,
}: PostHeaderProps) {
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
      <Box fontSize={12}>{date}</Box>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <StyledChip label={"Blog"} color="info" size="small" url={`/blog`} />
        {mainTitle && (
          <StyledChip
            label={mainTitle}
            color="info"
            size="small"
            url={`/blog/${mainId}`}
          />
        )}
        {subTitle && (
          <StyledChip
            label={subTitle}
            color="info"
            size="small"
            url={`/blog/${mainId}/${subId}`}
          />
        )}
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