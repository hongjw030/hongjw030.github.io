import { Box, Divider, Paper } from "@mui/material";

import { PageTitle } from "@/components/common/Titles";
import { InfoDescription, LongDescription } from "@/components/common/Descriptions";
import { POST_MAX_WIDTH, MIN_WIDTH } from "@/constants";
import { ProjectApiType } from "@/types/ProjectApiType";

export default function ProjectHeader({ ...data }: ProjectApiType) {
  return (
    <Paper
      sx={{
        minWidth: MIN_WIDTH,
        maxWidth: POST_MAX_WIDTH,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "24px",
      }}
    >
      <PageTitle fontSize={35} fontWeight={800} title={data.title} />

      <Divider />

      <Box>
        <InfoDescription
          label="팀 규모: "
          value={data.isTeam}
          gap={1}
          align="flex-start"
        />
        <InfoDescription
          label="프로젝트 기간: "
          value={data.term}
          gap={1}
          align="flex-start"
        />
        <InfoDescription
          label="깃허브 링크: "
          value={data.githubUrl}
          gap={1}
          align="flex-start"
        />
        <InfoDescription
          label="시연 링크: "
          value={data.developmentUrl}
          gap={1}
          align="flex-start"
        />
      </Box>

      <Divider />
      <LongDescription label="주요 기능: " value={data.functions} gap={1} />

      <LongDescription label="개요: " value={data.description} gap={1} />
    </Paper>
  );
}
