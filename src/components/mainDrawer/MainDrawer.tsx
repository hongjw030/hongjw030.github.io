/** 기본 사이드바 컴포넌트.
 * sideProfile 컴포넌트,
 * commonList 컴포넌트(home, project, category)
 * blogList 컴포넌트(블로그 카테고리 모음)
 */

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { DRAWER_WIDTH } from "@/constants";
import { SCROLLBAR_COLOR } from "@/constants/colors";
import StyledSpacing from "@/components/common/StyledSpacing";
import CommonList from "@/components/mainDrawer/CommonList";
import BlogList from "@/components/mainDrawer/BlogList";
import SideProfile from "@/components/mainDrawer/SideProfile";
import useGetCategory from "@/hooks/apis/useGetCategory";

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
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: SCROLLBAR_COLOR,
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <StyledSpacing justifyContent="flex-end" height={50}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </StyledSpacing>

      <SideProfile />

      <Divider />
      <CommonList current={current} />

      <Divider />
      {data && <BlogList categoryList={data} />}
    </Drawer>
  );
}
