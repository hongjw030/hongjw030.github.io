import { ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

import Container from "@/components/container/Container";
import Nav from "@/components/nav/Nav";
import MainDrawer from "@/components/mainDrawer/MainDrawer";
import StyledSpacing from "@/components/common/StyledSpacing";
import StyledBreadcrumbs from "@/components/common/StyledBreadcrumbs";
import CategoryCover from "@/components/cover/CategoryCover";
import { NAV_HEIGHT, PAGE_PADDING_BOTTOM } from "@/constants";
import useGetCurrentCategoryLoc from "@/hooks/apis/useGetCurrentCategoryLoc";
import useHandleDrawer from "@/hooks/useHandleDrawer";

interface CategoryLayoutProps {
  children?: ReactNode;
}
export default function CategoryLayout({ children }: CategoryLayoutProps) {
  const { isOpen, handleDrawerClose, handleDrawerOpen } =
    useHandleDrawer(false);

  const router = useRouter();
  const { mainPath, subPath } = router.query;
  const { categoryLocation, categoryLocationIsLoading } =
    useGetCurrentCategoryLoc(
      mainPath as string | undefined,
      subPath as string | undefined
    );

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
          {!categoryLocationIsLoading && categoryLocation && (
            <StyledBreadcrumbs {...categoryLocation} />
          )}
        </Toolbar>
      </Nav>

      <MainDrawer
        current="blogs"
        open={isOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Container open={isOpen}>
        <StyledSpacing height={NAV_HEIGHT} />
        <CategoryCover {...categoryLocation} />
        <Divider />
        {children}
        <StyledSpacing height={PAGE_PADDING_BOTTOM} />
      </Container>
    </Box>
  );
}
