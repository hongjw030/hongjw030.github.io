/** 기본 사이드바 컴포넌트.
 * sideProfile 컴포넌트,
 * commonList 컴포넌트(home, project, category)
 * blogList 컴포넌트(블로그 카테고리 모음)
 */

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { DRAWER_WIDTH, NAV_HEIGHT } from "@/constants";
import StyledSpacing from "@/components/common/StyledSpacing";
import CommonList from "@/components/mainDrawer/CommonList";
import BlogList from "@/components/mainDrawer/BlogList";
import SideProfile from "@/components/mainDrawer/SideProfile";
import useGetCategory from "@/hooks/useGetCategory";

export interface MainDrawerProp {
  current?: string;
  open?: boolean;
  handleDrawerClose: () => void;
}

export default function MainDrawer({
  current,
  open = true,
  handleDrawerClose,
}: MainDrawerProp) {
  const { data } = useGetCategory();

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <StyledSpacing justifyContent="flex-end" height={NAV_HEIGHT}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </StyledSpacing>

      <SideProfile />
      <StyledSpacing height={30} />

      <Divider />
      <CommonList current={current} />

      <Divider />
      {data && <BlogList categoryList={data} />}
    </Drawer>
  );
}
