import {
  HomeRounded as HomeIcon,
  MenuRounded as MenuIcon,
  WebRounded as WebIcon,
} from "@mui/icons-material";
import { CATEGORY_LINK, PROJECT_LINK } from "./links";

const COMMON_ARRAY = [
  { path: "/", title: "HOME", icon: <HomeIcon /> },
  { path: PROJECT_LINK, title: "PROJECT", icon: <WebIcon /> },
  {
    path: CATEGORY_LINK,
    title: "CATEGORY",
    icon: <MenuIcon />,
  },
];

export default COMMON_ARRAY;
