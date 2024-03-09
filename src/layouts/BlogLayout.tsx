import { ReactNode, useState } from "react";
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
import { useAtom } from "jotai";
import { currentCategoryAtom } from "@/store/category";

interface BlogLayoutProps {
  children?: ReactNode;
}
export default function BlogLayout({ children }: BlogLayoutProps) {
  const [open, setOpen] = useState(false);
  const [current] = useAtom(currentCategoryAtom);

  const currentLocation = `BLOG > ${
    current?.currentMainCategoryAtom?.title ?? ""
  } > ${current?.currentSubCategoryAtom?.title ?? ""}`;

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
          <Typography variant="h6" noWrap component="div">
            {currentLocation}
          </Typography>
        </Toolbar>
      </Nav>

      <MainDrawer
        current="blogs"
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={open}>
        <StyledSpacing height={NAV_HEIGHT} />
        <div>{children}</div>
      </Container>
    </Box>
  );
}
