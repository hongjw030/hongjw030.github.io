import { PropsWithChildren, ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";

interface MainLayoutProps {
  selected: string;
  children: ReactNode;
}

export default function MainLayout({ selected, children }: MainLayoutProps) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Sidebar selected={selected} />
      <div>{children}</div>
    </Box>
  );
}
