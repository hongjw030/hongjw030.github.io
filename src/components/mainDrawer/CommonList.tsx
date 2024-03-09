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
import { Link, Typography } from "@mui/material";

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
    <List>
      {COMMON_ARRAY.map((el) => (
        <Link href={el.id} color="inherit" underline="none" key={el.name}>
          <ListItem disablePadding>
            <ListItemButton
              selected={current ? el.name === current : el.name === "HOME"}
            >
              <ListItemIcon>{el.icon}</ListItemIcon>
              <Typography fontSize={12}>{el.name}</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
