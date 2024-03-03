import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  HomeRounded as HomeIcon,
  Face4Rounded as FaceIcon,
  MenuRounded as MenuIcon,
  WebRounded as WebIcon,
} from "@mui/icons-material";

const COMMON_ARRAY = [
  { id: "home", name: "HOME", icon: <HomeIcon /> },
  { id: "about", name: "ABOUT", icon: <FaceIcon /> },
  { id: "project", name: "PROJECT", icon: <WebIcon /> },
  { id: "category", name: "CATEGORY", icon: <MenuIcon /> },
];

export default function BlogList() {
  return (
    <List>
      {COMMON_ARRAY.map((el) => (
        <ListItem key={el.id} disablePadding>
          <ListItemButton>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
