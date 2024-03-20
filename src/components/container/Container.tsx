import { styled } from "@mui/material/styles";

import { DRAWER_WIDTH, MAX_WIDTH } from "@/constants";

const Container = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  maxWidth: MAX_WIDTH,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  paddingTop: "10px",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingBottom: "100px",
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default Container;
