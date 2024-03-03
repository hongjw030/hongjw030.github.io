import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { drawerWidth } from "@/constants";
import StyledSpacing from "../common/StyledSpacing";
import CommonList from "./CommonList";
import BlogList from "./BlogList";
import SideProfile from "./SideProfile";
import { MainDrawerProp } from "./MainDrawer";

export default function MainDrawer({
  current,
  open = true,
  handleDrawerClose,
}: MainDrawerProp) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#3f5a79",
          color: "#efefef",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <StyledSpacing justifyContent="flex-end" height={64}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </StyledSpacing>

      <SideProfile />
      <StyledSpacing height={30} />

      <Divider />
      <CommonList current={current} />

      <Divider />
      <BlogList />
    </Drawer>
  );
}