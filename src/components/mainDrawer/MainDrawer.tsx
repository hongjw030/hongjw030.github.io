import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { drawerWidth, navHeight } from "@/constants";
import StyledSpacing from "../common/StyledSpacing";
import CommonList from "./CommonList";
import BlogList from "./BlogList";
import SideProfile from "./SideProfile";
import useGetCategoryData from "@/hooks/InitialFetcher";
import { CategoryListAtom } from "@/store/category";
import { useAtom } from "jotai";

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
  const { categoryData } = useGetCategoryData();
  const [atom, setAtom] = useAtom(CategoryListAtom);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <StyledSpacing justifyContent="flex-end" height={navHeight}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </StyledSpacing>

      <SideProfile />
      <StyledSpacing height={30} />

      <Divider />
      <CommonList current={current} />

      <Divider />
      {atom && <BlogList categoryData={atom} />}
    </Drawer>
  );
}
