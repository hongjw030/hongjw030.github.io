import {
  HomeRounded as HomeIcon,
  MenuRounded as MenuIcon,
  WebRounded as WebIcon,
} from "@mui/icons-material";

const COMMON_ARRAY = [
  { id: "/", key: "home", name: "HOME", icon: <HomeIcon /> },
  { id: "/project", key: "project", name: "PROJECT", icon: <WebIcon /> },
  {
    id: "/category",
    key: "category",
    name: "CATEGORY",
    icon: <MenuIcon />,
  },
];

export default COMMON_ARRAY;
