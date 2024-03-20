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
import BlogHeader from "@/components/header/BlogHeader";
import useHandleDrawer from "@/hooks/useHandleDrawer";

interface BlogLayoutProps {
  children?: ReactNode;
  mainId?: string;
  mainTitle?: string;
  subId?: string;
  subTitle?: string;
  description?: string;
  note?: number;
  coverImg?: string;
}
export default function BlogLayout({
  children,
  mainId,
  mainTitle,
  subId,
  subTitle,
  description,
  note,
  coverImg,
}: BlogLayoutProps) {
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

        <BlogHeader
          title={subTitle ? subTitle : mainTitle}
          description={description}
          coverImg={coverImg}
        />
        <StyledSpacing height={30} />
        {children}
      </Container>
    </Box>
  );
}
