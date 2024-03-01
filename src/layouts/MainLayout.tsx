import { PropsWithChildren } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Sidebar />
      <div>{children}</div>
    </Box>
  );
}
