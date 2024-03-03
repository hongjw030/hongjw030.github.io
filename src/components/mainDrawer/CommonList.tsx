import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  HomeRounded as HomeIcon,
  Face4Rounded as FaceIcon,
  MenuRounded as MenuIcon,
  WebRounded as WebIcon,
} from "@mui/icons-material";
import { Link } from "@mui/material";

const COMMON_ARRAY = [
  { id: "/", key: "home", name: "HOME", icon: <HomeIcon /> },
  { id: "/about", key: "about", name: "ABOUT", icon: <FaceIcon /> },
  { id: "/project", key: "project", name: "PROJECT", icon: <WebIcon /> },
  {
    id: "/category",
    key: "category",
    name: "CATEGORY",
    icon: <MenuIcon />,
  },
];

interface CommonListProps {
  current?: string;
}

export default function CommonList({ current }: CommonListProps) {
  return (
    <List
      sx={{
        "&& .Mui-selected, && .Mui-selected:hover": {
          bgcolor: "#a5afb8",
          color: "#373737",
          "&, & .muilistitemicon-root": {
            color: "373737",
          },
        },
      }}
    >
      {COMMON_ARRAY.map((el) => (
        <Link href={el.id} color="inherit" underline="none" key={el.id}>
          <ListItem disablePadding>
            <ListItemButton
              selected={current ? el.key === current : el.key === "home"}
            >
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
