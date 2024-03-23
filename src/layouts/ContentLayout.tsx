import { ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

import Container from "@/components/container/Container";
import Nav from "@/components/nav/Nav";
import MainDrawer from "@/components/mainDrawer/MainDrawer";
import StyledSpacing from "@/components/common/StyledSpacing";
import { PageTitle } from "@/components/common/Titles";
import { NAV_HEIGHT } from "@/constants";
import useHandleDrawer from "@/hooks/useHandleDrawer";

interface ContentLayoutProps {
  current?: "POST" | "PROJECT";
  children?: ReactNode;
}
export default function ContentLayout({
  current = "POST",
  children,
}: ContentLayoutProps) {
  const { isOpen, handleDrawerClose, handleDrawerOpen } =
    useHandleDrawer(false);

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
          <PageTitle title={current} fontWeight={500} fontSize={15} />
        </Toolbar>
      </Nav>

      <MainDrawer
        current={current}
        open={isOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={isOpen}>
        <StyledSpacing height={NAV_HEIGHT} />
        <Divider />
        {children}
      </Container>
    </Box>
  );
}
