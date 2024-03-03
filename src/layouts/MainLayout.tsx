import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import MainContainer from "@/components/mainDrawer/MainContainer";
import MainNav from "@/components/mainDrawer/MainNav";
import MainDrawer from "@/components/mainDrawer/MainDrawer.1";
import StyledSpacing from "@/components/common/StyledSpacing";

interface MainLayoutProps {
  children?: ReactNode;
  current?: string;
}
export default function MainLayout({ children, current }: MainLayoutProps) {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MainNav position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {current ?? "HOME"}
          </Typography>
        </Toolbar>
      </MainNav>

      <MainDrawer
        current={current}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <MainContainer open={open}>
        <StyledSpacing />
        <div>{children}</div>
      </MainContainer>
    </Box>
  );
}
