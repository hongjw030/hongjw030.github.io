import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

import Profile from "../profile/Profile";
import MainList from "./mainList/MainList";
import SubList from "./subList/SubList";

export default function Sidebar({ selected = "" }) {
  return (
    <Box
      borderRight="1px solid #d9d9d9"
      sx={{ height: "100%" }}
      role="sidebar"
      width={210}
      display="flex"
      flexDirection="column"
      position="sticky"
      top={0}
      left={0}
      bottom={0}
      gap={2}
      p={2}
    >
      <Profile />
      <Divider />
      <MainList selected={selected} />
      <Divider />
      <SubList />
    </Box>
  );
}
