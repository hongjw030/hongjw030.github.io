import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Container from "@/components/container/Container";
import Nav from "@/components/nav/Nav";
import MainDrawer from "@/components/mainDrawer/MainDrawer";
import StyledSpacing from "@/components/common/StyledSpacing";
import StyledBreadcrumbs from "@/components/common/StyledBreadcrumbs";
import { NAV_HEIGHT } from "@/constants";

interface PostLayoutProps {
  mainId?: string;
  mainTitle?: string;
  subId?: string;
  subTitle?: string;
  children?: ReactNode;
}
export default function PostLayout({
  mainId,
  mainTitle,
  subId,
  subTitle,
  children,
}: PostLayoutProps) {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Nav position="fixed" open={open}>
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
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={open}>
        <StyledSpacing height={NAV_HEIGHT} />
        {children}
      </Container>
    </Box>
  );
}
