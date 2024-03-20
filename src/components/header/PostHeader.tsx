import { Box, Typography } from "@mui/material";

import { MIN_WIDTH } from "@/constants";
import StyledChip from "@/components/common/StyledChip";
import { DateTag } from "@/components/common/Tags";
import { PostTitle } from "@/components/common/Titles";

interface PostHeaderProps {
  title: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export default function PostHeader({
  title,
  createdAt,
  updatedAt,
  description,
}: PostHeaderProps) {
  return (
    <Box
      sx={{
        minWidth: MIN_WIDTH,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingTop: "20px",
      }}
    >
      <PostTitle title={title} fontSize={35} />
      <Box>
        <DateTag label="Created at :" date={createdAt} fontSize={12} />
        <DateTag label="Updated at :" date={updatedAt} fontSize={12} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <StyledChip label={"Blog"} color="info" size="small" url={`/blog`} />
        {/* {mainTitle && (
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
        )} */}
      </Box>
      {description && <Typography variant="body2">{description}</Typography>}
    </Box>
  );
}
