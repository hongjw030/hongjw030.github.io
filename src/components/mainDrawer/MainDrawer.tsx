import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { DRAWER_WIDTH, NAV_HEIGHT } from "@/constants";
import StyledSpacing from "../common/StyledSpacing";
import CommonList from "./CommonList";
import BlogList from "./BlogList";
import SideProfile from "./SideProfile";
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
