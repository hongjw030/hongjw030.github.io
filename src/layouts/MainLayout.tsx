import { ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Container from "@/components/container/Container";
import Nav from "@/components/nav/Nav";
import MainDrawer from "@/components/mainDrawer/MainDrawer";
import StyledSpacing from "@/components/common/StyledSpacing";
import { NAV_HEIGHT } from "@/constants";
import useHandleDrawer from "@/hooks/useHandleDrawer";

interface MainLayoutProps {
  children?: ReactNode;
  current?: "CATEGORY" | "PROJECT";
}

export default function MainLayout({ children, current }: MainLayoutProps) {
  const { isOpen, handleDrawerClose, handleDrawerOpen } = useHandleDrawer(true);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CssBaseline />

      <Nav position="fixed" open={isOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {current ?? "HOME"}
          </Typography>
        </Toolbar>
      </Nav>

      <MainDrawer
        current={current}
        open={isOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={isOpen}>
        <StyledSpacing height={NAV_HEIGHT} />
        {children}
      </Container>
    </Box>
  );
}
