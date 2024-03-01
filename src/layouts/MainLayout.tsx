import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

import Sidebar from "@/components/sidebar/Sidebar";
import Nav from "@/components/nav/Nav";

interface MainLayoutProps {
  selected: string;
  children: ReactNode;
}

export default function MainLayout({ selected, children }: MainLayoutProps) {
  return (
    <Grid
      container
      direction="row"
      sx={{ width: "100%", height: "100%" }}
      position="relative"
    >
      <Grid item>
        <Sidebar selected={selected} />
      </Grid>
      <Grid item sx={{ flexGrow: 1 }} display="flex" flexDirection="column">
        <Nav />
        <Box p={2}>{children}</Box>
      </Grid>
    </Grid>
  );
}
