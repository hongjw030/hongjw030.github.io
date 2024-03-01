import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  HomeRounded as HomeIcon,
  Face4Rounded as FaceIcon,
  MenuRounded as MenuIcon,
  DevicesRounded as DevicesIcon,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const MAIN_LINK_ARRAY = [
  { id: "", name: "HOME", icon: <HomeIcon /> },
  { id: "about", name: "ABOUT", icon: <FaceIcon /> },
  { id: "project", name: "PROJECT", icon: <DevicesIcon /> },
  { id: "category", name: "CATEGORY", icon: <MenuIcon /> },
];

export default function MainList({ selected = "" }) {
  const router = useRouter();

  return (
    <List>
      {MAIN_LINK_ARRAY.map((el) => (
        <ListItem key={el.name} disablePadding>
          <ListItemButton
            selected={el.id === selected}
            onClick={() => {
              router.push(`/${el.id}`);
            }}
          >
            <ListItemIcon>{el.icon}</ListItemIcon>
            <Typography fontSize={14}>{el.name}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
