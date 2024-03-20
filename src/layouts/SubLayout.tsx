import { ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

import { MIN_WIDTH, NAV_HEIGHT, POST_MAX_WIDTH } from "@/constants";
import Container from "@/components/container/Container";
import Nav from "@/components/nav/Nav";
import MainDrawer from "@/components/mainDrawer/MainDrawer";
import StyledSpacing from "@/components/common/StyledSpacing";
import StyledBreadcrumbs from "@/components/common/StyledBreadcrumbs";
import useHandleDrawer from "@/hooks/useHandleDrawer";

interface SubLayoutProps {
  mainId?: string;
  mainTitle?: string;
  subId?: string;
  subTitle?: string;
  children?: ReactNode;
  headerComponent?: ReactNode;
}
export default function SubLayout({
  mainId,
  mainTitle,
  subId,
  subTitle,
  children,
  headerComponent,
}: SubLayoutProps) {
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
          <Box>
            <StyledBreadcrumbs
              mainId={mainId}
              mainTitle={mainTitle}
              subId={subId}
              subTitle={subTitle}
            />
          </Box>
        </Toolbar>
      </Nav>

      <MainDrawer
        current="blogs"
        open={isOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={isOpen}>
        <StyledSpacing height={NAV_HEIGHT} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: POST_MAX_WIDTH,
            width: "85vw",
            minWidth: MIN_WIDTH,
            gap: "20px",
          }}
        >
          {headerComponent}
          <Divider />
          {children}
        </Box>
      </Container>
    </Box>
  );
}
