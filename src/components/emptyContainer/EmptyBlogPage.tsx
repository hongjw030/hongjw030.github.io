import { Box } from "@mui/material";

export default function EmptyBlogPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
      }}
    >
      아직 글이 없어요!! 😢
    </Box>
  );
}
